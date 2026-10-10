/* Sakura Client — SKILLWARZ self-diagnosing probe.
 *
 * Why this exists: the game lives in a cross-origin CrazyGames iframe
 * (games.crazygames.com inside www.crazygames.com). A console snippet pasted in
 * the portal CANNOT reach into that frame — same-origin policy blocks it. So the
 * only way to report the game frame's state to the portal is a userscript that
 * matches BOTH hosts: the frame probes itself and postMessage()s the result up,
 * and the portal paints it on the page.
 *
 * That means installing this one script is the entire setup. No console, no
 * pasting, no clicking Copy JSON. Open the game page and the answer is on screen.
 *
 * READ-ONLY. It writes nothing to game memory and touches no game logic. The
 * game runs ACTk ObscuredCheatingDetector plus RealtimeSpeedHackDetector and
 * SecondSpeedHack on real Photon multiplayer, so reads are the safe subset.
 *
 * The field/method names are obfuscated in the build, but the mangled strings are
 * the game's real names and UWMK resolves hooks by exact string match — so
 * enumerating scriptData yields names that can be hooked verbatim.
 */

(() => {
  "use strict";

  var HOST = location.hostname || "";
  var IS_FRAME = /(^|\.)games\.crazygames\.com$/.test(HOST);
  var IS_PORTAL = /(^|\.)(www\.)?crazygames\.com$/.test(HOST) && !IS_FRAME;
  if (!IS_FRAME && !IS_PORTAL) return;

  var ACCENT = "#ff8fb1";
  var CHANNEL = "__sakura_sw_diag_v1";
  var MARK0 = "===SAKURA-SKILLWARZ-BEGIN===";
  var MARK1 = "===SAKURA-SKILLWARZ-END===";

  function tag() { return IS_FRAME ? "SW-FRAME" : "PORTAL"; }

  /* ================================================================== *
   * PORTAL SIDE — paint the panel, receive the report
   * ================================================================== */
  if (IS_PORTAL) {
    console.log("%c[sakura] PORTAL ACTIVE", "color:" + ACCENT + ";font-weight:700",
      { host: HOST, waitingFor: "games.crazygames.com frame" });

    var last = null;
    window.addEventListener("message", function (e) {
      var d = e.data;
      if (!d || d.__sakura !== CHANNEL) return;
      if (d.kind === "hello") { panel().setStatus("game frame detected (" + (d.host || "?") + ") — probing…", "wait"); return; }
      if (d.kind === "report") { last = d.report; panel().setReport(d.report); }
    });

    function mount() {
      if (document.body) return true;
      var s = document.createElement("style");
      s.textContent = "#sakura-sw-diag{all:initial}";
      (document.head || document.documentElement).appendChild(s);
      var d = document.createElement("div");
      d.id = "sakura-sw-diag";
      (document.body || document.documentElement).appendChild(d);
      return true;
    }

    function panel() {
      var root = document.getElementById("sakura-sw-diag");
      if (root && root.dataset.ready) return root.api;
      if (!mount()) return { setStatus: function () {}, setReport: function () {} };
      root = document.getElementById("sakura-sw-diag");

      root.style.cssText =
        "position:fixed;left:12px;top:12px;z-index:2147483000;width:min(52vw,620px);max-height:78vh;" +
        "background:#150c1d;color:#f7eef5;border:1px solid rgba(255,143,177,.5);border-radius:14px;" +
        "font:12px/1.5 ui-monospace,Consolas,monospace;box-shadow:0 20px 50px -20px #000;" +
        "display:flex;flex-direction:column;overflow:hidden;";

      root.innerHTML =
        '<div style="padding:9px 12px;border-bottom:1px solid rgba(255,143,177,.3);display:flex;gap:8px;align-items:center;flex:0 0 auto;">' +
        '<b style="color:' + ACCENT + '">sakura · skillwarz</b>' +
        '<span id="skd-status" style="color:#bda9c9">waiting for game frame…</span>' +
        '<button id="skd-copy" style="display:none;margin-left:auto;background:' + ACCENT + ';border:0;color:#2a0f1b;border-radius:7px;padding:4px 10px;font-weight:700;cursor:pointer;">Copy JSON</button>' +
        '<button id="skd-x" style="background:transparent;border:1px solid rgba(255,143,177,.4);color:#f7eef5;border-radius:7px;padding:4px 8px;cursor:pointer;">x</button>' +
        '</div>' +
        '<pre id="skd-out" style="margin:0;padding:10px 12px;overflow:auto;flex:1 1 auto;white-space:pre-wrap;word-break:break-word;font:inherit;' +
        'max-height:64vh;">No report yet.\n\nThis panel updates itself the moment the game frame loads — no console needed.\n\nIf it stays empty, the userscript is not being injected into the cross-origin game frame.</pre>';

      var statusEl = root.querySelector("#skd-status");
      var outEl = root.querySelector("#skd-out");
      var copyBtn = root.querySelector("#skd-copy");
      var payload = null;

      root.querySelector("#skd-x").onclick = function () { root.remove(); };
      copyBtn.onclick = function () {
        var text = MARK0 + "\n" + (payload ? JSON.stringify(payload, null, 1) : "") + "\n" + MARK1;
        var done = function () { copyBtn.textContent = "Copied"; };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(done, function () { legacy(); });
        } else legacy();
        function legacy() {
          var ta = document.createElement("textarea");
          ta.value = text; document.body.appendChild(ta); ta.select();
          try { document.execCommand("copy"); done(); } catch (_) {}
          ta.remove();
        }
      };

      root.dataset.ready = "1";

      // Timeout banner: distinguishes "slow game" from "never injected".
      setTimeout(function () {
        if (payload) return;
        statusEl.textContent = "no report after 45s — not injected into frame?";
        statusEl.style.color = "#ffb3c7";
        outEl.textContent =
          "No report after 45 seconds.\n\n" +
          "The game frame (games.crazygames.com) never posted anything.\n\n" +
          "This panel proves the userscript IS installed and running on the portal,\n" +
          "so the remaining suspects are:\n\n" +
          "  1. Tampermonkey is not injecting into the cross-origin iframe.\n" +
          "  2. This script has not been reloaded since install (needs a page reload).\n" +
          "  3. The game frame redirects to a host that does not match @match.\n\n" +
          "Reload the game page once and watch this panel again.";
      }, 45000);

      return {
        setStatus: function (t, kind) {
          statusEl.textContent = t;
          statusEl.style.color = kind === "wait" ? "#bda9c9" : ACCENT;
        },
        setReport: function (rep) {
          payload = rep;
          copyBtn.style.display = "";
          var ok = rep.scriptData;
          statusEl.textContent = ok
            ? "OK · " + rep.typeCount + " types · " + (rep.targetsFound || []).length + " targets"
            : "scriptData not ready (uwmk=" + rep.uwmk + ")";
          statusEl.style.color = ok ? "#7ee0a8" : "#ffb3c7";
          var brief = JSON.parse(JSON.stringify(rep));
          if (brief.targets) for (var k in brief.targets) brief.targets[k].methods = brief.targets[k].methods.slice(0, 12);
          outEl.textContent = JSON.stringify(brief, null, 1);
          console.log("%c[sakura] SkillWarz report received", "color:" + ACCENT + ";font-weight:700", rep);
          console.log(MARK0 + "\n" + JSON.stringify(rep, null, 1) + "\n" + MARK1);
        }
      };
    }

    // Paint as soon as there is a DOM, but never later than needed.
    if (document.body) panel();
    else document.addEventListener("DOMContentLoaded", panel, { once: true });
    return;
  }

  /* ================================================================== *
   * GAME FRAME SIDE — probe, then postMessage up to the portal
   * ================================================================== */

  window.__SAKURA_SW__ = window.__SAKURA_SW__ || { at: Date.now() };

  function up(kind, payload) {
    var msg = { __sakura: CHANNEL, kind: kind };
    if (payload) for (var k in payload) msg[k] = payload[k];
    try { if (window.parent && window.parent !== window) window.parent.postMessage(msg, "*"); } catch (_) {}
    try { if (window.top && window.top !== window) window.top.postMessage(msg, "*"); } catch (_) {}
  }

  console.log("%c[sakura] SW-FRAME ACTIVE", "color:" + ACCENT + ";font-weight:700", { host: HOST, href: location.href });
  up("hello", { host: HOST });

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
      frame: location.href.slice(0, 120),
      host: HOST,
      scriptRan: !!window.__SAKURA_SW__,
      overlayEl: !!document.getElementById("sakura-sw"),
      uwmk: !!RT,
      il2CppContext: !!ctx,
      wasmTypes: RT && RT.internalWasmTypes ? RT.internalWasmTypes.length : 0,
      globals: globals(),
      assets: assets()
    };

    // Confirm at runtime that the served build matches the dump we analysed.
    var a = report.assets.join(" ");
    report.build = {
      is125: /skillwarz\/125\//.test(a),
      dataHash: (a.match(/skillwarz\/125\/Build\/([0-9a-f]{32})\.data/) || [])[1] || null,
      wasmHash: (a.match(/skillwarz\/125\/Build\/([0-9a-f]{32})\.wasm/) || [])[1] || null
    };

    if (!sd) { report.scriptData = null; report.note = "scriptData not ready yet"; return report; }

    var names = Object.keys(sd);
    report.scriptData = true;
    report.typeCount = names.length;
    report.unobfuscatedSample = names.filter(function (n) { return /^[A-Za-z_][A-Za-z0-9_]*$/.test(n); }).slice(0, 60);

    var found = {};
    for (var t = 0; t < TARGETS.length; t++) {
      var name = TARGETS[t];
      if (!sd[name]) continue;
      found[name] = { methodCount: Object.keys(sd[name]).length, methods: Object.keys(sd[name]) };
    }
    report.targetsFound = Object.keys(found);
    report.targets = found;

    report.obfuscatedTypeCount = names.filter(function (n) { return !/^[A-Za-z_][A-Za-z0-9_]*$/.test(n); }).length;
    report.obfuscatedSample = names.filter(function (n) { return !/^[A-Za-z_][A-Za-z0-9_]*$/.test(n); }).slice(0, 25);

    return report;
  }

  function emit(report) {
    console.log("%c[sakura] SkillWarz probe", "color:" + ACCENT + ";font-weight:700", report);
    console.log(MARK0 + "\n" + JSON.stringify(report, null, 1) + "\n" + MARK1);
    up("report", { report: report });
  }

  function run() {
    var tries = 0;
    (function poll() {
      var RT = (window.UnityWebModkit && window.UnityWebModkit.Runtime) || null;
      var ok = RT && RT.il2CppContext && RT.il2CppContext.scriptData;
      if (ok || tries > 90) { emit(collect()); return; }
      tries++;
      setTimeout(poll, 1000);
    })();
  }

  if (document.body) run();
  else document.addEventListener("DOMContentLoaded", run, { once: true });
})();