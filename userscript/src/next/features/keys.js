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
