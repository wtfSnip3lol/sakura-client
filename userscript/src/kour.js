/* Sakura Kour — KOURSTRIKE payload.
 * Obfuscated by build.mjs, then shipped two ways:
 *   1. inlined into dist/sakura.loader.user.js (the universal loader), and
 *   2. as dist/sakura.kour.user.js (standalone userscript, for kour only).
 * Both inline the UWMK bundle and run at document-start, because UWMK has to
 * patch fetch / WebAssembly.instantiate before Unity's boot scripts run.
 * Requires window.UnityWebModkit, defined just above this payload in the build.
 * No-ops on any other host, and no-ops if a previous copy is already running
 * (i.e. the loader and the standalone script are both installed).
 *
 * Class names and offsets verified against Il2CppDumper dump.cs (KourStrike,
 * dumped 2026-10-10). The game prefixes its components with "O" and keeps the
 * character/weapon layer in the LegionPlatforms.Overtide namespace:
 *   OHealth  (global)   maxHealth 0x4C(i32)  currentHealth 0x50(i32)
 *   OShooter (global)   currentLocalWeapon 0x38 (-> OvertideWeapon), health 0x58
 *   LegionPlatforms.Overtide.Movement
 *     acceleration 0x1C, accelerationInAir 0x20, speedWalking 0x28,
 *     speedAiming 0x2C, speedCrouching 0x30, speedRunning 0x34,
 *     gravity 0x48, jumpGravity 0x4C, jumpForce 0x50, lastJumpTime 0x9C
 *   LegionPlatforms.Overtide.OvertideWeapon
 *     defaultDamage 0x4C(i32), cachedDamage 0x54(i32), cachedAmmo 0x5C(i32),
 *     cachedFireRate 0x60(f32), cachedAccuracy 0x68(f32), spread 0x88(f32),
 *     fireRate 0x8C(f32)
 */

(() => {
  "use strict";
  if (!/(^|\.)(kourstrike\.io|overtide\.io)$/.test(location.hostname || "")) return;
  if (window.__SAKURA_KOUR__) return;
  window.__SAKURA_KOUR__ = true;

  var ACCENT = "#ff6b9d";
  var ACCENT_HI = "#ffb3c6";

  // ── Settings ──
  var DEFAULTS = {
    // combat
    god: false, noRecoil: false, noSpread: false,
    rapidExp: false, damageExp: false, damageValue: 150, infAmmoExp: false,
    // movement
    speedPct: 100, jumpPct: 100, gravityPct: 100, bhop: false,
    // visuals
    keystrokes: true, ksPos: "bl", ksScale: 1, ksCps: true,
    fps: true, crosshair: true, chSize: 1, chColor: "#ff6b9d",
    // misc
    adblock: true,
    // protection
    actkKill: true,
    // boot: overlay only, no UWMK/WASM hooks at all (applies on reload)
    safeMode: false
  };
  var settings = { ...DEFAULTS };
  try {
    Object.assign(settings, JSON.parse(localStorage.getItem("sakura.kour.v1") || "{}"));
  } catch (_) {}
  function save() {
    try { localStorage.setItem("sakura.kour.v1", JSON.stringify(settings)); } catch (_) {}
  }

  var status = {
    uwmk: !!window.UnityWebModkit,
    hooksOk: 0, hooksTotal: 0,
    gameLoaded: false,
    movements: 0, shooters: 0,
    safeMode: !!settings.safeMode,
    lastError: ""
  };

  // Early error trap (document-start: also catches game boot exceptions).
  try {
    window.addEventListener("error", (e) => {
      try {
        var msg = (e && (e.message || (e.error && e.error.message))) || "unknown";
        if (e && e.filename) msg += " @ " + String(e.filename).split("/").pop() + ":" + (e.lineno || "?");
        status.lastError = String(msg).slice(0, 160);
      } catch (_) {}
    });
  } catch (_) {}

  // ── UWMK hooks (registered synchronously at document-start, before WASM loads) ──
  var VW = null, plugin = null;
  var hookRefs = {};   // name -> hook (for .enabled toggling)
  var movs = [];       // captured Movement this-ptrs
  var shooters = [];   // captured OShooter this-ptrs
  var origCache = new Map(); // ptr -> Map(offset -> original number)

  function addPtr(list, v) {
    if (!v || list.includes(v) || list.length > 64) return;
    list.push(v);
  }
  // Called from a postfix hook: records `this`, and for the per-frame capture
  // hook switches itself off so we stop paying a JS call every single frame.
  function capture(list, self, st, key) {
    var p = 0;
    try { p = self && self.val ? self.val() : 0; } catch (_) {}
    if (!p) return;
    addPtr(list, p);
    st[key] = list.length;
    if (key === "movements" && list.length) {
      var h = hookRefs.capMove;
      if (h) { try { h.enabled = false; } catch (_) {} }
    }
  }
  function orig(ptr, off, type) {
    var m = origCache.get(ptr);
    if (!m) { m = new Map(); origCache.set(ptr, m); }
    if (!m.has(off)) {
      try {
        var r = new VW(ptr).readField(off, type);
        m.set(off, r !== undefined ? r.val() : null);
      } catch (_) { m.set(off, null); }
    }
    return m.get(off);
  }
  function writeNum(ptr, off, type, val) {
    try { new VW(ptr).writeField(off, type, val); } catch (_) {}
  }
  function readPtr(ptr, off) {
    try { var r = new VW(ptr).readField(off, "u32"); return r ? r.val() : 0; } catch (_) { return 0; }
  }
  // Writes base*mult, where base is the value seen the first time this
  // pointer+offset was touched. Nothing is written at all when base is null.
  function scale(ptr, off, type, mult) {
    var o = orig(ptr, off, type);
    if (o != null) writeNum(ptr, off, type, o * mult);
  }

  function regPrefix(name, type, method, params, ret, cb, enabled) {
    try {
      var h = plugin.hookPrefix(
        { typeName: type, methodName: method, params: params, returnType: ret },
        cb
      );
      h.enabled = enabled !== false;
      hookRefs[name] = h;
      status.hooksTotal++;
      return h;
    } catch (e) {
      console.warn("[sakura-kour] hook reg failed:", name, e && e.message);
      return null;
    }
  }
  function regPostfix(name, type, method, params, ret, cb, enabled) {
    try {
      var h = plugin.hookPostfix(
        { typeName: type, methodName: method, params: params, returnType: ret },
        cb
      );
      h.enabled = enabled !== false;
      hookRefs[name] = h;
      status.hooksTotal++;
      return h;
    } catch (e) {
      console.warn("[sakura-kour] hook reg failed:", name, e && e.message);
      return null;
    }
  }

  // Block-by-default helper: callback returns false => original never runs.
  var BLOCK = () => false;

  try {
    if (window.UnityWebModkit && !settings.safeMode) {
      VW = window.UnityWebModkit.ValueWrapper;
      plugin = window.UnityWebModkit.Runtime.createPlugin({
        name: "SakuraKour",
        version: "1.1.0",
        referencedAssemblies: ["Assembly-CSharp.dll"]
      });

      // — Combat —
      // OHealth.InitiateTakeHealth(int) is the single funnel every incoming
      // damage goes through (the PunRPC RPCTakeHealth feeds into it), so
      // blocking it is enough for god mode.
      regPrefix("god", "OHealth", "InitiateTakeHealth", ["i32", "i32"], undefined, BLOCK, !!settings.god);
      // RecoilMotion.Tick() advances the recoil springs. Skipping it removes
      // recoil without disturbing the weapon's damage/fire-rate fields.
      regPrefix("noRecoil", "LegionPlatforms.Overtide.RecoilMotion", "Tick", ["i32"], undefined, BLOCK, !!settings.noRecoil);

      // — Capture the local objects —
      // OShooter.SetGameRunning(bool) fires once when a match actually starts.
      regPostfix("capShooter", "OShooter", "SetGameRunning", ["i32", "i32"], undefined, (_res, self) => {
        capture(shooters, self, status, "shooters");
      }, true);
      // Movement.IsGrounded() is polled by the movement loop, so it reliably
      // hands us the local Movement instance. It's per-frame, so the hook
      // switches itself off as soon as it has something to hand over.
      regPostfix("capMove", "LegionPlatforms.Overtide.Movement", "IsGrounded", ["i32"], "i32", (_res, self) => {
        capture(movs, self, status, "movements");
      }, true);

      // Everything else (spread, damage, ammo, fire rate, speed, gravity, jump)
      // is a plain field write in the tick below — no hook, no trampoline.
      //
      // No ACTk detector neutering: Update() lives on the generic
      // ACTkDetectorBase<T> and never resolves, and UWMK has no reflection API
      // to call StopDetection. Safe Mode is the escape hatch instead.
    }
  } catch (e) {
    console.warn("[sakura-kour] UWMK init failed:", e && e.message);
  }

  function setHook(name, on) {
    var h = hookRefs[name];
    if (h) { try { h.enabled = !!on; } catch (_) {} }
  }

  // Field writer (200ms - fast enough to beat the game's own re-derivation).
  // Scaled fields are written as base*mult, where base is captured the first
  // time that pointer+offset is seen, so nothing at all is touched while a
  // slider sits at its default.
  setInterval(() => {
    if (!VW || !window.unityInstance) return;
    var sp = (Number(settings.speedPct) || 100) / 100;
    var jp = (Number(settings.jumpPct) || 100) / 100;
    var gp = (Number(settings.gravityPct) || 100) / 100;
    var dmg = Math.max(1, Number(settings.damageValue) || 150);

    var wantMove = sp !== 1 || jp !== 1 || gp !== 1 || settings.bhop;
    var wantGun = settings.noSpread || settings.damageExp ||
                 settings.infAmmoExp || settings.rapidExp;
    if (!wantMove && !wantGun) return;

    // -- Movement (LegionPlatforms.Overtide.Movement) --
    try {
      for (var i = 0; i < movs.length; i++) {
        var m = movs[i];
        if (!m) continue;
        if (sp !== 1) {
          scale(m, 0x28, "f32", sp);   // speedWalking
          scale(m, 0x2C, "f32", sp);   // speedAiming
          scale(m, 0x30, "f32", sp);   // speedCrouching
          scale(m, 0x34, "f32", sp);   // speedRunning
          scale(m, 0x1C, "f32", sp);   // acceleration
          scale(m, 0x20, "f32", sp);   // accelerationInAir
        }
        if (jp !== 1) scale(m, 0x50, "f32", jp);   // jumpForce
        if (gp !== 1) {
          scale(m, 0x48, "f32", gp);               // gravity
          scale(m, 0x4C, "f32", gp);               // jumpGravity
        }
        // Bunny-hop: push lastJumpTime into the past so the jump cooldown is
        // always expired. Hold space and you keep bouncing.
        if (settings.bhop) writeNum(m, 0x9C, "f32", -999);
      }
    } catch (_) {}

    // -- Weapon (OShooter.currentLocalWeapon @0x38 -> OvertideWeapon) --
    try {
      for (var s = 0; s < shooters.length; s++) {
        var w = readPtr(shooters[s], 0x38);
        if (!w) continue;
        if (settings.damageExp) {
          writeNum(w, 0x4C, "i32", dmg);   // defaultDamage
          writeNum(w, 0x54, "i32", dmg);   // cachedDamage
        }
        if (settings.noSpread) {
          writeNum(w, 0x88, "f32", 0);     // spread
          writeNum(w, 0x68, "f32", 1);     // cachedAccuracy
        }
        if (settings.infAmmoExp) writeNum(w, 0x5C, "i32", 999);   // cachedAmmo
        if (settings.rapidExp) {
          scale(w, 0x8C, "f32", 0.1);     // fireRate
          writeNum(w, 0x60, "f32", 0.1);  // cachedFireRate
        }
      }
    } catch (_) {}
  }, 200);

  // Game-load + applied-hook status ticker.
  setInterval(() => {
    status.gameLoaded = !!window.unityInstance;
    try {
      var n = 0;
      for (var k in hookRefs) { if (hookRefs[k] && hookRefs[k].applied) n++; }
      status.hooksOk = n;
    } catch (_) {}
  }, 1000);

  // ── Input (keystrokes overlay) ──
  var held = new Set();
  var clicks = { 1: [], 3: [] };
  var attached = false;
  function onKeyDown(e) { held.add(e.code); }
  function onKeyUp(e) { held.delete(e.code); }
  function onMouseDown(e) {
    if (e.__sakura) return;
    held.add("mouse" + (e.button + 1));
    var list = clicks[e.button + 1];
    if (list) { list.push(performance.now()); if (list.length > 40) list.shift(); }
  }
  function onMouseUp(e) { if (!e.__sakura) held.delete("mouse" + (e.button + 1)); }
  function onBlur() { held.clear(); }
  function attachInput() {
    if (attached) return;
    attached = true;
    window.addEventListener("keydown", onKeyDown, true);
    window.addEventListener("keyup", onKeyUp, true);
    window.addEventListener("mousedown", onMouseDown, true);
    window.addEventListener("mouseup", onMouseUp, true);
    window.addEventListener("blur", onBlur);
  }
  function cps(button) {
    var list = clicks[button] || [];
    var t = performance.now();
    while (list.length && t - list[0] > 1000) list.shift();
    return list.length;
  }

  // ── DOM-dependent init (deferred: we run at document-start) ──
  function domReady(fn) {
    if (document.body && (document.readyState === "interactive" || document.readyState === "complete")) fn();
    else document.addEventListener("DOMContentLoaded", fn, { once: true });
  }

  domReady(() => {
    // Adblock: hide Unity ad banner slots.
    if (settings.adblock) {
      setInterval(() => {
        try {
          for (var id of ["kour-io_300x250-parent", "kour-io_728x90-parent", "kour-io_300x600-parent", "fullscreen-banrs"]) {
            var el = document.getElementById(id);
            if (el && id === "fullscreen-banrs") {
              // keep container but hide its ad children (game toggles it)
              var kids = el.children;
              for (var ci = 0; ci < kids.length; ci++) {
                if (kids[ci].id && kids[ci].id.indexOf("kour-io_") === 0) kids[ci].style.display = "none";
              }
            } else if (el) el.style.display = "none";
          }
        } catch (_) {}
      }, 2000);
    }

    // Overlay canvas (keystrokes + fps + crosshair + enemy count).
    var overlay = document.createElement("canvas");
    overlay.style.cssText = "position:fixed;inset:0;width:100vw;height:100vh;z-index:2147483646;pointer-events:none";
    var ctx = overlay.getContext("2d");
    function placeOverlay() {
      try {
        var full = document.fullscreenElement;
        var parent = full && full.tagName !== "CANVAS" ? full : document.body || document.documentElement;
        if (overlay.parentNode !== parent) parent.appendChild(overlay);
      } catch (_) {
        try { document.body.appendChild(overlay); } catch (_) {}
      }
    }
    var size = { w: 0, h: 0, dpr: 0 };
    function sizeOverlay() {
      var dpr = window.devicePixelRatio || 1;
      var w = window.innerWidth, h = window.innerHeight;
      if (w === size.w && h === size.h && dpr === size.dpr) return;
      size.w = w; size.h = h; size.dpr = dpr;
      overlay.width = Math.round(w * dpr);
      overlay.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    var fpsFrames = 0, fpsAt = performance.now(), fpsVal = 0;
    function drawKeystrokes(rect) {
      var s = Number(settings.ksScale) || 1, k = 34 * s, gap = 4 * s;
      var totalW = k * 3 + gap * 2, totalH = k * 3 + gap * 2;
      var pos = settings.ksPos;
      var x0 = pos === "br" ? rect.right - 16 - totalW : rect.left + 16;
      var y0 = pos === "ml" ? rect.top + rect.height / 2 - totalH / 2 : rect.bottom - totalH - (pos === "bl" ? 96 : 150);
      var key = (label, code, x, y, w, h, sub) => {
        var down = held.has(code);
        ctx.save();
        ctx.beginPath();
        if (ctx.roundRect) ctx.roundRect(x, y, w, h, 7 * s);
        else ctx.rect(x, y, w, h);
        ctx.fillStyle = down ? "rgba(255,107,157,0.85)" : "rgba(22,8,16,0.7)";
        ctx.fill();
        ctx.lineWidth = 1;
        ctx.strokeStyle = down ? ACCENT_HI : "rgba(255,107,157,0.35)";
        ctx.stroke();
        if (down) { ctx.shadowColor = ACCENT; ctx.shadowBlur = 14; ctx.fill(); ctx.shadowBlur = 0; }
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
      key("LMB", "mouse1", x0, ry, half, k, settings.ksCps ? cps(1) + " CPS" : "");
      key("RMB", "mouse3", x0 + half + gap, ry, half, k, settings.ksCps ? cps(3) + " CPS" : "");
      key("", "Space", x0, ry + k + gap, totalW, k * 0.45);
    }

    function drawCrosshair(rect) {
      var cx = rect.width / 2, cy = rect.height / 2;
      var s = Number(settings.chSize) || 1;
      var col = /^#[0-9a-f]{6}$/i.test(settings.chColor) ? settings.chColor : "#ff6b9d";
      ctx.save();
      ctx.strokeStyle = col;
      ctx.fillStyle = col;
      ctx.lineWidth = Math.max(1.5, 2 * s);
      ctx.shadowColor = col;
      ctx.shadowBlur = 6;
      var gap = 6 * s, len = 8 * s;
      ctx.beginPath();
      ctx.moveTo(cx - gap - len, cy); ctx.lineTo(cx - gap, cy);
      ctx.moveTo(cx + gap, cy); ctx.lineTo(cx + gap + len, cy);
      ctx.moveTo(cx, cy - gap - len); ctx.lineTo(cx, cy - gap);
      ctx.moveTo(cx, cy + gap); ctx.lineTo(cx, cy + gap + len);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(cx, cy, 1.6 * s, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    function drawMeta(rect) {
      ctx.save();
      ctx.font = "600 12px ui-monospace,monospace";
      ctx.textAlign = "left";
      ctx.textBaseline = "top";
      var y = 44, x = 12;
      var line = (t, c) => {
        ctx.fillStyle = c || "rgba(255,235,240,0.75)";
        ctx.fillText(t, x, y);
        y += 16;
      };
      line("SAKURA KOUR v1.1", "#ff6b9d");
      if (settings.fps) line(fpsVal + " FPS");
      if (!status.gameLoaded) line("waiting for game…", "rgba(255,180,190,0.6)");
      ctx.restore();
    }

    function loop() {
      requestAnimationFrame(loop);
      fpsFrames++;
      var now = performance.now();
      if (now - fpsAt >= 500) {
        fpsVal = Math.round(fpsFrames * 1000 / (now - fpsAt));
        fpsFrames = 0; fpsAt = now;
      }
      sizeOverlay();
      placeOverlay();
      ctx.clearRect(0, 0, size.w, size.h);
      var rect = { left: 0, top: 0, right: size.w, bottom: size.h, width: size.w, height: size.h };
      if (settings.crosshair) drawCrosshair(rect);
      if (settings.keystrokes) drawKeystrokes(rect);
      drawMeta(rect);
    }

    // ── Sakura menu UI ──
    var host = document.createElement("div");
    host.id = "sakura-ui";
    host.style.cssText = "position:fixed;inset:0;z-index:2147483647;pointer-events:none;";
    var shadow = host.attachShadow({ mode: "open" });
    (document.body || document.documentElement).appendChild(host);

    var menuOpen = false;
    var uiState = {};
    try { uiState = JSON.parse(localStorage.getItem("sakura.kour.ui.v1") || "{}"); } catch (_) {}
    function saveUi() {
      try { localStorage.setItem("sakura.kour.ui.v1", JSON.stringify(uiState)); } catch (_) {}
    }

    function toggleSwitch(on, onChange) {
      var sw = document.createElement("button");
      sw.type = "button";
      sw.className = "sk-switch";
      sw.setAttribute("role", "switch");
      sw.setAttribute("aria-checked", String(!!on));
      sw.onclick = (e) => {
        e.stopPropagation();
        var v = sw.getAttribute("aria-checked") !== "true";
        sw.setAttribute("aria-checked", String(v));
        onChange(v);
      };
      return sw;
    }
    function rangeField(value, min, max, step, onChange) {
      var wrap = document.createElement("div");
      wrap.className = "sk-range";
      var input = document.createElement("input");
      input.type = "range"; input.className = "sk-slider";
      input.min = min; input.max = max; input.step = step; input.value = value;
      var val = document.createElement("span");
      val.className = "sk-val";
      val.textContent = String(value);
      var paint = () => {
        val.textContent = String(input.value);
        wrap.style.setProperty("--p", ((input.value - min) / (max - min) * 100) + "%");
      };
      input.oninput = () => { paint(); onChange(Number(input.value)); };
      paint();
      wrap.append(input, val);
      return wrap;
    }
    function colorField(value, onChange) {
      var input = document.createElement("input");
      input.type = "color";
      input.className = "sk-color";
      input.value = /^#[0-9a-f]{6}$/i.test(value) ? value : "#ff6b9d";
      input.oninput = () => onChange(input.value);
      return input;
    }
    function selectField(value, options, onChange) {
      var sel = document.createElement("select");
      sel.className = "sk-field";
      for (var [v, l] of options) {
        var o = document.createElement("option");
        o.value = v; o.textContent = l;
        sel.appendChild(o);
      }
      sel.value = value;
      sel.onchange = () => onChange(sel.value);
      return sel;
    }
    function actionBtn(label, onclick) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "sk-btn";
      b.textContent = label;
      b.onclick = (e) => { e.stopPropagation(); onclick(); };
      return b;
    }
    function row(label, hint, ctl) {
      var r = document.createElement("div");
      r.className = "sk-ctl";
      var lab = document.createElement("span");
      lab.className = "sk-label";
      lab.textContent = label;
      if (hint) {
        var sm = document.createElement("small");
        sm.className = "sk-hint";
        sm.textContent = hint;
        lab.appendChild(sm);
      }
      r.append(lab, ctl);
      return r;
    }
    function note(text, isErr) {
      var d = document.createElement("div");
      d.className = "sk-note" + (isErr ? " err" : "");
      d.textContent = text;
      return d;
    }
    function moduleCard(title, desc, isOn, onToggle, bodyRows) {
      var card = document.createElement("div");
      card.className = "sk-card" + (isOn ? " on" : "");
      var head = document.createElement("div");
      head.className = "sk-card-head";
      var t = document.createElement("div");
      t.className = "sk-card-title";
      var strong = document.createElement("strong");
      strong.textContent = title;
      t.appendChild(strong);
      if (onToggle) {
        var sw = toggleSwitch(isOn, (v) => {
          card.classList.toggle("on", v);
          onToggle(v);
        });
        head.append(t, sw);
      } else {
        head.appendChild(t);
      }
      card.appendChild(head);
      if (bodyRows && bodyRows.length) {
        var body = document.createElement("div");
        body.className = "sk-mbody";
        var d = document.createElement("div");
        d.className = "sk-mdesc";
        d.textContent = desc;
        body.appendChild(d);
        for (var r of bodyRows) body.appendChild(r);
        card.appendChild(body);
      }
      return card;
    }

    var CATEGORIES = [
      { id: "combat", label: "Combat" },
      { id: "move", label: "Move" },
      { id: "visual", label: "Visual" },
      { id: "misc", label: "Misc" },
      { id: "safe", label: "Safety" }
    ];

    function statusCard() {
      var hookTxt = status.safeMode
        ? "SAFE MODE — overlay only, no hooks (reload to exit)"
        : status.uwmk
          ? ("UWMK bound " + status.hooksOk + "/" + status.hooksTotal + " hooks" +
             " | game " + (status.gameLoaded ? "loaded" : "loading") +
             " | shooter " + (status.shooters ? "held" : "none") +
             " | movement " + (status.movements ? "held" : "none"))
          : "UWMK MISSING — overlay only (reinstall the userscript)";
      if (status.lastError) hookTxt += " | ERR: " + status.lastError;
      return moduleCard("Status", hookTxt, status.uwmk, null, [
        row("240 FPS unlock", "calls UnityEngine.Application.set_targetFrameRate", actionBtn("Apply", () => {
          try {
            if (plugin) plugin.call("UnityEngine.Application", "set_targetFrameRate", [240]);
          } catch (_) {}
        }))
      ]);
    }

    function cardsFor(id) {
      if (id === "combat") {
        return [
          statusCard(),
          moduleCard("God Mode", "Blocks OHealth.InitiateTakeHealth, the funnel every damage goes through.", settings.god,
            (v) => { settings.god = v; save(); setHook("god", v); }, []),
          moduleCard("No Recoil", "Skips RecoilMotion.Tick so the recoil springs never advance.", settings.noRecoil,
            (v) => { settings.noRecoil = v; save(); setHook("noRecoil", v); }, []),
          moduleCard("No Spread", "Zeroes spread and maxes accuracy on your weapon every 200ms.", settings.noSpread,
            (v) => { settings.noSpread = v; save(); }, []),
          moduleCard("Rapid Fire [EXP]", "Scales OvertideWeapon.fireRate to 10%. Server may still gate shots.", settings.rapidExp,
            (v) => { settings.rapidExp = v; save(); }, []),
          moduleCard("Damage [EXP]", "Overwrites OvertideWeapon damage. Bannable if the server validates.", settings.damageExp,
            (v) => { settings.damageExp = v; save(); }, [
              row("Damage value", null, rangeField(settings.damageValue, 10, 500, 5, (v2) => { settings.damageValue = v2; save(); }))
            ]),
          moduleCard("Infinite Ammo [EXP]", "Refills the weapon's cached ammo to 999 every 200ms.", settings.infAmmoExp,
            (v) => { settings.infAmmoExp = v; save(); },
            [note("If reloads still drain, the decrement happens elsewhere.")])
        ];
      }
      if (id === "move") {
        return [
          moduleCard("Speed", "Scales all four Movement speed limits plus acceleration.", settings.speedPct !== 100,
            null, [
              row("Speed %", "100 = default", rangeField(settings.speedPct, 50, 300, 5, (v) => { settings.speedPct = v; save(); }))
            ]),
          moduleCard("Jump / Gravity", "Scales Movement.jumpForce and both gravity values.", settings.jumpPct !== 100 || settings.gravityPct !== 100,
            null, [
              row("Jump %", null, rangeField(settings.jumpPct, 50, 300, 5, (v) => { settings.jumpPct = v; save(); })),
              row("Gravity %", "lower = floaty", rangeField(settings.gravityPct, 10, 200, 5, (v) => { settings.gravityPct = v; save(); }))
            ]),
          moduleCard("Bunny-hop", "Zeroes Movement.lastJumpTime so the jump cooldown never applies.", settings.bhop,
            (v) => { settings.bhop = v; save(); }, [])
        ];
      }
      if (id === "visual") {
        return [
          moduleCard("Keystrokes", "WASD + LMB/RMB + Space overlay.", settings.keystrokes,
            (v) => { settings.keystrokes = v; save(); }, [
              row("Position", null, selectField(settings.ksPos, [["bl", "Bottom left"], ["br", "Bottom right"], ["ml", "Left middle"]], (v) => { settings.ksPos = v; save(); })),
              row("Size", null, rangeField(settings.ksScale, 0.6, 1.6, 0.05, (v) => { settings.ksScale = v; save(); })),
              row("CPS readout", null, toggleSwitch(settings.ksCps, (v) => { settings.ksCps = v; save(); }))
            ]),
          moduleCard("Crosshair", "Custom center crosshair.", settings.crosshair,
            (v) => { settings.crosshair = v; save(); }, [
              row("Size", null, rangeField(settings.chSize, 0.5, 2.5, 0.1, (v) => { settings.chSize = v; save(); })),
              row("Color", null, colorField(settings.chColor, (v) => { settings.chColor = v; save(); }))
            ]),
          moduleCard("Counters", "FPS overlay.", settings.fps,
            null, [
              row("FPS counter", null, toggleSwitch(settings.fps, (v) => { settings.fps = v; save(); })),
              note("No enemy counter: this build has no GetVisiblePlayers to piggyback on.")
            ])
        ];
      }
      if (id === "misc") {
        return [
          moduleCard("Adblock", "Hides kour-io_* banner slots.", settings.adblock,
            (v) => { settings.adblock = v; save(); },
            [note("Takes effect on reload when toggled.")])
        ];
      }
      // safe
      return [
        moduleCard("Safe Mode (overlay only)", "Skips UWMK entirely — no WASM hooks. Use this if matches won't start.", settings.safeMode,
          (v) => {
            settings.safeMode = v; save();
            location.reload();
          },
          [note("Applies on reload. If matches load in safe mode, the freeze is hook-related — tell me the hooks-applied count.")]),
        moduleCard("ACTk Killer", "Disables CodeStage detectors at startup via StopDetection(). Keep ON.", settings.actkKill,
          (v) => {
            settings.actkKill = v; save();
          },
          [note("God/damage/rapid greatly raise ban risk even with this on.", true)]),
        moduleCard("Danger", "These leave server-visible traces.", true, null, [
          row("Wipe my settings", null, actionBtn("Reset", () => {
            settings = { ...DEFAULTS };
            save();
            location.reload();
          }))
        ])
      ];
    }

    var panelEl = null;
    function setMenuOpen(v) {
      menuOpen = v;
      if (!panelEl) {
        var style = document.createElement("style");
        style.textContent = CSS;
        shadow.appendChild(style);
        panelEl = buildPanel();
        shadow.appendChild(panelEl);
        requestAnimationFrame(() => panelEl.classList.add("shown"));
      }
      panelEl.classList.toggle("shown", v);
    }
    function toggleMenu() { setMenuOpen(!menuOpen); }

    function buildPanel() {
      var panel = document.createElement("div");
      panel.className = "mn-panel";
      var side = document.createElement("nav");
      side.className = "mn-side";
      var logoWrap = document.createElement("div");
      logoWrap.className = "mn-logo";
      logoWrap.innerHTML = '<svg viewBox="0 0 24 24" class="mn-logo-svg"><path d="M12 21c-1.5-2.5-4-4.5-4-7.5 0-2.5 1.8-4.5 4-4.5s4 2 4 4.5c0 3-2.5 5-4 7.5z" fill="none" stroke="#ff6b9d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="10" r="1.5" fill="#ff6b9d"/></svg>';
      side.appendChild(logoWrap);
      var main = document.createElement("div");
      main.className = "mn-main";
      var top = document.createElement("header");
      top.className = "mn-top";
      var titles = document.createElement("div");
      titles.className = "mn-titles";
      var heading = document.createElement("h2");
      heading.className = "mn-h";
      heading.textContent = "Sakura Kour";
      var sub = document.createElement("small");
      sub.className = "mn-sub";
      sub.textContent = "kourstrike.io menu";
      titles.append(heading, sub);
      var close = document.createElement("button");
      close.type = "button";
      close.className = "mn-close";
      close.title = "Close";
      close.innerHTML = '<svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6 6 18"/></svg>';
      close.onclick = () => setMenuOpen(false);
      top.append(titles, close);
      var cols = document.createElement("div");
      cols.className = "mn-cols";
      main.append(top, cols);
      panel.append(side, main);

      var buttons = new Map();
      for (var cat of CATEGORIES) {
        var b = document.createElement("button");
        b.type = "button";
        b.className = "mn-tab";
        b.title = cat.label;
        b.innerHTML = "<small>" + cat.label + "</small>";
        b.onclick = ((cid) => () => show(cid))(cat.id);
        buttons.set(cat.id, b);
        side.appendChild(b);
      }
      function show(cid) {
        uiState.cat = cid;
        saveUi();
        var cat = CATEGORIES.find((c) => c.id === cid) || CATEGORIES[0];
        heading.textContent = "Sakura Kour — " + cat.label;
        for (var [kk, bb] of buttons) bb.classList.toggle("active", kk === cid);
        cols.replaceChildren(...cardsFor(cid));
      }
      show(uiState.cat || "combat");

      // Refresh status card live while open.
      setInterval(() => {
        if (!menuOpen) return;
        var cards = cols.children;
        for (var ci = 0; ci < cards.length; ci++) {
          var d = cards[ci].querySelector(".sk-mdesc");
          if (d && (d.textContent.indexOf("UWMK") === 0 || d.textContent.indexOf("SAFE") === 0)) {
            d.textContent = status.safeMode
              ? "SAFE MODE - overlay only, no hooks (reload to exit)"
              : status.uwmk
                ? ("UWMK bound " + status.hooksOk + "/" + status.hooksTotal + " hooks" +
                   " | game " + (status.gameLoaded ? "loaded" : "loading") +
                   " | shooter " + (status.shooters ? "held" : "none") +
                   " | movement " + (status.movements ? "held" : "none") +
                   (status.lastError ? " | ERR: " + status.lastError : ""))
                : "UWMK MISSING - overlay only (reinstall the userscript)";
          }
        }
      }, 1000);
      return panel;
    }

    var CSS = `
    :host { all: initial; }
    * { box-sizing: border-box; margin: 0; font-family: "Inter", "Segoe UI", system-ui, sans-serif; }
    .mn-panel { position: absolute; right: 24px; bottom: 24px; width: min(620px, calc(100vw - 48px)); max-height: min(480px, calc(100vh - 48px));
      display: flex; gap: 10px; padding: 10px; border-radius: 22px; pointer-events: auto;
      background: rgba(24,17,21,.82); backdrop-filter: blur(22px) saturate(150%); -webkit-backdrop-filter: blur(22px) saturate(150%);
      box-shadow: 0 0 0 1px rgba(255,255,255,.06), inset 0 1px 0 rgba(255,255,255,.05), 0 30px 80px rgba(0,0,0,.55);
      opacity: 0; transform: translateY(18px); pointer-events: none; transition: opacity .35s ease, transform .45s cubic-bezier(.22,1,.36,1);
      color: #f6eef2; font-size: 13px; }
    .mn-panel.shown { opacity: 1; transform: none; pointer-events: auto; }
    .mn-side { display: flex; flex-direction: column; align-items: center; gap: 4px; width: 62px; flex: none; padding: 12px 0; border-radius: 16px;
      background: rgba(255,255,255,.025); box-shadow: inset 0 0 0 1px rgba(255,255,255,.05); }
    .mn-logo { display: grid; place-items: center; width: 32px; height: 32px; }
    .mn-logo-svg { width: 25px; height: 25px; overflow: visible; filter: drop-shadow(0 0 4px rgba(255,107,157,.8)); }
    .mn-tab { display: flex; align-items: center; justify-content: center; width: 52px; height: 34px; border: 0; border-radius: 10px;
      background: transparent; color: rgba(246,238,242,.4); cursor: pointer; font-size: 10px; font-weight: 700; }
    .mn-tab:hover { color: rgba(246,238,242,.8); }
    .mn-tab.active { color: #ff6b9d; background: rgba(255,107,157,.1); }
    .mn-main { flex: 1; min-width: 0; display: flex; flex-direction: column; }
    .mn-top { display: flex; align-items: center; gap: 12px; padding: 6px 6px 12px; user-select: none; }
    .mn-titles { flex: 1; min-width: 0; }
    .mn-h { font-size: 17px; font-weight: 650; }
    .mn-sub { font-size: 11px; opacity: .4; }
    .mn-close { display: grid; place-items: center; width: 28px; height: 28px; border: 0; border-radius: 8px; background: transparent; color: inherit; opacity: .45; cursor: pointer; }
    .mn-close:hover { opacity: 1; background: rgba(255,255,255,.05); }
    .mn-close svg { width: 14px; height: 14px; fill: none; stroke: currentColor; stroke-width: 2; stroke-linecap: round; }
    .mn-cols { flex: 1; min-height: 0; overflow-y: auto; display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); align-items: start; align-content: start; gap: 10px; padding: 0 4px 6px 0; }
    .mn-cols::-webkit-scrollbar { width: 8px; }
    .mn-cols::-webkit-scrollbar-thumb { background: rgba(255,255,255,.08); border-radius: 4px; }
    .sk-card { border-radius: 12px; background: rgba(255,255,255,.025); box-shadow: inset 0 0 0 1px rgba(255,255,255,.05); }
    .sk-card.on { background: rgba(255,255,255,.04); box-shadow: inset 0 0 0 1px rgba(255,107,157,.28); }
    .sk-card-head { display: flex; align-items: center; gap: 8px; padding: 11px 12px; }
    .sk-card-title { flex: 1; min-width: 0; }
    .sk-card-title strong { font-size: 13px; font-weight: 600; color: rgba(246,238,242,.45); }
    .sk-card.on .sk-card-title strong { color: #fff0f5; }
    .sk-mbody { padding: 0 12px 10px; }
    .sk-mdesc { font-size: 11px; opacity: .4; margin-bottom: 6px; }
    .sk-ctl { display: flex; align-items: center; gap: 8px; padding: 4px 0; font-size: 11.5px; }
    .sk-label { flex: 1; color: rgba(246,238,242,.75); }
    .sk-hint { display: block; font-size: 10px; opacity: .4; }
    .sk-switch { position: relative; width: 26px; height: 14px; border: 0; border-radius: 99px; background: rgba(255,255,255,.07); cursor: pointer; flex: none; }
    .sk-switch::after { content: ""; position: absolute; top: 3px; left: 3px; width: 8px; height: 8px; border-radius: 50%; background: rgba(255,255,255,.25); transition: left .2s, background .2s; }
    .sk-switch[aria-checked="true"] { background: rgba(255,107,157,.25); }
    .sk-switch[aria-checked="true"]::after { left: 15px; background: #ff6b9d; }
    .sk-field { background: rgba(255,255,255,.035); border: 0; border-radius: 6px; color: #f6eef2; padding: 6px 9px; font-size: 11.5px; outline: none; box-shadow: inset 0 0 0 1px rgba(255,255,255,.05); }
    .sk-field option { background: #221419; }
    .sk-range { display: flex; align-items: center; gap: 8px; }
    .sk-slider { -webkit-appearance: none; appearance: none; width: 90px; height: 8px; background: transparent; }
    .sk-slider::-webkit-slider-runnable-track { height: 2px; border-radius: 2px; background: linear-gradient(#ff6b9d, #ff6b9d) 0 0 / var(--p, 50%) 100% no-repeat, rgba(255,255,255,.08); }
    .sk-slider::-webkit-slider-thumb { -webkit-appearance: none; width: 6px; height: 6px; margin-top: -2px; border-radius: 50%; background: #ff6b9d; }
    .sk-val { font-size: 11px; font-weight: 600; min-width: 28px; text-align: right; color: rgba(246,238,242,.8); }
    .sk-color { width: 34px; height: 22px; border: 0; border-radius: 6px; background: none; padding: 0; cursor: pointer; }
    .sk-note { font-size: 11px; color: rgba(246,238,242,.5); padding: 2px 0; }
    .sk-note.err { color: #ff7a93; }
    .sk-btn { align-self: flex-start; border: 0; border-radius: 8px; padding: 8px 16px; background: #ff6b9d; color: #fff; font-size: 11.5px; font-weight: 700; cursor: pointer; }
    .sk-btn:hover { filter: brightness(1.1); }
    `;

    window.addEventListener("keydown", (e) => {
      if (e.code === "Insert") { e.preventDefault(); toggleMenu(); }
    }, true);

    var btnEl = document.createElement("div");
    btnEl.style.cssText = "position:fixed;top:12px;right:12px;z-index:2147483646;cursor:pointer;width:26px;height:26px;opacity:0.5;transition:opacity 0.2s;pointer-events:auto;filter:drop-shadow(0 0 4px rgba(255,107,157,0.7))";
    btnEl.innerHTML = '<svg viewBox="0 0 24 24"><path d="M12 21c-1.5-2.5-4-4.5-4-7.5 0-2.5 1.8-4.5 4-4.5s4 2 4 4.5c0 3-2.5 5-4 7.5z" fill="none" stroke="#ff6b9d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="10" r="1.5" fill="#ff6b9d"/></svg>';
    btnEl.title = "Sakura Kour";
    btnEl.onmouseenter = () => btnEl.style.opacity = "1";
    btnEl.onmouseleave = () => btnEl.style.opacity = "0.5";
    btnEl.onclick = (e) => { e.stopPropagation(); toggleMenu(); };
    document.body.appendChild(btnEl);

    attachInput();
    requestAnimationFrame(loop);
    console.log("[sakura-kour] menu ready. UWMK:", status.uwmk);
  });
})();
