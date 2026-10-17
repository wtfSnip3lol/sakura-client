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
  var host = null, shadow = null, cssEl = null;
  function mount() {
    if (host && host.isConnected) return shadow;
    host = document.createElement("div");
    host.id = "sakura-ui";
    host.style.cssText = "position:fixed;inset:0;z-index:2147483647;pointer-events:none;";
    shadow = host.attachShadow({ mode: "open" });
    cssEl = document.createElement("style");
    cssEl.textContent = SK.css || "";
    shadow.appendChild(cssEl);
    (document.body || document.documentElement).appendChild(host);
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
