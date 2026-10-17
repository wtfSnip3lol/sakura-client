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

// Session counters (the HUD that reads them lands with the hud pass).
var hudSes = { t0: 0, kills: 0, deaths: 0, lastKills: null };
function stReset() {
  hudSes.t0 = 0;
  hudSes.kills = 0;
  hudSes.deaths = 0;
  hudSes.lastKills = null;
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

// Insert toggles the menu. The game does not bind Insert, and this runs in the
// capture phase so the game cannot swallow it first.
window.addEventListener("keydown", function (e) {
  if (e.code === "Insert") { e.preventDefault(); toggleMenu(); }
}, true);

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
// themselves. This surface is only what genuinely exists at bundle scope.
SK.panel = {
  open: function () { setMenuOpen(true); },
  close: function () { setMenuOpen(false); },
  toggle: function () { toggleMenu(); },
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
