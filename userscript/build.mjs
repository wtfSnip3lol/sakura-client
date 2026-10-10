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

const vendor = fs.readFileSync(path.join(here, "vendor", "uwmk.js"), "utf8");

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

console.log(`done. rawBase=${BASE} obfuscated=${!noObfuscate}`);
