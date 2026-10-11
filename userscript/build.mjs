/* Sakura Client — build script (universal loader + 3 site payloads).
 * Outputs (all committed to GitHub):
 *   dist/sakura.loader.user.js  — THE installable userscript. KourStrike is
 *                                 inlined (obfuscated payload + plain UWMK);
 *                                 Clutcher/Astra are fetched at idle.
 *   dist/sakura.clutcher.js     — full client payload for clutcher.io (obfuscated)
 *   dist/sakura.astra.js        — clean overlay payload for astrastrike.fun (obfuscated)
 *   dist/sakura.kour.user.js    — standalone KourStrike userscript, for kour only
 *
 * The loader's __SAKURA_RAW_BASE__ placeholder is replaced with your GitHub
 * raw URL. Set it in package.json → sakura.rawBase, or via SAKURA_RAW_BASE env.
 *
 * Usage:
 *   npm install        (once — installs javascript-obfuscator)
 *   npm run build      (obfuscated payloads, for GitHub / Tampermonkey)
 *   npm run dev        (plain payloads, for debugging)
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const pkg = JSON.parse(fs.readFileSync(path.join(here, "package.json"), "utf8"));
const noObfuscate = process.argv.includes("--no-obfuscate");

const RAW_BASE =
  process.env.SAKURA_RAW_BASE || pkg.sakura?.rawBase || "https://raw.githubusercontent.com/YOU/REPO/main/userscript/dist/";
const BASE = RAW_BASE.endsWith("/") ? RAW_BASE : RAW_BASE + "/";
if (BASE.includes("YOU/REPO")) {
  console.warn("warning: rawBase is still the placeholder — edit package.json → sakura.rawBase with your GitHub user/repo.");
}

const HEADER = `// ==UserScript==
// @name         Sakura Client
// @namespace    local.sakura.client
// @version      ${pkg.version}
// @description  Sakura Client — Clutcher.io full client, AstraStrike clean overlay, Overtide/KourStrike UWMK menu, Cookie Clicker Sakura visual recode
// @match        https://www.clutcher.io/*
// @match        https://clutcher.io/*
// @match        https://astrastrike.fun/*
// @match        https://*.astrastrike.fun/*
// @match        https://kourstrike.io/*
// @match        https://www.kourstrike.io/*
// @match        https://overtide.io/*
// @match        https://www.overtide.io/*
// @match        https://orteil.dashnet.org/cookieclicker*
// @run-at       document-start
// @grant        none
// @noframes
// ==/UserScript==
`;

const OBFUSCATE_OPTS = {
  compact: true,
  controlFlowFlattening: true,
  controlFlowFlatteningThreshold: 0.4,
  deadCodeInjection: true,
  deadCodeInjectionThreshold: 0.3,
  debugProtection: false,
  disableConsoleOutput: false,
  identifierNamesGenerator: "hexadecimal",
  numbersToExpressions: true,
  renameGlobals: false,
  selfDefending: false,
  simplify: true,
  splitStrings: true,
  splitStringsChunkLength: 5,
  stringArray: true,
  stringArrayThreshold: 0.6,
  stringArrayEncoding: ["base64"],
  transformObjectKeys: false,
  unicodeEscapeSequence: false
};

async function obfuscate(source) {
  if (noObfuscate) return source;
  const { default: JavaScriptObfuscator } = await import("javascript-obfuscator");
  return JavaScriptObfuscator.obfuscate(source, OBFUSCATE_OPTS).getObfuscatedCode();
}

function write(rel, content) {
  const out = path.join(here, rel);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, content + "\n");
  console.log(`wrote ${rel} (${fs.statSync(out).size} bytes)`);
}

const vendorPath = path.join(here, "vendor", "uwmk.js");
const vendor = fs.readFileSync(vendorPath, "utf8");

// UWMK builds each hook's WASM import name from the IL2CPP method name, and the
// binary writer emits field names as raw bytes rather than UTF-8. Unity's own
// names are ASCII so this never showed; an obfuscated name is not, and hooking
// one produced
//   CompileError: field name: no valid UTF-8 string @+20672
// which stops instantiation outright - the game does not load at all.
//
// The import name only has to be UNIQUE (it keys importObject.env and is
// written into the binary on both sides), so uwmk.js hex-encodes it. Guard the
// patch: a silently-reverted vendor file breaks the game in a way that reads
// like a Unity fault rather than ours.
if (!/const __asciiName =/.test(vendor)) {
  throw new Error(
    "build: vendor/uwmk.js is missing the ASCII import-name patch (__asciiName). " +
    "Restoring the raw method name writes non-UTF-8 bytes into the WASM and the " +
    "game fails to instantiate."
  );
}
if (/const injectName = useHook\.typeName \+ "xx" \+ useHook\.methodName/.test(vendor)) {
  throw new Error(
    "build: vendor/uwmk.js builds injectName from the raw method name again. " +
    "That writes non-UTF-8 bytes into the WASM import section."
  );
}
const _importNameLine = vendor.match(/const injectName = [^\n]*/);
console.log(`vendor patch present: ${_importNameLine ? "yes" : "NO"}`);

const kourSrc = fs.readFileSync(path.join(here, "src", "kour.js"), "utf8");
if (kourSrc.includes("__SAKURA_RAW_BASE__")) throw new Error("src/kour.js must not fetch anything — keep it self-contained");
const kourCode = await obfuscate(kourSrc);

// The inlined block that goes above the loader. Wrapped in a hostname check so
// UWMK's fetch/WebAssembly patches never install on clutcher.io or astra.
const KOUR_BLOCK = `
// ── kourstrike.io: UWMK + payload, inlined ──────────────────────────────
// Must execute at document-start, before Unity's boot scripts compile the
// WASM. UWMK is left un-obfuscated (third-party webpack bundle — obfuscating
// it is slow and risks breaking it); our payload is obfuscated above.
if (/(^|\\.)(kourstrike\\.io|overtide\\.io)$/.test(location.hostname || "")) {
${vendor}
;
${kourCode}
}
`;

// 1. Loader — the universal install. Kour inline, the rest fetched at idle.
const loaderSrc = fs.readFileSync(path.join(here, "src", "loader.js"), "utf8");
if (!loaderSrc.includes("__SAKURA_RAW_BASE__")) throw new Error("src/loader.js missing __SAKURA_RAW_BASE__ placeholder");
write("dist/sakura.loader.user.js", HEADER + KOUR_BLOCK + "\n" + loaderSrc.replaceAll("__SAKURA_RAW_BASE__", BASE));

// 2 + 3. Payloads (obfuscated)
for (const [src, rel] of [["src/clutcher.js", "dist/sakura.clutcher.js"], ["src/astra.js", "dist/sakura.astra.js"], ["src/cookie.js", "dist/sakura.cc.js"]]) {
  const code = fs.readFileSync(path.join(here, src), "utf8");
  write(rel, await obfuscate(code));
}

// 4. KourStrike standalone userscript — same payload, for people who only play
// kourstrike.io and don't want the full loader installed.
const HEADER_KOUR = `// ==UserScript==
// @name         Sakura Overtide (overtide.io / kourstrike.io)
// @namespace    local.sakura.kour
// @version      ${pkg.version}
// @description  Sakura menu for KourStrike.io — combat/movement/visuals over UWMK hooks + overlay
// @match        https://kourstrike.io/*
// @match        https://www.kourstrike.io/*
// @match        https://overtide.io/*
// @match        https://www.overtide.io/*
// @run-at       document-start
// @grant        none
// @noframes
// ==/UserScript==
`;
write("dist/sakura.kour.user.js", HEADER_KOUR + "\n" + vendor + "\n;\n" + kourCode);

// 5. SkillWarz client. Ships as ONE script, matched on the portal and on the
// game frame: the frame arms UWMK, hooks the game and postMessage()s its state
// up, while the portal paints the panel. A console snippet on the portal cannot
// read the frame — same-origin policy — so the script has to live in both.
//
// It deliberately does NOT supersede itself into the universal loader: that is
// @noframes and would never execute inside the game frame at all.
//
// The old v1.9.8 diag build is folded into this file (src/skillwarz.js) rather
// than shipped beside it. Two installed copies both patch
// WebAssembly.instantiate and both clear UnityCache; that conflict produced the
// old CONFLICT warning and is not worth keeping alive.
const HEADER_SW = `// ==UserScript==
// @name         Sakura SkillWarz
// @namespace    local.sakura.skillwarz
// @version      ${pkg.version}
// @description  SkillWarz client - ACTk-aware value reader and inspector. Runs in the game frame, reports to the page automatically.
// @match        https://www.crazygames.com/*
// @match        https://games.crazygames.com/*
// @match        https://*.game-files.crazygames.com/*
// @match        https://*.crazygames.com/*
// @run-at       document-start
// @grant        none
// ==/UserScript==
`;
const SW_VENDOR_BLOCK = `
// ── UWMK, game frame only ─────────────────────────────────────────────
// Inlined because the frame must patch fetch / WebAssembly.instantiate
// before Unity's boot scripts compile the WASM. Scoped to the game host so
// the CrazyGames portal keeps its own untouched fetch/WebAssembly.
// CrazyGames nests three documents and Unity actually executes in the THIRD
// one (<game>.game-files.crazygames.com), not in the games.crazygames.com
// loader. Gating on the loader meant UWMK loaded but never saw a .data fetch,
// so preload() waited forever and il2CppContext never existed.
var __swHost = location.hostname || "";
var __swPortal = /(^|\\.)www\\.crazygames\\.com$/.test(__swHost);
var __swWrapper = /(^|\\.)games\\.crazygames\\.com$/.test(__swHost);
if ((/(^|\\.)crazygames\\.com$/.test(__swHost) || /(^|\\.)game-files\\.crazygames\\.com$/.test(__swHost)) && !__swPortal && !__swWrapper) {
${vendor}
;
}
`;
const swSrcRaw = fs.readFileSync(path.join(here, "src", "skillwarz.js"), "utf8");

// The payload's own VERSION must track package.json. It used to be a hardcoded
// literal that nothing rewrote, so `report.version` read 2.9.3 while the payload
// was shipping 2.9.5 - and because the build badge compares that same constant
// against the arm-time tag, the badge could never turn red and the whole
// version-verify workflow was checking nothing. A THROW if the marker is missing
// or already substituted: a silent no-op here is exactly the bug this fixes.
const VERSION_MARKER = /var VERSION = "[^"]*";\s*\/\/__SKILLWARZ_VERSION__/;
if (!VERSION_MARKER.test(swSrcRaw)) {
  throw new Error(
    "build: src/skillwarz.js has no VERSION marker line " +
    "(`var VERSION = \"x.y.z\";   //__SKILLWARZ_VERSION__`). " +
    "The payload's reported version would drift from package.json again."
  );
}
const swSrc = swSrcRaw.replace(VERSION_MARKER, `var VERSION = "${pkg.version}";   //__SKILLWARZ_VERSION__`);
if (!swSrc.includes(`var VERSION = "${pkg.version}";`)) {
  throw new Error(`build: failed to stamp VERSION ${pkg.version} into the SkillWarz payload`);
}
console.log(`stamped payload VERSION ${pkg.version}`);

// The method map must exist before armUwmk() runs, because registerViewHooks()
// reads it during the same tick UWMK applies hooks. If the marker block is
// missing or empty the view hooks silently register zero times and the angles
// fall back to guessing with no visible symptom - which is the exact failure
// this map exists to remove.
const methodStart = swSrc.indexOf('/*__SKILLWARZ_METHODS_START__*/');
const methodEnd = swSrc.indexOf('/*__SKILLWARZ_METHODS_END__*/');
if (methodStart === -1 || methodEnd === -1 || methodEnd < methodStart) {
  throw new Error("build: src/skillwarz.js is missing the SK_METHODS markers. "
    + "Run: node tools/gen-skillwarz-methods.mjs <dump.cs> MouseLook,FPScontroller,TDM_GameManager src/skillwarz-methods.gen.js && "
    + "node tools/inject-skillwarz-methods.mjs");
}
const methodBlock = swSrc.slice(methodStart, methodEnd);
const methodCount = (methodBlock.match(/"wasmParams"/g) || []).length;
if (methodCount === 0) {
  throw new Error("build: the SK_METHODS block is empty. The view hooks would register "
    + "zero times and the pitch/yaw read would silently fall back to a struct guess.");
}
if (methodBlock.indexOf('var SK_METHODS = ') === -1) {
  throw new Error("build: the SK_METHODS block has no `var SK_METHODS =` assignment in it.");
}
if (methodStart > swSrc.indexOf('(function armUwmk()')) {
  throw new Error("build: SK_METHODS is defined AFTER armUwmk(). It is read during "
    + "arming, and a `var` assigned later is undefined at that moment - the view "
    + "hooks would register zero times.");
}
console.log(`method map: ${methodCount} methods, defined before arming`);
write("dist/sakura.skillwarz.user.js", HEADER_SW + SW_VENDOR_BLOCK + "\n" + await obfuscate(swSrc));

// 6. Mirror the Cookie Clicker payload into the launcher's resources/ folder so
// `npm run build` here keeps the Electron app in sync. The launcher resolves
// it as resources/sakura-cookieclicker.js (see src/main.js GAMES.cookieclicker).
try {
  const launcherRes = path.join(here, "..", "resources");
  fs.mkdirSync(launcherRes, { recursive: true });
  fs.writeFileSync(path.join(launcherRes, "sakura-cookieclicker.js"), await obfuscate(fs.readFileSync(path.join(here, "src", "cookie.js"), "utf8")) + "\n");
  console.log(`mirrored sakura-cookieclicker.js -> ${launcherRes}`);
} catch (e) {
  console.warn("warning: could not mirror cookie clicker payload into launcher resources:", e.message);
}

console.log(`done. rawBase=${BASE} obfuscated=${!noObfuscate}`);
