/* Sakura client — build script for the rewrite.
 *
 * Bundles src/next/* into ONE IIFE, in the order the v2 client relied on:
 * defaults first (the settings schema), then the engine, then the panel, then
 * boot. The panel expects bare names in that shared scope, so the wrapper is a
 * plain sloppy-mode IIFE — no strict mode, no modules, no eval.
 *
 * Outputs:
 *   dist/sakura.clutch.next.user.js   installable userscript (obfuscated)
 *   dist/sakura.clutch.next.dev.js    un-obfuscated, for the browser harness
 *
 * Usage (from userscript/):
 *   node build-next.mjs                 both
 *   node build-next.mjs --no-obfuscate  plain only (fast)
 *   node build-next.mjs --check         syntax-check the bundle, write nothing
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const pkg = JSON.parse(fs.readFileSync(path.join(here, "package.json"), "utf8"));
const args = process.argv.slice(2);
const noObfuscate = args.includes("--no-obfuscate");
const checkOnly = args.includes("--check");

// Order matters: defaults define DEFAULTS, core reads it, boot aliases names the
// panel resolves at call time. defaults.ext.js must sit between the generated
// schema and core, so the new modules' settings are part of the schema.
const MODULES = [
  ["src/next/defaults.gen.js", "settings schema (generated)"],
  ["src/next/defaults.ext.js", "settings schema (new modules)"],
  ["src/next/core.js", "engine core"],
  ["src/next/game.js", "game adapter"],
  ["src/next/features/perf.js", "feature: perf dashboard + overlay painters"],
  ["src/next/features/keys.js", "feature: rebindable hotkeys"],
  ["src/next/features/move.js", "feature: movement meter"],
  ["src/next/features/profiles.js", "feature: config profiles"],
  ["src/next/ext.js", "feature: EXTRA tab in the Lunar panel"],
  ["src/next/panel.gen.js", "panel (generated, lifted verbatim)"],
  ["src/next/boot.js", "boot seam"]
];

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
  renameGlobals: false,          // the bundle shares one scope with itself only
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

const HEADER = `// ==UserScript==
// @name         Sakura Client (next)
// @namespace    local.sakura.client
// @version      ${pkg.version}
// @description  Sakura Client — Clutcher.io full client (rewrite: new engine, same UI)
// @match        https://www.clutcher.io/*
// @match        https://clutcher.io/*
// @run-at       document-start
// @grant        none
// @noframes
// ==/UserScript==
`;

// ── assemble ───────────────────────────────────────────────────────────────
let body = "";
const manifest = [];
for (const [rel, what] of MODULES) {
  const file = path.join(here, rel);
  if (!fs.existsSync(file)) throw new Error(`build-next: missing module ${rel}`);
  const text = fs.readFileSync(file, "utf8");
  body += `\n// ── ${rel} — ${what} ──\n${text}\n`;
  manifest.push(`${rel}  ${(text.length / 1024).toFixed(1)} KB`);
}

// Sloppy mode on purpose: the panel block is lifted verbatim from the v2 client
// and the whole bundle shares one scope, like the v2 client did.
const bundle = `(function () {\n${body}\n})();\n`;

if (checkOnly) {
  const tmp = path.join(here, "dist", ".sakura.next.check.js");
  fs.mkdirSync(path.dirname(tmp), { recursive: true });
  fs.writeFileSync(tmp, bundle);
  console.log("wrote", path.relative(here, tmp), "for syntax checking");
} else {
  const outDir = path.join(here, "dist");
  fs.mkdirSync(outDir, { recursive: true });

  const devPath = path.join(outDir, "sakura.clutch.next.dev.js");
  fs.writeFileSync(devPath, HEADER + bundle);
  console.log(`wrote dist/sakura.clutch.next.dev.js (${fs.statSync(devPath).size} bytes)`);

  if (!noObfuscate) {
    const { default: JavaScriptObfuscator } = await import("javascript-obfuscator");
    const code = JavaScriptObfuscator.obfuscate(bundle, OBFUSCATE_OPTS).getObfuscatedCode();
    const outPath = path.join(outDir, "sakura.clutch.next.user.js");
    fs.writeFileSync(outPath, HEADER + code + "\n");
    console.log(`wrote dist/sakura.clutch.next.user.js (${fs.statSync(outPath).size} bytes)`);
  }
}

console.log(`\nmodules:\n  ${manifest.join("\n  ")}`);
console.log(`bundle: ${(bundle.length / 1024).toFixed(1)} KB`);
