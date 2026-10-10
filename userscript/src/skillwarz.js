/* Sakura Client — SKILLWARZ payload (diagnostic build).
 *
 * Skillwarz ships as a Unity WebGL game inside a cross-origin CrazyGames iframe
 * (https://games.crazygames.com/en_US/skillwarz/index.html). Two consequences:
 *
 *  1. This script MUST run inside that frame, so it must not use @noframes.
 *  2. It has to patch fetch / WebAssembly.instantiate before Unity's boot
 *     scripts compile the WASM, so it runs at document-start with UWMK inlined.
 *
 * This build is deliberately READ-ONLY. It writes nothing to game memory and
 * touches no game logic — it only reads. That matters because the game runs
 * ACTk with ObscuredCheatingDetector plus RealtimeSpeedHackDetector and
 * SecondSpeedHack, and it is real Photon multiplayer, so anything that pokes at
 * memory is the one thing most likely to get an account flagged.
 *
 * Its job is to replace guesswork with facts. The game's field and method names
 * are obfuscated in dump.cs (e.g. A'A`AZA'A'A?A<A?A?A"AZ), but those mangled
 * strings are still the game's real names, and UWMK resolves hooks by exact
 * string match. So enumerating scriptData yields names that can be hooked
 * verbatim. The probe dumps exactly that.
 */

(() => {
  "use strict";
  var HOST = location.hostname || "";
  if (!/(^|\.)games\.crazygames\.com$/.test(HOST)) return;
  if (!/__SAKURA_SW__/) window.__SAKURA_SW__ = { at: Date.now() };

  var ACCENT = "#ff8fb1";

  /* ------------------------------------------------------------------ *
   * 1. Sakura overlay (pure DOM — never touches the game's canvas)
   * ------------------------------------------------------------------ */
  var ov = { fps: true, keys: true, crosshair: true, accent: ACCENT };
  try { Object.assign(ov, JSON.parse(localStorage.getItem("sakura.sw.v1") || "{}")); } catch (_) {}

  var held = new Set();
  var clicks = { 1: [], 3: [] };

  function overlay() {
    var root = document.createElement("div");
    root.id = "sakura-sw";
    root.style.cssText = "position:fixed;inset:0;pointer-events:none;z-index:2147483000;font-family:'Outfit',system-ui,sans-serif;";
    root.innerHTML =
      '<div id="sk-sw-ch" style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:22px;height:22px;">' +
      '<div style="position:absolute;left:50%;top:0;width:2px;height:7px;margin-left:-1px;background:' + ov.accent + ';box-shadow:0 0 6px ' + ov.accent + ';"></div>' +
      '<div style="position:absolute;left:50%;bottom:0;width:2px;height:7px;margin-left:-1px;background:' + ov.accent + ';box-shadow:0 0 6px ' + ov.accent + ';"></div>' +
      '<div style="position:absolute;top:50%;left:0;height:2px;width:7px;margin-top:-1px;background:' + ov.accent + ';box-shadow:0 0 6px ' + ov.accent + ';"></div>' +
      '<div style="position:absolute;top:50%;right:0;height:2px;width:7px;margin-top:-1px;background:' + ov.accent + ';box-shadow:0 0 6px ' + ov.accent + ';"></div>' +
      '</div>' +
      '<div id="sk-sw-fps" style="position:absolute;top:10px;left:12px;color:' + ov.accent + ';font-size:13px;font-weight:700;text-shadow:0 0 10px rgba(0,0,0,.9);"></div>' +
      '<div id="sk-sw-keys" style="position:absolute;left:14px;bottom:14px;display:flex;gap:5px;"></div>';
    (document.body || document.documentElement).appendChild(root);

    var fpsEl = root.querySelector("#sk-sw-fps");
    var keysEl = root.querySelector("#sk-sw-keys");
    var chEl = root.querySelector("#sk-sw-ch");
    chEl.style.display = ov.crosshair ? "block" : "none";
    keysEl.style.display = ov.keys ? "flex" : "none";
    fpsEl.style.display = ov.fps ? "block" : "none";

    var KEYMAP = { KeyW: "W", KeyA: "A", KeyS: "S", KeyD: "D", Space: "␣", ShiftLeft: "⇧", ControlLeft: "CTRL" };
    function label(code) { return KEYMAP[code] || (code.startsWith("Key") ? code.slice(3) : (code.startsWith("Digit") ? code.slice(5) : code)); }
    function paintKeys() {
      var want = ["KeyW", "KeyA", "KeyS", "KeyD", "Space"];
      keysEl.innerHTML = want.map(function (c) {
        var on = held.has(c);
        var cps = clicks[1].filter(function (t) { return performance.now() - t < 1000; }).length;
        var lbl = c === "mouse1" ? "LMB" : label(c);
        var extra = c === "KeyW" && ov.fps && cps ? " <b style='color:#fff'>" + cps + "</b>" : "";
        return '<div style="min-width:30px;padding:5px 7px;border-radius:8px;text-align:center;font-size:11px;font-weight:700;' +
          'color:' + (on ? "#2a0f1b" : "#f7eef5") + ';' +
          'background:' + (on ? ov.accent : "rgba(20,12,28,.62)") + ';' +
          'border:1px solid ' + (on ? "transparent" : "rgba(255,143,177,.35)") + ';">' + lbl + extra + "</div>";
      }).join("");
    }
    paintKeys();

    var frames = 0, t0 = performance.now();
    (function loop() {
      frames++;
      var now = performance.now();
      if (now - t0 >= 1000) {
        fpsEl.textContent = Math.round(frames * 1000 / (now - t0)) + " FPS";
        frames = 0; t0 = now;
        paintKeys();
      }
      requestAnimationFrame(loop);
    })();

    window.addEventListener("keydown", function (e) { held.add(e.code); }, true);
    window.addEventListener("keyup", function (e) { held.delete(e.code); }, true);
    window.addEventListener("blur", function () { held.clear(); });
    window.addEventListener("mousedown", function (e) {
      held.add("mouse" + (e.button + 1));
      var l = clicks[e.button + 1]; if (l) { l.push(performance.now()); if (l.length > 40) l.shift(); }
    }, true);
    window.addEventListener("mouseup", function (e) { held.delete("mouse" + (e.button + 1)); }, true);
  }

  /* ------------------------------------------------------------------ *
   * 2. Probe — read-only reconnaissance
   * ------------------------------------------------------------------ */
  var TARGETS = [
    "FPScontroller", "HealthScript", "WeaponManager", "WeaponNew", "WeaponController",
    "EnemyBot", "BotManager", "BotSpawner", "NPC_Cotroller", "GG_GameManager",
    "AimAssist", "ScoreManager", "SG_ScoreManager", "Chat", "Waves",
    "RealtimeSpeedHackDetector", "SecondSpeedHack", "ObscuredCheatingDetector",
    "Suppression", "BodyPartDamage", "PlayerConfig", "AmmoPickup", "TargetSpawner"
  ];

  function assets() {
    try {
      return performance.getEntriesByType("resource")
        .map(function (e) { return e.name; })
        .filter(function (n) { return /\.(wasm|data|br)(\?|$)/i.test(n); })
        .slice(0, 20);
    } catch (_) { return []; }
  }

  function globals() {
    var want = ["unityInstance", "unityInstanceWrapper", "PhotonNetwork", "Photon", "Game", "SendMessage", "createUnityInstance"];
    var out = {};
    for (var i = 0; i < want.length; i++) {
      var k = want[i];
      out[k] = typeof window[k] === "undefined" ? "undefined" : (typeof window[k]);
    }
    return out;
  }

  function collect() {
    var RT = (window.UnityWebModkit && window.UnityWebModkit.Runtime) || null;
    var ctx = RT && RT.il2CppContext;
    var sd = ctx && ctx.scriptData;

    var report = {
      when: new Date().toISOString(),
      url: location.href.slice(0, 120),
      uwmk: !!RT,
      il2CppContext: !!ctx,
      wasmTypes: RT && RT.internalWasmTypes ? RT.internalWasmTypes.length : 0,
      globals: globals(),
      assets: assets()
    };

    if (!sd) { report.scriptData = null; report.note = "scriptData not ready yet"; return report; }

    var names = Object.keys(sd);
    report.typeCount = names.length;
    report.unobfuscatedSample = names.filter(function (n) { return /^[A-Za-z_][A-Za-z0-9_]*$/.test(n); }).slice(0, 60);

    var found = {};
    for (var t = 0; t < TARGETS.length; t++) {
      var name = TARGETS[t];
      if (!sd[name]) continue;
      var methods = Object.keys(sd[name]);
      found[name] = { methodCount: methods.length, methods: methods };
    }
    report.targetsFound = Object.keys(found);
    report.targets = found;

    // Anything whose name looks like the obfuscation output is worth a peek too.
    var obfuscated = names.filter(function (n) { return !/^[A-Za-z_][A-Za-z0-9_]*$/.test(n); });
    report.obfuscatedTypeCount = obfuscated.length;
    report.obfuscatedSample = obfuscated.slice(0, 25);

    return report;
  }

  function show(report) {
    var text = JSON.stringify(report, null, 1);
    var MARK0 = "===SAKURA-SKILLWARZ-BEGIN===";
    var MARK1 = "===SAKURA-SKILLWARZ-END===";
    console.log("%c[sakura] SkillWarz probe", "color:#ff8fb1;font-weight:700");
    console.log(MARK0 + "\n" + text + "\n" + MARK1);

    var box = document.createElement("div");
    box.style.cssText =
      "position:fixed;left:10px;top:10px;z-index:2147483001;width:min(46vw,560px);max-height:70vh;" +
      "background:#150c1d;color:#f7eef5;border:1px solid rgba(255,143,177,.5);border-radius:14px;" +
      "font:12px/1.45 ui-monospace,Consolas,monospace;box-shadow:0 20px 50px -20px #000;display:flex;flex-direction:column;";
    box.innerHTML =
      '<div style="padding:9px 12px;border-bottom:1px solid rgba(255,143,177,.3);display:flex;gap:8px;align-items:center;">' +
      '<b style="color:' + ov.accent + '">sakura · skillwarz probe</b>' +
      '<span style="color:#bda9c9">types: ' + (report.typeCount != null ? report.typeCount : "?") +
      ' · found: ' + (report.targetsFound ? report.targetsFound.length : 0) + '</span>' +
      '<button id="sk-copy" style="margin-left:auto;background:' + ov.accent + ';border:0;border-radius:7px;padding:4px 10px;font-weight:700;cursor:pointer;">Copy JSON</button>' +
      '<button id="sk-x" style="background:transparent;border:1px solid rgba(255,143,177,.4);color:#f7eef5;border-radius:7px;padding:4px 8px;cursor:pointer;">x</button>' +
      '</div>' +
      '<pre id="sk-out" style="margin:0;padding:10px 12px;overflow:auto;flex:1;white-space:pre-wrap;word-break:break-all;"></pre>';
    (document.body || document.documentElement).appendChild(box);
    var out = box.querySelector("#sk-out");
    // Long method lists are the payload - show a trimmed view, copy gets it all.
    var brief = JSON.parse(JSON.stringify(report));
    if (brief.targets) for (var k in brief.targets) brief.targets[k].methods = brief.targets[k].methods.slice(0, 12);
    out.textContent = JSON.stringify(brief, null, 1);
    box.querySelector("#sk-copy").onclick = function () {
      navigator.clipboard && navigator.clipboard.writeText(MARK0 + "\n" + text + "\n" + MARK1);
      this.textContent = "Copied";
    };
    box.querySelector("#sk-x").onclick = function () { box.remove(); };
  }

  function run() {
    overlay();
    var tries = 0;
    (function poll() {
      var RT = (window.UnityWebModkit && window.UnityWebModkit.Runtime) || null;
      var ok = RT && RT.il2CppContext && RT.il2CppContext.scriptData;
      if (ok || tries > 120) { show(collect()); return; }
      tries++;
      setTimeout(poll, 1000);
    })();
  }

  function start() {
    if (document.body) return run();
    document.addEventListener("DOMContentLoaded", run, { once: true });
  }
  start();
})();