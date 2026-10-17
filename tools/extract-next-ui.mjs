/* Generates userscript/src/next/panel.gen.js from the current client.
 *
 * The panel is the one thing that must NOT drift: it is 217 rows, a nav tree and
 * a 20 KB stylesheet that the user already knows by heart. So the definitions are
 * lifted verbatim (CSS, nav, module tiles, module cards) and emitted as data for
 * the rewritten engine to render. Everything else in the client is new code.
 *
 * Run: node tools/extract-next-ui.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(here, "..");
const src = fs.readFileSync(path.join(root, "userscript", "src", "clutcher.js"), "utf8");

// bracket-matched slice: everything between the marker and the matching closer
function bracketSlice(marker, open = "[", close = "]", what = marker) {
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

// ── CSS ───────────────────────────────────────────────────────────────────
const css = (() => {
  const i = src.indexOf("var CSS = `");
  if (i < 0) throw new Error("extract: CSS not found");
  const from = i + "var CSS = `".length;
  const j = src.indexOf("\n  `;", from);
  if (j < 0) throw new Error("extract: CSS end not found");
  return src.slice(from, j);
})();
if (css.length < 8000) throw new Error(`extract: CSS looks too short (${css.length})`);

// ── nav tree ──────────────────────────────────────────────────────────────
const nav = bracketSlice("const NAV = [", "[", "]", "NAV");
if (!nav.includes("children")) throw new Error("extract: NAV has no children — marker mismatch?");

// ── module tiles (MODS grid) ──────────────────────────────────────────────
const tiles = bracketSlice("var LUNAR_MODULES = [", "[", "]", "LUNAR_MODULES");
const tileCount = (tiles.match(/\{ tab:/g) || []).length;
if (tileCount < 30) throw new Error(`extract: only ${tileCount} module tiles`);

// ── settings cards: split cardsFor() into moduleCard(...) calls ───────────
const cardsBody = (() => {
  const i = src.indexOf("function cardsFor(id) {");
  if (i < 0) throw new Error("extract: cardsFor not found");
  let depth = 0, started = false;
  for (let j = i; j < src.length; j++) {
    const ch = src[j];
    if (ch === "{") { depth++; started = true; }
    else if (ch === "}") { depth--; if (started && depth === 0) return src.slice(i, j + 1); }
  }
  throw new Error("extract: cardsFor braces never closed");
})();

// split on top-level `moduleCard(` occurrences (paren-balanced)
const chunks = [];
{
  const re = /moduleCard\(/g;
  let m;
  while ((m = re.exec(cardsBody))) {
    const start = m.index;
    let depth = 0, j = start + "moduleCard".length;
    for (; j < cardsBody.length; j++) {
      const ch = cardsBody[j];
      if (ch === "(") depth++;
      else if (ch === ")") { depth--; if (depth === 0) { j++; break; } }
    }
    chunks.push({ at: start, src: cardsBody.slice(start, j) });
  }
}
if (chunks.length < 30) throw new Error(`extract: only ${chunks.length} module cards`);

// ── settings schema (every key + default, verbatim) ───────────────────────
const defaultsBlock = bracketSlice("var DEFAULTS = {", "{", "}", "DEFAULTS");
const defaultKeys = (defaultsBlock.match(/^\s{4}[A-Za-z_$][\w$]*:/gm) || []).length;
if (defaultKeys < 200) throw new Error(`extract: only ${defaultKeys} defaults parsed`);
const storeKey = (src.match(/localStorage\.getItem\("([^"]+)"\)/) || [])[1] || "sakura.minimal.v1";

// which tab does each chunk belong to? (`if (id === "hud") { return [ ... ] }`)
const tabAt = (at) => {
  const before = cardsBody.slice(0, at);
  const m = [...before.matchAll(/id === "([a-z0-9_]+)"/g)];
  return m.length ? m[m.length - 1][1] : "unknown";
};

// free identifiers the row/control source needs from the engine
const BUILTIN = new Set([
  "true", "false", "null", "undefined", "settings", "save", "return", "if", "else", "typeof", "new",
  "Array", "Object", "Number", "String", "Math", "JSON", "Date", "isFinite", "parseInt", "parseFloat",
  "row", "moduleCard", "selectField", "rangeField", "toggleSwitch", "colorField", "textField", "keyField",
  "buttonField", "checkField", "note", "const", "let", "var", "function", "this", "of", "in", "for",
  "v", "w", "e", "i", "n", "s", "t", "a", "b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "o", "p", "q", "r", "u", "x", "y", "z"
]);
const freeIds = new Set();
for (const c of chunks) {
  const stripped = c.src
    .replace(/"(?:[^"\\]|\\.)*"/g, '""')
    .replace(/'(?:[^'\\]|\\.)*'/g, "''")
    .replace(/`(?:[^`\\]|\\.)*`/g, "``")
    .replace(/\/\/[^\n]*/g, "")
    .replace(/\.([A-Za-z_$][\w$]*)/g, ".");           // property reads
  for (const m of stripped.matchAll(/\b([A-Za-z_$][\w$]*)\s*(\(|\.|,|\)|\]|\}|\s*:)/g)) {
    const id = m[1];
    if (!BUILTIN.has(id)) freeIds.add(id);
  }
}

const tabCounts = {};
for (const c of chunks) { const t = tabAt(c.at); tabCounts[t] = (tabCounts[t] || 0) + 1; }

// ── write the generated module ────────────────────────────────────────────
const esc = (s) => s.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");

const out = `// GENERATED by tools/extract-next-ui.mjs — do not edit by hand.
// Panel definitions lifted verbatim from the v2 client so the UI cannot drift:
// stylesheet, nav tree, MODS tiles, and every settings card.
var NEXT_CSS = \`${esc(css)}\`;

var NEXT_NAV = [
${nav.trimEnd().replace(/^\s{6}/gm, "")}
];

var NEXT_STORE_KEY = ${JSON.stringify(storeKey)};

var NEXT_DEFAULTS = {
${defaultsBlock.replace(/^\s{4}/gm, "  ").trimEnd()}
};

var NEXT_TILES = [
${tiles.trimEnd().replace(/^\s{6}/gm, "")}
];

var NEXT_CARDS = {
${Object.entries(tabCounts).map(([t]) => `  ${JSON.stringify(t)}: [],`).join("\n")}
};
(function () {
  var cards = NEXT_CARDS;
  ${chunks.map((c) => `cards[${JSON.stringify(tabAt(c.at))}].push(${JSON.stringify(c.src)});`).join("\n  ")}
})();
`;

const dest = path.join(root, "userscript", "src", "next", "panel.gen.js");
fs.mkdirSync(path.dirname(dest), { recursive: true });
fs.writeFileSync(dest, out);
console.log(`wrote ${path.relative(root, dest)} (${out.length} bytes)`);
console.log(`css: ${css.length} chars | nav entries: ${(nav.match(/\{ id:/g) || []).length} | tiles: ${tileCount} | cards: ${chunks.length} | settings: ${defaultKeys}`);
console.log("cards per tab:", JSON.stringify(tabCounts));
console.log("\nengine helpers the panel source expects:");
console.log([...freeIds].sort().join(", "));
