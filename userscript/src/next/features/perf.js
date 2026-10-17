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
    fn: function () {
      var o = SK.overlay();
      var ctx = o.begin();
      var drew = false;
      for (var i = 0; i < painters.length; i++) {
        if (painters[i].fn(ctx, o) !== false) drew = true;
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
