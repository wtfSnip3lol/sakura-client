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

// ── new modules (features the v2 client never had) ─────────────────────────
// These are additions, so the parity checks above cannot see them. What matters
// here is that they are wired in and cannot break the lifted half:
const extDefaults = read("defaults.ext.js");
const ext = read("ext.js");
const feat = (f) => read(`features/${f}`);
const perf = feat("perf.js"), keys = feat("keys.js"), move = feat("move.js"), profiles = feat("profiles.js");
const hud = feat("hud.js");
const pointer = feat("pointer.js");
const newFeatures = perf + keys + move + profiles + hud + pointer + ext;

const extKeys = keysOf(extDefaults);
const shadowed = extKeys.filter((k) => v2Keys.has(k));
check("new keys do not shadow a v2 key", shadowed.length === 0, shadowed.length ? shadowed.join(", ") : `${extKeys.length} new keys`);
check("new keys are distinct", new Set(extKeys).size === extKeys.length, `${extKeys.length} keys`);
check("new keys land in the live schema", /Object\.assign\(DEFAULTS/.test(extDefaults));

const bundler = fs.readFileSync(path.join(root, "userscript", "build-next.mjs"), "utf8");
const wantOrder = ["guard.js", "defaults.gen.js", "defaults.ext.js", "core.js", "game.js",
  "features/pointer.js", "features/perf.js", "features/keys.js", "features/move.js", "features/profiles.js",
  "features/hud.js", "ext.js", "panel.gen.js", "boot.js"];
const gotOrder = [...bundler.matchAll(/\["src\/next\/([^"]+)"/g)].map((m) => m[1]);
check("bundle order: new schema before core, features before boot", JSON.stringify(gotOrder) === JSON.stringify(wantOrder), gotOrder.join(" "));

// ── boot guard (what makes the rewrite installable next to the old client) ──
const guard = read("guard.js");
check("guard runs before any module has a side effect",
  bundle.indexOf("skBootDup") > 0 && bundle.indexOf("skBootDup") < bundle.indexOf("SK.core"),
  `guard at ${bundle.indexOf("skBootDup")}, core at ${bundle.indexOf("SK.core")}`);
check("guard stands down on a duplicate instance",
  /window\.__sk && window\.__sk\.core/.test(guard) && /^\s*return;/m.test(guard) && !/^\s*\(function/m.test(guard));
check("guard stands down when the old client owns the page",
  /window\.__sakuraTakeover/.test(guard) && /old client \(v2\) owns this page/.test(guard));
check("guard yields if the old client arrives later",
  /setInterval\(/.test(guard) && /clearInterval\(/.test(guard) && /__sk\.stop/.test(guard) && /sakura-ui/.test(guard));
check("dev build is installable as-is",
  bundler.includes("@match        https://clutcher.io/*") && bundler.includes("@run-at       document-start") &&
  bundler.includes("@grant        none") && bundler.includes("@noframes"));
check("host mount survives a document-start install",
  /document\.body\) \{\s*\n\s*document\.body\.appendChild\(host\)/.test(core) &&
  /readyState === "loading"/.test(core) && /readystatechange/.test(core) && /hostPending/.test(core));

check("hotkeys are a registry, not a hard-wired key", /function register\(/.test(keys) && /hkMenu/.test(keys) && !/e\.code === "Insert"/.test(boot));
check("ext tab uses the panel's own vocabulary", /moduleCard\(/.test(ext) && /\brow\(/.test(ext) && !/class="sk-card"/.test(ext));
check("ext tab re-attaches after a panel rebuild", /name: "ext-mount"/.test(ext) && /isConnected/.test(ext));
check("new tasks register through the engine", ["perf-sample", "hotkey-conflicts", "move-sample", "ext-live", "ext-mount"].every((n) => bundle.includes(n)));
check("auto quality can pause cosmetic work globally", /SK\.stopCosmetic/.test(core) && /t\.prio === 1 && \(cosmeticOff/.test(core) && /stopCosmetic\(true\)/.test(perf));
check("profiles persist under their own key", /sakura\.profiles\./.test(profiles) && /localStorage\.setItem/.test(profiles));
check("new features read the game, never write to it", !/(player|map|scene|hud|camera)\(\s*\)\s*\.\s*\w+\s*=/.test(newFeatures) && !/window\.game\s*\.\s*\w+\s*=/.test(newFeatures));

// ── HUD group: a port, so it must still be the v2 drawing ──────────────────
// These are the v2 literals a rewrite would quietly lose (panel pill fill, the
// accent, the low-HP red, the key-cap geometry). If a future edit repaints the
// HUD "cleanly", the UI stops matching and this fails.
const V2_HUD = ["rgba(22,8,16,0.7)", "rgba(255,107,157,0.35)", "rgba(255,107,157,0.85)", "#ffb3c6",
  "#7dff8a", "#7db8f0", "#ff4444", '"KeyW"', '"mouse1"', '"Space"', "hudRects"];
const lostHud = V2_HUD.filter((s) => !hud.includes(s));
check("hud group keeps the v2 drawing", lostHud.length === 0, lostHud.join(", "));
check("hud covers every widget in the group", ["drawKeys", "hudWm", "hudFps", "hudInfo", "hudBars", "hudAmmo"].every((s) => hud.includes(s)));
// Counters must accrue whether or not a widget is switched on: tracking is
// called before the in-match gate, not inside a widget branch.
check("hud counters are independent of the widget toggles", /trackCombat\(\);\s*\n\s*if \(!playing\) return false;/.test(hud));
check("hud drag editor writes the free positions", /ksFree = true/.test(hud) && /fpsFree = true/.test(hud) && /SK\.save\(\)/.test(hud));
check("panel session reset clears the combat counters", /SK\.hud\.resetShots/.test(boot));
check("hud is one painter, not another canvas", (hud.match(/SK\.paint\(/g) || []).length === 1 && !/createElement\("canvas"\)/.test(hud));

// ── pointer hygiene: the camera-flick fix, in both clients ─────────────────
// What gets swallowed has to be the same condition in both clients, or the
// rewrite quietly loses the fix at the parity flip. The three anchors below are
// the rule: arm on a lock change, eat the transition delta, and only take input
// away from the game while the client is the reason the cursor is free.
const v2Ptr = V2.slice(V2.indexOf("var ptrArmed"), V2.indexOf("function setMenuOpen"));
const ptrHooks = ["pointerlockchange", "mousemove", "pointermove", "stopImmediatePropagation"];
check("pointer guard is armed for both directions of a lock change", ptrHooks.every((s) => pointer.includes(s)) && /armed = 2/.test(pointer));
check("pointer guard only fires for the client's own freeing", /menuOpen\(\) && !document\.pointerLockElement && inMatch\(\)/.test(pointer));
check("pointer guard exempts the client's own UI", /target === SK\.host\(\)/.test(pointer));
check("v2 client carries the same guard", ["var ptrArmed", "cursor-freed", "lock-transition", "ptrGuard !== false"].every((s) => v2Ptr.includes(s)) && ptrHooks.every((s) => v2Ptr.includes(s)));
check("ptrGuard is a new-schema key, absent from the v2 panel", extKeys.includes("ptrGuard") && !v2Keys.has("ptrGuard"));
check("the guard's row is rewrite-only", ext.includes("ptrGuard") && ext.includes("pointerCard") && !V2.includes("Stabilise pointer") && !panel.includes("Stabilise pointer"));
check("slow-frame probe separates client cost from the frame gap", /__sakuraSpikes/.test(V2) && /spikeNote\(gap, tickMs \+/.test(V2));

console.log(failures ? `\n${failures} check(s) FAILED` : "\nall checks passed");
process.exit(failures ? 1 : 0);
