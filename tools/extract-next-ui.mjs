/* Generates userscript/src/next/defaults.gen.js and panel.gen.js from the v2 client.
 *
 * "Same UI" is a hard requirement, so the panel is not re-typed — it is lifted
 * verbatim: the stylesheet, the nav tree, the MODS tiles, every settings card
 * (cardsFor), the interface card, the control vocabulary (row / selectField /
 * rangeField / ...) and the panel shell. Same for the settings schema: all 356
 * keys and their defaults come straight out of DEFAULTS.
 *
 * The lifted code is emitted as plain top-level statements, which is exactly how
 * the v2 client was built: one scope, bare names. The bundle therefore
 * concatenates the engine and the panel into a single IIFE, and the panel
 * resolves `settings`, `save`, `getGame`, ... against the engine's aliases.
 * Nothing is proxied, nothing is eval'd, and `node --check` validates it.
 *
 * Everything the rewrite owns — the scheduler, the overlay, the game adapter and
 * every visual feature — is new code under src/next/*.
 *
 * Run: node tools/extract-next-ui.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(here, "..");
const src = fs.readFileSync(path.join(root, "userscript", "src", "clutcher.js"), "utf8");

// ── primitives ─────────────────────────────────────────────────────────────
function liftFn(name) {
  const re = new RegExp(`^[ \\t]*(?:async\\s+)?function\\s+${name}\\s*\\(`, "m");
  const m = re.exec(src);
  if (!m) throw new Error(`lift: function ${name} not found`);
  let depth = 0, started = false;
  for (let j = m.index; j < src.length; j++) {
    const ch = src[j];
    if (ch === "{") { depth++; started = true; }
    else if (ch === "}") { depth--; if (started && depth === 0) return src.slice(m.index, j + 1); }
  }
  throw new Error(`lift: ${name} never closed`);
}

function liftVar(name) {
  const re = new RegExp(`^[ \\t]*(?:var|const|let)\\s+${name}\\s*=`, "m");
  const m = re.exec(src);
  if (!m) throw new Error(`lift: var ${name} not found`);
  let depth = 0, started = false;
  for (let j = m.index; j < src.length; j++) {
    const ch = src[j];
    if (ch === "{" || ch === "[" || ch === "(") { depth++; started = true; }
    else if (ch === "}" || ch === "]" || ch === ")") depth--;
    else if (ch === ";" && started && depth === 0) return src.slice(m.index, j + 1);
  }
  throw new Error(`lift: ${name} never terminated`);
}

function bracketSlice(marker, open, close, what) {
  const i = src.indexOf(marker);
  if (i < 0) throw new Error(`extract: start marker not found for ${what}`);
  const from = i + marker.length - 1;
  if (src[from] !== open) throw new Error(`extract: expected ${open} at marker for ${what}`);
  let depth = 0;
  for (let j = from; j < src.length; j++) {
    const ch = src[j];
    if (ch === open) depth++;
    else if (ch === close) { depth--; if (depth === 0) return src.slice(from + 1, j); }
  }
  throw new Error(`extract: ${what} never closed`);
}

const esc = (s) => s.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");

// ── assets ─────────────────────────────────────────────────────────────────
const css = (() => {
  const i = src.indexOf("var CSS = `");
  if (i < 0) throw new Error("extract: CSS not found");
  const from = i + "var CSS = `".length;
  const j = src.indexOf("\n  `;", from);
  if (j < 0) throw new Error("extract: CSS end not found");
  return src.slice(from, j);
})();
if (css.length < 8000) throw new Error(`extract: CSS too short (${css.length})`);

const nav = bracketSlice("const NAV = [", "[", "]", "NAV");
if (!nav.includes("children")) throw new Error("extract: NAV shape changed");
const tileCount = (bracketSlice("var LUNAR_MODULES = [", "[", "]", "LUNAR_MODULES").match(/\{ tab:/g) || []).length;
if (tileCount < 30) throw new Error(`extract: only ${tileCount} module tiles`);

// The wrapper must really contain the lunar panel and the cards, otherwise the
// lift below would silently ship a panel with no settings in it.
const wrapper = liftFn("buildPanel");
if (wrapper.split("\n").length < 900) throw new Error("extract: buildPanel no longer wraps the panel — lift list is stale");
for (const nested of ["function buildLunarPanel", "function cardsFor", "function interfaceCard", "function rebuildPanel"]) {
  if (!wrapper.includes(nested)) throw new Error(`extract: buildPanel no longer contains ${nested} — lift list is stale`);
}
const betaNav = (src.match(/if \(betaUnlocked\) CATEGORIES\.push\([^\n]*\);/m) || [])[0];
if (!betaNav) throw new Error("extract: beta nav push not found");
if (/^\s{2}(?:var|const|let)\s+(?:NAV|LN_ICONS|LUNAR_MODULES)\b/m.test(src)) throw new Error("extract: NAV/LN_ICONS/LUNAR_MODULES moved to top level — lift them explicitly again");

// ── settings schema (all 356 keys, verbatim) ───────────────────────────────
const defaultsBlock = bracketSlice("var DEFAULTS = {", "{", "}", "DEFAULTS");
const defaultKeys = (defaultsBlock.match(/^\s{4}[A-Za-z_$][\w$]*:/gm) || []).length;
if (defaultKeys < 200) throw new Error(`extract: only ${defaultKeys} defaults parsed`);
const storeKey = (src.match(/localStorage\.getItem\("([^"]+)"\)/) || [])[1] || "sakura.minimal.v1";

// ── the lifted UI layer ────────────────────────────────────────────────────
// buildPanel is the wrapper: it declares NAV / LN_ICONS / LUNAR_MODULES itself
// and nests show, rebuildPanel, interfaceCard, buildLunarPanel, cardsFor and
// note inside its body (lines 3798-4845 of the v2 client). Lifting it verbatim
// brings all of those with it — lifting them separately duplicated every row
// and tile twice over. Only the top-level helpers are lifted individually.
const FN = [
  "sakuraLogoSvg", "editByHand", "shieldKeys", "ico", "toggleSwitch", "selectField", "numberField",
  "rangeField", "chLoadGrid", "chLineCells", "pixelEditor", "colorField", "textField", "actionBtn",
  "row", "moduleCard", "buildPanel", "saveUi", "menuStock", "applyMenuVars", "setMenuOpen", "toggleMenu"
];
const lifted = FN.map(liftFn);
const liftedLines = lifted.reduce((a, t) => a + t.split("\n").length, 0);

// ICONS and CATEGORIES are declared above buildPanel, so they are lifted whole;
// NAV / LN_ICONS / LUNAR_MODULES come with buildPanel's own body.
const panel = `// GENERATED by tools/extract-next-ui.mjs — do not edit by hand.
// The panel, lifted verbatim from the v2 client so the UI cannot drift.
// Runs in the bundle's scope, exactly like the v2 client did: bare names.
var CSS = \`${esc(css)}\`;

// State the panel owns. host/shadow point at the engine's single shadow root,
// assigned in boot before the panel is first built.
var host = null;
var shadow = null;
var overlay = null;
var betaUnlocked = true;
var hudEdit = false;
var hudDrag = null;
var menuOpen = false;
var uiState = {};
var panelEl = null;

${liftVar("ICONS")}
${liftVar("CATEGORIES")}
${betaNav.replace(/^\s{2}/m, "")}
var CHDRAW_N = ${liftVar("CHDRAW_N").replace(/^[ \t]*(?:var|const|let)\s+CHDRAW_N\s*=\s*/, "").replace(/;$/, "")}
${liftVar("isEditable")}

${lifted.join("\n\n")}
`;

const defaults = `// GENERATED by tools/extract-next-ui.mjs — do not edit by hand.
// Every settings key and its default, verbatim from the v2 client.
var DEFAULTS = {
${defaultsBlock.replace(/^\s{4}/gm, "  ").trimEnd()}
};
var SAKURA_STORE_KEY = ${JSON.stringify(storeKey)};
`;

const dir = path.join(root, "userscript", "src", "next");
fs.mkdirSync(dir, { recursive: true });
fs.writeFileSync(path.join(dir, "panel.gen.js"), panel);
fs.writeFileSync(path.join(dir, "defaults.gen.js"), defaults);

console.log(`panel.gen.js   ${(panel.length / 1024).toFixed(1)} KB  (css ${css.length} chars, ${FN.length} functions / ${liftedLines} lines lifted, incl. the panel wrapper)`);
console.log(`defaults.gen.js ${(defaults.length / 1024).toFixed(1)} KB  (${defaultKeys} settings keys, store "${storeKey}")`);
console.log(`\nthe panel expects these bare names from the engine (boot.js):`);
console.log("  settings, save, getGame, applyPreset, chApplyPreset, stReset, hudSes, wxStatusEl, wxCoverEl");
