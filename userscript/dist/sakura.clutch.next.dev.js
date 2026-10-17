// ==UserScript==
// @name         Sakura Client (next)
// @namespace    local.sakura.client
// @version      2.10.2
// @description  Sakura Client — Clutcher.io full client (rewrite: new engine, same UI)
// @match        https://www.clutcher.io/*
// @match        https://clutcher.io/*
// @run-at       document-start
// @grant        none
// @noframes
// ==/UserScript==
(function () {

// ── src/next/guard.js — boot guard (one instance, no fight with the old client) ──
/* Sakura client — boot guard (rewrite).
 *
 * Deliberately the first module in the bundle, and deliberately not an IIFE:
 * the whole client is one engine per page, so the decision to run at all has to
 * be made before any other module has registered a task, a painter or a window
 * listener. A bare `return` here exits the bundle IIFE, so nothing below this
 * file executes.
 *
 * Three cases, one cheap check each:
 *
 *   duplicate rewrite   two installs (userscript + loader), or a reload that
 *                       left the previous engine alive — both copies share
 *                       window.__sk (core.js flags it), so the later one would
 *                       double every task and every painter. It stands down:
 *                       the first copy is running, so the user sees the client.
 *   old client present  the v2 client claims the page by setting
 *                       window.__sakuraTakeover at document-start. If it is
 *                       already there, v2 owns this page and we stand down with
 *                       a warning *and a note on the page* rather than trading
 *                       the host back and forth with it.
 *   old client later    our document-start still beats the loader's fetch at
 *                       DOMContentLoaded, so v2 can show up after us. It strips
 *                       #sakura-ui the moment it takes over, which would leave a
 *                       half-dead panel behind — the watcher stops the engine,
 *                       removes the host and says why, on the page too.
 *
 * The note matters: this client's only UI is the panel it never mounts, so a
 * console-only stand-down reads as "the rewrite aint there". Everything here
 * runs before core.js, so it cannot use the shadow root or the stylesheet —
 * plain DOM with inline styles, id `sakura-boot-note` (distinct from
 * `sakura-ui`, which is the host the old client removes when it takes over).
 *
 * This file is not standalone-parseable on purpose (top-level `return` outside
 * a function is only legal once the bundler has wrapped it); its syntax is
 * checked through `build-next.mjs --check`, which is what the verifier does.
 */
var skBootDup = !!(window.__sk && window.__sk.core);
var skBootV2 = !!window.__sakuraTakeover;

// Stand-down note: fixed, top of the page's own stacking order, click to
// dismiss, gone by itself after 12 s. Never throws into the page.
function skBootNote(title, lines) {
  try {
    var el = document.createElement("div");
    el.id = "sakura-boot-note";
    el.style.cssText = "position:fixed;left:50%;bottom:18px;transform:translateX(-50%);z-index:2147483647;" +
      "max-width:min(560px,92vw);box-sizing:border-box;padding:10px 14px;border-radius:10px;cursor:pointer;" +
      "background:rgba(24,10,18,.96);border:1px solid rgba(255,107,157,.55);color:#ffd9e4;" +
      "font:12px/1.5 ui-monospace,SFMono-Regular,Consolas,monospace;box-shadow:0 6px 24px rgba(0,0,0,.5)";
    var head = document.createElement("div");
    head.style.cssText = "font-weight:700;color:#ff6b9d;margin-bottom:4px";
    head.textContent = title;
    el.appendChild(head);
    lines.forEach(function (t) {
      var d = document.createElement("div");
      d.textContent = t;
      el.appendChild(d);
    });
    var hint = document.createElement("div");
    hint.style.cssText = "margin-top:6px;opacity:.6";
    hint.textContent = "click to dismiss";
    el.appendChild(hint);
    el.addEventListener("click", function () {
      if (el.parentNode) el.parentNode.removeChild(el);
    });
    var root = document.body || document.documentElement;
    if (root) root.appendChild(el);
    else document.addEventListener("readystatechange", function () {
      try { (document.body || document.documentElement).appendChild(el); } catch (_) {}
    }, { once: true });
    setTimeout(function () {
      if (el.parentNode) el.parentNode.removeChild(el);
    }, 12000);
  } catch (_) {}
}

if (skBootDup) {
  try {
    console.warn("[sakura] another copy of this client is already running on this page — this one is standing down.");
  } catch (_) {}
  return;
}

if (skBootV2) {
  try {
    console.warn("[sakura] the old client (v2) owns this page — its loader is installed. " +
      "Disable that userscript (and any launcher that injects it), then reload to run the rewrite.");
  } catch (_) {}
  skBootNote("Sakura (next) stood down", [
    "The old client is already running on this page, so this build did not start.",
    "Reinstall the Sakura loader userscript, then reload — it serves this client now."
  ]);
  return;
}

// v2 arrives after us: yield before it has to fight us for the host.
var skBootWatch = setInterval(function () {
  if (!window.__sakuraTakeover) return;
  clearInterval(skBootWatch);
  try {
    console.warn("[sakura] the old client (v2) took over this page — the rewrite is stopping.");
  } catch (_) {}
  try { if (window.__sk && window.__sk.stop) window.__sk.stop(); } catch (_) {}
  try {
    var skBootHost = document.getElementById("sakura-ui");
    if (skBootHost && skBootHost.parentNode) skBootHost.parentNode.removeChild(skBootHost);
  } catch (_) {}
  skBootNote("Sakura (next) handed the page over", [
    "The old client took over this page, so the rewrite stopped itself.",
    "Reinstall the Sakura loader userscript, then reload — it serves this client now."
  ]);
}, 500);


// ── src/next/defaults.gen.js — settings schema (generated) ──
// GENERATED by tools/extract-next-ui.mjs — do not edit by hand.
// Every settings key and its default, verbatim from the v2 client.
var DEFAULTS = {
    keystrokes: true,   ksPos: "bl",   ksScale: 1,   ksCps: true,   ambience: true,   visualPreset: "custom",   customLighting: false,   lightExposure: 1,   hemiMult: 1,   sunMult: 1,   sunTint: false,   sunColor: "#ffb3c6",   customSky: false,   skyColor: "#2a0a1a",   fogMode: "default",   noTextures: false,   texColor: "#b9a6a6",   noBloomFx: false,   colorGrade: false,   gradeSaturation: 1,   gradeContrast: 1,   gradeBrightness: 1,   gradeHue: 0,   gradeVignette: 0,   gradeSepia: 0,   gradeInvert: 0,   gradeBlur: 0,   gradeTint: 0,   gradeTintColor: "#ff6b9d",   motionBlur: false,   mbStrength: 0.6,   // Beta (Lunar-style UI) — unlocked from the launcher, no code   uiStyle: "lunar",   uiAccent: "#ff6b9d",   uiSize: "normal",   menuMouse: true,   lockOnClose: true,   ksFree: false,   ksX: 0,   ksY: 85,   fpsFree: false,   fpsX: 16,   fpsY: 16,   // Arm chams   armCharms: false,   charmsType: "outline",   charmColor: "#ff6b9d",   charmWidth: 4,   charmOpacity: 0.5,   charmColor2: "#ffb3c6",   charmTwoTone: false,   charmGlow: 0.6,   charmRainbow: false,   charmRainbowSpd: 60,   charmPulse: false,   charmPulseSpd: 3,   charmPulseAmt: 0.4,   charmShimmer: false,   charmFull: false,   charmMetal: false,   charmFlat: false,   charmXray: false,   charmBright: 1,   charmPreset: "custom",   charmCandy: false,   charmCandySpd: 2,   charmFire: false,   charmFireCol: "#ffffff",   charmGhost: false,   charmBack: false,   charmNoTex: false,   // Gun chams   gunChams: false,   chamType: "outline",   chamColor: "#ff6b9d",   chamWidth: 4,   chamOpacity: 0.5,   chamGlowIntensity: 0.6,   chamColor2: "#ffb3c6",   chamTwoTone: false,   chamRainbow: false,   chamRainbowSpd: 60,   chamPulse: false,   chamPulseSpd: 3,   chamPulseAmt: 0.4,   chamShimmer: false,   chamFull: false,   chamMetal: false,   chamFlat: false,   chamXray: false,   chamBright: 1,   chamPreset: "custom",   chamCandy: false,   chamCandySpd: 2,   chamFire: false,   chamFireCol: "#ffffff",   chamGhost: false,   chamBack: false,   chamNoTex: false,   // Knife chams (best-effort name match on the weapon meshes)   knifeChams: false,   knifeType: "outline",   knifeColor: "#ff6b9d",   knifeOpacity: 0.5,   knifeRainbow: false,   // Chams behaviour   chamsScan: 2,   chamsMatchOnly: true,   gunHide: false,   armHide: false,   // Viewmodel pose (offsets applied after the game's own update)   vmOn: false,   vmX: 0,   vmY: 0,   vmZ: 0,   vmRX: 0,   vmRY: 0,   vmRZ: 0,   vmFovOn: false,   vmFov: 70,   vmKick: 100,   vmBob: 100,   vmSway: 100,   armX: 0,   armY: 0,   armZ: 0,   armHideName: "",   // Kill banner + combat stats + scope + menu studio   kbOn: false,   kbStyle: "both",   kbColor: "#ff6b9d",   kbSize: 22,   kbTime: 2.2,   kbCount: 60,   kbName: true,   kbMulti: true,   kbWindow: 4,   kbPos: "top",   scOn: false,   scStyle: "duplex",   scColor: "#111111",   scThick: 3,   scGap: 0.12,   vmPose: "custom",   vmInspectAuto: false,   mnAccentP: "custom",   mnOp: null,   mnBlur: null,   mnRad: null,   mnScale: 1,   uiMotion: true,   // Fire FX + atmosphere (visual only — overlay canvas cosmetics)   atTracers: false,   trStyle: "line",   trColor: "#ff6b9d",   trGrad: false,   trColor2: "#ffb3c6",   trWidth: 2,   trLife: 0.35,   trOrigin: "gun",   trGap: 0,   trJitter: 6,   trRainbow: false,   trOp: 0.9,   trRate: 45,   trRandom: false,   mzOn: false,   mzColor: "#ffd9a0",   mzSize: 90,   mzDecay: 0.25,   mzX: 0,   mzY: 0,   mzFlicker: true,   mzPuff: false,   imOn: false,   imStyle: "both",   imColor: "#ffffff",   imHs: "#ff4040",   imSize: 12,   imCount: 10,   imTime: 0.4,   imGrav: 300,   imRing: true,   imFlash: false,   wxOn: false,   wxType: "petals",   wxCount: 80,   wxSize: 1,   wxSpeed: 1,   wxWind: 0.2,   wxOp: 0.8,   wxTint: "",   wxTwinkle: false,   wxLobby: false,   wxSwirl: false,   wxMode: "screen",   wxCoverHide: true,   moOn: false,   moCount: 40,   moSize: 1.5,   moSpeed: 0.3,   moOp: 0.5,   moColor: "#ffd6e4",   moDrift: 12,   // HUD extras (visual only — overlay cosmetics)   hudWm: false,   wmText: "Sakura",   wmFps: true,   wmClock: false,   wmKills: false,   wmPos: "tl",   wmSize: 12,   wmOp: 0.9,   wmAccent: true,   wmBg: true,   wmRainbow: false,   hudFps: false,   fpsSize: 12,   fpsColor: "#ffb3c6",   fpsBg: true,   fpsPos: "tr",   fpsGraph: false,   fpsGraphH: 24,   fpsGraphColor: "#ff6b9d",   fpsAvg: false,   hudInfo: false,   infoClock: true,   info24: false,   infoDate: false,   infoSession: true,   infoKills: true,   infoDeaths: true,   infoKD: true,   infoShots: true,   infoHits: true,   infoAcc: true,   infoPos: "br",   infoSize: 12,   hudBars: false,   barsPos: "bl",   barsW: 220,   barsH: 14,   hpColor: "#7dff8a",   armorColor: "#7db8f0",   barsArmor: true,   barsNumbers: true,   barsBg: true,   barsLow: true,   barsLowAt: 30,   hudAmmo: false,   ammoSize: 20,   ammoPos: "br",   ammoReserve: true,   ammoLow: true,   ammoLowAt: 6,   ammoColor: "#ffffff",   ammoBg: true,   // Game-native cosmetics (drive the game's own HUD, restore on disable)   gxOn: false,   gxPreset: "custom",   gxColor: "#3cff5a",   gxAlpha: 1,   gxLen: 6,   gxThick: 2,   gxGap: 3,   gxDot: false,   gxOutline: true,   gxOutw: 1,   gxStyle: 0,   gxSniper: 2,   gcTeam: false,   gcCT: "#7db8f0",   gcT: "#eabe54",   dcOn: false,   dcOp: 0.6,   dcColor: "",   dcAccent: "",   ghOn: false,   ghColor: "#ffffff",   ghHs: "#ff4040",   ghSize: 1,   daOn: false,   daColor: "#e0342c",   mnOn: false,   mnColor: "",   // Day cycle + light lab + fog lab + radar cosmetics   wdCycle: false,   wdTime: 12,   wdAuto: true,   wdSpeed: 0.25,   wdNight: 0.7,   wdBolt: false,   wdBoltRate: 8,   wdManual: false,   wdElev: 45,   wdAzim: 180,   hemiOn: false,   hemiSky: "#bcd6ff",   hemiGround: "#4a4238",   fogCustom: false,   fogPreset: "thick",   rdOn: false,   rdSize: 1,   rdRing: "#4a4f55",   rdOp: 1,   rdPos: "tl",   rdSquare: false,   rdHide: false,   // Crosshair studio (visual only — drawn on the overlay canvas)   crosshair: false,   chPreset: "custom",   chStyle: "cross",   chColor: "#ffffff",   chDotColor: "#ffffff",   chLen: 8,   chLenH: 1,   chLenV: 1,   chThick: 2,   chGap: 4,   chGapY: 4,   chDot: true,   chDotSize: 2,   chOutline: true,   chOutlineColor: "#000000",   chOpacity: 1,   chDynamic: true,   chMoveAmt: 6,   chFireKick: true,   chKickAmt: 8,   chRecover: 4,   chExpandCap: 24,   chSpreadSrc: "auto",   chSpreadScale: 1,   chSpreadCap: 40,   chAds: true,   chAdsAmt: 0.35,   chScopeMult: 0.9,   chCtrlT: false,   chCtrlAmt: 0.3,   chScopeHide: false,   chOuter: false,   chOuterGap: 4,   chOuterLen: 6,   chPulse: false,   chPulseAmt: 0.1,   chPulseSpeed: 3,   chSpin: false,   chSpinSpeed: 1.5,   chRainbow: false,   chRainbowSpeed: 120,   chFlash: true,   chFlashColor: "#ff6b9d",   chWobble: false,   chWobbleAmt: 2,   chFireX: false,   chFireXSize: 12,   chOffX: 0,   chOffY: 0,   chGlow: false,   chGlowAmt: 10,   chInLobby: false,   chHideMenu: false,   chHideGame: true,   // Custom drawn crosshair (21x21 pixel grid, stored as a 0/1 string)   chPixels: "",   chPxScale: 3,   chDrawMode: "pixels",   chMirrorX: true,   chMirrorY: true
};
var SAKURA_STORE_KEY = "sakura.minimal.v1";


// ── src/next/defaults.ext.js — settings schema (new modules) ──
/* New settings keys for features the v2 client does not have.
 *
 * Loaded straight after defaults.gen.js and before core.js, so these keys are
 * part of the schema when the engine snapshots it: they persist, they load, and
 * the panel's own rows read the same values.
 */
Object.assign(DEFAULTS, {
  // Perf dashboard: frame-time graph + panel strip + task cost table
  perfOn: true,
  perfStrip: true,
  perfGraph: true,
  perfGraphPos: "bl",
  perfGraphScale: 33,
  perfTable: true,
  perfAuto: false,
  perfAutoFps: 110,
  perfBudget: 3.5,

  // Hotkeys
  hkOn: true,
  hkMenu: "Insert",
  hkGraph: "F8",
  hkMove: "F9",
  hkPerf: "F10",

  // Movement meter (counter-strafe / stop-to-shoot)
  mvOn: false,
  mvStyle: "bar",
  mvPos: "bottom",
  mvColor: "#7de3ff",
  mvReady: 2,
  mvScale: 7,
  mvAutoScale: true,
  mvSpeedText: true,

  // Pointer hygiene: the guard that keeps the client's own pointer-lock
  // juggling (freed cursor + re-lock delta) from moving the camera. The v2
  // client has the same guard but no row for it, so the key lives here with
  // the rest of the new schema.
  ptrGuard: true
});


// ── src/next/core.js — engine core ──
/* Sakura client — engine core (rewrite).
 *
 * Owns everything that is not game-specific and not a feature:
 *   settings    plain object + deferred persistence (one write per burst)
 *   watch       change detection for only the keys a feature cares about
 *   task        the single rAF scheduler: cadence, gates, priority, budget
 *   dom         shadow host + the stylesheet + element helpers
 *   overlay     one canvas, DPR-correct, one clear per frame, only when dirty
 *   keys        held-key set (capture phase) + editable guard
 *   hook        idempotent game-method patching with restore
 *
 * No feature code, no clutcher knowledge. Feature modules register tasks.
 */
(function () {
  "use strict";
  var W = window;
  var SK = W.__sk = W.__sk || {};
  if (SK.core) return;
  SK.core = true;
  SK.version = SK.version || "2.11.0";

  // ── helpers ───────────────────────────────────────────────────────────────
  var perfNow = (W.performance && W.performance.now) ? function () { return performance.now(); } : function () { return Date.now(); };
  function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }
  function chNum(v, d) { var n = Number(v); return Number.isFinite(n) ? n : d; }
  SK.clamp = clamp;
  SK.chNum = chNum;
  SK.now = perfNow;

  // ── log (dev-gated; the panel's dev row flips it) ─────────────────────────
  var quiet = false;
  SK.log = function () { if (!quiet) { try { console.log.apply(console, ["[sakura]"].concat([].slice.call(arguments))); } catch (_) {} } };
  SK.warn = function () { try { console.warn.apply(console, ["[sakura]"].concat([].slice.call(arguments))); } catch (_) {} };
  SK.quiet = function (v) { quiet = !!v; };

  // ── settings ──────────────────────────────────────────────────────────────
  // The panel writes `settings.x = v; save();` from 400+ call sites. A plain
  // object keeps every one of those working; save() only marks dirty and one
  // deferred flush does the JSON.stringify + localStorage write.
  // Schema comes from the generated defaults (all 356 keys), which the bundle
  // defines before this runs. The guards keep core.js usable on its own.
  var schema = (typeof DEFAULTS !== "undefined" && DEFAULTS) || SK.defaults || {};
  var settings = Object.assign({}, schema);
  var storeKey = (typeof SAKURA_STORE_KEY !== "undefined" && SAKURA_STORE_KEY) || SK.storeKey || "sakura.minimal.v1";
  try {
    var saved = JSON.parse(localStorage.getItem(storeKey) || "{}");
    for (var k in saved) if (saved[k] !== undefined && Object.prototype.hasOwnProperty.call(settings, k)) settings[k] = saved[k];
  } catch (_) {}
  var flushTimer = 0, flushPending = false, flushCount = 0, flushLastAt = 0;
  function flushNow() {
    flushPending = false;
    if (flushTimer) { clearTimeout(flushTimer); flushTimer = 0; }
    flushLastAt = Date.now();
    flushCount++;
    try { localStorage.setItem(storeKey, JSON.stringify(settings)); } catch (_) {}
  }
  function save() {
    flushPending = true;
    if (!flushTimer) flushTimer = setTimeout(flushNow, 350);
  }
  SK.settings = settings;
  SK.save = save;
  SK.flush = flushNow;
  SK.saveStats = function () { return { pending: flushPending, writes: flushCount, lastAt: flushLastAt }; };
  try {
    W.addEventListener("pagehide", function () { if (flushPending) flushNow(); });
    W.addEventListener("beforeunload", function () { if (flushPending) flushNow(); });
  } catch (_) {}

  // ── watch: cheap change detection for registered keys only ───────────────
  var watches = [];
  SK.watch = function (keys, fn) {
    var last = {};
    for (var i = 0; i < keys.length; i++) last[keys[i]] = settings[keys[i]];
    watches.push({ keys: keys, last: last, fn: fn });
  };
  function pollWatches() {
    for (var w = 0; w < watches.length; w++) {
      var it = watches[w], hit = null;
      for (var i = 0; i < it.keys.length; i++) {
        var key = it.keys[i];
        if (it.last[key] !== settings[key]) {
          (hit || (hit = [])).push(key);
          it.last[key] = settings[key];
        }
      }
      if (hit) { try { it.fn(hit); } catch (e) { SK.warn("watch handler", e); } }
    }
  }

  // ── scheduler ─────────────────────────────────────────────────────────────
  // One rAF for the whole client. Every task declares how often it actually
  // needs to run (hz), a cheap gate (when), and whether it is essential
  // (prio 0) or cosmetic (prio 1). Cosmetic work yields when our own frame cost
  // climbs past the budget — the uncapped-framerate case, where the client is
  // the bottleneck and the game is fine.
  var tasks = [], byName = new Map(), frame = 0, lastNow = 0, running = false;
  var budgetMs = 3.5, ourMs = 0, carryMs = 0, cosmeticOff = false;
  var stats = { fps: 0, frameMs: 0, worstMs: 0, frames: 0, fpsAt: 0, skipped: 0, cost: {} };

  function task(def) {
    var t = {
      name: def.name || ("task" + tasks.length),
      hz: Math.max(0, chNum(def.hz, 60)) || 0,
      prio: def.prio === 1 ? 1 : 0,
      fn: def.fn,
      when: def.when || null,
      off: false,
      next: 0,
      runs: 0,
      cost: 0,
      lastMs: 0
    };
    tasks.push(t);
    byName.set(t.name, t);
    return t;
  }
  SK.task = task;
  SK.taskOff = function (name, off) {
    var t = byName.get(name);
    if (t) { t.off = !!off; t.next = 0; }
  };
  SK.taskOn = function (name) {
    var t = byName.get(name);
    if (t) t.off = false;
  };
  SK.tasks = function () { return tasks; };
  SK.stats = function () { return stats; };
  SK.setBudget = function (ms) { budgetMs = Math.max(0, chNum(ms, budgetMs)); };
  SK.budget = function () { return budgetMs; };
  // Global cosmetic pause: the auto-quality feature flips this when the frame
  // rate falls below its target, so every prio-1 task yields at once.
  SK.stopCosmetic = function (on) { cosmeticOff = !!on; };
  SK.cosmeticOff = function () { return cosmeticOff; };

  function tick(ts) {
    if (!running) return;
    requestAnimationFrame(tick);
    var dt = lastNow ? Math.min(0.1, (ts - lastNow) / 1000) : 1 / 60;
    lastNow = ts;
    frame++;

    var t0 = perfNow();
    // Budget signal is OUR cost (EMA of the task loop), never the wall-clock gap
    // between frames — at 200 fps that gap is ~5 ms of the game's own work, which
    // would starve every cosmetic task forever.
    var over = carryMs > budgetMs;
    for (var i = 0; i < tasks.length; i++) {
      var t = tasks[i];
      if (t.off || !t.fn) continue;
      if (t.when && !safeWhen(t)) continue;
      if (ts < t.next) continue;
      if (t.prio === 1 && (cosmeticOff || over)) { stats.skipped++; t.next = ts + 16; continue; }
      t.next = ts + (t.hz > 0 ? Math.max(1, 1000 / t.hz) : 0);
      var a = perfNow();
      try { t.fn(dt, ts); } catch (e) { t.off = true; SK.warn("task " + t.name + " threw, disabled:", e); }
      var c = perfNow() - a;
      t.lastMs = c;
      t.runs++;
      t.cost = t.cost ? t.cost * 0.9 + c * 0.1 : c;
      stats.cost[t.name] = Math.round(t.cost * 1000) / 1000;
    }
    var spent = perfNow() - t0;
    carryMs = carryMs * 0.85 + spent * 0.15;
    ourMs = carryMs;
    SK._lastSchedAt = perfNow();

    stats.frames++;
    var el = ts - stats.fpsAt;
    if (el >= 1000) {
      stats.fps = Math.round((stats.frames * 1000) / el);
      stats.frameMs = Math.round((el / stats.frames) * 100) / 100;
      stats.ourMs = Math.round(carryMs * 1000) / 1000;
      stats.fpsAt = ts;
      stats.frames = 0;
      stats.skipped = 0;
    }
  }
  function safeWhen(t) {
    try { return !!t.when(); } catch (_) { t.off = true; return false; }
  }
  SK.start = function () {
    if (running) return;
    running = true;
    requestAnimationFrame(tick);
  };
  SK.stop = function () { running = false; };

  // ── dom ───────────────────────────────────────────────────────────────────
  var host = null, shadow = null, cssEl = null, hostPending = false;
  function mount() {
    if (host && host.isConnected) return shadow;
    if (host && hostPending) return shadow;
    if (!host) {
      host = document.createElement("div");
      host.id = "sakura-ui";
      host.style.cssText = "position:fixed;inset:0;z-index:2147483647;pointer-events:none;";
      shadow = host.attachShadow({ mode: "open" });
      cssEl = document.createElement("style");
      cssEl.textContent = SK.css || "";
      shadow.appendChild(cssEl);
    }
    // A document-start install runs before <body> exists. Appending to <html>
    // instead would leave the host outside the box the page actually paints (the
    // parser never reparents children it did not create), so wait for it.
    if (document.body) {
      document.body.appendChild(host);
      hostPending = false;
    } else if (document.readyState === "loading" && !hostPending) {
      hostPending = true;
      document.addEventListener("readystatechange", function () {
        hostPending = false;
        try { (document.body || document.documentElement).appendChild(host); } catch (_) {}
      }, { once: true });
    } else {
      try { (document.body || document.documentElement).appendChild(host); } catch (_) {}
    }
    return shadow;
  }
  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }
  function css(el2, props) {
    for (var p in props) { try { el2.style.setProperty(p, props[p]); } catch (_) {} }
    return el2;
  }
  function on(node, ev, fn, opts) {
    if (node) node.addEventListener(ev, fn, opts);
    return node;
  }
  SK.el = el;
  SK.css = css;
  SK.on = on;
  SK.mount = mount;
  SK.shadow = function () { return shadow || mount(); };
  SK.host = function () { mount(); return host; };

  // ── overlay ───────────────────────────────────────────────────────────────
  // One canvas. Sized on change only (never per frame), DPR-aware, and cleared
  // once per frame — and not at all on frames where no layer drew.
  var overlay = { cv: null, ctx: null, w: 0, h: 0, dpr: 1, dirty: false, drew: false };
  function overlayCtx() {
    if (overlay.cv && overlay.cv.isConnected) return overlay.ctx;
    mount();
    var cv = el("canvas");
    cv.id = "sakura-overlay";
    cv.style.cssText = "position:absolute;inset:0;width:100%;height:100%;pointer-events:none;";
    shadow.appendChild(cv);
    overlay.cv = cv;
    overlay.ctx = cv.getContext("2d");
    resizeOverlay(true);
    return overlay.ctx;
  }
  function resizeOverlay(force) {
    var cv = overlay.cv;
    if (!cv) return;
    var w = W.innerWidth || 0, h = W.innerHeight || 0;
    var dpr = Math.min(2, W.devicePixelRatio || 1);
    if (!force && w === overlay.w && h === overlay.h && dpr === overlay.dpr) return;
    overlay.w = w; overlay.h = h; overlay.dpr = dpr;
    cv.width = Math.max(1, Math.round(w * dpr));
    cv.height = Math.max(1, Math.round(h * dpr));
    overlay.ctx = cv.getContext("2d");
    try { overlay.ctx.setTransform(dpr, 0, 0, dpr, 0, 0); } catch (_) {}
    SK.dispatch("overlay:resize", w, h);
  }
  // begin: clears when the previous frame drew something, then marks dirty
  function overlayBegin() {
    var ctx = overlayCtx();
    resizeOverlay(false);
    if (overlay.drew) {
      try { ctx.clearRect(0, 0, overlay.w, overlay.h); } catch (_) {}
    }
    overlay.drew = false;
    return ctx;
  }
  function overlayEnd() { overlay.drew = true; }
  SK.overlay = function () { return { ctx: overlayCtx(), w: overlay.w, h: overlay.h, dpr: overlay.dpr, begin: overlayBegin, end: overlayEnd, cv: function () { return overlay.cv; } }; };
  SK.overlayCanvas = function () { overlayCtx(); return overlay.cv; };
  SK.overlayRect = function () { return { left: 0, top: 0, right: overlay.w, bottom: overlay.h, width: overlay.w, height: overlay.h }; };
  on(W, "resize", function () { overlay.dirty = true; resizeOverlay(false); });

  // ── toast: short confirmations, so an action never feels like it did nothing ──
  var toastEl = null, toastTimer = 0;
  function alert2(msg, ms) {
    try {
      mount();
      if (!toastEl) {
        toastEl = el("div", "sk-toast");
        toastEl.style.cssText = "position:absolute;left:50%;bottom:34px;transform:translateX(-50%);padding:7px 13px;" +
          "border-radius:9px;background:rgba(20,14,18,.92);color:#f6eef2;font:600 12px/1.3 'Inter',system-ui,sans-serif;" +
          "box-shadow:0 0 0 1px rgba(255,107,157,.45),0 10px 26px rgba(0,0,0,.5);pointer-events:none;opacity:0;" +
          "transition:opacity .18s ease;z-index:5;white-space:nowrap;";
        shadow.appendChild(toastEl);
      }
      toastEl.textContent = String(msg);
      toastEl.style.opacity = "1";
      if (toastTimer) clearTimeout(toastTimer);
      toastTimer = setTimeout(function () { if (toastEl) toastEl.style.opacity = "0"; }, Math.max(600, ms || 1600));
    } catch (_) {}
  }
  SK.alert = alert2;

  // ── events (internal bus; features use it instead of polling) ─────────────
  var subs = {};
  SK.on2 = function (name, fn) { (subs[name] || (subs[name] = [])).push(fn); return fn; };
  SK.dispatch = function (name) {
    var list = subs[name];
    if (!list) return;
    var args = [].slice.call(arguments, 1);
    for (var i = 0; i < list.length; i++) { try { list[i].apply(null, args); } catch (e) { SK.warn("bus " + name, e); } }
  };

  // ── keys ──────────────────────────────────────────────────────────────────
  var held = new Set();
  var editable = function (n) {
    return !!n && (n.tagName === "TEXTAREA" || (n.tagName === "INPUT" && /^(text|number|search)$/.test(n.type || "")));
  };
  function attachKeys() {
    if (SK._keysAttached) return;
    SK._keysAttached = true;
    var down = function (e) {
      if (editable(e.target)) return;
      var code = e.code || ("mouse" + (e.button + 1));
      if (held.has(code)) return;
      held.add(code);
      SK.dispatch("key:down", code, e);
    };
    var up = function (e) {
      var code = e.code || ("mouse" + (e.button + 1));
      if (!held.has(code)) return;
      held.delete(code);
      SK.dispatch("key:up", code, e);
    };
    on(W, "keydown", down, true);
    on(W, "keyup", up, true);
    on(W, "mousedown", down, true);
    on(W, "mouseup", up, true);
    on(W, "blur", function () { held.clear(); SK.dispatch("key:blur"); });
  }
  SK.held = held;
  SK.keys = { attach: attachKeys, isDown: function (c) { return held.has(c); } };

  // ── hooks ─────────────────────────────────────────────────────────────────
  // Idempotent wrapper install: marks what it patched so a second client (or a
  // second call) cannot stack wrappers, and always keeps the original reachable.
  var installed = [];
  function hook(obj, key, wrap) {
    if (!obj) return null;
    if (obj["__sk_hook_" + key]) return obj["__sk_hook_" + key];
    var orig = obj[key];
    if (typeof orig !== "function") return null;
    var rec = { obj: obj, key: key, orig: orig, wrap: null };
    var fn = wrap(orig, function restore() { obj[key] = orig; rec.off = true; });
    rec.wrap = fn;
    obj[key] = fn;
    obj["__sk_hook_" + key] = rec;
    installed.push(rec);
    return rec;
  }
  function unhookAll() {
    for (var i = 0; i < installed.length; i++) {
      var r = installed[i];
      try { if (!r.off && r.obj[r.key] === r.wrap) r.obj[r.key] = r.orig; } catch (_) {}
    }
    installed.length = 0;
  }
  SK.hook = hook;
  SK.unhookAll = unhookAll;

  // ── the settings-watch pump (registered last so it runs before features) ──
  task({ name: "settings", hz: 12, prio: 0, fn: pollWatches, when: function () { return watches.length > 0; } });
  SK.keys.attach();

  SK.log("core ready", SK.version);
})();


// ── src/next/game.js — game adapter ──
/* Sakura client — game adapter (rewrite).
 *
 * The ONLY place that knows clutcher's internals. Everything here is already
 * proven against the live game (physics mask bytes, merged level mesh, no
 * window.THREE, hud.xh, the viewmodel update hook) — it is collected here so
 * features never guess, and so a game update has exactly one file to fix.
 */
(function () {
  "use strict";
  var SK = window.__sk = window.__sk || {};

  // ── object graph ──────────────────────────────────────────────────────────
  // window.game is a class instance holding scene / physics / map / player /
  // camera / hud / viewmodel / weapons (see loadMap(): this.scene = new Scene,
  // this.physics = new Physics).
  function get() { try { return window.game || null; } catch (_) { return null; } }
  function stateOf(g) {
    if (!g) return "";
    var raw = g.state !== undefined ? g.state : (g.gameState !== undefined ? g.gameState : g.status);
    var key = raw && typeof raw === "object" ? (raw.state !== undefined ? raw.state : raw.value) : raw;
    return String(key == null ? "" : key).trim().toLowerCase().replace(/[ -]/g, "_");
  }
  function playing(g) {
    g = g || get();
    if (!g) return false;
    if (g.isPlaying === true || g.playing === true) return true;
    var s = stateOf(g);
    return s === "playing" || s === "in_game" || s === "ingame" || s === "active";
  }
  function player(g) { g = g || get(); return (g && g.player) || null; }
  function camera(g) { g = g || get(); return (g && g.camera) || null; }
  function scene(g) { g = g || get(); return (g && g.scene) || null; }
  function map(g) { g = g || get(); return (g && g.map) || null; }
  function mapKey(g) {
    var m = map(g);
    if (!m) return "none";
    return String(m.id || m.name || "map") + "|" + String(m.ceilY);
  }

  // ── player geometry ───────────────────────────────────────────────────────
  function eyeH(p) { return p && Number.isFinite(p.eyeH) ? p.eyeH : 1.6256; }
  function eyeY(p) { return (p ? p.y : 0) + eyeH(p); }
  function eye(p, out) {
    out = out || { x: 0, y: 0, z: 0 };
    if (!p) return out;
    out.x = p.x; out.y = p.y + eyeH(p); out.z = p.z;
    return out;
  }
  // horizontal forward from the camera's world matrix (column-major), else yaw
  function fwdXZ(g, p, out) {
    out = out || [0, -1];
    var cam = camera(g), fx = 0, fz = -1;
    if (cam && cam.matrixWorld && cam.matrixWorld.elements && cam.matrixWorld.elements.length >= 16) {
      var e = cam.matrixWorld.elements;
      fx = -e[8]; fz = -e[10];
    } else if (p && Number.isFinite(p.yaw)) {
      fx = -Math.sin(p.yaw); fz = -Math.cos(p.yaw);
    }
    var len = Math.hypot(fx, fz) || 1;
    out[0] = fx / len; out[1] = fz / len;
    return out;
  }

  // ── collision ─────────────────────────────────────────────────────────────
  // physics.raycast(ox,oy,oz,dx,dy,dz,maxT,mask) -> {t,x,y,z,nx,ny,nz,mat,b} | null
  // Brushes carry a mask byte (default 7); the game's own ground/step/stand
  // probes use bit 0. Rather than betting on one bit we ray with the union of
  // every mask the map actually uses.
  var maskOf = 1, maskAt = -1e9, maskN = -1;
  function physics(g) {
    g = g || get();
    var ph = g && g.physics;
    return ph && typeof ph.raycast === "function" ? ph : null;
  }
  function rayMask(ph, now) {
    if (!ph) return 1;
    var n = ((ph.boxes && ph.boxes.length) || 0) + ((ph.tris && ph.tris.length) || 0);
    if (now - maskAt < 2000 && maskN === n) return maskOf;
    var m = 0;
    var scan = function (arr) {
      if (!arr) return;
      var len = Math.min(arr.length, 20000);
      for (var i = 0; i < len; i++) { var b = arr[i]; if (b && b.mask) m |= b.mask; }
    };
    try { scan(ph.boxes); scan(ph.tris); } catch (_) {}
    maskOf = m || 1; maskAt = now; maskN = n;
    return maskOf;
  }
  function ray(ph, ox, oy, oz, dx, dy, dz, dist, mask) {
    if (!ph) return null;
    try { return ph.raycast(ox, oy, oz, dx, dy, dz, dist, mask); } catch (_) { return null; }
  }

  // A map's own bounding box / ceiling brush covers everything: never a roof.
  function isShellBox(g, b) {
    if (!b || !Number.isFinite(b.minX)) return false;
    var m = map(g);
    if (m && m.min && m.max) {
      var mx = m.max[0] - m.min[0], mz = m.max[2] - m.min[2];
      if (mx > 4 && mz > 4 && (b.maxX - b.minX) >= mx * 0.92 && (b.maxZ - b.minZ) >= mz * 0.92) return true;
    }
    return (b.maxX - b.minX) * (b.maxZ - b.minZ) > 20000;
  }

  // Under cover = indoors, or tucked behind something. Four layers, cheapest
  // first; the reason is returned for the panel's live readout.
  var brushAt = -1e9, brushRes = -1;
  function brushRoof(ph, g, p, now) {
    if (now - brushAt < 500) return brushRes;
    brushAt = now; brushRes = -1;
    var px = p.x, pz = p.z, lo = p.y + 1.2, hi = p.y + 12;
    var scan = function (arr) {
      if (!arr || brushRes >= 0) return;
      var len = Math.min(arr.length, 40000);
      for (var i = 0; i < len; i++) {
        var b = arr[i];
        if (!b || !Number.isFinite(b.minX)) continue;
        if (!(px > b.minX && px < b.maxX && pz > b.minZ && pz < b.maxZ)) continue;
        if (!(b.minY > lo && b.minY < hi)) continue;
        if (isShellBox(g, b)) continue;
        brushRes = Math.round((b.minY - p.y) * 10) / 10;
        return;
      }
    };
    try { scan(ph.boxes); scan(ph.tris); } catch (_) {}
    return brushRes;
  }
  function cover(g, now) {
    g = g || get();
    var p = player(g);
    if (!p || !Number.isFinite(p.x) || !Number.isFinite(p.y) || !Number.isFinite(p.z)) return { on: false, why: "—" };
    var ph = physics(g);
    if (!ph) return { on: false, why: "no physics" };
    var mask = rayMask(ph, now);
    var ey = p.y + eyeH(p), chest = ey - 0.3;
    var up = ray(ph, p.x, ey, p.z, 0, 1, 0, 12, mask);
    if (up && !isShellBox(g, up.b)) return { on: true, why: "roof " + (Math.round(up.t * 10) / 10) + "m" };
    var off = [[1.5, 0], [-1.5, 0], [0, 1.5], [0, -1.5]], hits = 0;
    for (var i = 0; i < off.length; i++) {
      var h = ray(ph, p.x + off[i][0], ey, p.z + off[i][1], 0, 1, 0, 12, mask);
      if (h && !isShellBox(g, h.b)) hits++;
    }
    if (hits >= 2) return { on: true, why: "roof" };
    var f = fwdXZ(g, p);
    if (ray(ph, p.x, chest, p.z, f[0], 0, f[1], 1.8, mask)) return { on: true, why: "front" };
    var sides = 0;
    if (ray(ph, p.x, chest, p.z, 1, 0, 0, 2.4, mask)) sides++;
    if (ray(ph, p.x, chest, p.z, -1, 0, 0, 2.4, mask)) sides++;
    if (ray(ph, p.x, chest, p.z, 0, 0, 1, 2.4, mask)) sides++;
    if (ray(ph, p.x, chest, p.z, 0, 0, -1, 2.4, mask)) sides++;
    if (sides >= 3) return { on: true, why: "room" };
    var br = brushRoof(ph, g, p, now);
    if (br >= 0) return { on: true, why: "roof brush " + br + "m" };
    return { on: false, why: "clear m" + mask };
  }

  // ── THREE helpers (no window.THREE: classes are harvested per instance) ───
  var geoBox = new WeakMap();
  var scratch = [0, 0, 0, 0, 0, 0, 0];
  function worldAABB(o, out) {
    var geo = o && o.geometry;
    var m = o && o.matrixWorld && o.matrixWorld.elements;
    if (!geo || !m || m.length < 16) return false;
    var loc = geoBox.get(geo);
    if (loc === undefined) {
      var bb = geo.boundingBox;
      if (!bb && typeof geo.computeBoundingBox === "function") { try { geo.computeBoundingBox(); bb = geo.boundingBox; } catch (_) {} }
      loc = bb && bb.min && bb.max && Number.isFinite(bb.min.x) && Number.isFinite(bb.max.x)
        ? [bb.min.x, bb.min.y, bb.min.z, bb.max.x, bb.max.y, bb.max.z] : null;
      geoBox.set(geo, loc);
    }
    if (!loc) return false;
    out = out || scratch;
    var minX = Infinity, minY = Infinity, minZ = Infinity, maxX = -Infinity, maxY = -Infinity, maxZ = -Infinity;
    for (var i = 0; i < 8; i++) {
      var x = (i & 1) ? loc[3] : loc[0], y = (i & 2) ? loc[4] : loc[1], z = (i & 4) ? loc[5] : loc[2];
      var wx = m[0] * x + m[4] * y + m[8] * z + m[12];
      var wy = m[1] * x + m[5] * y + m[9] * z + m[13];
      var wz = m[2] * x + m[6] * y + m[10] * z + m[14];
      if (wx < minX) minX = wx; if (wx > maxX) maxX = wx;
      if (wy < minY) minY = wy; if (wy > maxY) maxY = wy;
      if (wz < minZ) minZ = wz; if (wz > maxZ) maxZ = wz;
    }
    out[0] = minX; out[1] = minY; out[2] = minZ; out[3] = maxX; out[4] = maxY; out[5] = maxZ;
    out[6] = (maxX - minX) * (maxY - minY) * (maxZ - minZ);
    return true;
  }
  function underCam(o, cam) {
    for (var a = o; a; a = a.parent) if (a === cam) return true;
    return false;
  }

  // ── console / hud DOM ─────────────────────────────────────────────────────
  var DOM = {
    killcard: "#killcard", hitmark: "#hitmark", death: "#deathov",
    money: "#money", radar: "#radar", dmgarc: ".dmgarc", canvas: "#game canvas"
  };
  var domCache = new Map();
  function bySel(sel) {
    var hit = domCache.get(sel);
    if (hit && hit.isConnected) return hit;
    var n = null;
    try { n = document.querySelector(sel); } catch (_) {}
    if (n) domCache.set(sel, n);
    return n;
  }

  // ── viewmodel + weapon ────────────────────────────────────────────────────
  function viewmodel(g) { g = g || get(); return (g && g.viewmodel) || null; }
  function arms(g) {
    g = g || get();
    return (g && g.cs2 && g.cs2.rig && g.cs2.rig.arms) || null;
  }
  function weapons(g) { g = g || get(); return (g && g.weapons) || null; }
  function scoped(g) {
    g = g || get();
    if (!g) return false;
    if (g.scoped === true) return true;
    var w = weapons(g);
    return !!(w && Number(w.scopeLevel) > 0);
  }

  SK.game = {
    get: get, playing: playing, stateOf: stateOf,
    player: player, camera: camera, scene: scene, map: map, mapKey: mapKey,
    eyeH: eyeH, eyeY: eyeY, eye: eye, fwdXZ: fwdXZ,
    physics: physics, ray: ray, rayMask: rayMask, cover: cover, isShellBox: isShellBox,
    worldAABB: worldAABB, underCam: underCam,
    viewmodel: viewmodel, arms: arms, weapons: weapons, scoped: scoped,
    DOM: DOM, bySel: bySel,
    live: function (g) { g = g || get(); var p = player(g); return playing(g) && !!scene(g) && !!p && p.alive !== false; }
  };
  SK.log("game adapter ready");
})();


// ── src/next/features/pointer.js — feature: pointer hygiene (camera flicks) ──
/* Pointer hygiene (new; the v2 client carried the same routine inline and it is
 * the source of the "camera flicks" complaint).
 *
 * The client frees the cursor on purpose when the menu opens — the match keeps
 * running, which is the point of the feature. Two consequences show up as the
 * camera jumping around while you play:
 *
 *   1. The game keeps reading mouse movement as look input while the pointer is
 *      unlocked, so walking the cursor across the screen to the menu drags the
 *      view with it.
 *   2. Every pointer-lock transition delivers a movement event carrying the
 *      delta accumulated while unlocked, and the game applies that in one go.
 *
 * Both are swallowed in the capture phase, before the game's own listeners. The
 * client's own UI is exempt, so hovering, dragging and the drag editor keep
 * working: events that originate inside the shadow root are retargeted to the
 * host element, and those are let through.
 *
 * This must stay in step with the block of the same name in the v2 client until
 * the parity flip retires v2. Read counters with SK.pointer.state().
 */
(function () {
  "use strict";
  var SK = window.__sk;

  var armed = 0;          // movement events still to swallow after a lock change
  var armedAt = 0;
  var blocked = 0;
  var lastReason = "";

  function on() { return SK.settings.ptrGuard !== false; }

  // Events raised inside the client's shadow root are retargeted to the host, so
  // one identity check covers the whole UI.
  function own(target) {
    try { return !!(target && target === SK.host()); } catch (_) { return false; }
  }

  function menuOpen() {
    try { return !!(SK.panel && SK.panel.isOpen && SK.panel.isOpen()); } catch (_) { return false; }
  }

  function inMatch() {
    try { return !!(SK.game && SK.game.live && SK.game.live()); } catch (_) { return false; }
  }

  function why(e) {
    if (!on()) return "";
    if (!e || typeof e.movementX !== "number") return "";
    if (own(e.target)) return "";
    if (armed > 0) {
      if (SK.now() - armedAt <= 400) { armed--; return "lock-transition"; }
      armed = 0;
    }
    if (menuOpen() && !document.pointerLockElement && inMatch()) return "cursor-freed";
    return "";
  }

  function swallow(e) {
    var r = why(e);
    if (!r) return;
    blocked++;
    lastReason = r;
    e.stopImmediatePropagation();
    e.preventDefault();
  }

  // A lock change can deliver a delta in either direction: the release that frees
  // the cursor and the re-lock that takes it back. Two events covers the coalesced
  // pair Chrome sometimes sends; the window stops a stale arm from eating a real
  // movement later on.
  function arm() { armed = 2; armedAt = SK.now(); }

  window.addEventListener("pointerlockchange", arm, true);
  window.addEventListener("mousemove", swallow, true);
  window.addEventListener("pointermove", swallow, true);

  SK.pointer = {
    on: on,
    arm: arm,
    state: function () {
      return {
        blocked: blocked,
        last: lastReason,
        armed: armed,
        guard: on(),
        freed: !!(menuOpen() && !document.pointerLockElement),
        locked: !!document.pointerLockElement
      };
    }
  };
})();


// ── src/next/features/perf.js — feature: perf dashboard + overlay painters ──
/* Perf dashboard (new, no v2 equivalent).
 *
 * Everything here reads the engine's own instrumentation, which is the point:
 * the client's cost is measurable, so "is this feature eating my frames?" is a
 * number in the panel instead of a guess.
 *
 *   - frame-time graph on the overlay (unified with the other widgets)
 *   - one-line strip inside the panel header
 *   - per-task cost table, sorted by what actually costs most
 *   - auto quality: drop cosmetic tasks when the frame rate falls below target
 */
(function () {
  "use strict";
  var SK = window.__sk;

  // ── frame samples (ring buffer, milliseconds) ─────────────────────────────
  var N = 180;
  var ring = new Float32Array(N);
  var head = 0;
  var filled = 0;
  var peak = 16.7;

  function sample(dtSec) {
    var ms = dtSec * 1000;
    ring[head] = ms;
    head = (head + 1) % N;
    if (filled < N) filled++;
    if (ms > peak) peak = ms;
    else peak = peak * 0.999 + ms * 0.001;   // decays back down
  }
  function series() {
    var out = [];
    for (var i = 0; i < filled; i++) out.push(ring[(head - filled + i + N * 2) % N]);
    return out;
  }
  function avg() {
    if (!filled) return 0;
    var s = 0;
    for (var i = 0; i < filled; i++) s += ring[i];
    return s / filled;
  }

  // ── task cost table ──────────────────────────────────────────────────────
  // `ms` is per invocation; `per` is what that invocation costs the frame
  // (a 2 ms task at 10 Hz is 0.2 ms) — the number that decides whether a
  // feature is affordable, and the one the budget reasons about.
  function taskRows() {
    var s = SK.stats();
    var fps = Math.max(30, s.fps || 60);
    return SK.tasks()
      .map(function (t) {
        var ms = Math.round((s.cost[t.name] || 0) * 1000) / 1000;
        var per = t.hz > 0 ? ms * Math.min(1, t.hz / fps) : ms;
        return {
          name: t.name,
          ms: ms,
          per: Math.round(per * 1000) / 1000,
          hz: t.hz === 0 ? "frame" : t.hz + "Hz",
          prio: t.prio,
          runs: t.runs,
          off: !!t.off
        };
      })
      .sort(function (a, b) { return b.per - a.per; });
  }
  function totalMs() {
    var rows = taskRows(), sum = 0;
    for (var i = 0; i < rows.length; i++) sum += rows[i].per;
    return Math.round(sum * 1000) / 1000;
  }

  // ── summary line ─────────────────────────────────────────────────────────
  function summary() {
    var s = SK.stats();
    return s.fps + " fps · " + s.frameMs.toFixed(1) + " ms · client " + totalMs().toFixed(2) + " ms/frame · " +
      SK.tasks().length + " tasks" + (SK.cosmeticOff() ? " · cosmetic paused" : "") +
      (SK.autopilot.active() ? " · AUTO" : "");
  }

  // ── sampling task (every frame, cosmetic) ────────────────────────────────
  SK.task({
    name: "perf-sample", hz: 0, prio: 1,
    when: function () { return SK.settings.perfOn && (SK.settings.perfGraph || SK.settings.perfAuto); },
    fn: function (dt) { sample(dt); }
  });

  // ── the graph ────────────────────────────────────────────────────────────
  var graphTasks = false;
  function pos() {
    var p = SK.settings.perfGraphPos || "bl";
    var w = 168, h = 46, pad = 12;
    var W = window.innerWidth, H = window.innerHeight;
    var x = p === "tr" || p === "br" ? W - w - pad : pad;
    var y = p === "tl" || p === "tr" ? pad + 30 : H - h - pad;
    return { x: x, y: y, w: w, h: h };
  }
  function drawGraph(ctx) {
    var s = series();
    if (!s.length) return;
    var box = pos();
    var scale = Math.max(8, SK.chNum(SK.settings.perfGraphScale, 33));
    var bw = box.w / N;

    ctx.save();
    ctx.globalAlpha = 0.9;
    ctx.fillStyle = "rgba(12,10,14,0.62)";
    ctx.fillRect(box.x, box.y, box.w, box.h);

    // budget line
    var budgetY = box.y + box.h - Math.min(1, SK.budget() / scale) * box.h;
    ctx.strokeStyle = "rgba(255,107,157,0.55)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(box.x, budgetY + 0.5);
    ctx.lineTo(box.x + box.w, budgetY + 0.5);
    ctx.stroke();

    // 16.7 / 33.3 guides
    ctx.strokeStyle = "rgba(255,255,255,0.10)";
    [16.7, 33.3].forEach(function (g) {
      if (g > scale) return;
      var y = box.y + box.h - (g / scale) * box.h + 0.5;
      ctx.beginPath();
      ctx.moveTo(box.x, y);
      ctx.lineTo(box.x + box.w, y);
      ctx.stroke();
    });

    for (var i = 0; i < s.length; i++) {
      var t = Math.min(s[i], scale);
      var bh = Math.max(1, (t / scale) * box.h);
      ctx.fillStyle = s[i] > 33.3 ? "#ff6b6b" : s[i] > 16.7 ? "#ffd166" : "#7de3ff";
      ctx.fillRect(box.x + i * bw, box.y + box.h - bh, Math.max(1, bw - 0.4), bh);
    }
    ctx.restore();
  }

  // One overlay draw task for the engine; features add painters to it so there
  // is still exactly one canvas and one clear per frame.
  var painters = [];
  SK.paint = function (name, fn) { painters.push({ name: name, fn: fn }); };
  SK.task({
    name: "overlay-paint", hz: 0, prio: 1,
    when: function () { return painters.length > 0; },
    fn: function (dt, ts) {
      var o = SK.overlay();
      var ctx = o.begin();
      var drew = false;
      for (var i = 0; i < painters.length; i++) {
        if (painters[i].fn(ctx, o, dt, ts) !== false) drew = true;
      }
      if (drew) o.end();
    }
  });
  SK.paint("perf-graph", function (ctx) {
    if (!SK.settings.perfOn || !SK.settings.perfGraph) return false;
    drawGraph(ctx);
    return true;
  });

  // ── auto quality ─────────────────────────────────────────────────────────
  var auto = { on: false, lowFor: 0, okFor: 0 };
  SK.task({
    name: "perf-auto", hz: 1, prio: 0,
    when: function () { return !!SK.settings.perfAuto; },
    fn: function () {
      var fps = SK.stats().fps;
      var target = SK.chNum(SK.settings.perfAutoFps, 110);
      if (!fps) return;
      if (fps < target * 0.92) {
        auto.lowFor++; auto.okFor = 0;
        if (auto.lowFor >= 2 && !SK.cosmeticOff()) { SK.stopCosmetic(true); auto.on = true; SK.log("auto quality: cosmetic tasks paused at", fps, "fps"); }
      } else if (fps > target) {
        auto.okFor++; auto.lowFor = 0;
        if (auto.okFor >= 4 && SK.cosmeticOff()) { SK.stopCosmetic(false); auto.on = false; SK.log("auto quality: cosmetic tasks resumed at", fps, "fps"); }
      } else { auto.lowFor = 0; auto.okFor = 0; }
    }
  });
  SK.autopilot = {
    active: function () { return auto.on; },
    status: function () {
      if (!SK.settings.perfAuto) return "off";
      return auto.on ? "paused cosmetic (low fps)" : "watching";
    }
  };

  // Turning the autopilot off must lift its pause immediately: the recovery
  // branch lives inside a task that only runs while it is on, so without this
  // the cosmetic half of the client would stay stopped until a reload.
  SK.watch(["perfAuto"], function () {
    if (!SK.settings.perfAuto) {
      auto.on = false;
      auto.lowFor = 0;
      auto.okFor = 0;
      if (SK.cosmeticOff()) { SK.stopCosmetic(false); SK.log("auto quality: off, cosmetic tasks resumed"); }
    }
  });

  // ── budget wiring ────────────────────────────────────────────────────────
  SK.watch(["perfBudget"], function () { SK.setBudget(SK.chNum(SK.settings.perfBudget, 3.5)); });
  SK.setBudget(SK.chNum(SK.settings.perfBudget, 3.5));

  SK.perf = {
    series: series, avg: avg, peak: function () { return peak; },
    taskRows: taskRows, totalMs: totalMs, summary: summary
  };
})();


// ── src/next/features/keys.js — feature: rebindable hotkeys ──
/* Hotkeys (new, no v2 equivalent).
 *
 * The v2 client had exactly one binding (Insert) hard-wired in a capture-phase
 * listener, so two clients or a game that swallows Insert left you with nothing
 * but the floating button. This is a registry instead: each hotkey has a setting
 * key, a default, and an action, so it is rebindable from the panel and the
 * panel's key-capture control cannot silently lose the old binding.
 */
(function () {
  "use strict";
  var SK = window.__sk;

  var HKS = [];

  function bound(h) {
    var v = SK.settings[h.key];
    return String(v == null || v === "" ? h.fallback : v);
  }

  function register(key, label, fallback, fn) {
    var h = { key: key, label: label, fallback: fallback, fn: fn };
    HKS.push(h);
    return h;
  }

  function list() {
    return HKS.map(function (h) {
      return { key: h.key, label: h.label, code: bound(h), fallback: h.fallback };
    });
  }

  // Two bindings on the same key: the first registration wins, so report it
  // rather than letting the panel quietly show a key that does nothing.
  function conflicts() {
    var seen = {}, out = [];
    HKS.forEach(function (h) {
      var c = bound(h);
      if (seen[c]) out.push(seen[c] + " + " + h.label + " = " + c);
      else seen[c] = h.label;
    });
    return out;
  }

  SK.task({
    name: "hotkey-conflicts", hz: 0.5, prio: 1,
    when: function () { return SK.settings.hkOn !== false; },
    fn: function () {
      var c = conflicts();
      if (c.length && !SK._hkWarned) { SK._hkWarned = true; SK.warn("hotkey conflict:", c.join("; ")); }
      if (!c.length) SK._hkWarned = false;
    }
  });

  SK.on2("key:down", function (code) {
    if (SK.settings.hkOn === false) return;
    for (var i = 0; i < HKS.length; i++) {
      if (bound(HKS[i]) === code) {
        try { HKS[i].fn(); } catch (e) { SK.warn("hotkey " + HKS[i].key, e); }
        return;
      }
    }
  });

  // Panel control: click, then press. Escape cancels, Backspace clears.
  function capture(key, fallback) {
    var b = document.createElement("button");
    b.type = "button";
    b.className = "sk-btn";
    var paint = function () {
      b.textContent = String(SK.settings[key] == null || SK.settings[key] === "" ? fallback : SK.settings[key]);
      b.title = "Click, then press a key (Backspace clears)";
    };
    b.onclick = function (e) {
      e.stopPropagation();
      b.textContent = "press a key…";
      var done = function (ev) {
        ev.preventDefault();
        ev.stopPropagation();
        window.removeEventListener("keydown", done, true);
        if (ev.code === "Escape") { /* cancel */ }
        else if (ev.code === "Backspace" || ev.code === "Delete") { SK.settings[key] = ""; SK.save(); }
        else { SK.settings[key] = ev.code; SK.save(); }
        paint();
      };
      window.addEventListener("keydown", done, true);
    };
    paint();
    return b;
  }

  // ── the bindings ─────────────────────────────────────────────────────────
  register("hkMenu", "Menu", "Insert", function () {
    if (SK.panel) SK.panel.toggle();
  });
  register("hkGraph", "Frame graph", "F8", function () {
    SK.settings.perfGraph = SK.settings.perfGraph === false;
    SK.save();
  });
  register("hkPerf", "Dashboard (graph + strip)", "F10", function () {
    SK.settings.perfOn = !SK.settings.perfOn;
    SK.save();
  });
  register("hkMove", "Movement meter", "F9", function () {
    SK.settings.mvOn = !SK.settings.mvOn;
    SK.save();
  });

  SK.hotkeys = { register: register, list: list, capture: capture, conflicts: conflicts };
})();


// ── src/next/features/move.js — feature: movement meter ──
/* Movement meter (new, no v2 equivalent).
 *
 * Stop-to-shoot discipline is the one mechanical skill that costs clutch rounds
 * and it is invisible in the HUD: you cannot see that your horizontal speed is
 * still 3.4 m/s when you pull the trigger. This reads the player's own velocity
 * (game.player.vx/vz — nothing is written back) and shows the current speed, a
 * scale, and a threshold marker, so "READY" means "your bullets will go where
 * the crosshair is".
 *
 * The scale auto-fits to the fastest you have actually moved this session, so it
 * reads correctly whatever units the map's movement uses.
 */
(function () {
  "use strict";
  var SK = window.__sk;

  var speed = 0, peak = 3, ready = false, samples = 0;

  function sample() {
    var p = SK.game.player();
    var vx = p && Number.isFinite(p.vx) ? p.vx : 0;
    var vz = p && Number.isFinite(p.vz) ? p.vz : 0;
    speed = Math.sqrt(vx * vx + vz * vz);
    if (speed > peak) peak = speed;
    else peak = peak * 0.9995 + speed * 0.0005;
    ready = speed <= SK.chNum(SK.settings.mvReady, 2);
    samples++;
    return speed;
  }

  function scale() {
    var fixed = SK.chNum(SK.settings.mvScale, 7);
    if (SK.settings.mvAutoScale === false) return Math.max(1, fixed);
    return Math.max(2.5, peak * 1.05);
  }

  function color() {
    return ready ? "#6ee7a8" : (SK.settings.mvColor || "#7de3ff");
  }

  // ── overlay widget ───────────────────────────────────────────────────────
  SK.paint("move-meter", function (ctx, o) {
    if (!SK.settings.mvOn) return false;
    if (!SK.game.live()) return false;
    sample();

    var style = SK.settings.mvStyle || "bar";
    var top = (SK.settings.mvPos || "bottom") === "top";
    var W = o.w || window.innerWidth;
    var readyNow = ready;

    ctx.save();
    ctx.textBaseline = "middle";
    ctx.font = '600 11px "Inter", system-ui, sans-serif';

    if (style === "ready") {
      // just a badge; nothing on screen while you are moving
      var bw = 74, bh = 20, bx = (W - bw) / 2, by = top ? 54 : (o.h || window.innerHeight) - 74;
      if (readyNow) {
        ctx.fillStyle = "rgba(110,231,168,0.16)";
        ctx.strokeStyle = color();
        ctx.lineWidth = 1;
        roundRect(ctx, bx, by, bw, bh, 6);
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = color();
        ctx.textAlign = "center";
        ctx.fillText("READY", bx + bw / 2, by + bh / 2 + 0.5);
      }
      ctx.restore();
      return true;
    }

    var compact = style === "compact";
    var w = compact ? 132 : 236;
    var h = compact ? 8 : 12;
    var x = (W - w) / 2;
    var y = top ? 54 : (o.h || window.innerHeight) - 74;
    var sc = scale();

    ctx.fillStyle = "rgba(12,10,14,0.60)";
    roundRect(ctx, x, y, w, h, h / 2);
    ctx.fill();

    var frac = Math.max(0, Math.min(1, speed / sc));
    ctx.fillStyle = color();
    roundRect(ctx, x, y, Math.max(2, w * frac), h, h / 2);
    ctx.fill();

    // threshold marker
    var tx = x + w * Math.max(0, Math.min(1, SK.chNum(SK.settings.mvReady, 2) / sc));
    ctx.strokeStyle = "rgba(255,255,255,0.75)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(tx + 0.5, y - 2);
    ctx.lineTo(tx + 0.5, y + h + 2);
    ctx.stroke();

    if (SK.settings.mvSpeedText !== false) {
      ctx.textAlign = "right";
      ctx.fillStyle = color();
      ctx.fillText(speed.toFixed(1) + " m/s", x + w, y - 8);
      if (readyNow) {
        ctx.textAlign = "left";
        ctx.fillText("READY", x, y - 8);
      }
    }
    ctx.restore();
    return true;
  });

  function roundRect(ctx, x, y, w, h, r) {
    var rr = Math.min(r, h / 2, w / 2);
    ctx.beginPath();
    ctx.moveTo(x + rr, y);
    ctx.lineTo(x + w - rr, y);
    ctx.arcTo(x + w, y, x + w, y + rr, rr);
    ctx.lineTo(x + w, y + h - rr);
    ctx.arcTo(x + w, y + h, x + w - rr, y + h, rr);
    ctx.lineTo(x + rr, y + h);
    ctx.arcTo(x, y + h, x, y + h - rr, rr);
    ctx.lineTo(x, y + rr);
    ctx.arcTo(x, y, x + rr, y, rr);
    ctx.closePath();
  }

  // 20 Hz is plenty for a number a human reads, and it keeps working when the
  // overlay painter is skipped (menu open and graph hidden, say).
  SK.task({
    name: "move-sample", hz: 20, prio: 1,
    when: function () { return !!SK.settings.mvOn; },
    fn: sample
  });

  SK.move = {
    sample: sample,
    speed: function () { return speed; },
    peak: function () { return peak; },
    scale: scale,
    ready: function () { return ready; },
    samples: function () { return samples; },
    status: function () {
      if (!SK.settings.mvOn) return "off";
      if (!SK.game.live()) return "waiting for a match";
      return speed.toFixed(2) + " m/s · " + (ready ? "ready" : "moving") + " · scale " + scale().toFixed(1);
    }
  };
})();


// ── src/next/features/profiles.js — feature: config profiles ──
/* Config profiles (new, no v2 equivalent).
 *
 * The v2 client has Export/Import as a JSON blob through the clipboard, which
 * means one config at a time and a text field in the way. This keeps several
 * named snapshots inside the same localStorage the client already uses, so a
 * profile is one click to save and one click to switch back.
 */
(function () {
  "use strict";
  var SK = window.__sk;
  var KEY = "sakura.profiles.v1";

  function all() {
    try {
      var raw = JSON.parse(localStorage.getItem(KEY) || "{}");
      return raw && typeof raw === "object" ? raw : {};
    } catch (_) { return {}; }
  }
  function write(obj) {
    try { localStorage.setItem(KEY, JSON.stringify(obj)); SK.alert("profiles saved"); } catch (e) { SK.warn("profile write", e); }
  }
  function names() { return Object.keys(all()).sort(); }

  function saveAs(name) {
    name = String(name || "").trim();
    if (!name) return false;
    var o = all();
    o[name] = JSON.parse(JSON.stringify(SK.settings));
    write(o);
    SK.log("profile saved:", name, "(" + Object.keys(o[name]).length + " keys)");
    return true;
  }

  function load(name) {
    var snap = all()[name];
    if (!snap) return false;
    var n = 0;
    for (var k in snap) {
      if (Object.prototype.hasOwnProperty.call(SK.settings, k)) { SK.settings[k] = snap[k]; n++; }
    }
    SK.save();
    SK.flush();          // write through now: a load that is not persisted is a trap
    SK.log("profile loaded:", name, "(" + n + " keys)");
    return true;
  }

  function del(name) {
    var o = all();
    if (!o[name]) return false;
    delete o[name];
    write(o);
    return true;
  }

  function size(name) {
    var s = all()[name];
    return s ? Object.keys(s).length + " keys" : "";
  }

  SK.profiles = { names: names, save: saveAs, load: load, del: del, size: size, key: KEY };
})();


// ── src/next/features/hud.js — feature: HUD group (keystrokes, watermark, FPS, clock, bars, ammo) ──
/* HUD group (port of the v2 client's overlay HUD extras).
 *
 * Ported from clutcher.js lines 619-670 (keystrokes), 912-969 (pill helpers),
 * 1121-1324 (watermark / FPS / clock+session / bars / ammo) and 552-616 (the
 * drag editor). The drawing is the v2 drawing, deliberately: this pass is about
 * running it on the rewrite's single overlay canvas and scheduler instead of the
 * v2 client's per-frame monolith, not about redesigning it.
 *
 * What changed structurally:
 *   - everything is one painter on SK.paint, so there is still exactly one
 *     canvas and one clear per frame
 *   - the props a frame needs (dt, the rAF timestamp) are handed to the painter
 *     instead of being closed over by a global loop
 *   - session/shots/hits tracking is independent of which widgets are on, like
 *     v2: turn every HUD row off and the counters still accrue
 *   - the drag editor writes ksX/ksY and fpsX/fpsY; the lifted setMenuOpen (in
 *     panel.gen.js) already flips hudEdit and the overlay's pointer-events, so
 *     that half needed no new code
 *
 * Read-only towards the game: player fields and the game's own HUD DOM (#hp,
 * #armor, #ammo, #reserve, #hitmark) are read, never written.
 */
(function () {
  "use strict";
  var SK = window.__sk;
  function S() { return SK.settings; }
  var ACCENT = "#ff6b9d", ACCENT_HI = "#ffb3c6";

  // ── state ─────────────────────────────────────────────────────────────────
  var fpsState = { ema: 0, hist: [] };
  var clicks = { 1: [], 3: [] };
  var stShots = 0, stHits = 0, stPrevMouse = false, stHitEl = null, stHitOn = false;
  var domCache = { hp: {}, armor: {}, ammo: {}, reserve: {} };
  var hudRects = {};

  // ── helpers (v2: hudInt / hudGet / hudClockStr) ───────────────────────────
  function hudInt(el) {
    if (!el || !el.isConnected) return null;
    var m = /(\d+)/.exec(el.textContent || "");
    return m ? parseInt(m[1], 10) : null;
  }
  function hudGet(id) {
    var cache = domCache[id];
    if (!cache) return null;
    if (!cache.el || !cache.el.isConnected) {
      try { cache.el = document.getElementById(id); } catch (_) { cache.el = null; }
    }
    return cache.el;
  }
  function hudClockStr() {
    var d = new Date();
    var p = function (n) { return String(n).padStart(2, "0"); };
    if (S().info24) return p(d.getHours()) + ":" + p(d.getMinutes()) + ":" + p(d.getSeconds());
    var h = d.getHours() % 12 || 12;
    return h + ":" + p(d.getMinutes()) + ":" + p(d.getSeconds());
  }
  function hudCorner(o, pos, w, h, m) {
    m = m == null ? 16 : m;
    return [pos.endsWith("r") ? o.w - m - w : m, pos[0] === "b" ? o.h - m - h : m];
  }
  function pill(ctx, o, lines, pos, fs, accentCol) {
    ctx.save();
    ctx.font = "700 " + fs + "px ui-sans-serif,system-ui,sans-serif";
    var tw = 0;
    for (var i = 0; i < lines.length; i++) tw = Math.max(tw, ctx.measureText(lines[i]).width);
    var pw = tw + 20, ph = lines.length * (fs + 6) + 12;
    var xy = hudCorner(o, pos, pw, ph), x = xy[0], y = xy[1];
    ctx.fillStyle = "rgba(22,8,16,0.7)";
    ctx.beginPath();
    if (ctx.roundRect) ctx.roundRect(x, y, pw, ph, 8); else ctx.rect(x, y, pw, ph);
    ctx.fill();
    ctx.strokeStyle = "rgba(255,107,157,0.35)";
    ctx.lineWidth = 1;
    ctx.stroke();
    if (accentCol) {
      ctx.fillStyle = accentCol;
      ctx.fillRect(x + 8, y + 8, 3, ph - 16);
    }
    ctx.fillStyle = "#ffb3c6";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    for (var j = 0; j < lines.length; j++) ctx.fillText(lines[j], x + (accentCol ? 16 : 10), y + 7 + j * (fs + 6));
    ctx.restore();
    return ph;
  }
  function cps(button) {
    var list = clicks[button] || [];
    var t = SK.now();
    while (list.length && t - list[0] > 1000) list.shift();
    return list.length;
  }

  // ── combat counters (v2: stTrackCombat) ──────────────────────────────────
  // Local input for shots, the game's own hitmarker for hits. Feeds the
  // Shots/Hits/Acc lines on the clock pill; the kill banner is the stats pass.
  function trackCombat() {
    var m = SK.held.has("mouse1");
    if (m && !stPrevMouse) stShots++;
    stPrevMouse = m;
    if (!stHitEl || !stHitEl.isConnected) {
      try { stHitEl = document.getElementById("hitmark"); } catch (_) { stHitEl = null; }
    }
    var pop = false;
    if (stHitEl) {
      try { pop = stHitEl.classList.contains("pop") || Number(stHitEl.style.opacity || 0) > 0.05; } catch (_) {}
    }
    if (pop && !stHitOn) stHits++;
    stHitOn = pop;
  }

  // ── keystrokes (v2: drawKeystrokes) ───────────────────────────────────────
  function drawKeys(ctx, o) {
    var s = SK.chNum(S().ksScale, 1) || 1;
    var k = 34 * s, gap = 4 * s;
    var totalW = k * 3 + gap * 2, totalH = k * 3 + gap * 2;
    var pos = S().ksPos || "bl";
    var x0 = S().ksFree
      ? SK.clamp(SK.chNum(S().ksX, 0), 0, 100) / 100 * (o.w - totalW)
      : pos === "br" ? o.w - 16 - totalW : 16;
    var y0 = S().ksFree
      ? SK.clamp(SK.chNum(S().ksY, 85), 0, 100) / 100 * (o.h - totalH)
      : pos === "ml" ? o.h / 2 - totalH / 2 : o.h - totalH - (pos === "bl" ? 96 : 150);
    hudRects.keys = { x: x0, y: y0, w: totalW, h: totalH };

    var key = function (label, code, x, y, w, h, sub) {
      var down = SK.held.has(code);
      ctx.save();
      ctx.beginPath();
      if (ctx.roundRect) ctx.roundRect(x, y, w, h, 7 * s); else ctx.rect(x, y, w, h);
      ctx.fillStyle = down ? "rgba(255,107,157,0.85)" : "rgba(22,8,16,0.7)";
      ctx.fill();
      ctx.lineWidth = 1;
      ctx.strokeStyle = down ? ACCENT_HI : "rgba(255,107,157,0.35)";
      ctx.stroke();
      if (down) {
        ctx.shadowColor = ACCENT;
        ctx.shadowBlur = 14;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
      ctx.fillStyle = down ? "#fff" : "rgba(255,235,240,0.8)";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.font = "700 " + Math.round(12 * s) + "px ui-sans-serif,system-ui,sans-serif";
      ctx.fillText(label, x + w / 2, y + h / 2 - (sub ? 5 * s : 0));
      if (sub) {
        ctx.font = "600 " + Math.round(9 * s) + "px ui-sans-serif,system-ui,sans-serif";
        ctx.fillStyle = down ? "#fff" : "rgba(255,235,240,0.55)";
        ctx.fillText(sub, x + w / 2, y + h / 2 + 8 * s);
      }
      ctx.restore();
    };

    key("W", "KeyW", x0 + k + gap, y0, k, k);
    key("A", "KeyA", x0, y0 + k + gap, k, k);
    key("S", "KeyS", x0 + k + gap, y0 + k + gap, k, k);
    key("D", "KeyD", x0 + (k + gap) * 2, y0 + k + gap, k, k);
    var half = (totalW - gap) / 2, ry = y0 + (k + gap) * 2;
    key("LMB", "mouse1", x0, ry, half, k, S().ksCps ? cps(1) + " CPS" : "");
    key("RMB", "mouse3", x0 + half + gap, ry, half, k, S().ksCps ? cps(3) + " CPS" : "");
    key("", "Space", x0, ry + k + gap, totalW, k * 0.45);
    if (hudEdit) outline(ctx, hudRects.keys, "KEYS");
  }

  // ── watermark, FPS, clock, bars, ammo (v2: drawHudExtras) ────────────────
  function drawExtras(ctx, o, now, dt) {
    var s = S();
    var playing = SK.game.playing();
    if (dt > 0) {
      var f = 1 / Math.max(1e-3, dt);
      fpsState.ema = fpsState.ema ? fpsState.ema + (f - fpsState.ema) * 0.06 : f;
      fpsState.hist.push(f);
      if (fpsState.hist.length > 120) fpsState.hist.shift();
    }
    var pl = SK.game.player();
    var hudSesObj = hudSes;
    if (playing && hudSesObj) {
      if (!hudSesObj.t0) {
        hudSesObj.t0 = now;
        hudSesObj.kills = 0;
        hudSesObj.deaths = 0;
        hudSesObj.wasAlive = true;
        hudSesObj.lastKills = pl && isFinite(pl.kills) ? pl.kills : null;
      }
      if (pl && isFinite(pl.kills)) {
        if (hudSesObj.lastKills == null) hudSesObj.lastKills = pl.kills;
        if (pl.kills > hudSesObj.lastKills) hudSesObj.kills += pl.kills - hudSesObj.lastKills;
        hudSesObj.lastKills = pl.kills;
      }
      var alive = !pl || pl.alive !== false;
      if (hudSesObj.wasAlive && !alive) hudSesObj.deaths++;
      hudSesObj.wasAlive = alive;
    }

    // Watermark
    if (s.hudWm && playing) {
      var parts = [s.wmText || "Sakura"];
      if (s.wmFps) parts.push(Math.round(fpsState.ema) + " FPS");
      if (s.wmClock) parts.push(hudClockStr());
      if (s.wmKills && hudSesObj) parts.push(hudSesObj.kills + " K");
      var wfs = Math.max(9, SK.chNum(s.wmSize, 12));
      ctx.save();
      ctx.font = "700 " + wfs + "px ui-sans-serif,system-ui,sans-serif";
      var wtw = 0;
      for (var i = 0; i < parts.length; i++) wtw = Math.max(wtw, ctx.measureText(parts[i]).width);
      var wpw = wtw + 20, wph = parts.length * (wfs + 6) + 12;
      var wxy = hudCorner(o, s.wmPos || "tl", wpw, wph), wx = wxy[0], wy = wxy[1];
      ctx.globalAlpha = SK.clamp(SK.chNum(s.wmOp, 0.9), 0, 1);
      if (s.wmBg !== false) {
        ctx.fillStyle = "rgba(22,8,16,0.7)";
        ctx.beginPath();
        if (ctx.roundRect) ctx.roundRect(wx, wy, wpw, wph, 8); else ctx.rect(wx, wy, wpw, wph);
        ctx.fill();
        ctx.strokeStyle = "rgba(255,107,157,0.35)";
        ctx.lineWidth = 1;
        ctx.stroke();
      }
      if (s.wmAccent !== false) {
        ctx.fillStyle = ACCENT;
        ctx.fillRect(wx + 8, wy + 8, 3, wph - 16);
      }
      ctx.fillStyle = s.wmRainbow ? "hsl(" + ((now / 4) % 360) + " 100% 75%)" : "#ffb3c6";
      ctx.textAlign = "left";
      ctx.textBaseline = "top";
      for (var w = 0; w < parts.length; w++) {
        ctx.fillText(parts[w], wx + (s.wmAccent !== false ? 16 : 10), wy + 7 + w * (wfs + 6));
      }
      ctx.restore();
    }

    // FPS counter + graph
    if (s.hudFps && playing) {
      var ffs = Math.max(9, SK.chNum(s.fpsSize, 12));
      var lines = [Math.round(fpsState.ema) + " FPS"];
      if (s.fpsAvg && fpsState.hist.length) {
        var sum = 0;
        for (var h = 0; h < fpsState.hist.length; h++) sum += fpsState.hist[h];
        lines.push("avg " + Math.round(sum / fpsState.hist.length));
      }
      var pos = s.fpsPos || "tr";
      ctx.save();
      ctx.font = "700 " + ffs + "px ui-sans-serif,system-ui,sans-serif";
      var ftw = 0;
      for (var l = 0; l < lines.length; l++) ftw = Math.max(ftw, ctx.measureText(lines[l]).width);
      var fpw = ftw + 20, fph = lines.length * (ffs + 6) + 12;
      var fxy;
      if (s.fpsFree) {
        fxy = [SK.clamp(SK.chNum(s.fpsX, 16), 0, Math.max(0, o.w - 90)), SK.clamp(SK.chNum(s.fpsY, 16), 0, Math.max(0, o.h - 60))];
      } else {
        fxy = hudCorner(o, pos, fpw, fph);
      }
      var fx = fxy[0], fy = fxy[1];
      hudRects.fps = { x: fx, y: fy, w: fpw, h: fph };
      if (s.fpsBg !== false) {
        ctx.fillStyle = "rgba(22,8,16,0.7)";
        ctx.beginPath();
        if (ctx.roundRect) ctx.roundRect(fx, fy, fpw, fph, 8); else ctx.rect(fx, fy, fpw, fph);
        ctx.fill();
        ctx.strokeStyle = "rgba(255,107,157,0.35)";
        ctx.lineWidth = 1;
        ctx.stroke();
      }
      ctx.fillStyle = s.fpsColor || "#ffb3c6";
      ctx.textAlign = "left";
      ctx.textBaseline = "top";
      for (var q = 0; q < lines.length; q++) ctx.fillText(lines[q], fx + 10, fy + 7 + q * (ffs + 6));
      if (s.fpsGraph && fpsState.hist.length > 1) {
        var gh = Math.max(8, SK.chNum(s.fpsGraphH, 24));
        var gy = fy + fph + 4;
        var max = 60;
        for (var mI = 0; mI < fpsState.hist.length; mI++) if (fpsState.hist[mI] > max) max = fpsState.hist[mI];
        ctx.strokeStyle = s.fpsGraphColor || "rgba(255,107,157,0.9)";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        for (var gi = 0; gi < fpsState.hist.length; gi++) {
          var gx = fx + (gi / (fpsState.hist.length - 1)) * fpw;
          var gyy = gy + gh - Math.min(1, fpsState.hist[gi] / max) * gh;
          if (gi) ctx.lineTo(gx, gyy); else ctx.moveTo(gx, gyy);
        }
        ctx.stroke();
      }
      ctx.restore();
      if (hudEdit) outline(ctx, hudRects.fps, "FPS");
    }

    // Clock / session / combat pill
    if (s.hudInfo && playing) {
      var ilines = [];
      if (s.infoClock) ilines.push(hudClockStr());
      if (s.infoDate) {
        var d = new Date();
        ilines.push(d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"));
      }
      if (s.infoSession && hudSesObj && hudSesObj.t0) {
        var sec = ((now - hudSesObj.t0) / 1000) | 0;
        ilines.push(String((sec / 60) | 0).padStart(2, "0") + ":" + String(sec % 60).padStart(2, "0"));
      }
      if (s.infoKills && hudSesObj) ilines.push("K " + hudSesObj.kills + " / D " + hudSesObj.deaths);
      if (s.infoKD && hudSesObj) ilines.push("K/D " + (hudSesObj.kills / Math.max(1, hudSesObj.deaths)).toFixed(2));
      if (s.infoShots !== false) ilines.push("Shots " + stShots);
      if (s.infoHits !== false) ilines.push("Hits " + stHits);
      if (s.infoAcc !== false) ilines.push("Acc " + (stShots ? Math.round(stHits / stShots * 100) : 0) + "%");
      if (ilines.length) pill(ctx, o, ilines, s.infoPos || "br", Math.max(9, SK.chNum(s.infoSize, 12)), ACCENT);
    }

    // HP / armor bars
    if (s.hudBars && playing) {
      var hp = hudInt(hudGet("hp"));
      var armor = hudInt(hudGet("armor"));
      if (hp != null) {
        var bw = Math.max(80, SK.chNum(s.barsW, 220));
        var bh = Math.max(6, SK.chNum(s.barsH, 14));
        var showArmor = armor != null && s.barsArmor !== false;
        var rows = showArmor ? 2 : 1;
        var bph = rows * (bh + 4) + 12;
        var bxy = hudCorner(o, s.barsPos || "bl", bw, bph), bx = bxy[0], by = bxy[1];
        ctx.save();
        if (s.barsBg !== false) {
          ctx.fillStyle = "rgba(22,8,16,0.7)";
          ctx.beginPath();
          if (ctx.roundRect) ctx.roundRect(bx, by, bw, bph, 8); else ctx.rect(bx, by, bw, bph);
          ctx.fill();
        }
        var lowTh = Number(s.barsLowAt);
        var low = s.barsLow !== false && hp <= (isFinite(lowTh) ? lowTh : 30);
        var bar = function (x2, y2, frac, col) {
          ctx.fillStyle = "rgba(255,255,255,0.08)";
          ctx.fillRect(x2, y2, bw - 20, bh);
          ctx.fillStyle = col;
          ctx.fillRect(x2, y2, (bw - 20) * SK.clamp(frac, 0, 1), bh);
        };
        bar(bx + 10, by + 7, hp / 100, low ? "#ff4444" : (s.hpColor || "#7dff8a"));
        if (showArmor) bar(bx + 10, by + 7 + bh + 4, armor / 100, s.armorColor || "#7db8f0");
        if (s.barsNumbers !== false) {
          ctx.fillStyle = "#fff";
          ctx.font = "700 " + Math.max(9, bh - 2) + "px ui-sans-serif,system-ui,sans-serif";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText(String(hp), bx + 10 + (bw - 20) / 2, by + 7 + bh / 2);
          if (showArmor) ctx.fillText(String(armor), bx + 10 + (bw - 20) / 2, by + 7 + bh + 4 + bh / 2);
        }
        ctx.restore();
      }
    }

    // Ammo counter
    if (s.hudAmmo && playing) {
      var ammo = hudInt(hudGet("ammo"));
      if (ammo != null) {
        var reserve = hudInt(hudGet("reserve"));
        if (reserve == null) {
          var ael = hudGet("ammo");
          var all = ((ael && ael.textContent) || "").match(/\d+/g) || [];
          if (all.length > 1) reserve = parseInt(all[1], 10);
        }
        var afs = Math.max(12, SK.chNum(s.ammoSize, 20));
        var lowAt = Number(s.ammoLowAt);
        var alow = s.ammoLow !== false && ammo <= (isFinite(lowAt) ? lowAt : 6);
        var amain = String(ammo);
        var asub = (s.ammoReserve !== false && reserve != null) ? "/ " + reserve : "";
        ctx.save();
        ctx.font = "800 " + afs + "px ui-sans-serif,system-ui,sans-serif";
        var atw = ctx.measureText(amain + " " + asub).width;
        var apw = atw + 24, aph = afs + 18;
        var axy = hudCorner(o, s.ammoPos || "br", apw, aph), ax = axy[0], ay = axy[1];
        if (s.ammoBg !== false) {
          ctx.fillStyle = "rgba(22,8,16,0.7)";
          ctx.beginPath();
          if (ctx.roundRect) ctx.roundRect(ax, ay, apw, aph, 8); else ctx.rect(ax, ay, apw, aph);
          ctx.fill();
          ctx.strokeStyle = alow ? "#ff4444" : "rgba(255,107,157,0.35)";
          ctx.lineWidth = 1;
          ctx.stroke();
        }
        ctx.fillStyle = alow ? "#ff4444" : (s.ammoColor || "#ffffff");
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(amain + (asub ? " " + asub : ""), ax + apw / 2, ay + aph / 2 + 1);
        ctx.restore();
      }
    }
  }

  // ── the panel's HUD-edit outlines (v2: hudOutline) ───────────────────────
  function outline(ctx, r, label) {
    if (!r) return;
    ctx.save();
    ctx.setLineDash([5, 4]);
    ctx.lineWidth = 1;
    ctx.strokeStyle = "rgba(255,107,157,0.9)";
    ctx.strokeRect(r.x + 0.5, r.y + 0.5, r.w - 1, r.h - 1);
    ctx.setLineDash([]);
    ctx.font = "700 10px ui-sans-serif,system-ui,sans-serif";
    ctx.fillStyle = ACCENT;
    ctx.textAlign = "left";
    ctx.textBaseline = "bottom";
    ctx.fillText(label, r.x - 4, r.y - 6);
    ctx.restore();
  }

  // ── drag editor (v2: 552-616) ────────────────────────────────────────────
  // hudEdit is flipped by the lifted setMenuOpen(): while the Lunar menu is
  // open, the overlay takes the pointer and widgets can be dragged.
  var drag = null;
  function hitKey(x, y) {
    var keys = ["fps", "keys"];
    for (var i = 0; i < keys.length; i++) {
      var r = hudRects[keys[i]];
      if (r && x >= r.x && y >= r.y && x <= r.x + r.w && y <= r.y + r.h) return keys[i];
    }
    return null;
  }
  function moveTo(k, nx, ny) {
    var W = window.innerWidth, H = window.innerHeight;
    if (k === "keys") {
      var kr = hudRects.keys;
      S().ksFree = true;
      S().ksX = Math.round(SK.clamp(nx / Math.max(1, W - kr.w) * 100, 0, 100));
      S().ksY = Math.round(SK.clamp(ny / Math.max(1, H - kr.h) * 100, 0, 100));
    } else if (k === "fps") {
      S().fpsFree = true;
      S().fpsX = Math.round(SK.clamp(nx, 0, Math.max(0, W - 90)));
      S().fpsY = Math.round(SK.clamp(ny, 0, Math.max(0, H - 60)));
    }
  }
  SK.on(window, "mousedown", function (e) {
    if (!hudEdit || e.button !== 0) return;
    var k = hitKey(e.clientX, e.clientY);
    if (!k) return;
    e.preventDefault();
    e.stopPropagation();
    var r = hudRects[k];
    drag = { k: k, dx: e.clientX - r.x, dy: e.clientY - r.y };
  }, true);
  SK.on(window, "mousemove", function (e) {
    if (!hudEdit) return;
    if (!drag) {
      overlay.style.cursor = hitKey(e.clientX, e.clientY) ? "move" : "default";
      return;
    }
    moveTo(drag.k, e.clientX - drag.dx, e.clientY - drag.dy);
  }, true);
  SK.on(window, "mouseup", function () {
    if (drag) { drag = null; SK.save(); }
  }, true);

  // ── CPS counting + combat tracking wiring ────────────────────────────────
  SK.on2("key:down", function (code) {
    if (code === "mouse1" || code === "mouse3") {
      var b = code === "mouse1" ? 1 : 3;
      (clicks[b] || (clicks[b] = [])).push(SK.now());
    }
  });

  // ── the painter ──────────────────────────────────────────────────────────
  // Always registered: the session, shot and hit counters accrue whether or not
  // any widget is switched on, exactly like the v2 loop. Returns false when it
  // drew nothing so the engine can skip the canvas clear.
  SK.paint("hud", function (ctx, o, dt, ts) {
    var playing = SK.game.playing();
    trackCombat();
    if (!playing) return false;
    var drew = false;
    var now = ts || SK.now();
    drawExtras(ctx, o, now, dt);
    drew = true;
    if (S().keystrokes) { drawKeys(ctx, o); drew = true; }
    return drew;
  });

  SK.hud = {
    resetShots: function () { stShots = 0; stHits = 0; },
    shots: function () { return stShots; },
    hits: function () { return stHits; },
    ses: function () { return hudSes; },
    fps: function () { return fpsState.ema; },
    hist: function () { return fpsState.hist.length; },
    cps: cps,
    rects: function () { return hudRects; },
    moveTo: moveTo
  };
})();


// ── src/next/ext.js — feature: EXTRA tab in the Lunar panel ──
/* EXTRA tab (new).
 *
 * The panel is lifted verbatim from the v2 client, so the new modules cannot be
 * added by editing it — and they should not be: "same UI" is only true if the
 * lifted panel stays lifted. Instead this layer attaches a third tab to the
 * Lunar panel after it is built, and builds its cards with the panel's own
 * vocabulary (row / toggleSwitch / rangeField / selectField / actionBtn /
 * moduleCard), so everything here looks native without touching generated code.
 *
 * The panel is destroyed and rebuilt by rebuildPanel(), so attaching is a small
 * idempotent mount that the engine re-runs whenever the tab goes missing.
 */
(function () {
  "use strict";
  var SK = window.__sk;
  function S() { return SK.settings; }

  // ── live elements: one 2 Hz task refreshes them, disconnected ones are
  // dropped, so a panel rebuild cannot leak readers. ─────────────────────────
  var liveList = [];
  function live(el, fn) { liveList.push({ el: el, fn: fn }); return el; }
  SK.task({
    name: "ext-live", hz: 2, prio: 1,
    when: function () { return liveList.length > 0; },
    fn: function () {
      for (var i = liveList.length - 1; i >= 0; i--) {
        var it = liveList[i];
        if (!it.el.isConnected) { liveList.splice(i, 1); continue; }
        try { it.fn(it.el); } catch (e) { SK.warn("ext live", e); }
      }
    }
  });

  function group() {
    var g = document.createElement("div");
    g.style.cssText = "display:flex;gap:6px;align-items:center;";
    for (var i = 0; i < arguments.length; i++) g.appendChild(arguments[i]);
    return g;
  }
  function val(text) {
    var s = document.createElement("span");
    s.className = "sk-val";
    s.textContent = text;
    return s;
  }

  // ── Performance ──────────────────────────────────────────────────────────
  function perfCard() {
    var s = S();
    var autoVal = val(SK.autopilot.status());
    live(autoVal, function (el) { el.textContent = SK.autopilot.status(); });

    var table = document.createElement("div");
    table.style.cssText = "font:500 11px/1.65 ui-monospace,Menlo,Consolas,monospace;opacity:.75;white-space:pre;overflow-x:auto;padding:2px 0 0;";
    live(table, function (el) {
      if (s.perfTable === false) { el.textContent = ""; return; }
      var rows = SK.perf.taskRows().slice(0, 8);
      el.textContent = "ms/frame   task                     cadence (per run)" + rows.map(function (r) {
        return "\n" + r.per.toFixed(3).padStart(7) + "   " + r.name.padEnd(22) + "  " + r.hz +
          (r.hz === "frame" ? "" : " (" + r.ms.toFixed(2) + "ms)") + (r.off ? "  OFF" : "");
      }).join("");
    });

    return moduleCard("Performance", "Frame graph, per-task cost, and auto quality. All of it reads the client's own instrumentation.", s.perfOn, function (v) {
      s.perfOn = v; SK.save();
    }, [
      row("Panel strip", "FPS / frame time / client cost, in the header", toggleSwitch(s.perfStrip !== false, function (v) { s.perfStrip = v; SK.save(); })),
      row("Frame graph", "Frame time on the overlay", toggleSwitch(s.perfGraph !== false, function (v) { s.perfGraph = v; SK.save(); })),
      row("Graph corner", null, selectField(s.perfGraphPos || "bl", [["bl", "Bottom left"], ["br", "Bottom right"], ["tl", "Top left"], ["tr", "Top right"]], function (v) { s.perfGraphPos = v; SK.save(); })),
      row("Graph scale", "Worst frame time shown, ms", rangeField(SK.chNum(s.perfGraphScale, 33), 12, 100, 1, function (v) { s.perfGraphScale = v; SK.save(); })),
      row("Cosmetic budget", "Cosmetic tasks yield above this client cost, ms", rangeField(SK.chNum(s.perfBudget, 3.5), 0.5, 12, 0.5, function (v) { s.perfBudget = v; SK.save(); })),
      row("Auto quality", "Pause cosmetic tasks while FPS is under target", toggleSwitch(!!s.perfAuto, function (v) { s.perfAuto = v; SK.save(); })),
      row("Target FPS", null, rangeField(SK.chNum(s.perfAutoFps, 110), 30, 240, 5, function (v) { s.perfAutoFps = v; SK.save(); })),
      row("Auto state", "Live", autoVal),
      row("Reset cost", "Clear the per-task averages", actionBtn("Reset", function () {
        var c = SK.stats().cost;
        for (var k in c) delete c[k];
        SK.alert("task costs reset");
      })),
      table
    ]);
  }

  // ── Hotkeys ──────────────────────────────────────────────────────────────
  function hotkeyCard() {
    var s = S();
    var warn = val("no conflicts");
    live(warn, function (el) {
      var c = SK.hotkeys.conflicts();
      el.textContent = c.length ? c.join(" · ") : "no conflicts";
      el.style.color = c.length ? "#ffb86b" : "";
    });

    var rows = SK.hotkeys.list().map(function (h) {
      return row(h.label, "Click, then press a key", SK.hotkeys.capture(h.key, h.fallback));
    });
    rows.push(row("Conflicts", "Two modules on one key", warn));

    return moduleCard("Hotkeys", "Rebindable client keys. The menu key is no longer welded to Insert.", s.hkOn !== false, function (v) {
      s.hkOn = v; SK.save();
    }, rows);
  }

  // ── Movement meter ───────────────────────────────────────────────────────
  function moveCard() {
    var s = S();
    var status = val(SK.move.status());
    live(status, function (el) {
      el.textContent = SK.move.status();
      el.style.color = SK.move.ready() ? "#6ee7a8" : "";
    });

    return moduleCard("Movement meter", "Stop-to-shoot discipline: your horizontal speed and whether a shot would fly straight.", !!s.mvOn, function (v) {
      s.mvOn = v; SK.save();
    }, [
      row("Status", "Live", status),
      row("Style", null, selectField(s.mvStyle || "bar", [["bar", "Bar + speed"], ["compact", "Compact"], ["ready", "READY badge only"]], function (v) { s.mvStyle = v; SK.save(); })),
      row("Position", null, selectField(s.mvPos || "bottom", [["bottom", "Bottom"], ["top", "Top"]], function (v) { s.mvPos = v; SK.save(); })),
      row("Colour", "Used while moving", colorField(s.mvColor || "#7de3ff", function (v) { s.mvColor = v; SK.save(); })),
      row("Ready under", "Speed that counts as stopped, m/s", rangeField(SK.chNum(s.mvReady, 2), 0.1, 10, 0.1, function (v) { s.mvReady = v; SK.save(); })),
      row("Auto scale", "Fit the bar to your fastest observed speed", toggleSwitch(s.mvAutoScale !== false, function (v) { s.mvAutoScale = v; SK.save(); })),
      row("Fixed scale", "Used when auto scale is off, m/s", rangeField(SK.chNum(s.mvScale, 7), 1, 40, 1, function (v) { s.mvScale = v; SK.save(); })),
      row("Speed text", null, toggleSwitch(s.mvSpeedText !== false, function (v) { s.mvSpeedText = v; SK.save(); }))
    ]);
  }

  // ── Config profiles ──────────────────────────────────────────────────────
  function profileCard() {
    var sel = document.createElement("select");
    sel.className = "sk-field";
    var sig = null;
    live(sel, function (el) {
      var names = SK.profiles.names();
      var key = names.join("|");
      if (key === sig) return;
      sig = key;
      var keep = el.value;
      el.replaceChildren();
      if (!names.length) {
        var o = document.createElement("option");
        o.value = ""; o.textContent = "no profiles yet";
        el.appendChild(o);
        el.disabled = true;
      } else {
        el.disabled = false;
        names.forEach(function (n) {
          var op = document.createElement("option");
          op.value = n; op.textContent = n + "  (" + SK.profiles.size(n) + ")";
          el.appendChild(op);
        });
        if (keep) el.value = keep;
      }
    });

    var input = document.createElement("input");
    input.className = "sk-field";
    input.type = "text";
    input.placeholder = "New profile name";
    input.setAttribute("spellcheck", "false");

    return moduleCard("Profiles", "Named snapshots of every setting, kept in the client's own storage.", true, null, [
      row("Saved profiles", "Load or delete", sel),
      row("Name", "Save the current settings under", input),
      row("Actions", null, group(
        actionBtn("Save", function () {
          var n = String(input.value || "").trim();
          if (!n) { SK.alert("give the profile a name"); return; }
          if (SK.profiles.save(n)) { input.value = ""; SK.alert("saved “" + n + "”"); }
        }),
        actionBtn("Load", function () {
          var n = sel.value;
          if (!n) return;
          if (SK.profiles.load(n)) {
            SK.alert("loaded “" + n + "”");
            SK.panel.rebuild();      // every other row re-reads the settings
            mountExt();
          }
        }),
        actionBtn("Delete", function () {
          var n = sel.value;
          if (!n) return;
          SK.profiles.del(n);
          SK.alert("deleted “" + n + "”");
        })
      )),
      row("Copy JSON", "Same shape as the v2 Export row", actionBtn("Copy", function () {
        var text = JSON.stringify(SK.settings, null, 2);
        try {
          navigator.clipboard.writeText(text);
          SK.alert("settings copied");
        } catch (_) { SK.alert("clipboard blocked"); }
      })),
      row("Paste JSON", "Replace settings from the clipboard", actionBtn("Paste", function () {
        try {
          navigator.clipboard.readText().then(function (t) {
            var o = JSON.parse(t);
            var n = 0;
            for (var k in o) if (Object.prototype.hasOwnProperty.call(SK.settings, k)) { SK.settings[k] = o[k]; n++; }
            SK.save(); SK.flush();
            SK.alert("applied " + n + " keys");
            SK.panel.rebuild();
            mountExt();
          }, function () { SK.alert("clipboard blocked"); });
        } catch (_) { SK.alert("clipboard blocked"); }
      }))
    ]);
  }

  // ── Pointer hygiene ──────────────────────────────────────────────────────
  // The fix for the camera flicks. It has no v2 equivalent: the v2 client runs
  // the same guard, but unconditionally and with no row, so the switch and the
  // counters live here instead of in the lifted panel.
  function pointerCard() {
    var s = S();
    var blocked = val("0");
    live(blocked, function (el) {
      var st = SK.pointer.state();
      el.textContent = String(st.blocked) + (st.last ? "  " + st.last : "");
      el.style.color = st.blocked ? "#7dff8a" : "";
    });

    var cursor = val("—");
    live(cursor, function (el) {
      var st = SK.pointer.state();
      el.textContent = st.locked ? "locked" : st.freed ? "freed for menu" : "free";
      if (st.armed) el.textContent += " · transition";
    });

    return moduleCard("Pointer", "The menu frees the cursor on purpose; this keeps that cursor - and the delta a re-lock carries - from moving the camera.", s.ptrGuard !== false, function (v) {
      s.ptrGuard = v; SK.save();
    }, [
      row("Blocked", "Look events kept from the game since load", blocked),
      row("Cursor", "Live pointer state", cursor)
    ]);
  }

  // ── pane + tab ───────────────────────────────────────────────────────────
  function paneCards() {
    var intro = document.createElement("div");
    intro.className = "sk-mdesc";
    intro.style.cssText = "padding:0 2px 8px;";
    intro.textContent = "New modules — features the v2 client never had, running on the rewrite's engine.";
    return [intro, perfCard(), hotkeyCard(), pointerCard(), moveCard(), profileCard()];
  }

  var mountedOn = null, tabBtn = null, pane = null, tabsRef = [];

  function renderPane() {
    if (!pane) return;
    pane.replaceChildren.apply(pane, paneCards());
  }

  function activate(mine) {
    tabBtn.classList.toggle("active", mine);
    var p = mountedOn;
    var grid = p.querySelector(".ln-grid");
    var side = p.querySelector(".ln-side");
    var setPane = p.querySelector(".ln-settings");
    var srch = p.querySelector(".ln-search");
    if (mine) {
      // The lifted tabs only deactivate each other when one of them is clicked,
      // so selecting EXTRA has to stand MODS/SETTINGS down itself.
      tabsRef.forEach(function (b) { b.classList.remove("active"); });
      if (grid) grid.style.display = "none";
      if (side) side.style.display = "none";
      if (setPane) setPane.style.display = "none";
      if (srch) srch.style.visibility = "hidden";
      pane.style.display = "";
      renderPane();
    } else {
      pane.style.display = "none";
    }
  }

  function mountStrip(head) {
    if (head.querySelector(".sk-strip")) return;
    var strip = document.createElement("span");
    strip.className = "sk-strip";
    strip.style.cssText = "margin-left:auto;margin-right:10px;font-size:10px;font-weight:600;opacity:.6;white-space:nowrap;";
    live(strip, function (el) {
      var off = S().perfStrip === false;
      el.style.display = off ? "none" : "";
      if (!off) el.textContent = SK.perf.summary();
    });
    head.insertBefore(strip, head.querySelector(".ln-search"));
  }

  function mountExt() {
    var p = panelEl;
    if (!p) return;
    if (mountedOn !== p) { mountedOn = p; tabBtn = null; pane = null; tabsRef = []; }
    var head = p.querySelector(".ln-head");
    var bar = p.querySelector(".ln-tabs");
    var bodyEl = p.querySelector(".ln-body");
    if (!head || !bar || !bodyEl) return;
    mountStrip(head);
    if (tabBtn && tabBtn.isConnected) return;

    var existing = [].slice.call(bar.querySelectorAll(".ln-tab"));
    tabsRef = existing;
    tabBtn = document.createElement("button");
    tabBtn.type = "button";
    tabBtn.className = "ln-tab";
    tabBtn.textContent = "EXTRA";
    bar.appendChild(tabBtn);

    pane = document.createElement("div");
    pane.className = "ln-settings sk-extra-pane";
    pane.style.display = "none";
    bodyEl.appendChild(pane);
    renderPane();

    tabBtn.onclick = function () { activate(true); };
    // The lifted handlers are onclick properties assigned before these, so they
    // restore MODS/SETTINGS first and this only hides the extra pane.
    existing.forEach(function (b) {
      b.addEventListener("click", function () { if (pane) pane.style.display = "none"; tabBtn.classList.remove("active"); });
    });
    SK.log("EXTRA tab attached");
  }

  SK.task({
    name: "ext-mount", hz: 10, prio: 0,
    when: function () { return !!panelEl && (!tabBtn || !tabBtn.isConnected || mountedOn !== panelEl); },
    fn: mountExt
  });

  SK.ext = {
    mount: mountExt,
    pane: function () { return pane; },
    tab: function () { return tabBtn; },
    cards: function () { return liveList.length; }
  };
})();


// ── src/next/panel.gen.js — panel (generated, lifted verbatim) ──
// GENERATED by tools/extract-next-ui.mjs — do not edit by hand.
// The panel, lifted verbatim from the v2 client so the UI cannot drift.
// Runs in the bundle's scope, exactly like the v2 client did: bare names.
var CSS = `
  :host { all: initial; }
  * { box-sizing: border-box; margin: 0; font-family: "Inter", "Segoe UI", system-ui, sans-serif; }
  .mn-panel { position: absolute; right: 24px; bottom: 24px; width: min(620px, calc(100vw - 48px)); max-height: min(480px, calc(100vh - 48px));
    display: flex; gap: 10px; padding: 10px; border-radius: var(--sk-rad, 22px); pointer-events: auto;
    background: rgba(24,17,21,var(--sk-op,.78)); backdrop-filter: blur(var(--sk-blur,22px)) saturate(150%); -webkit-backdrop-filter: blur(var(--sk-blur,22px)) saturate(150%);
    box-shadow: 0 0 0 1px rgba(255,255,255,.06), inset 0 1px 0 rgba(255,255,255,.05), 0 30px 80px rgba(0,0,0,.55);
    opacity: 0; transform: translateY(18px) scale(.985); pointer-events: none; transition: opacity .35s ease, transform .45s cubic-bezier(.22,1,.36,1);
    color: #f6eef2; font-size: 13px; }
  .mn-panel.shown { opacity: 1; transform: none; pointer-events: auto; }
  .mn-panel.sk-dragging { transition: none; }
  .mn-side { display: flex; flex-direction: column; align-items: center; gap: 4px; width: 62px; flex: none; padding: 12px 0; border-radius: 16px;
    background: rgba(255,255,255,.025); box-shadow: inset 0 0 0 1px rgba(255,255,255,.05); }
  .mn-logo { display: grid; place-items: center; width: 32px; height: 32px; }
  .mn-logo-svg { width: 25px; height: 25px; overflow: visible; filter: drop-shadow(0 0 4px rgba(255,107,157,.8)) drop-shadow(0 0 10px rgba(255,107,157,.4)); }
  .mn-sep { width: 22px; height: 1px; background: rgba(255,255,255,.08); margin: 4px 0 6px; }
  .mn-spacer { flex: 1; }
  .mn-tab { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 2px; width: 52px; height: 42px; border: 0; border-radius: 10px;
    background: transparent; color: rgba(246,238,242,.32); cursor: pointer; transition: color .2s, background .2s; }
  .mn-tab small { font-size: 8px; letter-spacing: .02em; line-height: 1; }
  .mn-tab:hover { color: rgba(246,238,242,.8); }
  .mn-tab.active { color: #ff6b9d; background: rgba(255,107,157,.1); }
  .mn-tab.active .sk-ico svg { filter: drop-shadow(0 0 6px rgba(255,107,157,.7)); }
  .sk-ico { display: inline-grid; place-items: center; width: 17px; height: 17px; }
  .sk-ico svg { width: 100%; height: 100%; fill: none; stroke: currentColor; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; }
  .mn-avatar { display: grid; place-items: center; width: 32px; height: 32px; border-radius: 50%;
    background: radial-gradient(circle at 30% 25%, #ffb3c6, #ff6b9d 60%, #d44a7a); box-shadow: 0 0 0 2px rgba(255,255,255,.08), 0 0 14px rgba(255,107,157,.4); }
  .mn-avatar-svg { width: 17px; height: 17px; overflow: visible; }
  .mn-main { flex: 1; min-width: 0; display: flex; flex-direction: column; }
  .mn-top { display: flex; align-items: center; gap: 12px; padding: 6px 6px 12px; cursor: grab; user-select: none; touch-action: none; }
  .mn-titles { flex: 1; min-width: 0; }
  .mn-h { font-size: 17px; font-weight: 650; letter-spacing: -.01em; }
  .mn-sub { font-size: 11px; opacity: .4; }
  .mn-close { display: grid; place-items: center; width: 28px; height: 28px; border: 0; border-radius: 8px; background: transparent; color: inherit; opacity: .45; cursor: pointer; transition: opacity .2s, background .2s; }
  .mn-close:hover { opacity: 1; background: rgba(255,255,255,.05); }
  .mn-close svg { width: 14px; height: 14px; fill: none; stroke: currentColor; stroke-width: 2; stroke-linecap: round; }
  .mn-cols { flex: 1; min-height: 0; overflow-y: auto; display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); align-items: start; align-content: start; gap: 10px; padding: 0 4px 6px 0; }
  .mn-cols::-webkit-scrollbar { width: 8px; }
  .mn-cols::-webkit-scrollbar-thumb { background: rgba(255,255,255,.08); border-radius: 4px; }
  .sk-card { border-radius: 12px; background: rgba(255,255,255,.025); box-shadow: inset 0 0 0 1px rgba(255,255,255,.05); transition: box-shadow .25s, background .25s; animation: mn-in .35s ease both; }
  .sk-card.on { background: rgba(255,255,255,.04); box-shadow: inset 0 0 0 1px rgba(255,107,157,.28), 0 0 0 1px rgba(255,107,157,.06), 0 8px 30px rgba(255,107,157,.06); }
  .sk-card-head { display: flex; align-items: center; gap: 8px; padding: 11px 12px; }
  .sk-card-title { flex: 1; min-width: 0; }
  .sk-card-title strong { font-size: 13px; font-weight: 600; color: rgba(246,238,242,.45); transition: color .2s; }
  .sk-card.on .sk-card-title strong { color: #fff0f5; }
  .sk-mbody { padding: 0 12px 10px; }
  .sk-mdesc { font-size: 11px; opacity: .4; margin-bottom: 6px; }
  .sk-ctl { display: flex; align-items: center; gap: 8px; padding: 4px 0; font-size: 11.5px; }
  .sk-label { flex: 1; color: rgba(246,238,242,.75); }
  .sk-hint { display: block; font-size: 10px; opacity: .4; }
  .sk-switch { position: relative; width: 26px; height: 14px; border: 0; border-radius: 99px; background: rgba(255,255,255,.07); cursor: pointer; flex: none; transition: background .2s; }
  .sk-switch::after { content: ""; position: absolute; top: 3px; left: 3px; width: 8px; height: 8px; border-radius: 50%; background: rgba(255,255,255,.25); transition: left .2s, background .2s, box-shadow .2s; }
  .sk-switch[aria-checked="true"] { background: rgba(255,107,157,.25); }
  .sk-switch[aria-checked="true"]::after { left: 15px; background: #ff6b9d; box-shadow: 0 0 6px #ff6b9d; }
  .sk-field { background: rgba(255,255,255,.035); border: 0; border-radius: 6px; color: #f6eef2; padding: 6px 9px; font-size: 11.5px; outline: none; box-shadow: inset 0 0 0 1px rgba(255,255,255,.05); }
  .sk-field:focus { box-shadow: inset 0 0 0 1px rgba(255,107,157,.6); }
  .sk-field option { background: #221419; }
  .sk-range { display: flex; align-items: center; gap: 8px; }
  .sk-slider { -webkit-appearance: none; appearance: none; width: 90px; height: 8px; background: transparent; }
  .sk-slider::-webkit-slider-runnable-track { height: 2px; border-radius: 2px; background: linear-gradient(#ff6b9d, #ff6b9d) 0 0 / var(--p, 50%) 100% no-repeat, rgba(255,255,255,.08); }
  .sk-slider::-webkit-slider-thumb { -webkit-appearance: none; width: 6px; height: 6px; margin-top: -2px; border-radius: 50%; background: #ff6b9d; box-shadow: 0 0 0 2px rgba(255,107,157,.4); }
  .sk-slider::-moz-range-track { height: 2px; background: rgba(255,255,255,.08); }
  .sk-slider::-moz-range-progress { height: 2px; background: #ff6b9d; }
  .sk-slider::-moz-range-thumb { width: 6px; height: 6px; border: 0; border-radius: 50%; background: #ff6b9d; }
  .sk-val { font-size: 11px; font-weight: 600; min-width: 28px; text-align: right; color: rgba(246,238,242,.8); }
  .sk-draw { display: flex; flex-direction: column; gap: 8px; }
  .sk-drawcv { width: 100%; max-width: 240px; aspect-ratio: 1; border-radius: 8px; cursor: crosshair; touch-action: none; box-shadow: inset 0 0 0 1px rgba(255,255,255,.08); }
  .sk-drawbar { display: flex; gap: 8px; align-items: center; }
  .sk-btn.sk-mini { padding: 5px 12px; font-size: 10.5px; }
  .sk-num { width: 90px; }
  .sk-color { width: 30px; height: 20px; padding: 0; border: 0; border-radius: 6px; background: none; cursor: pointer; }
  .sk-note { font-size: 11px; color: rgba(246,238,242,.5); padding: 2px 0; }
  .sk-note.err { color: #ff7a93; }
  .sk-tool { display: flex; flex-direction: column; gap: 6px; }
  .sk-items { display: grid; grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); gap: 5px; max-height: 180px; overflow-y: auto; padding: 2px; }
  .sk-items::-webkit-scrollbar { width: 8px; }
  .sk-items::-webkit-scrollbar-thumb { background: rgba(255,255,255,.08); border-radius: 4px; }
  .sk-item { display: flex; flex-direction: column; gap: 2px; padding: 8px; border: 0; border-radius: 8px; background: rgba(255,255,255,.03); box-shadow: inset 0 0 0 1px rgba(255,255,255,.05); color: inherit; cursor: pointer; text-align: left; transition: box-shadow .2s, background .2s; position: relative; }
  .sk-item::before { content: ""; position: absolute; top: 4px; left: 6px; right: 6px; height: 2px; border-radius: 2px; background: var(--rc, #888); opacity: .85; }
  .sk-item:hover { background: rgba(255,255,255,.05); }
  .sk-item.sel { box-shadow: inset 0 0 0 1px var(--rc, #ff6b9d); background: rgba(255,255,255,.05); }
  .sk-item-name { font-size: 10.5px; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; margin-top: 4px; }
  .sk-item small { font-size: 9px; color: var(--rc, #888); text-transform: uppercase; letter-spacing: .06em; }
  .sk-btn { align-self: flex-start; border: 0; border-radius: 8px; padding: 8px 16px; background: #ff6b9d; color: #fff; font-size: 11.5px; font-weight: 700; letter-spacing: .04em; cursor: pointer; box-shadow: 0 4px 16px rgba(255,107,157,.3); transition: filter .2s; }
  .sk-btn:hover { filter: brightness(1.1); }
  .mn-search { width: 160px; margin-right: 2px; }
  /* Lunar (Beta) theme — same DOM, wider window, accent-driven */
  .mn-panel.lunar { width: min(780px, calc(100vw - 48px)); max-height: min(560px, calc(100vh - 48px));
    background: rgba(13,14,20,var(--sk-op,.92)); }
  .mn-panel.lunar .mn-side { width: 76px; }
  .mn-panel.lunar .mn-tab { width: 64px; height: 46px; }
  .mn-panel.lunar .mn-tab.active { color: var(--acc, #ff6b9d); background: rgba(255,255,255,.06); }
  .mn-panel.lunar .mn-tab.active .sk-ico svg { filter: drop-shadow(0 0 6px var(--acc, #ff6b9d)); }
  .mn-panel.lunar .sk-card.on { box-shadow: inset 0 0 0 1px var(--acc, #ff6b9d), 0 0 0 1px rgba(255,255,255,.04); background: rgba(255,255,255,.045); }
  .mn-panel.lunar .sk-card.on .sk-card-title strong { color: #fff; }
  .mn-panel.lunar .sk-switch[aria-checked="true"] { background: rgba(255,255,255,.16); }
  .mn-panel.lunar .sk-switch[aria-checked="true"]::after { background: var(--acc, #ff6b9d); box-shadow: 0 0 6px var(--acc, #ff6b9d); }
  .mn-panel.lunar .sk-btn { background: var(--acc, #ff6b9d); color: #fff; box-shadow: 0 4px 16px rgba(0,0,0,.4); }
  .mn-panel.lunar .sk-slider::-webkit-slider-runnable-track { background: linear-gradient(var(--acc, #ff6b9d), var(--acc, #ff6b9d)) 0 0 / var(--p, 50%) 100% no-repeat, rgba(255,255,255,.08); }
  .mn-panel.lunar .sk-slider::-webkit-slider-thumb { background: var(--acc, #ff6b9d); box-shadow: 0 0 0 2px rgba(255,255,255,.25); }
  .mn-panel.lunar .sk-slider::-moz-range-progress { background: var(--acc, #ff6b9d); }
  .mn-panel.lunar .sk-slider::-moz-range-thumb { background: var(--acc, #ff6b9d); }
  .mn-panel.lunar .mn-avatar { background: radial-gradient(circle at 30% 25%, var(--acc, #ff6b9d), #101018 135%); box-shadow: 0 0 0 2px rgba(255,255,255,.08), 0 0 14px rgba(0,0,0,.5); }
  .mn-panel.lunar .mn-logo-svg { filter: drop-shadow(0 0 4px var(--acc, #ff6b9d)); }
  .mn-panel.uismall { font-size: 12px; }
  .mn-panel.uismall .mn-cols { grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); }
  .mn-panel.uisbig { font-size: 14px; width: min(780px, calc(100vw - 48px)); }
  /* Lunar window (Beta ghost-client look) */
  .mn-panel.ln { display: block; width: min(880px, calc(100vw - 48px)); max-height: min(620px, calc(100vh - 48px));
    background: rgba(10,11,16,var(--sk-op,.94)); border-radius: var(--sk-rad,14px); padding: 0; overflow: hidden;
    backdrop-filter: blur(var(--sk-blur,0px)); -webkit-backdrop-filter: blur(var(--sk-blur,0px)); }
  .mn-panel.nomotion *, .mn-panel.nomotion *::before, .mn-panel.nomotion *::after { animation: none !important; transition: none !important; }
  .ln-head { display: flex; align-items: center; gap: 12px; padding: 12px 14px;
    border-bottom: 1px solid rgba(255,255,255,.07); cursor: grab; user-select: none; }
  .ln-brand { display: flex; align-items: center; gap: 8px; font-weight: 800; font-size: 15px; letter-spacing: .06em; }
  .ln-logo { width: 24px; height: 24px; overflow: visible; filter: drop-shadow(0 0 5px var(--acc, #ff6b9d)); }
  .ln-beta { font-size: 9px; font-weight: 800; letter-spacing: .08em; background: var(--acc, #ff6b9d);
    color: #fff; border-radius: 4px; padding: 2px 6px; }
  .ln-tabs { display: flex; gap: 2px; margin-left: 6px; }
  .ln-tab { background: none; border: 0; color: rgba(255,255,255,.45); font-size: 11px; font-weight: 800;
    letter-spacing: .08em; padding: 8px 12px; border-radius: 8px; cursor: pointer; }
  .ln-tab:hover { color: #fff; }
  .ln-tab.active { color: #fff; background: rgba(255,255,255,.07); box-shadow: inset 0 -2px 0 var(--acc, #ff6b9d); }
  .ln-search { margin-left: auto; width: 150px; }
  .ln-x { display: grid; place-items: center; width: 28px; height: 28px; border: 0; border-radius: 8px;
    background: transparent; color: inherit; opacity: .5; cursor: pointer; }
  .ln-x:hover { opacity: 1; background: rgba(255,80,80,.15); }
  .ln-x svg { width: 14px; height: 14px; fill: none; stroke: currentColor; stroke-width: 2; stroke-linecap: round; }
  .ln-body { display: flex; height: 480px; min-height: 0; }
  .ln-side { width: 168px; flex: none; border-right: 1px solid rgba(255,255,255,.07);
    padding: 10px; display: flex; flex-direction: column; gap: 2px; }
  .ln-cat { display: flex; align-items: center; gap: 8px; padding: 9px 10px; border-radius: 8px; background: none;
    border: 0; color: rgba(255,255,255,.55); font-size: 12px; font-weight: 600; cursor: pointer; width: 100%; text-align: left; }
  .ln-cat:hover { background: rgba(255,255,255,.05); color: #fff; }
  .ln-cat.active { background: rgba(255,255,255,.08); color: #fff; box-shadow: inset 2px 0 0 var(--acc, #ff6b9d); }
  .ln-cat .n { margin-left: auto; font-size: 10px; opacity: .5; }
  .ln-cat.has-sub .caret { margin-left: auto; width: 14px; height: 14px; display: grid; place-items: center; opacity: .5; transition: transform .2s; flex: none; }
  .ln-cat.has-sub .n { margin-left: 0; }
  .ln-cat.has-sub .caret svg { width: 12px; height: 12px; fill: none; stroke: currentColor; stroke-width: 2.4; stroke-linecap: round; stroke-linejoin: round; }
  .ln-cat.open .caret { transform: rotate(90deg); opacity: 1; }
  .ln-sub { display: flex; align-items: center; gap: 8px; width: calc(100% - 14px); margin: 1px 0 1px 14px; padding: 6px 10px;
    border: 0; border-left: 2px solid rgba(255,255,255,.1); border-radius: 0 8px 8px 0; background: transparent;
    color: rgba(255,255,255,.55); font-size: 12px; font-weight: 600; cursor: pointer; text-align: left; }
  .ln-sub:hover { color: #fff; background: rgba(255,255,255,.04); }
  .ln-sub.active { color: #fff; border-left-color: var(--acc, #ff6b9d); background: rgba(255,255,255,.06); }
  .ln-sub .n { margin-left: auto; font-size: 10px; opacity: .5; }
  /* ── UI motion pack ── */
  .ln-tab { transition: color .18s, background .18s, box-shadow .25s, transform .12s; }
  .ln-tab:active { transform: scale(.95); }
  .ln-cat, .ln-sub { transition: color .18s, background .18s, border-color .18s, box-shadow .18s, transform .12s; }
  .ln-cat:active, .ln-sub:active { transform: scale(.98); }
  .ln-sub { animation: ln-sub-in .22s ease both; }
  .ln-mod { animation: ln-mod-in .38s cubic-bezier(.22,1,.36,1) both; }
  .ln-mod.open .ln-drawer { animation: ln-drawer-in .3s ease both; }
  .ln-opts, .ln-gear, .ln-x, .ln-bar { transition: background .18s, opacity .18s, transform .12s, box-shadow .18s, filter .18s; }
  .ln-opts:active, .ln-gear:active, .ln-x:active, .ln-bar:active { transform: scale(.94); }
  .ln-gear svg { transition: transform .35s cubic-bezier(.22,1,.36,1); }
  .ln-gear:hover svg { transform: rotate(45deg); }
  .ln-search { transition: width .25s ease, box-shadow .2s; }
  .ln-search:focus { width: 182px; outline: none; box-shadow: inset 0 0 0 1px var(--acc, #ff6b9d), 0 0 14px rgba(255,107,157,.18); }
  .ln-logo { animation: ln-float 5s ease-in-out infinite; }
  .sk-slider::-webkit-slider-thumb { transition: transform .15s; }
  .sk-slider:active::-webkit-slider-thumb { transform: scale(1.45); }
  @keyframes ln-mod-in { from { opacity: 0; transform: translateY(10px) scale(.97); } }
  @keyframes ln-sub-in { from { opacity: 0; transform: translateX(-6px); } }
  @keyframes ln-drawer-in { from { opacity: 0; transform: translateY(-6px); } }
  @keyframes ln-float { 50% { transform: translateY(-2px); } }
  @media (prefers-reduced-motion: reduce) {
    .mn-panel, .mn-panel *, .ln-mod, .ln-sub { animation: none !important; transition: none !important; }
  }
  .ln-grid { flex: 1; min-width: 0; overflow-y: auto; display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 10px; padding: 12px; align-content: start; }
  .ln-grid::-webkit-scrollbar, .ln-settings::-webkit-scrollbar { width: 8px; }
  .ln-grid::-webkit-scrollbar-thumb, .ln-settings::-webkit-scrollbar-thumb { background: rgba(255,255,255,.1); border-radius: 4px; }
  .ln-mod { background: rgba(255,255,255,.03); border: 1px solid rgba(255,255,255,.07); border-radius: 10px;
    padding: 12px 10px 10px; display: flex; flex-direction: column; align-items: center; gap: 6px; }
  .ln-mod.open { grid-column: span 2; align-items: stretch; }
  .ln-mod.open .ln-desc { text-align: left; }
  .ln-top { display: flex; flex-direction: column; align-items: center; gap: 6px; }
  .ln-mod.open .ln-top { flex-direction: row; }
  .ln-ico { width: 34px; height: 34px; display: grid; place-items: center; color: rgba(255,255,255,.85); flex: none; }
  .ln-ico svg { width: 30px; height: 30px; fill: none; stroke: currentColor; stroke-width: 1.6; stroke-linecap: round; stroke-linejoin: round; }
  .ln-name { font-size: 12px; font-weight: 700; text-align: center; }
  .ln-desc { font-size: 10px; opacity: .45; text-align: center; min-height: 24px; }
  .ln-btns { display: flex; gap: 6px; width: 100%; }
  .ln-opts { flex: 1; background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.09); color: #fff;
    font-size: 10px; font-weight: 800; letter-spacing: .06em; border-radius: 6px; padding: 7px 0; cursor: pointer; }
  .ln-opts:hover { background: rgba(255,255,255,.1); }
  .ln-gear { width: 30px; flex: none; border-radius: 6px; background: rgba(255,255,255,.06);
    border: 1px solid rgba(255,255,255,.09); color: #fff; cursor: pointer; display: grid; place-items: center; }
  .ln-gear:hover { background: rgba(255,255,255,.1); }
  .ln-gear svg { width: 15px; height: 15px; fill: none; stroke: currentColor; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; }
  .ln-drawer { display: none; width: 100%; border-top: 1px solid rgba(255,255,255,.07); padding-top: 6px; }
  .ln-mod.open .ln-drawer { display: block; }
  .ln-bar { width: 100%; border: 0; border-radius: 6px; padding: 8px 0; font-size: 11px; font-weight: 800;
    letter-spacing: .08em; cursor: pointer; background: #ef4444; color: #fff; }
  .ln-bar.on { background: #22c55e; }
  .ln-settings { flex: 1; min-width: 0; overflow-y: auto; padding: 14px; display: flex; flex-direction: column;
    gap: 4px; max-width: 560px; }
  @keyframes mn-in { from { opacity: 0; transform: translateY(6px); } }`;

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

  var ICONS = {
    hud: '<rect x="3" y="4" width="18" height="16" rx="2.5"/><path d="M7 9h6M7 13h10M7 16h4"/>',
    world: '<circle cx="12" cy="12" r="9.5"/><path d="M3 12h18M12 2.5a15 15 0 0 1 0 19M12 2.5a15 15 0 0 0 0 19"/>',
    dev: '<path d="m12 2 2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4z"/>',
    beta: '<path d="M9 3h6M10 3v6l-5.2 9.4A2 2 0 0 0 6.6 21h10.8a2 2 0 0 0 1.8-2.6L14 9V3"/><path d="M7.5 15h9"/>',
    charms: '<svg viewBox="0 0 24 24"><path d="M12 2c1.66 0 3 .67 3 1.5V7h2v5l5 5v4L21 7c0-1.1-.9-2-2-2h-5V3.5C14 .67 13.34 2 12 2zM8 5c0-1.1.9-2 2-2h2v5c0 1.1-.9 2-2 2H8V5zm4 10c0-1.1.9-2 2-2h2v5c0-1.1-.9-2-2-2h-2v5z"/>',
    chams: '<svg viewBox="0 0 24 24"><path d="M6 2c-3.3 0-6 2.7-6 6v10c0 3.3 2.7 6 6 6h4c3.3 0 6-2.7 6-6V8c0-3.3-2.7-6-6-6H6zm2 2v4h12V8H8zM8 4v12h8V4H8z"/>',
    cross: '<circle cx="12" cy="12" r="9"/><path d="M12 7v10M7 12h10"/>',
    fx: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M7 5v14M17 5v14M3 12h3M18 12h3"/>',
    game: '<rect x="2" y="7" width="20" height="10" rx="5"/><path d="M7 11h.01M17 11h.01M10 9.5v3M8.5 11h3"/>'
  };
  var CATEGORIES = [
    { id: "hud", label: "HUD", icon: ICONS.hud },
    { id: "world", label: "World", icon: ICONS.world },
    { id: "chams", label: "Chams", icon: ICONS.chams },
    { id: "crosshair", label: "Cross", icon: ICONS.cross },
    { id: "fx", label: "FX", icon: ICONS.fx },
    { id: "game", label: "Game", icon: ICONS.game }
  ];
if (betaUnlocked) CATEGORIES.push({ id: "beta", label: "Beta", icon: ICONS.beta });
var CHDRAW_N = 21;
  // ── Hide the game's built-in crosshair (DOM #crosshair) while ours draws ──
  // Uses visibility (not display) so the cone geometry stays measurable for
  // live-spread mode. Restores everything when ours is toggled off.
  var xhEl = null, xhStyleEl = null, xhHidden = false
  var isEditable = (el) => !!el && (el.tagName === "TEXTAREA" || el.tagName === "INPUT" && /^(text|number|search)$/.test(el.type));

  function sakuraLogoSvg(cls = "") {
    return `<svg class="${cls}" viewBox="0 0 24 24">
      <defs>
        <linearGradient id="sk-grad" x1="4" y1="3" x2="20" y2="21" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#ffe0ec"/><stop offset="0.45" stop-color="#ffb3c6"/><stop offset="1" stop-color="#ff6b9d"/>
        </linearGradient>
      </defs>
      <path d="M12 21c-1.5-2.5-4-4.5-4-7.5 0-2.5 1.8-4.5 4-4.5s4 2 4 4.5c0 3-2.5 5-4 7.5z" fill="none" stroke="url(#sk-grad)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12 3v4M12 3c-1.5 0-2.5 1-2.5 2.5M12 3c1.5 0 2.5 1 2.5 2.5" fill="none" stroke="url(#sk-grad)" stroke-width="1.5" stroke-linecap="round"/>
      <circle cx="12" cy="10" r="1.5" fill="#ff6b9d"/>
      <path d="M12 11.5c0 2-1 3.5-1 5" fill="none" stroke="url(#sk-grad)" stroke-width="1.2" stroke-linecap="round"/>
    </svg>`;
  }

  function editByHand(el, e) {
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    const k = e.key, start = el.selectionStart ?? el.value.length, end = el.selectionEnd ?? start;
    let v = el.value, pos = start;
    if (k === "Backspace") {
      if (start !== end) v = v.slice(0, start) + v.slice(end);
      else if (start > 0) {
        v = v.slice(0, start - 1) + v.slice(end);
        pos = start - 1;
      } else return;
    } else if (k === "Delete") {
      if (start !== end) v = v.slice(0, start) + v.slice(end);
      else if (start < v.length) v = v.slice(0, start) + v.slice(start + 1);
      else return;
    } else if (k.length === 1) {
      v = v.slice(0, start) + k + v.slice(end);
      pos = start + 1;
      if (el.maxLength > 0 && v.length > el.maxLength) return;
    } else {
      const moves = { ArrowLeft: Math.max(0, start - 1), ArrowRight: Math.min(v.length, end + 1), Home: 0, End: v.length };
      if (k in moves) el.setSelectionRange?.(moves[k], moves[k]);
      return;
    }
    el.value = v;
    el.setSelectionRange?.(pos, pos);
    el.dispatchEvent(new Event("input", { bubbles: true }));
  }

  function shieldKeys(e) {
    const target = e.composedPath?.()[0];
    if (!isEditable(target)) return;
    e.stopPropagation();
    // Only edit by hand when the game already cancelled the key (killed Backspace etc.).
    // Otherwise the input still receives the key natively and a manual edit would double it.
    if (e.type === "keydown" && e.defaultPrevented) editByHand(target, e);
  }

  function ico(path, cls = "") {
    const s = document.createElement("span");
    s.className = `sk-ico ${cls}`.trim();
    s.setAttribute("aria-hidden", "true");
    s.innerHTML = `<svg viewBox="0 0 24 24">${path}</svg>`;
    return s;
  }

  function toggleSwitch(on, onChange) {
    const sw = document.createElement("button");
    sw.type = "button";
    sw.className = "sk-switch";
    sw.setAttribute("role", "switch");
    sw.setAttribute("aria-checked", String(!!on));
    sw.onclick = (e) => {
      e.stopPropagation();
      const v = sw.getAttribute("aria-checked") !== "true";
      sw.setAttribute("aria-checked", String(v));
      onChange(v);
    };
    return sw;
  }

  function selectField(value, options, onChange) {
    const sel = document.createElement("select");
    sel.className = "sk-field";
    for (const [v, l] of options) {
      const o = document.createElement("option");
      o.value = v; o.textContent = l;
      sel.appendChild(o);
    }
    sel.value = value;
    sel.onchange = () => onChange(sel.value);
    return sel;
  }

  function numberField(value, min, max, step, onChange) {
    const input = document.createElement("input");
    input.type = "number";
    input.className = "sk-field sk-num";
    input.min = min; input.max = max; input.step = step; input.value = value;
    input.onchange = () => onChange(Number(input.value));
    return input;
  }

  function rangeField(value, min, max, step, onChange) {
    const wrap = document.createElement("div");
    wrap.className = "sk-range";
    const input = document.createElement("input");
    input.type = "range"; input.className = "sk-slider";
    input.min = min; input.max = max; input.step = step; input.value = value;
    const val = document.createElement("span");
    val.className = "sk-val";
    val.textContent = Number(value).toFixed(2).replace(/\.?0+$/, "");
    input.oninput = () => {
      val.textContent = Number(input.value).toFixed(2).replace(/\.?0+$/, "");
      wrap.style.setProperty("--p", ((input.value - min) / (max - min) * 100) + "%");
      onChange(Number(input.value));
    };
    wrap.style.setProperty("--p", ((value - min) / (max - min) * 100) + "%");
    wrap.append(input, val);
    return wrap;
  }

  function chLoadGrid() {
    const g = new Array(CHDRAW_N * CHDRAW_N).fill(0);
    const s = settings.chPixels || "";
    for (let i = 0; i < g.length && i < s.length; i++) g[i] = s[i] === "1" ? 1 : 0;
    return g;
  }

  function chLineCells(x0, y0, x1, y1, fn) {
    const dx = Math.abs(x1 - x0), dy = -Math.abs(y1 - y0);
    const sx = x0 < x1 ? 1 : -1, sy = y0 < y1 ? 1 : -1;
    let err = dx + dy, x = x0, y = y0;
    for (;;) {
      fn(x, y);
      if (x === x1 && y === y1) break;
      const e2 = 2 * err;
      if (e2 >= dy) { err += dy; x += sx; }
      if (e2 <= dx) { err += dx; y += sy; }
    }
  }

  function pixelEditor() {
    const N = CHDRAW_N, CELL = 10;
    const wrap = document.createElement("div");
    wrap.className = "sk-draw";
    const cv = document.createElement("canvas");
    cv.width = N * CELL; cv.height = N * CELL;
    cv.className = "sk-drawcv";
    const g2d = cv.getContext("2d");
    let grid = chLoadGrid();
    const saveGrid = () => { settings.chPixels = grid.map((v) => v ? "1" : "0").join(""); save(); };
    const render = () => {
      g2d.clearRect(0, 0, cv.width, cv.height);
      g2d.fillStyle = "#101018";
      g2d.fillRect(0, 0, cv.width, cv.height);
      g2d.fillStyle = settings.chColor || "#ff6b9d";
      for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
        if (grid[y * N + x]) g2d.fillRect(x * CELL, y * CELL, CELL, CELL);
      }
      g2d.strokeStyle = "rgba(255,255,255,0.07)";
      g2d.lineWidth = 1;
      g2d.beginPath();
      for (let i = 1; i < N; i++) {
        g2d.moveTo(i * CELL + 0.5, 0); g2d.lineTo(i * CELL + 0.5, cv.height);
        g2d.moveTo(0, i * CELL + 0.5); g2d.lineTo(cv.width, i * CELL + 0.5);
      }
      g2d.stroke();
      g2d.strokeStyle = "rgba(255,107,157,0.4)";
      g2d.beginPath();
      g2d.moveTo(cv.width / 2 + 0.5, 0); g2d.lineTo(cv.width / 2 + 0.5, cv.height);
      g2d.moveTo(0, cv.height / 2 + 0.5); g2d.lineTo(cv.width, cv.height / 2 + 0.5);
      g2d.stroke();
    };
    const mirror = (x, y) => {
      const pts = [[x, y]];
      if (settings.chMirrorX) pts.push([N - 1 - x, y]);
      if (settings.chMirrorY) pts.push([x, N - 1 - y]);
      if (settings.chMirrorX && settings.chMirrorY) pts.push([N - 1 - x, N - 1 - y]);
      return pts;
    };
    const inGrid = (x, y) => x >= 0 && y >= 0 && x < N && y < N;
    const applyPts = (x, y, v) => {
      for (const [px, py] of mirror(x, y)) if (inGrid(px, py)) grid[py * N + px] = v;
    };
    let down = false, erase = false, val = 1, last = null;
    const cellOf = (e) => {
      const r = cv.getBoundingClientRect();
      return [
        Math.floor((e.clientX - r.left) / r.width * N),
        Math.floor((e.clientY - r.top) / r.height * N)
      ];
    };
    cv.addEventListener("contextmenu", (e) => e.preventDefault());
    cv.addEventListener("pointerdown", (e) => {
      e.preventDefault();
      try { cv.setPointerCapture(e.pointerId); } catch (_) {}
      down = true; erase = e.button === 2;
      const [x, y] = cellOf(e);
      last = [x, y];
      if ((settings.chDrawMode || "pixels") === "pixels" && !erase) {
        val = inGrid(x, y) && grid[y * N + x] ? 0 : 1;
        applyPts(x, y, val);
      } else {
        val = erase ? 0 : 1;
        applyPts(x, y, val);
      }
      saveGrid(); render();
    });
    cv.addEventListener("pointermove", (e) => {
      if (!down) return;
      e.preventDefault();
      const [x, y] = cellOf(e);
      if (last && (x !== last[0] || y !== last[1])) {
        chLineCells(last[0], last[1], x, y, (lx, ly) => applyPts(lx, ly, val));
        last = [x, y];
        saveGrid(); render();
      }
    });
    const up = () => { down = false; last = null; };
    cv.addEventListener("pointerup", up);
    cv.addEventListener("pointercancel", up);
    const bar = document.createElement("div");
    bar.className = "sk-drawbar";
    const clear = document.createElement("button");
    clear.type = "button"; clear.className = "sk-btn sk-mini"; clear.textContent = "Clear";
    clear.onclick = () => { grid = new Array(N * N).fill(0); saveGrid(); render(); };
    bar.appendChild(clear);
    wrap.append(cv, bar);
    render();
    return wrap;
  }

  function colorField(value, onChange) {
    const input = document.createElement("input");
    input.type = "color";
    input.className = "sk-color";
    input.value = /^#[0-9a-f]{6}$/i.test(value) ? value : "#ff6b9d";
    input.oninput = () => onChange(input.value);
    return input;
  }

  function textField(value, maxLength, onChange) {
    const input = document.createElement("input");
    input.type = "text";
    input.className = "sk-field";
    input.maxLength = maxLength;
    input.value = value;
    input.setAttribute("spellcheck", "false");
    input.oninput = () => onChange(input.value.slice(0, maxLength));
    return input;
  }

  function actionBtn(label, onclick) {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "sk-btn";
    b.textContent = label;
    b.onclick = (e) => { e.stopPropagation(); onclick(); };
    return b;
  }

  function row(label, hint, ctl) {
    const r = document.createElement("div");
    r.className = "sk-ctl";
    const lab = document.createElement("span");
    lab.className = "sk-label";
    lab.textContent = label;
    if (hint) {
      const sm = document.createElement("small");
      sm.className = "sk-hint";
      sm.textContent = hint;
      lab.appendChild(sm);
    }
    r.append(lab, ctl);
    return r;
  }

  function moduleCard(title, desc, isOn, onToggle, bodyRows) {
    const card = document.createElement("div");
    card.className = "sk-card" + (isOn ? " on" : "");
    const head = document.createElement("div");
    head.className = "sk-card-head";
    const t = document.createElement("div");
    t.className = "sk-card-title";
    const strong = document.createElement("strong");
    strong.textContent = title;
    t.appendChild(strong);
    if (onToggle) {
      const sw = toggleSwitch(isOn, (v) => {
        card.classList.toggle("on", v);
        onToggle(v);
      });
      head.append(t, sw);
    } else {
      head.appendChild(t);
    }
    card.appendChild(head);
    if (bodyRows && bodyRows.length) {
      const body = document.createElement("div");
      body.className = "sk-mbody";
      const d = document.createElement("div");
      d.className = "sk-mdesc";
      d.textContent = desc;
      body.appendChild(d);
      for (const r of bodyRows) body.appendChild(r);
      card.appendChild(body);
    }
    return card;
  }

  function buildPanel() {
    const panel = document.createElement("div");
    panel.className = "mn-panel";
    const lunar = settings.uiStyle === "lunar" && betaUnlocked;
    panel.classList.toggle("lunar", lunar);
    panel.classList.toggle("uismall", settings.uiSize === "compact");
    panel.classList.toggle("uisbig", settings.uiSize === "large");
    panel.style.setProperty("--acc", /^#[0-9a-f]{6}$/i.test(settings.uiAccent) ? settings.uiAccent : "#ff6b9d");

    // Sidebar
    const side = document.createElement("nav");
    side.className = "mn-side";
    const logoWrap = document.createElement("div");
    logoWrap.className = "mn-logo";
    logoWrap.innerHTML = sakuraLogoSvg("mn-logo-svg");
    side.appendChild(logoWrap);
    const sep = document.createElement("i");
    sep.className = "mn-sep";
    side.appendChild(sep);

    // Main
    const main = document.createElement("div");
    main.className = "mn-main";
    const top = document.createElement("header");
    top.className = "mn-top";
    const titles = document.createElement("div");
    titles.className = "mn-titles";
    const heading = document.createElement("h2");
    heading.className = "mn-h";
    const sub = document.createElement("small");
    sub.className = "mn-sub";
    titles.append(heading, sub);
    const close = document.createElement("button");
    close.type = "button";
    close.className = "mn-close";
    close.title = "Close";
    close.innerHTML = '<svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6 6 18"/></svg>';
    close.onclick = () => setMenuOpen(false);
    top.append(titles, close);
    let searchInput = null;
    if (lunar) {
      searchInput = document.createElement("input");
      searchInput.className = "sk-field mn-search";
      searchInput.type = "search";
      searchInput.placeholder = "Search modules…";
      searchInput.setAttribute("spellcheck", "false");
      searchInput.oninput = () => {
        const q = searchInput.value.trim().toLowerCase();
        for (const card of cols.children) {
          card.style.display = !q || (card.textContent || "").toLowerCase().includes(q) ? "" : "none";
        }
      };
      top.insertBefore(searchInput, close);
    }
    const cols = document.createElement("div");
    cols.className = "mn-cols";
    main.append(top, cols);

    panel.append(side, main);

    // Tabs
    const buttons = new Map();
    for (const cat of CATEGORIES) {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "mn-tab";
      b.title = cat.label;
      b.setAttribute("aria-label", cat.label);
      b.appendChild(ico(cat.icon));
      const sm = document.createElement("small");
      sm.textContent = cat.label;
      b.appendChild(sm);
      b.onclick = () => show(cat.id);
      buttons.set(cat.id, b);
      side.appendChild(b);
    }
    side.appendChild(Object.assign(document.createElement("i"), { className: "mn-spacer" }));
    const avatar = document.createElement("div");
    avatar.className = "mn-avatar";
    avatar.innerHTML = sakuraLogoSvg("mn-avatar-svg");
    side.appendChild(avatar);

    // Content per tab
    function show(id) {
      uiState.cat = id;
      saveUi();
      const cat = CATEGORIES.find((c) => c.id === id) || CATEGORIES[0];
      heading.textContent = cat.label;
      for (const [k, b] of buttons) b.classList.toggle("active", k === id);
      cols.replaceChildren(...cardsFor(id));
      if (searchInput?.value) searchInput.oninput();
    }

    function rebuildPanel() {
      if (panelEl) { panelEl.remove(); panelEl = null; }
      setMenuOpen(true);
    }

    function interfaceCard() {
      return moduleCard("Interface", "Beta: Lunar-style menu theme and HUD layout.", true, null, [
        row("Menu style", "Lunar is the main look", selectField(settings.uiStyle, [["minimal", "Minimal (Sakura)"], ["lunar", "Lunar"]], (v) => {
          settings.uiStyle = v; save(); rebuildPanel();
        })),
        row("Accent", "Applies to the Lunar menu", colorField(settings.uiAccent, (v) => {
          settings.uiAccent = v; save();
          try { panelEl?.style.setProperty("--acc", v); } catch (_) {}
        })),
        row("Accent preset", null, selectField(settings.mnAccentP || "custom", [["custom", "Custom"], ["sakura", "Sakura"], ["cyan", "Cyan"], ["green", "Green"], ["gold", "Gold"], ["purple", "Purple"], ["red", "Red"], ["white", "White"]], (v) => {
          const C = { sakura: "#ff6b9d", cyan: "#22d3ee", green: "#4ade80", gold: "#facc15", purple: "#a78bfa", red: "#ef4444", white: "#ffffff" };
          settings.mnAccentP = v;
          if (C[v]) {
            settings.uiAccent = C[v];
            try { panelEl?.style.setProperty("--acc", C[v]); } catch (_) {}
          }
          save();
        })),
        row("Panel opacity", null, rangeField(settings.mnOp ?? menuStock("op"), 0.3, 1, 0.05, (v) => { settings.mnOp = v; save(); applyMenuVars(); })),
        row("Panel blur", "Backdrop px", rangeField(settings.mnBlur ?? menuStock("blur"), 0, 40, 1, (v) => { settings.mnBlur = v; save(); applyMenuVars(); })),
        row("Roundness", "Corner radius", rangeField(settings.mnRad ?? menuStock("rad"), 6, 28, 1, (v) => { settings.mnRad = v; save(); applyMenuVars(); })),
        row("Menu scale", null, rangeField(settings.mnScale ?? 1, 0.8, 1.3, 0.05, (v) => { settings.mnScale = v; save(); applyMenuVars(); })),
        row("Animations", "UI motion pack", toggleSwitch(settings.uiMotion !== false, (v) => { settings.uiMotion = v; save(); applyMenuVars(); })),
        row("Export config", "Copy settings JSON", actionBtn("Copy", () => {
          try {
            const json = JSON.stringify(settings);
            if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(json).catch(() => window.prompt("Copy your config:", json));
            else window.prompt("Copy your config:", json);
          } catch (_) {}
        })),
        row("Import config", "Paste settings JSON", actionBtn("Paste", () => {
          try {
            const json = window.prompt("Paste config JSON:");
            if (!json) return;
            const obj = JSON.parse(json);
            const defs = JSON.parse(JSON.stringify(DEFAULTS));
            for (const k of Object.keys(obj)) if (k in defs) settings[k] = obj[k];
            save();
            rebuildPanel();
            applyMenuVars();
          } catch (_) {}
        })),
        row("Menu size", null, selectField(settings.uiSize, [["compact", "Compact"], ["normal", "Normal"], ["large", "Large"]], (v) => {
          settings.uiSize = v; save(); rebuildPanel();
        })),
        row("Free keystrokes position", "Place with X / Y below", toggleSwitch(settings.ksFree, (v) => { settings.ksFree = v; save(); })),
        row("Free mouse on open", "Unlock cursor without pausing", toggleSwitch(settings.menuMouse !== false, (v) => { settings.menuMouse = v; save(); })),
        row("Re-lock on close", "Capture mouse when menu closes", toggleSwitch(settings.lockOnClose !== false, (v) => { settings.lockOnClose = v; save(); })),
        row("Keystrokes X %", null, rangeField(settings.ksX, 0, 100, 1, (v) => { settings.ksX = v; save(); })),
        row("Keystrokes Y %", null, rangeField(settings.ksY, 0, 100, 1, (v) => { settings.ksY = v; save(); })),
        row("Tip", null, note("While this menu is open, enabled HUD elements with dashed outlines can be dragged directly on screen."))
      ]);
    }

    // ── Lunar panel (Beta): ghost-client style module grid + draggable HUD ──
    var LN_ICONS = {
      keys: '<rect x="2" y="7" width="20" height="10" rx="2"/><path d="M6 11h.01M10 11h.01M14 11h.01M18 11h.01M7 14h10"/>',
      globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/>',
      blur: '<path d="M4 12h5l2-5 2 10 2-5h5"/>',
      gauge: '<path d="M4 14a8 8 0 1 1 16 0"/><path d="M12 14l4-4"/>',
      image: '<rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="10" r="1.5"/><path d="M3 17l5-4 4 3 4-4 5 5"/>',
      sun: '<circle cx="12" cy="12" r="4"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4 7 17M17 7l1.4-1.4"/>',
      bolt: '<path d="M13 2 4 14h6l-1 8 9-12h-6z"/>',
      trend: '<path d="M3 17l5-6 4 3 6-8"/><path d="M15 6h3v3"/>',
      gift: '<rect x="3" y="8" width="18" height="4"/><path d="M5 12v8h14v-8M12 8v12M12 8s-4 0-5-2c-.7-1.4 1-3 2.5-2C11 5 12 8 12 8s1-3 2.5-4c1.5-1 3.2.6 2.5 2-1 2-5 2-5 2"/>',
      refresh: '<path d="M20 12a8 8 0 1 1-2.3-5.6M20 3v4h-4"/>',
      coin: '<circle cx="12" cy="12" r="8"/><path d="M9 10h6M9 14h6"/>',
      dice: '<rect x="4" y="4" width="16" height="16" rx="4"/><circle cx="9" cy="9" r="1.2"/><circle cx="15" cy="9" r="1.2"/><circle cx="9" cy="15" r="1.2"/><circle cx="15" cy="15" r="1.2"/>',
      plus: '<rect x="4" y="4" width="16" height="16" rx="3"/><path d="M12 8v8M8 12h8"/>',
      sliders: '<path d="M4 8h10M18 8h2M4 16h4M12 16h8"/><circle cx="16" cy="8" r="2"/><circle cx="10" cy="16" r="2"/>',
      charms: '<path d="M6 21 21 6l-3-3L3 18l3 3z"/><path d="M14 5l3 3"/>',
      chams: '<path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M3 13l9 5 9-5"/>',
      target: '<circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="1.5"/>',
      scope: '<circle cx="12" cy="12" r="8"/><path d="M12 1v6M12 17v6M1 12h6M17 12h6"/>',
      spark: '<path d="M12 2v6M12 16v6M2 12h6M16 12h6"/><circle cx="12" cy="12" r="2.5"/>',
      rain: '<path d="M7 15a4 4 0 1 1 1-7.9A5.5 5.5 0 0 1 18.5 9 3.5 3.5 0 0 1 17.5 16H7z"/><path d="M8 18l-1 3M12 18l-1 3M16 18l-1 3"/>',
      radar: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none"/><path d="M12 12l5-5"/>',
      move: '<path d="M12 2v20M2 12h20"/><path d="M12 2 9 5M12 2l3 3M12 22l-3-3M12 22l3 3M2 12l3-3M2 12l3 3M22 12l-3-3M22 12l-3 3"/>'
    };
    var LUNAR_MODULES = [
      { tab: "hud", title: "Keystrokes", icon: "keys", get: () => settings.keystrokes, set: (v) => { settings.keystrokes = v; save(); } },
      { tab: "hud", title: "Watermark", icon: "plus", get: () => settings.hudWm, set: (v) => { settings.hudWm = v; save(); } },
      { tab: "hud", title: "FPS Counter", icon: "gauge", get: () => settings.hudFps, set: (v) => { settings.hudFps = v; save(); } },
      { tab: "hud", title: "Clock & Session", icon: "refresh", get: () => settings.hudInfo, set: (v) => { settings.hudInfo = v; save(); } },
      { tab: "hud", title: "Health Bars", icon: "trend", get: () => settings.hudBars, set: (v) => { settings.hudBars = v; save(); } },
      { tab: "hud", title: "Ammo", icon: "dice", get: () => settings.hudAmmo, set: (v) => { settings.hudAmmo = v; save(); } },
      { tab: "fx", title: "Tracers", icon: "bolt", get: () => settings.atTracers, set: (v) => { settings.atTracers = v; save(); } },
      { tab: "fx", title: "Muzzle", icon: "sun", get: () => settings.mzOn, set: (v) => { settings.mzOn = v; save(); } },
      { tab: "fx", title: "Impact", icon: "spark", get: () => settings.imOn, set: (v) => { settings.imOn = v; save(); } },
      { tab: "fx", title: "Weather", icon: "rain", get: () => settings.wxOn, set: (v) => { settings.wxOn = v; save(); } },
      { tab: "fx", title: "Motes", icon: "plus", get: () => settings.moOn, set: (v) => { settings.moOn = v; save(); } },
      { tab: "game", title: "Game Crosshair", icon: "target", get: () => settings.gxOn, set: (v) => { settings.gxOn = v; save(); } },
      { tab: "game", title: "Team Colors", icon: "plus", get: () => settings.gcTeam, set: (v) => { settings.gcTeam = v; save(); } },
      { tab: "game", title: "Death Screen", icon: "bolt", get: () => settings.dcOn, set: (v) => { settings.dcOn = v; save(); } },
      { tab: "game", title: "Hitmarker", icon: "dice", get: () => settings.ghOn, set: (v) => { settings.ghOn = v; save(); } },
      { tab: "game", title: "Damage Arcs", icon: "trend", get: () => settings.daOn, set: (v) => { settings.daOn = v; save(); } },
      { tab: "game", title: "Money", icon: "coin", get: () => settings.mnOn, set: (v) => { settings.mnOn = v; save(); } },
      { tab: "world", title: "Ambience", icon: "globe", get: () => settings.ambience, set: (v) => { settings.ambience = v; save(); } },
      { tab: "world", title: "Motion Blur", icon: "blur", get: () => settings.motionBlur, set: (v) => { settings.motionBlur = v; save(); } },
      { tab: "world", title: "Day Cycle", icon: "sun", get: () => settings.wdCycle, set: (v) => { settings.wdCycle = v; save(); } },
      { tab: "world", title: "Light", icon: "sliders", get: () => settings.customLighting, set: (v) => { settings.customLighting = v; save(); } },
      { tab: "world", title: "Fog Lab", icon: "blur", get: () => settings.fogCustom, set: (v) => { settings.fogCustom = v; settings.fogMode = v ? "custom" : "default"; if (v) settings.ambience = true; save(); } },
      { tab: "world", title: "Radar", icon: "radar", get: () => settings.rdOn, set: (v) => { settings.rdOn = v; save(); } },
      { tab: "chams", title: "Arm Chams", icon: "charms", get: () => settings.armCharms, set: (v) => { settings.armCharms = v; save(); } },
      { tab: "chams", title: "Gun Chams", icon: "chams", get: () => settings.gunChams, set: (v) => { settings.gunChams = v; save(); } },
      { tab: "chams", title: "Knife Chams", icon: "dice", get: () => settings.knifeChams, set: (v) => { settings.knifeChams = v; save(); } },
      { tab: "chams", title: "Viewmodel", icon: "gauge", get: () => !settings.gunHide || !settings.armHide, set: (v) => { settings.gunHide = !v; settings.armHide = !v; save(); } },
      { tab: "chams", title: "Viewmodel Pose", icon: "move", get: () => settings.vmOn, set: (v) => { settings.vmOn = v; save(); } },
      { tab: "crosshair", title: "Crosshair", icon: "target", get: () => settings.crosshair, set: (v) => { settings.crosshair = v; save(); } },
      { tab: "crosshair", title: "Dynamics", icon: "trend", get: () => settings.chDynamic, set: (v) => { settings.chDynamic = v; save(); } },
      { tab: "crosshair", title: "Animation", icon: "refresh", get: () => settings.chPulse || settings.chSpin || settings.chRainbow, set: (v) => { settings.chPulse = v; settings.chSpin = v; settings.chRainbow = v; save(); } },
      { tab: "crosshair", title: "Visibility", icon: "image", toggle: null },
      { tab: "crosshair", title: "Custom Draw", icon: "plus", toggle: null },
      { tab: "crosshair", title: "Scope", icon: "scope", get: () => settings.scOn, set: (v) => { settings.scOn = v; save(); } },
      { tab: "hud", title: "Kill Banner", icon: "gift", get: () => settings.kbOn, set: (v) => { settings.kbOn = v; save(); } },
      { tab: "beta", title: "Interface", icon: "sliders", toggle: null }
    ];
    if (settings.uiStyle === "lunar" && betaUnlocked) return buildLunarPanel();

    function buildLunarPanel() {
      const panel = document.createElement("div");
      panel.className = "mn-panel lunar ln";
      panel.style.setProperty("--acc", /^#[0-9a-f]{6}$/i.test(settings.uiAccent) ? settings.uiAccent : "#ff6b9d");

      // Header
      const head = document.createElement("header");
      head.className = "ln-head";
      const brand = document.createElement("div");
      brand.className = "ln-brand";
      brand.innerHTML = sakuraLogoSvg("ln-logo");
      const bt = document.createElement("span");
      bt.textContent = "SAKURA";
      brand.appendChild(bt);
      const tag = document.createElement("span");
      tag.className = "ln-beta";
      tag.textContent = "BETA";
      brand.appendChild(tag);
      const tabs = document.createElement("div");
      tabs.className = "ln-tabs";
      const modsTab = document.createElement("button");
      modsTab.type = "button";
      modsTab.className = "ln-tab active";
      modsTab.textContent = "MODS";
      const setTab = document.createElement("button");
      setTab.type = "button";
      setTab.className = "ln-tab";
      setTab.textContent = "SETTINGS";
      tabs.append(modsTab, setTab);
      const search = document.createElement("input");
      search.className = "sk-field ln-search";
      search.type = "search";
      search.placeholder = "Search…";
      search.setAttribute("spellcheck", "false");
      const close = document.createElement("button");
      close.type = "button";
      close.className = "ln-x";
      close.title = "Close";
      close.innerHTML = '<svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6 6 18"/></svg>';
      close.onclick = () => setMenuOpen(false);
      head.append(brand, tabs, search, close);

      // Sidebar + content
      const bodyEl = document.createElement("div");
      bodyEl.className = "ln-body";
      const side = document.createElement("nav");
      side.className = "ln-side";
      const grid = document.createElement("div");
      grid.className = "ln-grid";
      const setPane = document.createElement("div");
      setPane.className = "ln-settings";
      setPane.style.display = "none";
      bodyEl.append(side, grid, setPane);
      panel.append(head, bodyEl);

      // Collect minimal cards once, transplant their rows into lunar drawers
      const pool = new Map();
      for (const c of [...cardsFor("hud"), ...cardsFor("world"), ...cardsFor("chams"), ...cardsFor("crosshair"), ...cardsFor("fx"), ...cardsFor("game")]) {
        const t = c.querySelector(".sk-card-title strong");
        if (t && !pool.has(t.textContent)) pool.set(t.textContent, c);
      }
      if (betaUnlocked && !pool.has("Interface")) pool.set("Interface", interfaceCard());
      const defs = LUNAR_MODULES.filter((d) => d.tab !== "dev");
      const cards = new Map();
      const catBtns = [];
      const paintCounts = () => {
        for (const e of catBtns) {
          const tabs = e.kids ? e.kids : [e.id];
          const list = e.id === "all" ? defs : defs.filter((d) => tabs.includes(d.tab));
          const on = list.filter((d) => !d.get || d.get()).length;
          e.n.textContent = `${on}/${list.length}`;
        }
      };
      for (const def of defs) {
        const min = pool.get(def.title);
        if (!min) continue;
        const el = document.createElement("div");
        el.className = "ln-mod";
        el.dataset.tab = def.tab;
        el.dataset.name = (def.title + " " + (min.querySelector(".sk-mdesc")?.textContent || "")).toLowerCase();
        const top = document.createElement("div");
        top.className = "ln-top";
        const ic = document.createElement("span");
        ic.className = "ln-ico";
        ic.innerHTML = `<svg viewBox="0 0 24 24">${LN_ICONS[def.icon] || ""}</svg>`;
        const nm = document.createElement("div");
        nm.className = "ln-name";
        nm.textContent = def.title;
        top.append(ic, nm);
        const d = document.createElement("div");
        d.className = "ln-desc";
        d.textContent = min.querySelector(".sk-mdesc")?.textContent || "";
        const btns = document.createElement("div");
        btns.className = "ln-btns";
        const opts = document.createElement("button");
        opts.type = "button";
        opts.className = "ln-opts";
        opts.textContent = "OPTIONS";
        const gear = document.createElement("button");
        gear.type = "button";
        gear.className = "ln-gear";
        gear.title = "Settings";
        gear.innerHTML = '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19 12a7 7 0 0 0-.1-1.2l2-1.6-2-3.4-2.4 1a7 7 0 0 0-2-1.2L14 3h-4l-.5 2.6a7 7 0 0 0-2 1.2l-2.4-1-2 3.4 2 1.6A7 7 0 0 0 5 12c0 .4 0 .8.1 1.2l-2 1.6 2 3.4 2.4-1a7 7 0 0 0 2 1.2L10 21h4l.5-2.6a7 7 0 0 0 2-1.2l2.4 1 2-3.4-2-1.6c.06-.4.1-.8.1-1.2z"/></svg>';
        btns.append(opts, gear);
        const drawer = document.createElement("div");
        drawer.className = "ln-drawer";
        const mbody = min.querySelector(".sk-mbody");
        if (mbody) {
          // Transplant the body node itself (not copies): the card builders keep
          // live references to it for async/catalog updates.
          const md = mbody.querySelector(":scope > .sk-mdesc");
          if (md) md.remove();
          drawer.appendChild(mbody);
        }
        if (!drawer.children.length) btns.style.display = "none";
        const flip = () => el.classList.toggle("open");
        opts.onclick = flip;
        gear.onclick = flip;
        el.append(top, d, btns, drawer);
        if (def.get) {
          const bar = document.createElement("button");
          bar.type = "button";
          bar.className = "ln-bar";
          const paint = () => {
            const on = !!def.get();
            bar.classList.toggle("on", on);
            bar.textContent = on ? "ENABLED" : "DISABLED";
          };
          bar.onclick = () => { def.set(!def.get()); paint(); paintCounts(); };
          el.appendChild(bar);
          paint();
        }
        grid.appendChild(el);
        cards.set(def.title, el);
      }

      // Settings pane: Interface rows + HUD reset
      const iface = interfaceCard();
      const ibody = iface.querySelector(".sk-mbody");
      if (ibody) {
        const md = ibody.querySelector(":scope > .sk-mdesc");
        if (md) md.remove();
        setPane.appendChild(ibody);
      }
      setPane.appendChild(actionBtn("Reset HUD positions", () => {
        settings.ksFree = false; settings.ksPos = "bl";
        settings.fpsFree = false;
        save();
      }));

      // Sidebar: main tabs with pop-out subtabs
      const NAV = [
        { id: "all", label: "All" },
        { id: "hud", label: "HUD" },
        { id: "game", label: "Game" },
        {
          id: "visuals", label: "Visuals",
          children: [["world", "World"], ["chams", "Chams"], ["crosshair", "Cross"], ["fx", "FX"]]
        },
        {
          id: "system", label: "System",
          children: [...(betaUnlocked ? [["beta", "Beta"]] : [])]
        }
      ];
      for (let i = NAV.length - 1; i >= 0; i--) {
        if (NAV[i].children && !NAV[i].children.length) NAV.splice(i, 1);
      }
      let filter = "all";
      let openMain = null;
      const applyFilter = () => {
        const q = search.value.trim().toLowerCase();
        for (const def of defs) {
          const el = cards.get(def.title);
          if (!el) continue;
          const tabOk = filter === "all" || def.tab === filter;
          const qOk = !q || (el.dataset.name || "").includes(q);
          el.style.display = tabOk && qOk ? "" : "none";
        }
      };
      const setActive = () => {
        for (const e of catBtns) {
          if (e.parent) {
            e.el.classList.toggle("active", filter === e.id);
            e.el.style.display = openMain === e.parent ? "" : "none";
          } else {
            const inMain = e.kids && e.kids.some((kid) => kid === filter);
            e.el.classList.toggle("active", filter === e.id || (inMain && openMain === e.id));
            e.el.classList.toggle("open", openMain === e.id && !!e.kids);
          }
        }
      };
      const selectFilter = (id, main) => {
        filter = id;
        if (main !== undefined) openMain = main;
        setActive();
        applyFilter();
        let i = 0;
        for (const def of defs) {
          const el = cards.get(def.title);
          if (!el || el.style.display === "none") continue;
          el.style.animation = "none";
          void el.offsetWidth;
          el.style.animation = "";
          el.style.animationDelay = (Math.min(i++, 14) * 26) + "ms";
        }
      };
      const mkCount = () => {
        const n = document.createElement("span");
        n.className = "n";
        return n;
      };
      for (const item of NAV) {
        const b = document.createElement("button");
        b.type = "button";
        b.className = "ln-cat" + (item.id === "all" ? " active" : "");
        const lab = document.createElement("span");
        lab.textContent = item.label;
        const n = mkCount();
        b.append(lab, n);
        const kids = item.children && item.children.length ? item.children.map(([kid]) => kid) : null;
        if (kids) {
          b.classList.add("has-sub");
          const caret = document.createElement("span");
          caret.className = "caret";
          caret.innerHTML = '<svg viewBox="0 0 24 24"><path d="M9 6l6 6-6 6"/></svg>';
          b.appendChild(caret);
          b.onclick = () => {
            const stay = kids.some((kid) => kid === filter) ? filter : kids[0];
            selectFilter(stay, item.id);
          };
          side.appendChild(b);
          catBtns.push({ id: item.id, el: b, n, kids, parent: null });
          for (const [kid, klabel] of item.children) {
            const sb = document.createElement("button");
            sb.type = "button";
            sb.className = "ln-sub";
            sb.style.display = "none";
            const slab = document.createElement("span");
            slab.textContent = klabel;
            const sn = mkCount();
            sb.append(slab, sn);
            sb.onclick = () => selectFilter(kid, item.id);
            side.appendChild(sb);
            catBtns.push({ id: kid, el: sb, n: sn, kids: null, parent: item.id });
          }
        } else {
          b.onclick = () => selectFilter(item.id, null);
          side.appendChild(b);
          catBtns.push({ id: item.id, el: b, n, kids: null, parent: null });
        }
      }
      setActive();
      paintCounts();
      search.oninput = applyFilter;

      // Tab switching
      const showMods = (mods) => {
        modsTab.classList.toggle("active", mods);
        setTab.classList.toggle("active", !mods);
        grid.style.display = mods ? "" : "none";
        side.style.display = mods ? "" : "none";
        setPane.style.display = mods ? "none" : "";
        search.style.visibility = mods ? "" : "hidden";
      };
      modsTab.onclick = () => showMods(true);
      setTab.onclick = () => showMods(false);

      // Drag by header
      let off = null;
      head.addEventListener("pointerdown", (e) => {
        if (e.button !== 0 || e.target.closest("button, input")) return;
        const r = panel.getBoundingClientRect();
        off = [e.clientX - r.left, e.clientY - r.top];
        try { head.setPointerCapture(e.pointerId); } catch (_) {}
      });
      head.addEventListener("pointermove", (e) => {
        if (!off) return;
        panel.style.left = Math.min(Math.max(0, e.clientX - off[0]), window.innerWidth - 200) + "px";
        panel.style.top = Math.min(Math.max(0, e.clientY - off[1]), window.innerHeight - 100) + "px";
        panel.style.right = "auto";
        panel.style.bottom = "auto";
      });
      const endDrag = () => {
        if (!off) return;
        off = null;
        const r = panel.getBoundingClientRect();
        uiState.lnX = r.left; uiState.lnY = r.top;
        saveUi();
      };
      head.addEventListener("pointerup", endDrag);
      head.addEventListener("pointercancel", endDrag);
      if (Number.isFinite(uiState.lnX)) {
        panel.style.left = uiState.lnX + "px";
        panel.style.top = uiState.lnY + "px";
        panel.style.right = "auto";
        panel.style.bottom = "auto";
      }
      return panel;
    }

    function cardsFor(id) {
      if (id === "hud") {
        return [
          moduleCard("Keystrokes", "WASD, jump and mouse buttons with clicks per second.", settings.keystrokes,
            (v) => { settings.keystrokes = v; save(); }, [
              row("Position", null, selectField(settings.ksPos, [["bl", "Bottom left"], ["br", "Bottom right"], ["ml", "Left middle"]], (v) => { settings.ksPos = v; save(); })),
              row("Size", null, rangeField(settings.ksScale, 0.6, 1.6, 0.05, (v) => { settings.ksScale = v; save(); })),
              row("Clicks per second", null, toggleSwitch(settings.ksCps, (v) => { settings.ksCps = v; save(); }))
            ]),
          moduleCard("Watermark", "Sakura tag with live stats.", settings.hudWm,
            (v) => { settings.hudWm = v; save(); }, [
              row("Text", null, textField(settings.wmText || "Sakura", 24, (v) => { settings.wmText = v; save(); })),
              row("Show FPS", null, toggleSwitch(settings.wmFps !== false, (v) => { settings.wmFps = v; save(); })),
              row("Show clock", null, toggleSwitch(settings.wmClock, (v) => { settings.wmClock = v; save(); })),
              row("Show kills", null, toggleSwitch(settings.wmKills, (v) => { settings.wmKills = v; save(); })),
              row("Position", null, selectField(settings.wmPos || "tl", [["tl", "Top left"], ["tr", "Top right"], ["bl", "Bottom left"], ["br", "Bottom right"]], (v) => { settings.wmPos = v; save(); })),
              row("Size", null, rangeField(settings.wmSize, 9, 20, 1, (v) => { settings.wmSize = v; save(); })),
              row("Opacity", null, rangeField(settings.wmOp ?? 0.9, 0.2, 1, 0.05, (v) => { settings.wmOp = v; save(); })),
              row("Accent bar", null, toggleSwitch(settings.wmAccent !== false, (v) => { settings.wmAccent = v; save(); })),
              row("Background", null, toggleSwitch(settings.wmBg !== false, (v) => { settings.wmBg = v; save(); })),
              row("Rainbow text", null, toggleSwitch(settings.wmRainbow, (v) => { settings.wmRainbow = v; save(); }))
            ]),
          moduleCard("FPS Counter", "Readout with history graph.", settings.hudFps,
            (v) => { settings.hudFps = v; save(); }, [
              row("Size", null, rangeField(settings.fpsSize, 9, 24, 1, (v) => { settings.fpsSize = v; save(); })),
              row("Color", null, colorField(settings.fpsColor || "#ffb3c6", (v) => { settings.fpsColor = v; save(); })),
              row("Background", null, toggleSwitch(settings.fpsBg !== false, (v) => { settings.fpsBg = v; save(); })),
              row("Position", null, selectField(settings.fpsPos || "tr", [["tl", "Top left"], ["tr", "Top right"], ["bl", "Bottom left"], ["br", "Bottom right"]], (v) => { settings.fpsPos = v; save(); })),
              row("Graph", "120-frame history", toggleSwitch(settings.fpsGraph, (v) => { settings.fpsGraph = v; save(); })),
              row("Graph height", null, rangeField(settings.fpsGraphH, 8, 60, 2, (v) => { settings.fpsGraphH = v; save(); })),
              row("Graph color", null, colorField(settings.fpsGraphColor || "#ff6b9d", (v) => { settings.fpsGraphColor = v; save(); })),
              row("Show average", null, toggleSwitch(settings.fpsAvg, (v) => { settings.fpsAvg = v; save(); }))
            ]),
          moduleCard("Clock & Session", "Time, session length and K/D.", settings.hudInfo,
            (v) => { settings.hudInfo = v; save(); }, [
              row("Clock", null, toggleSwitch(settings.infoClock !== false, (v) => { settings.infoClock = v; save(); })),
              row("24-hour", null, toggleSwitch(settings.info24, (v) => { settings.info24 = v; save(); })),
              row("Date", null, toggleSwitch(settings.infoDate, (v) => { settings.infoDate = v; save(); })),
              row("Session timer", null, toggleSwitch(settings.infoSession !== false, (v) => { settings.infoSession = v; save(); })),
              row("Kills / deaths", null, toggleSwitch(settings.infoKills !== false, (v) => { settings.infoKills = v; save(); })),
              row("Deaths", null, toggleSwitch(settings.infoDeaths !== false, (v) => { settings.infoDeaths = v; save(); })),
              row("K/D ratio", null, toggleSwitch(settings.infoKD !== false, (v) => { settings.infoKD = v; save(); })),
              row("Shots", "Trigger pulls this session", toggleSwitch(settings.infoShots !== false, (v) => { settings.infoShots = v; save(); })),
              row("Hits", "Hitmarks this session", toggleSwitch(settings.infoHits !== false, (v) => { settings.infoHits = v; save(); })),
              row("Accuracy", "Hits / shots", toggleSwitch(settings.infoAcc !== false, (v) => { settings.infoAcc = v; save(); })),
              row("Position", null, selectField(settings.infoPos || "br", [["tl", "Top left"], ["tr", "Top right"], ["bl", "Bottom left"], ["br", "Bottom right"]], (v) => { settings.infoPos = v; save(); })),
              row("Size", null, rangeField(settings.infoSize, 9, 20, 1, (v) => { settings.infoSize = v; save(); })),
              row("Reset session", "Zero timer and counters", actionBtn("Reset", () => {
                hudSes.t0 = 0; hudSes.kills = 0; hudSes.deaths = 0; hudSes.lastKills = null;
                stReset();
              }))
            ]),
          moduleCard("Health Bars", "Custom HP / armor bars.", settings.hudBars,
            (v) => { settings.hudBars = v; save(); }, [
              row("Position", null, selectField(settings.barsPos || "bl", [["tl", "Top left"], ["tr", "Top right"], ["bl", "Bottom left"], ["br", "Bottom right"]], (v) => { settings.barsPos = v; save(); })),
              row("Width", null, rangeField(settings.barsW, 80, 400, 10, (v) => { settings.barsW = v; save(); })),
              row("Bar height", null, rangeField(settings.barsH, 6, 30, 1, (v) => { settings.barsH = v; save(); })),
              row("HP color", null, colorField(settings.hpColor || "#7dff8a", (v) => { settings.hpColor = v; save(); })),
              row("Armor color", null, colorField(settings.armorColor || "#7db8f0", (v) => { settings.armorColor = v; save(); })),
              row("Show armor", null, toggleSwitch(settings.barsArmor !== false, (v) => { settings.barsArmor = v; save(); })),
              row("Numbers", null, toggleSwitch(settings.barsNumbers !== false, (v) => { settings.barsNumbers = v; save(); })),
              row("Background", null, toggleSwitch(settings.barsBg !== false, (v) => { settings.barsBg = v; save(); })),
              row("Low HP warn", null, toggleSwitch(settings.barsLow !== false, (v) => { settings.barsLow = v; save(); })),
              row("Warn below", null, rangeField(settings.barsLowAt ?? 30, 5, 75, 5, (v) => { settings.barsLowAt = v; save(); }))
            ]),
          moduleCard("Ammo", "Custom ammo counter.", settings.hudAmmo,
            (v) => { settings.hudAmmo = v; save(); }, [
              row("Size", null, rangeField(settings.ammoSize, 12, 40, 1, (v) => { settings.ammoSize = v; save(); })),
              row("Position", null, selectField(settings.ammoPos || "br", [["tl", "Top left"], ["tr", "Top right"], ["bl", "Bottom left"], ["br", "Bottom right"]], (v) => { settings.ammoPos = v; save(); })),
              row("Show reserve", null, toggleSwitch(settings.ammoReserve !== false, (v) => { settings.ammoReserve = v; save(); })),
              row("Low ammo warn", null, toggleSwitch(settings.ammoLow !== false, (v) => { settings.ammoLow = v; save(); })),
              row("Warn at", null, rangeField(settings.ammoLowAt ?? 6, 0, 30, 1, (v) => { settings.ammoLowAt = v; save(); })),
              row("Color", null, colorField(settings.ammoColor || "#ffffff", (v) => { settings.ammoColor = v; save(); })),
              row("Background", null, toggleSwitch(settings.ammoBg !== false, (v) => { settings.ammoBg = v; save(); }))
            ]),
          moduleCard("Kill Banner", "Celebrate elims with banner + confetti.", settings.kbOn,
            (v) => { settings.kbOn = v; save(); }, [
              row("Style", null, selectField(settings.kbStyle || "both", [["both", "Banner + confetti"], ["banner", "Banner"], ["confetti", "Confetti"], ["compact", "Compact banner"]], (v) => { settings.kbStyle = v; save(); })),
              row("Color", null, colorField(settings.kbColor || "#ff6b9d", (v) => { settings.kbColor = v; save(); })),
              row("Size", null, rangeField(settings.kbSize, 12, 40, 1, (v) => { settings.kbSize = v; save(); })),
              row("Duration", "Seconds", rangeField(settings.kbTime, 0.5, 5, 0.1, (v) => { settings.kbTime = v; save(); })),
              row("Confetti", "Pieces per kill", rangeField(settings.kbCount ?? 60, 0, 150, 5, (v) => { settings.kbCount = v; save(); })),
              row("Show name", "Name the victim", toggleSwitch(settings.kbName !== false, (v) => { settings.kbName = v; save(); })),
              row("Multikill", "Streak callouts", toggleSwitch(settings.kbMulti !== false, (v) => { settings.kbMulti = v; save(); })),
              row("Streak window", "Seconds", rangeField(settings.kbWindow ?? 4, 2, 8, 0.5, (v) => { settings.kbWindow = v; save(); })),
              row("Position", null, selectField(settings.kbPos || "top", [["top", "Top"], ["center", "Center"]], (v) => { settings.kbPos = v; save(); }))
            ])
        ];
      }
      if (id === "chams") return [
        moduleCard("Arm Chams", "Viewmodel arm chams - colored arms.", settings.armCharms,
          (v) => { settings.armCharms = v; save(); }, [
            row("Cham Type", null, selectField(settings.charmsType, [["outline", "Outline"], ["glow", "Glow"], ["both", "Both"], ["wireframe", "Wireframe"]], (v) => { settings.charmsType = v; save(); })),
            row("Color", null, colorField(settings.charmColor || "#ff6b9d", (v) => { settings.charmColor = v; save(); })),
            row("Width", "Depth push toward camera", rangeField(settings.charmWidth, 0, 10, 0.5, (v) => { settings.charmWidth = v; save(); })),
            row("Opacity", null, rangeField(settings.charmOpacity, 0.05, 1, 0.05, (v) => { settings.charmOpacity = v; save(); })),
            row("Preset", null, selectField(settings.charmPreset || "custom", [["custom", "Custom"], ["sakura", "Sakura"], ["red", "Red"], ["green", "Green"], ["blue", "Blue"], ["gold", "Gold"], ["white", "White"], ["cyan", "Cyan"]], (v) => {
              const C = { sakura: "#ff6b9d", red: "#ff3b3b", green: "#3bff6e", blue: "#3b8bff", gold: "#ffcf3b", white: "#ffffff", cyan: "#3be8ff" };
              settings.charmPreset = v;
              if (C[v]) settings.charmColor = C[v];
              save();
            })),
            row("Second color", "Glow / candy target", colorField(settings.charmColor2 || "#ffb3c6", (v) => { settings.charmColor2 = v; save(); })),
            row("Two-tone", "Emissive uses second color", toggleSwitch(settings.charmTwoTone, (v) => { settings.charmTwoTone = v; save(); })),
            row("Glow", null, rangeField(settings.charmGlow ?? 0.6, 0, 2, 0.1, (v) => { settings.charmGlow = v; save(); })),
            row("Rainbow", "Animated hue cycle", toggleSwitch(settings.charmRainbow, (v) => { settings.charmRainbow = v; save(); })),
            row("Rainbow speed", "Degrees / second", rangeField(settings.charmRainbowSpd, 10, 360, 10, (v) => { settings.charmRainbowSpd = v; save(); })),
            row("Pulse", "Breathe the glow", toggleSwitch(settings.charmPulse, (v) => { settings.charmPulse = v; save(); })),
            row("Pulse speed", null, rangeField(settings.charmPulseSpd, 0.5, 10, 0.5, (v) => { settings.charmPulseSpd = v; save(); })),
            row("Pulse amount", null, rangeField(settings.charmPulseAmt ?? 0.4, 0, 1.5, 0.05, (v) => { settings.charmPulseAmt = v; save(); })),
            row("Shimmer", "Breathe the opacity", toggleSwitch(settings.charmShimmer, (v) => { settings.charmShimmer = v; save(); })),
            row("Candy", "Morph between both colors", toggleSwitch(settings.charmCandy, (v) => { settings.charmCandy = v; save(); })),
            row("Candy speed", "Morphs / second", rangeField(settings.charmCandySpd, 0.2, 8, 0.2, (v) => { settings.charmCandySpd = v; save(); })),
            row("Fullbright", "Ignore scene lighting", toggleSwitch(settings.charmFull, (v) => { settings.charmFull = v; save(); })),
            row("Metallic", "Chrome-like finish", toggleSwitch(settings.charmMetal, (v) => { settings.charmMetal = v; save(); })),
            row("Flat", "Faceted low-poly look", toggleSwitch(settings.charmFlat, (v) => { settings.charmFlat = v; save(); })),
            row("X-ray", "Draw on top of walls", toggleSwitch(settings.charmXray, (v) => { settings.charmXray = v; save(); })),
            row("Ghost", "No depth write", toggleSwitch(settings.charmGhost, (v) => { settings.charmGhost = v; save(); })),
            row("Backside", "Hollow inside-out look", toggleSwitch(settings.charmBack, (v) => { settings.charmBack = v; save(); })),
            row("No texture", "Flat color, no skin detail", toggleSwitch(settings.charmNoTex, (v) => { settings.charmNoTex = v; save(); })),
            row("Brightness", null, rangeField(settings.charmBright ?? 1, 0.2, 2, 0.05, (v) => { settings.charmBright = v; save(); })),
            row("Fire flash", "Flash color while shooting", toggleSwitch(settings.charmFire, (v) => { settings.charmFire = v; save(); })),
            row("Fire color", null, colorField(settings.charmFireCol || "#ffffff", (v) => { settings.charmFireCol = v; save(); }))
          ]),
        moduleCard("Gun Chams", "Weapon chams - colored weapon.", settings.gunChams,
          (v) => { settings.gunChams = v; save(); }, [
            row("Cham Type", null, selectField(settings.chamType, [["outline", "Outline"], ["glow", "Glow"], ["both", "Both"], ["wireframe", "Wireframe"]], (v) => { settings.chamType = v; save(); })),
            row("Color", null, colorField(settings.chamColor || "#ff6b9d", (v) => { settings.chamColor = v; save(); })),
            row("Width", "Depth push toward camera", rangeField(settings.chamWidth, 0, 10, 0.5, (v) => { settings.chamWidth = v; save(); })),
            row("Opacity", null, rangeField(settings.chamOpacity, 0.05, 1, 0.05, (v) => { settings.chamOpacity = v; save(); })),
            row("Glow Intensity", null, rangeField(settings.chamGlowIntensity, 0, 2, 0.1, (v) => { settings.chamGlowIntensity = v; save(); })),
            row("Preset", null, selectField(settings.chamPreset || "custom", [["custom", "Custom"], ["sakura", "Sakura"], ["red", "Red"], ["green", "Green"], ["blue", "Blue"], ["gold", "Gold"], ["white", "White"], ["cyan", "Cyan"]], (v) => {
              const C = { sakura: "#ff6b9d", red: "#ff3b3b", green: "#3bff6e", blue: "#3b8bff", gold: "#ffcf3b", white: "#ffffff", cyan: "#3be8ff" };
              settings.chamPreset = v;
              if (C[v]) settings.chamColor = C[v];
              save();
            })),
            row("Second color", "Glow / candy target", colorField(settings.chamColor2 || "#ffb3c6", (v) => { settings.chamColor2 = v; save(); })),
            row("Two-tone", "Emissive uses second color", toggleSwitch(settings.chamTwoTone, (v) => { settings.chamTwoTone = v; save(); })),
            row("Rainbow", "Animated hue cycle", toggleSwitch(settings.chamRainbow, (v) => { settings.chamRainbow = v; save(); })),
            row("Rainbow speed", "Degrees / second", rangeField(settings.chamRainbowSpd, 10, 360, 10, (v) => { settings.chamRainbowSpd = v; save(); })),
            row("Pulse", "Breathe the glow", toggleSwitch(settings.chamPulse, (v) => { settings.chamPulse = v; save(); })),
            row("Pulse speed", null, rangeField(settings.chamPulseSpd, 0.5, 10, 0.5, (v) => { settings.chamPulseSpd = v; save(); })),
            row("Pulse amount", null, rangeField(settings.chamPulseAmt ?? 0.4, 0, 1.5, 0.05, (v) => { settings.chamPulseAmt = v; save(); })),
            row("Shimmer", "Breathe the opacity", toggleSwitch(settings.chamShimmer, (v) => { settings.chamShimmer = v; save(); })),
            row("Candy", "Morph between both colors", toggleSwitch(settings.chamCandy, (v) => { settings.chamCandy = v; save(); })),
            row("Candy speed", "Morphs / second", rangeField(settings.chamCandySpd, 0.2, 8, 0.2, (v) => { settings.chamCandySpd = v; save(); })),
            row("Fullbright", "Ignore scene lighting", toggleSwitch(settings.chamFull, (v) => { settings.chamFull = v; save(); })),
            row("Metallic", "Chrome-like finish", toggleSwitch(settings.chamMetal, (v) => { settings.chamMetal = v; save(); })),
            row("Flat", "Faceted low-poly look", toggleSwitch(settings.chamFlat, (v) => { settings.chamFlat = v; save(); })),
            row("X-ray", "Draw on top of walls", toggleSwitch(settings.chamXray, (v) => { settings.chamXray = v; save(); })),
            row("Ghost", "No depth write", toggleSwitch(settings.chamGhost, (v) => { settings.chamGhost = v; save(); })),
            row("Backside", "Hollow inside-out look", toggleSwitch(settings.chamBack, (v) => { settings.chamBack = v; save(); })),
            row("No texture", "Flat color, no skin detail", toggleSwitch(settings.chamNoTex, (v) => { settings.chamNoTex = v; save(); })),
            row("Brightness", null, rangeField(settings.chamBright ?? 1, 0.2, 2, 0.05, (v) => { settings.chamBright = v; save(); })),
            row("Fire flash", "Flash color while shooting", toggleSwitch(settings.chamFire, (v) => { settings.chamFire = v; save(); })),
            row("Fire color", null, colorField(settings.chamFireCol || "#ffffff", (v) => { settings.chamFireCol = v; save(); }))
          ]),
        moduleCard("Knife Chams", "Best-effort match on knife meshes.", settings.knifeChams,
          (v) => { settings.knifeChams = v; save(); }, [
            row("Cham Type", null, selectField(settings.knifeType || "outline", [["outline", "Outline"], ["glow", "Glow"], ["both", "Both"], ["wireframe", "Wireframe"]], (v) => { settings.knifeType = v; save(); })),
            row("Color", null, colorField(settings.knifeColor || "#ff6b9d", (v) => { settings.knifeColor = v; save(); })),
            row("Opacity", null, rangeField(settings.knifeOpacity ?? 0.5, 0.05, 1, 0.05, (v) => { settings.knifeOpacity = v; save(); })),
            row("Rainbow", "Animated hue cycle", toggleSwitch(settings.knifeRainbow, (v) => { settings.knifeRainbow = v; save(); }))
          ]),
        moduleCard("Viewmodel", "Visibility and update behaviour.", true, null, [
            row("Hide weapon", "Hide the gun meshes", toggleSwitch(settings.gunHide, (v) => { settings.gunHide = v; save(); })),
            row("Hide arms", "Hide the arm meshes", toggleSwitch(settings.armHide, (v) => { settings.armHide = v; save(); })),
            row("Match only", "Restores everything outside matches", toggleSwitch(settings.chamsMatchOnly !== false, (v) => { settings.chamsMatchOnly = v; save(); })),
            row("Rescan", "Recheck meshes every N seconds", rangeField(settings.chamsScan ?? 2, 0.5, 10, 0.5, (v) => { settings.chamsScan = v; save(); }))
          ]),
        moduleCard("Viewmodel Pose", "Move the gun around in first person.", settings.vmOn,
          (v) => { settings.vmOn = v; save(); }, [
            row("Offset X", "Right (+) / left (-)", rangeField(settings.vmX ?? 0, -0.5, 0.5, 0.01, (v) => { settings.vmX = v; save(); })),
            row("Offset Y", "Up (+) / down (-)", rangeField(settings.vmY ?? 0, -0.5, 0.5, 0.01, (v) => { settings.vmY = v; save(); })),
            row("Offset Z", "Toward (+) / away (-)", rangeField(settings.vmZ ?? 0, -0.5, 0.5, 0.01, (v) => { settings.vmZ = v; save(); })),
            row("Tilt X", "Degrees", rangeField(settings.vmRX ?? 0, -15, 15, 0.5, (v) => { settings.vmRX = v; save(); })),
            row("Tilt Y", "Degrees", rangeField(settings.vmRY ?? 0, -15, 15, 0.5, (v) => { settings.vmRY = v; save(); })),
            row("Roll", "Degrees", rangeField(settings.vmRZ ?? 0, -15, 15, 0.5, (v) => { settings.vmRZ = v; save(); })),
            row("Pose preset", null, selectField(settings.vmPose || "custom", [["custom", "Custom"], ["default", "Default"], ["centered", "Centered"], ["low", "Low rider"], ["close", "Close-up"], ["left", "Left lean"], ["right", "Right lean"]], (v) => {
              const P = {
                default: [0, 0, 0, 0, 0, 0], centered: [0, -0.02, 0.05, 0, 0, 0],
                low: [0, -0.08, 0, 0, 0, 0], close: [0, -0.01, 0.12, 0, 0, 0],
                left: [-0.1, 0, 0.02, 0, 0, -4], right: [0.08, 0, 0.02, 0, 0, 4]
              }[v];
              settings.vmPose = v;
              if (P) {
                settings.vmX = P[0]; settings.vmY = P[1]; settings.vmZ = P[2];
                settings.vmRX = P[3]; settings.vmRY = P[4]; settings.vmRZ = P[5];
              }
              save();
              rebuildPanel();
            })),
            row("Inspect", "Play inspect animation", actionBtn("Inspect", () => {
              try {
                const vm = getGame()?.viewmodel;
                if (vm && typeof vm.inspect === "function") vm.inspect();
              } catch (_) {}
            })),
            row("Auto inspect", "Inspect on every spawn", toggleSwitch(settings.vmInspectAuto, (v) => { settings.vmInspectAuto = v; save(); })),
            row("Custom FOV", "Own camera zoom", toggleSwitch(settings.vmFovOn, (v) => { settings.vmFovOn = v; save(); })),
            row("FOV value", null, rangeField(settings.vmFov ?? 70, 30, 120, 1, (v) => { settings.vmFov = v; save(); })),
            row("Kick", "Recoil kick percent", rangeField(settings.vmKick ?? 100, 0, 100, 5, (v) => { settings.vmKick = v; save(); })),
            row("Bob", "Walk bob percent", rangeField(settings.vmBob ?? 100, 0, 100, 5, (v) => { settings.vmBob = v; save(); })),
            row("Sway", "Look sway percent", rangeField(settings.vmSway ?? 100, 0, 100, 5, (v) => { settings.vmSway = v; save(); })),
            row("Arm X", "Shift arms right (+) / left (-)", rangeField(settings.armX ?? 0, -0.3, 0.3, 0.005, (v) => { settings.armX = v; save(); })),
            row("Arm Y", "Shift arms up (+) / down (-)", rangeField(settings.armY ?? 0, -0.3, 0.3, 0.005, (v) => { settings.armY = v; save(); })),
            row("Arm Z", "Shift arms toward (+) / away (-)", rangeField(settings.armZ ?? 0, -0.3, 0.3, 0.005, (v) => { settings.armZ = v; save(); })),
            row("Hide part", "Hide arm meshes by name, e.g. shoulder", textField(settings.armHideName || "", 40, (v) => { settings.armHideName = v; save(); })),
            row("Reset pose", "Zero offsets, rotation and FOV", actionBtn("Reset", () => {
              Object.assign(settings, { vmX: 0, vmY: 0, vmZ: 0, vmRX: 0, vmRY: 0, vmRZ: 0, vmFovOn: false });
              save();
              rebuildPanel();
            }))
          ])
      ];
      if (id === "crosshair") {
        const styles = [["cross", "Cross"], ["dot", "Dot"], ["circle", "Circle"], ["crossdot", "Cross + Dot"], ["x", "X"], ["t", "T"], ["square", "Square"], ["diamond", "Diamond"], ["chevron", "Chevron"], ["ringdot", "Ring + Dot"], ["custom", "Custom Draw"]];
        const presets = [["custom", "Custom"], ["def", "Default"], ["cs", "CS 1.6"], ["val", "Valorant"], ["dot", "Dot only"], ["circ", "Circle"], ["chev", "Chevron"]];
        return [
          moduleCard("Crosshair", "Overlay crosshair drawn at screen center.", settings.crosshair,
            (v) => { settings.crosshair = v; save(); }, [
              row("Preset", null, selectField(settings.chPreset, presets, (v) => { chApplyPreset(v); rebuildPanel(); })),
              row("Style", null, selectField(settings.chStyle, styles, (v) => { settings.chStyle = v; settings.chPreset = "custom"; save(); })),
              row("Color", null, colorField(settings.chColor || "#ffffff", (v) => { settings.chColor = v; settings.chPreset = "custom"; save(); })),
              row("Dot color", null, colorField(settings.chDotColor || "#ffffff", (v) => { settings.chDotColor = v; settings.chPreset = "custom"; save(); })),
              row("Length", null, rangeField(settings.chLen, 2, 30, 0.5, (v) => { settings.chLen = v; settings.chPreset = "custom"; save(); })),
              row("Side length", "Horizontal arms multiplier", rangeField(settings.chLenH, 0.3, 2, 0.05, (v) => { settings.chLenH = v; settings.chPreset = "custom"; save(); })),
              row("Vertical length", "Top / bottom arms multiplier", rangeField(settings.chLenV, 0.3, 2, 0.05, (v) => { settings.chLenV = v; settings.chPreset = "custom"; save(); })),
              row("Thickness", null, rangeField(settings.chThick, 1, 8, 0.5, (v) => { settings.chThick = v; settings.chPreset = "custom"; save(); })),
              row("Gap", null, rangeField(settings.chGap, 0, 24, 0.5, (v) => { settings.chGap = v; settings.chPreset = "custom"; save(); })),
              row("Vertical gap", "Top / bottom arms gap", rangeField(settings.chGapY, 0, 24, 0.5, (v) => { settings.chGapY = v; settings.chPreset = "custom"; save(); })),
              row("Center dot", "Dot on line styles", toggleSwitch(settings.chDot, (v) => { settings.chDot = v; save(); })),
              row("Dot size", null, rangeField(settings.chDotSize, 1, 8, 0.5, (v) => { settings.chDotSize = v; save(); })),
              row("Outline", null, toggleSwitch(settings.chOutline, (v) => { settings.chOutline = v; save(); })),
              row("Outline color", null, colorField(settings.chOutlineColor || "#000000", (v) => { settings.chOutlineColor = v; save(); })),
              row("Opacity", null, rangeField(settings.chOpacity, 0.1, 1, 0.05, (v) => { settings.chOpacity = v; save(); }))
            ]),
          moduleCard("Dynamics", "Gap reacts to movement, firing and ADS.", settings.chDynamic,
            (v) => { settings.chDynamic = v; save(); }, [
              row("Move spread", null, rangeField(settings.chMoveAmt, 0, 20, 0.5, (v) => { settings.chMoveAmt = v; save(); })),
              row("Fire kick", "Expand while shooting", toggleSwitch(settings.chFireKick, (v) => { settings.chFireKick = v; save(); })),
              row("Kick amount", null, rangeField(settings.chKickAmt, 0, 24, 0.5, (v) => { settings.chKickAmt = v; save(); })),
              row("Recovery", "How fast kick settles", rangeField(settings.chRecover, 1, 10, 0.5, (v) => { settings.chRecover = v; save(); })),
              row("Expansion cap", null, rangeField(settings.chExpandCap, 0, 40, 1, (v) => { settings.chExpandCap = v; save(); })),
              row("Spread source", "Game cone reads live inaccuracy", selectField(settings.chSpreadSrc || "auto", [["auto", "Auto"], ["game", "Game cone"], ["synth", "Synthetic"]], (v) => { settings.chSpreadSrc = v; save(); })),
              row("Cone scale", null, rangeField(settings.chSpreadScale ?? 1, 0, 3, 0.1, (v) => { settings.chSpreadScale = v; save(); })),
              row("Cone cap", null, rangeField(settings.chSpreadCap ?? 40, 0, 60, 1, (v) => { settings.chSpreadCap = v; save(); })),
              row("ADS tighten", "Contract while RMB held", toggleSwitch(settings.chAds, (v) => { settings.chAds = v; save(); })),
              row("ADS amount", null, rangeField(settings.chAdsAmt, 0, 0.8, 0.05, (v) => { settings.chAdsAmt = v; save(); })),
              row("Scoped size", "Size multiplier on RMB", rangeField(settings.chScopeMult, 0.5, 1.5, 0.05, (v) => { settings.chScopeMult = v; save(); })),
              row("Crouch tighten", "Contract while Ctrl held", toggleSwitch(settings.chCtrlT, (v) => { settings.chCtrlT = v; save(); })),
              row("Crouch amount", null, rangeField(settings.chCtrlAmt, 0, 0.8, 0.05, (v) => { settings.chCtrlAmt = v; save(); })),
              row("Hide on RMB", null, toggleSwitch(settings.chScopeHide, (v) => { settings.chScopeHide = v; save(); })),
              row("Outer lines", "Second set of arms", toggleSwitch(settings.chOuter, (v) => { settings.chOuter = v; save(); })),
              row("Outer gap", null, rangeField(settings.chOuterGap, 0, 20, 0.5, (v) => { settings.chOuterGap = v; save(); })),
              row("Outer length", null, rangeField(settings.chOuterLen, 2, 24, 0.5, (v) => { settings.chOuterLen = v; save(); }))
            ]),
          moduleCard("Animation", "Idle motion and fire feedback.", settings.chPulse || settings.chSpin || settings.chRainbow,
            (v) => { settings.chPulse = v; settings.chSpin = v; settings.chRainbow = v; save(); rebuildPanel(); }, [
              row("Breathe", "Sine scale pulse", toggleSwitch(settings.chPulse, (v) => { settings.chPulse = v; save(); })),
              row("Breathe amount", null, rangeField(settings.chPulseAmt, 0, 0.5, 0.01, (v) => { settings.chPulseAmt = v; save(); })),
              row("Breathe speed", null, rangeField(settings.chPulseSpeed, 0.5, 10, 0.5, (v) => { settings.chPulseSpeed = v; save(); })),
              row("Spin", "Rotate around center", toggleSwitch(settings.chSpin, (v) => { settings.chSpin = v; save(); })),
              row("Spin speed", "Radians / second", rangeField(settings.chSpinSpeed, -6, 6, 0.5, (v) => { settings.chSpinSpeed = v; save(); })),
              row("Rainbow", null, toggleSwitch(settings.chRainbow, (v) => { settings.chRainbow = v; save(); })),
              row("Rainbow speed", "Degrees / second", rangeField(settings.chRainbowSpeed, 10, 360, 10, (v) => { settings.chRainbowSpeed = v; save(); })),
              row("Fire flash", "Flash color on shoot", toggleSwitch(settings.chFlash, (v) => { settings.chFlash = v; save(); })),
              row("Flash color", null, colorField(settings.chFlashColor || "#ff6b9d", (v) => { settings.chFlashColor = v; save(); })),
              row("Wobble", "Horizontal drift", toggleSwitch(settings.chWobble, (v) => { settings.chWobble = v; save(); })),
              row("Wobble amount", null, rangeField(settings.chWobbleAmt, 0, 8, 0.5, (v) => { settings.chWobbleAmt = v; save(); })),
              row("Fire X", "X flash on shoot", toggleSwitch(settings.chFireX, (v) => { settings.chFireX = v; save(); })),
              row("Fire X size", null, rangeField(settings.chFireXSize, 4, 30, 1, (v) => { settings.chFireXSize = v; save(); }))
            ]),
          moduleCard("Visibility", "Where and when it draws.", true, null, [
              row("Offset X", null, rangeField(settings.chOffX, -150, 150, 1, (v) => { settings.chOffX = v; save(); })),
              row("Offset Y", null, rangeField(settings.chOffY, -150, 150, 1, (v) => { settings.chOffY = v; save(); })),
              row("Glow", null, toggleSwitch(settings.chGlow, (v) => { settings.chGlow = v; save(); })),
              row("Glow amount", null, rangeField(settings.chGlowAmt, 0, 30, 1, (v) => { settings.chGlowAmt = v; save(); })),
              row("Draw in lobby", "Also outside matches", toggleSwitch(settings.chInLobby, (v) => { settings.chInLobby = v; save(); })),
              row("Hide in menu", "Hide while this menu is open", toggleSwitch(settings.chHideMenu, (v) => { settings.chHideMenu = v; save(); })),
              row("Hide game crosshair", "Hide the built-in crosshair while ours draws", toggleSwitch(settings.chHideGame !== false, (v) => { settings.chHideGame = v; save(); }))
            ]),
          moduleCard("Custom Draw", "Draw your own crosshair, then pick the Custom Draw style to use it.", true, null, [
              row("Mode", "Pixels toggles cells, free draw paints strokes", selectField(settings.chDrawMode || "pixels", [["pixels", "Pixels"], ["free", "Free draw"]], (v) => { settings.chDrawMode = v; save(); })),
              pixelEditor(),
              row("Mirror X", "Mirror left / right", toggleSwitch(settings.chMirrorX !== false, (v) => { settings.chMirrorX = v; save(); })),
              row("Mirror Y", "Mirror top / bottom", toggleSwitch(settings.chMirrorY !== false, (v) => { settings.chMirrorY = v; save(); })),
              row("Pixel size", "In-game render scale", rangeField(settings.chPxScale ?? 3, 1, 6, 1, (v) => { settings.chPxScale = v; save(); })),
              note("Left-drag paints, right-drag erases.")
            ]),
          moduleCard("Scope", "Custom scope overlay when actually scoped.", settings.scOn,
            (v) => { settings.scOn = v; save(); }, [
              row("Style", null, selectField(settings.scStyle || "duplex", [["duplex", "Ring + Cross"], ["ring", "Ring"], ["cross", "Cross"], ["dot", "Dot"]], (v) => { settings.scStyle = v; save(); })),
              row("Color", null, colorField(settings.scColor || "#111111", (v) => { settings.scColor = v; save(); })),
              row("Thickness", null, rangeField(settings.scThick, 1, 10, 1, (v) => { settings.scThick = v; save(); })),
              row("Center gap", "Line-free middle", rangeField(settings.scGap ?? 0.12, 0, 0.4, 0.02, (v) => { settings.scGap = v; save(); }))
            ])
        ];
      }
      if (id === "fx") {
        return [
          moduleCard("Tracers", "Light lines from gun to crosshair.", settings.atTracers,
            (v) => { settings.atTracers = v; save(); }, [
              row("Style", null, selectField(settings.trStyle || "line", [["line", "Line"], ["glow", "Glow"], ["dots", "Dotted"]], (v) => { settings.trStyle = v; save(); })),
              row("Color", null, colorField(settings.trColor || "#ff6b9d", (v) => { settings.trColor = v; save(); })),
              row("Gradient", "Fade from second color", toggleSwitch(settings.trGrad, (v) => { settings.trGrad = v; save(); })),
              row("Second color", "Gradient start", colorField(settings.trColor2 || "#ffb3c6", (v) => { settings.trColor2 = v; save(); })),
              row("Width", null, rangeField(settings.trWidth, 0.5, 8, 0.5, (v) => { settings.trWidth = v; save(); })),
              row("Lifetime", "Seconds", rangeField(settings.trLife, 0.05, 1.5, 0.05, (v) => { settings.trLife = v; save(); })),
              row("Origin", "Where lines start", selectField(settings.trOrigin || "gun", [["gun", "Gun"], ["bc", "Bottom center"], ["bl", "Bottom left"], ["br", "Bottom right"], ["center", "Center"]], (v) => { settings.trOrigin = v; save(); })),
              row("Start gap", "Begin away from muzzle", rangeField(settings.trGap ?? 0, 0, 120, 2, (v) => { settings.trGap = v; save(); })),
              row("Spread", "Impact jitter px", rangeField(settings.trJitter ?? 6, 0, 40, 1, (v) => { settings.trJitter = v; save(); })),
              row("Rainbow", null, toggleSwitch(settings.trRainbow, (v) => { settings.trRainbow = v; save(); })),
              row("Opacity", null, rangeField(settings.trOp ?? 0.9, 0.1, 1, 0.05, (v) => { settings.trOp = v; save(); })),
              row("Fire rate", "Ms between lines held", rangeField(settings.trRate ?? 45, 15, 200, 5, (v) => { settings.trRate = v; save(); })),
              row("Random hue", "New color per shot", toggleSwitch(settings.trRandom, (v) => { settings.trRandom = v; save(); }))
            ]),
          moduleCard("Muzzle", "Light flash at the gun.", settings.mzOn,
            (v) => { settings.mzOn = v; save(); }, [
              row("Color", null, colorField(settings.mzColor || "#ffd9a0", (v) => { settings.mzColor = v; save(); })),
              row("Size", null, rangeField(settings.mzSize, 20, 240, 5, (v) => { settings.mzSize = v; save(); })),
              row("Decay", "Seconds to fade", rangeField(settings.mzDecay, 0.05, 1, 0.05, (v) => { settings.mzDecay = v; save(); })),
              row("Offset X", null, rangeField(settings.mzX ?? 0, -200, 200, 5, (v) => { settings.mzX = v; save(); })),
              row("Offset Y", null, rangeField(settings.mzY ?? 0, -200, 200, 5, (v) => { settings.mzY = v; save(); })),
              row("Flicker", null, toggleSwitch(settings.mzFlicker !== false, (v) => { settings.mzFlicker = v; save(); })),
              row("Smoke puff", "Expanding ring per shot", toggleSwitch(settings.mzPuff, (v) => { settings.mzPuff = v; save(); }))
            ]),
          moduleCard("Impact", "Bursts mirroring hitmarks.", settings.imOn,
            (v) => { settings.imOn = v; save(); }, [
              row("Style", null, selectField(settings.imStyle || "both", [["both", "Burst + Ring"], ["burst", "Burst"], ["ring", "Ring"]], (v) => { settings.imStyle = v; save(); })),
              row("Color", null, colorField(settings.imColor || "#ffffff", (v) => { settings.imColor = v; save(); })),
              row("Headshot color", null, colorField(settings.imHs || "#ff4040", (v) => { settings.imHs = v; save(); })),
              row("Size", null, rangeField(settings.imSize, 4, 30, 1, (v) => { settings.imSize = v; save(); })),
              row("Sparks", null, rangeField(settings.imCount, 1, 30, 1, (v) => { settings.imCount = v; save(); })),
              row("Duration", "Seconds", rangeField(settings.imTime, 0.1, 1.2, 0.05, (v) => { settings.imTime = v; save(); })),
              row("Gravity", null, rangeField(settings.imGrav ?? 300, 0, 1200, 20, (v) => { settings.imGrav = v; save(); })),
              row("Ring", "Expanding circle", toggleSwitch(settings.imRing !== false, (v) => { settings.imRing = v; save(); })),
              row("Flash", "Full-screen pop", toggleSwitch(settings.imFlash, (v) => { settings.imFlash = v; save(); }))
            ]),
          moduleCard("Weather", "Screen-space particles.", settings.wxOn,
            (v) => { settings.wxOn = v; save(); }, [
              row("Type", null, selectField(settings.wxType || "petals", [["petals", "Petals"], ["snow", "Snow"], ["rain", "Rain"], ["embers", "Embers"], ["leaves", "Leaves"]], (v) => { settings.wxType = v; save(); })),
              row("Placement", "Screen overlay vs in the map", selectField(settings.wxMode || "screen", [["screen", "On screen"], ["world", "In map (3D)"]], (v) => { settings.wxMode = v; save(); })),
              row("Engine", "Live backend", wxStatusEl()),
              row("Under cover", "Indoors / behind a wall", wxCoverEl()),
              row("Count", null, rangeField(settings.wxCount ?? 80, 0, 220, 10, (v) => { settings.wxCount = v; save(); })),
              row("Size", null, rangeField(settings.wxSize ?? 1, 0.3, 4, 0.1, (v) => { settings.wxSize = v; save(); })),
              row("Speed", null, rangeField(settings.wxSpeed ?? 1, 0.1, 5, 0.1, (v) => { settings.wxSpeed = v; save(); })),
              row("Wind", "Left (-) / right (+)", rangeField(settings.wxWind ?? 0.2, -1, 1, 0.05, (v) => { settings.wxWind = v; save(); })),
              row("Opacity", null, rangeField(settings.wxOp ?? 0.8, 0.1, 1, 0.05, (v) => { settings.wxOp = v; save(); })),
              row("Tint", "Empty = type color", colorField(settings.wxTint || "#ffb3c6", (v) => { settings.wxTint = v; save(); })),
              row("Twinkle", "Blink in and out", toggleSwitch(settings.wxTwinkle, (v) => { settings.wxTwinkle = v; save(); })),
              row("Swirl", "Sway side to side", toggleSwitch(settings.wxSwirl, (v) => { settings.wxSwirl = v; save(); })),
              row("Hide in cover", "No 3D weather indoors / behind walls", toggleSwitch(settings.wxCoverHide !== false, (v) => { settings.wxCoverHide = v; save(); })),
              row("In menu", "Also outside matches", toggleSwitch(settings.wxLobby, (v) => { settings.wxLobby = v; save(); }))
            ]),
          moduleCard("Motes", "Slow drifting specks.", settings.moOn,
            (v) => { settings.moOn = v; save(); }, [
              row("Count", null, rangeField(settings.moCount ?? 40, 0, 150, 5, (v) => { settings.moCount = v; save(); })),
              row("Size", null, rangeField(settings.moSize ?? 1.5, 0.3, 5, 0.1, (v) => { settings.moSize = v; save(); })),
              row("Speed", null, rangeField(settings.moSpeed ?? 0.3, 0.05, 2, 0.05, (v) => { settings.moSpeed = v; save(); })),
              row("Opacity", null, rangeField(settings.moOp ?? 0.5, 0.1, 1, 0.05, (v) => { settings.moOp = v; save(); })),
              row("Color", null, colorField(settings.moColor || "#ffd6e4", (v) => { settings.moColor = v; save(); })),
              row("Drift", "Sideways sway", rangeField(settings.moDrift ?? 12, 0, 40, 1, (v) => { settings.moDrift = v; save(); }))
            ])
        ];
      }
      if (id === "game") {
        const gxPresets = [["custom", "Custom"], ["classic", "Classic green"], ["cyan", "Cyan"], ["yellow", "Yellow"], ["red", "Red"], ["white", "White"], ["pink", "Pink"]];
        const gxHex = { classic: "#3cff5a", cyan: "#00e5ff", yellow: "#ffe14d", red: "#ff4d4d", white: "#ffffff", pink: "#ff6b9d" };
        return [
          moduleCard("Game Crosshair", "Styles the game's own crosshair. Needs it visible (Cross tab).", settings.gxOn,
            (v) => { settings.gxOn = v; save(); }, [
              row("Preset", null, selectField(settings.gxPreset || "custom", gxPresets, (v) => {
                settings.gxPreset = v;
                if (gxHex[v]) settings.gxColor = gxHex[v];
                save();
              })),
              row("Color", null, colorField(settings.gxColor || "#3cff5a", (v) => { settings.gxColor = v; settings.gxPreset = "custom"; save(); })),
              row("Opacity", null, rangeField(settings.gxAlpha ?? 1, 0.1, 1, 0.05, (v) => { settings.gxAlpha = v; save(); })),
              row("Length", null, rangeField(settings.gxLen ?? 6, 1, 30, 1, (v) => { settings.gxLen = v; save(); })),
              row("Thickness", null, rangeField(settings.gxThick ?? 2, 1, 10, 1, (v) => { settings.gxThick = v; save(); })),
              row("Gap", null, rangeField(settings.gxGap ?? 3, 0, 30, 1, (v) => { settings.gxGap = v; save(); })),
              row("Dot", null, toggleSwitch(settings.gxDot, (v) => { settings.gxDot = v; save(); })),
              row("Outline", null, toggleSwitch(settings.gxOutline !== false, (v) => { settings.gxOutline = v; save(); })),
              row("Outline width", null, rangeField(settings.gxOutw ?? 1, 0, 5, 1, (v) => { settings.gxOutw = v; save(); })),
              row("Alt style", "Second crosshair shape", toggleSwitch(settings.gxStyle, (v) => { settings.gxStyle = v ? 1 : 0; save(); })),
              row("Sniper width", "Scope line thickness", rangeField(settings.gxSniper ?? 2, 1, 12, 1, (v) => { settings.gxSniper = v; save(); }))
            ]),
          moduleCard("Team Colors", "Recolor CT / T theming.", settings.gcTeam,
            (v) => { settings.gcTeam = v; save(); }, [
              row("CT blue", null, colorField(settings.gcCT || "#7db8f0", (v) => { settings.gcCT = v; save(); })),
              row("T gold", null, colorField(settings.gcT || "#eabe54", (v) => { settings.gcT = v; save(); }))
            ]),
          moduleCard("Death Screen", "Restyle the death vignette.", settings.dcOn,
            (v) => { settings.dcOn = v; save(); }, [
              row("Vignette opacity", null, rangeField(settings.dcOp ?? 0.6, 0, 1, 0.05, (v) => { settings.dcOp = v; save(); })),
              row("Vignette color", "Empty = game red", colorField(settings.dcColor || "#e0342c", (v) => { settings.dcColor = v; save(); })),
              row("Killcard accent", "Empty = game red", colorField(settings.dcAccent || "#e05a4e", (v) => { settings.dcAccent = v; save(); }))
            ]),
          moduleCard("Hitmarker", "Restyle the game's hitmarker.", settings.ghOn,
            (v) => { settings.ghOn = v; save(); }, [
              row("Color", null, colorField(settings.ghColor || "#ffffff", (v) => { settings.ghColor = v; save(); })),
              row("Headshot", null, colorField(settings.ghHs || "#ff4040", (v) => { settings.ghHs = v; save(); })),
              row("Size", null, rangeField(settings.ghSize ?? 1, 0.5, 2, 0.1, (v) => { settings.ghSize = v; save(); }))
            ]),
          moduleCard("Damage Arcs", "Recolor directional damage.", settings.daOn,
            (v) => { settings.daOn = v; save(); }, [
              row("Color", null, colorField(settings.daColor || "#e0342c", (v) => { settings.daColor = v; save(); }))
            ]),
          moduleCard("Money", "Recolor the money readout.", settings.mnOn,
            (v) => { settings.mnOn = v; save(); }, [
              row("Color", "Empty = team wash", colorField(settings.mnColor || "#ffffff", (v) => { settings.mnColor = v; save(); }))
            ])
        ];
      }
      if (id === "beta") return [interfaceCard()];
      const presets = [["custom", "Custom (manual)"], ["default", "Game default"], ["sakura", "Sakura"], ["midnight", "Midnight"], ["sunset", "Sunset"], ["neon", "Neon"], ["vivid", "Vivid"], ["cinematic", "Cinematic"], ["arctic", "Arctic"], ["void", "Void"], ["synthwave", "Synthwave"], ["noir", "Noir"], ["dream", "Dream"], ["desert", "Desert"], ["volcano", "Volcano"], ["swamp", "Swamp"], ["space", "Space"], ["candy", "Candy"], ["matrix", "Matrix"], ["bloodmoon", "Blood Moon"], ["toxic", "Toxic"], ["pastel", "Pastel"], ["mono", "Mono"], ["golden", "Golden"], ["storm", "Storm"], ["abyss", "Abyss"], ["frost", "Frost"], ["forest", "Forest"], ["ember", "Ember"], ["ghost", "Ghost"], ["royal", "Royal"], ["copper", "Copper"], ["mint", "Mint"]];
      return [
        moduleCard("Ambience", "One-click world themes. Nudge any linked setting and it switches to Custom.", settings.ambience,
          (v) => { settings.ambience = v; save(); }, [
            row("Theme", null, selectField(settings.visualPreset, presets, (v) => {
              settings.visualPreset = v;
              if (v !== "custom") applyPreset(v);
              save();
            }))
          ]),
        moduleCard("Motion Blur", "Clean frame-blend blur that smooths fast camera movement.", settings.motionBlur,
          (v) => { settings.motionBlur = v; save(); }, [
            row("Strength", null, rangeField(settings.mbStrength, 0.1, 0.9, 0.05, (v) => { settings.mbStrength = v; save(); }))
          ]),
        moduleCard("Day Cycle", "Sun, sky and light follow the time of day. Needs Ambience.", settings.wdCycle,
          (v) => {
            settings.wdCycle = v;
            if (v) { settings.ambience = true; settings.customLighting = true; settings.customSky = true; settings.sunTint = true; }
            save();
            rebuildPanel();
          }, [
            row("Time", "Game hour 0-24", rangeField(settings.wdTime ?? 12, 0, 24, 0.25, (v) => { settings.wdTime = v; save(); })),
            row("Auto cycle", null, toggleSwitch(settings.wdAuto !== false, (v) => { settings.wdAuto = v; save(); })),
            row("Speed", "Game hours / second", rangeField(settings.wdSpeed ?? 0.25, 0.05, 2, 0.05, (v) => { settings.wdSpeed = v; save(); })),
            row("Night darkness", null, rangeField(settings.wdNight ?? 0.7, 0, 1, 0.05, (v) => { settings.wdNight = v; save(); })),
            row("Lightning", "Storm flashes", toggleSwitch(settings.wdBolt, (v) => { settings.wdBolt = v; save(); })),
            row("Storm rate", "Seconds between strikes", rangeField(settings.wdBoltRate ?? 8, 2, 20, 1, (v) => { settings.wdBoltRate = v; save(); })),
            row("Golden hour", "Jump to sunset", actionBtn("17:30", () => { settings.wdTime = 17.5; save(); })),
            row("Manual sun", "Position the sun yourself", toggleSwitch(settings.wdManual, (v) => { settings.wdManual = v; save(); })),
            row("Elevation", "Degrees above horizon", rangeField(settings.wdElev ?? 45, -20, 90, 1, (v) => { settings.wdElev = v; save(); })),
            row("Azimuth", "Degrees around", rangeField(settings.wdAzim ?? 180, 0, 360, 1, (v) => { settings.wdAzim = v; save(); }))
          ]),
        moduleCard("Light", "Direct light controls.", settings.customLighting,
          (v) => { settings.customLighting = v; save(); rebuildPanel(); }, [
            row("Exposure", null, rangeField(settings.lightExposure, 0.3, 2, 0.05, (v) => { settings.lightExposure = v; save(); })),
            row("Hemi boost", "Ambient / sky light", rangeField(settings.hemiMult, 0, 2.5, 0.05, (v) => { settings.hemiMult = v; save(); })),
            row("Sun boost", null, rangeField(settings.sunMult, 0, 2.5, 0.05, (v) => { settings.sunMult = v; save(); })),
            row("Sun tint", null, toggleSwitch(settings.sunTint, (v) => { settings.sunTint = v; save(); })),
            row("Sun color", null, colorField(settings.sunColor || "#ffb3c6", (v) => { settings.sunColor = v; save(); })),
            row("Hemi colors", "Tint sky + ground light", toggleSwitch(settings.hemiOn, (v) => { settings.hemiOn = v; save(); })),
            row("Hemi sky", null, colorField(settings.hemiSky || "#bcd6ff", (v) => { settings.hemiSky = v; save(); })),
            row("Hemi ground", null, colorField(settings.hemiGround || "#4a4238", (v) => { settings.hemiGround = v; save(); }))
          ]),
        moduleCard("Fog Lab", "Pick a fog config. Needs Ambience.", settings.fogCustom,
          (v) => {
            settings.fogCustom = v;
            settings.fogMode = v ? "custom" : "default";
            if (v) settings.ambience = true;
            save();
            rebuildPanel();
          }, [
            row("Config", null, selectField(settings.fogPreset || "thick", [["light", "Light haze"], ["thick", "Thick fog"], ["night", "Night fog"], ["sakura", "Sakura mist"], ["desert", "Desert dust"], ["deep", "Deep dark"]], (v) => { settings.fogPreset = v; save(); }))
          ]),
        moduleCard("Radar", "Restyle the game's radar.", settings.rdOn,
          (v) => { settings.rdOn = v; save(); }, [
            row("Size", null, rangeField(settings.rdSize ?? 1, 0.5, 2, 0.05, (v) => { settings.rdSize = v; save(); })),
            row("Ring color", null, colorField(settings.rdRing || "#4a4f55", (v) => { settings.rdRing = v; save(); })),
            row("Opacity", null, rangeField(settings.rdOp ?? 1, 0.1, 1, 0.05, (v) => { settings.rdOp = v; save(); })),
            row("Corner", null, selectField(settings.rdPos || "tl", [["tl", "Top left"], ["tr", "Top right"], ["bl", "Bottom left"], ["br", "Bottom right"]], (v) => { settings.rdPos = v; save(); })),
            row("Square", "Rounded square dial", toggleSwitch(settings.rdSquare, (v) => { settings.rdSquare = v; save(); })),
            row("Hide", null, toggleSwitch(settings.rdHide, (v) => { settings.rdHide = v; save(); }))
          ]),
      ];
    }



    function note(text, err) {
      const n = document.createElement("div");
      n.className = "sk-note" + (err ? " err" : "");
      n.textContent = text;
      return n;
    }


    // Drag by header
    let offset = null;
    top.addEventListener("pointerdown", (e) => {
      if (e.target.closest("button, input, select")) return;
      const r = panel.getBoundingClientRect();
      offset = [e.clientX - r.left, e.clientY - r.top];
      top.setPointerCapture(e.pointerId);
      panel.classList.add("sk-dragging");
    });
    top.addEventListener("pointermove", (e) => {
      if (!offset) return;
      const x = Math.min(Math.max(0, e.clientX - offset[0]), window.innerWidth - 200);
      const y = Math.min(Math.max(0, e.clientY - offset[1]), window.innerHeight - 100);
      panel.style.left = x + "px";
      panel.style.top = y + "px";
      panel.style.right = "auto";
      panel.style.bottom = "auto";
    });
    const endDrag = () => {
      if (!offset) return;
      offset = null;
      panel.classList.remove("sk-dragging");
      const r = panel.getBoundingClientRect();
      uiState.x = r.left; uiState.y = r.top;
      saveUi();
    };
    top.addEventListener("pointerup", endDrag);
    top.addEventListener("pointercancel", endDrag);
    if (Number.isFinite(uiState.x)) {
      panel.style.left = uiState.x + "px";
      panel.style.top = uiState.y + "px";
      panel.style.right = "auto";
      panel.style.bottom = "auto";
    }

    show(uiState.cat || "hud");
    return panel;
  }

  function saveUi() {
    try { localStorage.setItem("sakura.ui.v1", JSON.stringify(uiState)); } catch (_) {}
  }

  function menuStock(key) {
    const lunar = settings.uiStyle === "lunar";
    if (key === "op") return lunar ? 0.94 : 0.78;
    if (key === "blur") return lunar ? 0 : 22;
    if (key === "rad") return lunar ? 14 : 22;
    return 1;
  }

  function applyMenuVars() {
    if (!panelEl) return;
    try {
      const op = settings.mnOp, blur = settings.mnBlur, rad = settings.mnRad;
      if (op == null) panelEl.style.removeProperty("--sk-op");
      else panelEl.style.setProperty("--sk-op", clamp(chNum(op, 0.8), 0.3, 1));
      if (blur == null) panelEl.style.removeProperty("--sk-blur");
      else panelEl.style.setProperty("--sk-blur", chNum(blur, 22) + "px");
      if (rad == null) panelEl.style.removeProperty("--sk-rad");
      else panelEl.style.setProperty("--sk-rad", chNum(rad, 22) + "px");
      panelEl.style.zoom = chNum(settings.mnScale, 1);
      panelEl.classList.toggle("nomotion", settings.uiMotion === false);
    } catch (_) {}
  }

  function setMenuOpen(v) {
    menuOpen = v;
    hudEdit = v && settings.uiStyle === "lunar" && betaUnlocked;
    overlay.style.pointerEvents = hudEdit ? "auto" : "none";
    if (!hudEdit) { hudDrag = null; overlay.style.cursor = "default"; }
    // Free the mouse without pausing: the game only pauses on Esc, losing
    // pointer lock by itself just flips its input state, so exiting here
    // leaves the match running while the cursor works the menu.
    if (v && settings.menuMouse !== false) {
      try { if (document.pointerLockElement) document.exitPointerLock(); } catch (_) {}
    }
    if (!v && settings.lockOnClose !== false && !document.pointerLockElement) {
      try {
        const gg = getGame();
        const cv = (gg && gg.renderer && gg.renderer.domElement) || document.querySelector("#game canvas");
        if (cv && typeof cv.requestPointerLock === "function") {
          const p = cv.requestPointerLock();
          if (p && typeof p.catch === "function") p.catch(() => {});
        }
      } catch (_) {}
    }
    if (!panelEl) {
      const style = document.createElement("style");
      style.textContent = CSS;
      shadow.appendChild(style);
      panelEl = buildPanel();
      shadow.appendChild(panelEl);
      applyMenuVars();
      requestAnimationFrame(() => panelEl.classList.add("shown"));
    }
    panelEl.classList.toggle("shown", v);
  }

  function toggleMenu() { setMenuOpen(!menuOpen); }


// ── src/next/boot.js — boot seam ──
/* Sakura client — boot (rewrite).
 *
 * Deliberately NOT wrapped in a function: the panel is lifted verbatim from the
 * v2 client and expects bare names in its own scope, exactly as the v2 client
 * provided them. This file is that seam — it aliases the engine into the bundle
 * scope and ports the handful of behaviours that lived outside the panel:
 * the Insert key, the floating logo button, and the live readouts.
 *
 * Feature modules added in later passes declare their own bare names here
 * (wxStatusEl and friends) and this file stops stubbing them.
 */
var SK = window.__sk;

// ── the panel's engine surface ─────────────────────────────────────────────
var settings = SK.settings;     // the one settings object (356 keys)
var save = SK.save;             // deferred persistence
var getGame = SK.game.get;      // game adapter

// Live readouts for the FX card. The cover probe is already the real one — the
// game adapter owns it, ported from the v2 client. The weather backend list
// fills in with the fx pass; until then it reports idle.
function wxStatusEl() {
  var el = document.createElement("span");
  el.className = "sk-val";
  el.textContent = "idle";
  SK.task({
    name: "wx-status", hz: 2, prio: 1,
    when: function () { return el.isConnected; },
    fn: function () {
      el.textContent = (SK.wx && SK.wx.status) ? SK.wx.status() : (getGame() ? "idle" : "no game");
    }
  });
  return el;
}
function wxCoverEl() {
  var el = document.createElement("span");
  el.className = "sk-val";
  el.textContent = "—";
  SK.task({
    name: "wx-cover", hz: 4, prio: 1,
    when: function () { return el.isConnected; },
    fn: function () {
      var c = SK.game.cover(getGame(), SK.now());
      el.textContent = (c.on ? "yes · " : "no · ") + c.why;
      el.classList.toggle("on", !!c.on);
    }
  });
  return el;
}

// Session counters (the panel's stats card reads this object; the HUD group
// features/hud.js maintains it, exactly as the v2 loop did).
var hudSes = { t0: 0, kills: 0, deaths: 0, wasAlive: true, lastKills: null };
function stReset() {
  hudSes.t0 = 0;
  hudSes.kills = 0;
  hudSes.deaths = 0;
  hudSes.wasAlive = true;
  hudSes.lastKills = null;
  if (SK.hud && SK.hud.resetShots) SK.hud.resetShots();
}

// Presets: the row still records the choice in settings; the styling lands with
// the crosshair / visuals passes. Deliberately visible instead of silent.
function applyPreset(v) {
  if (SK.vis && SK.vis.applyPreset) SK.vis.applyPreset(v, settings);
  else SK.log("visual preset not ported yet:", v);
}
function chApplyPreset(v) {
  if (SK.ch && SK.ch.applyPreset) SK.ch.applyPreset(v, settings);
  else SK.log("crosshair preset not ported yet:", v);
}

// ── mount: one shadow root for the whole client ────────────────────────────
host = SK.host();
shadow = SK.shadow();
overlay = SK.overlayCanvas();

// The menu key is owned by the hotkey registry (features/keys.js) so it is
// rebindable; the core listener is capture-phase, so the game cannot swallow it
// first. Nothing here hard-wires Insert any more.

// Floating logo button — the one control that always works.
var btnEl = document.createElement("div");
btnEl.style.cssText = "position:fixed;top:12px;right:12px;z-index:2147483646;cursor:pointer;width:26px;height:26px;opacity:0.5;transition:opacity 0.2s;pointer-events:auto;filter:drop-shadow(0 0 4px rgba(255,107,157,0.7))";
btnEl.innerHTML = sakuraLogoSvg("");
btnEl.title = "Sakura Client";
btnEl.onmouseenter = function () { btnEl.style.opacity = "1"; };
btnEl.onmouseleave = function () { btnEl.style.opacity = "0.5"; };
btnEl.onclick = function (e) { e.stopPropagation(); toggleMenu(); };
(document.body || document.documentElement).appendChild(btnEl);

// ── public surface (tests + later passes) ─────────────────────────────────
// Note: rebuildPanel / cardsFor / show live inside buildPanel's body in the
// v2 client, so they are not reachable from here — the cards call rebuildPanel
// themselves. rebuild() reproduces its two lines for the new modules, which do
// not sit inside that closure. This surface is only what genuinely exists at
// bundle scope.
SK.panel = {
  open: function () { setMenuOpen(true); },
  close: function () { setMenuOpen(false); },
  toggle: function () { toggleMenu(); },
  rebuild: function () { if (panelEl) { panelEl.remove(); panelEl = null; } setMenuOpen(true); },
  el: function () { return panelEl; },
  isOpen: function () { return !!menuOpen; }
};
SK.fps = function () { return SK.stats().fps; };
SK.frameMs = function () { return SK.stats().frameMs; };
SK.taskCosts = function () { return SK.stats().cost; };

if (settings.devLog !== undefined) SK.quiet(!settings.devLog);
SK.watch(["devLog"], function () { SK.quiet(!settings.devLog); });

SK.start();
SK.log("boot complete ·", SK.tasks().length, "tasks ·", SK.version);


})();
