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
