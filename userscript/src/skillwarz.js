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
  var VERSION = "2.9.2";

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
      // v2.2.2 relayed UPWARD ONLY, which is why every panel control stayed dead
      // even after the postMessage "fix". The portal's direct child iframe is
      // THIS wrapper, not the player - the real Unity document is a grandchild.
      // So the portal posted the command into the wrapper and the wrapper threw
      // it away, because commands are what it has never forwarded. Relaying down
      // too costs one loop and makes the panel controls survive the real nesting.
      if (d && d.kind === "cmd") {
        try {
          var kids = document.querySelectorAll("iframe");
          for (var i = 0; i < kids.length; i++) {
            try {
              if (kids[i].contentWindow) kids[i].contentWindow.postMessage(d, "*");
            } catch (_) {}
          }
        } catch (_) {}
      }
    });
    console.log("%c[sakura] SW-WRAPPER ACTIVE (relay up+down)", "color:" + ACCENT);
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
      // BroadcastChannel is ORIGIN-SCOPED. The portal posts on
      // www.crazygames.com while the game runs on
      // *.game-files.crazygames.com, so a BroadcastChannel message never
      // crosses. That is why the speed toggle silently did nothing in v2.1.0
      // while every single-frame test passed.
      //
      // postMessage to the frame's contentWindow DOES cross origins - you may
      // not read a cross-origin document, but you may post into it.
      try {
        var frames = document.querySelectorAll("iframe");
        for (var i = 0; i < frames.length; i++) {
          try {
            if (frames[i].contentWindow) frames[i].contentWindow.postMessage(msg, "*");
          } catch (_) {}
        }
      } catch (_) {}
      // Same-origin fallback: covers local testing and any host where the game
      // does end up same-origin.
      try {
        var bc = new BroadcastChannel("sakura-sw");
        bc.postMessage(msg);
        setTimeout(function () { try { bc.close(); } catch (_) {} }, 250);
      } catch (_) {}
    }

    // Remembered across reloads. The panel used to "not hide": X removed the
    // node, then the very next report called ensureRoot(), getElementById
    // returned null because the node was gone, and the panel rebuilt itself -
    // every 1.2 seconds, forever. Nothing was wrong with the button; the
    // removal was simply not recorded anywhere.
    var HIDE_KEY = "sakura-sw-panel-hidden";
    function isHidden() {
      try { return localStorage.getItem(HIDE_KEY) === "1"; } catch (_) { return false; }
    }
    function setHidden(v) {
      try { v ? localStorage.setItem(HIDE_KEY, "1") : localStorage.removeItem(HIDE_KEY); } catch (_) {}
      try { var el = document.getElementById("sakura-sw-v2"); if (el) el.remove(); } catch (_) {}
      try {
        var tab = document.getElementById("sakura-sw-v2-tab");
        if (v && !tab && document.body) {
          var t = document.createElement("div");
          t.id = "sakura-sw-v2-tab";
          t.style.cssText =
            "position:fixed;left:12px;top:12px;z-index:2147482999;cursor:pointer;user-select:none;" +
            "background:rgba(21,12,29,.9);border:1px solid rgba(255,143,177,.5);color:" + ACCENT + ";" +
            "border-radius:999px;padding:4px 12px;font:11px/1.4 ui-monospace,Consolas,monospace;";
          t.textContent = "sakura";
          t.onclick = function () { setHidden(false); panel(); };
          document.body.appendChild(t);
        } else if (!v && tab) {
          tab.remove();
        }
      } catch (_) {}
    }

    function ensureRoot() {
      // The guard that was missing: a removed panel must stay removed.
      if (isHidden()) return null;
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
        // The panel is pinned over the game, so it starts COLLAPSED to a small tab.
// A 620px, 78vh panel sitting on top of the thing it is inspecting is a panel
// nobody can play past.
"position:fixed;left:12px;top:12px;z-index:2147483000;max-width:min(52vw,620px);max-height:78vh;" +
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
        '<button id="sw2-toggle" style="background:transparent;border:1px solid rgba(255,143,177,.4);color:#f7eef5;border-radius:7px;padding:4px 8px;cursor:pointer;">open</button>' +
        '<button id="sw2-x" style="background:transparent;border:1px solid rgba(255,143,177,.4);color:#f7eef5;border-radius:7px;padding:4px 8px;cursor:pointer;">x</button>' +
        '</div>' +
        '<div id="sw2-body" style="display:none;">' +
        '<div style="padding:8px 12px;border-bottom:1px solid rgba(255,143,177,.18);display:flex;gap:8px;align-items:center;flex:0 0 auto;flex-wrap:wrap;">' +
        '<button id="sw2-speed" style="background:transparent;border:1px solid rgba(255,143,177,.4);color:#f7eef5;border-radius:7px;padding:4px 10px;cursor:pointer;">Speed off</button>' +
        '<input id="sw2-factor" type="range" min="1" max="5" step="0.1" value="1" style="width:120px;accent-color:' + ACCENT + ';">' +
        '<span id="sw2-factorlabel" style="color:#bda9c9;min-width:34px;">1.0x</span>' +
        '<button id="sw2-snap" style="background:transparent;border:1px solid rgba(255,143,177,.4);color:#f7eef5;border-radius:7px;padding:4px 9px;cursor:pointer;">Snapshot (F9)</button>' +
        '<span id="sw2-hint" style="color:#8d7a99">F9 twice while walking / sprinting / jumping marks which field is which.</span>' +
        '</div>' +
        '<pre id="sw2-out" style="margin:0;padding:10px 12px;overflow:auto;flex:1 1 auto;white-space:pre-wrap;word-break:break-word;font:inherit;' +
        'max-height:62vh;">No report yet.\n\nThis panel updates itself when the game frame loads — no console needed.\n\nIf it stays empty, Tampermonkey is not injecting into the cross-origin game frame.</pre>' +
        '</div>';

      var statusEl = root.querySelector("#sw2-status");
      var buildEl = root.querySelector("#sw2-build");
      var outEl = root.querySelector("#sw2-out");
      var copyBtn = root.querySelector("#sw2-copy");
      var closeBtn = root.querySelector("#sw2-x");
      var toggleBtn = root.querySelector("#sw2-toggle");
      var bodyEl = root.querySelector("#sw2-body");
      var snapBtn = root.querySelector("#sw2-snap");
      var speedBtn = root.querySelector("#sw2-speed");
      var factorEl = root.querySelector("#sw2-factor");
      var factorLabel = root.querySelector("#sw2-factorlabel");
      var hintEl = root.querySelector("#sw2-hint");
      var payload = null;

      // Collapsed by default: the header pill and nothing else. Opening it is
      // one click; it never has to be fought with.
      var open = false;
      function layout() {
        if (bodyEl) bodyEl.style.display = open ? "" : "none";
        if (toggleBtn) toggleBtn.textContent = open ? "close" : "open";
        root.style.width = open ? "min(52vw,620px)" : "auto";
        root.style.background = open ? "#150c1d" : "rgba(21,12,29,.9)";
      }
      if (toggleBtn) toggleBtn.onclick = function () { open = !open; layout(); };
      layout();
      if (closeBtn) closeBtn.onclick = function () { setHidden(true); };
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

    // Hidden by default. The in-frame Sakura menu does everything this did -
    // including copying the JSON - so the only reason for a second, differently
    // styled strip on the CrazyGames page is to be another thing to look at.
    // The sakura tab brings it back if someone wants a report without entering a
    // game.
    function boot() {
      setHidden(true);
    }
    if (document.body) boot();
    else document.addEventListener("DOMContentLoaded", boot, { once: true });
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
  // Commands arrive two ways, because neither channel covers every case on its
// own: postMessage from the portal (the only one that crosses origins) and
// BroadcastChannel (same-origin / local testing).
  window.addEventListener("message", function (ev) {
    try {
      var d = ev && ev.data;
      if (!d || d.__sakura !== CHANNEL || d.kind !== "cmd") return;
      onCommand(d.cmd, d.arg);
    } catch (_) {}
  });

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
    // ---- per-player capture, rebuilt from dump.cs after a field report ----
    //
    // Both original ESP targets resolved and applied (hooksResolved 5/5) and
    // neither ever fired - not a signature problem, the instances did not exist.
    // The dump explains why, and also answers "why not players":
    //
    //  * GG_GameManager is the BASE class. Team Deathmatch uses
    //    TDM_GameManager, a separate class with its own Camera at +0x2C and
    //    List<Player> at +0x50. Nothing ever instantiates the base.
    //  * EnemyBot is a bot's brain. Bots are not networked, so there is no
    //    Photon component for them at all.
    //  * PhotonNetworkSync is THE per-player component - one instance per
    //    player, local AND remote, Update() every frame, carrying a
    //    HealthScript at +0x20, an FPScontroller at +0x28 (remote players use
    //    the same controller class the local player does) and three inline
    //    world Vector3s at +0x34, +0x48 and +0x6C.
    //  * NPC_Cotroller is a bot's body: three world Vector3s, a CapsuleCollider
    //    and its own HealthScript at +0xD0. Still needed, for bots.
    //
    // Transform and CapsuleCollider expose no IL2CPP fields at all - properties
    // only, backed by native memory - so a Transform pointer is useless and the
    // inline Vector3s are the only position source that actually resolves.
    { type: "TDM_GameManager", keep: true },
    { type: "GG_GameManager", keep: true },
    { type: "PhotonNetworkSync", keep: true, many: true },
    { type: "NetworkPlayerAnimations", keep: true, many: true },
    { type: "NPC_Cotroller", keep: true, many: true },
    { type: "EnemyBot", keep: true, many: true }
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
        // Vector kinds are INLINE: 2/3/4 consecutive floats starting here.
        // They must not fall through to the int default - a field report came
        // back with v3 values like 1100591942, which is an int read of a float
        // triple, not a coordinate.
        case "v2": case "v3": case "v4": return v.getFloat32(addr, true);
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

  /* SELECTING THE RIGHT FIELDS - the "hella tall" bug.
   *
   * The first implementation scaled every inited ObscuredFloat that decoded
   * inside [0.5, 50]. On FPScontroller that range also contains 1.75, 1.05 and
   * 0.62 - a jump height and two step offsets. Scaling them doubled jump and
   * step while doing nothing useful horizontally, which the player correctly
   * described as "it just made me hella tall". A magnitude window is the wrong
   * discriminator; a magnitude window wide enough to hold a 4.2 walk speed
   * always holds a 1.75 jump too.
   *
   * What actually separates them is that movement speed is REDUNDANT. Every
   * field report carries five ObscuredFloats reading 4.19-4.21 and three
   * reading 16.76-16.82: walk and sprint, each replicated because the game keeps
   * several copies. The height and step fields are single numbers with nothing
   * agreeing with them. So: group the decoded floats by agreement and scale only
   * the groups that have company.
   *
   * The floor is derived, not hardcoded - half the smallest agreeing group.
   * A rebalance that moves walk speed to 2.5 still scales; a jump height
   * doubled or not is never a multiple of that group's magnitude by accident.
   */
  var SPEED_TOL = 0.03;          // 3%. The two real clusters span 0.5%.
  var SPEED_MIN_MEMBERS = 2;     // "has company"
  var SPEED_STATE = {};          // "ptr:offset" -> { base, lastWritten }
  var SPEED_TOUCHED = 0;
  var SPEED_SCALED = [];         // offsets written this frame
  var SPEED_SKIPPED = [];        // { o, v, why } for everything deliberately left alone

  function applySpeed(ptr) {
    var fields = SK_FIELDS.FPScontroller || [];
    var cands = [];
    SPEED_SKIPPED = [];
    SPEED_SCALED = [];

    for (var i = 0; i < fields.length; i++) {
      var off = fields[i][0];
      if (fields[i][1] !== "obfF") continue;
      var d = readObfRaw(ptr, off, "obfF");
      if (!d || d.inited !== 1) continue;          // never write an uninitialised struct
      var cur = applyKey("obfF", d.hidden, d.keyAtOffset0);
      if (typeof cur !== "number" || !isFinite(cur)) continue;
      var key = ptr + ":" + off;
      var st = SPEED_STATE[key];
      // If the current value is not the one we last wrote, the game changed it -
      // rebase, or the multiplier compounds into orbit within a second.
      if (!st || cur !== st.lastWritten) st = SPEED_STATE[key] = { base: cur, lastWritten: null };
      // GROUP ON THE BASE, NOT ON WHAT WE LAST WROTE.
      //
      // This was a live bug, visible in a field report at 5x: the sprint fields
      // read 84, so a fourth sprint field holding 16.8 had no company left and
      // was refused as a "singleton". Grouping on our own output is circular -
      // the harder you push the multiplier, the more real speed fields fall out
      // of the cluster. st.base is the value the GAME wrote and never moves.
      var b = st.base;
      var a = Math.abs(b);
      // Generous enough that a real speed is never discarded before grouping;
      // the grouping is what decides, not this.
      if (a < 1e-4 || a > 1e5) { SPEED_SKIPPED.push({ o: off, v: cur, why: "implausible" }); continue; }
      cands.push({ o: off, v: cur, a: a, base: b, key: key, st: st });
    }

    // Group by agreement. Each group keeps the running mean so a chain of
    // values (4.190, 4.196, 4.211) cannot straddle the tolerance and split.
    var groups = [];
    for (var c = 0; c < cands.length; c++) {
      var ca = cands[c].a, g = null;
      for (var k = 0; k < groups.length; k++) {
        var ratio = groups[k].mean / ca;
        if (ratio > 1 - SPEED_TOL && ratio < 1 + SPEED_TOL) { g = groups[k]; break; }
      }
      if (!g) { g = { mean: ca, members: [] }; groups.push(g); }
      g.members.push(cands[c]);
      g.mean = 0;
      for (var m = 0; m < g.members.length; m++) g.mean += g.members[m].a;
      g.mean /= g.members.length;
    }

    var real = [];
    for (var gi = 0; gi < groups.length; gi++) {
      if (groups[gi].members.length >= SPEED_MIN_MEMBERS) real.push(groups[gi]);
    }
    if (!real.length) {
      // Say so instead of doing nothing quietly. This project's recurring
      // failure shape is a filter that silently matches nothing.
      SPEED_SKIPPED.push({ o: -1, v: 0, why: "no group of " + SPEED_MIN_MEMBERS + " ObscuredFloats agreed" });
      return;
    }

    var smallest = real[0].mean;
    for (var s = 0; s < real.length; s++) if (real[s].mean < smallest) smallest = real[s].mean;
    var floor = smallest * 0.5;

    // Groups without company are recorded, not merely passed over. Skipping
    // them silently is how the height and step fields ended up multiplied
    // without anyone noticing - and how the fix could not be verified from a
    // report.
    for (var si = 0; si < groups.length; si++) {
      if (groups[si].members.length >= SPEED_MIN_MEMBERS) continue;
      for (var ui = 0; ui < groups[si].members.length; ui++) {
        SPEED_SKIPPED.push({ o: groups[si].members[ui].o, v: groups[si].members[ui].v, why: "singleton" });
      }
    }

    for (var r = 0; r < real.length; r++) {
      var members = real[r].members;
      for (var mi = 0; mi < members.length; mi++) {
        var f = members[mi];
        if (f.a < floor) {
          SPEED_SKIPPED.push({ o: f.o, v: f.v, why: "below floor " + floor.toFixed(2) });
          continue;
        }
        var target = f.base * SPEED.factor;
        if (writeObfValue(ptr, f.o, "obfF", target)) {
          // fround, and this is not cosmetic. The heap stores 32-bit floats, so
          // a read-back yields Math.fround(target). Storing the un-rounded double
          // made `cur !== st.lastWritten` true on EVERY frame for any value that
          // is not exactly representable, which re-based the base each frame and
          // compounded the multiplier: 16.7568 * 5 = 83.784 -> f32 83.7839965
          // != 83.7839969 -> rebase -> *5 -> 418.92 -> and climbing. A field
          // report had stayed at exactly 84 only because 4.2117 * 5 happened to
          // round-trip bit-for-bit. One more frame of luck and the player is
          // travelling at 10^40.
          f.st.lastWritten = Math.fround(target);
          SPEED_TOUCHED++;
          SPEED_SCALED.push("0x" + f.o.toString(16));
        }
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
var SK_FIELDS = {"FPScontroller":[[16,"obfF"],[40,"obfF"],[64,"obfF"],[88,"obfF"],[112,"obfF"],[136,"obfF"],[160,"obfF"],[184,"obfB"],[196,"obfF"],[220,"i32"],[224,"v3"],[236,"u8"],[240,"obfF"],[264,"i32"],[268,"u8"],[272,"i32"],[276,"u8"],[277,"u8"],[284,"obfF"],[308,"obfF"],[332,"f32"],[336,"f32"],[340,"v3"],[352,"v3"],[364,"f32"],[368,"f32"],[392,"u8"],[396,"f32"],[408,"v3"],[420,"u8"],[436,"f32"],[440,"f32"],[444,"u8"],[445,"u8"],[448,"obfF"],[472,"f32"],[476,"u8"],[480,"obfF"],[504,"v3"],[520,"obfB"],[536,"f32"],[540,"f32"],[588,"f32"],[592,"f32"],[596,"f32"],[600,"f32"],[604,"u8"],[605,"u8"],[606,"u8"],[608,"f32"],[612,"u8"],[613,"u8"],[616,"f32"],[620,"f32"],[624,"f32"],[628,"f32"],[632,"f32"],[636,"f32"],[640,"f32"],[644,"v3"],[660,"u8"],[664,"v3"],[676,"f32"],[684,"v3"],[696,"f32"],[700,"f32"],[704,"f32"],[708,"u8"],[709,"u8"],[712,"f32"],[732,"f32"],[740,"v3"],[752,"v3"],[764,"f32"],[768,"f32"],[772,"f32"],[776,"f32"],[780,"v3"],[792,"u8"],[796,"v3"],[808,"i32"],[812,"f32"],[816,"f32"],[820,"f32"],[828,"f32"],[832,"u8"],[833,"u8"],[844,"u8"],[845,"u8"],[846,"u8"],[848,"f32"],[852,"f32"],[856,"f32"],[860,"f32"],[864,"f32"],[868,"u8"],[872,"f32"],[876,"f32"],[880,"u8"],[888,"v3"],[900,"v3"],[912,"v3"],[924,"f32"],[928,"f32"],[932,"f32"],[936,"v3"],[948,"i32"],[952,"u8"],[956,"i32"],[960,"f32"],[964,"f32"],[968,"f32"],[972,"f32"],[976,"v3"],[988,"i32"],[992,"u8"],[993,"u8"],[994,"u8"],[996,"f32"],[1000,"i32"]],"HealthScript":[[88,"u8"],[92,"i32"],[128,"f32"],[132,"f32"],[136,"f32"],[140,"f32"],[144,"f32"],[148,"f32"],[160,"i32"],[164,"i32"],[168,"u8"],[169,"u8"],[170,"u8"],[171,"u8"],[192,"obfI"],[212,"obfI"],[232,"obfI"],[252,"obfI"],[272,"obfI"],[292,"obfB"],[304,"obfF"],[328,"f32"],[332,"f32"],[336,"f32"],[340,"f32"],[348,"f32"],[352,"v3"],[368,"f32"],[376,"f32"],[384,"u8"],[396,"u8"],[400,"i32"]],"PlayerConfig":[],"WeaponManager":[[24,"i32"],[28,"i32"],[32,"u8"],[36,"i32"],[100,"obfF"],[124,"f32"],[132,"i32"],[136,"u8"],[137,"u8"],[140,"i32"],[144,"f32"],[152,"f32"],[172,"i32"],[188,"u8"],[220,"obfI"],[240,"obfI"],[260,"f32"],[264,"f32"],[268,"f32"],[280,"f32"],[288,"f32"],[296,"u8"],[300,"obfI"],[320,"obfI"],[340,"obfI"],[360,"obfB"],[372,"obfB"],[384,"obfB"],[396,"obfB"],[420,"obfB"],[432,"obfI"],[460,"i32"],[464,"u8"],[468,"i32"],[472,"i32"],[512,"i32"],[532,"u8"],[540,"u8"],[541,"u8"],[542,"u8"],[543,"u8"],[592,"i32"],[600,"u8"]],"GG_GameManager":[[36,"u8"],[44,"f32"],[68,"u8"],[69,"u8"],[72,"f32"],[76,"f32"],[80,"i32"],[84,"i32"],[88,"u8"],[116,"u8"],[120,"f32"],[124,"f32"],[144,"i32"],[148,"u8"],[180,"i32"],[188,"i32"],[192,"i32"],[232,"obfI"],[252,"obfI"],[272,"obfI"],[300,"u8"],[304,"i32"],[356,"u8"],[368,"f32"],[384,"u8"],[392,"u8"],[420,"u8"],[424,"i32"],[428,"f32"],[432,"u8"],[433,"u8"],[440,"i32"],[444,"i32"],[448,"f32"],[452,"i32"],[456,"f32"],[460,"i32"],[464,"i32"]],"TDM_GameManager":[[24,"u8"],[32,"u8"],[33,"u8"],[36,"f32"],[88,"u8"],[92,"f32"],[96,"f32"],[100,"i32"],[104,"i32"],[108,"u8"],[109,"u8"],[112,"f32"],[116,"f32"],[120,"i32"],[140,"u8"],[144,"obfI"],[216,"obfI"],[236,"obfI"],[256,"obfI"],[276,"u8"],[348,"u8"],[352,"i32"],[364,"u8"],[388,"u8"],[392,"f32"],[396,"i32"],[400,"i32"],[404,"f32"],[408,"i32"],[412,"i32"],[416,"f32"],[420,"f32"],[424,"i32"],[432,"u8"],[433,"u8"],[440,"f32"]],"PhotonNetworkSync":[[52,"v3"],[64,"i32"],[68,"u8"],[69,"u8"],[72,"v3"],[84,"u8"],[88,"i32"],[92,"i32"],[96,"f32"],[100,"f32"],[104,"f32"],[108,"v3"],[120,"f32"],[124,"f32"],[128,"i32"],[136,"f32"]],"MouseLook":[[20,"f32"],[24,"f32"],[28,"f32"],[32,"f32"],[36,"f32"],[40,"f32"],[48,"f32"],[52,"u8"],[56,"f32"],[60,"f32"],[64,"i32"],[68,"u8"],[72,"v2"]],"NetworkPlayerAnimations":[[168,"v3"],[180,"v3"],[192,"u8"],[196,"i32"],[200,"i32"],[204,"f32"],[208,"f32"],[220,"f32"],[224,"f32"],[232,"f32"],[236,"f32"],[240,"f32"],[244,"f32"],[248,"f32"],[252,"f32"],[256,"f32"],[260,"f32"],[264,"i32"],[268,"u8"],[272,"i32"],[276,"i32"],[280,"u8"],[284,"f32"],[288,"f32"],[292,"f32"],[296,"f32"],[300,"u8"],[312,"u8"],[316,"v3"],[328,"v3"],[404,"u8"]],"NPC_Cotroller":[[20,"v3"],[32,"f32"],[36,"f32"],[86,"u8"],[87,"u8"],[92,"v3"],[156,"u8"],[160,"f32"],[164,"f32"],[184,"f32"],[188,"f32"],[200,"u8"],[204,"f32"],[216,"f32"],[220,"f32"],[224,"f32"],[228,"u8"],[236,"f32"],[240,"v3"],[252,"f32"],[256,"i32"],[260,"f32"],[264,"f32"],[268,"f32"],[276,"v3"],[288,"f32"],[292,"f32"],[308,"v3"],[324,"u8"],[328,"f32"],[336,"v3"],[352,"i32"],[364,"i32"],[368,"f32"],[372,"u8"],[376,"v4"],[392,"f32"],[396,"f32"],[400,"f32"],[408,"u8"],[416,"i32"]],"TargetHealth":[[16,"i32"],[20,"i32"],[52,"u8"],[68,"i32"],[72,"i32"],[76,"i32"],[80,"i32"],[132,"f32"],[140,"f32"],[144,"u8"],[148,"f32"],[164,"u8"],[168,"i32"],[172,"i32"],[192,"f32"],[204,"u8"]],"SectatorCamera":[[20,"f32"],[24,"f32"],[28,"f32"],[32,"v3"],[44,"v3"],[72,"i32"],[76,"i32"],[80,"f32"],[84,"i32"],[88,"f32"],[92,"u8"],[96,"v3"],[108,"v4"],[124,"u8"],[128,"i32"]],"UISettings":[[32,"i32"],[40,"f32"],[324,"u8"],[328,"i32"],[340,"i32"],[344,"i32"],[348,"u8"],[349,"u8"],[350,"u8"],[351,"u8"],[352,"u8"],[353,"u8"],[354,"u8"],[444,"f32"],[452,"f32"],[536,"u8"],[640,"f32"],[672,"i32"],[760,"u8"],[924,"u8"],[928,"v2"],[936,"v2"],[944,"u8"],[952,"u8"],[972,"f32"],[976,"v3"],[992,"f32"],[996,"f32"],[1000,"f32"],[1008,"u8"],[1009,"u8"],[1012,"i32"],[1024,"i32"],[1028,"i32"],[1032,"i32"],[1036,"i32"],[1040,"i32"],[1044,"i32"],[1048,"i32"],[1052,"i32"],[1056,"i32"],[1108,"u8"],[1109,"u8"],[1110,"u8"],[1111,"u8"],[1164,"f32"]]};
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

  // Enemy entities are many, not one. ESP needs all of them, so types flagged
  // `many` accumulate into a list keyed by pointer.
  //
  // Declared HERE, next to the code that uses it. It was referenced from
  // captureArgs before being declared, and under "use strict" that is a
  // ReferenceError - which the callback's own try/catch swallowed, so every
  // capture silently stopped and the survey came back empty for no visible
  // reason. Same shape of bug as CAPTURE vs armUwmk earlier in this thread.
  var ENEMIES = {};

  // EVERY pointer any hook has ever handed us, per type, including the
  // single-slot types.
  //
  // This exists because of a question worth asking: "why not players?" FPScontroller
  // is on EVERY player - local and remote - so a single capture slot for it
  // silently flips between them as their Update() calls interleave, and a
  // report cannot tell that it is happening. One slot is fine for the speed
  // hack; it is hopeless for ESP. SEEN keeps the whole set so the report can
  // show how many players exist, which is the question actually being asked.
  var SEEN = {};

  function captureArgs(typeName, enabled, many) {
    return function (self) {
      try {
        var p = self && self.val ? self.val() : 0;
        if (!p) return;
        // Every hook, every type, into SEEN - before the many/single split.
        var bucket = SEEN[typeName] || (SEEN[typeName] = {});
        var seen = bucket[p];
        if (!seen) seen = bucket[p] = { ptr: p, firstSeen: Date.now(), hits: 0 };
        seen.hits++;
        if (many) {
          // Enemy entities are many, not one. ESP needs every one of them.
          if (!ENEMIES[p]) ENEMIES[p] = { ptr: p, kind: typeName, firstSeen: Date.now(), hits: 0 };
          ENEMIES[p].hits++;
        } else {
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
        } // end !many
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
          captureArgs(spec.type, spec.keep, spec.many)
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

  /* ---- ESP / aimbot reconnaissance -----------------------------------
 * Everything needed to draw ESP is in this build; the one thing that is not
 * is a world-to-screen projection, and that is the only remaining blocker.
 *
 * Found by reading the dump:
 *   EnemyBot : MonoBehaviour with Update() preserved  -> hookable, many
 *              +0x14 Transform ref, +0x24 inline Vector3 (world position)
 *   GG_GameManager (already captured)
 *              +0x14 Camera, +0x5C List<Player>
 *
 * The projection gap: Transform exposes no IL2CPP fields - Unity keeps the
 * position natively - and Plugin.call() is permanently dead here because it
 * starts with resolveGame(), which this loader never satisfies. So the camera
 * pointer is reachable but its transform is not, without either a hooked call
 * or a guessed FOV.
 *
 * A guessed signature is not an option: registering a hook whose params do not
 * match a real WASM type gets type index -1, which fails module validation and
 * stops the game booting. So instead of guessing, read internalWasmTypes after
 * instantiate and report which shapes actually exist. That makes the next
 * hook a decision instead of a gamble.
 */
  function readVec(ptr, off, n) {
    var v = heapView();
    if (!v) return null;
    if (off < 0 || off + n * 4 > v.byteLength) return null;
    var a = [];
    for (var i = 0; i < n; i++) a.push(v.getFloat32(ptr + off + i * 4, true));
    READS.ok += n;
    return a;
  }

  /* Reference fields worth decoding per type. Offsets come from dump.cs and mean
     something specific - this is the part that turns a pointer dump into a
     player list. All of them are verified types, never guessed offsets.
       PhotonNetworkSync  +0x10 PhotonView  +0x20 HealthScript
                          +0x24 Transform  +0x28 FPScontroller  +0x5C int
       NPC_Cotroller      +0x98 CapsuleCollider  +0xD0 HealthScript
                          +0xB4/+0xD4 TargetHealth
       EnemyBot           +0x14 Transform
  Transform and CapsuleCollider are read as opaque pointers: they expose no
  IL2CPP fields, so the pointer identifies the object but reveals nothing
  inside it. */
  var REFS = {
    PhotonNetworkSync:    [["0x10", "photonView"], ["0x20", "health"], ["0x24", "transform"], ["0x28", "fps"], ["0x30", "mouseLook"]],
    NetworkPlayerAnimations: [["0x10", "capsule"], ["0x18", "sync"]],
    NPC_Cotroller:        [["0x98", "capsule"], ["0xb4", "targetHealth"], ["0xd0", "health"], ["0xd4", "targetHealth2"], ["0xe8", "transform"]],
    EnemyBot:             [["0x14", "transform"]]
  };

  /* Plain (non-pointer) scalars that carry meaning, read straight through.
     PhotonNetworkSync+0x58 read 2 or 3 across eight players and split them 4/4
     with the local player in the 2-group - which is what a 4v4 Team Deathmatch
     roster looks like. +0x7C read 10 for every remote and 5 for the local one,
     which is a second, independent way to spot ourselves.
     Both are reported as observations with the evidence attached, not asserted
     as fact: an integer that partitions cleanly is evidence, not proof. */
  var SCALARS = {
    PhotonNetworkSync: [["0x58", "team"], ["0x7c", "localFlag"], ["0x5c", "id"]]
  };

  function describe(typeName, ptr) {
    var fields = SK_FIELDS[typeName] || [];
    var row = { kind: typeName, ptr: "0x" + ptr.toString(16), pos: null, posAt: null, allVecs: [], scalars: [], refs: {} };
    // EVERY vector, not just the first. Picking the first one found is how a
    // scratch value gets mistaken for a world position and the whole ESP lands
    // 200 metres off.
    for (var f = 0; f < fields.length; f++) {
      if (fields[f][1] !== "v3") continue;
      var v = readVec(ptr, fields[f][0], 3);
      if (!v) continue;
      row.allVecs.push({ o: "0x" + fields[f][0].toString(16), v: v });
    }
    // Pick the vector with the greatest HORIZONTAL extent, not the first
    // non-zero one. FPScontroller+0xE0 is gravity - (0, -3.85, 0) on the ground,
    // (0, -4.16, 0) in the air - and "first non-zero" picked it as the player
    // position in a live report. Gravity is vertical and short; a world position
    // has real XZ reach. Same class of mistake as trusting the first vector found.
    var best = 0;
    for (var q = 0; q < row.allVecs.length; q++) {
      var vv = row.allVecs[q].v;
      var h = vv[0] * vv[0] + vv[2] * vv[2];
      if (h > best) { best = h; row.pos = vv; row.posAt = row.allVecs[q].o; }
    }
    row.reach = Math.sqrt(best);
    var spec = REFS[typeName];
    var sspec = SCALARS[typeName];
    if (sspec) {
      row.tag = {};
      for (var si = 0; si < sspec.length; si++) {
        var sv2 = rd(ptr + parseInt(sspec[si][0], 16), "i32");
        if (sv2 !== undefined) row.tag[sspec[si][1]] = sv2;
      }
    }
    if (spec) {
      for (var r = 0; r < spec.length; r++) {
        var val = rd(ptr + parseInt(spec[r][0], 16), "u32");
        if (val) row.refs[spec[r][1]] = "0x" + (val >>> 0).toString(16);
      }
    }
    row.scalars = fields
      .filter(function (x) { return x[1] === "f32" || x[1] === "i32"; })
      .map(function (x) { return { o: "0x" + x[0].toString(16), v: rd(ptr + x[0], x[1]) }; })
      .filter(function (x) { return x.v !== undefined && isFinite(x.v); })
      .slice(0, 12);
    return row;
  }

  function recon() {
    var out = {
      players: [], bots: [], enemies: [], controllers: [],
      camera: null, cameraFrom: null,
      playerList: null, managers: {}, wasmTypes: null
    };

    var localFps = (INSTANCES.FPScontroller && INSTANCES.FPScontroller.ptr) || 0;

    // Real players first. PhotonNetworkSync is the per-player component and it
    // points at each player's own FPScontroller, which is how the local one is
    // identified without guessing: it is the entry whose fps ref equals the
    // controller the game's own input drives.
    var sync = SEEN.PhotonNetworkSync || {};
    var sKeys = Object.keys(sync);
    for (var i = 0; i < sKeys.length && i < 24; i++) {
      var srec = sync[sKeys[i]];
      var row = describe("PhotonNetworkSync", srec.ptr);
      row.hits = srec.hits;
      row.firstSeenMs = srec.firstSeen - T0;
      row.isLocal = !!localFps && row.refs.fps === "0x" + localFps.toString(16);
      // A remote player's health is just as readable as your own: it is their
      // own HealthScript, under the same ObscuredInt encoding.
      if (row.refs.health) {
        var hp = parseInt(row.refs.health, 16);
        row.health = surveyOne(hp, "HealthScript", "obfI");
      }
      out.players.push(row);
    }
    out.playerCount = sKeys.length;

    // Bots are not networked - there is no Photon component for them at all -
    // so they need their own capture.
    var npc = SEEN.NPC_Cotroller || {};
    var nKeys = Object.keys(npc);
    for (var n = 0; n < nKeys.length && n < 24; n++) {
      var b = describe("NPC_Cotroller", npc[nKeys[n]].ptr);
      b.hits = npc[nKeys[n]].hits;
      b.firstSeenMs = npc[nKeys[n]].firstSeen - T0;
      if (b.refs.health) b.health = surveyOne(parseInt(b.refs.health, 16), "HealthScript", "obfI");
      out.bots.push(b);
    }
    out.botCount = nKeys.length;

    // Every controller seen, not just the one that won the single slot. If
    // there are N of these in a match then N players exist, and the report can
    // say so instead of leaving it to be guessed from a single pointer.
    var ctl = SEEN.FPScontroller || {};
    var cKeys = Object.keys(ctl);
    for (var c = 0; c < cKeys.length && c < 24; c++) {
      var cr = describe("FPScontroller", ctl[cKeys[c]].ptr);
      cr.hits = ctl[cKeys[c]].hits;
      cr.isLocal = ctl[cKeys[c]].ptr === localFps;
      out.controllers.push(cr);
    }
    out.controllerCount = cKeys.length;

    // `enemies` stays as the combined, ready-to-draw list: every other player
    // plus every bot, local one excluded.
    var all = out.players.concat(out.bots);
    for (var a = 0; a < all.length; a++) {
      if (all[a].isLocal) continue;
      out.enemies.push(all[a]);
    }
    out.enemyCount = out.enemies.length;

    // The camera and the player list hang off whichever manager is actually
    // live. TDM_GameManager is Team Deathmatch's own manager and carries
    // Camera at +0x2C and List<Player> at +0x50; GG_GameManager is its unused
    // base with Camera at +0x14 and List<Player> at +0x5C. Reading both and
    // saying which one answered means the report never has to guess.
    var GM_CAM = { TDM_GameManager: 0x2c, GG_GameManager: 0x14 };
    var GM_LIST = { TDM_GameManager: 0x50, GG_GameManager: 0x5c };
    for (var m in INSTANCES) {
      var rec2 = INSTANCES[m];
      if (!rec2 || !rec2.ptr) continue;
      if (!(m in GM_CAM)) continue;
      out.managers[m] = "0x" + rec2.ptr.toString(16);
      var cv = rd(rec2.ptr + GM_CAM[m], "u32");
      var l = rd(rec2.ptr + GM_LIST[m], "u32");
      if (cv && out.camera === null) { out.camera = "0x" + (cv >>> 0).toString(16); out.cameraFrom = m; }
      if (l && out.playerList === null) out.playerList = "0x" + (l >>> 0).toString(16);
    }

    if (!out.playerCount && !out.botCount && !out.camera) {
      // Name the reason, precisely. None of these exist until a round loads,
      // so an empty list from a menu is expected - but "expected" is not the
      // same as "explained", and a silent empty list sent me hunting three
      // times.
      out.note = "No PhotonNetworkSync, no NPC_Cotroller and no game manager. That is what " +
        "the lobby looks like - run the recon INSIDE a live round, not the menu.";
    } else if (!out.enemyCount) {
      out.note = "Players are present but none are classified as enemies yet - check " +
        "isLocal on each entry in `players`.";
    }

    // Which WASM signatures actually exist. internalWasmTypes is populated
    // during metadata parse, which happens before instantiate - readable now,
    // after the fact, and worthless at arm time.
    try {
      var RT = window.UnityWebModkit && window.UnityWebModkit.Runtime;
      var types = (RT && RT.internalWasmTypes) || [];
      var shapes = {};
      for (var t = 0; t < types.length && t < 4000; t++) {
        var sig = types[t].params.join(",") + " -> " + (types[t].returnType || "void");
        shapes[sig] = (shapes[sig] || 0) + 1;
      }
      out.wasmTypes = shapes;
    } catch (_) {}
    return out;
  }

  /* One field of an arbitrary instance, for pointers we did not capture
   * directly. A remote player's health lives on THEIR HealthScript, which we
   * only ever see as a pointer, so this reads through it with the same codec
   * rather than guessing. `kind` selects the first field of that kind - which
   * is the largest ObscuredInt on HealthScript, i.e. the current health, not
   * max, shield or armour.
   */
  function surveyOne(ptr, typeName, kind) {
    try {
      var fields = SK_FIELDS[typeName] || [];
      for (var i = 0; i < fields.length; i++) {
        if (fields[i][1] !== kind) continue;
        var off = fields[i][0];
        if (kind.indexOf("obf") === 0) {
          var d = readObfRaw(ptr, off, kind);
          if (!d) return null;
          // readObfRaw returns the RAW STRUCT only. The decode, the decoy
          // comparison and the `v` field all happen in resolveKeys - which
          // reads row.k, so the tag has to be set first or it throws into the
          // catch below and the field silently vanishes. Two ways this bit me:
          // d.v is undefined without resolveKeys, and d.k is undefined without
          // this line. Both render as "no health here".
          d.o = off; d.k = kind;
          var one = resolveKeys([d]);
          if (!one.rows.length) return null;
          return one.rows[0];
        }
        var r = rd(ptr + off, kind);
        if (r === undefined) return null;
        return { o: "0x" + off.toString(16), v: r };
      }
    } catch (_) {}
    return null;
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
          var row = { o: off, k: kind, v: r };
          // Vector fields carry all their components; reporting only the first
          // hides the two that matter for a position.
          if (kind === "v2" || kind === "v3" || kind === "v4") {
            var n = kind === "v2" ? 2 : kind === "v3" ? 3 : 4;
            var xyz = readVec(rec.ptr, off, n);
            if (xyz) { row.xyz = xyz; row.v = xyz[0]; }
          }
          rows.push(row);
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
      // Routed through setSpeed so the HUD, the keys and the portal panel can
      // never disagree about whether speed is on.
      setSpeed(
        arg && typeof arg.on === "boolean" ? arg.on : SPEED.on,
        arg && typeof arg.factor === "number" ? arg.factor : SPEED.factor
      );
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

  /* ---------------------------------------------------------------- *
   * In-frame controls.
   *
   * Every control used to live in the portal panel, which is a structural
   * mistake on CrazyGames: the portal is two frames away from the heap, and a
   * command has to survive portal -> wrapper -> player. v2.2.2 fixed the portal's
   * postMessage target and the toggle still never applied - two single-frame
   * tests passed, because neither of them contains a grandchild iframe. A test
   * harness cannot see this class of bug, so the fix is architectural: put the
   * controls in the frame that owns the pointer. Nothing has to cross an origin
   * boundary to reach them.
   *
   * F7 speed on/off | F6/F8 factor -/+ 0.5 | F9 snapshot. The keys exist so the
   * whole thing is usable even if the canvas eats a click.
   * ---------------------------------------------------------------- */
  var HUD = null;

  function hud() {
    if (HUD) return HUD;
    try {
      if (!document.body || !document.body.appendChild) return null;
      if (!document.getElementById("sakura-sw-hud-css")) {
        var css = document.createElement("style");
        css.id = "sakura-sw-hud-css";
        css.textContent = "#sakura-sw-hud{all:initial}";
        (document.head || document.documentElement).appendChild(css);
      }
      var el = document.createElement("div");
      el.id = "sakura-sw-hud";
      el.style.cssText =
        "position:fixed;left:8px;bottom:8px;z-index:2147483647;display:flex;flex-direction:column;gap:4px;" +
        "background:rgba(21,12,29,.92);border:1px solid rgba(255,143,177,.45);border-radius:10px;" +
        "padding:6px 8px;font:11px/1.45 ui-monospace,Consolas,monospace;color:#f7eef5;" +
        "box-shadow:0 10px 30px -12px #000;user-select:none;-webkit-user-select:none;";

      var bar =
        '<div data-a="st2" style="color:#8d7a99;max-width:290px;"></div>';
      el.innerHTML =
        '<div data-a="bar" style="display:flex;gap:6px;align-items:center;flex-wrap:wrap;max-width:290px;">' +
        '<b style="color:' + ACCENT + '">sakura</b>' +
        '<button data-a="sp" style="background:transparent;border:1px solid rgba(255,143,177,.45);' +
        'color:#f7eef5;border-radius:6px;padding:2px 8px;cursor:pointer;font:inherit;">Speed off</button>' +
        '<input data-a="fx" type="range" min="1" max="5" step="0.5" value="2" style="width:92px;accent-color:' + ACCENT + ';">' +
        '<span data-a="fv" style="color:#bda9c9;min-width:30px;">2.0x</span>' +
        '<button data-a="esp" style="background:transparent;border:1px solid rgba(255,143,177,.45);' +
        'color:#f7eef5;border-radius:6px;padding:2px 7px;cursor:pointer;font:inherit;">ESP on</button>' +
        '<button data-a="snap" style="background:transparent;border:1px solid rgba(255,143,177,.45);' +
        'color:#f7eef5;border-radius:6px;padding:2px 7px;cursor:pointer;font:inherit;">Snap</button>' +
        '<button data-a="fold" style="margin-left:auto;background:transparent;border:1px solid rgba(255,143,177,.45);' +
        'color:#f7eef5;border-radius:6px;padding:1px 6px;cursor:pointer;font:inherit;">-</button>' +
        '</div>' +
        '<div data-a="st" style="color:#8d7a99;max-width:290px;"></div>' +
        '<div data-a="st2" style="color:#8d7a99;max-width:290px;"></div>';
      el.innerHTML = bar;

      var q = function (a) { return el.querySelector('[data-a="' + a + '"]'); };
      var st = q("st");
      var st2 = q("st2");
      var spBtn = q("sp");
      var fx = q("fx");
      var fv = q("fv");
      var barRow = q("bar");

      if (spBtn) spBtn.onclick = function () { setSpeed(!SPEED.on, SPEED.factor); };
      if (fx) fx.oninput = function () { setSpeed(SPEED.on, parseFloat(fx.value) || 1); };
      if (q("snap")) q("snap").onclick = function () { onCommand("snapshot"); };
      var espBtn = q("esp");
      if (espBtn) espBtn.onclick = function () {
        // radar -> radar+boxes -> off
        if (!ESP.on) { ESP.on = true; ESP.boxes = false; }
        else if (!ESP.boxes) { ESP.boxes = true; }
        else { ESP.on = false; }
        espBtn.textContent = !ESP.on ? "ESP off" : (ESP.boxes ? "ESP both" : "ESP map");
        espBtn.style.background = ESP.on ? ACCENT : "transparent";
        espBtn.style.color = ESP.on ? "#2a0f1b" : "#f7eef5";
        try {
          var rr = radar();
          if (rr && rr.el) rr.el.style.display = ESP.on ? "" : "none";
          var bb = BOXES;
          if (bb && bb.cv) bb.cv.style.display = (ESP.on && ESP.boxes) ? "" : "none";
        } catch (_) {}
      };
      if (q("fold")) q("fold").onclick = function () {
        if (!barRow) return;
        var folded = barRow.style.display === "none";
        barRow.style.display = folded ? "" : "none";
        q("fold").textContent = folded ? "-" : "+";
      };

      document.body.appendChild(el);
      HUD = { el: el, st: st, st2: st2, sp: spBtn, fx: fx, fv: fv };
      return HUD;
    } catch (err) {
      console.warn("%c[sakura] in-frame HUD disabled", "color:" + ACCENT, err);
      return null;
    }
  }

  // The single writer for speed state. Every surface - HUD, keys, portal panel -
  // goes through here, so the player frame can never hold a stale "off".
  var SPEED_DEFAULT_ON = 2;   // see below

  function setSpeed(on, factor) {
    var wasOn = SPEED.on;
    SPEED.on = !!on;
    // 1.0x is the neutral value the report shows while speed is off, so a naive
    // OFF -> ON toggle turns it on at a multiplier of one: the button lights up,
    // the heap is written, nothing visibly changes, and it reads as broken all
    // over again. Turning it on from off with the factor untouched jumps to 2x
    // so the first press does something. An explicit factor is always honoured.
    if (SPEED.on && !wasOn && (factor === undefined || factor === null || Number(factor) === 1)) {
      factor = SPEED_DEFAULT_ON;
    }
    SPEED.factor = Math.min(SPEED.max, Math.max(SPEED.min, Number(factor) || 1));
    if (!SPEED.on) SPEED_STATE = {};
    var h = hud();
    if (h) {
      if (h.sp) {
        h.sp.textContent = SPEED.on ? "Speed ON" : "Speed off";
        h.sp.style.background = SPEED.on ? ACCENT : "transparent";
        h.sp.style.color = SPEED.on ? "#2a0f1b" : "#f7eef5";
      }
      if (h.fx) h.fx.value = String(SPEED.factor);
      if (h.fv) h.fv.textContent = SPEED.factor.toFixed(1) + "x";
    }
  }

  function paintHud(rep) {
    var h = hud();
    if (!h || !h.st) return;
    // The status strip follows the overlays: while the game is still loading
    // there is nothing worth saying, and the loading screen is not the place
    // to say it. The petal is the readiness signal instead.
    try {
      if (!espLive() && !LAST) {
        if (h.el) h.el.style.display = "none";
        return;
      }
      if (h.el) h.el.style.display = "";
      var objs = Object.keys((rep && rep.instances) || {}).length;
      var esp = (rep && rep.esp) || null;
      var foes = esp ? (esp.enemyCount || 0) : 0;
      var bots = esp ? (esp.botCount || 0) : 0;
      var mem = WASM_MEMORY ? (WASM_MEMORY.buffer.byteLength / 1048576).toFixed(0) + "MB" : "no-mem";
      var t = "v" + (rep && rep.version || VERSION) + "  hooks " +
              ((rep && rep.hooksApplied) || 0) + "/" + ((rep && rep.hooksTotal) || 0) +
              "  objs " + objs + "  mem " + mem +
              "  writes " + SPEED_TOUCHED;
      h.st.textContent = t;
      // The round-live indicator, on screen, in the frame that matters. Two
      // reports in a row said "run the recon INSIDE a live match" and both came
      // from the menu; a number that goes non-zero is harder to misread than a
      // sentence explaining what to go and do.
      var line2 = h.st2;
      if (line2) {
        line2.textContent = foes > 0
          ? "PLAYERS " + foes + (bots ? " + " + bots + " bots" : "") +
            (esp && esp.camera ? "  cam " + esp.cameraFrom : "  cam -")
          : "no enemies yet (lobby?)  cam " + (esp && esp.camera ? esp.cameraFrom : "-");
        line2.style.color = foes > 0 ? "#7ee0a8" : "#8d7a99";
      }
    } catch (_) {}
  }

  // Key bindings. The Unity canvas holds focus, but every keydown in this
  // document still passes the window capture phase, so these work mid-round.
  window.addEventListener("keydown", function (e) {
    if (!e) return;
    try {
      if (e.code === "F9") { e.preventDefault(); onCommand("snapshot"); return; }
      if (e.code === "F7") { e.preventDefault(); setSpeed(!SPEED.on, SPEED.factor); return; }
      if (e.code === "F8") { e.preventDefault(); setSpeed(SPEED.on, SPEED.factor + 0.5); return; }
      if (e.code === "F6") { e.preventDefault(); setSpeed(SPEED.on, SPEED.factor - 0.5); return; }
      // Field of view, because it cannot be read and must be fitted by eye.
      if (e.code === "Insert") { e.preventDefault(); setMenu(!MENU.open); return; }
      if (e.code === "BracketRight") { e.preventDefault(); VIEW.fov = Math.min(140, VIEW.fov + 2); saveFov(); return; }
      if (e.code === "BracketLeft") { e.preventDefault(); VIEW.fov = Math.max(30, VIEW.fov - 2); saveFov(); return; }
    } catch (_) {}
  }, true);

  /* ---------------------------------------------------------------- *
 * LIVE ESP.
 *
 * A world-space minimap, not screen-space boxes, and that is a deliberate
 * choice rather than a compromise.
 *
 * Boxes need a projection: enemy world position, camera position, camera
 * rotation and field of view. The first three are available - enemy positions
 * off PhotonNetworkSync+0x34, our own off FPScontroller+0x2E4, and two floats
 * that behave like pitch and yaw - but the FOV is not. The Camera object
 * resolves (TDM_GameManager+0x2C) and UnityEngine.Camera exposes no IL2CPP
 * fields whatsoever, so there is nothing to read a field of view off, and
 * UnityEngine.CoreModule is not in referencedAssemblies, so WorldToScreenPoint
 * cannot be hooked either. A guessed FOV produces boxes that look broken, and
 * this project has shipped enough things that looked broken.
 *
 * A minimap in world space needs only positions, and those are now measured
 * rather than inferred. It is drawn from the same pointers the report proves,
 * so when it is right, it is right for a reason. Boxes follow once the angles
 * are pinned down by a deliberate turn-and-diff, which is one keypress away.
 * ---------------------------------------------------------------- */
  var ESP = { on: true, span: 80, boxes: false };   // span = world units across the radar

  // The local player has no network position of its own: PhotonNetworkSync+0x34
  // reads zero for the local instance in a live report while every remote has a
  // real one, because local position is authoritative here and never comes back
  // over the wire. So "where am I" comes from FPScontroller instead.
  /* The view. Reached WITHOUT a new hook: PhotonNetworkSync+0x30 is the
   * player's MouseLook, and MouseLook owns the Camera at +0x2C plus six floats
   * at +0x14..+0x28 that are the pitch/yaw family.
   *
   * These are NOT FPScontroller+0x16C/+0x170. A field report asked for exactly
   * this and answered it by omission: a deliberate turn left 0x16C and 0x170
   * bit-for-bit unchanged while six other floats moved. Guessing had put them
   * in the report as "the camera angles", and the diff disproved it. So every
   * float MouseLook exposes is reported by offset, none of them named, and the
   * next deliberate turn diff names them.
   */
  function viewState() {
    var sync = SEEN.PhotonNetworkSync || {};
    var keys = Object.keys(sync);
    for (var i = 0; i < keys.length; i++) {
      var ptr = sync[keys[i]].ptr;
      var ml = rd(ptr + 0x30, "u32");
      if (!ml) continue;
      var f = SK_FIELDS.MouseLook || [];
      var out = { mouseLook: "0x" + (ml >>> 0).toString(16), floats: {}, camera: null, vec2: null };
      for (var j = 0; j < f.length; j++) {
        if (f[j][1] !== "f32") continue;
        out.floats["0x" + f[j][0].toString(16)] = rd(ml + f[j][0], "f32");
      }
      var cam = rd(ml + 0x2c, "u32");
      if (cam) out.camera = "0x" + (cam >>> 0).toString(16);
      var v2 = readVec(ml, 0x48, 2);
      if (v2) out.vec2 = v2;
      return out;
    }
    return null;
  }

  /* World -> screen.
   *
   * Unity is left-handed, Y up, camera looks down its own +Z. With yaw and
   * pitch in degrees:
   *   forward = ( sin(yaw)cos(pitch), -sin(pitch), cos(yaw)cos(pitch) )
   * then project the enemy offset onto (right, up, forward).
   *
   * fov is NOT known and is not guessed. UnityEngine.Camera exposes no IL2CPP
   * fields, UnityEngine.CoreModule is not in referencedAssemblies so
   * WorldToScreenPoint cannot be hooked, and UISettings stores its FOV behind a
   * Slider whose name is obfuscated - picking "the FOV slider" would be a guess
   * about which of twenty-odd sliders it is. So fov is a calibrated constant:
   * [ and ] step it, it persists, and the HUD shows it. One-time, by eye, which
   * is the only honest way to fit a number nobody can read.
   */
  var FOV_KEY = "sakura-sw-fov";
  var VIEW = { pitch: null, yaw: null, pitchOff: 0, yawOff: 0, fov: 90, known: false };

  try { var _f = localStorage.getItem(FOV_KEY); if (_f) VIEW.fov = Math.min(140, Math.max(30, parseFloat(_f) || 90)); } catch (_) {}

  function saveFov() { try { localStorage.setItem(FOV_KEY, String(VIEW.fov)); } catch (_) {} }

  // Which two of MouseLook's floats are pitch and yaw is still an open question
  // - see viewState(). Until a deliberate turn names them, this reads the pair
  // that behaves like a look angle: bounded, and the only two that sit in the
  // same place in the struct as the Camera pointer they drive.
  function viewAngles() {
    var v = viewState();
    if (!v || !v.mouseLook) return null;
    var ml = parseInt(v.mouseLook, 16);
    var pitch = rd(ml + 0x18, "f32");
    var yaw = rd(ml + 0x1c, "f32");
    if (typeof pitch !== "number" || typeof yaw !== "number") return null;
    return { pitch: pitch + VIEW.pitchOff, yaw: yaw + VIEW.yawOff };
  }

  function project(from, to, w, h) {
    var a = viewAngles();
    if (!a) return null;
    var pr = a.pitch * Math.PI / 180, yr = a.yaw * Math.PI / 180;
    var cp = Math.cos(pr);
    var fx = Math.sin(yr) * cp, fy = -Math.sin(pr), fz = Math.cos(yr) * cp;
    // right = up x forward, with up = (0,1,0)
    var rx = fz, ry = 0, rz = -fx;
    var dx = to[0] - from[0], dy = to[1] - from[1], dz = to[2] - from[2];
    var z = dx * fx + dy * fy + dz * fz;
    if (z <= 0.05) return null;                    // behind the camera
    var x = dx * rx + dy * ry + dz * rz;
    var y = dx * (ry * fz - rz * fy) + dy * (rz * fx - rx * fz) + dz * (rx * fy - ry * fx);
    var aspect = w / h;
    var vf = VIEW.fov * Math.PI / 180;
    var t = Math.tan(vf / 2);
    var ndcX = (x / z) / (t * aspect);
    var ndcY = (y / z) / t;
    if (ndcX < -1.6 || ndcX > 1.6 || ndcY < -1.6 || ndcY > 1.6) return null;
    return { x: (ndcX * 0.5 + 0.5) * w, y: (0.5 - ndcY * 0.5) * h, z: z };
  }

  /* ---------------------------------------------------------------- *
   * THE SAKURA MENU.
   *
   * Same design language as the KourStrike menu: frosted glass, a sidebar of
   * category tabs, a card grid, pill switches and pink-filled sliders, opened
   * from a petal in the corner and toggled with Insert. SkillWarz had been
   * running a bare text panel instead - functional, and not what this looks
   * like everywhere else in the suite.
   *
   * It lives in the PLAYER frame, like everything else that matters here: the
   * portal is two frames away from the heap and every control that had to
   * cross that boundary is a control that can die in the middle one.
   *
   * It is hidden by default and anchored bottom-right. That is the other half
   * of the earlier complaint: a panel that is always on screen, on top of the
   * game, is a panel nobody can play past. This one is a corner petal.
   * ---------------------------------------------------------------- */
  var MENU = { open: false, cat: "combat", built: false, root: null, cols: null, head: null, sub: null, syncs: [] };
  // The last emitted report. The menu reads values from here rather than
  // re-decoding the heap, because the report is already the thing everything
  // else in this file trusts.
  var LAST = null;

  var MENU_CATS = [
    { id: "combat", label: "CMB" },
    { id: "visuals", label: "VIS" },
    { id: "values", label: "VAL" },
    { id: "log", label: "LOG" }
  ];

  var MENU_CSS =
    // all:initial is here to stop the game's stylesheet leaking in, and it is an
    // ID selector. That makes it outrank .mn-panel (100 vs 10) and win EVERY
    // root-level property: the panel fell back to position:static, background
    // none, display:inline and the cards spilled out over the game as unstyled
    // text. Same reason the radar and the HUD carry their styling inline.
    '#sakura-menu-root{all:initial}' +
    '#sakura-menu-root.mn-panel{position:fixed;right:24px;bottom:24px;width:min(620px,calc(100vw - 48px));max-height:min(500px,calc(100vh - 48px));' +
    'display:flex;gap:10px;padding:10px;border-radius:22px;pointer-events:auto;z-index:2147483647;' +
    'background:rgba(24,17,21,.82);backdrop-filter:blur(22px) saturate(150%);-webkit-backdrop-filter:blur(22px) saturate(150%);' +
    'box-shadow:0 0 0 1px rgba(255,255,255,.06),inset 0 1px 0 rgba(255,255,255,.05),0 30px 80px rgba(0,0,0,.55);' +
    'opacity:0;transform:translateY(18px);pointer-events:none;transition:opacity .35s ease,transform .45s cubic-bezier(.22,1,.36,1);' +
    'color:#f6eef2;font-size:13px;font-family:"Inter","Segoe UI",system-ui,sans-serif;}' +
    '#sakura-menu-root.mn-panel.shown{opacity:1;transform:none;pointer-events:auto;}' +
    '.mn-side{display:flex;flex-direction:column;align-items:center;gap:4px;width:62px;flex:none;padding:12px 0;' +
    'border-radius:16px;background:rgba(255,255,255,.025);box-shadow:inset 0 0 0 1px rgba(255,255,255,.05);}' +
    '.mn-logo{display:grid;place-items:center;width:32px;height:32px;margin-bottom:6px;}' +
    '.mn-logo-svg{width:25px;height:25px;overflow:visible;filter:drop-shadow(0 0 4px rgba(255,107,157,.8));}' +
    '.mn-tab{display:flex;align-items:center;justify-content:center;width:52px;height:34px;border:0;border-radius:10px;' +
    'background:transparent;color:rgba(246,238,242,.4);cursor:pointer;font-size:10px;font-weight:700;font-family:inherit;}' +
    '.mn-tab:hover{color:rgba(246,238,242,.8);}' +
    '.mn-tab.active{color:#ff6b9d;background:rgba(255,107,157,.1);}' +
    '.mn-main{flex:1;min-width:0;display:flex;flex-direction:column;}' +
    '.mn-top{display:flex;align-items:center;gap:12px;padding:6px 6px 12px;user-select:none;}' +
    '.mn-titles{flex:1;min-width:0;}' +
    '.mn-h{font-size:17px;font-weight:650;}' +
    '.mn-sub{font-size:11px;opacity:.4;}' +
    '.mn-close{display:grid;place-items:center;width:28px;height:28px;border:0;border-radius:8px;background:transparent;' +
    'color:inherit;opacity:.45;cursor:pointer;}' +
    '.mn-close:hover{opacity:1;background:rgba(255,255,255,.05);}' +
    '.mn-close svg{width:14px;height:14px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;}' +
    '.mn-cols{flex:1;min-height:0;overflow-y:auto;display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));' +
    'align-items:start;align-content:start;gap:10px;padding:0 4px 6px 0;}' +
    '.mn-cols::-webkit-scrollbar{width:8px;}' +
    '.mn-cols::-webkit-scrollbar-thumb{background:rgba(255,255,255,.08);border-radius:4px;}' +
    '.sk-card{border-radius:12px;background:rgba(255,255,255,.025);box-shadow:inset 0 0 0 1px rgba(255,255,255,.05);}' +
    '.sk-card.on{background:rgba(255,255,255,.04);box-shadow:inset 0 0 0 1px rgba(255,107,157,.28);}' +
    '.sk-card-head{display:flex;align-items:center;gap:8px;padding:11px 12px;}' +
    '.sk-card-title{flex:1;min-width:0;}' +
    '.sk-card-title strong{font-size:13px;font-weight:600;color:rgba(246,238,242,.45);}' +
    '.sk-card.on .sk-card-title strong{color:#fff0f5;}' +
    '.sk-mbody{padding:0 12px 10px;}' +
    '.sk-mdesc{font-size:11px;opacity:.4;margin-bottom:6px;white-space:pre-wrap;}' +
    '.sk-ctl{display:flex;align-items:center;gap:8px;padding:4px 0;font-size:11.5px;}' +
    '.sk-label{flex:1;color:rgba(246,238,242,.75);}' +
    '.sk-hint{display:block;font-size:10px;opacity:.4;}' +
    '.sk-switch{position:relative;width:26px;height:14px;border:0;border-radius:99px;background:rgba(255,255,255,.07);cursor:pointer;flex:none;}' +
    '.sk-switch::after{content:"";position:absolute;top:3px;left:3px;width:8px;height:8px;border-radius:50%;' +
    'background:rgba(255,255,255,.25);transition:left .2s,background .2s;}' +
    '.sk-switch[aria-checked="true"]{background:rgba(255,107,157,.25);}' +
    '.sk-switch[aria-checked="true"]::after{left:15px;background:#ff6b9d;}' +
    '.sk-range{display:flex;align-items:center;gap:8px;}' +
    '.sk-slider{-webkit-appearance:none;appearance:none;width:96px;height:8px;background:transparent;}' +
    '.sk-slider::-webkit-slider-runnable-track{height:2px;border-radius:2px;' +
    'background:linear-gradient(#ff6b9d,#ff6b9d) 0 0 / var(--p,50%) 100% no-repeat,rgba(255,255,255,.08);}' +
    '.sk-slider::-webkit-slider-thumb{-webkit-appearance:none;width:6px;height:6px;margin-top:-2px;border-radius:50%;background:#ff6b9d;}' +
    '.sk-val{font-size:11px;font-weight:600;min-width:34px;text-align:right;color:rgba(246,238,242,.8);}' +
    '.sk-note{font-size:11px;color:rgba(246,238,242,.5);padding:2px 0;white-space:pre-wrap;}' +
    '.sk-note.err{color:#ff7a93;}' +
    '.sk-btn{align-self:flex-start;border:0;border-radius:8px;padding:8px 16px;background:#ff6b9d;color:#fff;' +
    'font-size:11.5px;font-weight:700;cursor:pointer;font-family:inherit;}' +
    '.sk-btn:hover{filter:brightness(1.1);}' +
    '.sk-pre{font:11px/1.5 ui-monospace,Consolas,monospace;white-space:pre-wrap;word-break:break-word;margin:0;opacity:.75;max-height:280px;overflow:auto;}' +
    // The petal, the one glyph allowed on screen before a round loads. Also an ID
    // rule on its own element, so nothing has to out-rank it.
    '#sakura-petal{position:fixed;top:12px;right:12px;z-index:2147483646;cursor:pointer;width:26px;height:26px;opacity:.28;' +
    'transition:opacity .2s;pointer-events:auto;filter:drop-shadow(0 0 4px rgba(255,107,157,.7));}';

  var PETAL_SVG =
    '<svg viewBox="0 0 24 24"><path d="M12 21c-1.5-2.5-4-4.5-4-7.5 0-2.5 1.8-4.5 4-4.5s4 2 4 4.5c0 3-2.5 5-4 7.5z" ' +
    'fill="none" stroke="#ff6b9d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>' +
    '<circle cx="12" cy="10" r="1.5" fill="#ff6b9d"/></svg>';

  var LOGO_SVG =
    '<svg class="mn-logo-svg" viewBox="0 0 24 24"><path d="M12 21c-1.5-2.5-4-4.5-4-7.5 0-2.5 1.8-4.5 4-4.5s4 2 4 4.5c0 3-2.5 5-4 7.5z" ' +
    'fill="none" stroke="#ff6b9d" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>' +
    '<circle cx="12" cy="10" r="1.2" fill="#ff6b9d"/></svg>';

  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }

  function mkCard(title, on) {
    var card = el("div", "sk-card" + (on ? " on" : ""));
    var head = el("div", "sk-card-head");
    var t = el("div", "sk-card-title", "<strong>" + title + "</strong>");
    head.appendChild(t);
    var body = el("div", "sk-mbody");
    card.appendChild(head);
    card.appendChild(body);
    card.body = body;
    card.head = t;
    return card;
  }

  function mkSwitch(get, set) {
    var b = el("button", "sk-switch");
    b.type = "button";
    var sync = function () { b.setAttribute("aria-checked", get() ? "true" : "false"); };
    b.onclick = function () { set(!get()); sync(); };
    sync();
    b.sync = sync;
    // Registered so the menu's own controls stay honest when the on-canvas HUD
    // is used while the menu is open. Two surfaces that both write the same
    // state will disagree unless the one you are not looking at re-reads.
    MENU.syncs.push(sync);
    return b;
  }

  function mkRange(min, max, step, get, set) {
    var wrap = el("div", "sk-range");
    var input = document.createElement("input");
    input.type = "range";
    input.className = "sk-slider";
    input.min = String(min); input.max = String(max); input.step = String(step);
    var val = el("span", "sk-val");
    var sync = function () {
      var v = get();
      input.value = String(v);
      val.textContent = (step < 1 ? v.toFixed(1) : String(Math.round(v))) + (input.dataset.unit || "");
      var pct = ((v - min) / (max - min)) * 100;
      input.style.setProperty("--p", pct + "%");
    };
    input.oninput = function () { set(parseFloat(input.value) || min); sync(); };
    wrap.appendChild(input);
    wrap.appendChild(val);
    wrap.sync = sync;
    wrap.input = input;
    sync();
    MENU.syncs.push(sync);
    return wrap;
  }

  function row(label, hint) {
    var r = el("div", "sk-ctl");
    var l = el("div", "sk-label", label + (hint ? "<span class='sk-hint'>" + hint + "</span>" : ""));
    r.appendChild(l);
    return r;
  }

  // Values shown on the VAL tab, read from the last emitted report rather than
  // re-decoded here. The report is already the thing everything else trusts.
  function valLine(rep, type, off, kind) {
    var sv = rep && rep.survey && rep.survey[type];
    if (!sv) return "-";
    for (var i = 0; i < sv.length; i++) {
      if (sv[i].o === off) {
        if (kind === "v3") {
          var xyz = sv[i].xyz || [sv[i].v, 0, 0];
          return xyz.map(function (n) { return Math.round(n * 100) / 100; }).join("  ");
        }
        var v = sv[i].v;
        return typeof v === "number" ? (Math.round(v * 1000) / 1000) : String(v);
      }
    }
    return "-";
  }

  function menuCards(cat) {
    var rep = LAST;
    var out = [];
    var i;

    if (cat === "combat") {
      var c1 = mkCard("Speed hack", SPEED.on);
      var d1 = el("div", "sk-mdesc",
        SPEED.on
          ? "x" + SPEED.factor.toFixed(1) + " on " + SPEED_SCALED.length + " fields · " +
            SPEED_TOUCHED + " writes"
          : "Multiplies movement-speed fields only. Height, step and jump are refused.");
      var r1 = row("Enabled");
      r1.appendChild(mkSwitch(function () { return SPEED.on; },
        function (v) { setSpeed(v, SPEED.factor); d1.textContent = v ? "x" + SPEED.factor.toFixed(1) + " on " + SPEED_SCALED.length + " fields · " + SPEED_TOUCHED + " writes" : "Multiplies movement-speed fields only. Height, step and jump are refused."; }));
      c1.body.appendChild(d1);
      c1.body.appendChild(r1);
      var rng = mkRange(1, 5, 0.5, function () { return SPEED.factor; },
        function (v) { setSpeed(SPEED.on, v); });
      rng.input.dataset.unit = "x";
      var r2 = row("Multiplier", "F8 / F6 also step this");
      r2.appendChild(rng);
      c1.body.appendChild(r2);
      if (SPEED_SKIPPED.length) {
        var sk = el("div", "sk-note", "Refused: " + SPEED_SKIPPED.slice(0, 4).map(function (s) {
          return "0x" + (s.o < 0 ? "?" : s.o.toString(16)) + " (" + s.why + ")";
        }).join("  "));
        c1.body.appendChild(sk);
      }
      out.push(c1);

      var c2 = mkCard("Bindings");
      var b = el("button", "sk-btn", "Snapshot now (F9)");
      b.type = "button";
      b.onclick = function () { onCommand("snapshot"); };
      c2.body.appendChild(el("div", "sk-mdesc",
        "F9  snapshot    F7  speed on/off\nF8 / F6  factor +/-0.5\n[  ]  field of view\nInsert  this menu"));
      c2.body.appendChild(b);
      out.push(c2);
    }

    if (cat === "visuals") {
      var v1 = mkCard("Radar", ESP.on);
      var rr1 = row("Enabled");
      rr1.appendChild(mkSwitch(function () { return ESP.on; }, function (v) { ESP.on = v; applyVis(); }));
      v1.body.appendChild(el("div", "sk-mdesc", "World-space minimap, top-right. Needs only positions."));
      v1.body.appendChild(rr1);
      var sp = mkRange(40, 160, 10, function () { return ESP.span; }, function (v) { ESP.span = v; });
      sp.input.dataset.unit = "m";
      var rr2 = row("Range", "world units across the radar");
      rr2.appendChild(sp);
      v1.body.appendChild(rr2);
      out.push(v1);

      var v2 = mkCard("Boxes", ESP.boxes);
      var rr3 = row("Enabled");
      rr3.appendChild(mkSwitch(function () { return ESP.boxes; }, function (v) { ESP.boxes = v; ESP.on = true; applyVis(); }));
      v2.body.appendChild(el("div", "sk-mdesc",
        "Screen-space boxes. The field of view cannot be read from this build, so it is fitted by eye."));
      v2.body.appendChild(rr3);
      var fv = mkRange(60, 130, 2, function () { return VIEW.fov; }, function (v) { VIEW.fov = v; saveFov(); });
      fv.input.dataset.unit = "°";
      var rr4 = row("Field of view", "[ and ] also step this");
      rr4.appendChild(fv);
      v2.body.appendChild(rr4);
      var n = rep && rep.view;
      v2.body.appendChild(el("div", "sk-note",
        "view: " + (n ? (n.mouseLook ? "MouseLook " + n.mouseLook + (n.camera ? "  camera " + n.camera : "") : "no MouseLook yet")
                      : "no MouseLook yet") +
        (VIEW.pitchOff || VIEW.yawOff ? "\npitch " + Math.round(VIEW.pitchOff) + "  yaw " + Math.round(VIEW.yawOff) : "")));
      out.push(v2);
    }

    if (cat === "values") {
      var rows = [
        ["Build", "VERSION", rep ? rep.version : "-"],
        ["Hooks", "applied / registered", rep ? rep.hooksApplied + " / " + rep.hooksRegisteredAtArm : "-"],
        ["Heap", "from instantiate()", rep && rep.wasmMemory && rep.wasmMemory.captured
          ? (Math.round(rep.wasmMemory.bytes / 1048576) + " MB @ " + rep.wasmMemory.atMs + "ms") : "-"],
        ["Players", "PhotonNetworkSync", rep && rep.esp ? String(rep.esp.playerCount) : "-"],
        ["Enemies", "everyone but you", rep && rep.esp ? String(rep.esp.enemyCount) : "-"],
        ["Camera", "off the live manager", rep && rep.esp && rep.esp.camera
          ? rep.esp.camera + " (" + rep.esp.cameraFrom + ")" : "-"]
      ];
      for (i = 0; i < rows.length; i++) {
        var rr = row(rows[i][0]);
        var sp2 = el("span", "sk-val");
        sp2.style.minWidth = "0";
        sp2.style.flex = "1";
        sp2.style.textAlign = "right";
        sp2.textContent = String(rows[i][2]);
        sp2.dataset.k = rows[i][1];
        rr.appendChild(sp2);
        var card = out.length ? out[out.length - 1] : null;
        if (!card) { card = mkCard("Session", false); out.push(card); }
        card.body.appendChild(rr);
        card.body.lastChild.sp = sp2;
      }

      var c3 = mkCard("Player", false);
      var lv = [
        ["Position", "FPScontroller+0x2E4", rep && rep.local && rep.local.feet
          ? rep.local.feet.map(function (n) { return Math.round(n * 100) / 100; }).join("  ") : "-"],
        ["Eye", "+0x298", rep && rep.local && rep.local.eye
          ? rep.local.eye.map(function (n) { return Math.round(n * 100) / 100; }).join("  ") : "-"],
        ["Walk speed", "0x10", valLine(rep, "FPScontroller", 0x10)],
        ["Sprint speed", "0x40", valLine(rep, "FPScontroller", 0x40)],
        ["Jump height", "0x11C", valLine(rep, "FPScontroller", 0x11c)],
        ["Health", "HealthScript+0xC0", valLine(rep, "HealthScript", 0xc0)]
      ];
      for (i = 0; i < lv.length; i++) {
        var r3 = row(lv[i][0]);
        var v3 = el("span", "sk-val");
        v3.style.minWidth = "0"; v3.style.flex = "1"; v3.style.textAlign = "right";
        v3.textContent = String(lv[i][2]);
        v3.dataset.k = lv[i][1];
        r3.appendChild(v3);
        c3.body.appendChild(r3);
        c3.body.lastChild.sp = v3;
      }
      out.push(c3);
    }

    if (cat === "log") {
      var c4 = mkCard("Diagnostics", false);
      var w = rep && rep.warnings && rep.warnings.length
        ? rep.warnings.join("\n") : "no warnings";
      c4.body.appendChild(el("div", "sk-pre", w));
      out.push(c4);
      var c5 = mkCard("Report", false);
      var copy = el("button", "sk-btn", "Copy JSON to clipboard");
      copy.type = "button";
      copy.onclick = function () {
        try {
          var text = MARK0 + "\n" + JSON.stringify(rep, null, 1) + "\n" + MARK1;
          if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(function () { copy.textContent = "Copied"; });
          } else copy.textContent = "Clipboard blocked - open the panel instead";
        } catch (_) { copy.textContent = "Copy failed"; }
      };
      c5.body.appendChild(el("div", "sk-mdesc", "Paste the whole thing when something looks wrong."));
      c5.body.appendChild(copy);
      out.push(c5);
    }

    return out;
  }

  function applyVis() {
    // Visibility belongs to espLoop, which knows whether there is a round at
    // all. Setting display here would put the radar back over the loading
    // screen the moment somebody flipped a switch.
    if (MENU.open) setMenu(true);
  }

  function buildMenu() {
    if (MENU.built) return MENU.root;
    try {
      if (!document.body || !document.body.appendChild) return null;
      if (!document.getElementById("sakura-menu-css")) {
        var st = document.createElement("style");
        st.id = "sakura-menu-css";
        st.textContent = MENU_CSS;
        (document.head || document.documentElement).appendChild(st);
      }

      var panel = el("div", "mn-panel");
      panel.id = "sakura-menu-root";

      var side = el("div", "mn-side");
      var logo = el("div", "mn-logo", LOGO_SVG);
      side.appendChild(logo);

      var main = el("div", "mn-main");
      var top = el("div", "mn-top");
      var titles = el("div", "mn-titles");
      var head = el("div", "mn-h", "Sakura SkillWarz");
      var sub = el("div", "mn-sub", "starting…");
      titles.appendChild(head);
      titles.appendChild(sub);
      var close = el("div", "mn-close",
        '<svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6 6 18"/></svg>');
      close.onclick = function () { setMenu(false); };
      top.appendChild(titles);
      top.appendChild(close);

      var cols = el("div", "mn-cols");
      main.appendChild(top);
      main.appendChild(cols);
      panel.appendChild(side);
      panel.appendChild(main);
      document.body.appendChild(panel);

      MENU.root = panel;
      MENU.cols = cols;
      MENU.head = head;
      MENU.sub = sub;
      var buttons = {};
      for (var c = 0; c < MENU_CATS.length; c++) {
        var cat = MENU_CATS[c];
        var b = el("button", "mn-tab", "<small>" + cat.label + "</small>");
        b.type = "button";
        b.title = cat.label;
        (function (cid) {
          b.onclick = function () { showCat(cid); };
        })(cat.id);
        buttons[cat.id] = b;
        side.appendChild(b);
      }
      MENU.buttons = buttons;

      var petal = el("div", null, PETAL_SVG);
      petal.id = "sakura-petal";
      petal.title = "Sakura SkillWarz (Insert)";
      petal.onmouseenter = function () { petal.style.opacity = "1"; };
      petal.onmouseleave = function () { petal.style.opacity = MENU.open ? "1" : ".5"; };
      petal.onclick = function (e) { if (e && e.stopPropagation) e.stopPropagation(); setMenu(!MENU.open); };
      document.body.appendChild(petal);
      MENU.petal = petal;

      // The petal is the only thing allowed on screen before a round loads, so
      // it carries the readiness signal: dim until there is a local player and
      // a player list, then bright. One corner glyph instead of an overlay
      // announcing itself over the loading screen.
      setInterval(function () {
        try {
          if (!MENU.petal) return;
          var liveNow = espLive();
          MENU.petal.style.opacity = MENU.open ? "1" : (liveNow ? ".8" : ".28");
          MENU.petal.title = liveNow
            ? "Sakura SkillWarz (Insert)"
            : "Sakura SkillWarz - waiting for the game (Insert)";
        } catch (_) {}
      }, 700);

      MENU.built = true;
      showCat(MENU.cat);
      return panel;
    } catch (err) {
      console.warn("%c[sakura] menu unavailable", "color:" + ACCENT, err);
      return null;
    }
  }

  function showCat(cid) {
    MENU.cat = cid;
    // Drop the previous tab's controls before building the next ones, or the
    // refresh loop keeps syncing detached nodes forever.
    MENU.syncs = [];
    if (!MENU.cols) return;
    var cat = null;
    for (var i = 0; i < MENU_CATS.length; i++) if (MENU_CATS[i].id === cid) cat = MENU_CATS[i];
    MENU.head.textContent = "Sakura SkillWarz — " + ((cat && cat.label) || "?");
    for (var k in MENU.buttons) {
      if (MENU.buttons[k].classList) MENU.buttons[k].className = "mn-tab" + (k === cid ? " active" : "");
    }
    var cards = [];
    try { cards = menuCards(cid); } catch (e) { cards = []; }
    // replaceChildren is not universal on older WebKit; clear and append is.
    while (MENU.cols.firstChild) MENU.cols.removeChild(MENU.cols.firstChild);
    for (var c = 0; c < cards.length; c++) MENU.cols.appendChild(cards[c]);
  }

  function setMenu(open) {
    MENU.open = !!open;
    var p = buildMenu();
    if (!p) return;
    p.className = "mn-panel" + (MENU.open ? " shown" : "");
    if (MENU.petal) MENU.petal.style.opacity = MENU.open ? "1" : ".5";
    if (MENU.open) {
      showCat(MENU.cat);
      // Menu is anchored bottom-right and the radar sits under the petal at the
      // other end. If the window is too short for both they would sit on top of
      // each other, so the radar yields rather than stacking.
      try {
        var h = window.innerHeight || 800;
        if (h < 620) setOverlayVisible(false);
      } catch (_) {}
    }
  }

  function refreshMenu() {
    if (!MENU.open || !MENU.built) return;
    try {
      // Controls first: the HUD writes the same state and the menu must not
      // sit there showing a switch that disagrees with the heap.
      for (var s = 0; s < MENU.syncs.length; s++) {
        try { MENU.syncs[s](); } catch (_) {}
      }
      var rep = LAST;
      MENU.sub.textContent = rep
        ? ("v" + rep.version + "  ·  hooks " + rep.hooksApplied + "/" + rep.hooksTotal +
           "  ·  players " + ((rep.esp && rep.esp.playerCount) || 0) +
           "  ·  heap " + (rep.wasmMemory && rep.wasmMemory.captured
             ? Math.round(rep.wasmMemory.bytes / 1048576) + "MB" : "-"))
        : "waiting for the first report…";
      // Only the numbers need refreshing; rebuilding the cards would eat the
      // focus out from under a slider the user is dragging.
      var nodes = MENU.cols.querySelectorAll ? MENU.cols.querySelectorAll("[data-k]") : [];
      for (var i = 0; i < nodes.length; i++) {
        var k = nodes[i].dataset.k;
        var val = "";
        if (k === "VERSION") val = rep ? rep.version : "-";
        else if (k === "applied / registered") val = rep ? rep.hooksApplied + " / " + rep.hooksRegisteredAtArm : "-";
        else if (k === "from instantiate()") val = rep && rep.wasmMemory && rep.wasmMemory.captured
          ? (Math.round(rep.wasmMemory.bytes / 1048576) + " MB @ " + rep.wasmMemory.atMs + "ms") : "-";
        else if (k === "PhotonNetworkSync") val = rep && rep.esp ? String(rep.esp.playerCount) : "-";
        else if (k === "everyone but you") val = rep && rep.esp ? String(rep.esp.enemyCount) : "-";
        else if (k === "off the live manager") val = rep && rep.esp && rep.esp.camera
          ? rep.esp.camera + " (" + rep.esp.cameraFrom + ")" : "-";
        else if (k === "FPScontroller+0x2E4") val = rep && rep.local && rep.local.feet
          ? rep.local.feet.map(function (n) { return Math.round(n * 100) / 100; }).join("  ") : "-";
        else if (k === "+0x298") val = rep && rep.local && rep.local.eye
          ? rep.local.eye.map(function (n) { return Math.round(n * 100) / 100; }).join("  ") : "-";
        else {
          var parts = k.split("+");
          val = valLine(rep, parts[0].indexOf("Health") === 0 ? "HealthScript" : "FPScontroller",
            parseInt(parts[1], 16));
        }
        if (val !== nodes[i].textContent) nodes[i].textContent = val;
      }
    } catch (_) {}
  }

  function localSpot() {
    var c = INSTANCES.FPScontroller;
    if (!c || !c.ptr) return null;
    var feet = readVec(c.ptr, 0x2e4, 3);
    var eye = readVec(c.ptr, 0x298, 3);
    if (!feet) return null;
    return {
      ptr: c.ptr,
      feet: feet,
      eye: eye,
      reach: Math.sqrt(feet[0] * feet[0] + feet[2] * feet[2]),
      pitch: rd(c.ptr + 0x16c, "f32"),
      yaw: rd(c.ptr + 0x170, "f32")
    };
  }

  /* Everyone except us, read live. One Vector3 read per player per frame is
   * cheap; decoding every remote's health every frame is not, so that is left
   * to the 1.2s report where it belongs. */
  function liveEnemies() {
    var me = localSpot();
    var out = [];
    var sync = SEEN.PhotonNetworkSync || {};
    var keys = Object.keys(sync);
    for (var i = 0; i < keys.length && i < 32; i++) {
      var rec = sync[keys[i]];
      var p = readVec(rec.ptr, 0x34, 3);
      // The local instance reads zero; skip it rather than plotting the origin.
      if (!p || (p[0] === 0 && p[1] === 0 && p[2] === 0)) continue;
      var row = {
        ptr: rec.ptr, x: p[0], y: p[1], z: p[2],
        team: rd(rec.ptr + 0x58, "i32"),
        localFlag: rd(rec.ptr + 0x7c, "i32")
      };
      if (me) {
        var dx = p[0] - me.feet[0], dz = p[2] - me.feet[2];
        row.d = Math.sqrt(dx * dx + dz * dz);
        row.bearing = Math.atan2(dx, dz) * 180 / Math.PI;
      }
      out.push(row);
    }
    return { me: me, list: out };
  }

  var RADAR = null;
  function radar() {
    if (RADAR) return RADAR;
    try {
      if (!document.body || !document.body.appendChild) return null;
      var el = document.createElement("div");
      el.id = "sakura-esp";
      el.style.cssText =
        // Sits BELOW the petal, which owns the very corner. Two controls in the
        // same 30 pixels is a control you eventually click by accident.
        "position:fixed;right:12px;top:46px;z-index:2147483646;pointer-events:none;" +
        "background:rgba(21,12,29,.72);border:1px solid rgba(255,143,177,.4);border-radius:10px;" +
        "padding:4px;font:10px/1.3 ui-monospace,Consolas,monospace;color:#bda9c9;" +
        // Without this the radar caption is draggable text: a triple-click while
        // playing leaves a blue selection sitting over the game, and dragging
        // across it selects instead of aiming.
        "user-select:none;-webkit-user-select:none;";
      el.innerHTML = '<canvas id="sakura-esp-cv" width="160" height="160" style="display:block"></canvas>' +
                     '<div id="sakura-esp-lg" style="text-align:center"></div>';
      // Canvas elements need a real 2d context; the test DOM has none, so guard
      // rather than assume. A missing context must not take the HUD with it.
      var cvStubs = { cv: { getContext: function () { return null; } }, el: el };
      document.body.appendChild(el);
      RADAR = { el: el, cv: el.querySelector("#sakura-esp-cv"), lg: el.querySelector("#sakura-esp-lg") };
      if (!RADAR.cv || !RADAR.cv.getContext) RADAR = cvStubs;
      return RADAR;
    } catch (_) { return null; }
  }

  var BOXES = null;
  function boxCanvas() {
    if (BOXES) return BOXES;
    try {
      if (!document.body || !document.body.appendChild) return null;
      var c = document.createElement("canvas");
      c.id = "sakura-boxes";
      // pointer-events:none is the whole reason this can exist: the Unity canvas
      // underneath keeps every click, every look and every shot.
      c.style.cssText = "position:fixed;left:0;top:0;z-index:2147483645;pointer-events:none;";
      document.body.appendChild(c);
      BOXES = { cv: c };
      return BOXES;
    } catch (_) { return null; }
  }

  function sizeCanvas(o) {
    try {
      var w = Math.max(1, window.innerWidth || document.documentElement.clientWidth || 0);
      var h = Math.max(1, window.innerHeight || document.documentElement.clientHeight || 0);
      if (o.cv.width !== w || o.cv.height !== h) { o.cv.width = w; o.cv.height = h; }
      return { w: w, h: h };
    } catch (_) { return { w: 0, h: 0 }; }
  }

  function drawBoxes(live) {
    var b = BOXES;
    if (!b) return;
    var ctx2 = b.cv.getContext && b.cv.getContext("2d");
    if (!ctx2) return;
    var dim = sizeCanvas(b);
    ctx2.clearRect(0, 0, dim.w, dim.h);
    if (!ESP.boxes || !live || !live.me) return;
    var me = live.me;
    var myTeam = null;
    var sync = SEEN.PhotonNetworkSync || {};
    var sk = Object.keys(sync);
    for (var s = 0; s < sk.length; s++) {
      var p2 = readVec(sync[sk[s]].ptr, 0x34, 3);
      if (p2 && p2[0] === 0 && p2[1] === 0 && p2[2] === 0) { myTeam = rd(sync[sk[s]].ptr + 0x58, "i32"); break; }
    }
    for (var i = 0; i < live.list.length; i++) {
      var e = live.list[i];
      var mate = (myTeam !== null && e.team === myTeam);
      // Feet and head. 1.8 units is the human height this game uses; if it is
      // wrong the box is the wrong height, not the wrong place.
      var feet = project(me.eye, [e.x, e.y - 1.0, e.z], dim.w, dim.h);
      var head = project(me.eye, [e.x, e.y + 0.8, e.z], dim.w, dim.h);
      if (!feet || !head) continue;
      var x0 = Math.min(feet.x, head.x), x1 = Math.max(feet.x, head.x);
      var y0 = Math.min(feet.y, head.y), y1 = Math.max(feet.y, head.y);
      // Scale with distance so a far box is a dot, not a billboard.
      var bw = Math.max(3, Math.min(60, (x1 - x0)));
      var bh = Math.max(6, Math.min(140, (y1 - y0)));
      var cx = (x0 + x1) / 2, cy = (y0 + y1) / 2;
      ctx2.strokeStyle = mate ? "rgba(79,143,106,.9)" : "rgba(255,110,116,.95)";
      ctx2.lineWidth = mate ? 1 : 2;
      ctx2.strokeRect(cx - bw / 2, cy - bh / 2, bw, bh);
      if (!mate) {
        ctx2.fillStyle = "rgba(255,110,116,.95)";
        ctx2.font = "10px ui-monospace,Consolas,monospace";
        ctx2.fillText(Math.round(e.d || 0) + "m", cx - bw / 2, cy - bh / 2 - 3);
      }
    }
  }

  function drawEsp() {
    var r = radar();
    if (!r || !r.cv) return;
    try {
      var ctx2 = r.cv.getContext && r.cv.getContext("2d");
      if (!ctx2) return;
      var S = r.cv.width, C = S / 2;
      var live = liveEnemies();
      var me = live.me;
      ctx2.clearRect(0, 0, S, S);
      // grid + rings
      ctx2.strokeStyle = "rgba(255,143,177,.16)";
      ctx2.lineWidth = 1;
      for (var g = 1; g <= 3; g++) {
        ctx2.beginPath();
        ctx2.arc(C, C, (C - 4) * g / 3, 0, Math.PI * 2);
        ctx2.stroke();
      }
      ctx2.beginPath(); ctx2.moveTo(4, C); ctx2.lineTo(S - 4, C);
      ctx2.moveTo(C, 4); ctx2.lineTo(C, S - 4); ctx2.stroke();
      if (!me) { if (r.lg) r.lg.textContent = ""; return; }

      var k = (C - 6) / ESP.span;      // pixels per world unit
      var myTeam = null;
      // Our own team: whichever group the local instance reports.
      var syncSelf = SEEN.PhotonNetworkSync || {};
      var sk = Object.keys(syncSelf);
      for (var s = 0; s < sk.length; s++) {
        var p2 = readVec(syncSelf[sk[s]].ptr, 0x34, 3);
        if (p2 && p2[0] === 0 && p2[1] === 0 && p2[2] === 0) {
          myTeam = rd(syncSelf[sk[s]].ptr + 0x58, "i32");
          break;
        }
      }
      var shown = 0;
      for (var i = 0; i < live.list.length; i++) {
        var e = live.list[i];
        var dx = (e.x - me.feet[0]) * k, dz = (e.z - me.feet[2]) * k;
        // Clamp to the rim rather than dropping: an enemy 200m away is still
        // information, and silently omitting it reads as "nobody there".
        var d = Math.sqrt(dx * dx + dz * dz);
        var cx = C, cz = C;
        if (d > C - 6) { cx = C + dx / d * (C - 6); cz = C + dz / d * (C - 6); }
        else { cx = C + dx; cz = C + dz; }
        var mate = (myTeam !== null && e.team === myTeam);
        ctx2.fillStyle = mate ? "#4f8f6a" : "#ff6e74";
        ctx2.beginPath();
        ctx2.arc(cx, cz, mate ? 2 : 3.2, 0, Math.PI * 2);
        ctx2.fill();
        shown++;
      }
      // us
      ctx2.fillStyle = "#7ee0a8";
      ctx2.beginPath(); ctx2.arc(C, C, 3, 0, Math.PI * 2); ctx2.fill();
      if (r.lg) {
        r.lg.textContent = "esp " + shown + " · " + Math.round(ESP.span) + "m" +
          (ESP.boxes ? " · fov " + Math.round(VIEW.fov) + "°" : "") +
          (myTeam !== null ? " · team" + myTeam : "");
      }
    } catch (_) {}
  }

  /* Is there a round to draw? Everything visual is gated on this.
   *
   * Without the gate the radar painted itself over the game's own loading
   * screen - "DOWNLOADING CONTENT" with a compass rose and a caption on top of
   * it, over the game's matchmaking text, before a single object existed. That
   * is not a small cosmetic thing: it is the client announcing itself on the
   * one screen everyone can see, over the thing they are trying to read.
   */
  function espLive() {
    var sync = SEEN.PhotonNetworkSync || {};
    if (!Object.keys(sync).length) return false;
    return !!localSpot();
  }

  function setOverlayVisible(on) {
    try {
      var r = RADAR;
      if (r && r.el) r.el.style.display = on ? "" : "none";
      var b = BOXES;
      if (b && b.cv) b.cv.style.display = on ? "" : "none";
    } catch (_) {}
  }

  function espLoop() {
    // Nothing exists until there is something to show. The element is not even
    // created while the game is still loading.
    if (!ESP.on || !espLive()) {
      setOverlayVisible(false);
      setTimeout(espLoop, 300);
      return;
    }
    setOverlayVisible(true);
    radar();
    if (ESP.boxes) boxCanvas();
    var live = null;
    try { live = liveEnemies(); } catch (_) {}
    try { drawEsp(); } catch (_) {}
    try { drawBoxes(live); } catch (_) {}
    // ~20fps. Every frame is wasteful for a radar and costs heap reads.
    setTimeout(espLoop, 50);
  }

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
      speed: {
        on: SPEED.on,
        factor: SPEED.factor,
        writes: SPEED_TOUCHED,
        // Which fields are being multiplied, and what was deliberately left
        // alone. This is the difference between "speed does something" and
        // knowing exactly what it does - the height/step fields that made the
        // player tall are listed here with their reason.
        scaled: SPEED_SCALED.slice(0, 16),
        skipped: SPEED_SKIPPED.slice(0, 16)
      },
      esp: recon(),
        // The local player has NO network position - PhotonNetworkSync+0x34 reads
        // zero for the local instance - so where we are comes from FPScontroller.
        // +0x2E4 is the body position, +0x298 the same point raised by eye height.
        view: viewState(),
        fov: VIEW.fov,
        // ESP state is reported, not just drawn. A toggle whose result cannot be
        // observed from outside cannot be tested, which is how a dead control
        // survives a green suite.
        espView: { on: ESP.on, boxes: ESP.boxes, span: ESP.span },
        local: (function () {
          var m = localSpot();
          if (!m) return null;
          return { ptr: "0x" + m.ptr.toString(16), feet: m.feet, eye: m.eye,
                   pitch: m.pitch, yaw: m.yaw, reach: m.reach };
        })(),
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
    if (report.esp && report.esp.note) report.warnings.push("ESP: " + report.esp.note);
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
    LAST = report;
    try { paintHud(report); } catch (_) {}
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
    try { espLoop(); } catch (_) {}
    try { buildMenu(); } catch (_) {}
    // Menu numbers refresh on their own clock; the report only lands every
    // ~1.2s and rebuilding the cards on each one would fight the user for
    // focus mid-drag.
    setInterval(refreshMenu, 900);
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
  // Paint the controls as soon as there is a body to put them in, independently
  // of the report loop, so they exist even if the first collect() throws.
  if (document.body) { try { hud(); } catch (_) {} }
  else document.addEventListener("DOMContentLoaded", function () { try { hud(); } catch (_) {} }, { once: true });
})();