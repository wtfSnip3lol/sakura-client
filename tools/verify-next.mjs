/* Verifies the rewrite's generated half before it is built.
 *
 * The panel is generated from the v2 client, so a drift there would silently
 * change the UI. This asserts the contract instead of trusting it:
 *   - the settings schema still has every key
 *   - every MODS tile and every lifted panel function is still present
 *   - the bundle parses and exposes the engine + panel surface
 *   - the engine keeps its perf properties (gates, cadences, single rAF,
 *     deferred persistence)
 *
 * Usage (from userscript/):  node ../tools/verify-next.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(here, "..");
const next = (f) => path.join(root, "userscript", "src", "next", f);
const read = (f) => fs.readFileSync(next(f), "utf8");

let failures = 0;
const check = (name, ok, detail = "") => {
  console.log(`${ok ? "  ok  " : "  FAIL"}  ${name}${detail ? "  —  " + detail : ""}`);
  if (!ok) failures++;
};

const panel = read("panel.gen.js");
const defaults = read("defaults.gen.js");
const core = read("core.js");
const game = read("game.js");
const boot = read("boot.js");

// ── settings schema parity ─────────────────────────────────────────────────
const V2 = fs.readFileSync(path.join(root, "userscript", "src", "clutcher.js"), "utf8");
const v2Defaults = (() => {
  const i = V2.indexOf("var DEFAULTS = {");
  let d = 0, started = false;
  for (let j = i; j < V2.length; j++) {
    const c = V2[j];
    if (c === "{") { d++; started = true; }
    else if (c === "}") { d--; if (started && d === 0) return V2.slice(i, j); }
  }
  return "";
})();
const keysOf = (text) => [...text.matchAll(/^\s{2,4}([A-Za-z_$][\w$]*):/gm)].map((m) => m[1]);
const v2Keys = new Set(keysOf(v2Defaults));
const newKeys = new Set(keysOf(defaults));
const missing = [...v2Keys].filter((k) => !newKeys.has(k));
const added = [...newKeys].filter((k) => !v2Keys.has(k));
check("settings schema has every v2 key", missing.length === 0, missing.length ? "missing: " + missing.slice(0, 12).join(", ") : `${v2Keys.size} keys`);
check("no invented settings keys", added.length === 0, added.join(", "));

// ── UI parity ──────────────────────────────────────────────────────────────
// Counted inside the v2 UI region, because the panel wrapper declares the nav,
// the tiles and the cards in its own body.
const uiStart = V2.indexOf("function sakuraLogoSvg");
const uiEnd = V2.indexOf("var CSS = `");
const v2Ui = V2.slice(uiStart, uiEnd);
const count = (t, re) => (t.match(re) || []).length;

const LIFTED = ["sakuraLogoSvg", "ico", "toggleSwitch", "selectField", "numberField", "rangeField", "pixelEditor",
  "colorField", "textField", "actionBtn", "row", "moduleCard", "buildPanel", "note", "saveUi", "menuStock",
  "applyMenuVars", "setMenuOpen", "toggleMenu"];
const wentMissing = LIFTED.filter((f) => !new RegExp(`function ${f}\\s*\\(`).test(panel));
check("every panel function is present", wentMissing.length === 0, wentMissing.join(", "));
check("stylesheet lifted", panel.includes(":host { all: initial; }") && panel.length > 90000, `${(panel.length / 1024).toFixed(0)} KB`);

check("MODS tiles match the v2 client", count(panel, /\{ tab: "/g) === count(v2Ui, /\{ tab: "/g), `${count(panel, /\{ tab: "/g)} tiles`);
check("settings rows match the v2 client", count(panel, /\brow\(/g) === count(v2Ui, /\brow\(/g), `${count(panel, /\brow\(/g)} row() calls`);
check("nav tree lifted", count(panel, /children: \[/g) === count(v2Ui, /children: \[/g), `${count(panel, /children: \[/g)} nav levels`);
check("panel wrapper still nests the panel + cards", panel.includes("function buildLunarPanel") && panel.includes("function cardsFor") && panel.includes("function interfaceCard"));
check("no duplicated rows (lift list not stale)", count(panel, /\brow\(/g) < 400, `${count(panel, /\brow\(/g)}`);

// ── engine properties ──────────────────────────────────────────────────────
// One loop: tick() re-arms itself and start() kicks it off — nothing else.
check("one rAF loop in the engine", count(core, /requestAnimationFrame\(/g) === 2 && count(game, /requestAnimationFrame\(/g) === 0 && count(boot, /requestAnimationFrame\(/g) === 0);
check("scheduler has cadence + gate + budget", /t\.hz/.test(core) && /t\.when/.test(core) && /budgetMs/.test(core));
check("budget measures our own cost, not the frame gap", /var over = carryMs > budgetMs/.test(core) && !/ourMs = t0 -/.test(core));
check("settings writes are deferred", /setTimeout\(flushNow/.test(core));
check("task cost stats exposed", /stats\.cost\[t\.name\]/.test(core));
check("game adapter owns the cover probe", /roof brush/.test(game) && /rayMask/.test(game) && /isShellBox/.test(game));
check("no window.THREE dependency", !/window\.THREE\s*[.[]/.test(game));
check("boot aliases the panel's names", ["var settings =", "var save =", "var getGame =", "function wxStatusEl", "function wxCoverEl"].every((s) => boot.includes(s)));
check("boot stays in the panel's scope (no IIFE)", !/^\(function/m.test(boot) && !/"use strict"/.test(boot));

// ── bundle parses ──────────────────────────────────────────────────────────
execFileSync(process.execPath, [path.join(root, "userscript", "build-next.mjs"), "--check"], { cwd: path.join(root, "userscript"), stdio: "pipe" });
const bundlePath = path.join(root, "userscript", "dist", ".sakura.next.check.js");
execFileSync(process.execPath, ["--check", bundlePath], { stdio: "pipe" });
const bundle = fs.readFileSync(bundlePath, "utf8");
check("bundle parses", true, `${(bundle.length / 1024).toFixed(0)} KB`);
check("bundle is one shared scope", bundle.startsWith("(function () {"));
check("bundle exposes the engine + panel surface", ["window.__sk", "SK.start()", "SK.panel =", "cardsFor", "buildLunarPanel"].every((s) => bundle.includes(s)));

console.log(failures ? `\n${failures} check(s) FAILED` : "\nall checks passed");
process.exit(failures ? 1 : 0);
