/* Sakura Client — SKILLWARZ client (ACTk-aware).
 *
 * Skillwarz is a Unity WebGL build running inside a CrazyGames player frame. It
 * protects its numbers with Active Cheat Toolkit (ACTk): Obscured<T> fields XOR
 * their real value against a per-instance key and keep a randomised decoy beside
 * it, which ObscuredCheatingDetector re-checks every frame.
 *
 * This build is the ACTk-aware layer. It:
 *   1. arms UWMK inside the player frame (the only place Unity actually runs),
 *   2. hooks Update() on the game's own classes to capture live `this` pointers,
 *   3. decrypts the Obscured fields through the real codec, and
 *   4. reports everything to the CrazyGames page automatically.
 *
 * Step 4 exists because the player frame is cross-origin: a console snippet on
 * the portal cannot read it. Installing this one script is the whole setup.
 *
 * WHY OBSCURED FIELDS STILL NEED IDENTIFYING
 * The build is obfuscated. dump.cs confirms FPScontroller's Unity magic method
 * Update() survives, but its movement fields are mangled strings — there is no
 * "speed" identifier anywhere. So instead of guessing which of the 15
 * ObscuredFloats on FPScontroller is walk speed, this payload reports all of
 * them decrypted and lets them be diffed by eye. Field maps are generated from
 * the dump by tools/gen-skillwarz-fields.mjs, never hand-typed.
 *
 * ACTk codec (verified against the build-125 dump, CodeStage.AntiCheat 2.x):
 *   ObscuredFloat  0x00 key | 0x04 hidden | 0x08 byte4 | 0x0C inited | 0x10 fake | 0x14 fakeActive
 *   ObscuredInt    0x00 key | 0x04 hidden | 0x08 inited | 0x0C fake | 0x10 fakeActive
 *   ObscuredBool   0x00 key | 0x04 hidden | 0x08 inited | 0x09 fake | 0x0A fakeActive
 *   real = reinterpret(hidden XOR key)
 */

(() => {
  "use strict";

  // CrazyGames nests THREE documents and only the third runs Unity:
  //   www.crazygames.com           portal      -> paints the panel
  //   games.crazygames.com         gameframe   -> creates the player
  //   *.game-files.crazygames.com  Unity player-> probes, hooks, reports
  var HOST = location.hostname || "";
  var IS_PORTAL = /(^|\.)www\.crazygames\.com$/.test(HOST);
  var IS_WRAPPER = /(^|\.)games\.crazygames\.com$/.test(HOST);
  var IS_PLAYER = /(^|\.)crazygames\.com$/.test(HOST) && !IS_PORTAL && !IS_WRAPPER;
  var ROLE = IS_PORTAL ? "portal" : IS_WRAPPER ? "wrapper" : "player";
  if (!IS_PORTAL && !IS_WRAPPER && !IS_PLAYER) return;

  var ACCENT = "#ff8fb1";
  var CHANNEL = "__sakura_sw_v2";
  var MARK0 = "===SAKURA-SKILLWARZ-BEGIN===";
  var MARK1 = "===SAKURA-SKILLWARZ-END===";

  // Single source of truth, declared up here because the PORTAL branch renders
  // the build badge and that branch returns long before the player code runs.
  // It was hand-written in three places once and one drifted, so a field report
  // claimed 2.0.2 while the plugin logged 2.0.3 - which sends everyone chasing
  // a stale build.
  var VERSION = "2.1.0";

  /* ================================================================== *
   * WRAPPER — relay only. Arming UWMK here achieves nothing: this frame
   * loads the player, it does not compile the WASM.
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
   * PORTAL — paint the panel, relay commands down into the game frame.
   * ================================================================== */
  if (IS_PORTAL) {
    console.log("%c[sakura] PORTAL ACTIVE", "color:" + ACCENT + ";font-weight:700", { host: HOST });

    var NOOP = { set: function () {}, command: function () {} };

    function down(cmd, arg) {
      var msg = { __sakura: CHANNEL, kind: "cmd", cmd: cmd, arg: arg };
      // The portal holds no reference to the player frame (cross-origin), so
      // commands travel as a BroadcastChannel ping: every Sakura frame on the
      // page is listening and the player is the one that acts on them.
      try {
        var bc = new BroadcastChannel("sakura-sw");
        bc.postMessage(msg);
        setTimeout(function () { try { bc.close(); } catch (_) {} }, 250);
      } catch (_) {}
    }

    function ensureRoot() {
      var el = document.getElementById("sakura-sw-v2");
      if (el) return el;
      if (!document.body || !document.body.appendChild) return null;
      try {
        if (!document.getElementById("sakura-sw-v2-css")) {
          var s = document.createElement("style");
          s.id = "sakura-sw-v2-css";
          s.textContent = "#sakura-sw-v2{all:initial}";
          (document.head || document.documentElement).appendChild(s);
        }
        el = document.createElement("div");
        el.id = "sakura-sw-v2";
        document.body.appendChild(el);
        return el;
      } catch (_) { return null; }
    }

    function panel() {
      var root = ensureRoot();
      if (!root) return NOOP;
      if (root.dataset.api) return root.api;
      try { return build(root); }
      catch (err) {
        root.dataset.api = "1"; root.api = NOOP;
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
        // The build number is on screen, not just in a report. Field reports
        // arrived twice from a stale install, so the version has to be visible
        // without opening the raw script in a new tab.
        '<span id="sw2-build" style="color:#7a6586;font-size:11px;padding:1px 6px;border:1px solid rgba(255,143,177,.35);border-radius:999px;">v?</span>' +
        '<span id="sw2-status" style="color:#bda9c9">waiting for game frame…</span>' +
        '<button id="sw2-copy" style="display:none;margin-left:auto;background:' + ACCENT + ';border:0;color:#2a0f1b;border-radius:7px;padding:4px 10px;font-weight:700;cursor:pointer;">Copy JSON</button>' +
        '<button id="sw2-x" style="background:transparent;border:1px solid rgba(255,143,177,.4);color:#f7eef5;border-radius:7px;padding:4px 8px;cursor:pointer;">x</button>' +
        '</div>' +
        '<div style="padding:8px 12px;border-bottom:1px solid rgba(255,143,177,.18);display:flex;gap:8px;align-items:center;flex:0 0 auto;flex-wrap:wrap;">' +
        '<button id="sw2-speed" style="background:transparent;border:1px solid rgba(255,143,177,.4);color:#f7eef5;border-radius:7px;padding:4px 10px;cursor:pointer;">Speed off</button>' +
        '<input id="sw2-factor" type="range" min="1" max="5" step="0.1" value="1" style="width:120px;accent-color:' + ACCENT + ';">' +
        '<span id="sw2-factorlabel" style="color:#bda9c9;min-width:34px;">1.0x</span>' +
        '<button id="sw2-snap" style="background:transparent;border:1px solid rgba(255,143,177,.4);color:#f7eef5;border-radius:7px;padding:4px 9px;cursor:pointer;">Snapshot (F9)</button>' +
        '<span id="sw2-hint" style="color:#8d7a99">F9 twice while walking / sprinting / jumping marks which field is which.</span>' +
        '</div>' +
        '<pre id="sw2-out" style="margin:0;padding:10px 12px;overflow:auto;flex:1 1 auto;white-space:pre-wrap;word-break:break-word;font:inherit;' +
        'max-height:62vh;">No report yet.\n\nThis panel updates itself when the game frame loads — no console needed.\n\nIf it stays empty, Tampermonkey is not injecting into the cross-origin game frame.</pre>';

      var statusEl = root.querySelector("#sw2-status");
      var buildEl = root.querySelector("#sw2-build");
      var outEl = root.querySelector("#sw2-out");
      var copyBtn = root.querySelector("#sw2-copy");
      var closeBtn = root.querySelector("#sw2-x");
      var snapBtn = root.querySelector("#sw2-snap");
      var speedBtn = root.querySelector("#sw2-speed");
      var factorEl = root.querySelector("#sw2-factor");
      var factorLabel = root.querySelector("#sw2-factorlabel");
      var hintEl = root.querySelector("#sw2-hint");
      var payload = null;

      if (closeBtn) closeBtn.onclick = function () { try { root.remove(); } catch (_) {} };
      if (snapBtn) snapBtn.onclick = function () { down("snapshot"); };
      // Speed state lives in the PLAYER frame (the only place with the pointer).
      // The portal just relays intent and renders whatever comes back.
      var speedOn = false;
      function pushSpeed() { down("speed", { on: speedOn, factor: parseFloat(factorEl.value) || 1 }); }
      if (speedBtn) speedBtn.onclick = function () {
        speedOn = !speedOn;
        speedBtn.textContent = speedOn ? "Speed ON" : "Speed off";
        speedBtn.style.background = speedOn ? ACCENT : "transparent";
        speedBtn.style.color = speedOn ? "#2a0f1b" : "#f7eef5";
        pushSpeed();
      };
      if (factorEl) factorEl.oninput = function () {
        if (factorLabel) factorLabel.textContent = (parseFloat(factorEl.value) || 1).toFixed(1) + "x";
        pushSpeed();
      };
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

      setTimeout(function () {
        if (payload) return;
        if (!statusEl || !outEl) return;
        statusEl.textContent = "no report after 60s — frame not injected?";
        statusEl.style.color = "#ffb3c7";
        outEl.textContent =
          "The game frame never posted a single report.\n\n" +
          "This panel proves the userscript IS installed and running on the portal,\n" +
          "so the remaining suspects are:\n\n" +
          "  1. Tampermonkey is not injecting into the cross-origin iframe.\n" +
          "  2. The page has not been reloaded since installing.\n" +
          "  3. Both sakura.skillwarz.user.js AND the old diag script are\n" +
          "     installed — two copies of UWMK both patch WebAssembly.instantiate.\n\n" +
          "Reload the game page once and watch this panel again.";
      }, 60000);

      var api = {
        set: function (rep) {
          payload = rep;
          if (copyBtn) copyBtn.style.display = "";
          if (buildEl) {
            buildEl.textContent = "v" + (rep.version || "?");
            // Highlight a version that does not match this payload's build, so
            // a stale install cannot masquerade as the current one.
            var mine = VERSION;
            var theirs = rep.version || "";
            buildEl.style.color = theirs === mine ? ACCENT : "#ff6e74";
            buildEl.style.borderColor = theirs === mine ? "rgba(255,143,177,.35)" : "#ff6e74";
          }
          var live = rep.instances && rep.instances.FPScontroller;
          var secs = Math.round((rep.elapsedMs || 0) / 1000);
          if (statusEl) {
            var txt, col;
            if (live && rep.survey && rep.survey.FPScontroller) {
              txt = "LIVE · " + Object.keys(rep.instances).length + " objects · " + secs + "s";
              col = "#7ee0a8";
            } else if (rep.hooksApplied > 0) {
              txt = "hooks armed · " + secs + "s"; col = "#ffd48a";
            } else if (rep.scriptData) {
              txt = "metadata ready · " + secs + "s"; col = "#ffd48a";
            } else {
              txt = (rep.arm && rep.arm.ok ? "armed · " : "arming · ") + secs + "s"; col = "#ffd48a";
            }
            statusEl.textContent = txt;
            statusEl.style.color = col;
          }
          if (hintEl) {
            hintEl.textContent = rep.diff && rep.diff.length
              ? "Diff vs snapshot: " + rep.diff.join(", ")
              : "F9 twice while walking / sprinting / jumping marks which field is which.";
          }
          // Reflect the player's speed state so the panel never claims a toggle
          // the frame has not actually applied.
          if (rep.speed && speedBtn) {
            speedOn = !!rep.speed.on;
            speedBtn.textContent = speedOn ? "Speed ON" : "Speed off";
            speedBtn.style.background = speedOn ? ACCENT : "transparent";
            speedBtn.style.color = speedOn ? "#2a0f1b" : "#f7eef5";
            if (factorLabel && rep.speed.factor) {
              factorLabel.textContent = Number(rep.speed.factor).toFixed(1) + "x";
            }
          }
          if (outEl) {
            try { outEl.textContent = render(rep); }
            catch (_) { outEl.textContent = JSON.stringify(rep, null, 1); }
          }
          console.log("%c[sakura] SkillWarz report", "color:" + ACCENT + ";font-weight:700", rep);
          console.log(MARK0 + "\n" + JSON.stringify(rep, null, 1) + "\n" + MARK1);
        }
      };
      root.dataset.api = "1";
      root.api = api;
      return api;
    }

    // Human table of the live Obscured fields; the JSON has everything else.
    function render(rep) {
      var out = [];
      out.push("frame    " + (rep.host || "?") + "  (" + Math.round((rep.elapsedMs || 0) / 1000) + "s)");
      out.push("uwmk     " + (rep.uwmk ? "yes" : "no") + "   context " + (rep.il2CppContext ? "yes" : "no") +
               "   types " + (rep.typeCount != null ? rep.typeCount : "?"));
      out.push("hooks    " + rep.hooksApplied + "/" + rep.hooksTotal + " applied");
      out.push("");
      var inst = rep.instances || {};
      var names = Object.keys(inst);
      if (!names.length) {
        out.push("no live objects captured yet.");
        out.push("");
        out.push("The hooks fire on the game's own Update(); nothing captured means");
        out.push("no Update ran yet, or the signature did not match.");
      }
      for (var i = 0; i < names.length; i++) {
        var t = names[i];
        out.push(t + " @ " + inst[t]);
      }
      out.push("");
      var sv = rep.survey || {};
      var sNames = Object.keys(sv);
      for (var s = 0; s < sNames.length; s++) {
        var type = sNames[s];
        var rows = sv[type];
        if (!rows || !rows.length) continue;
        out.push("── " + type + " " + new Array(Math.max(1, 34 - type.length)).join("─"));
        out.push("  offset   kind        value            raw");
        for (var r = 0; r < rows.length; r++) {
          var f = rows[r];
          var v = typeof f.v === "number" ? (Math.round(f.v * 1000) / 1000) : f.v;
          out.push(
            "  " + ("0x" + f.o.toString(16)).padEnd(8) + " " + f.k.padEnd(11) +
            " " + String(v).padEnd(16) + " " + (f.raw || "")
          );
        }
        out.push("");
      }
      if (rep.warnings && rep.warnings.length) {
        out.push("warnings");
        for (var w = 0; w < rep.warnings.length; w++) out.push("  ! " + rep.warnings[w]);
      }
      return out.join("\n");
    }

    window.addEventListener("message", function (e) {
      var d = e.data;
      if (!d || d.__sakura !== CHANNEL) return;
      try {
        if (d.kind === "hello") { panel().set({ host: d.host, elapsedMs: 0, arm: {}, hooksApplied: 0, hooksTotal: 0 }); return; }
        if (d.kind === "report") panel().set(d.report);
      } catch (err) {
        console.warn("%c[sakura] panel update failed", "color:" + ACCENT, err);
      }
    });

    if (document.body) panel();
    else document.addEventListener("DOMContentLoaded", panel, { once: true });
    return;
  }

  /* ================================================================== *
   * PLAYER FRAME — arm, hook, decode, report.
   * ================================================================== */
  window.__SAKURA_SW__ = window.__SAKURA_SW__ || { at: Date.now() };

  function up(kind, payload) {
    var msg = { __sakura: CHANNEL, kind: kind };
    if (payload) for (var k in payload) msg[k] = payload[k];
    try { if (window.parent && window.parent !== window) window.parent.postMessage(msg, "*"); } catch (_) {}
    try { if (window.top && window.top !== window) window.top.postMessage(msg, "*"); } catch (_) {}
  }

  console.log("%c[sakura] SW-PLAYER ACTIVE v" + VERSION, "color:" + ACCENT + ";font-weight:700;font-size:14px",
    { host: HOST, href: location.href, version: VERSION });
  up("hello", { host: HOST, role: ROLE });

  var T0 = (window.__SAKURA_SW__ && window.__SAKURA_SW__.at) || Date.now();

  // Snapshot support: the portal cannot reach us, so it pings a BroadcastChannel.
  try {
    var bc = new BroadcastChannel("sakura-sw");
    bc.onmessage = function (ev) {
      var d = ev.data;
      if (d && d.__sakura === CHANNEL && d.kind === "cmd") onCommand(d.cmd, d.arg);
    };
  } catch (_) {}

  var UWMK_LOG = [];
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
            // Never capture our own output. Our report embeds uwmkLog, whose
            // entries contain the string "UnityWebModkit", so the naive filter
            // matched our own reports - which were then embedded in the next
            // report, and so on. That self-feeding loop filled the 60-entry
            // budget with our own noise and evicted UWMK's real diagnostics,
            // including the "Hook timed out waiting for Unity to initialize"
            // line that would have explained this whole thread.
            if (flat.indexOf(MARK0) !== -1) return orig.apply(console, arguments);
            if (flat.indexOf("UnityWebModkit") !== -1) {
              var line = flat.slice(0, 300);
              if (UWMK_LOG.indexOf(line) === -1 && UWMK_LOG.length < 60) UWMK_LOG.push(line);
            }
          } catch (_) {}
          return orig.apply(console, arguments);
        };
      })(methods[i]);
    }
  })();

  /* ---------------------------------------------------------------- *
   * ARM UWMK.
   * referencedAssemblies is not optional. UWMK filters imageDefs to these
   * exact strings and then BAILS OUT ENTIRELY if the list comes back
   * empty — an empty array is a silent no-op, not "everything". These are
   * the six non-system images from dump.cs for build 125.
   * ---------------------------------------------------------------- */
  var ARM = { attempted: false, ok: false, error: null, hooksRegistered: 0 };
  var ARM_TAG = null;

  /* ---------------------------------------------------------------- *
   * The heap, captured at instantiate time.
   *
   * This is the actual answer to "why do the hooks work but the game object
   * does not exist". UWMK does not wait for Unity to expose itself. In
   * handleBuffer it compiles its own patched WASM and calls
   *     this.instantiate(wasmOutput, importObject).then((instantiatedSource) => ...)
   * then applies hooks by swapping entries in the INSTANCE's own function
   * table:
   *     const table = exports[tableName];
   *     const originalFunc = table.get(hook.tableIndex);
   *     hook.originalFunc = originalFunc;
   *     table.set(hook.tableIndex, makeWasmFunc(...));
   *     hook.applied = true;
   *
   * `instantiatedSource` is a local. Nothing is stored on the Runtime, and
   * nothing is assigned to window.unityInstance / unityGame / game - this
   * loader never creates any of them, which is why resolveGame() is null while
   * hooks apply and fire normally. Every UWMK API that reads memory
   * (memory(), readField(), createObject(), malloc) goes through resolveGame()
   * first, so all of them are dead ends here.
   *
   * The WebAssembly.Memory is nevertheless reachable: hookWasmInstantiate()
   * runs synchronously inside createPlugin(), replacing WebAssembly.instantiate
   * with UWMK's handler. Wrapping that handler afterwards - the payload does,
   * in the same tick it registers hooks - lets us observe the instance it
   * returns and keep its exported memory. Re-reading .buffer per call is
   * correct: Emscripten detaches and replaces the buffer when memory grows,
   * but the WebAssembly.Memory object itself stays valid.
   * ---------------------------------------------------------------- */
  var WASM_MEMORY = null;
  var WASM_MEMORY_AT = -1;
  var WASM_EXPORT_KEYS = null;

  function captureWasmResult(res) {
    try {
      if (!res) return;
      var ex = res.instance ? res.instance.exports : (res.exports || null);
      if (!ex) return;
      if (!WASM_EXPORT_KEYS) {
        try { WASM_EXPORT_KEYS = Object.keys(ex).slice(0, 24); } catch (_) {}
      }
      var mem = ex.memory;
      if (mem && mem.buffer && mem.buffer.byteLength > 0) {
        WASM_MEMORY = mem;
        WASM_MEMORY_AT = Date.now() - T0;
      }
    } catch (_) {}
  }

  function tapWasmMemory() {
    try {
      if (typeof WebAssembly === "undefined") return;
      var names = ["instantiate", "instantiateStreaming"];
      for (var i = 0; i < names.length; i++) {
        (function (name) {
          var cur = WebAssembly[name];
          if (typeof cur !== "function" || cur.__sakuraMemoryTap) return;
          var wrapped = function () {
            var p = cur.apply(this, arguments);
            try {
              if (p && typeof p.then === "function") p.then(captureWasmResult, function () {});
              else captureWasmResult(p);
            } catch (_) {}
            // Pass the ORIGINAL promise back untouched. Wrapping this is what
            // UWMK itself does; anything that changes the contract here can
            // stop the game booting.
            return p;
          };
          wrapped.__sakuraMemoryTap = true;
          try { Object.defineProperty(wrapped, "name", { value: cur.name, configurable: true }); } catch (_) {}
          WebAssembly[name] = wrapped;
        })(names[i]);
      }
    } catch (_) {}
  }

  // VERSION is declared at the top of this IIFE, next to the channel constants.

  // Declared here, NOT beside their consumers further down. armUwmk() calls
  // registerHooks() in the same tick, and a `var x = []` further down the file
  // would still be undefined at that point: declarations hoist, assignments do
  // not. Silently losing every hook that way would look like a game-side
  // mystery again.
  var VW = null, plugin = null;
  var INSTANCES = {};   // typeName -> { ptr, firstSeen, hits }
  var HOOKS = [];       // { type, hook, keep }
  var HOOK_ERRORS = [];

  // Types to capture, and whether the hook stays on once it has fired. The
  // local player object is rebuilt on respawn, so those hooks stay armed and
  // simply notice when the pointer changes.
  //
  // This lives up here for the same reason as HOOKS: armUwmk() calls
  // registerHooks(), which iterates CAPTURE. Declared further down it would be
  // undefined at that moment and registerHooks() would throw on CAPTURE.length
  // - after which the retry in the poll loop would quietly register the hooks
  // LATE, i.e. after UWMK's one-shot apply pass, and lose every one of them.
  var CAPTURE = [
    { type: "FPScontroller", keep: true },
    { type: "HealthScript", keep: true },
    { type: "WeaponManager", keep: false },
    { type: "GG_GameManager", keep: false }
  ];
  var ASSEMBLIES = [
    "Assembly-CSharp.dll",
    "Assembly-CSharp-firstpass.dll",
    "ch.sycoforge.Decal.dll",
    "cInput.dll",
    "ScivoloCharacterController.dll",
    "__Generated"
  ];

  (function armUwmk() {
    try {
      var RT = window.UnityWebModkit && window.UnityWebModkit.Runtime;
      if (!RT || typeof RT.createPlugin !== "function") { ARM.error = "Runtime.createPlugin unavailable"; return; }
      ARM.attempted = true;
      plugin = RT.createPlugin({ name: "sakura-skillwarz", version: VERSION, referencedAssemblies: ASSEMBLIES.slice() });
      ARM.ok = true;
      // Identity probe. Two UWMK copies in one page means two Runtime
      // singletons: whichever loaded last owns window.UnityWebModkit, and the
      // other one - the one that actually instantiated the WASM and holds the
      // game - is orphaned. Every symptom fits: hooks applied on one copy,
      // resolveGame() null on the other. Tagging the Runtime we arm means we can
      // detect the takeover instead of inferring it.
      try {
        var RT0 = window.UnityWebModkit.Runtime;
        RT0.__sakuraTag = VERSION + ":" + Math.random().toString(36).slice(2, 10);
        ARM_TAG = RT0.__sakuraTag;
      } catch (_) {}
      // Register the hooks in the SAME TICK, before returning from arming.
      //
      // This is the whole ballgame and v2.0.2 got it wrong. UWMK applies hooks
      // inside handleBuffer while instantiating the WASM, and it snapshots both
      // loop bounds up front:
      //     var pluginLen = this.plugins.length;
      //     while (i < pluginLen) { var hookLen = usePlugin.hooks.length; ... }
      // Anything registered after that one pass is never looked at again, so
      // `applied` stays false for the life of the page. v2.0.1/2 registered
      // from a 2s poll that waited for il2CppContext.scriptData - which only
      // becomes readable around instantiate - so the poll usually lost the
      // race. v2.0.1 happened to win it (4/4 applied), v2.0.2 lost (0/4). Same
      // code, coin flip. Registering names needs no metadata: hook() only
      // records them, and the method table is resolved during the apply pass.
      registerHooks();
      ARM.hooksRegistered = HOOKS.length;
      // Must come AFTER createPlugin: hookWasmInstantiate() has already replaced
      // WebAssembly.instantiate with UWMK's handler by this point, so this tap
      // observes the final instantiated instance rather than the raw bytes.
      tapWasmMemory();
      ARM.memoryTap = true;
    } catch (err) { ARM.error = String((err && err.message) || err); }
  })();

  /* ---------------------------------------------------------------- *
   * ACTk codec. The dump gives the layout; this gives it meaning.
   * ---------------------------------------------------------------- */
  var _f32 = new Float32Array(1);
  var _i32 = new Int32Array(_f32.buffer);
  function bitsOf(f) { _f32[0] = f; return _i32[0]; }
  function floatOf(b) { _i32[0] = b | 0; return _f32[0]; }

  /* ---- Heap access -------------------------------------------------
   * Read the WASM heap directly instead of going through ValueWrapper.
   *
   * v2.0.0 used ValueWrapper.readField and got an EMPTY survey against a live
   * game: capture worked (4/4 hooks, real pointers) but every field read came
   * back unusable, and the blanket catch(_){} made that indistinguishable from
   * "this class has no readable fields".
   *
   * v2.0.1 read the heap directly but probed only window.unityInstance /
   * unityGame / game. The field report came back with all four of those
   * "undefined" while 4/4 hooks applied - proof the game object is reachable
   * but NOT under any of those names. UWMK's own requireGame() reads those same
   * window names and yet succeeds, because Runtime.resolveGame() MEMOISES the
   * game in this._game on first success, and hook registration is what
   * populates that cache. So ask UWMK for the reference it already holds
   * instead of guessing names a third time.
   *
   * Every read reports a reason on failure instead of disappearing, and
   * HEAPU8 is re-resolved each call: Emscripten replaces it when the WASM
   * memory grows, so a cached reference goes stale mid-match.
   */
  var READS = { ok: 0, failed: 0, lastError: null, source: null };

  function unityGame() {
    // 1. The plugin's OWN runtime reference. ModkitPlugin stores the Runtime it
    //    was constructed with as _runtime, so this is provably the same object
    //    handleBuffer() ran on - no name guessing, no singleton assumptions.
    //    Field report showed window.unityInstance / unityGame / game all
    //    "undefined" and Runtime.resolveGame() returning null WHILE hooks had
    //    already fired and captured live objects, so the reference we were
    //    asking existed somewhere other than the globals we probed.
    try {
      if (plugin && plugin._runtime) {
        var pr = plugin._runtime;
        if (typeof pr.resolveGame === "function") {
          var g0 = pr.resolveGame();
          if (g0) { READS.source = "plugin._runtime.resolveGame()"; return g0; }
        }
        if (pr._game) { READS.source = "plugin._runtime._game"; return pr._game; }
      }
    } catch (_) {}
    // 2. The public accessor on the exported Runtime.
    try {
      var RT = window.UnityWebModkit && window.UnityWebModkit.Runtime;
      if (RT && typeof RT.resolveGame === "function") {
        var g = RT.resolveGame();
        if (g) { READS.source = "Runtime.resolveGame()"; return g; }
      }
      if (RT && RT._game) { READS.source = "Runtime._game"; return RT; }
    } catch (_) {}
    // 3. The conventional globals.
    try {
      var g2 = window.unityInstance || window.unityGame || window.game;
      if (g2) { READS.source = "window global"; return g2; }
    } catch (_) {}
    // 4. A bare `game` reference. A top-level let/const is a global LEXICAL
    //    binding: invisible as window.game, but still resolvable from other
    //    classic scripts, so a loader may well declare it that way.
    try {
      if (typeof game !== "undefined" && game) { READS.source = "bare game binding"; return game; }
    } catch (_) {}
    // 5. Last resort: a bounded sweep of window for anything shaped like an
    //    Emscripten module. Cheap, bounded, and it names the holder when it hits.
    try {
      var keys = Object.keys(window);
      for (var i = 0; i < keys.length && i < 600; i++) {
        var v = window[keys[i]];
        if (v && typeof v === "object" && v.Module && v.Module.HEAPU8 && v.Module.HEAPU8.buffer) {
          READS.source = "window." + keys[i] + ".Module";
          return v;
        }
      }
    } catch (_) {}
    READS.source = null;
    return null;
  }

  function heapBytes() {
    // Captured WebAssembly.Memory first - it is the only source that works when
    // the loader never exposes a game object, which is the case here.
    try {
      if (WASM_MEMORY && WASM_MEMORY.buffer && WASM_MEMORY.buffer.byteLength) {
        READS.source = READS.source || "instantiate().exports.memory";
        return new Uint8Array(WASM_MEMORY.buffer);
      }
    } catch (_) {}
    try {
      var g = unityGame();
      if (g && g.Module && g.Module.HEAPU8 && g.Module.HEAPU8.buffer) return g.Module.HEAPU8;
    } catch (_) {}
    return null;
  }

  function heapView() {
    var b = heapBytes();
    if (!b) return null;
    try { return new DataView(b.buffer, b.byteOffset, b.byteLength); } catch (_) { return null; }
  }

  // rd(addr, kind) -> number, or undefined with READS.lastError set.
  function rd(addr, kind) {
    var v = heapView();
    if (!v) {
      READS.failed++;
      READS.lastError = READS.lastError ||
        "no HEAPU8 - Unity instance not reachable via Runtime.resolveGame() or any window global";
      return undefined;
    }
    if (addr < 0 || addr + 4 > v.byteLength) {
      READS.failed++;
      READS.lastError = READS.lastError || ("address 0x" + addr.toString(16) + " past heap end 0x" + v.byteLength.toString(16));
      return undefined;
    }
    try {
      READS.ok++;
      switch (kind) {
        case "u8": return v.getUint8(addr);
        case "i8": return v.getInt8(addr);
        case "i16": return v.getInt16(addr, true);
        case "u16": return v.getUint16(addr, true);
        case "i32": return v.getInt32(addr, true);
        case "u32": return v.getUint32(addr, true);
        case "f32": return v.getFloat32(addr, true);
        case "f64": return v.getFloat64(addr, true);
        default: return v.getInt32(addr, true);
      }
    } catch (e) {
      READS.failed++;
      READS.lastError = READS.lastError || String((e && e.message) || e).slice(0, 120);
      return undefined;
    }
  }

  function wr(addr, kind, value) {
    var v = heapView();
    if (!v || addr < 0 || addr + 4 > v.byteLength) return false;
    try {
      switch (kind) {
        case "u8": case "i8": v.setUint8(addr, value & 0xff); break;
        case "i16": case "u16": v.setInt16(addr, value | 0, true); break;
        case "i32": case "u32": v.setInt32(addr, value | 0, true); break;
        case "f32": v.setFloat32(addr, value, true); break;
        default: v.setInt32(addr, value | 0, true);
      }
      return true;
    } catch (_) { return false; }
  }

  // key/hidden/inited/fake/fakeActive offsets per struct kind.
  //
  // keyType is the load-bearing detail and it was wrong for two builds.
  // ObscuredFloat and ObscuredInt both store `currentCryptoKey` as an INT, so
  // the key must be read as 4 bytes. Reading it as a byte produced 28 where
  // the real key was 444444 - and 444444 & 0xff is 28, which is why the
  // giveaway was that every field's low byte agreed while the decoded values
  // were garbage clustered around 444600. Only ObscuredBool uses a byte key.
  var LAYOUT = {
    obfF: { key: 0x00, hidden: 0x04, inited: 0x0c, fake: 0x10, active: 0x14, size: 0x18, keyType: "i32" },
    obfI: { key: 0x00, hidden: 0x04, inited: 0x08, fake: 0x0c, active: 0x10, size: 0x14, keyType: "i32" },
    obfB: { key: 0x00, hidden: 0x04, inited: 0x08, fake: 0x09, active: 0x0a, size: 0x0c, keyType: "u8" }
  };

  function hexOf(bytes) {
    var s = "";
    for (var i = 0; i < bytes.length; i++) {
      var b = bytes[i].toString(16);
      s += (b.length < 2 ? "0" : "") + b;
    }
    return s;
  }

  /* Coherent struct snapshot.
   * Reading the six components as six separate reads is not safe: ACTk re-keys
   * on decrypt, so a component can change between two of them and every value
   * derived from the mix is garbage. Copy the whole struct first, then decode
   * from that snapshot.
   */
  function snapStruct(ptr, base, size) {
    var v = heapView();
    if (!v) {
      READS.failed++;
      READS.lastError = READS.lastError ||
        "no HEAPU8 - Unity instance not reachable via Runtime.resolveGame() or any window global";
      return null;
    }
    if (base < 0 || base + size > v.byteLength) {
      READS.failed++;
      READS.lastError = READS.lastError ||
        ("address 0x" + (ptr + base).toString(16) + " past heap end 0x" + v.byteLength.toString(16));
      return null;
    }
    try {
      var out = new Uint8Array(size);
      for (var i = 0; i < size; i++) out[i] = v.getUint8(ptr + base + i);
      READS.ok++;
      return out;
    } catch (e) {
      READS.failed++;
      READS.lastError = READS.lastError || String((e && e.message) || e).slice(0, 120);
      return null;
    }
  }

  // Returns the raw components. No interpretation: the instance key is derived
  // later, from the data, rather than assumed to sit at offset 0.
  function readObfRaw(ptr, base, kind) {
    var L = LAYOUT[kind];
    var snap = snapStruct(ptr, base, L.size);
    if (!snap) return null;
    var dv = new DataView(snap.buffer, snap.byteOffset, snap.byteLength);
    var keyAtOffset0 = dv.getInt32(L.key, true);
    var hidden = dv.getInt32(L.hidden, true);
    var inited = dv.getUint8(L.inited) & 1;
    var fake = kind === "obfF" ? dv.getFloat32(L.fake, true)
             : kind === "obfI" ? dv.getInt32(L.fake, true)
             : dv.getUint8(L.fake);
    var act = dv.getUint8(L.active) & 1;
    return {
      keyAtOffset0: keyAtOffset0, hidden: hidden, inited: inited,
      fake: fake, act: act, hex: hexOf(snap),
      // ACTk encrypts with ONE key per instance, so if fake holds the true
      // value then (hidden ^ fake) must be that same key for EVERY field on
      // the object. That gives a self-checking candidate to vote on.
      alt: kind === "obfI" ? (hidden ^ (fake | 0)) : null
    };
  }

  function applyKey(kind, hidden, key) {
    if (kind === "obfF") return floatOf(hidden ^ key);
    if (kind === "obfI") return (hidden ^ key) | 0;
    return (((hidden ^ key) & 0xff) !== 0 ? 1 : 0);
  }

  // Returns null when a component read fails. Every failure is counted and
  // described rather than silently dropping the field.
  function readObf(ptr, base, kind) {
    var L = LAYOUT[kind];
    if (!L) return null;
    var key = rd(ptr + base + L.key, "u8");
    var hid = rd(ptr + base + L.hidden, "i32");
    var init = rd(ptr + base + L.inited, "u8");
    var fake = rd(ptr + base + L.fake, kind === "obfF" ? "f32" : kind === "obfI" ? "i32" : "u8");
    var act = rd(ptr + base + L.active, "u8");
    if (key === undefined || hid === undefined || fake === undefined || act === undefined) return null;
    key &= 0xff; hid |= 0; init = (init || 0) & 1; act &= 1;
    var real;
    if (kind === "obfF") real = floatOf(hid ^ key);
    else if (kind === "obfI") real = (hid ^ key) | 0;
    else real = ((hid ^ key) & 0xff) !== 0 ? 1 : 0;
    return { real: real, fake: fake, act: act, init: init, key: key, hidden: hid };
  }

  /* ---- Writing through ACTk ------------------------------------------
   * hiddenValue = value ^ currentCryptoKey, fakeValue set to the same value,
   * fakeValueActive cleared. Clearing the decoy is what makes
   * ObscuredCheatingDetector's per-frame comparison self-consistent: it reads
   * currentRawValue, which returns the decrypted value once the decoy is off.
   * Writing a decoy the detector can disagree with is how a cheat gets flagged.
   */
  function writeObfValue(ptr, base, kind, value) {
    var L = LAYOUT[kind];
    var snap = snapStruct(ptr, base, L.size);
    if (!snap) return false;
    var dv = new DataView(snap.buffer, snap.byteOffset, snap.byteLength);
    var key = L.keyType === "u8" ? dv.getUint8(L.key) : dv.getInt32(L.key, true);
    var bits;
    if (kind === "obfF") bits = bitsOf(value);
    else if (kind === "obfI") bits = (value | 0);
    else bits = ((value ? 1 : 0) & 0xff);
    return wr(ptr + base + L.hidden, "i32", bits ^ key)
        && wr(ptr + base + L.fake, kind === "obfF" ? "f32" : kind === "obfI" ? "i32" : "u8",
              kind === "obfF" ? value : kind === "obfI" ? (value | 0) : (value ? 1 : 0))
        && wr(ptr + base + L.active, "u8", 0);
  }

  /* ---- Speed ---------------------------------------------------------
   * No offsets are hardcoded. On the first field report, FPScontroller's
   * ObscuredFloats fell into two clusters: six fields reading 4.19-4.21 and
   * three reading 16.76-16.82, a ratio of 3.997 - walk speed and sprint speed.
   * Rather than trust that grouping forever, scale any inited ObscuredFloat
   * whose decrypted value is movement-plausible, which adapts if the game
   * rebalances or if this is a different weapon.
   *
   * Values are re-based whenever something other than us wrote them, so the
   * multiplier cannot compound frame over frame.
   */
  var SPEED = { on: false, factor: 1, min: 0.5, max: 50 };
  var SPEED_STATE = {};   // "ptr:offset" -> { base, lastWritten }
  var SPEED_TOUCHED = 0;

  function applySpeed(ptr) {
    var fields = SK_FIELDS.FPScontroller || [];
    for (var i = 0; i < fields.length; i++) {
      var off = fields[i][0];
      if (fields[i][1] !== "obfF") continue;
      var d = readObfRaw(ptr, off, "obfF");
      if (!d || d.inited !== 1) continue;          // never write an uninitialised struct
      var cur = applyKey("obfF", d.hidden, d.keyAtOffset0);
      if (typeof cur !== "number" || !isFinite(cur)) continue;
      if (Math.abs(cur) < SPEED.min || Math.abs(cur) > SPEED.max) continue;
      var k = ptr + ":" + off;
      var st = SPEED_STATE[k];
      // If the current value is not the one we last wrote, the game changed it
      // - rebase, or the multiplier compounds into orbit within a second.
      if (!st || cur !== st.lastWritten) st = SPEED_STATE[k] = { base: cur, lastWritten: null };
      var target = st.base * SPEED.factor;
      if (writeObfValue(ptr, off, "obfF", target)) {
        st.lastWritten = target;
        SPEED_TOUCHED++;
      }
    }
  }

  /* ---------------------------------------------------------------- *
   * Field maps generated from dump.cs by tools/gen-skillwarz-fields.mjs.
   * Shape is [[offset, kind], ...] per type. The obfuscated member names are
   * deliberately NOT shipped: they collapse to identical mojibake, so the
   * offset is the only stable identity worth reporting.
   * ---------------------------------------------------------------- */
  /*__SKILLWARZ_FIELDS_START__*/
var SK_FIELDS = {"FPScontroller":[[16,"obfF"],[40,"obfF"],[64,"obfF"],[88,"obfF"],[112,"obfF"],[136,"obfF"],[160,"obfF"],[184,"obfB"],[196,"obfF"],[220,"i32"],[236,"u8"],[240,"obfF"],[264,"i32"],[268,"u8"],[272,"i32"],[276,"u8"],[277,"u8"],[284,"obfF"],[308,"obfF"],[332,"f32"],[336,"f32"],[364,"f32"],[368,"f32"],[392,"u8"],[396,"f32"],[420,"u8"],[436,"f32"],[440,"f32"],[444,"u8"],[445,"u8"],[448,"obfF"],[472,"f32"],[476,"u8"],[480,"obfF"],[520,"obfB"],[536,"f32"],[540,"f32"],[588,"f32"],[592,"f32"],[596,"f32"],[600,"f32"],[604,"u8"],[605,"u8"],[606,"u8"],[608,"f32"],[612,"u8"],[613,"u8"],[616,"f32"],[620,"f32"],[624,"f32"],[628,"f32"],[632,"f32"],[636,"f32"],[640,"f32"],[660,"u8"],[676,"f32"],[696,"f32"],[700,"f32"],[704,"f32"],[708,"u8"],[709,"u8"],[712,"f32"],[732,"f32"],[764,"f32"],[768,"f32"],[772,"f32"],[776,"f32"],[792,"u8"],[808,"i32"],[812,"f32"],[816,"f32"],[820,"f32"],[828,"f32"],[832,"u8"],[833,"u8"],[844,"u8"],[845,"u8"],[846,"u8"],[848,"f32"],[852,"f32"],[856,"f32"],[860,"f32"],[864,"f32"],[868,"u8"],[872,"f32"],[876,"f32"],[880,"u8"],[924,"f32"],[928,"f32"],[932,"f32"],[948,"i32"],[952,"u8"],[956,"i32"],[960,"f32"],[964,"f32"],[968,"f32"],[972,"f32"],[988,"i32"],[992,"u8"],[993,"u8"],[994,"u8"],[996,"f32"],[1000,"i32"]],"HealthScript":[[88,"u8"],[92,"i32"],[128,"f32"],[132,"f32"],[136,"f32"],[140,"f32"],[144,"f32"],[148,"f32"],[160,"i32"],[164,"i32"],[168,"u8"],[169,"u8"],[170,"u8"],[171,"u8"],[192,"obfI"],[212,"obfI"],[232,"obfI"],[252,"obfI"],[272,"obfI"],[292,"obfB"],[304,"obfF"],[328,"f32"],[332,"f32"],[336,"f32"],[340,"f32"],[348,"f32"],[368,"f32"],[376,"f32"],[384,"u8"],[396,"u8"],[400,"i32"]],"PlayerConfig":[],"WeaponManager":[[24,"i32"],[28,"i32"],[32,"u8"],[36,"i32"],[100,"obfF"],[124,"f32"],[132,"i32"],[136,"u8"],[137,"u8"],[140,"i32"],[144,"f32"],[152,"f32"],[172,"i32"],[188,"u8"],[220,"obfI"],[240,"obfI"],[260,"f32"],[264,"f32"],[268,"f32"],[280,"f32"],[288,"f32"],[296,"u8"],[300,"obfI"],[320,"obfI"],[340,"obfI"],[360,"obfB"],[372,"obfB"],[384,"obfB"],[396,"obfB"],[420,"obfB"],[432,"obfI"],[460,"i32"],[464,"u8"],[468,"i32"],[472,"i32"],[512,"i32"],[532,"u8"],[540,"u8"],[541,"u8"],[542,"u8"],[543,"u8"],[592,"i32"],[600,"u8"]],"GG_GameManager":[[36,"u8"],[44,"f32"],[68,"u8"],[69,"u8"],[72,"f32"],[76,"f32"],[80,"i32"],[84,"i32"],[88,"u8"],[116,"u8"],[120,"f32"],[124,"f32"],[144,"i32"],[148,"u8"],[180,"i32"],[188,"i32"],[192,"i32"],[232,"obfI"],[252,"obfI"],[272,"obfI"],[300,"u8"],[304,"i32"],[356,"u8"],[368,"f32"],[384,"u8"],[392,"u8"],[420,"u8"],[424,"i32"],[428,"f32"],[432,"u8"],[433,"u8"],[440,"i32"],[444,"i32"],[448,"f32"],[452,"i32"],[456,"f32"],[460,"i32"],[464,"i32"]]};
/*__SKILLWARZ_FIELDS_END__*/

  /* ---------------------------------------------------------------- *
   * Hooking. Update() survives obfuscation on all four of these classes
   * (verified in dump.cs) and runs every frame on the local player, so one
   * prefix hook each hands us a live `this` pointer with no guessing.
   *
   * IL2CPP instance methods are (this, MethodInfo*) -> void in wasm, which
   * is exactly the signature the working kourstrike hooks use.
   * ---------------------------------------------------------------- */
  // Types to capture, and whether the hook stays on once it has fired. The
  // local player object is rebuilt on respawn, so those hooks stay armed and
  // simply notice when the pointer changes.
  // (CAPTURE is declared above, next to HOOKS, because armUwmk() needs it.)

  function captureArgs(typeName, enabled) {
    return function (self) {
      try {
        var p = self && self.val ? self.val() : 0;
        if (!p) return;
        var rec = INSTANCES[typeName];
        if (!rec || rec.ptr !== p) {
          INSTANCES[typeName] = { ptr: p, firstSeen: Date.now(), hits: 0, replaced: !!rec };
          // This callback only ever runs on the HOT path, i.e. after UWMK's
          // resolveOriginal() succeeded and cached the real function. That
          // means the game object DID resolve at that moment - so if the heap
          // is unreadable later, the reference moved rather than never having
          // existed. Worth recording once, because it is the only in-band proof.
          try {
            var h = HOOKS.filter(function (x) { return x.type === typeName; })[0];
            FIRE_PROOF = {
              type: typeName,
              atMs: Date.now() - T0,
              originalFunc: !!(h && h.hook && typeof h.hook.originalFunc === "function"),
              resolveGameAtFire: !!(unityGame()),
              gameSourceAtFire: READS.source
            };
          } catch (_) {}
        }
        INSTANCES[typeName].hits++;
        // Movement ticks here, once per frame, on the local player - the one
        // place where a speed write is guaranteed to be read back by the game
        // this frame rather than some frame later.
        if (typeName === "FPScontroller" && SPEED.on) {
          try { applySpeed(p); } catch (_) {}
        }
        if (!enabled) {
          var h = HOOKS.filter(function (x) { return x.type === typeName; })[0];
          if (h && h.hook) { try { h.hook.enabled = false; } catch (_) {} }
        }
      } catch (_) {}
    };
  }

  function registerHooks() {
    if (HOOKS.length) return true;   // idempotent: arming already did this
    if (!window.UnityWebModkit || !window.UnityWebModkit.Runtime) return false;
    var RT = window.UnityWebModkit.Runtime;
    if (!RT.plugins || !RT.plugins.length) return false;
    VW = window.UnityWebModkit.ValueWrapper;
    // Prefer the plugin createPlugin() handed back, so this cannot latch onto
    // some other plugin that registered after us.
    plugin = plugin || RT.plugins[RT.plugins.length - 1];
    if (!plugin || typeof plugin.hookPrefix !== "function") return false;

    for (var i = 0; i < CAPTURE.length; i++) {
      var spec = CAPTURE[i];
      try {
        var h = plugin.hookPrefix(
          { typeName: spec.type, methodName: "Update", params: ["i32", "i32"], returnType: undefined },
          captureArgs(spec.type, spec.keep)
        );
        HOOKS.push({ type: spec.type, hook: h, keep: spec.keep });
      } catch (e) {
        HOOK_ERRORS.push(spec.type + ": " + String((e && e.message) || e).slice(0, 160));
      }
    }
    return HOOKS.length > 0;
  }

  // UWMK assigns tableIndex during its one-shot apply pass. Hooks that never
  // received one were registered too late to be seen - a completely different
  // fault from "registered but the signature did not match", and the two are
  // indistinguishable from `applied` alone.
  function hooksResolved() {
    var n = 0;
    for (var i = 0; i < HOOKS.length; i++) {
      if (HOOKS[i].hook && HOOKS[i].hook.tableIndex !== undefined) n++;
    }
    return n;
  }

  function hooksApplied() {
    var n = 0;
    for (var i = 0; i < HOOKS.length; i++) {
      if (HOOKS[i].hook && HOOKS[i].hook.applied) n++;
    }
    return n;
  }

  /* ---------------------------------------------------------------- *
   * Survey + snapshot diff.
   * ---------------------------------------------------------------- */
  var SNAPSHOT = null;
  var DIFF = [];
  // Per-object ACTk key derivation result, reported so the decode can be
  // trusted or challenged rather than taken on faith.
  var KEY_INFO = {};
  // First time a hook callback actually fires, with proof of what was true
  // then. See captureArgs().
  var FIRE_PROOF = null;

  // className() proves a captured pointer really is the IL2CPP object we think
  // it is. If it returns null the pointer is stale or not an object header, and
  // that is a very different failure from "heap unreachable" - worth separating
  // instead of reporting both as an empty survey.
  function className(ptr) {
    try {
      if (!VW || !ptr) return null;
      var n = new VW(ptr).getClassName();
      return n === undefined ? null : n;
    } catch (_) { return null; }
  }

  function survey() {
    var out = {};
    READS.ok = 0; READS.failed = 0; READS.lastError = null;
    var types = Object.keys(SK_FIELDS);
    for (var t = 0; t < types.length; t++) {
      var typeName = types[t];
      var rec = INSTANCES[typeName];
      if (!rec || !rec.ptr) continue;
      // SK_FIELDS[typeName] is a flat [[offset, kind], ...] list.
      var fields = SK_FIELDS[typeName] || [];
      var rows = [];
      for (var i = 0; i < fields.length; i++) {
        var off = fields[i][0];
        var kind = fields[i][1];
        if (kind.indexOf("obf") === 0) {
          var d = readObfRaw(rec.ptr, off, kind);
          if (!d) continue;
          d.o = off; d.k = kind;
          rows.push(d);
        } else {
          var r = rd(rec.ptr + off, kind);
          if (r === undefined) continue;
          rows.push({ o: off, k: kind, v: r });
        }
      }
      if (rows.length) {
        var resolved = resolveKeys(rows);
        out[typeName] = resolved.rows;
        KEY_INFO[typeName] = {
          key: resolved.key, sane: resolved.sane, checked: resolved.checked,
          keyConsistent: resolved.keyConsistent, keySource: resolved.keySource
        };
      }
    }
    return out;
  }

  /* Decode with the key at offset 0, then sanity-check the result.
   *
   * The bug this replaces: the decoder read currentCryptoKey as ONE BYTE, so
   * every value came out garbage clustered near 444600 while looking
   * plausible in a JSON blob. Nothing flagged it.
   *
   * ACTk's decoy is a value jittered near the real one, so a correct decode
   * lands within a small band of the decoy. That gives an independent check
   * that costs nothing and would have caught the byte-width key immediately:
   * 444616 against a decoy of 200 is a factor of 2000, not jitter.
   */
  function resolveKeys(rows) {
    var sane = 0, checked = 0, key = null;
    for (var j = 0; j < rows.length; j++) {
      var row = rows[j];
      if (row.k.indexOf("obf") !== 0) continue;
      row.v = applyKey(row.k, row.hidden, row.keyAtOffset0);
      row.keyUsed = row.keyAtOffset0;
      row.raw = "hid=" + row.hidden + " fake=" + row.fake + (row.act ? " ACTIVE" : "") +
                " k0=" + row.keyAtOffset0 + " hex=" + row.hex;
      if (key === null) key = row.keyAtOffset0;
      checked++;
      if (looksPlausible(row)) { sane++; row.sane = true; } else { row.sane = false; }
      delete row.alt;
    }
    return {
      rows: rows, key: key, sane: sane, checked: checked,
      // ACTk keeps one key per instance PER KIND: ObscuredFloat/Int share an
      // int key, ObscuredBool has its own byte key. Comparing them together
      // reports a false mismatch on every object that has both.
      keyConsistent: consistentByKind(rows),
      keySource: "offset 0 (int-width)"
    };
  }

  function consistentByKind(rows) {
    var seen = {};
    for (var i = 0; i < rows.length; i++) {
      var r = rows[i];
      if (r.k.indexOf("obf") !== 0) continue;
      if (seen[r.k] === undefined) seen[r.k] = r.keyUsed;
      else if (seen[r.k] !== r.keyUsed) return false;
    }
    return true;
  }

  function looksPlausible(row) {
    var v = row.v;
    if (typeof v !== "number" || !isFinite(v)) return false;
    if (row.k === "obfB") return v === 0 || v === 1;
    var f = row.fake;
    if (typeof f !== "number" || !isFinite(f)) return true;   // no decoy to compare
    if (row.act === 1) {
      // Decoy active: it is a jittered copy of the real value.
      return Math.abs(v - f) <= Math.max(1, Math.abs(f) * 0.6);
    }
    return Math.abs(v) < 1e9;
  }

  function identity() {
    var o = {};
    try {
      var RT = window.UnityWebModkit && window.UnityWebModkit.Runtime;
      o.tag = (RT && RT.__sakuraTag) || null;
      o.tagMatches = !!(RT && ARM_TAG && RT.__sakuraTag === ARM_TAG);
      o.runtimeGame = RT && RT._game ? typeof RT._game : "none";
      // If these differ, window.UnityWebModkit.Runtime is not the Runtime our
      // plugin was built with - i.e. something else owns the global.
      o.pluginRuntimeIsExported = !!(plugin && plugin._runtime && plugin._runtime === RT);
      o.pluginRuntimeGame = (plugin && plugin._runtime && plugin._runtime._game) ? typeof plugin._runtime._game : "none";
    } catch (_) { o.error = String((_ && _.message) || _); }
    return o;
  }

  function globals() {
    var want = ["unityInstance", "unityGame", "game", "unityInstanceWrapper"];
    var o = {};
    for (var i = 0; i < want.length; i++) {
      var k = want[i];
      var t = typeof window[k];
      o[k] = t === "undefined" ? "undefined" : t;
    }
    var g = unityGame();
    o.gameSource = READS.source;
    try {
      o.hasModule = !!(g && g.Module);
      o.heapU8 = !!(g && g.Module && g.Module.HEAPU8);
      o.heapBytes = o.heapU8 ? g.Module.HEAPU8.length : 0;
    } catch (_) { o.hasModule = false; o.heapU8 = false; o.heapBytes = 0; }
    o.valueWrapper = typeof VW;
    return o;
  }

  function flat(sv) {
    var m = {};
    for (var typeName in sv) {
      var rows = sv[typeName];
      for (var i = 0; i < rows.length; i++) {
        m[typeName + "+0x" + rows[i].o.toString(16)] = rows[i].v;
      }
    }
    return m;
  }

  function onCommand(cmd, arg) {
    if (cmd === "speed") {
      if (arg && typeof arg.on === "boolean") SPEED.on = arg.on;
      if (arg && typeof arg.factor === "number") {
        SPEED.factor = Math.min(5, Math.max(1, arg.factor));
      }
      if (!SPEED.on) SPEED_STATE = {};
      return;
    }
    if (cmd !== "snapshot") return;
    var sv = survey();
    var now = flat(sv);
    if (!SNAPSHOT) {
      SNAPSHOT = now;
      DIFF = [];
      up("report", { report: collect() });
      return;
    }
    DIFF = [];
    for (var k in now) {
      var a = SNAPSHOT[k], b = now[k];
      if (a !== b) DIFF.push(k + ": " + a + " -> " + b);
    }
    SNAPSHOT = now;
    up("report", { report: collect() });
  }

  // F9 is the in-frame equivalent of the panel's Snapshot button.
  window.addEventListener("keydown", function (e) {
    if (e && e.code === "F9") { e.preventDefault(); onCommand("snapshot"); }
  }, true);

  /* ---------------------------------------------------------------- *
   * Report.
   * ---------------------------------------------------------------- */
  function collect() {
    var RT = (window.UnityWebModkit && window.UnityWebModkit.Runtime) || null;
    var ctx = RT && RT.il2CppContext;
    var sd = ctx && ctx.scriptData;

    var instances = {};
    var replaced = [];
    for (var t in INSTANCES) {
      instances[t] = "0x" + INSTANCES[t].ptr.toString(16);
      if (INSTANCES[t].replaced) replaced.push(t);
    }
    var classNames = {};
    for (var cn in INSTANCES) classNames[cn] = className(INSTANCES[cn].ptr);

    var sv = {};
    var surveyError = null;
    try { sv = survey(); } catch (e) { surveyError = String((e && e.message) || e); }

    var report = {
      version: VERSION,
      when: new Date().toISOString(),
      elapsedMs: Date.now() - T0,
      frame: location.href.slice(0, 120),
      host: HOST,
      frameRole: ROLE,
      uwmk: !!RT,
      il2CppContext: !!ctx,
      typeCount: sd ? Object.keys(sd).length : null,
      arm: ARM,
      assemblies: ASSEMBLIES,
      hooksTotal: HOOKS.length,
      hooksApplied: hooksApplied(),
      hooksResolved: hooksResolved(),
      hooksRegisteredAtArm: ARM.hooksRegistered || 0,
      hookErrors: HOOK_ERRORS.slice(0, 8),
      instances: instances,
      classNames: classNames,
      instancesReplaced: replaced,
      hookFireProof: FIRE_PROOF,
      survey: sv,
      actkKeys: KEY_INFO,
      surveyRows: Object.keys(sv).reduce(function (n, k) { return n + sv[k].length; }, 0),
      reads: { ok: READS.ok, failed: READS.failed, lastError: READS.lastError, source: READS.source },
      identity: identity(),
      globals: globals(),
      wasmMemory: {
        captured: !!WASM_MEMORY,
        atMs: WASM_MEMORY_AT,
        bytes: (function () {
          try { return WASM_MEMORY && WASM_MEMORY.buffer ? WASM_MEMORY.buffer.byteLength : 0; }
          catch (_) { return 0; }
        })(),
        exportKeys: WASM_EXPORT_KEYS
      },
      diff: DIFF.slice(0, 40),
      speed: { on: SPEED.on, factor: SPEED.factor, writes: SPEED_TOUCHED },
      uwmkLog: UWMK_LOG.slice(0, 20),
      warnings: []
    };
    if (surveyError) report.warnings.push("survey failed: " + surveyError);
    if (ARM.error) report.warnings.push("UWMK arming failed: " + ARM.error);

    // An empty survey must never read as "nothing to see". Name the blocker.
    if (report.surveyRows === 0 && Object.keys(report.instances).length > 0) {
      report.warnings.push(
        "captured " + Object.keys(report.instances).length + " object(s) but read 0 fields. " +
        (READS.lastError ? "Reason: " + READS.lastError : "No read failed, so every offset was skipped by type.")
      );
    }
    if (report.identity && report.identity.tagMatches === false) {
      report.warnings.push(
        "ANOTHER UWMK COPY TOOK OVER window.UnityWebModkit. The Runtime we armed was " +
        "replaced by a different instance, so we are asking the wrong object for " +
        "the game while the one holding it is orphaned. Disable every other " +
        "Sakura/UWMK script in Tampermonkey and hard-reload."
      );
    }
    if (report.identity && report.identity.pluginRuntimeIsExported === false) {
      report.warnings.push(
        "plugin._runtime is not window.UnityWebModkit.Runtime - the plugin was built " +
        "against a different Runtime instance than the global now exposes."
      );
    }
    if (report.globals && !report.globals.heapU8) {
      var extra = "";
      if (report.hookFireProof) {
        extra = " A hook fired at " + report.hookFireProof.atMs + "ms with originalFunc=" +
          report.hookFireProof.originalFunc + " and game resolved=" +
          report.hookFireProof.resolveGameAtFire +
          " (source: " + (report.hookFireProof.gameSourceAtFire || "none") +
          "), so the reference existed then and is not reachable now.";
      }
      report.warnings.push(
        "Unity instance not resolved yet (source: " + (report.globals.gameSource || "none") + "). " +
        "Heap reads stay blocked until a game object with Module.HEAPU8 is reachable." + extra
      );
    }
    if (report.globals && !report.globals.valueWrapper || report.globals.valueWrapper === "undefined") {
      report.warnings.push("window.UnityWebModkit.ValueWrapper is missing - capture is running blind.");
    }

    // The single most likely cause of "hooked but nothing captured": the
    // signature did not match, so Update() was never wrapped.
    if (report.hooksTotal > 0 && report.hooksApplied === 0 && sd) {
      if (report.hooksResolved === 0) {
        report.warnings.push(
          "0 of " + report.hooksTotal + " hooks were even SEEN by UWMK. The apply pass " +
          "runs once during WebAssembly.instantiate and snapshots plugin.hooks.length, " +
          "so hooks registered after it are ignored for the life of the page. " +
          "Registered " + report.hooksRegisteredAtArm + " hook(s) during arming at document-start."
        );
      } else {
        report.warnings.push(
          "UWMK resolved " + report.hooksResolved + " of " + report.hooksTotal +
          " hook(s) to a table index but applied none. The signature " +
          "(this, MethodInfo*) -> void does not match this build."
        );
      }
    }
    if (report.hooksApplied > 0 && !report.instances.FPScontroller) {
      report.warnings.push(
        "Hooks are applied but no FPScontroller has fired yet. " +
        "Either you are not in a round, or the hook is on the wrong overload."
      );
    }
    if (report.instancesReplaced.length) {
      report.warnings.push("rebuilt since first capture (respawn?): " + report.instancesReplaced.join(", "));
    }
    return report;
  }

  function emit(report) {
    console.log("%c[sakura] SkillWarz report", "color:" + ACCENT + ";font-weight:700", report);
    console.log(MARK0 + "\n" + JSON.stringify(report, null, 1) + "\n" + MARK1);
    up("report", { report: report });
  }

  function safeCollect() {
    try { return collect(); }
    catch (err) {
      return {
        version: VERSION, when: new Date().toISOString(), elapsedMs: Date.now() - T0,
        host: HOST, uwmk: !!(window.UnityWebModkit && window.UnityWebModkit.Runtime),
        il2CppContext: false, arm: ARM, hooksTotal: HOOKS.length, hooksApplied: 0,
        instances: {}, survey: {}, collectError: String((err && err.message) || err)
      };
    }
  }

  function run() {
    // Hooks are registered during arming, at document-start, because UWMK's
    // apply pass runs exactly once inside WebAssembly.instantiate and ignores
    // anything registered later. The retry below is only a safety net for the
    // case where arming ran before the Runtime existed.
    var ticks = 0;
    emit(safeCollect());
    (function poll() {
      if (!HOOKS.length) {
        try { registerHooks(); } catch (_) {}
      }
      ticks++;
      // Fast heartbeat once we are live so the value table actually moves;
      // slow heartbeat while UWMK is still downloading metadata.
      emit(safeCollect());
      if (!HOOKS.length && ticks < 300) setTimeout(poll, 2000);
      else if (!Object.keys(INSTANCES).length && ticks < 300) setTimeout(poll, 2000);
      else setTimeout(poll, 1200);
    })();
  }

  if (document.body) run();
  else document.addEventListener("DOMContentLoaded", run, { once: true });
})();