/* Sakura Client — build script (loader + 2 site payloads).
 * Outputs (all committed to GitHub):
 *   dist/sakura.loader.user.js  — the installable userscript (site detector, plain)
 *   dist/sakura.clutcher.js     — full client payload for clutcher.io (obfuscated)
 *   dist/sakura.astra.js        — clean overlay payload for astrastrike.fun (obfuscated)
 *   dist/sakura.kour.user.js    — standalone KourStrike menu (UWMK inlined, plain)
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
// @description  Sakura Client loader — full client on Clutcher.io, clean keystrokes overlay on AstraStrike
// @match        https://www.clutcher.io/*
// @match        https://clutcher.io/*
// @match        https://astrastrike.fun/*
// @match        https://*.astrastrike.fun/*
// @run-at       document-idle
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

// 1. Loader (plain — stays readable so Tampermonkey/users can audit what it fetches)
const loaderSrc = fs.readFileSync(path.join(here, "src", "loader.js"), "utf8");
if (!loaderSrc.includes("__SAKURA_RAW_BASE__")) throw new Error("src/loader.js missing __SAKURA_RAW_BASE__ placeholder");
write("dist/sakura.loader.user.js", HEADER + "\n" + loaderSrc.replaceAll("__SAKURA_RAW_BASE__", BASE));

// 2 + 3. Payloads (obfuscated)
for (const [src, rel] of [["src/clutcher.js", "dist/sakura.clutcher.js"], ["src/astra.js", "dist/sakura.astra.js"]]) {
  const code = fs.readFileSync(path.join(here, src), "utf8");
  write(rel, await obfuscate(code));
}

// 4. KourStrike standalone userscript (UWMK inlined, always plain).
// Must stay unobfuscated AND run at document-start: the UWMK preloader has to
// hook fetch/WebAssembly.instantiate before Unity's own boot scripts run.
// Obfuscating a 300KB+ webpack bundle would also blow up build time.
const HEADER_KOUR = `// ==UserScript==
// @name         Sakura Kour (kourstrike.io)
// @namespace    local.sakura.kour
// @version      ${pkg.version}
// @description  Sakura menu for KourStrike.io — combat/movement/visuals over UWMK hooks + overlay
// @match        https://kourstrike.io/*
// @match        https://www.kourstrike.io/*
// @run-at       document-start
// @grant        none
// @noframes
// ==/UserScript==
`;
{
  const uwmk = fs.readFileSync(path.join(here, "vendor", "uwmk.js"), "utf8");
  const kour = fs.readFileSync(path.join(here, "src", "kour.js"), "utf8");
  if (kour.includes("__SAKURA_RAW_BASE__")) throw new Error("src/kour.js must not fetch anything — keep it self-contained");
  write("dist/sakura.kour.user.js", HEADER_KOUR + "\n" + uwmk + "\n;\n" + kour);
}

console.log(`done. rawBase=${BASE} obfuscated=${!noObfuscate}`);
