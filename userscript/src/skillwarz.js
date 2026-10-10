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
        '<span id="sw2-status" style="color:#bda9c9">waiting for game frame…</span>' +
        '<button id="sw2-copy" style="display:none;margin-left:auto;background:' + ACCENT + ';border:0;color:#2a0f1b;border-radius:7px;padding:4px 10px;font-weight:700;cursor:pointer;">Copy JSON</button>' +
        '<button id="sw2-x" style="background:transparent;border:1px solid rgba(255,143,177,.4);color:#f7eef5;border-radius:7px;padding:4px 8px;cursor:pointer;">x</button>' +
        '</div>' +
        '<div style="padding:8px 12px;border-bottom:1px solid rgba(255,143,177,.18);display:flex;gap:6px;align-items:center;flex:0 0 auto;">' +
        '<button id="sw2-snap" style="background:transparent;border:1px solid rgba(255,143,177,.4);color:#f7eef5;border-radius:7px;padding:4px 9px;cursor:pointer;">Snapshot (F9)</button>' +
        '<span id="sw2-hint" style="color:#8d7a99">F9 twice while walking / sprinting / jumping marks which field is which.</span>' +
        '</div>' +
        '<pre id="sw2-out" style="margin:0;padding:10px 12px;overflow:auto;flex:1 1 auto;white-space:pre-wrap;word-break:break-word;font:inherit;' +
        'max-height:62vh;">No report yet.\n\nThis panel updates itself when the game frame loads — no console needed.\n\nIf it stays empty, Tampermonkey is not injecting into the cross-origin game frame.</pre>';

      var statusEl = root.querySelector("#sw2-status");
      var outEl = root.querySelector("#sw2-out");
      var copyBtn = root.querySelector("#sw2-copy");
      var closeBtn = root.querySelector("#sw2-x");
      var snapBtn = root.querySelector("#sw2-snap");
      var hintEl = root.querySelector("#sw2-hint");
      var payload = null;

      if (closeBtn) closeBtn.onclick = function () { try { root.remove(); } catch (_) {} };
      if (snapBtn) snapBtn.onclick = function () { down("snapshot"); };
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

  console.log("%c[sakura] SW-PLAYER ACTIVE", "color:" + ACCENT + ";font-weight:700", { host: HOST, href: location.href });
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
            if (flat.indexOf("UnityWebModkit") !== -1 && UWMK_LOG.length < 60) UWMK_LOG.push(flat.slice(0, 300));
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
  var ARM = { attempted: false, ok: false, error: null };
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
      RT.createPlugin({ name: "sakura-skillwarz", version: "2.0.0", referencedAssemblies: ASSEMBLIES.slice() });
      ARM.ok = true;
    } catch (err) { ARM.error = String((err && err.message) || err); }
  })();

  /* ---------------------------------------------------------------- *
   * ACTk codec. The dump gives the layout; this gives it meaning.
   * ---------------------------------------------------------------- */
  var _f32 = new Float32Array(1);
  var _i32 = new Int32Array(_f32.buffer);
  function bitsOf(f) { _f32[0] = f; return _i32[0]; }
  function floatOf(b) { _i32[0] = b | 0; return _f32[0]; }

  // key/hidden/inited/fake/fakeActive offsets per struct kind.
  var LAYOUT = {
    obfF: { key: 0x00, hidden: 0x04, inited: 0x0c, fake: 0x10, active: 0x14 },
    obfI: { key: 0x00, hidden: 0x04, inited: 0x08, fake: 0x0c, active: 0x10 },
    obfB: { key: 0x00, hidden: 0x04, inited: 0x08, fake: 0x09, active: 0x0a }
  };

  function readObf(vw, base, kind) {
    var L = LAYOUT[kind];
    if (!L) return null;
    var key = vw.readField(base + L.key, "u8").val() & 0xff;
    var hid = vw.readField(base + L.hidden, "i32").val() | 0;
    var init = vw.readField(base + L.inited, "u8").val() & 1;
    var fake = kind === "obfF" ? vw.readField(base + L.fake, "f32").val() : vw.readField(base + L.fake, kind === "obfI" ? "i32" : "u8").val();
    var act = vw.readField(base + L.active, "u8").val() & 1;
    var real;
    if (kind === "obfF") real = floatOf(hid ^ key);
    else if (kind === "obfI") real = (hid ^ key) | 0;
    else real = ((hid ^ key) & 0xff) !== 0 ? 1 : 0;
    return { real: real, fake: fake, act: act, init: init, key: key, hidden: hid };
  }

  // Writing through ACTk: the decoy must agree with the payload or
  // ObscuredCheatingDetector compares real vs fake every frame and flags it.
  // Clearing fakeValueActive makes currentRawValue return the decrypted value,
  // so the two sides are trivially consistent again.
  function writeObf(vw, base, kind, value) {
    var L = LAYOUT[kind];
    if (!L) return false;
    try {
      var cur = readObf(vw, base, kind);
      var key = cur.key;
      var hidden;
      if (kind === "obfF") hidden = bitsOf(value) ^ key;
      else if (kind === "obfI") hidden = (value | 0) ^ key;
      else hidden = ((value ? 1 : 0) & 0xff) ^ key;
      vw.writeField(base + L.hidden, "i32", hidden | 0);
      vw.writeField(base + L.fake, kind === "obfF" ? "f32" : kind === "obfI" ? "i32" : "u8",
                    kind === "obfF" ? value : kind === "obfI" ? (value | 0) : (value ? 1 : 0));
      vw.writeField(base + L.active, "u8", 0);
      return true;
    } catch (_) { return false; }
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
  var VW = null, plugin = null;
  var INSTANCES = {};   // typeName -> { ptr, firstSeen, hits }
  var HOOKS = [];       // { type, hook, keep }
  var HOOK_ERRORS = [];

  // Types to capture, and whether the hook stays on once it has fired. The
  // local player object is rebuilt on respawn, so those hooks stay armed and
  // simply notice when the pointer changes.
  var CAPTURE = [
    { type: "FPScontroller", keep: true },
    { type: "HealthScript", keep: true },
    { type: "WeaponManager", keep: false },
    { type: "GG_GameManager", keep: false }
  ];

  function captureArgs(typeName, enabled) {
    return function (self) {
      try {
        var p = self && self.val ? self.val() : 0;
        if (!p) return;
        var rec = INSTANCES[typeName];
        if (!rec || rec.ptr !== p) INSTANCES[typeName] = { ptr: p, firstSeen: Date.now(), hits: 0, replaced: !!rec };
        INSTANCES[typeName].hits++;
        if (!enabled) {
          var h = HOOKS.filter(function (x) { return x.type === typeName; })[0];
          if (h && h.hook) { try { h.hook.enabled = false; } catch (_) {} }
        }
      } catch (_) {}
    };
  }

  function registerHooks() {
    if (!window.UnityWebModkit || !window.UnityWebModkit.Runtime) return false;
    var RT = window.UnityWebModkit.Runtime;
    if (!RT.plugins || !RT.plugins.length) return false;
    VW = window.UnityWebModkit.ValueWrapper;
    plugin = RT.plugins[RT.plugins.length - 1];
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
    return true;
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

  function survey() {
    var out = {};
    var types = Object.keys(SK_FIELDS);
    for (var t = 0; t < types.length; t++) {
      var typeName = types[t];
      var rec = INSTANCES[typeName];
      if (!rec || !rec.ptr || !VW) continue;
      // SK_FIELDS[typeName] is a flat [[offset, kind], ...] list.
      var fields = SK_FIELDS[typeName] || [];
      var rows = [];
      var vw = null;
      for (var i = 0; i < fields.length; i++) {
        var off = fields[i][0];
        var kind = fields[i][1];
        try {
          if (!vw) vw = new VW(rec.ptr);
          if (kind.indexOf("obf") === 0) {
            var d = readObf(vw, off, kind);
            if (!d) continue;
            rows.push({
              o: off, k: kind, v: d.real, fake: d.fake, act: d.act, inited: d.init,
              raw: "key=" + d.key + " hid=" + d.hidden + " fake=" + d.fake + (d.act ? " ACTIVE" : "")
            });
          } else {
            var r = vw.readField(off, kind);
            if (!r) continue;
            rows.push({ o: off, k: kind, v: r.val(), raw: "" });
          }
        } catch (_) {}
      }
      if (rows.length) out[typeName] = rows;
    }
    return out;
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

  function onCommand(cmd) {
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

    var sv = {};
    var surveyError = null;
    try { sv = survey(); } catch (e) { surveyError = String((e && e.message) || e); }

    var report = {
      version: "2.0.0",
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
      hookErrors: HOOK_ERRORS.slice(0, 8),
      instances: instances,
      instancesReplaced: replaced,
      survey: sv,
      diff: DIFF.slice(0, 40),
      uwmkLog: UWMK_LOG.slice(0, 20),
      warnings: []
    };
    if (surveyError) report.warnings.push("survey failed: " + surveyError);
    if (ARM.error) report.warnings.push("UWMK arming failed: " + ARM.error);

    // The single most likely cause of "hooked but nothing captured": the
    // signature did not match, so Update() was never wrapped.
    if (report.hooksTotal > 0 && report.hooksApplied === 0 && sd) {
      report.warnings.push(
        "0 of " + report.hooksTotal + " Update() hooks applied. The signature " +
        "(this, MethodInfo*) -> void did not match this build, so nothing is hooked."
      );
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
        version: "2.0.0", when: new Date().toISOString(), elapsedMs: Date.now() - T0,
        host: HOST, uwmk: !!(window.UnityWebModkit && window.UnityWebModkit.Runtime),
        il2CppContext: false, arm: ARM, hooksTotal: HOOKS.length, hooksApplied: 0,
        instances: {}, survey: {}, collectError: String((err && err.message) || err)
      };
    }
  }

  function run() {
    var registered = false, ticks = 0;
    emit(safeCollect());
    (function poll() {
      var RT = (window.UnityWebModkit && window.UnityWebModkit.Runtime) || null;
      var ready = RT && RT.il2CppContext && RT.il2CppContext.scriptData;
      if (ready && !registered) { registered = registerHooks(); }
      ticks++;
      // Fast heartbeat once we are live so the value table actually moves;
      // slow heartbeat while UWMK is still downloading metadata.
      emit(safeCollect());
      if (!registered && ticks < 300) setTimeout(poll, 2000);
      else if (!Object.keys(INSTANCES).length && ticks < 300) setTimeout(poll, 2000);
      else setTimeout(poll, 1200);
    })();
  }

  if (document.body) run();
  else document.addEventListener("DOMContentLoaded", run, { once: true });
})();