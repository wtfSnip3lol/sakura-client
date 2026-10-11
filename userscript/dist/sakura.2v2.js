/* Sakura 2v2 — 2v2.io payload (unobfuscated source).
 * Built with `npm run build` into dist/sakura.2v2.js (obfuscated),
 * then INLINED into dist/sakura.loader.user.js and dist/sakura.2v2.user.js.
 *
 * 2v2.io is a Unity IL2CPP WebGL game on the Colyseus netcode. Class
 * names and field offsets come from an Il2CppDumper dump of the live
 * build (see ../../userscript/2v2-internals.md for the full map and
 * tools/gen-2v2-fields.mjs to regenerate it).
 *
 * ── What works ────────────────────────────────────────────────
 * ESP: the room's authoritative MyRoomState schema (players MapSchema)
 *      holds every player's position/health/team — read straight from
 *      the WASM heap, no transform walking, no interpolation noise.
 *      Projection from the local camera (position ≈ local player
 *      position + calibrated eye height, rotation from
 *      CharacterCamera.smoothedRotationForNeck, FOV from AimManager
 *      or Camera.get_fieldOfView via plugin.call).
 * Movement/weapon feel: field writes on the local
 *      ColyMovementController / Gun (base x multiplier, kour-style).
 * No-recoil: Gun.ApplyRecoil prefix block (camera-side only).
 *
 * ── What does NOT work (and is not pretended to) ──────────────
 * The server is authoritative for damage, pieces and scores
 * (ColyShooter.HandleShotRejectedByServer exists — it rejects shots
 * it doesn't like). Client-side health/damage writes move the local
 * mirror only. There is no online godmode; develop against FakeRoom
 * (offline mode, full client-side sim) instead.
 *
 * ── Hook discipline (same as kour) ────────────────────────────
 * Every hook is opt-in and OFF by default. A hook replaces a WASM
 * table entry with a JS trampoline; if the declared signature doesn't
 * match the real method the page throws
 * `RuntimeError: function signature mismatch` the moment that method
 * is first called. Enable one switch, reload, and only then enable
 * the next. Safe Mode skips UWMK entirely (overlay only).
 */

(() => {
  "use strict";
  if (!/(^|\.)2v2\.io$/.test(location.hostname || "")) return;
  if (window.__SAKURA_2V2__) return;
  window.__SAKURA_2V2__ = true;

  var ACCENT = "#ff6b9d";
  var ACCENT_HI = "#ffb3c6";

  // ── Settings ──
  var DEFAULTS = {
    // ESP (needs hookState)
    esp: false, boxes: true, names: true, health: true, team: true,
    lines: false, scale: 1,
    // combat (client-side feel; see header for what the server allows)
    noRecoil: false, noSpread: false, rapidFire: false,
    damageValue: 150, infAmmo: false,
    // movement
    speedPct: 100, jumpPct: 100, gravityPct: 100,
    // projection calibration (deliberate turn-and-diff, skillwarz-style)
    camHeight: 1.6, playerHeight: 1.8, fovOverride: 0,
    // protection
    safeMode: false,
    // hook switches — ALL OFF by default, flip + reload
    hookCapture: false,   // local objects (linker, view, transform, camera)
    hookState: false,     // room + MyRoomState (ESP source)
    hookNoRecoil: false   // Gun.ApplyRecoil prefix block
  };
  var settings = { ...DEFAULTS };
  try {
    Object.assign(settings, JSON.parse(localStorage.getItem("sakura.2v2.v1") || "{}"));
  } catch (_) {}
  function save() {
    try { localStorage.setItem("sakura.2v2.v1", JSON.stringify(settings)); } catch (_) {}
  }

  var status = {
    uwmk: !!window.UnityWebModkit,
    hooksOk: 0, hooksTotal: 0,
    gameLoaded: false,
    linker: false, msm: false, localView: false, localTransform: false,
    charCam: false, aimManager: false,
    room: false, state: false, spawner: false, pieceMgr: false,
    worldCamera: 0, players: 0, lastError: ""
  };

  // ── Overlay canvas ──
  var overlay = document.createElement("canvas");
  overlay.style.cssText = "position:fixed;inset:0;width:100vw;height:100vh;z-index:2147483646;pointer-events:none";
  var ctx = overlay.getContext("2d");
  var size = { w: 0, h: 0, dpr: 0 };
  function sizeOverlay() {
    var dpr = window.devicePixelRatio || 1;
    var w = window.innerWidth, h = window.innerHeight;
    if (w === size.w && h === size.h && dpr === size.dpr) return;
    size.w = w; size.h = h; size.dpr = dpr;
    overlay.width = Math.round(w * dpr);
    overlay.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  document.body.appendChild(overlay);

  // ══════════════════════════════════════════════════════════════
  // UWMK — hooks must be registered at document-start, before Unity's
  // boot scripts compile the WASM (hence the inlining in build.mjs).
  // ══════════════════════════════════════════════════════════════
  var VW = null, plugin = null;
  var hookRefs = {};
  // Captured pointers (raw numbers — wasm heap addresses).
  var linker = 0, msm = 0, localView = 0, localTransform = 0;
  var charCam = 0, aimManager = 0, spawner = 0, pieceMgr = 0;
  var room = 0, state = 0;
  var localController = 0, localShooter = 0, localComponents = [];
  var origCache = new Map(); // ptr -> Map(offset -> original number)

  function orig(ptr, off, type) {
    var m = origCache.get(ptr);
    if (!m) { m = new Map(); origCache.set(ptr, m); }
    if (!m.has(off)) {
      try {
        var r = new VW(ptr).readField(off, type);
        m.set(off, r !== undefined ? r.val() : null);
      } catch (_) { m.set(off, null); }
    }
    return m.get(off);
  }
  function writeNum(ptr, off, type, val) {
    try { new VW(ptr).writeField(off, type, val); } catch (_) {}
  }
  function scale(ptr, off, type, mult) {
    var o = orig(ptr, off, type);
    if (o != null) writeNum(ptr, off, type, o * mult);
  }

  function regPrefix(name, type, method, params, ret, cb, enabled) {
    try {
      var h = plugin.hookPrefix(
        { typeName: type, methodName: method, params: params, returnType: ret },
        cb
      );
      h.enabled = enabled !== false;
      hookRefs[name] = h;
      status.hooksTotal++;
      return h;
    } catch (e) {
      status.lastError = "hook " + name + ": " + ((e && e.message) || e);
      return null;
    }
  }
  function regPostfix(name, type, method, params, ret, cb, enabled) {
    try {
      var h = plugin.hookPostfix(
        { typeName: type, methodName: method, params: params, returnType: ret },
        cb
      );
      h.enabled = enabled !== false;
      hookRefs[name] = h;
      status.hooksTotal++;
      return h;
    } catch (e) {
      status.lastError = "hook " + name + ": " + ((e && e.message) || e);
      return null;
    }
  }

  var BLOCK = () => false;

  try {
    if (window.UnityWebModkit && !settings.safeMode) {
      VW = window.UnityWebModkit.ValueWrapper;
      plugin = window.UnityWebModkit.Runtime.createPlugin({
        name: "Sakura2v2",
        version: "1.0.0",
        // CoreModule unlocks Camera getters (get_fieldOfView,
        // get_pixelWidth/Height) via plugin.call — used for the ESP
        // projection, with a field-read fallback if it ever fails.
        referencedAssemblies: ["Assembly-CSharp.dll", "UnityEngine.CoreModule.dll"]
      });

      // ── Local object capture (hookCapture) ──
      // LocalPlayerLinker.Awake hands us the linker: worldCamera,
      // characterCamera and the MovementStateManager all hang off it.
      if (settings.hookCapture) regPostfix("capLinker", "LocalPlayerLinker", "Awake", ["i32"], undefined,
        (_res, self) => { if (!linker && self && self.val()) { linker = self.val(); status.linker = true; } }, true);
      // MovementStateManager.Awake: colyView@0x10, colyTransform@0x14.
      if (settings.hookCapture) regPostfix("capMSM", "MovementStateManager", "Awake", ["i32"], undefined,
        (_res, self) => { if (!msm && self && self.val()) { msm = self.val(); status.msm = true; } }, true);
      // ColyTransform.UpdateLocalPlayer only runs for the LOCAL player.
      if (settings.hookCapture) regPostfix("capTransform", "ColyTransform", "UpdateLocalPlayer", ["i32"], undefined,
        (_res, self) => { if (self && self.val()) { localTransform = self.val(); status.localTransform = true; } }, true);
      // AimManager.OnEnable: FOV fields (defaultFOVWorld@0x30 etc).
      if (settings.hookCapture) regPostfix("capAim", "AimManager", "OnEnable", ["i32"], undefined,
        (_res, self) => { if (!aimManager && self && self.val()) { aimManager = self.val(); status.aimManager = true; } }, true);

      // ── Room + state capture (hookState) — the ESP source ──
      // NetworkManager passes the room both ways: the setter's
      // argument and the getter's return value. Both are
      // captured because property accessors can be inlined at
      // call sites, in which case that path simply never fires.
      if (settings.hookState) regPostfix("capRoomSet", "NetworkManager", "set_CurrentRoom", ["i32", "i32"], undefined,
        (_res, _self, roomArg) => { if (roomArg && roomArg.val()) { room = roomArg.val(); status.room = true; } }, true);
      if (settings.hookState) regPostfix("capRoomGet", "NetworkManager", "get_CurrentRoom", ["i32"], "i32",
        (res) => { if (res && res.val()) { room = res.val(); status.room = true; } }, true);
      // PieceManager keeps its room as an INSTANCE field
      // (subscribedRoom@0x1C) — the static-free, getter-free
      // fallback that needs no property to ever be called.
      if (settings.hookState) regPostfix("capPieceMgr", "PieceManager", "OnEnable", ["i32"], undefined,
        (_res, self) => { if (self && self.val()) { pieceMgr = self.val(); status.pieceMgr = true; } }, true);
      // PlayerSpawner.allPlayers@0x10 is a Dictionary<string,
      // ColyView> — the fallback entity source if the schema
      // walk ever fails its sanity checks.
      if (settings.hookState) regPostfix("capSpawner", "PlayerSpawner", "Awake", ["i32"], undefined,
        (_res, self) => { if (self && self.val()) { spawner = self.val(); status.spawner = true; } }, true);

      // ── Feature hooks ──
      // Gun.ApplyRecoil() advances the camera recoil spring. Blocking it
      // removes recoil without touching damage/fire-rate fields.
      if (settings.hookNoRecoil) regPrefix("noRecoil", "Gun", "ApplyRecoil", ["i32"], undefined, BLOCK, !!settings.noRecoil);
    }
  } catch (e) {
    status.lastError = "UWMK init: " + ((e && e.message) || e);
  }

  function setHook(name, on) {
    var h = hookRefs[name];
    if (h) { try { h.enabled = !!on; } catch (_) {} }
  }

  // ══════════════════════════════════════════════════════════════
  // Heap readers (raw, via UWMK ValueWrapper + Runtime.memory)
  // ══════════════════════════════════════════════════════════════
  function readU32(ptr, off) {
    try { var r = new VW(ptr).readField(off, "u32"); return r ? r.val() : 0; } catch (_) { return 0; }
  }
  function readI32(ptr, off) {
    try { var r = new VW(ptr).readField(off, "i32"); return r ? r.val() : 0; } catch (_) { return 0; }
  }
  function readI16(ptr, off) {
    try { var r = new VW(ptr).readField(off, "i16"); return r ? r.val() : 0; } catch (_) { return 0; }
  }
  function readU8(ptr, off) {
    try { var r = new VW(ptr).readField(off, "u8"); return r ? r.val() : 0; } catch (_) { return 0; }
  }
  function readI8(ptr, off) {
    try { var r = new VW(ptr).readField(off, "i8"); return r ? r.val() : 0; } catch (_) { return 0; }
  }
  function readF32(ptr, off) {
    try { var r = new VW(ptr).readField(off, "f32"); return r ? r.val() : 0; } catch (_) { return 0; }
  }
  function readPtr(ptr, off) { return readU32(ptr, off); }
  function readVec3(ptr, off) {
    return { x: readF32(ptr, off), y: readF32(ptr, off + 4), z: readF32(ptr, off + 8) };
  }
  // IL2CPP string: length@0x8 (i32), UTF-16LE chars from 0xC.
  function readString(ptr, maxLen) {
    if (!ptr) return null;
    try {
      var len = readI32(ptr, 0x8);
      if (len <= 0 || len > (maxLen || 64)) return null;
      var bytes = window.UnityWebModkit.Runtime.memory(ptr + 0xC, len * 2);
      var s = "";
      for (var i = 0; i < len; i++) {
        var code = bytes[i * 2] | (bytes[i * 2 + 1] << 8);
        if (code === 0) break;
        s += String.fromCharCode(code);
      }
      return s;
    } catch (_) { return null; }
  }
  // IL2CPP array: bounds@0x8, max_length@0xC, data@0x10.
  function arrayLen(arrPtr) { return arrPtr ? readU32(arrPtr, 0xC) : 0; }
  function arrayAt(arrPtr, i) { return arrPtr ? readU32(arrPtr, 0x10 + i * 4) : 0; }

  // ── Dictionary<string,T> walk ──────────────────────────────────
  // IL2CPP Dictionary layout depends on where the instantiation's
  // comparer lives. Two candidates, probed at runtime and validated:
  //   A (comparer static):  buckets@0x8  entries@0xC  count@0x10
  //   B (comparer instance):buckets@0xC  entries@0x10 count@0x14
  function dictEntries(dictPtr, maxCount) {
    if (!dictPtr) return null;
    for (var shift = 0; shift <= 4; shift += 4) {
      var entries = readU32(dictPtr, 0xC + shift);
      var count = readI32(dictPtr, 0x10 + shift);
      if (entries && count >= 0 && count <= (maxCount || 64)) {
        return { entries: entries, count: count, shift: shift };
      }
    }
    return null;
  }
  // Entry: hashCode@0x0 (i32, -1 = free), next@0x4, key@0x8, value@0xC.
  // Entry[] is itself an IL2CPP array → data@0x10, 16 bytes per entry.
  function dictValues(dictPtr, maxCount) {
    var d = dictEntries(dictPtr, maxCount);
    if (!d) return [];
    var out = [];
    for (var i = 0; i < d.count; i++) {
      var base = 0x10 + i * 16;
      if (readI32(d.entries, base) < 0) continue;
      out.push(readU32(d.entries, base + 0xC));
    }
    return out;
  }

  // ── Class-name scan (used to find components on a ColyView) ────
  function className(ptr) {
    try { return new VW(ptr).getClassName(); } catch (_) { return null; }
  }
  // ColyView.allColyBehaviours@0x28 is a ColyBehaviour[] — the local
  // player's controller/shooter/health are all in there.
  function findComponent(viewPtr, wanted) {
    var arr = readPtr(viewPtr, 0x28);
    var n = Math.min(arrayLen(arr), 32);
    for (var i = 0; i < n; i++) {
      var p = arrayAt(arr, i);
      if (!p) continue;
      if (className(p) === wanted) return p;
    }
    return 0;
  }

  // ══════════════════════════════════════════════════════════════
  // Schema walk — MyRoomState (the ESP source of truth)
  // ══════════════════════════════════════════════════════════════
  // room (ColyseusRoom<MyRoomState>): state is the first instance
  // field of the Colyseus SDK's Room<TState> → @0x10.
  // MyRoomState: Schema(_metadata@0x8) + players MapSchema<Player>@0x10.
  // MapSchema<T>: SchemaCollection.items Dictionary<string,T>@0x10.
  function readState() {
    if (!room) return 0;
    var st = readPtr(room, 0x10);
    if (!st) return 0;
    // Sanity: players MapSchema must exist and its dictionary must be
    // walkable with a sane count, or this isn't a MyRoomState.
    var players = readPtr(st, 0x10);
    if (!players) return 0;
    var items = readPtr(players, 0x10);
    if (!items) return 0;
    var d = dictEntries(items, 64);
    if (!d) return 0;
    return st;
  }

  function readPlayersFromState() {
    var out = [];
    if (!state) return out;
    var players = readPtr(state, 0x10);
    var items = readPtr(players, 0x10);
    var values = dictValues(items, 64);
    for (var i = 0; i < values.length; i++) {
      var p = values[i];
      if (!p) continue;
      var rigid = readPtr(p, 0x30); // ColyRigid
      if (!rigid) continue;
      // ColyRigid.position is a ColyVector3 (a Colyseus Schema
      // class — a reference, not an inline struct), and its x/y/z
      // live at +0x10/+0x14/+0x18 of that object.
      var cv = readPtr(rigid, 0x10);
      if (!cv) continue;
      out.push({
        ptr: p,
        playerId: readString(readPtr(p, 0x10), 64),
        nickname: readString(readPtr(p, 0x14), 32),
        health: readI16(p, 0x34),
        shield: readU8(p, 0x36),
        team: readI8(p, 0x43),
        aiming: readU8(p, 0x3E) !== 0,
        crouching: readU8(p, 0x3D) !== 0,
        pos: { x: readF32(cv, 0x10), y: readF32(cv, 0x14), z: readF32(cv, 0x18) },
        isAlive: readU8(p, 0x64) !== 0 // isAliveInRound (bool@0x64)
      });
    }
    return out;
  }

  // Primary source is the room schema. If that walk fails its
  // sanity checks, fall back to PlayerSpawner.allPlayers —
  // a Dictionary<string, ColyView> whose entries expose the
  // very same Player schema object at ColyView.playerState@0x24.
  function readPlayers() {
    var out = readPlayersFromState();
    if (out.length || !spawner) return out;
    var views = dictValues(readPtr(spawner, 0x10), 64);
    for (var i = 0; i < views.length; i++) {
      var v = views[i];
      if (!v) continue;
      var p = readPtr(v, 0x24); // playerState → Player
      if (!p) continue;
      var rigid = readPtr(p, 0x30);
      if (!rigid) continue;
      var cv = readPtr(rigid, 0x10);
      if (!cv) continue;
      out.push({
        ptr: p,
        playerId: readString(readPtr(p, 0x10), 64),
        nickname: readString(readPtr(p, 0x14), 32),
        health: readI16(p, 0x34),
        shield: readU8(p, 0x36),
        team: readI8(p, 0x43),
        aiming: readU8(p, 0x3E) !== 0,
        crouching: readU8(p, 0x3D) !== 0,
        pos: { x: readF32(cv, 0x10), y: readF32(cv, 0x14), z: readF32(cv, 0x18) },
        isAlive: readU8(p, 0x64) !== 0
      });
    }
    return out;
  }

  // ══════════════════════════════════════════════════════════════
  // Local player + projection calibration
  // ══════════════════════════════════════════════════════════════
  function deriveLocal() {
    if (linker && !msm) msm = readPtr(linker, 0x1C);
    if (msm && !localView) localView = readPtr(msm, 0x10);
    if (msm && !localTransform) localTransform = readPtr(msm, 0x14);
    if (linker && !charCam) charCam = readPtr(linker, 0x2C);
    if (linker && !status.worldCamera) status.worldCamera = readPtr(linker, 0x24);
    if (localView && !localComponents.length) {
      var arr = readPtr(localView, 0x28);
      var n = Math.min(arrayLen(arr), 32);
      for (var i = 0; i < n; i++) {
        var p = arrayAt(arr, i);
        if (p) localComponents.push(p);
      }
    }
    if (localView && !localController) localController = findComponent(localView, "ColyMovementController");
    if (localView && !localShooter) localShooter = findComponent(localView, "ColyShooter");
    // Room: three independent paths — the setter's argument,
    // the getter's return, and PieceManager's instance field.
    if (pieceMgr && !room) {
      var r = readPtr(pieceMgr, 0x1C); // subscribedRoom
      if (r) { room = r; status.room = true; }
    }
    if (room && !state) {
      var st = readState();
      if (st) { state = st; status.state = true; }
    }
  }

  function localCamPos() {
    // Camera sits at the local player's position + eye height. The
    // exact offset is build-dependent — camHeight slider calibrates it.
    if (!localTransform) return null;
    var p = readVec3(localTransform, 0x24); // lastSentPosition
    if (!p || (p.x === 0 && p.y === 0 && p.z === 0)) return null;
    return { x: p.x, y: p.y + (Number(settings.camHeight) || 1.6), z: p.z };
  }

  function localCamBasis() {
    // CharacterCamera.smoothedRotationForNeck@0x1C is a Quaternion
    // (x@0x1C, y@0x20, z@0x24, w@0x28) — the camera's smoothed
    // orientation. Convert to a right/up/forward basis (Unity is
    // left-handed, Y-up, Z-forward).
    if (!charCam) return null;
    var qx = readF32(charCam, 0x1C), qy = readF32(charCam, 0x20);
    var qz = readF32(charCam, 0x24), qw = readF32(charCam, 0x28);
    if (qx === 0 && qy === 0 && qz === 0 && qw === 0) return null;
    var r = {
      x: 1 - 2 * (qy * qy + qz * qz), y: 2 * (qx * qy + qw * qz), z: 2 * (qx * qz - qw * qy),
    };
    var u = {
      x: 2 * (qx * qy - qw * qz), y: 1 - 2 * (qx * qx + qz * qz), z: 2 * (qy * qz + qw * qx),
    };
    var f = {
      x: 2 * (qx * qz + qw * qy), y: 2 * (qy * qz - qw * qx), z: 1 - 2 * (qx * qx + qy * qy),
    };
    // Reject degenerate quaternions (w component alone is not enough
    // evidence, but a zero-length forward vector is a wrong read).
    var fl = Math.hypot(f.x, f.y, f.z);
    if (fl < 0.9 || fl > 1.1) return null;
    return { r: r, u: u, f: f };
  }

  function cameraFov() {
    if (Number(settings.fovOverride) > 0) return Number(settings.fovOverride);
    // Live aim FOV first (field-read, always available).
    if (aimManager) {
      var f = readF32(aimManager, 0x34); // targetFOVWorld
      if (f > 10 && f < 179) return f;
      f = readF32(aimManager, 0x28);     // initialFOV
      if (f > 10 && f < 179) return f;
    }
    // Then the camera itself, if CoreModule made it callable.
    if (plugin && status.worldCamera) {
      try {
        var v = plugin.call("UnityEngine.Camera", "get_fieldOfView", [status.worldCamera]);
        if (typeof v === "number" && v > 10 && v < 179) return v;
      } catch (_) {}
    }
    return 60;
  }

  // World → screen. Returns null when behind the camera or off-screen.
  function project(wx, wy, wz, basis, camPos, fovDeg) {
    var dx = wx - camPos.x, dy = wy - camPos.y, dz = wz - camPos.z;
    var vx = dx * basis.r.x + dy * basis.r.y + dz * basis.r.z;
    var vy = dx * basis.u.x + dy * basis.u.y + dz * basis.u.z;
    var vz = dx * basis.f.x + dy * basis.f.y + dz * basis.f.z;
    if (vz <= 0.05) return null;
    var f = 1 / Math.tan((fovDeg * Math.PI / 180) / 2);
    var aspect = size.w / size.h;
    var nx = (vx * f) / (vz * aspect);
    var ny = (vy * f) / vz;
    if (nx < -1.3 || nx > 1.3 || ny < -1.3 || ny > 1.3) return null;
    return {
      x: (nx * 0.5 + 0.5) * size.w,
      y: (1 - (ny * 0.5 + 0.5)) * size.h,
      depth: vz
    };
  }

  // ══════════════════════════════════════════════════════════════
  // Field writes (200 ms tick — fast enough to beat re-derivation,
  // same discipline as kour: base x multiplier, nothing written while
  // a slider sits at its default).
  // ══════════════════════════════════════════════════════════════
  var currentGunCache = { ptr: 0, idx: -1 };
  function currentGun() {
    if (!localShooter) return 0;
    var idx = readI32(localShooter, 0x40); // currentGunLocalIndex
    var inv = readPtr(localShooter, 0x38); // myInventory (Gun[])
    if (!inv) return 0;
    var n = arrayLen(inv);
    if (idx < 0 || idx >= n) return 0;
    var g = arrayAt(inv, idx);
    currentGunCache.ptr = g;
    return g;
  }

  setInterval(() => {
    if (!VW || !window.unityInstance) return;
    deriveLocal();

    var sp = (Number(settings.speedPct) || 100) / 100;
    var jp = (Number(settings.jumpPct) || 100) / 100;
    var gp = (Number(settings.gravityPct) || 100) / 100;

    // ── Movement (ColyMovementController, the KCC subclass) ──
    try {
      if (localController && (sp !== 1 || jp !== 1 || gp !== 1)) {
        if (sp !== 1) {
          scale(localController, 0x98, "f32", sp); // MaxStableMoveSpeed
          scale(localController, 0xA4, "f32", sp); // MaxAirMoveSpeed
          scale(localController, 0xA8, "f32", sp); // AirAccelerationSpeed
        }
        if (jp !== 1) {
          scale(localController, 0xB4, "f32", jp); // JumpUpSpeed
          scale(localController, 0xB8, "f32", jp); // JumpScalableForwardSpeed
        }
        if (gp !== 1) {
          scale(localController, 0xC4, "f32", gp); // Gravity.x
          scale(localController, 0xAC, "f32", gp); // Drag
        }
      }
    } catch (_) {}

    // ── Weapon (Gun) ──
    try {
      var g = currentGun();
      if (g) {
        if (settings.noSpread) {
          writeNum(g, 0xB0, "f32", 0);   // bloom
          writeNum(g, 0xC4, "f32", 0);   // recoilBloomAdd
          writeNum(g, 0xC8, "f32", 0);   // staticBloom
          writeNum(g, 0xC0, "f32", 0);   // velocityBloomMulti
        }
        if (settings.damageExp || settings.damageValue !== 150) {
          var dmg = Math.max(1, Number(settings.damageValue) || 150);
          writeNum(g, 0xA0, "f32", dmg); // baseDamage
        }
        if (settings.infAmmo) {
          writeNum(g, 0xDC, "i32", 999); // _currentAmmo (client mirror)
        }
        if (settings.rapidFire) {
          scale(g, 0x90, "f32", 0.1);    // fireRate
          writeNum(g, 0x8C, "f32", -999); // nextFireTime — always ready
        }
      }
    } catch (_) {}
  }, 200);

  // Game-load + hook status ticker.
  setInterval(() => {
    status.gameLoaded = !!window.unityInstance;
    try {
      var n = 0;
      for (var k in hookRefs) { if (hookRefs[k] && hookRefs[k].applied) n++; }
      status.hooksOk = n;
    } catch (_) {}
    status.players = state ? readPlayers().length : 0;
  }, 1000);

  // ══════════════════════════════════════════════════════════════
  // ESP render loop
  // ══════════════════════════════════════════════════════════════
  function drawESP() {
    if (!settings.esp || !settings.boxes) return;
    var basis = localCamBasis();
    var camPos = localCamPos();
    if (!basis || !camPos) return;
    var fov = cameraFov();
    var players = readPlayers();
    // The local ColyView.playerState@0x24 points at our own
    // Player schema object — the exact self check.
    var myState = localView ? readPtr(localView, 0x24) : 0;

    for (var i = 0; i < players.length; i++) {
      var p = players[i];
      if (!p.pos) continue;
      if (myState && p.ptr === myState) continue; // skip self

      var feet = project(p.pos.x, p.pos.y, p.pos.z, basis, camPos, fov);
      var head = project(p.pos.x, p.pos.y + (Number(settings.playerHeight) || 1.8), p.pos.z, basis, camPos, fov);
      if (!feet && !head) continue;

      var teamColor = p.team === 0 ? "rgba(79,143,106,.9)" : "rgba(255,110,116,.95)";
      var s = Number(settings.scale) || 1;

      if (feet && head) {
        var top = Math.min(feet.y, head.y);
        var hgt = Math.max(4, Math.abs(feet.y - head.y) * s);
        var wdt = Math.max(6, hgt * 0.45 * s);
        if (settings.team) ctx.strokeStyle = teamColor;
        else ctx.strokeStyle = "rgba(255,179,198,.9)";
        ctx.lineWidth = 2;
        ctx.strokeRect(feet.x - wdt / 2, top, wdt, hgt);

        if (settings.health && (p.health > 0 || p.shield > 0)) {
          var hp = Math.max(0, Math.min(100, p.health + p.shield));
          var bw = wdt * (hp / 100);
          ctx.fillStyle = "rgba(255,110,116,.9)";
          ctx.fillRect(feet.x - wdt / 2, top - 6, bw, 4);
          ctx.strokeStyle = "rgba(0,0,0,.5)";
          ctx.lineWidth = 1;
          ctx.strokeRect(feet.x - wdt / 2, top - 6, wdt, 4);
        }
        if (settings.names && p.nickname) {
          ctx.fillStyle = "rgba(255,235,240,.9)";
          ctx.font = "11px ui-sans-serif,system-ui,sans-serif";
          ctx.textAlign = "center";
          ctx.fillText(p.nickname, feet.x, top - 10);
        }
        if (settings.lines) {
          ctx.beginPath();
          ctx.moveTo(size.w / 2, size.h);
          ctx.lineTo(feet.x, top);
          ctx.strokeStyle = teamColor;
          ctx.lineWidth = 1;
          ctx.setLineDash([5, 5]);
          ctx.stroke();
          ctx.setLineDash([]);
        }
      }
    }
  }

  function loop() {
    requestAnimationFrame(loop);
    sizeOverlay();
    ctx.clearRect(0, 0, size.w, size.h);
    if (!settings.safeMode) drawESP();
  }

  // ── UI (sakura panel, same shell as the other payloads) ──
  var host = document.createElement("div");
  host.id = "sakura-ui-2v2";
  host.style.cssText = "position:fixed;inset:0;z-index:2147483647;pointer-events:none;";
  var shadow = host.attachShadow({ mode: "open" });
  document.body.appendChild(host);

  var menuOpen = false;
  var uiState = {};
  try { uiState = JSON.parse(localStorage.getItem("sakura.ui.2v2.v1") || "{}"); } catch (_) {}

  function ico(path) {
    var s = document.createElement("span");
    s.setAttribute("aria-hidden", "true");
    s.innerHTML = `<svg viewBox="0 0 24 24">${path}</svg>`;
    return s;
  }
  function toggleSwitch(on, onChange) {
    var sw = document.createElement("button");
    sw.type = "button";
    sw.className = "sk-switch";
    sw.setAttribute("role", "switch");
    sw.setAttribute("aria-checked", String(!!on));
    sw.onclick = (e) => {
      e.stopPropagation();
      var v = sw.getAttribute("aria-checked") !== "true";
      sw.setAttribute("aria-checked", String(v));
      onChange(v);
    };
    return sw;
  }
  function rangeField(value, min, max, step, onChange) {
    var wrap = document.createElement("div");
    wrap.className = "sk-range";
    var input = document.createElement("input");
    input.type = "range"; input.className = "sk-slider";
    input.min = min; input.max = max; input.step = step; input.value = value;
    var val = document.createElement("span");
    val.className = "sk-val";
    val.textContent = Number(value).toFixed(2).replace(/\.?0+$/, "");
    input.oninput = () => {
      val.textContent = Number(input.value).toFixed(2).replace(/\.?0+$/, "");
      wrap.style.setProperty("--p", ((input.value - min) / (max - min) * 100) + "%");
      onChange(Number(input.value));
    };
    wrap.style.setProperty("--p", ((value - min) / (max - min) * 100) + "%");
    wrap.append(input, val);
    return wrap;
  }
  function row(label, ctl) {
    var r = document.createElement("div");
    r.className = "sk-ctl";
    var lab = document.createElement("span");
    lab.className = "sk-label";
    lab.textContent = label;
    r.append(lab, ctl);
    return r;
  }
  function moduleCard(title, isOn, onToggle, bodyRows) {
    var card = document.createElement("div");
    card.className = "sk-card" + (isOn ? " on" : "");
    var head = document.createElement("div");
    head.className = "sk-card-head";
    var t = document.createElement("div");
    t.className = "sk-card-title";
    var strong = document.createElement("strong");
    strong.textContent = title;
    t.appendChild(strong);
    if (onToggle) {
      var sw = toggleSwitch(isOn, (v) => {
        card.classList.toggle("on", v);
        onToggle(v);
      });
      head.append(t, sw);
    } else {
      head.appendChild(t);
    }
    card.appendChild(head);
    if (bodyRows && bodyRows.length) {
      var body = document.createElement("div");
      body.className = "sk-mbody";
      for (var r of bodyRows) body.appendChild(r);
      card.appendChild(body);
    }
    return card;
  }
  function statLine(text) {
    var d = document.createElement("div");
    d.className = "sk-ctl";
    d.style.cssText = "font-size:11px;color:rgba(246,238,242,.6)";
    d.textContent = text;
    return d;
  }

  function buildPanel() {
    var panel = document.createElement("div");
    panel.className = "mn-panel";

    var side = document.createElement("nav");
    side.className = "mn-side";
    var logoWrap = document.createElement("div");
    logoWrap.className = "mn-logo";
    logoWrap.innerHTML = `<svg viewBox="0 0 24 24"><defs><linearGradient id="sk-grad" x1="4" y1="3" x2="20" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ffe0ec"/><stop offset="0.45" stop-color="#ffb3c6"/><stop offset="1" stop-color="#ff6b9d"/></linearGradient></defs><path d="M12 21c-1.5-2.5-4-4.5-4-7.5 0-2.5 1.8-4.5 4-4.5s4 2 4 4.5c0 3-2.5 5-4 7.5z" fill="none" stroke="url(#sk-grad)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 3v4M12 3c-1.5 0-2.5 1-2.5 2.5M12 3c1.5 0 2.5 1 2.5 2.5" fill="none" stroke="url(#sk-grad)" stroke-width="1.5" stroke-linecap="round"/><circle cx="12" cy="10" r="1.5" fill="#ff6b9d"/></svg>`;
    side.appendChild(logoWrap);

    var main = document.createElement("div");
    main.className = "mn-main";
    var top = document.createElement("header");
    top.className = "mn-top";
    var heading = document.createElement("h2");
    heading.className = "mn-h";
    heading.textContent = "2v2.io";
    var close = document.createElement("button");
    close.type = "button";
    close.className = "mn-close";
    close.innerHTML = '<svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6 6 18"/></svg>';
    close.onclick = () => setMenuOpen(false);
    top.append(heading, close);

    var offset = null;
    top.addEventListener("pointerdown", (e) => {
      if (e.target.closest("button, input")) return;
      var r = panel.getBoundingClientRect();
      offset = [e.clientX - r.left, e.clientY - r.top];
      top.setPointerCapture(e.pointerId);
      panel.classList.add("sk-dragging");
    });
    top.addEventListener("pointermove", (e) => {
      if (!offset) return;
      panel.style.left = Math.min(Math.max(0, e.clientX - offset[0]), window.innerWidth - 200) + "px";
      panel.style.top = Math.min(Math.max(0, e.clientY - offset[1]), window.innerHeight - 100) + "px";
      panel.style.right = "auto"; panel.style.bottom = "auto";
    });
    var endDrag = () => {
      if (!offset) return;
      offset = null;
      panel.classList.remove("sk-dragging");
      var r = panel.getBoundingClientRect();
      uiState.x = r.left; uiState.y = r.top;
      saveUi();
    };
    top.addEventListener("pointerup", endDrag);
    top.addEventListener("pointercancel", endDrag);

    var cols = document.createElement("div");
    cols.className = "mn-cols";
    main.append(top, cols);
    panel.append(side, main);

    function cards() {
      return [
        moduleCard("ESP — server schema", settings.esp, (v) => { settings.esp = v; save(); }, [
          row("Boxes", toggleSwitch(settings.boxes, (v) => { settings.boxes = v; save(); })),
          row("Names", toggleSwitch(settings.names, (v) => { settings.names = v; save(); })),
          row("Health", toggleSwitch(settings.health, (v) => { settings.health = v; save(); })),
          row("Team colors", toggleSwitch(settings.team, (v) => { settings.team = v; save(); })),
          row("Lines", toggleSwitch(settings.lines, (v) => { settings.lines = v; save(); })),
          row("Scale", rangeField(settings.scale, 0.5, 2, 0.05, (v) => { settings.scale = v; save(); })),
        ]),
        moduleCard("Combat", false, null, [
          row("No recoil (hook)", toggleSwitch(settings.noRecoil, (v) => { settings.noRecoil = v; save(); })),
          row("No bloom", toggleSwitch(settings.noSpread, (v) => { settings.noSpread = v; save(); })),
          row("Rapid fire", toggleSwitch(settings.rapidFire, (v) => { settings.rapidFire = v; save(); })),
          row("Damage", rangeField(settings.damageValue, 1, 500, 1, (v) => { settings.damageValue = v; save(); })),
          row("Infinite ammo", toggleSwitch(settings.infAmmo, (v) => { settings.infAmmo = v; save(); })),
        ]),
        moduleCard("Movement", false, null, [
          row("Speed %", rangeField(settings.speedPct, 50, 200, 1, (v) => { settings.speedPct = v; save(); })),
          row("Jump %", rangeField(settings.jumpPct, 50, 200, 1, (v) => { settings.jumpPct = v; save(); })),
          row("Gravity %", rangeField(settings.gravityPct, 10, 200, 1, (v) => { settings.gravityPct = v; save(); })),
        ]),
        moduleCard("Calibration", false, null, [
          row("Eye height", rangeField(settings.camHeight, 0.8, 2.6, 0.02, (v) => { settings.camHeight = v; save(); })),
          row("Player height", rangeField(settings.playerHeight, 1.2, 2.4, 0.02, (v) => { settings.playerHeight = v; save(); })),
          row("FOV (0 = auto)", rangeField(settings.fovOverride, 0, 120, 1, (v) => { settings.fovOverride = v; save(); })),
        ]),
        moduleCard("Safety", settings.safeMode, (v) => {
          settings.safeMode = v; save();
          // Safe mode can only fully apply on reload — UWMK is already
          // armed at this point otherwise.
          if (v) { for (var n in hookRefs) setHook(n, false); }
        }, [
          row("Hook: local capture", toggleSwitch(settings.hookCapture, (v) => { settings.hookCapture = v; save(); })),
          row("Hook: room/state", toggleSwitch(settings.hookState, (v) => { settings.hookState = v; save(); })),
          row("Hook: no recoil", toggleSwitch(settings.hookNoRecoil, (v) => { settings.hookNoRecoil = v; save(); })),
          statLine("hooks " + status.hooksOk + "/" + status.hooksTotal + " applied"),
          statLine("players " + status.players + " · state " + (status.state ? "ok" : "—")),
          statLine("linker " + (status.linker ? "✓" : "—") + " view " + (status.localView ? "✓" : "—") + " cam " + (status.charCam ? "✓" : "—")),
          status.lastError ? statLine(String(status.lastError).slice(0, 90)) : statLine("no errors"),
        ]),
      ];
    }
    cols.replaceChildren(...cards());

    if (Number.isFinite(uiState.x)) {
      panel.style.left = uiState.x + "px";
      panel.style.top = uiState.y + "px";
      panel.style.right = "auto"; panel.style.bottom = "auto";
    }
    return panel;
  }

  function saveUi() {
    try { localStorage.setItem("sakura.ui.2v2.v1", JSON.stringify(uiState)); } catch (_) {}
  }

  var panelEl = null;
  function setMenuOpen(v) {
    menuOpen = v;
    if (!panelEl) {
      var style = document.createElement("style");
      style.textContent = CSS;
      shadow.appendChild(style);
      panelEl = buildPanel();
      shadow.appendChild(panelEl);
      requestAnimationFrame(() => panelEl.classList.add("shown"));
    }
    panelEl.classList.toggle("shown", v);
    if (v) refreshPanel();
  }
  function toggleMenu() { setMenuOpen(!menuOpen); }

  // Refresh the dynamic status lines without rebuilding the whole panel.
  function refreshPanel() {
    if (!panelEl) return;
    var stats = panelEl.shadowRoot || shadow;
    var lines = panelEl.querySelectorAll(".sk-ctl");
    // Rebuild is simplest and cheap: the panel is small.
    var cols = panelEl.querySelector(".mn-cols");
    if (cols) {
      var cards = buildPanelCards();
      cols.replaceChildren(...cards);
      if (Number.isFinite(uiState.x)) {
        panelEl.style.left = uiState.x + "px";
        panelEl.style.top = uiState.y + "px";
      }
    }
  }
  function buildPanelCards() {
    // Same as buildPanel().cards() but without the chrome.
    var p = buildPanel();
    return p.querySelector(".mn-cols").children;
  }

  window.addEventListener("keydown", (e) => {
    if (e.code === "Insert") { e.preventDefault(); toggleMenu(); }
  }, true);

  var btnEl = document.createElement("div");
  btnEl.style.cssText = "position:fixed;top:12px;right:12px;z-index:2147483646;cursor:pointer;width:26px;height:26px;opacity:0.5;transition:opacity 0.2s;pointer-events:auto;filter:drop-shadow(0 0 4px rgba(255,107,157,0.7))";
  btnEl.innerHTML = `<svg viewBox="0 0 24 24"><defs><linearGradient id="sk-grad" x1="4" y1="3" x2="20" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ffe0ec"/><stop offset="0.45" stop-color="#ffb3c6"/><stop offset="1" stop-color="#ff6b9d"/></linearGradient></defs><path d="M12 21c-1.5-2.5-4-4.5-4-7.5 0-2.5 1.8-4.5 4-4.5s4 2 4 4.5c0 3-2.5 5-4 7.5z" fill="none" stroke="url(#sk-grad)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 3v4M12 3c-1.5 0-2.5 1-2.5 2.5M12 3c1.5 0 2.5 1 2.5 2.5" fill="none" stroke="url(#sk-grad)" stroke-width="1.5" stroke-linecap="round"/><circle cx="12" cy="10" r="1.5" fill="#ff6b9d"/></svg>`;
  btnEl.title = "Sakura Client - 2v2.io";
  btnEl.onmouseenter = () => btnEl.style.opacity = "1";
  btnEl.onmouseleave = () => btnEl.style.opacity = "0.5";
  btnEl.onclick = (e) => { e.stopPropagation(); toggleMenu(); };
  document.body.appendChild(btnEl);

  var CSS = `
  :host { all: initial; }
  * { box-sizing: border-box; margin: 0; font-family: "Inter", "Segoe UI", system-ui, sans-serif; }
  .mn-panel { position: absolute; right: 24px; bottom: 24px; width: min(320px, calc(100vw - 48px)); max-height: min(480px, calc(100vh - 48px));
    display: flex; gap: 10px; padding: 10px; border-radius: 22px; pointer-events: auto;
    background: rgba(24,17,21,.78); backdrop-filter: blur(22px) saturate(150%); -webkit-backdrop-filter: blur(22px) saturate(150%);
    box-shadow: 0 0 0 1px rgba(255,255,255,.06), inset 0 1px 0 rgba(255,255,255,.05), 0 30px 80px rgba(0,0,0,.55);
    opacity: 0; transform: translateY(18px); pointer-events: none; transition: opacity .35s ease, transform .45s cubic-bezier(.22,1,.36,1);
    color: #f6eef2; font-size: 13px; }
  .mn-panel.shown { opacity: 1; transform: none; pointer-events: auto; }
  .mn-panel.sk-dragging { transition: none; }
  .mn-side { display: flex; flex-direction: column; align-items: center; gap: 4px; width: 62px; flex: none; padding: 12px 0; border-radius: 16px;
    background: rgba(255,255,255,.025); box-shadow: inset 0 0 0 1px rgba(255,255,255,.05); }
  .mn-logo { display: grid; place-items: center; width: 32px; height: 32px; }
  .mn-logo svg { width: 25px; height: 25px; overflow: visible; filter: drop-shadow(0 0 4px rgba(255,107,157,.8)) drop-shadow(0 0 10px rgba(255,107,157,.4)); }
  .mn-main { flex: 1; min-width: 0; display: flex; flex-direction: column; }
  .mn-top { display: flex; align-items: center; gap: 12px; padding: 6px 6px 12px; cursor: grab; user-select: none; touch-action: none; }
  .mn-h { font-size: 17px; font-weight: 650; letter-spacing: -.01em; }
  .mn-close { display: grid; place-items: center; width: 28px; height: 28px; border: 0; border-radius: 8px; background: transparent; color: inherit; opacity: .45; cursor: pointer; transition: opacity .2s, background .2s; }
  .mn-close:hover { opacity: 1; background: rgba(255,255,255,.05); }
  .mn-close svg { width: 14px; height: 14px; fill: none; stroke: currentColor; stroke-width: 2; stroke-linecap: round; }
  .mn-cols { flex: 1; min-height: 0; overflow-y: auto; display: grid; grid-template-columns: 1fr; gap: 10px; padding: 0 4px 6px 0; }
  .sk-card { border-radius: 12px; background: rgba(255,255,255,.025); box-shadow: inset 0 0 0 1px rgba(255,255,255,.05); transition: box-shadow .25s, background .25s; animation: mn-in .35s ease both; }
  .sk-card.on { background: rgba(255,255,255,.04); box-shadow: inset 0 0 0 1px rgba(255,107,157,.28), 0 0 0 1px rgba(255,107,157,.06), 0 8px 30px rgba(255,107,157,.06); }
  .sk-card-head { display: flex; align-items: center; gap: 8px; padding: 11px 12px; }
  .sk-card-title { flex: 1; min-width: 0; }
  .sk-card-title strong { font-size: 13px; font-weight: 600; color: rgba(246,238,242,.45); transition: color .2s; }
  .sk-card.on .sk-card-title strong { color: #fff0f5; }
  .sk-mbody { padding: 0 12px 10px; }
  .sk-ctl { display: flex; align-items: center; gap: 8px; padding: 4px 0; font-size: 11.5px; }
  .sk-label { flex: 1; color: rgba(246,238,242,.75); }
  .sk-switch { position: relative; width: 26px; height: 14px; border: 0; border-radius: 99px; background: rgba(255,255,255,.07); cursor: pointer; flex: none; transition: background .2s; }
  .sk-switch::after { content: ""; position: absolute; top: 3px; left: 3px; width: 8px; height: 8px; border-radius: 50%; background: rgba(255,255,255,.25); transition: left .2s, background .2s, box-shadow .2s; }
  .sk-switch[aria-checked="true"] { background: rgba(255,107,157,.25); }
  .sk-switch[aria-checked="true"]::after { left: 15px; background: #ff6b9d; box-shadow: 0 0 6px #ff6b9d; }
  .sk-range { display: flex; align-items: center; gap: 8px; }
  .sk-slider { -webkit-appearance: none; appearance: none; width: 90px; height: 8px; background: transparent; }
  .sk-slider::-webkit-slider-runnable-track { height: 2px; border-radius: 2px; background: linear-gradient(#ff6b9d, #ff6b9d) 0 0 / var(--p, 50%) 100% no-repeat, rgba(255,255,255,.08); }
  .sk-slider::-webkit-slider-thumb { -webkit-appearance: none; width: 6px; height: 6px; margin-top: -2px; border-radius: 50%; background: #ff6b9d; box-shadow: 0 0 0 2px rgba(255,107,157,.4); }
  .sk-slider::-moz-range-track { height: 2px; background: rgba(255,255,255,.08); }
  .sk-slider::-moz-range-progress { height: 2px; background: #ff6b9d; }
  .sk-slider::-moz-range-thumb { width: 6px; height: 6px; border: 0; border-radius: 50%; background: #ff6b9d; }
  .sk-val { font-size: 11px; font-weight: 600; min-width: 28px; text-align: right; color: rgba(246,238,242,.8); }
  @keyframes mn-in { from { opacity: 0; transform: translateY(6px); } }
  `;

  // ── Main loop ──
  setTimeout(() => {
    if (document.body && !document.body.contains(overlay)) document.body.appendChild(overlay);
  }, 0);

  console.log("Sakura Client loaded (2v2.io — UWMK payload)");

  requestAnimationFrame(loop);
})();

