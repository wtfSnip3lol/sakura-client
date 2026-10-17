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
