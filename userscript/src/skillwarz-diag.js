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

  // CrazyGames nests THREE documents:
  //   www.crazygames.com        portal (Next.js)      -> paints the panel
  //   games.crazygames.com      gameframe loader      -> creates the player
  //   *.game-files.crazygames.com  Unity player       -> THIS is where Unity runs
  // Everything that matters (WebAssembly.instantiate, the .data fetch) happens
  // in the third document. Probing the second is like inspecting a launcher.
  var HOST = location.hostname || "";
  var IS_PORTAL = /(^|\.)www\.crazygames\.com$/.test(HOST);
  var IS_WRAPPER = /(^|\.)games\.crazygames\.com$/.test(HOST);
  var IS_PLAYER = /(^|\.)crazygames\.com$/.test(HOST) && !IS_PORTAL && !IS_WRAPPER;
  var ROLE = IS_PORTAL ? "portal" : IS_WRAPPER ? "wrapper" : "player";
  if (!IS_PORTAL && !IS_WRAPPER && !IS_PLAYER) return;

  var ACCENT = "#ff8fb1";
  var CHANNEL = "__sakura_sw_diag_v1";
  var MARK0 = "===SAKURA-SKILLWARZ-BEGIN===";
  var MARK1 = "===SAKURA-SKILLWARZ-END===";

  function tag() { return "SW-" + ROLE.toUpperCase(); }

  /* ================================================================== *
   * WRAPPER SIDE — relay only. The player posts to window.top directly,
   * but relaying here keeps the chain alive if the nesting ever changes.
   * ================================================================== */
  if (IS_WRAPPER) {
    window.addEventListener("message", function (e) {
      var d = e.data;
      if (!d || d.__sakura !== CHANNEL) return;
      try {
        if (window.parent && window.parent !== window) window.parent.postMessage(d, "*");
        if (window.top && window.top !== window) window.top.postMessage(d, "*");
      } catch (_) {}
    });
    console.log("%c[sakura] SW-WRAPPER ACTIVE (relay only)", "color:" + ACCENT);
    return;
  }

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
      try {
        if (d.kind === "hello") { panel().setStatus("game frame detected (" + (d.host || "?") + ") — probing…", "wait"); return; }
        if (d.kind === "report") { last = d.report; panel().setReport(d.report); }
      } catch (err) {
        console.warn("%c[sakura] panel update failed", "color:" + ACCENT, err);
      }
    });

    // NOTE: the panel is strictly a viewer. It must never be able to throw and
    // kill the probe, so every DOM touch below is guarded and panel() degrades
    // to NOOP instead of raising.
    var NOOP = { setStatus: function () {}, setReport: function () {} };

    function ensureRoot() {
      var el = document.getElementById("sakura-sw-diag");
      if (el) return el;
      if (!document.body || !document.body.appendChild) return null;
      try {
        if (!document.getElementById("sakura-sw-diag-css")) {
          var s = document.createElement("style");
          s.id = "sakura-sw-diag-css";
          s.textContent = "#sakura-sw-diag{all:initial}";
          (document.head || document.documentElement).appendChild(s);
        }
        el = document.createElement("div");
        el.id = "sakura-sw-diag";
        document.body.appendChild(el);
        return el;
      } catch (_) { return null; }
    }

    function panel() {
      var root = ensureRoot();
      if (!root) return NOOP;
      if (root.dataset.api) return root.api;
      try {
        return build(root);
      } catch (err) {
        root.dataset.api = "1";
        root.api = NOOP;
        console.warn("%c[sakura] panel disabled", "color:" + ACCENT, err);
        return NOOP;
      }
    }

    function build(root) {
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
      var closeBtn = root.querySelector("#skd-x");
      var payload = null;

      if (closeBtn) closeBtn.onclick = function () { try { root.remove(); } catch (_) {} };
      if (copyBtn) copyBtn.onclick = function () {
        var text = MARK0 + "\n" + (payload ? JSON.stringify(payload, null, 1) : "") + "\n" + MARK1;
        var done = function () { if (copyBtn) copyBtn.textContent = "Copied"; };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(done, function () { legacy(); });
        } else legacy();
        function legacy() {
          var ta = document.createElement("textarea");
          ta.value = text;
          if (!document.body) return;
          document.body.appendChild(ta); ta.select();
          try { document.execCommand("copy"); done(); } catch (_) {}
          ta.remove();
        }
      };

      // Timeout banner: only fires if the frame NEVER posted a single report.
      setTimeout(function () {
        if (payload) return;
        if (!statusEl || !outEl) return;
        statusEl.textContent = "no report at all after 60s — frame not injected?";
        statusEl.style.color = "#ffb3c7";
        outEl.textContent =
          "The game frame (games.crazygames.com) never posted a single report.\n\n" +
          "This panel proves the userscript IS installed and running on the portal,\n" +
          "so the remaining suspects are:\n\n" +
          "  1. Tampermonkey is not injecting into the cross-origin iframe.\n" +
          "  2. This script has not been reloaded since install (needs a page reload).\n" +
          "  3. The game frame redirects to a host that does not match @match.\n\n" +
          "If you DO see a live phase counter, the frame is fine and the probe is\n" +
          "still waiting on Unity - that is normal on a cold cache.\n\n" +
          "Reload the game page once and watch this panel again.";
      }, 60000);

      var api = {
        setStatus: function (t, kind) {
          if (!statusEl) return;
          statusEl.textContent = t;
          statusEl.style.color = kind === "wait" ? "#bda9c9" : ACCENT;
        },
        setReport: function (rep) {
          payload = rep;
          if (copyBtn) copyBtn.style.display = "";
          var ok = rep.scriptData;
          var secs = Math.round((rep.elapsedMs || 0) / 1000);
          if (statusEl) {
            // Name the current phase instead of a bare "not ready" - the probe
            // stays quiet while UWMK downloads and parses metadata.
            var phase = ok ? "OK"
              : rep.metadataReady ? "parsing wasm"
              : rep.uwmkStarted ? "downloading metadata"
              : rep.arm && rep.arm.ok ? "armed, waiting for fetch"
              : "arming";
            statusEl.textContent = ok
              ? "OK · " + rep.typeCount + " types · " + (rep.targetsFound || []).length + " targets"
              : phase + " · " + secs + "s";
            statusEl.style.color = ok ? "#7ee0a8" : "#ffd48a";
          }
          try {
            var brief = JSON.parse(JSON.stringify(rep));
            if (brief.targets) for (var k in brief.targets) brief.targets[k].methods = brief.targets[k].methods.slice(0, 12);
            if (outEl) outEl.textContent = JSON.stringify(brief, null, 1);
          } catch (_) { if (outEl) outEl.textContent = String(rep); }
          console.log("%c[sakura] SkillWarz report received", "color:" + ACCENT + ";font-weight:700", rep);
          console.log(MARK0 + "\n" + JSON.stringify(rep, null, 1) + "\n" + MARK1);
        }
      };
      root.dataset.api = "1";
      root.api = api;
      return api;
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

  console.log("%c[sakura] SW-PLAYER ACTIVE", "color:" + ACCENT + ";font-weight:700", { host: HOST, href: location.href });
  up("hello", { host: HOST, role: ROLE });

  /* ---------------------------------------------------------------- *
   * Instrumentation. UWMK talks exclusively through the console
   * ("[UnityWebModkit] ..."), and those lines ARE the diagnosis when the
   * context fails to build. Tap them before anything else can run.
   * Both taps are transparent pass-throughs.
   * ---------------------------------------------------------------- */
  var UWMK_LOG = [];
  var NET_LOG = [];

  (function tapConsole() {
    var methods = ["log", "warn", "error", "info", "debug"];
    for (var i = 0; i < methods.length; i++) {
      (function (name) {
        var orig = console[name];
        if (typeof orig !== "function") return;
        console[name] = function () {
          try {
            var flat = "";
            for (var a = 0; a < arguments.length; a++) {
              var v = arguments[a];
              if (typeof v === "string") flat += v;
              else if (v && v.message) flat += v.message;
            }
            if (flat.indexOf("UnityWebModkit") !== -1 && UWMK_LOG.length < 60) {
              UWMK_LOG.push(flat.slice(0, 300));
            }
          } catch (_) {}
          return orig.apply(console, arguments);
        };
      })(methods[i]);
    }
  })();

  (function tapFetch() {
    // performance.getEntriesByType("resource") is capped (~250 by default) and
    // CrazyGames fires hundreds of ad/prebid requests, so the Unity assets get
    // evicted. Watch the wire directly instead.
    try {
      var origFetch = window.fetch;
      if (typeof origFetch !== "function") return;
      window.fetch = function (input, init) {
        try {
          var u = typeof input === "string" ? input : (input && input.url) || "";
          if (u && NET_LOG.length < 60 && /\.(wasm|data)(\.br)?(\?|$)|global-metadata/i.test(u)) {
            NET_LOG.push(u.slice(0, 200));
          }
        } catch (_) {}
        return origFetch.apply(window, arguments);
      };
    } catch (_) {}
  })();

  /* ---------------------------------------------------------------- *
   * ARM UWMK. This is the step v1.9.3 previously missed entirely:
   * createPlugin() -> initialize() -> hookWasmInstantiate(). Without it
   * the game's WebAssembly.instantiate is never intercepted and
   * il2CppContext can never be built.
   * ---------------------------------------------------------------- */
  var ARM = { attempted: false, ok: false, error: null };
  var T0 = (window.__SAKURA_SW__ && window.__SAKURA_SW__.at) || Date.now();
  (function armUwmk() {
    try {
      var RT = window.UnityWebModkit && window.UnityWebModkit.Runtime;
      if (!RT || typeof RT.createPlugin !== "function") {
        ARM.error = "Runtime.createPlugin unavailable";
        return;
      }
      ARM.attempted = true;
      // referencedAssemblies stays empty: we are introspecting (reading type and
      // method names out of scriptData), not resolving calls into game assemblies.
      RT.createPlugin({ name: "sakura-skillwarz-diag", version: "1.9.3", referencedAssemblies: [] });
      ARM.ok = true;
    } catch (err) {
      ARM.error = String((err && err.message) || err);
    }
  })();

  var TARGETS = [
    "FPScontroller", "HealthScript", "WeaponManager", "WeaponNew", "WeaponController",
    "EnemyBot", "BotManager", "BotSpawner", "NPC_Cotroller", "GG_GameManager",
    "AimAssist", "ScoreManager", "SG_ScoreManager", "Chat", "Waves",
    "RealtimeSpeedHackDetector", "SecondSpeedHack", "ObscuredCheatingDetector",
    "Suppression", "BodyPartDamage", "PlayerConfig", "AmmoPickup", "TargetSpawner"
  ];

  function assets() {
    var out = [];
    var perfTotal = -1;
    try {
      var all = performance.getEntriesByType("resource") || [];
      perfTotal = all.length;
      for (var i = 0; i < all.length; i++) {
        var n = all[i].name;
        if (/\.(wasm|data|br)(\?|$)/i.test(n) || /skillwarz/i.test(n)) out.push(n);
      }
    } catch (_) {}
    // Merge in what we saw on the wire; the perf buffer may have evicted these.
    for (var j = 0; j < NET_LOG.length; j++) {
      if (out.indexOf(NET_LOG[j]) === -1) out.push(NET_LOG[j]);
    }
    return { perfTotal: perfTotal, urls: out.slice(0, 30) };
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
      elapsedMs: Date.now() - T0,
      frame: location.href.slice(0, 120),
      host: HOST,
      frameRole: ROLE,
      scriptRan: !!window.__SAKURA_SW__,
      overlayEl: !!document.getElementById("sakura-sw"),
      uwmk: !!RT,
      il2CppContext: !!ctx,
      wasmTypes: RT && RT.internalWasmTypes ? RT.internalWasmTypes.length : 0,
      globals: globals(),
      assets: assets(),
      arm: ARM,
      uwmkStarted: !!(RT && RT.startedInitializing),
      uwmkPlugins: RT && RT.plugins ? RT.plugins.map(function (p) { return p.name; }) : null,
      metadataReady: !!(RT && RT.globalMetadata),
      wasmInstantiateHooked: !!(RT && RT.instantiate),
      uwmkLog: UWMK_LOG.slice(0, 40)
    };

    // Confirm at runtime that the served build matches the dump we analysed.
    var a = report.assets.urls.join(" ");
    report.build = {
      is125: /skillwarz\/125\//.test(a),
      dataHash: (a.match(/skillwarz\/125\/Build\/([0-9a-f]{32})\.data/) || [])[1] || null,
      wasmHash: (a.match(/skillwarz\/125\/Build\/([0-9a-f]{32})\.wasm/) || [])[1] || null
    };

    report.warnings = [];
    if (report.overlayEl) {
      report.warnings.push(
        "CONFLICT: div#sakura-sw exists -> the old sakura.skillwarz.user.js " +
        "(v1.9.1 probe) is STILL installed and running a second copy of UWMK " +
        "in this frame. Disable it in Tampermonkey, then reload. Two copies " +
        "both patch WebAssembly.instantiate and both clear UnityCache."
      );
    }
    if (ARM.error) report.warnings.push("UWMK arming failed: " + ARM.error);
    if (report.uwmk && !report.uwmkStarted) {
      report.warnings.push("Runtime present but initialize() never ran - createPlugin was not effective.");
    }

    if (!sd) {
      report.scriptData = null;
      report.note = UWMK_LOG.length
        ? "no scriptData - see uwmkLog (UWMK printed diagnostics)"
        : "no scriptData - UWMK was silent; see arm/uwmkStarted";
      return report;
    }

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

  function safeCollect() {
    try { return collect(); }
    catch (err) {
      // A throwing probe must still report; silence reads as "not injected".
      return {
        when: new Date().toISOString(),
        elapsedMs: Date.now() - T0,
        frame: location.href.slice(0, 120),
        host: HOST,
        scriptRan: !!window.__SAKURA_SW__,
        uwmk: !!(window.UnityWebModkit && window.UnityWebModkit.Runtime),
        il2CppContext: false,
        scriptData: null,
        arm: ARM,
        uwmkLog: UWMK_LOG.slice(0, 40),
        collectError: String((err && err.message) || err)
      };
    }
  }

  function run() {
    // Arming UWMK makes the game block on a metadata download + wasm parse, so
    // the probe is quiet for a long time on a cold cache. Report constantly
    // instead: the panel must always show live state, never a scary "not
    // injected" verdict about a question that simply has not resolved yet.
    var MAX_TRIES = 300;
    var tries = 0;
    emit(safeCollect());
    (function poll() {
      var RT = (window.UnityWebModkit && window.UnityWebModkit.Runtime) || null;
      var ok = RT && RT.il2CppContext && RT.il2CppContext.scriptData;
      if (ok || tries > MAX_TRIES) { emit(safeCollect()); return; }
      tries++;
      if (tries % 10 === 0) emit(safeCollect());
      setTimeout(poll, 1000);
    })();
  }

  if (document.body) run();
  else document.addEventListener("DOMContentLoaded", run, { once: true });
})();