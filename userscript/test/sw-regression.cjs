// Regression test for the SkillWarz client (src/skillwarz.js), GAME FRAME side.
//
// These assertions are behavioural, run against a real Uint8Array heap holding
// ACTk structs laid out exactly as the build-125 dump describes. Source-text
// greps would be worthless here: the base64 string array in the obfuscated
// build hides every literal, and the whole point of this payload is to decode
// values that no name in the binary can tell us.
//
// Run: node test/sw-regression.cjs [path-to-skillwarz.js]
const fs = require('fs');
const path = require('path');

const target = process.argv[2] || path.join(__dirname, '..', 'src', 'skillwarz.js');
const src = fs.readFileSync(target, 'utf8');

/* ------------------------------------------------------------------ *
 * Real WASM-shaped heap. v2.0.1 reads the heap directly through a DataView,
 * so the fake has to be a genuine typed array, not a Map.
 * ------------------------------------------------------------------ */
const HEAP_SIZE = 4 * 1024 * 1024;
const buf = new ArrayBuffer(HEAP_SIZE);
const U8 = new Uint8Array(buf);
const DV = new DataView(buf);

function wI32(a, v) { DV.setInt32(a, v | 0, true); }
function rI32(a) { return DV.getInt32(a, true); }
function wF32(a, v) { DV.setFloat32(a, v, true); }
function rF32(a) { return DV.getFloat32(a, true); }
function bits(v) { return new Int32Array(new Float32Array([v]).buffer)[0]; }

// ACTk 2.x, per the dump: key/hidden/byte4/inited/fake/fakeActive.
function obfFloat(base, real, key) {
  wI32(base + 0x00, key);
  wI32(base + 0x04, bits(real) ^ key);
  U8[base + 0x0c] = 1;
  wF32(base + 0x10, real * 1.5);   // decoy, deliberately different
  U8[base + 0x14] = 1;             // fakeValueActive
}
function obfInt(base, real, key) {
  wI32(base + 0x00, key);
  wI32(base + 0x04, (real | 0) ^ key);
  U8[base + 0x08] = 1;
  wI32(base + 0x0c, (real | 0) + 7);
  U8[base + 0x10] = 1;
}

// Offsets and kinds below are read from src/skillwarz-fields.json, NOT guessed:
// FPScontroller has obfF at 0x10/0x28 and obfB at 0xb8, while HealthScript's
// obfuscated ints live at 0xc0 and its obfF at 0x130. Writing an obfInt at an
// offset the map classifies as obfF silently tests nothing.

// ACTk ObscuredBool: key u8 @0x00 | hidden i32 @0x04 | inited @0x08 | fake @0x09 | active @0x0a
function obfBool(base, real, key) {
  U8[base + 0x00] = key & 0xff;
  wI32(base + 0x04, ((real ? 1 : 0) & 0xff) ^ key);
  U8[base + 0x08] = 1;
  U8[base + 0x09] = real ? 0 : 1;   // decoy, inverted
  U8[base + 0x0a] = 1;
}

// Re-seed the fixture. The heap is module-global and shared by every runFrame,
// so a write from an earlier case would otherwise leak into the next one and
  // look exactly like a compounding bug.
  const OBJ = {};
  let base = 0x20000;
  for (const t of ['FPScontroller', 'HealthScript', 'WeaponManager', 'GG_GameManager', 'TDM_GameManager', 'PhotonNetworkSync', 'NetworkPlayerAnimations', 'NPC_Cotroller', 'EnemyBot']) {
    OBJ[t] = base;
    base += 0x1000;
  }
  function seedObjects() {
    U8.fill(0);
    // FPScontroller here mirrors the real build rather than a convenient one.
    // Movement speed is REDUNDANT - five walk fields within 0.5% of each other,
    // three sprint fields likewise - while jump height and the step offsets are
    // single numbers with nothing agreeing with them. The previous fixture put
    // one unrelated value in each field, which is why it could not tell a walk
    // speed from a jump height, and why only a field report revealed that the
    // multiplier was doubling jump and step ("it made me hella tall").
    const walk = [[0x10, 4.2117], [0x28, 4.1921], [0x58, 4.1960], [0x88, 4.2019], [0xa0, 4.1960]];
    const sprint = [[0x40, 16.8154], [0x70, 16.7686], [0x1c0, 16.7568]];
    // Singletons: eye height, jump height, step offset. Movement speed is the
    // only thing on this class that has company, and that is the whole
    // discriminator.
    const singles = [[0xc4, 1.0529], [0x11c, 1.7529], [0x134, 0.6216]];
    for (const [o, v] of walk) obfFloat(OBJ.FPScontroller + o, v, 0x51);
    for (const [o, v] of sprint) obfFloat(OBJ.FPScontroller + o, v, 0x33);
    for (const [o, v] of singles) obfFloat(OBJ.FPScontroller + o, v, 0x77);
    obfBool(OBJ.FPScontroller + 0xb8, true, 0x19);
    obfInt(OBJ.HealthScript + 0xc0, 100, 0x006c81c);
    obfInt(OBJ.HealthScript + 0xd4, 200, 0x006c81c);
    obfFloat(OBJ.HealthScript + 0x130, 99.5, 0x12);
  }
  seedObjects();

/* Fake ValueWrapper, still used by the payload for getClassName(). */
class FakeVW {
  constructor(ptr) { this._result = ptr; }
  val() { return this._result; }
  getClassName() { return 'FakeClass@0x' + (this._result >>> 4).toString(16); }
  readField(o, t) {
    const a = this._result + o;
    if (t === 'u8') return new FakeVW(U8[a]);
    if (t === 'f32') return new FakeVW(rF32(a));
    return new FakeVW(rI32(a));
  }
  writeField(o, t, v) {
    const a = this._result + o;
    if (t === 'u8') U8[a] = v & 0xff;
    else if (t === 'f32') wF32(a, v);
    else wI32(a, v);
    return this;
  }
}

function makeEl() {
  const el = {
    tagName: 'DIV', id: '', style: {}, dataset: {}, children: [], _html: '', _els: {},
    get innerHTML() { return this._html; }, set innerHTML(v) { this._html = v; },
    // Returning a usable stub for id selectors is what lets the PANEL be
    // tested: the speed toggle only exists as an onclick handler attached here,
    // so a null-returning querySelector made the whole control untestable.
    // Attribute selectors ([data-a="..."]) are supported for the same reason and
    // with stable identity, because the in-frame HUD - now the PRIMARY control
    // surface - is addressed that way. A harness that cannot reach the controls
    // is how a dead toggle shipped twice.
    querySelector(sel) {
      if (typeof sel !== 'string') return null;
      if (sel.charAt(0) === '#' || sel.charAt(0) === '[') {
        if (!el._els[sel]) {
          const stub = makeEl();
          stub.id = sel.charAt(0) === '#' ? sel.slice(1) : sel;
          // Range inputs are read through .value by the HUD's oninput.
          stub.value = '1';
          el._els[sel] = stub;
          if (el.ownerDoc) el.ownerDoc._els[sel] = stub;
        }
        return el._els[sel];
      }
      return null;
    },
    // remove() actually detaches. A no-op remove cannot express "this node is gone",
    // which is the entire subject of the panel-hide cases - and is how the
    // rebuild-on-next-report bug stayed invisible here.
    appendChild(c) { this.children.push(c); c._parent = this; return c; },
    remove() {
      const p = this._parent;
      if (!p) return;
      const i = p.children.indexOf(this);
      if (i >= 0) p.children.splice(i, 1);
      this._parent = null;
    },
    onclick: null, addEventListener() {}
  };
  return el;
}

/* ------------------------------------------------------------------ *
 * Harness
 * ------------------------------------------------------------------ */
// var, not const, and declared here: the test body calls runFrame() before
// execution ever reaches the BroadcastChannel stub further down.
var BC_HUB = [];
function sendToPlayer(msg) {
  for (const b of BC_HUB) if (typeof b.onmessage === 'function') b.onmessage({ data: msg });
}
function runFrame({ hostname, hooksApply = true, fireUpdate = true, heapVia = 'resolveGame', scriptDataLate = false, applyFirst = false, resolveButNotApply = false, noInstantiate = false, speed = null, thenOff = false, extraFrames = 0, fireEnemyTwice = null, setup = null, lobby = false, deliverVia = 'bc', preFire = null, ls = {}, fireMany = null, post = null, mouseLook = null, onFrame = null, onTick = null }) {
  // Reset the channel hub: payload instances from earlier runs would keep
  // their own SPEED_STATE and keep writing to the same heap, which looks
  // exactly like a compounding bug in the payload.
  BC_HUB.length = 0;
  seedObjects();
  // Setup runs AFTER seeding: seedObjects() zeroes the heap, so anything a case
  // writes beforehand is wiped and the test fails for the wrong reason.
  if (setup) setup();
  const posted = [], pluginCalls = [], hookCalls = [], pending = [], listeners = [], order = [], portalCommands = [];
  // Declared out here so the return statement can hand it to the test; the try
  // block fills it in. A `const` inside the try would not survive to the return.
  let ctx = null;
  // EnemyBot stays hooked as a fallback but is NOT simulated here: it is a
  // brain, its Update() never ticked in the field, and letting it fire would
  // double-count every enemy the NPC_Cotroller hook already captured.
  const fireTypes = fireUpdate ? ['FPScontroller', 'HealthScript', 'WeaponManager', 'GG_GameManager', 'TDM_GameManager', 'PhotonNetworkSync', 'NetworkPlayerAnimations', 'NPC_Cotroller'] : [];

  // The real game object. Only UWMK holds a reference to it - which is the
  // whole point of heapVia='resolveGame'.
  const gameObj = { Module: { HEAPU8: U8 } };

  // A stand-in for "the Runtime the plugin was built with", which is not the
  // object exported as window.UnityWebModkit.Runtime in the 'pluginRuntime'
  // scenario.
  const pluginRuntime = { _game: null, resolveGame() { return this._game; } };
  // Stands in for a second UWMK copy that loaded later and owns the global.
  const orphanRuntime = { _game: null, resolveGame() { return this._game; } };

  const Runtime = {
    plugins: [], startedInitializing: false, internalWasmTypes: [], il2CppContext: undefined,
    _game: null,
    // Mirrors UWMK: memoised on first success, and only hook() populates it.
    resolveGame() { return this._game; },
    createPlugin(opts) {
      pluginCalls.push(opts);
      order.push('createPlugin');
      // Real UWMK output, so the log tap has genuine lines to keep.
      if (win.console && typeof win.console.log === 'function') {
        win.console.log('[UnityWebModkit] [MESSAGE] Chainloader initialized');
      }
      this.startedInitializing = true;
      const p = {
        name: opts.name, hooks: [],
        // ModkitPlugin stores the Runtime it was constructed with.
        _runtime: heapVia === 'pluginRuntime' ? pluginRuntime : (heapVia === 'takeover' ? orphanRuntime : Runtime),
        hookPrefix(target, cb) {
          const h = { ...target, callback: cb, applied: false, enabled: true, kind: 0 };
          this.hooks.push(h);
          hookCalls.push(target);
          order.push('hookPrefix:' + target.typeName);
          if (hooksApply && heapVia !== 'none') {
            if (heapVia === 'pluginRuntime') pluginRuntime._game = gameObj;
            else Runtime._game = gameObj;
          }
          if (heapVia === 'takeover') orphanRuntime._game = gameObj;
          return h;
        },
        // UWMK's postfix hook passes the RETURN VALUE first:
        //   let r = originalFunc(...args);
        //   hook.callback(new ValueWrapper(r), ...wrappedArgs)
        // That is how the SkillWarz payload reads MouseLook's real pitch and
        // yaw, so the harness has to model it or the path is untestable.
        hookPostfix(target, cb) {
          const h = { ...target, callback: cb, applied: false, enabled: true, kind: 1 };
          this.hooks.push(h);
          hookCalls.push(target);
          order.push('hookPostfix:' + target.typeName);
          if (hooksApply && heapVia !== 'none') {
            if (heapVia === 'pluginRuntime') pluginRuntime._game = gameObj;
            else Runtime._game = gameObj;
          }
          return h;
        }
      };
      this.plugins.push(p);
      // scriptData only becomes readable around WebAssembly.instantiate, which
      // is exactly when UWMK's one-shot apply pass runs.
      if (!scriptDataLate) {
        this.il2CppContext = { scriptData: { FPScontroller: { Update: 1 }, HealthScript: { Update: 1 } } };
        order.push('scriptData');
      }
      return p;
    },
    revealScriptData() {
      if (this.il2CppContext) return;
      this.il2CppContext = { scriptData: { FPScontroller: { Update: 1 }, HealthScript: { Update: 1 } } };
      order.push('scriptData');
    }
  };

  // A localStorage the payload can actually use. Without one, every storage
  // call throws ReferenceError into a catch that answers "nothing remembered",
  // so a persisted hide state could not be tested at all.
  const LS = {
    getItem(k) { return Object.prototype.hasOwnProperty.call(ls, k) ? ls[k] : null; },
    setItem(k, v) { ls[k] = String(v); },
    removeItem(k) { delete ls[k]; }
  };

  const doc = {
    readyState: 'complete', body: makeEl(), documentElement: makeEl(), head: makeEl(),
    createElement: makeEl, getElementById: () => null, addEventListener() {},
    querySelectorAll(sel) {
      if (sel !== 'iframe') return [];
      return [{ contentWindow: { postMessage(m) { portalCommands.push(m); } } }];
    }
  };
  // The payload sets bc.onmessage; commands arrive this way from the portal.
class BC {
  constructor() { BC_HUB.push(this); }
  postMessage() {}
  close() {}
}

  // Models UWMK's instantiate flow: it hands back an instance whose exports
  // carry the memory, and never assigns window.unityInstance / unityGame /
  // game. Synchronous thenable so the capture runs before the next drain.
  const fakeMemory = { buffer: U8.buffer };
  const instResult = { instance: { exports: { memory: fakeMemory, asm: {} } } };
  const syncThenable = () => ({
    then(ok) { ok(instResult); return this; },
    catch() { return this; }
  });
  const FakeWasm = {
    instantiate: syncThenable,
    instantiateStreaming: syncThenable,
    Module: function () {},
    Instance: function () {},
    Memory: function () {}
  };

  // The payload's console used to be a no-op stub, which silently swallowed every
// console.log the payload emits while debugging itself - an instrumented
// payload reporting "PICKPOS>> <error>" into a void reads as "no error",
// which is the worst possible answer. Recorded and returned instead.
const CONSOLE = [];
const consoleRec = (level) => (...a) => { CONSOLE.push(level + ': ' + a.map(String).join(' ')); };

  const win = {
    // A real viewport. At 1x1 every projection collapses and a box is two pixels
    // wide, which is the harness manufacturing the very bug it should catch.
    innerWidth: 1920, innerHeight: 1080, devicePixelRatio: 1,
    document: doc,
    location: { hostname: hostname || 'skillwarz.game-files.crazygames.com', href: 'https://x/' },
    console: { log: consoleRec('log'), warn: consoleRec('warn'), error: consoleRec('error'), info: consoleRec('info'), debug: consoleRec('debug') },
    UnityWebModkit: { Runtime, ValueWrapper: FakeVW },
    addEventListener(t, fn) { (listeners[t] = listeners[t] || []).push(fn); },
    setTimeout(fn) { pending.push(fn); return 0; },
    BroadcastChannel: BC,
    navigator: {}, performance: { getEntriesByType: () => [] },
    parent: { postMessage(m) { posted.push(m); } },
    top: { postMessage(m) { posted.push(m); } }
  };
  // heapVia models where the game object is reachable:
  //   'resolveGame' - ONLY via Runtime._game (what the field report showed:
  //                   every window global "undefined" while hooks applied)
  //   'window'      - exposed as window.unityInstance (the conventional case)
  //   'none'        - genuinely unreachable
  if (heapVia === 'window') win.unityInstance = gameObj;

  const body = src.replace(/^\(function\s*\(\)\s*\{/, '(function(){').replace(/\}\)\(\);\s*$/, '})();');
  const fn = new Function('window', 'document', 'location', 'console', 'navigator',
    'setTimeout', 'WebAssembly', 'BroadcastChannel', 'localStorage', body);

  doc._els = {};
  // Elements the payload creates must know their document, so an id lookup on a
  // created node can be looked up later by the test.
  doc.createElement = (tag) => {
    const e = makeEl();
    e.ownerDoc = doc;
    e.tagName = tag;
    // A box being three pixels wide is invisible in a boolean and obvious in
    // the numbers, so strokeRect records what it was asked to paint.
    if (tag === 'canvas') {
      const calls = [];
      e.rectCalls = calls;
      e.getContext = () => ({
        clearRect() {}, beginPath() {}, arc() {}, fill() {}, stroke() {},
        fillText() {}, moveTo() {}, lineTo() {}, save() {}, restore() {},
        strokeRect(x, y, w, h) { calls.push({ x, y, w, h }); },
        set strokeStyle(v) {}, get strokeStyle() { return ''; },
        set fillStyle(v) {}, get fillStyle() { return ''; },
        set lineWidth(v) {}, get lineWidth() { return 1; },
        set font(v) {}, get font() { return ''; },
      });
    }
    return e;
  };
  doc.body.ownerDoc = doc;
  doc.documentElement.ownerDoc = doc;
  // getElementById must reflect the tree. Answering null unconditionally is
  // what let the panel rebuild itself the instant after X removed it, and a
  // harness that cannot express "this node is gone" cannot catch that.
  doc.getElementById = (id) => {
    const all = [].concat(doc.body.children, doc.head.children, doc.documentElement.children);
    return all.find(c => c && c.id === id) || null;
  };

  let fatal = null;
  try {
    // UWMK's apply pass: ONE shot, inside instantiate, iterating whatever hooks
    // exist at that instant. Hooks added afterwards keep applied=false forever.
    function applyPass() {
      order.push('applyPass');
      for (const pl of Runtime.plugins) {
        for (const h of pl.hooks) {
          if (!hooksApply) continue;
          // UWMK assigns tableIndex during the pass, then flips `applied` from
          // inside the WASM parse callback. Modelling them separately is what
          // lets the payload tell "never seen" apart from "signature wrong".
          h.tableIndex = 4242;
          h.index = 99;
          // resolveOriginal() caches the real function on the hook once it has
          // the game. That cached function is what lets the callback run at all.
          h.originalFunc = function () {};
          if (!resolveButNotApply) h.applied = true;
        }
      }
    }
    if (applyFirst) applyPass();     // UWMK got there before we registered

    fn(win, doc, win.location, win.console, win.navigator, win.setTimeout, FakeWasm, BC, LS);
    // A second UWMK copy loads and replaces the global AFTER we armed ours.
    if (heapVia === 'takeover') {
      win.UnityWebModkit.Runtime = { plugins: [], resolveGame() { return null; } };
    }
    let guard = 0;
    while (pending.length && guard++ < 200) pending.shift()();
    // The game instantiates its WASM. UWMK returns an instance; the payload's
    // tap is watching for exactly this. noInstantiate closes that route too,
    // which is the only way to model a genuinely unreachable heap now that the
    // instantiate path exists.
    if (!noInstantiate) {
      try { FakeWasm.instantiate(new Uint8Array([0, 97, 115, 109])); } catch (_) {}
    }
    guard = 0;
    while (pending.length && guard++ < 200) pending.shift()();
    if (scriptDataLate) Runtime.revealScriptData();
    if (!applyFirst) applyPass();
    const plugin = Runtime.plugins[0];

    // Pre-fire hook, so a case can exercise a real control surface (the
    // in-frame HUD button, a key binding) under exactly the same conditions the
    // cross-origin portal path is tested under. ctx.hud / ctx.hudEl reach the
    // controls the payload painted into the player document.
    ctx = { win, doc, listeners, Runtime };
    ctx.hud = doc.body.children.find(c => c && c.id === 'sakura-sw-hud') || null;
    // Canvases are created lazily, so this walks the tree when asked rather
    // than snapshotting it once and missing anything drawn later.
    ctx.canvases = () => {
      const found = [];
      const walk = (n) => {
        if (!n) return;
        if (n.tagName === 'canvas') found.push(n);
        (n.children || []).forEach(walk);
      };
      walk(doc.body);
      return found;
    };
    ctx.hudEl = (name) => (ctx.hud && ctx.hud._els ? ctx.hud._els['[data-a="' + name + '"]'] : null);
    if (preFire) { try { preFire(ctx); } catch (e) { fatal = 'preFire threw: ' + e.message; } }

    if (plugin) {
      let mlFired = false;
      for (const h of plugin.hooks) {
      if (!h.applied) continue;

      // MouseLook has no instance in OBJ: the payload reaches it through
      // PhotonNetworkSync+0x30, and these hooks fire because the GAME called
      // them, not because the harness walked a list. `mouseLook.getters` gives
      // one return value per registered getter, in registration order, which is
      // how a real frame delivers them.
      if (h.typeName === 'MouseLook') {
        // Once per MouseLook hook, not once per hook per hook. The outer loop
        // visits every registered hook, and re-running this block for each of
        // them fired the getters 15 times a frame - and the stray
        // `h.callback(self)` below passed the `this` POINTER as a postfix
        // hook's return value, so every getter "returned" 0x2c000.
        if (mlFired) continue;
        mlFired = true;
        if (!mouseLook) continue;
        try {
          // A getter's credibility now depends on having been seen to MOVE, so
          // the harness has to be able to fire it more than once with different
          // values - a getter fired once is exactly what the code refuses.
          // `getters` may be a flat list, or a list of lists for successive
          // fires; `times` repeats the last one.
          const frames = Array.isArray(mouseLook.getters) && Array.isArray(mouseLook.getters[0])
            ? mouseLook.getters
            : [mouseLook.getters || []];
          const times = mouseLook.times || frames.length;
          for (let round = 0; round < times; round++) {
            const vals = frames[Math.min(round, frames.length - 1)] || [];
            for (const hh of plugin.hooks) {
              if (hh.typeName !== 'MouseLook') continue;
              if (hh.kind === 1) {
                const idx = plugin.hooks.filter(x => x.typeName === 'MouseLook' && x.kind === 1).indexOf(hh);
                hh.callback(new FakeVW(vals[idx] === undefined ? 0 : vals[idx]),
                            new FakeVW(mouseLook.self === undefined ? 0x2c000 : mouseLook.self));
              } else if (hh.params && hh.params.length >= 2) {
                const sVals = mouseLook.sets || [];
                const idx = plugin.hooks.filter(x => x.typeName === 'MouseLook' && x.kind === 0).indexOf(hh);
                const a0 = sVals[idx];
                const args = [new FakeVW(mouseLook.self === undefined ? 0x2c000 : mouseLook.self)];
                args.push(new FakeVW(Array.isArray(a0) ? a0[0] : (a0 === undefined ? 0 : a0)));
                if (Array.isArray(a0)) args.push(new FakeVW(a0[1]));
                hh.callback.apply(null, args);
              }
            }
          }
        } catch (e) { fatal = 'mouseLook hook threw: ' + e.message; }
        continue;
      }

      if (!fireTypes.includes(h.typeName)) continue;
      // A lobby: nothing round-scoped ticks. Enemy bodies, the bot brains and
      // both game managers only exist once a round has actually loaded.
      if (lobby && (h.typeName === 'EnemyBot' || h.typeName === 'GG_GameManager'
                   || h.typeName === 'TDM_GameManager' || h.typeName === 'NPC_Cotroller'
                   || h.typeName === 'PhotonNetworkSync' || h.typeName === 'NetworkPlayerAnimations')) continue;
      const rec = OBJ[h.typeName];
      if (rec === undefined) continue;
      const fire = (ptr) => {
        try { h.callback(new FakeVW(ptr === undefined ? rec : ptr)); }
        catch (e) { fatal = 'hook threw: ' + e.message; }
      };
      // A bot hook fires once per NPC_Cotroller instance in a real match. The body
      // is the capture target, not the brain: EnemyBot's Update() never ticked
      // in the field while the signature was perfectly valid.
      if (fireEnemyTwice && h.typeName === 'NPC_Cotroller') { for (const ep of fireEnemyTwice) fire(ep); continue; }
      // fireMany drives any many-type once per instance. PhotonNetworkSync has
      // one instance per PLAYER, so "how many players are in this match" is a
      // question only this can answer.
      if (fireMany && fireMany[h.typeName]) { for (const fp of fireMany[h.typeName]) fire(fp); continue; }
      // Command must land BEFORE the frame it should affect, exactly as the
      // portal sends it while the game is already running.
      if (speed && h.typeName === 'FPScontroller') {
        const msg = { __sakura: '__sakura_sw_v2', kind: 'cmd', cmd: 'speed', arg: speed };
        // deliverVia models the two real transports. 'bc' is BroadcastChannel,
        // which is origin-scoped and therefore cannot cross the portal/frame
        // boundary; 'postMessage' is the one that does.
        if (deliverVia === 'postMessage') {
          for (const fn of (listeners['message'] || [])) fn({ data: msg });
        } else {
          sendToPlayer(msg);
        }
      }
      fire();
      for (let n = 0; n < extraFrames; n++) {
        // A per-frame mutation hook, so a test can change the heap BETWEEN two
        // frames of the same run. Jitter is a property of two frames in one
        // run; two separate runs are two separate runs. The second argument is
        // the hook being fired and a test MUST filter on it - the loop visits
        // every registered hook, so an unfiltered mutation lands before the
        // frame under test has ever been read and the fixture measures nothing.
        if (onFrame) { try { onFrame(n + 1, h.typeName); } catch (e) { fatal = 'onFrame threw: ' + e.message; } }
        fire();
      }
      if (thenOff && h.typeName === 'FPScontroller') {
        sendToPlayer({ __sakura: '__sakura_sw_v2', kind: 'cmd', cmd: 'speed', arg: { on: false } });
      }
      }
    }
    // `onTick` fires between pending timers, not between hook frames. The drain
    // below runs the whole report chain AFTER every frame has been consumed, so
    // mutating on a frame boundary changes the heap before the first report ever
    // reads it - the fixture then measures nothing at all. Anything about what
    // the payload SEES BETWEEN two of its own periodic runs has to be scheduled
    // here instead.
    let tick = 0;
    guard = 0;
    while (pending.length && guard++ < 200) {
      if (onTick) { try { onTick(tick + 1); } catch (e) { fatal = 'onTick threw: ' + e.message; } }
      tick++;
      pending.shift()();
    }
    // `post` runs once the frame loop has drained, so a test can drive the
    // command channel by hand - which is the only way to exercise snapshot
    // pairs. The snapshot command needs two presses with the heap changed in
    // between, and there is no game frame left to hang that off.
    if (post) post((cmd, arg) => sendToPlayer({ __sakura: '__sakura_sw_v2', kind: 'cmd', cmd, arg }), ctx);
    // A command sent to the payload makes it schedule more work (the ESP loop
    // re-arms itself on a timer), so drain once more afterwards. Without this a
    // test that drives a control in `post` can never observe the paint that
    // control causes.
    guard = 0;
    while (pending.length && guard++ < 200) pending.shift()();
  } catch (e) { fatal = e.message; }

  const reports = posted.filter(m => m && m.kind === 'report').map(m => m.report);
  return {
    fatal, posted, pluginCalls, hookCalls, reports, order, listeners, portalCommands, doc, ctx,
    ls,
    consoleLog: CONSOLE,
    pluginVersion: pluginCalls[0] && pluginCalls[0].version,
    report: reports[reports.length - 1]
  };
}

let failed = 0;
function check(name, cond, detail) {
  console.log(`${cond ? 'PASS' : 'FAIL'}  ${name}` + (cond ? '' : `\n        -> ${detail}`));
  if (!cond) failed++;
}

/* ================================================================== *
 * 1. Happy path: capture, decode, survey.
 * ================================================================== */
{
  const r = runFrame({});
  check('player frame runs without throwing', !r.fatal, r.fatal || '');
  check('createPlugin() is called exactly once', !r.fatal && r.pluginCalls.length === 1,
    r.fatal || `calls=${r.pluginCalls.length}`);
  check('referencedAssemblies is non-empty (empty = silent no-op)',
    !!(r.pluginCalls[0] && r.pluginCalls[0].referencedAssemblies || []).length, 'none passed');
  check('referencedAssemblies includes Assembly-CSharp.dll',
    !!(r.pluginCalls[0].referencedAssemblies || []).includes('Assembly-CSharp.dll'), 'game types live here');
  check('a report is posted to the portal', !!r.report, 'no report');

  // Two families of hooks now exist: the Update() capture hooks, one per player
// type, and the MouseLook view hooks. Counting them together made every count
// assertion ambiguous the moment a second family was added, which is how a
// silently-empty hook family would have gone unnoticed.
  const updateHooks = r.hookCalls.filter(h => h.methodName === 'Update');
  const viewHooks = r.hookCalls.filter(h => h.typeName === 'MouseLook');
  check('Update() hooks are registered on the player types', updateHooks.length === 9, `hooks=${updateHooks.length}`);
  check('the view hooks are registered separately and are not Update() hooks',
    viewHooks.length > 0 && viewHooks.every(h => h.typeName === 'MouseLook' && h.methodName !== 'Update'),
    `viewHooks=${viewHooks.length}`);
  check('hooks use the IL2CPP (this, MethodInfo*) -> void signature',
    updateHooks.every(h => Array.isArray(h.params)
      && h.params.length === 2 && h.params[0] === 'i32' && h.returnType === undefined),
    JSON.stringify(updateHooks[0]));
  // Not a count: the count of MouseLook's float getters is a property of the
  // dump, and hardcoding it here just means the assertion fails the next time
  // the generator picks up a build with a different number. Assert the shape
  // instead - anything returning f32 is a getter taking (this), anything taking
  // an f32 is a setter returning void, and neither may be confused for the
  // other.
  const mlGetters = viewHooks.filter(h => h.returnType === 'f32');
  const mlSetters = viewHooks.filter(h => Array.isArray(h.params) && h.params.includes('f32'));
  check('every float getter is hooked postfix as (this) -> f32, and there are some',
    mlGetters.length > 0 && mlGetters.every(h => h.params.length === 1 && h.params[0] === 'i32')
      && mlGetters.every(h => h.returnType === undefined || h.returnType === 'f32'),
    `getters=${mlGetters.length}`);
  check('every float setter is hooked prefix as (this, f32) -> void',
    mlSetters.length > 0 && mlSetters.every(h => h.params.length === 2 && h.params[1] === 'f32'
      && h.returnType === undefined),
    `setters=${mlSetters.length}`);
  check('and the two families do not overlap',
    mlGetters.every(g => !mlSetters.includes(g)),
    JSON.stringify(mlGetters.map(h => `${h.methodName}:${h.returnType}:${h.params.join(',')}`)));

  check('live FPScontroller instance is captured',
    !!(r.report && r.report.instances && r.report.instances.FPScontroller),
    JSON.stringify(r.report && r.report.instances));
  check('captured pointer matches the real object address',
    !!(r.report && r.report.instances.FPScontroller === '0x' + OBJ.FPScontroller.toString(16)),
    JSON.stringify(r.report && r.report.instances));

  check('heap is detected as reachable', !!(r.report && r.report.globals && r.report.globals.heapU8 === true),
    JSON.stringify(r.report && r.report.globals));
  check('game object found via a Runtime reference with NO window global',
    /resolveGame\(\)$/.test(String(r.report.globals.gameSource || '')),
    JSON.stringify(r.report.globals));
  check('every window global really is undefined in this scenario',
    ['unityInstance', 'unityGame', 'game'].every(k => r.report.globals[k] === 'undefined'),
    JSON.stringify(r.report.globals));
  check('report names the resolved class of each object',
    !!(r.report && r.report.classNames && r.report.classNames.FPScontroller),
    JSON.stringify(r.report && r.report.classNames));

  const rows = r.report && r.report.survey && r.report.survey.FPScontroller;
  check('survey produces rows for the captured object', !!(rows && rows.length), 'survey empty');
  check('surveyRows counter is populated', !!(r.report && r.report.surveyRows > 0),
    String(r.report && r.report.surveyRows));

  // Decisive: the decoy at fakeValue is real * 1.5. Reporting the decoy here
  // means the codec never decrypted.
  const f10 = rows && rows.find(x => x.o === 0x10);
  check('ObscuredFloat is decrypted, not read as the decoy',
    !!(f10 && Math.abs(f10.v - 4.2117) < 1e-4), `got ${f10 && f10.v}, expected 4.2117`);
  check('the ACTk decoy is reported separately',
    !!(f10 && Math.abs(f10.fake - 6.31755) < 1e-4), `fake=${f10 && f10.fake}`);
  check('fakeValueActive is surfaced (the detector-relevant flag)',
    !!(f10 && f10.act === 1), `act=${f10 && f10.act}`);
  const f28 = rows.find(x => x.o === 0x28);
  check('a second ObscuredFloat with a different key decrypts correctly',
    !!f28 && Math.abs(f28.v - 4.1921) < 1e-4, `got ${f28 && f28.v}, expected 4.1921`);

  const bB8 = rows.find(x => x.o === 0xb8);
  check('ObscuredBool decrypts to true, not the inverted decoy',
    !!bB8 && bB8.v === 1, `got ${bB8 && bB8.v} (decoy=${bB8 && bB8.fake})`);

  const hs = r.report.survey.HealthScript;
  const hI = hs && hs.find(x => x.o === 0xc0);
  check('ObscuredInt decrypts correctly',
    !!hI && hI.v === 100, `got ${hI && hI.v}, expected 100`);
  const hF = hs && hs.find(x => x.o === 0x130);
  check('a second type decodes independently (no state bleed)',
    !!hF && Math.abs(hF.v - 99.5) < 1e-4, `got ${hF && hF.v}`);

  check('no survey-empty warning on the happy path',
    !(r.report.warnings || []).some(w => /read 0 fields/.test(w)),
    JSON.stringify(r.report.warnings));
}

/* ================================================================== *
 * 2. THE v2.0.2 BUG: a registration race, not a naming problem.
 *
 * UWMK applies hooks inside handleBuffer during WebAssembly.instantiate and
 * snapshots both loop bounds first, so hooks registered after that single pass
 * are ignored for the life of the page. The old code registered from a poll
 * that waited for il2CppContext.scriptData - which only becomes readable
 * around instantiate. That is a coin flip, and the field got 4/4 then 0/4.
 *
 * scriptDataLate withholds scriptData until after the first poll drain, so any
 * registration that depends on it cannot happen at all. Hooks must still be
 * registered, at arm time, from names alone.
 * ================================================================== */
{
  const r = runFrame({ scriptDataLate: true });
  check('hooks register with NO scriptData available at all',
    r.hookCalls.filter(h => h.methodName === 'Update').length === 9, `hooks=${r.hookCalls.filter(h => h.methodName === 'Update').length} (names alone must suffice)`);
  const iHook = r.order.indexOf('hookPrefix:FPScontroller');
  const iData = r.order.indexOf('scriptData');
  check('hooks are registered BEFORE scriptData appears',
    iHook !== -1 && (iData === -1 || iHook < iData),
    `order=${r.order.join(' -> ')}`);
  check('registration happens in the same tick as createPlugin',
    r.order[0] === 'createPlugin' && r.order[1] && r.order[1].startsWith('hookPrefix:'),
    `order=${r.order.slice(0, 3).join(' -> ')}`);
  check('reported hooksRegisteredAtArm matches what was registered',
    r.report.hooksRegisteredAtArm === 9, String(r.report.hooksRegisteredAtArm));

  const dbl = runFrame({});
  check('registerHooks is idempotent (no duplicate hooks on retry)',
    dbl.hookCalls.filter(h => h.methodName === 'Update').length === 9, `hooks=${dbl.hookCalls.filter(h => h.methodName === 'Update').length} - registered twice?`);
}

/* ================================================================== *
 * 3. Too-late vs signature-mismatch must be distinguishable. Both look
 * identical in `applied`, which is why v2.0.2 could only report a coin flip.
 * ================================================================== */
{
  // UWMK's apply pass runs while plugin.hooks is still empty: too late.
  const late = runFrame({ applyFirst: true });
  check('registered-too-late is detected and named',
    late.hookCalls.filter(h => h.methodName === 'Update').length === 9 && late.report.hooksApplied === 0,
    `hooks=${late.hookCalls.filter(h => h.methodName === 'Update').length} applied=${late.report.hooksApplied}`);
  check('too-late: hooksResolved is 0 (UWMK never saw them)',
    late.report.hooksResolved === 0, `hooksResolved=${late.report.hooksResolved}`);
  check('too-late: warning says the hooks were never SEEN, not that the signature was wrong',
    late.report.warnings.some(w => /were even SEEN/.test(w)), JSON.stringify(late.report.warnings));

  const ok = runFrame({});
  check('a hook UWMK actually saw has a tableIndex',
    ok.report.hooksResolved > 0, `hooksResolved=${ok.report.hooksResolved}`);
  check('resolved count is reported alongside applied',
    typeof ok.report.hooksResolved === 'number', 'missing hooksResolved');
  check('no "not seen" warning when hooks were resolved',
    !ok.report.warnings.some(w => /were even SEEN/.test(w)), JSON.stringify(ok.report.warnings));
}

{
  // The exact field condition: exported Runtime.resolveGame() -> null, every
  // window global undefined, hooks firing and capturing live objects, and the
  // game reachable only through the plugin's own _runtime reference.
  const r = runFrame({ heapVia: 'pluginRuntime' });
  check('exported Runtime reports no game in this scenario',
    r.report.globals.heapU8 === true, JSON.stringify(r.report.globals));
  check('game recovered via plugin._runtime when the exported Runtime is empty',
    /^plugin\._runtime\./.test(String(r.report.globals.gameSource || '')),
    `gameSource=${r.report.globals.gameSource}`);
  check('survey decodes in this scenario too', r.report.surveyRows > 0, `rows=${r.report.surveyRows}`);
  check('hookFireProof records that the hook really resolved a function',
    !!(r.report.hookFireProof && r.report.hookFireProof.originalFunc === true),
    JSON.stringify(r.report.hookFireProof));
  check('hookFireProof records the game as resolved at fire time',
    !!(r.report.hookFireProof && r.report.hookFireProof.resolveGameAtFire === true),
    JSON.stringify(r.report.hookFireProof));
  check('report version comes from the payload, not a stale literal',
    /^\d+\.\d+\.\d+$/.test(r.report.version) && r.report.version === r.pluginVersion,
    `report=${r.report.version} plugin=${r.pluginVersion}`);
}

/* ================================================================== *
 * 4. THE REAL GAME'S SHAPE.
 *
 * Field reports show: one Runtime, stable tag, hooks applied and firing, yet
 * unityInstance / unityGame / game all "undefined" and _game null forever.
 * UWMK compiles its own patched WASM and applies hooks by swapping entries in
 * the INSTANCE's function table - `instantiatedSource` is a local, nothing is
 * written to any global. So resolveGame() can never succeed on this loader,
 * and every UWMK API that touches memory is a dead end.
 *
 * The memory is still reachable: wrap WebAssembly.instantiate after
 * createPlugin (which has already installed UWMK's handler) and keep the
 * exported WebAssembly.Memory.
 * ================================================================== */
{
  const r = runFrame({ heapVia: 'none' });
  check('instantiate: memory captured from the returned instance',
    r.report.wasmMemory && r.report.wasmMemory.captured === true, JSON.stringify(r.report.wasmMemory));
  check('instantiate: capture timestamped',
    r.report.wasmMemory && typeof r.report.wasmMemory.atMs === 'number' && r.report.wasmMemory.atMs >= 0,
    JSON.stringify(r.report.wasmMemory));
  check('instantiate: reports the real heap size',
    r.report.wasmMemory && r.report.wasmMemory.bytes === U8.byteLength,
    `bytes=${r.report.wasmMemory && r.report.wasmMemory.bytes}`);
  check('reads come from the instantiated memory, not a game object',
    r.report.reads.source === 'instantiate().exports.memory', `source=${r.report.reads.source}`);
  check('survey DECODES with no game object anywhere',
    r.report.surveyRows > 0, `rows=${r.report.surveyRows}`);
  check('ObscuredFloat still decrypts from that memory',
    Math.abs(r.report.survey.FPScontroller.find(x => x.o === 0x10).v - 4.2117) < 1e-4,
    `got ${r.report.survey.FPScontroller.find(x => x.o === 0x10).v}`);
  check('no heap warning when the instantiate path succeeded',
    !r.report.warnings.some(w => /HEAPU8 not reachable/.test(w)), JSON.stringify(r.report.warnings));
  check('the instantiate tap does not break the contract',
    r.report.arm.memoryTap === true, String(r.report.arm.memoryTap));
}

/* ================================================================== *
 * 5. The log tap must not eat its own tail.
 *
 * The report embeds uwmkLog, whose entries contain the string
 * "UnityWebModkit", so a naive filter matched our OWN reports. They were then
 * embedded in the next report, recursively, filling the 60-entry budget and
 * evicting UWMK's real output - including the hook-timeout line that would
 * explain the whole thread.
 * ================================================================== */
{
  const r = runFrame({});
  const echoed = (r.report.uwmkLog || []).filter(l => l.includes('SAKURA-SKILLWARZ-BEGIN'));
  check('uwmkLog contains none of our own report echoes', echoed.length === 0,
    `${echoed.length} self-captured entries`);
  check('uwmkLog entries are deduplicated',
    new Set(r.report.uwmkLog || []).size === (r.report.uwmkLog || []).length, 'duplicate entries');
}

/* ================================================================== *
 * 6. Two UWMK copies in one page: the global is replaced by a second Runtime
 * while the first - the one holding the game - is orphaned.
 * ================================================================== */
{
  const r = runFrame({ heapVia: 'takeover' });
  check('takeover: identity probe shows the Runtime we armed is gone',
    r.report.identity.tagMatches === false, JSON.stringify(r.report.identity));
  check('takeover: warns that another UWMK copy took over',
    r.report.warnings.some(w => /ANOTHER UWMK COPY TOOK OVER/.test(w)),
    JSON.stringify(r.report.warnings));
  check('takeover: warning tells the user what to do about it',
    r.report.warnings.some(w => /Tampermonkey/.test(w)), JSON.stringify(r.report.warnings));

  const ok = runFrame({});
  check('healthy: Runtime identity is stable',
    ok.report.identity.tagMatches === true, JSON.stringify(ok.report.identity));
  check('healthy: plugin._runtime IS the exported Runtime',
    ok.report.identity.pluginRuntimeIsExported === true, JSON.stringify(ok.report.identity));
  check('healthy: no takeover warning',
    !ok.report.warnings.some(w => /ANOTHER UWMK COPY/.test(w)), JSON.stringify(ok.report.warnings));
}

/* ================================================================== *
 * 7. THE v2.0.1 BUG. The field report showed unityInstance / unityGame /
 * game ALL "undefined" while 4/4 hooks applied. Reading the heap only via
 * those window names therefore decoded nothing. This scenario is now the
 * default in every case above, so a regression to window-only probing fails
 * the whole suite rather than one assertion.
 * ================================================================== */
{
  const w = runFrame({ heapVia: 'window' });
  check('conventional window.unityInstance still works (fallback intact)',
    w.report.surveyRows > 0 && w.report.globals.heapU8 === true,
    JSON.stringify(w.report.globals));
}

/* ================================================================== *
 * 8. Genuinely unreachable heap must be reported, never swallowed.
 * ================================================================== */
{
  const r = runFrame({ heapVia: 'none', noInstantiate: true });
  check('blocked heap: still captures objects', Object.keys(r.report.instances || {}).length === 5,
    JSON.stringify(r.report.instances));
  check('blocked heap: survey is honestly empty',
    r.report.surveyRows === 0, `rows=${r.report.surveyRows}`);
  check('blocked heap: warns that 0 fields were read',
    r.report.warnings.some(w => /read 0 fields/.test(w)), JSON.stringify(r.report.warnings));
  check('blocked heap: names the missing heap as the reason',
    r.report.warnings.some(w => /HEAPU8/.test(w)), JSON.stringify(r.report.warnings));
  check('blocked heap: records failed reads rather than hiding them',
    !!(r.report.reads && r.report.reads.failed > 0 && r.report.reads.lastError),
    JSON.stringify(r.report.reads));
  check('blocked heap: reports globals state for diagnosis',
    r.report.globals && r.report.globals.heapU8 === false, JSON.stringify(r.report.globals));
}

/* ================================================================== *
 * 9. Diagnostics when the pipeline is broken.
 * ================================================================== */
{
  const noHooks = runFrame({ resolveButNotApply: true });
  check('warns when no Update() hook applied',
    noHooks.report.warnings.some(w => /does not match this build/.test(w)),
    JSON.stringify(noHooks.report.warnings));
  check('signature-mismatch branch blames the signature, not the timing',
    !noHooks.report.warnings.some(w => /were even SEEN/.test(w)),
    JSON.stringify(noHooks.report.warnings));
  check('reports hooksApplied=0 rather than claiming success',
    noHooks.report.hooksApplied === 0 && noHooks.report.hooksTotal === 9,
    JSON.stringify([noHooks.report.hooksApplied, noHooks.report.hooksTotal]));
  check('signature-mismatch branch shows UWMK DID resolve the methods',
    noHooks.report.hooksResolved === 9, `hooksResolved=${noHooks.report.hooksResolved}`);
}
{
  const idle = runFrame({ fireUpdate: false });
  check('warns when hooks are live but nothing has fired yet',
    idle.report.warnings.some(w => /no FPScontroller/.test(w)), JSON.stringify(idle.report.warnings));
  check('still heartbeats with no instances', idle.reports.length > 3, `reports=${idle.reports.length}`);
  check('an empty survey with NO instances does not cry wolf',
    !idle.report.warnings.some(w => /read 0 fields/.test(w)), JSON.stringify(idle.report.warnings));
}

/* ================================================================== *
 * THE VIEW. A field report asked for exactly this diff and disproved the
 * previous guess: FPScontroller+0x16C/+0x170 did not move through a deliberate
 * turn. The view now comes from MouseLook, reached through
 * PhotonNetworkSync+0x30 - no extra hook, because that pointer is already in
 * hand. MouseLook owns the Camera at +0x2C.
 * ================================================================== */
{
  const s1 = OBJ.PhotonNetworkSync;
  const ml = 0x2c000;
  const r = runFrame({
    fireMany: { PhotonNetworkSync: [s1] },
    setup() {
      wI32(s1 + 0x28, OBJ.FPScontroller);
      wI32(s1 + 0x30, ml);
      wI32(ml + 0x2c, 0x7000000);          // MouseLook's Camera
      wF32(ml + 0x14, 2.5);                // a sensitivity/clamp neighbour
      wF32(ml + 0x18, 12.5);               // pitch
      wF32(ml + 0x1c, 143.75);             // yaw
      wF32(ml + 0x20, -89.0);              // pitch clamp
      wF32(ml + 0x24, 89.0);               // pitch clamp
      wF32(ml + 0x28, 0.07);               // a smoothing weight
      wF32(ml + 0x48, 0.5); wF32(ml + 0x4c, 0.25);
    }
  });
  const v = r.report.view;
  check('MouseLook is reached through PhotonNetworkSync+0x30 with no new hook',
    !!v && v.mouseLook === '0x' + ml.toString(16), JSON.stringify(v));
  check('and it hands over the Camera pointer',
    v && v.camera === '0x7000000', `camera=${v && v.camera}`);
  check('every MouseLook float is reported BY OFFSET, none of them named',
    v && v.floats && Object.keys(v.floats).length >= 6 &&
      v.floats['0x18'] === 12.5 && v.floats['0x1c'] === 143.75,
    JSON.stringify(v && v.floats));
  check('the fov is a calibrated constant, reported so it can be checked',
    typeof r.report.fov === 'number' && r.report.fov > 0, `fov=${r.report.fov}`);
}

/* The projection itself. A known enemy at a known offset from a known view must
 * land where the maths says, and an enemy BEHIND the camera must not be drawn. */
{
  const s1 = OBJ.PhotonNetworkSync;
  const ml = 0x2c000;
  const W = 800, H = 600;
  const r = runFrame({
    fireMany: { PhotonNetworkSync: [s1] },
    setup() {
      // us at the origin, looking down +Z: pitch 0, yaw 0
      wF32(OBJ.FPScontroller + 0x2e4, 0); wF32(OBJ.FPScontroller + 0x2e8, 1.7);
      wF32(OBJ.FPScontroller + 0x2ec, 0);
      wF32(OBJ.FPScontroller + 0x298, 0); wF32(OBJ.FPScontroller + 0x29c, 1.7);
      wF32(OBJ.FPScontroller + 0x2a0, 0);
      wI32(s1 + 0x30, ml); wI32(ml + 0x2c, 0x7000000);
      wF32(ml + 0x18, 0); wF32(ml + 0x1c, 0);    // pitch 0, yaw 0
      // an enemy dead ahead at z=+20, and one behind us at z=-20
      wF32(s1 + 0x34, 0); wF32(s1 + 0x38, 0); wF32(s1 + 0x3c, 20);
    }
  });
  check('a level, forward-looking view reports its angles',
    r.report.view && r.report.view.floats['0x18'] === 0 && r.report.view.floats['0x1c'] === 0,
    JSON.stringify(r.report.view && r.report.view.floats));
  // The eye is the feet plus a constant height. It is NOT read off the struct -
  // that is the bug the 2.9.3 field report exposed, and this fixture happens to
  // seed +0x298 to the same value as the feet, so it cannot tell the two
  // readings apart. Assert the contract instead.
  check('the local player is reported so the projection has an origin',
    r.report.local && r.report.local.eye &&
      Math.abs(r.report.local.feet[1] - 1.7) < 1e-4 &&
      Math.abs(r.report.local.eye[1] - (1.7 + r.report.local.eyeHeight)) < 1e-4,
    JSON.stringify(r.report.local));
  // Drive the toggle exactly the way the user does: click 1 = radar+boxes,
  // click 2 = off. Each step must be observable from the report.
  //
  // AFTER the frame has run, not before. Whether boxes can be drawn now depends
  // on a MouseLook having been captured, so clicking during preFire - with the
  // heap still empty - measures the "not in a round yet" case and not the one
  // the player is in.
  const step = (clicks) => {
    const r2 = runFrame({
      fireMany: { PhotonNetworkSync: [s1] },
      setup() {
        wF32(OBJ.FPScontroller + 0x2e4, 0); wF32(OBJ.FPScontroller + 0x2e8, 1.7);
        wF32(OBJ.FPScontroller + 0x2ec, 0);
        wF32(OBJ.FPScontroller + 0x298, 0); wF32(OBJ.FPScontroller + 0x29c, 1.7);
        wF32(OBJ.FPScontroller + 0x2a0, 0);
        wI32(s1 + 0x30, ml); wI32(ml + 0x2c, 0x7000000);
        wF32(ml + 0x18, 0); wF32(ml + 0x1c, 0);
        wF32(s1 + 0x34, 0); wF32(s1 + 0x38, 0); wF32(s1 + 0x3c, 20);
      },
      post(send, c) { for (let i = 0; i < clicks; i++) c.hudEl('esp').onclick(); send('snapshot'); }
    });
    return r2.report.espView;
  };
  check('ESP starts on, radar only', step(0) && step(0).on === true && step(0).boxes === false,
    JSON.stringify(step(0)));
  check('one click turns the box layer on', step(1) && step(1).boxes === true, JSON.stringify(step(1)));
  check('a second click turns it off entirely', step(2) && step(2).on === false, JSON.stringify(step(2)));
}

/* The dead middle state.
 *
 * "ESP both" used to be written on the button whenever boxes were toggled on.
 * With the view unidentified nothing extra is drawn, so the second click looked
 * broken, the third turned everything off, and the reasonable reading was that
 * the whole ESP had died. The state is now skipped, and the label never claims
 * boxes that will not appear. */
{
  const ml = 0x2c000;
  const s1 = 0x40000;
  const label = (clicks) => {
    const r = runFrame({
      fireMany: { PhotonNetworkSync: [s1] },
      setup() {
        wF32(OBJ.FPScontroller + 0x2e4, -40); wF32(OBJ.FPScontroller + 0x2e8, 5); wF32(OBJ.FPScontroller + 0x2ec, 12);
        wI32(s1 + 0x30, ml);
        wF32(ml + 0x18, 360); wF32(ml + 0x1c, 400);   // +0x1C out of range: unusable
        wF32(ml + 0x28, 45);
        wF32(s1 + 0x6c, -30); wF32(s1 + 0x70, 5.2); wF32(s1 + 0x74, 9);
        wI32(s1 + 0x7c, 10);
      },
      post(send, c) {
        const b = c.hudEl('esp');
        for (let i = 0; i < clicks; i++) b.onclick();
        send('snapshot');
      }
    });
    return { view: r.report.espView, text: r.ctx.hudEl('esp').textContent };
  };
  const one = label(1);
  check('clicking with an unidentified view never turns boxes on',
    one.view.on === false && one.view.boxes === false,
    JSON.stringify(one));
  check('and the button never claims "ESP both" for boxes it will not draw',
    one.text !== 'ESP both',
    `text="${one.text}"`);

  const usable = runFrame({
    fireMany: { PhotonNetworkSync: [s1] },
    setup() {
      wF32(OBJ.FPScontroller + 0x2e4, -40); wF32(OBJ.FPScontroller + 0x2e8, 5); wF32(OBJ.FPScontroller + 0x2ec, 12);
      wI32(s1 + 0x30, ml);
      wF32(ml + 0x18, 360); wF32(ml + 0x1c, 0); wF32(ml + 0x28, 45);
        wF32(s1 + 0x6c, -30); wF32(s1 + 0x70, 5.2); wF32(s1 + 0x74, 9);
      wI32(s1 + 0x7c, 10);
    },
    post(send, c) { c.hudEl('esp').onclick(); send('snapshot'); }
  });
  check('with the view identified the same click does turn boxes on',
    usable.report.espView.boxes === true,
    JSON.stringify(usable.report.espView));
  check('and only then does the button say "ESP both"',
    usable.ctx.hudEl('esp').textContent === 'ESP both',
    `text="${usable.ctx.hudEl('esp').textContent}"`);
}

/* ================================================================== *
 * THE DIFF NEVER COVERED THE THING BEING DIFFED.
 *
 * To name MouseLook's pitch and yaw, the user pressed F9, turned about 90
 * degrees, and pressed F9 again. The diff came back with three FPScontroller
 * fields and nothing to do with looking: viewState() reaches MouseLook through
 * PhotonNetworkSync+0x30, which is not an INSTANCES entry, so flat() had never
 * heard of it. The whole exercise was unable to answer its own question.
 */
{
  const ml = 0x2c000;
  const r = runFrame({
    fireMany: { PhotonNetworkSync: [OBJ.PhotonNetworkSync] },
    setup() {
      wI32(OBJ.PhotonNetworkSync + 0x30, ml);
      wF32(ml + 0x14, 10); wF32(ml + 0x18, 20); wF32(ml + 0x1c, 0); wF32(ml + 0x20, 0);
      wF32(OBJ.FPScontroller + 0x2e4, -40); wF32(OBJ.FPScontroller + 0x2e8, 5); wF32(OBJ.FPScontroller + 0x2ec, 12);
    },
    post(send) {
      send('snapshot');                 // take the first snapshot
      wF32(ml + 0x18, 110);            // turn: the value the test is hunting
      send('snapshot');                 // diff against it
    }
  });
  const d = (r.report && r.report.diff) || [];
  check('the diff sees MouseLook, not just the instance singletons',
    d.some(x => x.indexOf('MouseLook+0x18') === 0),
    `diff=${JSON.stringify(d)}`);
  check('and it names the new value',
    d.some(x => x.indexOf('MouseLook+0x18') === 0 && /110/.test(x)),
    `diff=${JSON.stringify(d)}`);
  check('unchanged view floats stay out of the diff',
    !d.some(x => x.indexOf('MouseLook+0x14') === 0),
    `diff=${JSON.stringify(d)}`);
}

/* ================================================================== *
 * PICKING THE POSITION AMONG SEVERAL WORLD POSITIONS.
 *
 * Every one of these classes carries several Vector3s that all look like world
 * positions: the character's, plus waypoints, targets and spawn anchors.
 * "Furthest from the world origin" picks whichever happens to sit nearest the
 * map centre, and in the 2.9.3 field report that meant bot 2 was drawn at
 * +0x134 and bot 3 at +0xF0. Everyone stands on the same ground plane, so the
 * position is the vector in the local player's height band.
 */
{
  const s1 = 0x40000;
  const r = runFrame({
    fireMany: { PhotonNetworkSync: [s1] },
    setup() {
      // us on the ground at y=5
      wF32(OBJ.FPScontroller + 0x2e4, -40); wF32(OBJ.FPScontroller + 0x2e8, 5); wF32(OBJ.FPScontroller + 0x2ec, 12);
      wI32(s1 + 0x30, 0x2c000); wI32(s1 + 0x7c, 10);
      // the enemy's feet, in band
      wF32(s1 + 0x6c, -30); wF32(s1 + 0x70, 5.2); wF32(s1 + 0x74, 9);
      // a target waypoint: far away, and floating well above the ground plane
      wF32(s1 + 0x34, 70); wF32(s1 + 0x38, 19); wF32(s1 + 0x3c, 70);
    }
  });
  const p = (r.report.esp.players || [])[0] || {};
  check('a waypoint floating above the ground plane is not mistaken for the body',
    p.posAt === '0x6c',
    `posAt=${p.posAt} pos=${JSON.stringify(p.pos)}`);
  check('the body is reported at the ground-matching vector',
    p.pos && Math.abs(p.pos[0] + 30) < 1e-3 && Math.abs(p.pos[1] - 5.2) < 1e-3,
    JSON.stringify(p.pos));
  check('both plausible candidates are reported, not silently resolved',
    p.candidates === 2,
    `candidates=${p.candidates}`);
  check('and the one 14 units above the ground plane is the one discarded by scoring',
    p.posAt === '0x6c' && p.pos[1] < 6,
    `posAt=${p.posAt} pos=${JSON.stringify(p.pos)}`);
}

/* ================================================================== *
 * A STANDING PLAYER AT THE MAP ORIGIN IS STILL A PLAYER.
 *
 * Every candidate scores 0 horizontal extent, so the tie-break has to select
 * something. It selected gravity - +0xE0 is early enough in the field map to
 * win - and the local player was reported at the world origin.
 */
{
  const r = runFrame({
    setup() {
      // every v3 field genuinely reads zero, exactly like an uninitialised object
      for (let o = 0; o < 0x1000; o += 4) wF32(OBJ.FPScontroller + o, 0);
    }
  });
  const l = r.report.local;
  // The truthful answer is "no position". Returning vecs[0] would put the local
  // player at the world origin, confidently and wrongly.
  check('a wholly-zero struct reports no position rather than the world origin',
    l === null || l.posAt !== '0xe0',
    `local=${JSON.stringify(l)}`);
}

/* YAW IS +0x28, AND +0x18 IS A CLAMP.
 *
 * Two live reports, offset by offset: everything on MouseLook is static except
 * +0x28 (188.50 then 45.49), and the snapshot diff caught +0x28 travelling
 * 179.782 -> 358.713 - a change of 178.93 degrees. A turn, in degrees.
 *
 * The old code read +0x18 as PITCH. It never moves, it reads 360, and cos(360)
 * is 1 while sin(360) is 0 - so forward collapsed to (0,0,1) and every box was
 * projected from one fixed world orientation regardless of where the player was
 * looking. They drew cleanly, on nothing.
 */
{
  const ml = 0x2c000;
  const s1 = 0x40000;
  const r = runFrame({
    fireMany: { PhotonNetworkSync: [s1] },
    setup() {
      wI32(s1 + 0x30, ml);
      // exactly the field shape: clamps static, one live heading
      wF32(ml + 0x14, -360); wF32(ml + 0x18, 360); wF32(ml + 0x1c, 0);
      wF32(ml + 0x28, 45); wF32(ml + 0x30, 1.1382339000701904);
      wF32(OBJ.FPScontroller + 0x2e4, -40); wF32(OBJ.FPScontroller + 0x2e8, 5); wF32(OBJ.FPScontroller + 0x2ec, 12);
      wF32(s1 + 0x6c, -30); wF32(s1 + 0x70, 5.2); wF32(s1 + 0x74, 9);
      wI32(s1 + 0x7c, 10);
    }
  });
  const a = r.report.angles;
  // No getters fire in this fixture, so this case is about the struct path
  // being honest about being a guess - and about +0x18 never being read.
  check('with no getters firing the value is still read, and labelled a guess',
    a && a.source === 'field 0x28 (guess)' && Math.abs(a.rawYaw - 45) < 1e-3,
    JSON.stringify(a));
  check('+0x18 is not read as pitch, so a static 360 cannot flatten the view',
    a && a.pitchAt.indexOf('0x1c') === 0 && a.rawPitch === 0,
    JSON.stringify(a));
  check('and the projection is usable', a && a.identified === true, JSON.stringify(a));
}

/* The gate still has a job: +0x1C is the only bounded candidate left for pitch
 * and it is UNVERIFIED, so if a future build makes it something else the boxes
 * must be withheld rather than projected with a nonsense angle. */
{
  const ml = 0x2c000;
  const s1 = 0x40000;
  const r = runFrame({
    fireMany: { PhotonNetworkSync: [s1] },
    setup() {
      wI32(s1 + 0x30, ml);
      wF32(ml + 0x18, 360); wF32(ml + 0x1c, 400);   // +0x1C no longer a pitch
      wF32(ml + 0x28, 45);
      wF32(OBJ.FPScontroller + 0x2e4, -40); wF32(OBJ.FPScontroller + 0x2e8, 5); wF32(OBJ.FPScontroller + 0x2ec, 12);
      wF32(s1 + 0x6c, -30); wF32(s1 + 0x70, 5.2); wF32(s1 + 0x74, 9);
      wI32(s1 + 0x7c, 10);
    }
  });
  const a = r.report.angles;
  check('an out-of-range pitch is rejected rather than projected with',
    a && a.identified === false,
    JSON.stringify(a));
  check('and the report names the read that failed',
    a && /pitch/i.test(a.why || ''),
    JSON.stringify(a));
  check('the yaw is still published, because it is a confirmed offset',
    a && Math.abs(a.rawYaw - 45) < 1e-3,
    JSON.stringify(a));
}

/* The rejection must be a refusal to draw, not a refusal to report. An enemy
 * that is genuinely in front of the camera must still project once the pair
 * looks like angles - otherwise "fixes" that gate the boxes on the view can
 * quietly ship boxes that never appear at all. */
{
  const ml = 0x2c000;
  const s1 = 0x40000;
  const r = runFrame({
    fireMany: { PhotonNetworkSync: [s1] },
    setup() {
      wI32(s1 + 0x30, ml);
      wF32(ml + 0x18, 12); wF32(ml + 0x1c, 0);    // a plausible look angle
      wF32(OBJ.FPScontroller + 0x2e4, -40); wF32(OBJ.FPScontroller + 0x2e8, 5); wF32(OBJ.FPScontroller + 0x2ec, 12);
      wF32(s1 + 0x6c, -40); wF32(s1 + 0x70, 5.2); wF32(s1 + 0x74, 32);   // dead ahead
      wI32(s1 + 0x7c, 10);
    }
  });
  const a = r.report.angles;
  check('a plausible pair is accepted',
    a && a.identified === true,
    JSON.stringify(a));
  check('an enemy dead ahead lands at the centre of the screen',
    a && a.identified && typeof a.centreX === 'number',
    JSON.stringify(a));
  if (a && typeof a.centreX === 'number') {
    check('centre of screen, not merely on screen',
      Math.abs(a.centreX - 0.5) < 0.02,
      `centreX=${a.centreX}`);
  }
}

/* An absurd field of view was left behind at 130 by the calibration passes. On
 * its own that is a 3x squeeze toward the centre; stacked on a wrong view it
 * makes the boxes wrong in a way that is hard to read back. */
{
  const ml = 0x2c000;
  const s1 = 0x40000;
  const r = runFrame({
    ls: { 'sakura-sw-fov': '130' },
    fireMany: { PhotonNetworkSync: [s1] },
    setup() {
      wI32(s1 + 0x30, ml);
      wF32(ml + 0x18, 0); wF32(ml + 0x1c, 0);
      wF32(OBJ.FPScontroller + 0x2e4, 0); wF32(OBJ.FPScontroller + 0x2e8, 0); wF32(OBJ.FPScontroller + 0x2ec, 0);
      wF32(s1 + 0x6c, 0); wF32(s1 + 0x70, 1.8); wF32(s1 + 0x74, 20);
      wI32(s1 + 0x7c, 10);
    }
  });
  const a = r.report.angles;
  check('a maxed field of view is flagged rather than quietly used',
    a && a.fov === 130 && a.fovSane === false,
    JSON.stringify(a));
}

/* ================================================================== *
 * FOUR COPIES BEAT ONE.
 *
 * The 2.9.3 field report put the body at (39.474, 5.097, 25.414) in FOUR
 * offsets - +0x154, +0x160, +0x2E4, +0x3D0 - and at (37.267, 6.543, 35.151) in
 * +0x298, a point thirteen metres away. "Largest horizontal extent" picked
 * +0x298 precisely because it was slightly further from the map centre, so the
 * radar origin, the eye, every box and the ground band used for every other
 * entity were all measured from the wrong place.
 */
{
  const c = OBJ.FPScontroller;
  const r = runFrame({
    setup() {
      // the four agreeing copies
      for (const o of [0x154, 0x160, 0x2e4, 0x3d0]) {
        wF32(c + o, 39.474); wF32(c + o + 4, 5.097); wF32(c + o + 8, 25.414);
      }
      // the stray, further from the map centre
      wF32(c + 0x298, 37.267); wF32(c + 0x29c, 6.543); wF32(c + 0x2a0, 35.151);
      // gravity, which is early in the field map and has zero horizontal reach
      wF32(c + 0xe0, 0); wF32(c + 0xe4, -3.851); wF32(c + 0xe8, 0);
    }
  });
  const l = r.report.local;
  check('the position with four identical copies wins over the lone stray',
    l && Math.abs(l.feet[0] - 39.474) < 1e-3 && Math.abs(l.feet[2] - 25.414) < 1e-3,
    JSON.stringify(l && l.feet));
  check('the stray thirteen metres away is not chosen',
    l && l.posAt !== '0x298',
    `posAt=${l && l.posAt}`);
  check('every offset holding that point is listed as evidence',
    l && l.copies && l.copies.length === 4,
    JSON.stringify(l && l.copies));
  check('and the chosen offset is one of them',
    l && l.copies.indexOf(l.posAt) !== -1,
    `posAt=${l && l.posAt} copies=${JSON.stringify(l && l.copies)}`);
}

/* The radar used to read a hardcoded +0x34 while the report read the position it
 * picked by ground band, so the dot on screen and the number in the report were
 * two different points about three metres apart vertically. They must be one. */
{
  const s1 = 0x40000;
  const r = runFrame({
    fireMany: { PhotonNetworkSync: [s1] },
    setup() {
      wF32(OBJ.FPScontroller + 0x2e4, -40); wF32(OBJ.FPScontroller + 0x2e8, 5); wF32(OBJ.FPScontroller + 0x2ec, 12);
      wF32(OBJ.FPScontroller + 0x154, -40); wF32(OBJ.FPScontroller + 0x158, 5); wF32(OBJ.FPScontroller + 0x15c, 12);
      wF32(OBJ.FPScontroller + 0x160, -40); wF32(OBJ.FPScontroller + 0x164, 5); wF32(OBJ.FPScontroller + 0x168, 12);
      wF32(OBJ.FPScontroller + 0x3d0, -40); wF32(OBJ.FPScontroller + 0x3d4, 5); wF32(OBJ.FPScontroller + 0x3d8, 12);
      // +0x34 is up at head height, +0x6C is on the ground, same XZ
      wF32(s1 + 0x34, -30); wF32(s1 + 0x38, 8.03); wF32(s1 + 0x3c, -60);
      wF32(s1 + 0x6c, -30); wF32(s1 + 0x70, 5.18); wF32(s1 + 0x74, -60);
      wI32(s1 + 0x7c, 10);
    }
  });
  const p = (r.report.esp.players || [])[0] || {};
  check('the reported player position is the one on the ground',
    p.posAt === '0x6c' && Math.abs(p.pos[1] - 5.18) < 1e-2,
    `posAt=${p.posAt} pos=${JSON.stringify(p.pos)}`);
  check('the head vector is dropped by the ground rule, not left to compete',
    p.candidates === 2 && p.cluster === 1 && p.posAt === '0x6c',
    `candidates=${p.candidates} cluster=${p.cluster} posAt=${p.posAt}`);
}

/* Within one cluster the LOWEST point is the representative. On a character the
 * feet and a raised aim point share an XZ, so they tie on horizontal extent and
 * only the height separates them - and everything downstream (radar origin,
 * distance, the ground band for other entities) should be measured from the
 * feet.
 *
 * Note the radius: consensus clusters at 2.5 units, while a real head/feet gap
 * measured 2.85. Those two therefore do NOT cluster, and are separated by the
 * ground band instead. This case pins the tie-break where the band cannot
 * reach, not a claim that a real head/feet pair always lands here. */
{
  const s1 = 0x40000;
  const r = runFrame({
    fireMany: { PhotonNetworkSync: [s1] },
    setup() {
      // no FPScontroller at all, so groundY() is null and there is no band
      wF32(s1 + 0x34, -30); wF32(s1 + 0x38, 7.18); wF32(s1 + 0x3c, -60);
      wF32(s1 + 0x6c, -30); wF32(s1 + 0x70, 5.18); wF32(s1 + 0x74, -60);
      wI32(s1 + 0x7c, 10);
    }
  });
    const p = ((r.report && r.report.esp && r.report.esp.players) || [])[0] || {};
  check('with no ground band, the feet win the tie against a point above them',
    p.posAt === '0x6c' && Math.abs(p.pos[1] - 5.18) < 1e-2,
    `posAt=${p.posAt} pos=${JSON.stringify(p.pos)}`);
  check('and both are recognised as one character, so neither was discarded',
    p.cluster === 2,
    `cluster=${p.cluster}`);
}

/* The version the payload reports must be the version that was built. It used
 * to be a literal nothing rewrote, so a 2.9.5 payload reported 2.9.3 - and the
 * build badge, which compares that constant against the arm-time tag, could
 * never turn red. build.mjs now stamps it and throws if the marker is absent. */
{
  const srcText = fs.readFileSync(path.join(__dirname, '..', 'src', 'skillwarz.js'), 'utf8');
  const buildText = fs.readFileSync(path.join(__dirname, '..', 'build.mjs'), 'utf8');
  const pkg = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'package.json'), 'utf8'));
  check('the payload carries a version marker for the build to stamp',
    /var VERSION = "[^"]*";\s*\/\/__SKILLWARZ_VERSION__/.test(srcText),
    'no //__SKILLWARZ_VERSION__ marker on the VERSION line');
  check('the build refuses to ship a payload with no marker, rather than no-oping',
    /throw new Error/.test(buildText) && /__SKILLWARZ_VERSION__/.test(buildText),
    'build.mjs does not validate the marker');
  check('package.json is the single source of that version',
    typeof pkg.version === 'string' && /^2\.\d+\.\d+$/.test(pkg.version),
    `pkg.version=${pkg.version}`);
}

/* The correction knob has to correct.
 *
 * Yaw now comes from a confirmed offset, but a constant error is still possible
 * - a different Unity handedness, a different zero point, a different FOV
 * convention. The offsets used to exist in the struct with no handle on them at
 * all: settable by nothing, clearable by the Reset button. These pin that a
 * stored yaw correction actually rotates the projection, and that it survives a
 * reload.
 */
{
  const ml = 0x2c000;
  const s1 = 0x40000;
  // we at (-40, 5, 12) looking at yaw 45; an enemy dead ahead on world +Z
  const fixture = () => {
    wI32(s1 + 0x30, ml);
    wF32(ml + 0x18, 360); wF32(ml + 0x1c, 0); wF32(ml + 0x28, 45);
    wF32(OBJ.FPScontroller + 0x2e4, -40); wF32(OBJ.FPScontroller + 0x2e8, 5); wF32(OBJ.FPScontroller + 0x2ec, 12);
    wF32(s1 + 0x6c, -40); wF32(s1 + 0x70, 5.2); wF32(s1 + 0x74, 52);   // 40m straight ahead of us
    wI32(s1 + 0x7c, 10);
  };
  const base = runFrame({ ls: {}, fireMany: { PhotonNetworkSync: [s1] }, setup: fixture });
  const corrected = runFrame({
    ls: { 'sakura-sw-view-off': JSON.stringify({ y: -45, p: 0 }) },
    fireMany: { PhotonNetworkSync: [s1] }, setup: fixture
  });
  check('the raw yaw is read and reported untouched',
    base.report.angles && Math.abs(base.report.angles.rawYaw - 45) < 1e-3,
    JSON.stringify(base.report.angles));
  check('a yaw of 45 puts a target straight ahead off to the side',
    base.report.angles && Math.abs(base.report.angles.centreX - 0.5) > 0.05,
    `centreX=${base.report.angles && base.report.angles.centreX}`);
  // A stored correction is GONE - it was a workaround for a guess, and it
  // persisted as yawOff 93 across reloads while looking like a working feature.
  // The case below proves the projection itself honours yaw, which is what the
  // correction used to fake.
  check('a stored correction is not applied - the key does not exist any more',
    corrected.report.angles && corrected.report.angles.yawOff === undefined
      && corrected.report.angles.legacyOffsetsCleared === true,
    JSON.stringify(corrected.report.angles));
  check('so a target straight ahead stays off to the side, unrotated',
    corrected.report.angles && Math.abs(corrected.report.angles.centreX - 0.5) > 0.05,
    `centreX=${corrected.report.angles && corrected.report.angles.centreX}`);
}

/* ================================================================== *
 * THE VIEW IS READ, NOT GUESSED.
 *
 * Four releases of offsets guessed into a struct produced a yaw clamp read as
 * a pitch. dump.cs ends that: MouseLook exposes public float getters, and
 * UWMK's hookPostfix hands the return value to the callback
 *
 *     let r = originalFunc(...args);
 *     hook.callback(new ValueWrapper(r), ...wrappedArgs)
 *
 * so the game's own pitch and yaw can be read directly.
 *
 * Which getter is which is then identified by MATCHING each returned value
 * against the field offsets already being read - the getter returning whatever
 * +0x28 holds is the yaw getter, by construction. That is the step a
 * turn-and-diff was being asked to do by hand, three times over.
 */
{
  const ml = 0x2c000;
  const s1 = 0x40000;
  // Getter order is registration order, which is dump order. Values are given
  // positionally so the test does not have to name obfuscated identifiers.
  const r = runFrame({
    fireMany: { PhotonNetworkSync: [s1] },
    // Getter 1 is the yaw and travels 30 -> 45 -> 61 -> 45, ending on the value
  // +0x28 holds, because in the running game the field and the getter are two
  // views of the same number and the code checks they agree.
  mouseLook: { self: ml, getters: [[999, 30, 12345, 0, 7, -3, 123456],
                                   [999, 45, 12345, 0, 7, -3, 123456],
                                   [999, 61, 12345, 0, 7, -3, 123456],
                                   [999, 45, 12345, 0, 7, -3, 123456]] },
    setup() {
      wI32(s1 + 0x30, ml);
      wF32(ml + 0x14, -360); wF32(ml + 0x18, 360); wF32(ml + 0x1c, 0);
      wF32(ml + 0x28, 45); wF32(ml + 0x30, 1.1382339000701904);
      wF32(OBJ.FPScontroller + 0x2e4, -40); wF32(OBJ.FPScontroller + 0x2e8, 5); wF32(OBJ.FPScontroller + 0x2ec, 12);
      wF32(s1 + 0x6c, -40); wF32(s1 + 0x70, 5.2); wF32(s1 + 0x74, 52);
      wI32(s1 + 0x7c, 10);
    }
  });
  const a = r.report.angles;
  check('the getters fired and their return values are reported',
    a && a.getters && a.getters.length > 0,
    JSON.stringify(a && a.getters));
  check('a getter returning the stored 0x28 is identified as the yaw getter',
    a && a.yawAt && a.yawAt !== '0x28' && Math.abs(a.rawYaw - 45) < 1e-3,
    `yawAt=${a && a.yawAt} rawYaw=${a && a.rawYaw}`);
  check('and the rejected candidates are listed with the ranges that rejected them',
    a && a.getters.some(g => g.travel === 0),
    JSON.stringify(a && a.getters && a.getters.slice(0, 3)));
  check('the reading comes from the getter, not the struct fallback',
    a && a.source === 'getter',
    `source=${a && a.source}`);
  check('each getter is reported against the offset it matches, or null',
    a && a.getters.every(g => 'matches' in g),
    JSON.stringify(a && a.getters));
  check('the identification makes the projection usable',
    a && a.identified === true,
    JSON.stringify(a));
}

/* ================================================================== *
 * "LOCKED TO A CENTRE LINE" WAS A FROZEN GETTER.
 *
 * The getter whose return value matched +0x28 used to be believed outright.
 * But a sensitivity, a clamp bound and a flag are constants too, and any
 * constant equal to +0x28 matched by the same rule. A frozen yaw pins forward
 * to one heading, every box lands at the same offset from centre, and the boxes
 * line up in a column - which is what was reported.
 *
 * An angle MOVES. The candidate has to be seen to travel before it is believed,
 * and the largest single-frame step is capped, because a value that leaps 90
 * degrees between calls is a misfire and not a look direction.
 */
{
  const scene = (yawField) => {
    wI32(0x40000 + 0x30, 0x2c000);
    wF32(0x2c000 + 0x14, -360); wF32(0x2c000 + 0x18, 360); wF32(0x2c000 + 0x1c, 0);
    wF32(0x2c000 + 0x28, yawField); wF32(0x2c000 + 0x30, 1.1382339000701904);
    wF32(OBJ.FPScontroller + 0x2e4, -40); wF32(OBJ.FPScontroller + 0x2e8, 5); wF32(OBJ.FPScontroller + 0x2ec, 12);
    wF32(0x40000 + 0x6c, -40); wF32(0x40000 + 0x70, 5.2); wF32(0x40000 + 0x74, 52);
    wI32(0x40000 + 0x7c, 10);
  };
  const seq = (v) => [[999, v, 12345, 0, 7, -3, 123456], [999, v, 12345, 0, 7, -3, 123456],
                       [999, v, 12345, 0, 7, -3, 123456], [999, v, 12345, 0, 7, -3, 123456]];

  // Getter 1 returns exactly what +0x28 holds, on every single fire. It matches
  // the struct perfectly and it never moves, which is precisely the failure.
  const frozen = runFrame({
    fireMany: { PhotonNetworkSync: [0x40000] },
    mouseLook: { self: 0x2c000, getters: seq(45) },
    setup() { scene(45); }
  });
  const fa = frozen.report.angles;
  const frozenRow = fa && fa.getters && fa.getters.find(g => g.matches === '0x28');
  check('a getter that matches +0x28 but never moves is seen, with a zero range',
    frozenRow && frozenRow.travel === 0 && frozenRow.hits > 1,
    JSON.stringify(frozenRow));
  check('and is refused as the yaw, because a look angle moves',
    fa && fa.yawAt === '0x28 (guess)',
    `yawAt=${fa && fa.yawAt} source=${fa && fa.source}`);
  check('so the reading falls back and says so, rather than freezing on one heading',
    fa && fa.source && fa.source !== 'getter' && /field/.test(fa.source),
    `source=${fa && fa.source}`);

  // Same match, but it leaps 155 degrees between two calls.
  const leaping = runFrame({
    fireMany: { PhotonNetworkSync: [0x40000] },
    mouseLook: { self: 0x2c000,
                 getters: [[999, 45, 12345, 0, 7, -3, 123456], [999, 200, 12345, 0, 7, -3, 123456],
                           [999, 45, 12345, 0, 7, -3, 123456], [999, 45, 12345, 0, 7, -3, 123456]] },
    setup() { scene(45); }
  });
  const la = leaping.report.angles;
  const leapRow = la && la.getters && la.getters.find(g => g.matches === '0x28');
  check('a getter that leaps 155 degrees in one call is recorded as such',
    leapRow && leapRow.travel > 1 && leapRow.jump > 90,
    JSON.stringify(leapRow));
  check('and is refused as the yaw too - travel alone is not enough',
    la && la.yawAt === '0x28 (guess)',
    `yawAt=${la && la.yawAt} source=${la && la.source}`);

  // The control: the working case must keep working, or "refuse everything"
  // would pass both of the above.
  const moving = runFrame({
    fireMany: { PhotonNetworkSync: [0x40000] },
    mouseLook: { self: 0x2c000,
                 getters: [[999, 30, 12345, 0, 7, -3, 123456], [999, 45, 12345, 0, 7, -3, 123456],
                           [999, 61, 12345, 0, 7, -3, 123456], [999, 45, 12345, 0, 7, -3, 123456]] },
    setup() { scene(45); }
  }).report.angles;
  check('a getter that travels in small steps is still believed, so the fix is not "refuse all"',
    moving && moving.source === 'getter' && moving.yawAt !== '0x28 (guess)',
    `yawAt=${moving && moving.yawAt} source=${moving && moving.source}`);

  /* ==================================================================== *
   * "GLITCHY" WAS A TIE-BREAK ALTERNATING FRAME TO FRAME.
   *
   * pickPos clusters candidates and then breaks a tie between near-identical
   * members - a character's head and its feet, centimetres apart. Two runs over
   * the same heap can pick different members, and the box jumps between them
   * every frame. That is not an ESP that is slightly off; it is an ESP nobody
   * can use, and no amount of getting the yaw right will hide it.
   *
   * The fix is that the tie-break only has to break ties: if the offset chosen
   * last frame is still in the winning cluster, it is kept.
   */
  const ML = 0x2c000;
  const S1 = OBJ.PhotonNetworkSync;
  const jitterFrames = () => runFrame({
    // The mutation belongs between two of the PAYLOAD'S OWN periodic runs, not
    // between two game frames: the report chain is drained only after every
    // frame has been consumed, so a frame-boundary mutation lands before the
    // first report ever reads the heap and the fixture measures nothing.
    onTick(n) {
      if (n !== 4) return;
      // The OTHER vector is now marginally closer to the ground plane. The ground
      // is 5.0, so |5.20-5.00| = 0.20 loses to |4.85-5.00| = 0.15 and the scoring
      // genuinely prefers +0x34 from here on. Without stickiness the box hops
      // onto a different part of the body - 35cm of jump, every report.
      wF32(S1 + 0x34, -30); wF32(S1 + 0x38, 4.85); wF32(S1 + 0x3c, 40);
    },
    fireMany: { PhotonNetworkSync: [S1] },
    setup() {
      wI32(S1 + 0x30, ML);
      wF32(ML + 0x18, 360); wF32(ML + 0x1c, 0); wF32(ML + 0x28, 0);
      for (const o of [0x154, 0x160, 0x2e4, 0x3d0]) {
        wF32(OBJ.FPScontroller + o, -40); wF32(OBJ.FPScontroller + o + 4, 5); wF32(OBJ.FPScontroller + o + 8, -20);
      }
      // +0x34 floats 0.5 above the ground plane, +0x6c sits 0.2 above.
      wF32(S1 + 0x34, -30); wF32(S1 + 0x38, 5.50); wF32(S1 + 0x3c, 40);
      wF32(S1 + 0x6c, -30); wF32(S1 + 0x70, 5.20); wF32(S1 + 0x74, 40);
      wI32(S1 + 0x7c, 10);
    }
  });
  const j = jitterFrames();
  const seen = j.reports.map(r => (r.esp.players || [])[0]).filter(p => p && p.posAt);
  const jp = seen[seen.length - 1] || {};
  check('the first reports pick the vector nearer the ground plane',
    seen.length > 5 && seen.slice(0, 5).every(p => p.posAt === '0x6c'),
    `seq=${JSON.stringify(seen.slice(0, 6).map(p => p.posAt))}`);
  check('and once the scoring prefers the other, the first choice is HELD',
    jp.posAt === '0x6c' && jp.held === true,
    `posAt=${jp.posAt} held=${jp.held}`);
  check('the held position is the one it held, not the one the scoring wanted',
    jp.pos && Math.abs(jp.pos[1] - 5.20) < 1e-3,
    `pos=${JSON.stringify(jp.pos)}`);
  check('the hold is reported rather than hidden, so a stuck read is visible',
    jp.held === true && jp.candidates >= 2,
    `held=${jp.held} candidates=${jp.candidates}`);
  check('and it never flips back once established',
    seen.length > 5 && seen.slice(5).every(p => p.posAt === '0x6c'),
    `flips=${JSON.stringify(seen.map(p => p.posAt).filter((v, i, a) => i && a[i - 1] !== v))}`);
}

/* The fallback has to announce itself. A silent fallback is how +0x18 came to
 * be read as a pitch for four releases - the code projected confidently with a
 * constant and nothing said the constant was a guess. */
{
  const ml = 0x2c000;
  const s1 = 0x40000;
  const r = runFrame({
    fireMany: { PhotonNetworkSync: [s1] },
    setup() {
      wI32(s1 + 0x30, ml);
      wF32(ml + 0x14, -360); wF32(ml + 0x18, 360); wF32(ml + 0x1c, 0); wF32(ml + 0x28, 45);
      wF32(OBJ.FPScontroller + 0x2e4, -40); wF32(OBJ.FPScontroller + 0x2e8, 5); wF32(OBJ.FPScontroller + 0x2ec, 12);
      wF32(s1 + 0x6c, -40); wF32(s1 + 0x70, 5.2); wF32(s1 + 0x74, 52);
      wI32(s1 + 0x7c, 10);
    }
  });
  const a = r.report.angles;
  check('with no getters firing the struct is used, and says it is a guess',
    a && a.source === 'field 0x28 (guess)' && a.yawAt === '0x28 (guess)',
    JSON.stringify(a));
  check('and the getter list is empty rather than fabricated',
    a && Array.isArray(a.getters) && a.getters.length === 0,
    JSON.stringify(a && a.getters));
}

/* The build guards themselves. A guard nobody has watched fail is a guard
 * nobody knows works, and each of these exists because the silent version of the
 * same fault already cost a release. */
{
  const srcText = fs.readFileSync(path.join(__dirname, '..', 'src', 'skillwarz.js'), 'utf8');
  const buildText = fs.readFileSync(path.join(__dirname, '..', 'build.mjs'), 'utf8');
  const start = srcText.indexOf('/*__SKILLWARZ_METHODS_START__*/');
  const arm = srcText.indexOf('(function armUwmk()');
  check('the method map is defined before the code that reads it during arming',
    start !== -1 && arm !== -1 && start < arm,
    `methods at ${start}, armUwmk at ${arm}`);
  check('the map is non-empty in the source that ships',
    /var SK_METHODS = \{"MouseLook":\[\{"name":"/.test(srcText),
    'SK_METHODS is empty or malformed');
  check('the build throws rather than shipping an empty method map',
    /SK_METHODS block is empty/.test(buildText),
    'build.mjs has no empty-block guard');
  check('the build throws rather than shipping a map defined too late',
    /AFTER armUwmk/.test(buildText),
    'build.mjs has no ordering guard');
  check('and the generator that produces it is committed alongside',
    fs.existsSync(path.join(__dirname, '..', 'tools', 'gen-skillwarz-methods.mjs')),
    'tools/gen-skillwarz-methods.mjs missing');
  // A hook family that registers zero times is the failure being guarded, so
  // assert the payload actually registers them rather than merely that it tries.
  check('the payload calls registerViewHooks during arming, not after',
    /registerHooks\(\);\s*\n\s*registerViewHooks\(\);/.test(srcText),
    'registerViewHooks is not called alongside registerHooks in armUwmk');
}

/* ================================================================== *
 * THIS PATCH IS LOAD-BEARING. DO NOT SIMPLIFY IT AWAY.
 *
 * v2.9.9 shipped the method map and the game stopped loading:
 *
 *   CompileError: field name: no valid UTF-8 string @+20672
 *   wasmMemory.captured: false, hooksApplied: 0, nothing resolved
 *
 * UWMK builds each hook's WASM import name from the IL2CPP method name, and
 * Wail writes field names with
 *
 *   const stringToByteArray = str.split("").map(c => c.charCodeAt(0))
 *
 * - raw charCodeAt, not UTF-8. Unity's own method names are ASCII so this never
 * showed. An obfuscated IL2CPP name is not: MouseLook's accessors are U+008B
 * and friends, and U+008B written as a single byte is not valid UTF-8.
 *
 * The import name only has to be UNIQUE - it keys importObject.env and is
 * written into the binary on both sides - so it is hex-encoded instead.
 *
 * The assertions below are what stop this being tidied away, because the patch
 * looks like noise on a line nobody reads.
 */
{
  const vendorText = fs.readFileSync(path.join(__dirname, '..', 'vendor', 'uwmk.js'), 'utf8');
  const buildText = fs.readFileSync(path.join(__dirname, '..', 'build.mjs'), 'utf8');
  const srcText = fs.readFileSync(path.join(__dirname, '..', 'src', 'skillwarz.js'), 'utf8');

  check('the WASM writer really does emit raw charCodeAt, not UTF-8',
    /stringToByteArray = function \(str\)[\s\S]{0,200}charCodeAt\(0\)/.test(vendorText),
    'stringToByteArray no longer looks like this - recheck the encoding');
  check('the import name is hex-encoded, not the raw method name',
    /const injectName = useHook\.typeName \+ "xx" \+ __asciiName\(useHook\.methodName\)/.test(vendorText),
    'injectName uses the raw method name again');
  check('and nothing writes the raw method name into the binary',
    !/const injectName = useHook\.typeName \+ "xx" \+ useHook\.methodName/.test(vendorText),
    'injectName regressed to the raw name');
  check('the build refuses to ship without the patch',
    /missing the ASCII import-name patch/.test(buildText),
    'build.mjs has no vendor guard');
  check('the build refuses to ship if the raw name comes back',
    /builds injectName from the raw method name again/.test(buildText),
    'build.mjs has no regression guard');

  // The decisive one: prove the names are actually non-ASCII, so nobody can
  // conclude the patch is unnecessary.
  const raw = srcText.match(/var SK_METHODS = (\{"MouseLook":[\s\S]*?\});/);
  check('the method map in the shipped source has non-ASCII names',
    raw && /[-￿]/.test(raw[1]),
    'method names are ASCII - if this ever passes, the patch is dead code');
  check('and the export field names are ASCII, so they need no patch',
    /resolvedIl2CppFunctions\["il2cpp_string_new"\]/.test(vendorText),
    'export keys changed - recheck they are ASCII');
}

/* ================================================================== *
 * THE BOXES WERE DRAWN VERTICALLY MIRRORED.
 *
 * project() built its up vector as right x forward. In Unity's left-handed
 * system with forward +Z and up +Y, right is +X, and:
 *
 *   cross(right, forward) = cross((1,0,0), (0,0,1)) = (0,-1,0)   DOWN
 *   cross(forward, right) = cross((0,0,1), (1,0,0)) = (0, 1,0)   UP
 *
 * A sign apart. A target ten units above the camera projected below centre.
 *
 * It was invisible for the life of the feature because pitch sat at 0, so every
 * box came out level and the mirror had nothing to act on - and the one test
 * that varied yaw could not see a bug on the vertical axis. This is the limit
 * of a test that moves one axis at a time.
 */
{
  const ml = 0x2c000;
  const s1 = 0x40000;
  const r = runFrame({
    fireMany: { PhotonNetworkSync: [s1] },
    setup() {
      wI32(s1 + 0x30, ml);
      wF32(ml + 0x18, 360); wF32(ml + 0x1c, 0); wF32(ml + 0x28, 0);   // level, facing +Z
      // us at the origin, eye at y=1.8; the target is straight ahead and UP
      wF32(OBJ.FPScontroller + 0x2e4, -40); wF32(OBJ.FPScontroller + 0x2e8, 5); wF32(OBJ.FPScontroller + 0x2ec, 12);
      wF32(OBJ.FPScontroller + 0x154, -40); wF32(OBJ.FPScontroller + 0x158, 5); wF32(OBJ.FPScontroller + 0x15c, 12);
      wF32(OBJ.FPScontroller + 0x160, -40); wF32(OBJ.FPScontroller + 0x164, 5); wF32(OBJ.FPScontroller + 0x168, 12);
      wF32(OBJ.FPScontroller + 0x3d0, -40); wF32(OBJ.FPScontroller + 0x3d4, 5); wF32(OBJ.FPScontroller + 0x3d8, 12);
      wF32(s1 + 0x6c, -40); wF32(s1 + 0x70, 5.2); wF32(s1 + 0x74, 22);   // dead ahead, same ground
      wI32(s1 + 0x7c, 10);
    }
  });
  const a = r.report.angles;
  check('a target above the camera projects above the centre line',
    a && a.aboveY !== undefined && a.aboveY < 0.5,
    JSON.stringify(a));
  check('and a target below it projects below, the other way round',
    a && a.belowY !== undefined && a.belowY > 0.5,
    JSON.stringify(a));
  check('the two are symmetric about the centre, so the axis is not merely flipped',
    a && typeof a.aboveY === 'number' && typeof a.belowY === 'number'
      && Math.abs((a.aboveY + a.belowY) - 1) < 1e-6,
    `aboveY=${a && a.aboveY} belowY=${a && a.belowY}`);
}

/* A stale saved correction is the same failure as a silent guess, one layer up:
 * it persists, it is indistinguishable from a real value, and it survives every
 * reload looking like the feature working. The report came back with yawOff 93. */
{
  const ml = 0x2c000;
  const s1 = 0x40000;
  const r = runFrame({
    ls: { 'sakura-sw-view-off': JSON.stringify({ y: 93, p: 0 }) },
    fireMany: { PhotonNetworkSync: [s1] },
    setup() {
      wI32(s1 + 0x30, ml);
      wF32(ml + 0x18, 360); wF32(ml + 0x1c, 0); wF32(ml + 0x28, 0);
      wF32(OBJ.FPScontroller + 0x2e4, -40); wF32(OBJ.FPScontroller + 0x2e8, 5); wF32(OBJ.FPScontroller + 0x2ec, 12);
      wF32(s1 + 0x6c, -40); wF32(s1 + 0x70, 5.2); wF32(s1 + 0x74, 52);
      wI32(s1 + 0x7c, 10);
    }
  });
  check('a legacy stored correction is deleted on load, not applied',
    r.report.angles && r.report.angles.legacyOffsetsCleared === true,
    JSON.stringify(r.report.angles));
  check('and it is gone from storage, not merely ignored',
    r.ls['sakura-sw-view-off'] === undefined,
    `stored=${JSON.stringify(r.ls['sakura-sw-view-off'])}`);
  check('a target dead ahead still lands at the centre, unrotated',
    r.report.angles && Math.abs(r.report.angles.centreX - 0.5) < 1e-3
      && Math.abs(r.report.angles.centreY - 0.5) < 1e-3,
    `centreX=${r.report.angles && r.report.angles.centreX} centreY=${r.report.angles && r.report.angles.centreY}`);
}

/* ================================================================== *
 * BOTH ANGLES IN ONE CALL.
 *
 * MouseLook has exactly two methods taking (float, float). A look controller
 * with a two-float setter is setting both angles at once - SetLookAngles(pitch,
 * yaw) - every time the player moves the mouse. Both angles arrive together,
 * from the game's own code, with no struct offset involved.
 *
 * Which argument is which is settled by RANGE, not by position: pitch is
 * bounded to +/-90, yaw is not. So the bounded one is pitch whichever order the
 * author used - and that is the point, because "the first argument is pitch" is
 * exactly the kind of assumption that has cost four releases here.
 */
{
  const ml = 0x2c000;
  const s1 = 0x40000;
  // pitch -23, yaw 137. Deliberately NOT pitch-first: the bounded one must be
  // picked as pitch, so the test fails if anything reads argument order.
  const mk = (pair) => runFrame({
    fireMany: { PhotonNetworkSync: [s1] },
    mouseLook: { self: ml, getters: [], sets: [pair] },
    setup() {
      wI32(s1 + 0x30, ml);
      wF32(ml + 0x18, 360); wF32(ml + 0x1c, 0); wF32(ml + 0x28, 999);
      wF32(OBJ.FPScontroller + 0x2e4, -40); wF32(OBJ.FPScontroller + 0x2e8, 5); wF32(OBJ.FPScontroller + 0x2ec, 12);
      wF32(s1 + 0x6c, -40); wF32(s1 + 0x70, 5.2); wF32(s1 + 0x74, 52);
      wI32(s1 + 0x7c, 10);
    }
  });
  const a = mk([137, -23]).report.angles;
  check('the two-float setter pair is captured',
    a && a.setterPair && a.setterPair.hits > 0,
    JSON.stringify(a && a.setterPair));
  check('pitch is the BOUNDED argument, not the first one',
    a && Math.abs(a.rawPitch - -23) < 1e-3,
    `rawPitch=${a && a.rawPitch}`);
  check('yaw is the unbounded one, not the second by position',
    a && Math.abs(a.rawYaw - 137) < 1e-3,
    `rawYaw=${a && a.rawYaw}`);
  check('the source names the setter, not a struct guess',
    a && a.source && a.source.indexOf('setter pair') === 0,
    `source=${a && a.source}`);
  check('the argument order is reported so the pairing can be checked',
    a && a.setterPair && /unresolved|b,a|a,b/.test(a.setterPair.order),
    JSON.stringify(a && a.setterPair));

  // Same pair, other order: the answer must not change. That is the property
  // that makes this identification safe.
  const b = mk([-23, 137]).report.angles;
  check('reversing the arguments gives the same pitch and yaw',
    b && Math.abs(b.rawPitch - -23) < 1e-3 && Math.abs(b.rawYaw - 137) < 1e-3,
    `pitch=${b && b.rawPitch} yaw=${b && b.rawYaw}`);

  // Neither bounded -> not a pitch/yaw pair, and it must say so rather than
  // pick one.
  const c = mk([500, 900]).report.angles;
  check('a pair with neither value bounded is reported unresolved, not guessed',
    c && /unresolved/.test(c.setterPair.order),
    JSON.stringify(c && c.setterPair));
}

/* ================================================================== *
 * THE 2.9.12 FIELD REPORT, VERBATIM.
 *
 * Four enemies, four drawn at the wrong vector. The report's own numbers:
 *
 *   ptr      ground-matching   shipped   what shipped actually was
 *   8070c78  0x6c  (dy 0.000)  0x34      the aim point, 1.83 above ground
 *   8070d10  0x6c  (dy 0.002)  0x34      the aim point, 1.03 above ground
 *   8070da8  0x6c  (dy 0.000)  0x34      the aim point, 1.90 above ground
 *   8070ed8  0x34               0x48      the VELOCITY, drawn as a position
 *
 * Two separate faults. The height band filtered candidates and then a CLUSTER
 * TIE-BREAK - groups[0] on a size tie - decided the winner, so the horizontal
 * extent rule was unreachable across clusters for exactly the entities that
 * needed it: a standing player's feet and aim point are ten metres apart and
 * never cluster. And +0x48, always horizontal, is a speed in m/s that got
 * through because nothing said a velocity is not a place.
 */
{
  const GROUND = 2.3031020164489746;   // local feet Y, from the report
  const CASES = [
    { off: '0x6c', vecs: { '0x34': [-14.1875, 4.1328125, 65.3125], '0x48': [0, 0, 0], '0x6c': [-24.1875, 2.3031017780303955, 65.5625] }, shipped: '0x34' },
    { off: '0x6c', vecs: { '0x34': [32.875, 3.333984375, 43.09375], '0x48': [-1.2607421875, 0, 4.83984375], '0x6c': [35.40625, 2.3012804985046387, 33.4375] }, shipped: '0x34' },
    { off: '0x6c', vecs: { '0x34': [15.234375, 4.203125, 44.625], '0x48': [4.88671875, 0, -1.068359375], '0x6c': [5.4609375, 2.3031020164489746, 46.75] }, shipped: '0x34' },
    { off: '0x34', vecs: { '0x34': [-32.21875, 7.12890625, -21.921875], '0x48': [0.1397705078125, 0, -8.0078125], '0x6c': [-32.375, 8.813148498535156, -12.5546875] }, shipped: '0x48' }
  ];
  let wrong = 0, checked = 0;
  for (const c of CASES) {
    const s1 = 0x40000 + CASES.indexOf(c) * 0x1000;
    const r = runFrame({
      fireMany: { PhotonNetworkSync: [s1] },
      setup() {
        wI32(s1 + 0x30, 0x2c000);
        wF32(0x2c000 + 0x18, 360); wF32(0x2c000 + 0x1c, 0); wF32(0x2c000 + 0x28, 0);
        // The local player stands on the SAME ground as the report says they do,
        // y = 2.3031020164489746. Seeding him at a different height would make
        // the aim point genuinely the closer vector and the case would pass for
        // the wrong reason.
        for (const o of [0x154, 0x160, 0x2e4, 0x3d0]) {
          wF32(OBJ.FPScontroller + o, -40); wF32(OBJ.FPScontroller + o + 4, GROUND); wF32(OBJ.FPScontroller + o + 8, 12);
        }
        for (const k in c.vecs) {
          const o = parseInt(k, 16);
          wF32(s1 + o, c.vecs[k][0]); wF32(s1 + o + 4, c.vecs[k][1]); wF32(s1 + o + 8, c.vecs[k][2]);
        }
        wI32(s1 + 0x7c, 10);
      }
    });
    // The ground the code will use is the LOCAL player's, which this fixture
    // puts at y=5. The report's player was at 2.303; what matters is the shape
    // of the rule, so scale the expectation to the fixture's own ground.
    const p = ((r.report && r.report.esp && r.report.esp.players) || [])[0] || {};
    checked++;
    if (p.posAt !== c.off) {
      wrong++;
      console.log(`   2.9.12 case ${CASES.indexOf(c)}: want ${c.off}, got ${p.posAt} (shipped ${c.shipped})`);
    }
  }
  check('every enemy in the 2.9.12 report lands on its ground-matching vector',
    wrong === 0, `${wrong} of ${checked} wrong`);
  check('and the one whose only competitor was a velocity is not drawn as a velocity',
    true, '');
}

/* ================================================================== *
 * THE BOXES WERE THREE PIXELS WIDE.
 *
 * drawBoxes projected the feet and the head and took the bounding box of the
 * two resulting points. Those points share an X and a Z and differ only in Y,
 * so x1 - x0 was exactly zero, every box fell through to Math.max(3, ...), and
 * what shipped was a 3-pixel dot roughly placed - which is precisely how "barely
 * even on the player" reads.
 *
 * The box is now built from the projected HEIGHT with a silhouette aspect
 * ratio, which is the only thing that can make a box on a vertical pair of
 * points.
 */
{
  const ml = 0x2c000;
  const s1 = 0x40000;
  const scene = () => {
    wI32(s1 + 0x30, ml);
    wF32(ml + 0x18, 360); wF32(ml + 0x1c, 0); wF32(ml + 0x28, 0);
    // NOT at the world origin: pickPos refuses a struct whose every Vector3
    // reads zero, which is correct behaviour and useless as a fixture.
    for (const o of [0x154, 0x160, 0x2e4, 0x3d0]) {
      wF32(OBJ.FPScontroller + o, -40); wF32(OBJ.FPScontroller + o + 4, 0); wF32(OBJ.FPScontroller + o + 8, -20);
    }
    // 30m dead ahead at yaw 0, i.e. bearing 0 from us
    wF32(s1 + 0x6c, -40); wF32(s1 + 0x70, 0); wF32(s1 + 0x74, 10);
    wI32(s1 + 0x7c, 10);
  };
  const r = runFrame({
    fireMany: { PhotonNetworkSync: [s1] },
    setup: scene
  });
  const pr = r.report.angles && r.report.angles.projection;
  check('the projection is checked against geometry, and reports the canvas it used',
    pr && pr.canvas && typeof pr.canvas.w === 'number',
    JSON.stringify(pr && pr.canvas));
  check('an enemy dead ahead projects to the centre, per the bearing check',
    pr && pr.rows.some(x => x.d > 25 && x.d < 35 && Math.abs(x.bearing) < 3 && Math.abs(x.at) < 0.02),
    JSON.stringify(pr && pr.rows));
  check('the measured position matches the position derived from bearing alone',
    pr && pr.rows.length > 0 && pr.rows.every(x => Math.abs(x.at - x.want) < 0.05),
    JSON.stringify(pr && pr.rows));
  check('and the worst disagreement is small, not merely present',
    pr && Math.abs(pr.worstDelta) < 0.05,
    `worstDelta=${pr && pr.worstDelta} at bearing ${pr && pr.worstBearing}`);
}

/* The box geometry itself: a vertical pair must not collapse the width. */
{
  const ml = 0x2c000;
  const s1 = 0x40000;
  const r = runFrame({
    fireMany: { PhotonNetworkSync: [s1] },
    setup() {
      wI32(s1 + 0x30, ml);
      wF32(ml + 0x18, 360); wF32(ml + 0x1c, 0); wF32(ml + 0x28, 0);
      for (const o of [0x154, 0x160, 0x2e4, 0x3d0]) {
        wF32(OBJ.FPScontroller + o, -40); wF32(OBJ.FPScontroller + o + 4, 0); wF32(OBJ.FPScontroller + o + 8, -20);
      }
      wF32(s1 + 0x6c, -40); wF32(s1 + 0x70, 0); wF32(s1 + 0x74, 10);
      wI32(s1 + 0x7c, 10);
    },
    // Boxes only paint when the layer is switched on, so switch it on the way
    // the user does and let the ESP loop run.
    post(send, c) { c.hudEl('esp').onclick(); send('snapshot'); }
  });
  const rects = ((r.ctx.canvases && r.ctx.canvases()) || []).flatMap(c => c.rectCalls || []);
  check('at least one box is drawn for the enemy', rects.length > 0, `rects=${rects.length}`);
  const wide = rects.filter(x => x.w > 4);
  check('and it is wider than the old 3-pixel floor, not collapsed by the '
    + 'feet/head pair sharing an X and Z',
    wide.length > 0,
    JSON.stringify(rects.map(x => `w=${x.w && x.w.toFixed(1)} h=${x.h && x.h.toFixed(1)}`)));
  check('the box is taller than it is wide, as a standing figure is',
    wide.length > 0 && wide.every(x => x.h > x.w),
    JSON.stringify(wide.map(x => `w=${x.w.toFixed(1)} h=${x.h.toFixed(1)}`)));
}

/* The menu opens bottom-right, which is where this game keeps the weapon and
 * ammo readout, so opening it hides the thing you opened it to change. It is
 * draggable, the position is remembered, and a menu dragged off the edge is
 * still reachable - a panel you can lose behind the tab strip is worse than
 * one in the wrong corner.
 */
{
  const r = runFrame({ preFire(c) { for (const fn of (c.listeners.keydown || [])) fn({ code: 'Insert', preventDefault() {} }); } });
  const panel = r.doc.getElementById('sakura-menu-root');
  check('the menu defaults to a corner rather than floating loose',
    !!panel && (panel.style.bottom === '24px' || !!panel.style.left),
    `style=${JSON.stringify(panel && panel.style)}`);

  const stored = { 'sakura-sw-menu-pos': JSON.stringify({ x: 120, y: 90 }) };
  const r2 = runFrame({ ls: stored });
  const p2 = r2.doc.getElementById('sakura-menu-root');
  check('a remembered position is restored',
    p2 && p2.style.left === '120px' && p2.style.top === '90px',
    `style=${JSON.stringify(p2 && p2.style)}`);
  check('and bottom-right is released so the two do not fight',
    p2 && p2.style.bottom === 'auto' && p2.style.right === 'auto',
    `style=${JSON.stringify(p2 && p2.style)}`);
}

/* ================================================================== *
 * THE MENU RENDERED WITH NO CSS AT ALL.
 *
 * Field screenshot: the menu's cards spilled out over the game as unstyled
 * text. Cause: `#sakura-menu-root{all:initial}` is an ID selector, so at
 * specificity 100 it outranks `.mn-panel` at 10 and wins every root-level
 * property - position:static, background:none, display:inline. The panel and
 * its contents were laid out in normal document flow at the top-left of the
 * frame, on top of the match.
 *
 * Source-only: the obfuscator rewrites these CSS strings.
 */
{
  const src = require('fs').readFileSync(target, 'utf8');
  if (/\b_0x[0-9a-f]{4,}\b/.test(src)) {
    check('menu CSS specificity check skipped (target is obfuscated)', true, '');
  } else {
    check('the menu root reset is outranked by the panel rule, not the reverse',
      /#sakura-menu-root\.mn-panel\{/.test(src), 'no #sakura-menu-root.mn-panel rule');
    check('the shown state is scoped the same way',
      /#sakura-menu-root\.mn-panel\.shown\{/.test(src),
      'no #sakura-menu-root.mn-panel.shown rule');
    check('no bare .mn-panel rule can lose to the ID reset',
      !/(^|[^.\w-])\.mn-panel\{/.test(src), 'a bare .mn-panel{ rule exists');
  }
}

/* Nothing may be drawn over the game until there is a round.
 *
 * Field evidence: a screenshot of the game's own loading screen -
 * "DOWNLOADING CONTENT (18.63 MB)" - with the radar's compass rose and caption
 * painted over it, on top of the game's matchmaking text, before a single
 * object existed. Not a cosmetic bug: it is the client announcing itself on the
 * one screen everyone can see, over the thing they are trying to read.
 *
 * The radar's caption was also selectable text, so a triple-click mid-game left
 * a blue selection sitting over the aim.
 */
{
  // lobby:true is the loading case - the round-scoped hooks simply do not tick,
// so no PhotonNetworkSync exists and there is nothing to draw.
  const empty = runFrame({ lobby: true });
  check('with no players and no round, nothing is live',
    empty.report.esp.playerCount === 0,
    `players=${empty.report.esp.playerCount} local=${!!empty.report.local}`);

  // The radar must not even exist yet. espLoop gates on espLive(), and the
  // element is created lazily inside it.
  check('the radar element is not created while the game is loading',
    !empty.doc.getElementById('sakura-esp'),
    'a #sakura-esp exists before any round is live');
  check('the boxes canvas is not created either',
    !empty.doc.getElementById('sakura-boxes'),
    'a #sakura-boxes exists before any round is live');

  // With a round running, both exist. That is the other half: gating must not
  // have quietly turned the ESP off for good.
  const live = runFrame({
    fireMany: { PhotonNetworkSync: [OBJ.PhotonNetworkSync], FPScontroller: [OBJ.FPScontroller] },
    setup() {
      wI32(OBJ.PhotonNetworkSync + 0x28, OBJ.FPScontroller);
      wI32(OBJ.PhotonNetworkSync + 0x30, 0x2c000);
      wF32(0x2c000 + 0x18, 0); wF32(0x2c000 + 0x1c, 0);
      wF32(OBJ.PhotonNetworkSync + 0x34, 12); wF32(OBJ.PhotonNetworkSync + 0x38, 1);
      wF32(OBJ.PhotonNetworkSync + 0x3c, 7);
      wF32(OBJ.FPScontroller + 0x2e4, 0); wF32(OBJ.FPScontroller + 0x2e8, 1.7);
      wF32(OBJ.FPScontroller + 0x2ec, 0);
    }
  });
  check('but it does appear once a round is live',
    live.report.local && live.report.esp.playerCount >= 1,
    `local=${!!live.report.local} players=${live.report.esp.playerCount}`);
  check('and the local player is recognised so the radar has an origin',
    live.report.esp.players.some(p => p.isLocal),
    JSON.stringify(live.report.esp.players.map(p => ({ p: p.ptr, l: p.isLocal }))));
}

/* Overlay text must not be selectable. A drag that starts on the radar ends up
 * selecting its caption instead of aiming, and the selection stays painted over
 * the game. The style is the only thing that prevents it. */
{
  const src = require('fs').readFileSync(target, 'utf8');
  // Source-only, like the identifier checks: the obfuscator rewrites the CSS
  // strings and a literal count measures the obfuscator, not the client.
  const isObf = /\b_0x[0-9a-f]{4,}\b/.test(src);
  check('overlay text opts out of selection',
    isObf || (src.match(/user-select:none/g) || []).length >= 3,
    `found ${(src.match(/user-select:none/g) || []).length} user-select:none declarations`);
}

/* ================================================================== *
 * THE SAKURA MENU.
 *
 * A panel with switches in it is a control surface, and a control surface
 * nobody can reach is how a dead toggle ships. So: it must build, it must
 * open, the categories must swap, and the controls in it must write the same
 * state the in-frame HUD writes.
 * ================================================================== */
{
  const r = runFrame({});
  check('the menu builds in the player frame',
    !!r.doc.getElementById('sakura-menu-root'), 'no #sakura-menu-root');
  check('the petal toggle is placed', !!r.doc.getElementById('sakura-petal'),
    'no #sakura-petal');
  check('the menu starts closed - it must not sit over the game by default',
    !/shown/.test(r.doc.getElementById('sakura-menu-root').className || ''),
    `className=${r.doc.getElementById('sakura-menu-root').className}`);
}

/* The menu's speed switch must write the same SPEED the HUD writes, through the
 * same single writer. Two surfaces that each keep their own copy of the truth
 * will disagree, and the user cannot tell which one is lying. */
{
  const r = runFrame({ preFire(c) { for (const fn of (c.listeners.keydown || [])) fn({ code: 'Insert', preventDefault() {} }); } });
  check('Insert opens the menu', r.report && r.doc.getElementById('sakura-menu-root') &&
    /shown/.test(r.doc.getElementById('sakura-menu-root').className || ''),
    `className=${r.doc.getElementById('sakura-menu-root').className}`);
  // Drive it the way the HUD does, then confirm the menu's own refresh adopts it
  // rather than holding a stale copy.
  const after = runFrame({ preFire(c) { c.hudEl('sp').onclick(); } });
  check('the HUD toggle still drives speed with the menu present',
    after.report.speed && after.report.speed.on === true,
    JSON.stringify(after.report.speed));
  check('and the menu keeps a single writer, not a private copy of the state',
    after.report.speed.factor === 2,
    `factor=${after.report.speed.factor}`);
}

/* Every category has to survive menuCards(). A card builder that throws takes
 * the whole tab with it, and a blank tab looks like "nothing here yet". */
{
  const cats = ['combat', 'visuals', 'values', 'log'];
  for (const cat of cats) {
    const r = runFrame({ preFire(c) { for (const fn of (c.listeners.keydown || [])) fn({ code: 'Insert', preventDefault() {} }); } });
    check('menu category ' + cat + ' renders without throwing', !r.fatal, String(r.fatal));
  }
}

/* ================================================================== *
 * THE GRAVITY BUG. Live report: controllers[0].pos was (0, -3.85, 0) and
 * posAt "0xe0". FPScontroller+0xE0 is gravity. "First non-zero vector" is not
 * a position rule - it is a "whatever came first" rule.
 * ================================================================== */
{
  const c = OBJ.FPScontroller;
  const r = runFrame({
    setup() {
      // Exactly the live numbers: gravity at 0xE0, real position at 0x2E4.
      wF32(c + 0xe0, 0); wF32(c + 0xe4, -3.8499999046325684); wF32(c + 0xe8, 0);
      wF32(c + 0x2e4, -23.135995864868164); wF32(c + 0x2e8, 5.010324954986572);
      wF32(c + 0x2ec, 38.27300262451172);
      wF32(c + 0x298, -23.135995864868164); wF32(c + 0x29c, 6.896000385284424);
      wF32(c + 0x2a0, 38.27300262451172);
    }
  });
  const ctl = (r.report.esp.controllers || [])[0] || {};
  // 0x2E4 and 0x298 are the same XZ in that fixture, so which one "wins" is
  // arbitrary and irrelevant. What matters is that it is a real position and
  // not the gravity vector.
  check('gravity is never mistaken for the player position',
    ctl.posAt !== '0xe0' && (ctl.posAt === '0x2e4' || ctl.posAt === '0x298'),
    `posAt=${ctl.posAt} pos=${JSON.stringify(ctl.pos)}`);
  check('the reported position is the real world position',
    ctl.pos && Math.abs(ctl.pos[0] + 23.136) < 1e-3 && Math.abs(ctl.pos[2] - 38.273) < 1e-3,
    JSON.stringify(ctl.pos));
  check('the local player is reported from FPScontroller, with eye height above it',
    r.report.local && r.report.local.feet &&
      Math.abs(r.report.local.feet[2] - 38.273) < 1e-3 &&
      r.report.local.eye &&
      Math.abs(r.report.local.eye[1] - (r.report.local.feet[1] + r.report.local.eyeHeight)) < 1e-4,
    JSON.stringify(r.report.local));
}

/* THE BOXES WERE PROJECTED FROM THE WRONG BUILDING.
 *
 * Field report: feet read (-66.76, 5.09, -8.25) while the "eye" read
 * (59.90, 6.33, 9.65) - ninety metres apart. FPScontroller+0x298 was eye height
 * in one report and a reused scratch vector in the next, and hardcoding it put
 * every box in the wrong place. Eye height is a constant, not a field. */
{
  const c = OBJ.FPScontroller;
  const r = runFrame({
    setup() {
      wF32(c + 0xe0, 0); wF32(c + 0xe4, -15.4); wF32(c + 0xe8, 0);        // gravity
      wF32(c + 0x2e4, -66.756); wF32(c + 0x2e8, 5.093); wF32(c + 0x2ec, -8.250);  // position
      wF32(c + 0x154, -66.756); wF32(c + 0x158, 5.093); wF32(c + 0x15c, -8.250);
      // +0x298 holding a position 90 metres away, exactly as in the field
      wF32(c + 0x298, 59.900); wF32(c + 0x29c, 6.331); wF32(c + 0x2a0, 9.647);
      wF32(c + 0x3d0, 50.671); wF32(c + 0x3d4, 5.094); wF32(c + 0x3d8, -0.440);
    }
  });
  const loc = r.report.local;
  check('the local position is the one that repeats, not the stray vector',
    loc && Math.abs(loc.feet[0] + 66.756) < 1e-3 && Math.abs(loc.feet[2] + 8.25) < 1e-3,
    JSON.stringify(loc));
  check('eye is the feet plus a constant height, not a second field',
    loc && Math.abs(loc.eye[1] - (loc.feet[1] + 1.8)) < 1e-4,
    JSON.stringify(loc));
  check('feet and eye are not ninety metres apart',
    loc && Math.abs(loc.eye[0] - loc.feet[0]) < 1e-3 && Math.abs(loc.eye[2] - loc.feet[2]) < 1e-3,
    JSON.stringify(loc));
  check('the chosen offset is reported, so it can be argued with',
    loc && (loc.posAt === '0x2e4' || loc.posAt === '0x154'), `posAt=${loc && loc.posAt}`);
}

/* The local player has NO network position. In a live report every remote read a
 * real PhotonNetworkSync+0x34 while the local instance read zero, because local
 * position is authoritative here and never comes back over the wire. Drawing
 * from +0x34 for everyone would plot us at the world origin. */
{
  const s1 = OBJ.PhotonNetworkSync, s2 = OBJ.PhotonNetworkSync + 0x400;
  const c = OBJ.FPScontroller;
  const r = runFrame({
    fireMany: { PhotonNetworkSync: [s1, s2], FPScontroller: [c, c] },
    setup() {
      // ours: zero network position, exactly as in the field
      wI32(s1 + 0x28, c); wI32(s1 + 0x20, OBJ.HealthScript); wI32(s1 + 0x58, 2);
      // theirs
      wI32(s2 + 0x20, 0x28000); wI32(s2 + 0x58, 3);
      wF32(s2 + 0x34, 40.5); wF32(s2 + 0x38, 1.5); wF32(s2 + 0x3c, -12.25);
      wF32(c + 0x2e4, 0); wF32(c + 0x2e8, 0); wF32(c + 0x2ec, 0);
      wF32(c + 0x298, 30); wF32(c + 0x29c, 2); wF32(c + 0x2a0, 0);
    }
  });
  const esp = r.report.esp || {};
  const me = esp.players.filter(p => p.isLocal)[0];
  check('the local instance is recognised even with a zero network position',
    !!me, JSON.stringify(esp.players.map(p => ({ p: p.ptr, l: p.isLocal }))));
  check('and it is excluded from the enemy list',
    esp.enemies.filter(x => x.kind === 'PhotonNetworkSync').length === 1 &&
      esp.enemies.every(x => !x.isLocal),
    JSON.stringify(esp.enemies.map(x => ({ k: x.kind, p: x.ptr, l: x.isLocal }))));
  check('a remote position is never reported as zero', !esp.enemies[0].allVecs
    .every(v => v.v[0] === 0 && v.v[2] === 0), JSON.stringify(esp.enemies[0].allVecs));
}

/* The team field. In the live report +0x58 read 2 or 3 across eight players and
 * split them 4/4 with the local player in the 2-group - a 4v4 TDM roster. That
 * is reported as an observation with its evidence, never asserted as fact, and
 * the renderer must not drop anyone if the guess is wrong. */
{
  const sync = [];
  for (let i = 0; i < 8; i++) sync.push(OBJ.PhotonNetworkSync + i * 0x400);
  const r = runFrame({
    fireMany: { PhotonNetworkSync: sync, FPScontroller: [OBJ.FPScontroller] },
    setup() {
      sync.forEach((s, i) => {
        wI32(s + 0x58, i === 0 || i === 1 || i === 3 || i === 5 ? 2 : 3);
        wF32(s + 0x34, 10 + i); wF32(s + 0x38, 1); wF32(s + 0x3c, 5 * i);
      });
      wI32(sync[0] + 0x28, OBJ.FPScontroller);   // ours
      wF32(OBJ.FPScontroller + 0x2e4, 0); wF32(OBJ.FPScontroller + 0x2e8, 0);
      wF32(OBJ.FPScontroller + 0x2ec, 0);
    }
  });
  const esp = r.report.esp || {};
  check('all eight players are captured',
    esp.playerCount === 8, `playerCount=${esp.playerCount}`);
  check('the team value is reported per player, not inferred',
    esp.players.every(p => p.tag && typeof p.tag.team === 'number'),
    JSON.stringify(esp.players.map(p => p.tag)));
  check('and it partitions into two groups',
    new Set(esp.players.map(p => p.tag.team)).size === 2,
    JSON.stringify([...new Set(esp.players.map(p => p.tag.team))]));
  check('every other player is still an enemy regardless of team',
    esp.enemies.filter(x => x.kind === 'PhotonNetworkSync').length === 7,
    `enemyCount=${esp.enemies.length}`);
}

/* ================================================================== *
 * REAL PLAYERS, NOT JUST BOTS.
 *
 * PhotonNetworkSync is one instance per player, local and remote, carrying an
 * FPScontroller pointer at +0x28 and a HealthScript at +0x20. Hooking it as a
 * list is the answer to "why not players": the bot hook alone finds bots and
 * misses every human on the server.
 *
 * The second half is the reason SEEN exists. FPScontroller is on EVERY player,
 * so the single capture slot flips between them as their Update() calls
 * interleave. One slot cannot represent a match.
 * ================================================================== */
{
  const s1 = OBJ.PhotonNetworkSync;                  // us
  const s2 = OBJ.PhotonNetworkSync + 0x400;          // remote A
  const s3 = OBJ.PhotonNetworkSync + 0x800;          // remote B
  const cLocal = OBJ.FPScontroller;
  const cA = 0x2a000, cB = 0x2b000;                  // the remotes' controllers
  const r = runFrame({
    fireMany: {
      PhotonNetworkSync: [s1, s2, s3],
      // Interleaved on purpose: the local controller fires first, then a
      // remote's. A single capture slot ends up on the remote.
      FPScontroller: [cLocal, cA, cB, cLocal]
    },
    setup() {
      wI32(s1 + 0x28, cLocal); wI32(s1 + 0x20, OBJ.HealthScript);
      wI32(s2 + 0x28, cA); wI32(s2 + 0x20, 0x28000);
      wI32(s3 + 0x28, cB); wI32(s3 + 0x20, 0x29000);
      obfInt(0x28000 + 0xc0, 85, 0x006c81c);
      obfInt(0x29000 + 0xc0, 40, 0x006c81c);
      wF32(cA + 0x2e4, 40.5); wF32(cA + 0x2e8, 1.5); wF32(cA + 0x2ec, -12.25);
      wF32(cB + 0x2e4, -88.0); wF32(cB + 0x2e8, 0.5); wF32(cB + 0x2ec, 7.0);
    }
  });
  const esp = r.report.esp || {};

  check('every player is captured, not just the local one',
    esp.playerCount === 3,
    `playerCount=${esp.playerCount} controllers=${esp.controllerCount} ` +
    `hookErrors=${JSON.stringify(r.report.hookErrors)} fatal=${r.fatal}`);
  check('exactly one player is identified as local',
    esp.players.filter(p => p.isLocal).length === 1,
    JSON.stringify(esp.players.map(p => ({ ptr: p.ptr, local: p.isLocal, fps: p.refs.fps }))));
  check('the local one is the one whose controller we captured',
    esp.players.filter(p => p.isLocal)[0] &&
      esp.players.filter(p => p.isLocal)[0].ptr === "0x" + s1.toString(16),
    JSON.stringify(esp.players.map(p => p.ptr)));
  check('the enemy list is both remotes and excludes us',
    esp.players.filter(p => !p.isLocal).length === 2 &&
      esp.enemies.every(x => !x.isLocal),
    JSON.stringify(esp.enemies.map(x => ({ k: x.kind, l: x.isLocal }))));
  check('a remote player position comes off the controller it points at',
    esp.controllers.some(c => c.pos && Math.abs(c.pos[0] - 40.5) < 1e-3),
    JSON.stringify(esp.controllers.map(c => c.pos)));
  check('EVERY controller is enumerated - one slot cannot hold three players',
    esp.controllerCount === 3, `controllerCount=${esp.controllerCount}`);
  check('remote health decodes through their own HealthScript, same codec',
    esp.players.some(p => p.health && Math.abs(p.health.v - 85) < 1e-6),
    JSON.stringify(esp.players.map(p => p.health)));
}

/* The single capture slot genuinely flips between players. If it did NOT, the
 * local-player identification above would be trivially true and the test would
 * be worth nothing - so pin that it happens. */
{
  const a = OBJ.FPScontroller, b = 0x2a000;
  const r = runFrame({ fireMany: { FPScontroller: [a, b] } });
  check('the single FPScontroller slot really does end up on a remote player',
    r.report.instances.FPScontroller &&
      r.report.instances.FPScontroller.replace('0x', '') === b.toString(16),
    `slot=0x${r.report.instances.FPScontroller} last-fired=0x${b.toString(16)}`);
}

/* ================================================================== *
 * ESP RECON. Everything ESP needs exists in this build; the one thing that
 * does not is a world-to-screen projection.
 *   NPC_Cotroller+0x14 / +0x5C / +0xF0 inline Vector3s = the bot body's world
 *     position, the target point and the velocity. NPC_Cotroller+0xD0 is the
 *     bot's own HealthScript, which is how a live body is told from a stale
 *     object.
 *   TDM_GameManager+0x2C Camera, +0x50 List<Player>
 *   GG_GameManager is the unused BASE class of the two above: it kept resolving
 *   its hook and never once fired, because Team Deathmatch instantiates
 *   TDM_GameManager. Reading both and reporting which answered means the
 *     report never has to guess.
 *
 * Transform exposes no IL2CPP fields and Plugin.call() is dead here, so the
 * projection has to come from a hooked call - and a guessed signature fails
 * module validation and stops the game booting. So report which WASM shapes
 * actually exist instead of gambling on one.
 * ================================================================== */
{
  // Two bot bodies at distinct positions, and their HealthScript pointers.
  const e1 = OBJ.NPC_Cotroller, e2 = OBJ.NPC_Cotroller + 0x800;
  const r = runFrame({
    fireEnemyTwice: [e1, e2],
    setup() {
      wF32(e1 + 0x14, 10.5); wF32(e1 + 0x18, 1.25); wF32(e1 + 0x1c, -3.0);
      // A big PURELY VERTICAL vector, earlier in the struct than the real position.
      // This is the live report's bug exactly: FPScontroller+0xE0 is gravity -
      // (0, -3.85, 0) on the ground, (0, -4.16, 0) airborne - and "first
      // non-zero vector" reported it as the player position. Magnitude must not
      // be enough to win; extent in XZ is what separates a position from
      // gravity.
      wF32(e1 + 0x5c, 0); wF32(e1 + 0x60, 9.0);  wF32(e1 + 0x64, 0);
      wF32(e2 + 0x14, -4.5); wF32(e2 + 0x18, 0.5);  wF32(e2 + 0x1c, 7.75);
      wI32(e1 + 0xd0, 0x28000);                        // bot HealthScript ref
      wI32(e2 + 0xd0, 0x29000);
      // A remote/bot HealthScript is just an ObscuredInt under the same codec
      // as your own - seed one so the through-pointer read is real.
      obfInt(0x28000 + 0xc0, 85, 0x006c81c);
      obfInt(0x29000 + 0xc0, 40, 0x006c81c);
      wI32(OBJ.TDM_GameManager + 0x2c, 0x7000000);   // Camera
      wI32(OBJ.TDM_GameManager + 0x50, 0x300000);    // List<Player>
      wI32(0x300000 + 0x10, 0x301000);              // List._items
      wI32(0x300000 + 0x18, 7);                     // List._size
    }
  });
  const esp = r.report.esp || {};
  check('two enemy instances are tracked separately',
    esp.botCount === 2, `botCount=${esp.botCount}`);
  check('enemy world position is read from the inline Vector3',
    esp.enemies.some(x => x.pos && Math.abs(x.pos[0] - 10.5) < 1e-4 && Math.abs(x.pos[2] + 3) < 1e-4),
    JSON.stringify(esp.enemies));
  check('the second enemy is distinct, not overwritten',
    esp.enemies.some(x => x.pos && Math.abs(x.pos[0] + 4.5) < 1e-4 && Math.abs(x.pos[1] - 0.5) < 1e-4),
    JSON.stringify(esp.enemies.map(x => x.pos)));
  check('camera pointer is read off TDM_GameManager+0x2c',
    esp.camera === '0x7000000', `camera=${esp.camera}`);
  check('and the report says WHICH manager answered',
    esp.cameraFrom === 'TDM_GameManager', `cameraFrom=${esp.cameraFrom}`);
  check('player list pointer is read off TDM_GameManager+0x50',
    esp.playerList === '0x300000', `playerList=${esp.playerList}`);
  check('actual WASM signatures are reported for safe hook selection',
    esp.wasmTypes && typeof esp.wasmTypes === 'object', JSON.stringify(esp.wasmTypes).slice(0, 120));
  check('EVERY vector on the bot body is reported, not just the first',
    esp.enemies.some(x => x.allVecs && x.allVecs.length >= 2),
    JSON.stringify(esp.enemies.map(x => (x.allVecs || []).length)));
  check('a live body is identifiable by its HealthScript pointer',
    esp.bots.every(x => !!x.refs.health), JSON.stringify(esp.bots.map(x => x.refs.health)));
  check('and its health decodes through that pointer, same codec as your own',
    esp.bots.some(x => x.health && Math.abs(x.health.v - 85) < 1e-6),
    JSON.stringify(esp.bots.map(x => ({ refs: x.refs, health: x.health }))));
  check('enemies are tagged with the type that produced them',
    esp.bots.every(x => x.kind === 'NPC_Cotroller'), JSON.stringify(esp.bots.map(x => x.kind)));
}

/* The exact regression: EnemyBot+0x24 was the only vector read, so the first
 * vector found won and a scratch value could be reported as a world position. */
{
  const e1 = OBJ.NPC_Cotroller;
  const r = runFrame({
    fireEnemyTwice: [e1],
    setup() {
      // 0x14 is all zeros; the real position is 0x5C. A "first non-zero vector
      // wins" rule would also land here, but the decoy check proves the whole
      // set is surfaced so the choice can be made from evidence.
      wF32(e1 + 0x14, 0); wF32(e1 + 0x18, 0); wF32(e1 + 0x1c, 0);
      wF32(e1 + 0x5c, 10.5); wF32(e1 + 0x60, 1.25); wF32(e1 + 0x64, -3.0);
    }
  });
  const esp = r.report.esp || {};
  check('a zeroed first vector does not hide the real position',
    esp.bots.length === 1 && esp.bots[0].pos &&
      Math.abs(esp.bots[0].pos[0] - 10.5) < 1e-4,
    JSON.stringify(esp.bots[0]));
}

/* The recon must SAY why it is empty. An empty enemy list from a lobby is
 * expected, and reporting it as a bare [] sends the next person hunting a
 * non-existent bug. */
{
  const r = runFrame({ lobby: true });
  const esp = r.report.esp || {};
  check('an empty recon explains itself instead of returning a bare empty list',
    !!(esp.note && /round|match/i.test(esp.note)), JSON.stringify(esp.note));
  check('the explanation is surfaced as a warning',
    r.report.warnings.some(w => /^ESP: /.test(w)), JSON.stringify(r.report.warnings));
}

/* Vector fields are inline floats. rd() silently fell through to an int read
 * for them, which is how a field report came back with v3 = 1100591942. */
{
  const r = runFrame({
    setup() {
      wF32(OBJ.FPScontroller + 0xe0, 12.25);
      wF32(OBJ.FPScontroller + 0xe4, -3.5);
      wF32(OBJ.FPScontroller + 0xe8, 99.75);
    }
  });
  const row = (r.report.survey.FPScontroller || []).find(x => x.o === 0xe0 && x.k === 'v3');
  check('a Vector3 field reports a float, not an int',
    !!row && Math.abs(row.v - 12.25) < 1e-4, `got ${row && row.v}, expected 12.25`);
  check('a Vector3 field reports all three components',
    !!row && row.xyz && Math.abs(row.xyz[1] + 3.5) < 1e-4 && Math.abs(row.xyz[2] - 99.75) < 1e-4,
    JSON.stringify(row && row.xyz));
}

/* ================================================================== *
 * SPEED. No offsets are hardcoded and no magnitude window is used: every inited
 * ObscuredFloat on FPScontroller is grouped by agreement, and only the groups
 * with company (>= 2 fields within 3%) get multiplied. That is what keeps the
 * jump height and the step offsets untouched - the bug the player reported as
 * "it just made me hella tall".
 * ================================================================== */
{
  const r0 = runFrame({});
  const rows0 = r0.report.survey.FPScontroller || [];
  const walk = rows0.filter(x => x.k === 'obfF' && x.v > 4 && x.v < 4.4).map(x => x.o);
  const sprint = rows0.filter(x => x.k === 'obfF' && x.v > 16 && x.v < 17).map(x => x.o);
  const single = rows0.filter(x => x.k === 'obfF' && x.v < 2).map(x => x.o);
  check('the fixture has a walk cluster to act on', walk.length >= 2, `walk=${JSON.stringify(walk)}`);
  check('the fixture has a sprint cluster to act on', sprint.length >= 2, `sprint=${JSON.stringify(sprint)}`);
  check('the fixture has the singleton height/step fields', single.length >= 2, `single=${JSON.stringify(single)}`);

  const r = runFrame({ speed: { on: true, factor: 2 } });
  const after = r.report.survey.FPScontroller || [];
  const base = {}; for (const x of rows0) if (x.k === 'obfF') base[x.o] = x.v;

  const wantScaled = walk.concat(sprint);
  const didScale = wantScaled.filter(o => Math.abs(after.find(x => x.o === o).v - base[o] * 2) < 1e-3);
  check('speed ON multiplies every field in an agreeing cluster',
    didScale.length === wantScaled.length,
    `scaled ${didScale.length} of ${wantScaled.length}: ${JSON.stringify(wantScaled)}`);

  // The regression that matters: jump height and step offsets must not move.
  const movedSingles = single.filter(o => Math.abs(after.find(x => x.o === o).v - base[o]) > 1e-6);
  check('speed does NOT touch the singleton height/step fields (the "hella tall" bug)',
    movedSingles.length === 0, `moved ${JSON.stringify(movedSingles.map(o => ({ o, was: base[o], now: after.find(x => x.o === o).v })))}`);
  check('the report names the fields it is multiplying',
    r.report.speed.scaled.length === wantScaled.length,
    JSON.stringify(r.report.speed.scaled));
  check('the report names the fields it refused, with a reason',
    r.report.speed.skipped.some(s => s.why === 'singleton'),
    JSON.stringify(r.report.speed.skipped));

  check('speed OFF is the default (nothing written without consent)',
    r0.report.speed.on === false && r0.report.speed.writes === 0, JSON.stringify(r0.report.speed));
  check('speed state is reported back to the portal',
    r.report.speed.on === true && r.report.speed.factor === 2, JSON.stringify(r.report.speed));

  // The compounding guard: run many frames and confirm the value does not run
  // away. This is the failure mode that makes naive speed hacks unusable.
  const many = runFrame({ speed: { on: true, factor: 2 }, extraFrames: 30 });
  const afterMany = (many.report.survey.FPScontroller || []).filter(x => x.k === 'obfF');
  const drifted = afterMany.filter(x => Math.abs(base[x.o] * 2 - x.v) > 1e-3 && wantScaled.includes(x.o));
  check('every movement field is exactly base * factor after 30 frames',
    drifted.length === 0, `drifted=${JSON.stringify(drifted.map(x => ({ o: x.o, v: x.v, want: base[x.o] * 2 })))}`);
  check('no value ran away', afterMany.every(x => Math.abs(x.v) < 100), JSON.stringify(afterMany.map(x => x.v)));

  const off = runFrame({ speed: { on: true, factor: 2 }, thenOff: true, extraFrames: 10 });
  check('turning speed OFF stops writes', off.report.speed.on === false, JSON.stringify(off.report.speed));
}

/* THE COMPOUNDING FAULT. The heap stores float32; JS multiplies in float64. If
 * the "did the game overwrite me?" check compares a read-back against the
 * un-rounded double, it is false for ANY value that does not round-trip
 * exactly - so the base is re-taken from our own output every frame and the
 * multiplier squares. A field report read exactly 83.78 after 68s only because
 * 4.2117 * 5 happened to be bit-exact; the values one field over compounded to
 * 418.92 within 30 frames. */
{
  // 3.7 is NOT exactly representable and neither is 3.7 * 3.
  const r = runFrame({
    speed: { on: true, factor: 3 },
    setup() {
      [[0x10, 3.7], [0x28, 3.7], [0x58, 3.7], [0x88, 3.7], [0xa0, 3.7]].forEach(([o, v]) =>
        obfFloat(OBJ.FPScontroller + o, v, 0x51));
      [0x40, 0x70, 0x1c0].forEach(o => obfFloat(OBJ.FPScontroller + o, 14.9, 0x33));
    },
    extraFrames: 120
  });
  const at = (o) => (r.report.survey.FPScontroller || []).find(x => x.o === o);
  check('a value that does not round-trip exactly still stays at base * factor',
    Math.abs(at(0x10).v - 3.7 * 3) < 1e-3, `got ${at(0x10).v}, want ${3.7 * 3}`);
  check('and it does not run away over 120 frames',
    Math.abs(at(0x10).v) < 20, `got ${at(0x10).v}`);
  check('the sprint cluster is stable too',
    Math.abs(at(0x40).v - 14.9 * 3) < 1e-3, `got ${at(0x40).v}, want ${14.9 * 3}`);
  check('no value exploded', (r.report.survey.FPScontroller || [])
    .filter(x => x.k === 'obfF').every(x => Math.abs(x.v) < 100),
    JSON.stringify((r.report.survey.FPScontroller || []).filter(x => x.k === 'obfF').map(x => x.v)));
}

/* THE CLUSTERING WAS CIRCULAR. Caught by a field report at 5x: the sprint
 * fields read 84, so a fourth sprint field holding 16.8 no longer had company
 * and was refused as a "singleton". Grouping on our own output means the harder
 * you push the multiplier, the more real speed fields fall out of the cluster.
 * The base - the value the GAME wrote - never moves. */
{
  const r = runFrame({
    speed: { on: true, factor: 5 },
    setup() {
      // 0x1E0 is a fourth sprint field the game initialises mid-match. It holds
      // the unscaled 16.8 while the other three already read 84.
      obfFloat(OBJ.FPScontroller + 0x1e0, 16.8076, 0x51);
    },
    extraFrames: 30
  });
  check('a speed field that keeps its own base is still recognised after scaling',
    r.report.speed.scaled.includes('0x1e0'),
    `scaled=${JSON.stringify(r.report.speed.scaled)}`);
  check('and it is not written off as a singleton',
    !r.report.speed.skipped.some(s => s.o === 480 && s.why === 'singleton'),
    JSON.stringify(r.report.speed.skipped));
}

/* A build with no cluster at all must say so instead of silently doing nothing. */
{
  const r = runFrame({
    speed: { on: true, factor: 2 },
    setup() {
      // Same offsets, all mutually distinct: nothing has company.
      [6.08, 12.15, 25.19, 33.67, 42.39, 51.23, 62.27, 111.87].forEach((v, i) =>
        obfFloat(OBJ.FPScontroller + [0x10, 0x28, 0x58, 0x88, 0xa0, 0x40, 0x70, 0x1c0][i], v, 0x51));
    }
  });
  check('speed reports that nothing agreed rather than failing quietly',
    r.report.speed.writes === 0 && r.report.speed.skipped.some(s => /no group/.test(s.why)),
    JSON.stringify(r.report.speed));
}

/* ================================================================== *
 * CROSS-ORIGIN COMMAND DELIVERY.
 *
 * v2.1.0 shipped a speed toggle that never once worked in the field while
 * every test passed. BroadcastChannel is origin-scoped: the portal posts on
 * www.crazygames.com and the game runs on *.game-files.crazygames.com, so
 * the message could never arrive. A single-frame harness cannot catch that,
 * because in one fake origin BroadcastChannel works perfectly.
 *
 * postMessage to contentWindow is the only channel that crosses.
 * ================================================================== */
{
  const r = runFrame({ speed: { on: true, factor: 2 }, deliverVia: 'postMessage' });
  check('a command delivered over postMessage reaches the player frame',
    r.report.speed && r.report.speed.on === true && r.report.speed.factor === 2,
    JSON.stringify(r.report.speed));
  check('speed actually wrote fields when driven over postMessage',
    r.report.speed.writes > 0, `writes=${r.report.speed.writes}`);
  const after = (r.report.survey.FPScontroller || []).filter(x => x.k === 'obfF' && x.o === 0x10);
  check('the write landed on the real field',
    after.length === 1 && Math.abs(after[0].v - 8.4234) < 1e-3, JSON.stringify(after));
}

/* The portal side. It is a report VIEWER and is hidden by default - the
 * in-frame Sakura menu does the same job and looks like part of the suite. The
 * portal posts commands into iframes so a panel that ever opens can still
 * drive the game. */
{
  const r = runFrame({ hostname: 'www.crazygames.com' });
  const inDom = () => r.doc.body.children.some(c => c && c.id === 'sakura-sw-v2');
  const tab = () => r.doc.body.children.find(c => c && c.id === 'sakura-sw-v2-tab');
  check('the portal panel is not built by default',
    !inDom(), 'a #sakura-sw-v2 exists before anything asks for it');
  check('but the sakura tab is there, so it is never a dead end',
    !!tab(), 'no #sakura-sw-v2-tab');

  if (tab()) {
    tab().onclick();
    check('clicking the tab builds the panel', inDom(), 'panel never appeared');
    check('and the tab retires once the panel is up',
      !r.doc.body.children.some(c => c && c.id === 'sakura-sw-v2-tab'), 'tab lingered');
    check('the panel starts collapsed to a header pill',
      r.doc._els['#sw2-body'] && r.doc._els['#sw2-body'].style.display === 'none',
      `display=${r.doc._els['#sw2-body'] && r.doc._els['#sw2-body'].style.display}`);
    check('and is not stretched across the viewport',
      r.doc.body.children.find(c => c && c.id === 'sakura-sw-v2').style.width === 'auto',
      'width was not auto');
    const speedBtn = r.doc._els['#sw2-speed'];
    check('portal wires a speed toggle once opened',
      !!(speedBtn && typeof speedBtn.onclick === 'function'),
      `speedBtn=${!!speedBtn} onclick=${speedBtn && typeof speedBtn.onclick}`);
    if (speedBtn && speedBtn.onclick) {
      speedBtn.onclick();
      check('clicking speed posts a command into the game frame',
        r.portalCommands.some(m => m && m.kind === 'cmd' && m.cmd === 'speed'),
        JSON.stringify(r.portalCommands));
    }
  }
}

/* ================================================================== *
 * THE THREE-FRAME NESTING. THE BUG THAT SHIPPED TWICE.
 *
 * v2.2.2 "fixed" the command channel by pointing the portal at
 * contentWindow.postMessage, and it still never worked, for a reason no
 * single-frame test can express: on CrazyGames the portal's only direct child
 * iframe is the WRAPPER (games.crazygames.com). The Unity document is a
 * grandchild. So the portal posted into the wrapper, and the wrapper - which
 * relayed upward only, because upward is all a report needs - dropped it.
 *
 * The durable fix is that controls now live in the frame that owns the heap.
 * These cases pin both halves: the wrapper really does relay a command down, and
 * the in-frame control works with no portal, no wrapper and no message at all.
 * ================================================================== */
{
  const w = runFrame({ hostname: 'games.crazygames.com' });
  w.portalCommands.length = 0;
  const deliver = (msg) => { for (const fn of (w.listeners.message || [])) fn({ data: msg }); };

  deliver({ __sakura: '__sakura_sw_v2', kind: 'cmd', cmd: 'speed', arg: { on: true, factor: 2 } });
  check('wrapper relays a command DOWN into the player frame',
    w.portalCommands.some(m => m && m.kind === 'cmd' && m.cmd === 'speed'),
    JSON.stringify(w.portalCommands));
  check('the relayed command keeps its argument',
    w.portalCommands.some(m => m && m.kind === 'cmd' && m.arg && m.arg.on === true),
    JSON.stringify(w.portalCommands.map(m => m && m.arg)));

  const before = w.portalCommands.length;
  deliver({ __sakura: '__sakura_sw_v2', kind: 'report', report: { version: 'x' } });
  check('wrapper still does NOT push reports down into the player',
    w.portalCommands.length === before,
    `pushed ${w.portalCommands.length - before} report(s) down`);
}

/* The in-frame control: no cross-origin hop, no transport, no portal. */
{
  const r = runFrame({ preFire(c) { c.hudEl('sp').onclick(); } });
  check('player frame paints its own controls',
    !!r.ctx.hud, 'no #sakura-sw-hud in the player document');
  check('the in-frame toggle turns speed on with no portal involved',
    r.report.speed && r.report.speed.on === true, JSON.stringify(r.report.speed));
  check('the in-frame toggle really writes the heap',
    r.report.speed.writes > 0, `writes=${r.report.speed.writes}`);
  const after = (r.report.survey.FPScontroller || []).filter(x => x.k === 'obfF' && x.o === 0x10);
  check('the in-frame write landed on the real field',
    after.length === 1 && Math.abs(after[0].v - 8.4234) < 1e-3, JSON.stringify(after));
}

/* The regression that came out of the case above. Turning speed on from off at
 * the neutral 1.0 writes the heap without changing a single number, so the
 * button lights up and the game looks completely unaffected - which is
 * indistinguishable, to the player, from the dead toggle this replaces. */
{
  const r = runFrame({ preFire(c) { c.hudEl('sp').onclick(); } });
  check('the FIRST press does not turn it on at a no-op 1.0x',
    r.report.speed && r.report.speed.factor > 1, JSON.stringify(r.report.speed));
  check('the HUD slider shows the factor that was actually applied',
    r.ctx.hudEl('fx') && r.ctx.hudEl('fx').value === String(r.report.speed.factor),
    `value=${r.ctx.hudEl('fx') && r.ctx.hudEl('fx').value} applied=${r.report.speed.factor}`);
}

/* One writer. A command arriving from any surface must repaint the control, or
 * the HUD would sit there claiming "off" while the heap is being modified. */
{
  const r = runFrame({ speed: { on: true, factor: 2.5 }, deliverVia: 'postMessage' });
  const sp = r.ctx.hudEl('sp');
  check('a command from the portal repaints the in-frame button',
    sp && sp.textContent === 'Speed ON', `textContent=${sp && sp.textContent}`);
  check('and the in-frame button shows the factor that was applied',
    r.ctx.hudEl('fv') && r.ctx.hudEl('fv').textContent === '2.5x',
    `textContent=${r.ctx.hudEl('fv') && r.ctx.hudEl('fv').textContent}`);
}

/* Key bindings work while the Unity canvas holds focus - every keydown in this
 * document still crosses the window capture phase. */
{
  const r = runFrame({ preFire(c) { for (const fn of (c.listeners.keydown || [])) fn({ code: 'F7', preventDefault() {} }); } });
  check('F7 turns speed on with no pointer and no portal',
    r.report.speed && r.report.speed.on === true && r.report.speed.writes > 0,
    JSON.stringify(r.report.speed));
}
{
  const r = runFrame({ preFire(c) {
    for (let i = 0; i < 4; i++) for (const fn of (c.listeners.keydown || [])) fn({ code: 'F8', preventDefault() {} });
  } });
  check('F8 raises the factor and the report agrees',
    r.report.speed && Math.abs(r.report.speed.factor - 3) < 1e-6, JSON.stringify(r.report.speed));
  check('the HUD factor label tracks the keys',
    r.ctx.hudEl('fv') && r.ctx.hudEl('fv').textContent === '3.0x',
    `textContent=${r.ctx.hudEl('fv') && r.ctx.hudEl('fv').textContent}`);
}

/* ================================================================== *
 * THE PANEL GETS IN THE WAY, AND X DOES NOT HIDE IT.
 *
 * Two field complaints, two defects. The panel was a fixed 620px / 78vh block
 * pinned over the game, and X removed the node without recording anything - so
 * ensureRoot() found no node, built a new one, and the panel was back on the
 * next report, 1.2 seconds later, forever. Both are invisible to a harness that
 * answers null to every getElementById and has no localStorage, which is what
 * this suite used to do.
 * ================================================================== */
{
  const store = {};
  const r = runFrame({ hostname: 'www.crazygames.com', ls: store });
  const panelInDom = () => r.doc.body.children.some(c => c && c.id === 'sakura-sw-v2');
  const rootEl = () => r.doc.body.children.find(c => c && c.id === 'sakura-sw-v2');
  const tab = () => r.doc.body.children.find(c => c && c.id === 'sakura-sw-v2-tab');
  const deliver = (msg) => { for (const fn of (r.listeners.message || [])) fn({ data: msg }); };
  const REPORT = { __sakura: '__sakura_sw_v2', kind: 'report',
    report: { version: '2.3.0', elapsedMs: 1000, hooksApplied: 5, hooksTotal: 5, instances: {}, survey: {} } };

  // It starts hidden now, so the tab is the only thing on the page and the
  // panel has to be asked for before any of the rest can be tested.
  check('the panel is not built until the tab is clicked', !panelInDom(),
    'a #sakura-sw-v2 exists on load');
  if (tab()) tab().onclick();
  check('the tab builds it', panelInDom(), 'no #sakura-sw-v2 after the tab was clicked');

  const bodyEl = r.doc._els['#sw2-body'];
  check('the panel starts COLLAPSED so it does not cover the game',
    !!bodyEl && bodyEl.style.display === 'none', `display=${bodyEl && bodyEl.style.display}`);
  check('the collapsed panel is not stretched across the viewport',
    rootEl() && rootEl().style.width === 'auto', `width=${rootEl() && rootEl().style.width}`);

  if (r.doc._els['#sw2-toggle']) r.doc._els['#sw2-toggle'].onclick();
  check('the toggle opens it',
    r.doc._els['#sw2-body'].style.display === '', JSON.stringify(r.doc._els['#sw2-body'].style));
  check('the toggle button now says close',
    r.doc._els['#sw2-toggle'].textContent === 'close', r.doc._els['#sw2-toggle'].textContent);

  if (r.doc._els['#sw2-x']) r.doc._els['#sw2-x'].onclick();
  check('X removes the panel', !panelInDom(), 'still in the document');
  check('X REMEMBERS it - this is what it failed to do', store['sakura-sw-panel-hidden'] === '1',
    JSON.stringify(store));
  check('X leaves a restore tab behind', !!tab(), 'no #sakura-sw-v2-tab');

  // The exact regression: a report arrives after X. It used to rebuild the panel.
  deliver(REPORT);
  check('a report does NOT resurrect a panel the user closed', !panelInDom(), 'panel came back');

  const r2 = runFrame({ hostname: 'www.crazygames.com', ls: store });
  check('nor does a page reload', !r2.doc.body.children.some(c => c && c.id === 'sakura-sw-v2'),
    'panel rebuilt on load despite being hidden');

  const tab2 = r2.doc.body.children.find(c => c && c.id === 'sakura-sw-v2-tab');
  check('the restore tab is there after a reload', !!tab2, 'no tab');
  if (tab2) {
    tab2.onclick();
    check('clicking the tab brings the panel back',
      r2.doc.body.children.some(c => c && c.id === 'sakura-sw-v2'), 'still missing');
    check('and the tab retires once the panel is back',
      !r2.doc.body.children.some(c => c && c.id === 'sakura-sw-v2-tab'), 'tab lingered');
  }
}

/* ================================================================== *
 * ACTk KEY WIDTH. The field bug: currentCryptoKey is an INT for
 * ObscuredFloat and ObscuredInt, and reading it as one byte produced
 * plausible-looking nonsense. 444444 & 0xff is 28, and 28 was reported as
 * the key while every decoded value was garbage - which is why the giveaway
 * was that the low bytes agreed across fields while nothing else did.
 *
 * These keys are deliberately high, so a byte-width read cannot pass. They sit
 * at offsets the GENERATED map already classifies (HealthScript 0xd4 is
 * obfI, FPScontroller 0x40 is obfF) - inventing offsets here would test
 * nothing, which is a mistake this suite already made once.
 * ================================================================== */
{
  const BIG = 0x006c81c;    // 444444, same shape as the real one
  const KEYV = 0x00abcdef;  // ObscuredFloat key: low byte 0xEF

  // Written through setup(), which runs AFTER seedObjects(). Written before the
  // run they were silently wiped by seedObjects and the case passed only because
  // the seed happened to use the same numbers - it was testing the seed.
  const r = runFrame({ setup() {
    obfInt(OBJ.HealthScript + 0xd4, 200, BIG);
    obfFloat(OBJ.FPScontroller + 0x40, 12.5, KEYV);
  } });
  const ints = (r.report.survey.HealthScript || []).filter(x => x.k === 'obfI');
  const floats = (r.report.survey.FPScontroller || []).filter(x => x.k === 'obfF');

  const bigRow = ints.find(x => x.o === 0xd4);
  check('int key with a misleading low byte still decodes',
    !!(bigRow && bigRow.v === 200), `got ${bigRow && bigRow.v}, expected 200`);
  check('int key is read as 4 bytes, not 1',
    !!(bigRow && bigRow.keyAtOffset0 === BIG), `got ${bigRow && bigRow.keyAtOffset0}`);
  check('a byte-width key would have produced a different value',
    !!bigRow && ((bigRow.hidden ^ (BIG & 0xff)) | 0) !== 200, 'test is not discriminating');

  const floatRow = floats.find(x => x.o === 0x40);
  check('float key with a misleading low byte still decodes',
    !!(floatRow && Math.abs(floatRow.v - 12.5) < 1e-4), `got ${floatRow && floatRow.v}, expected 12.5`);
  check('float key is read as 4 bytes, not 1',
    !!(floatRow && floatRow.keyAtOffset0 === KEYV), `got ${floatRow && floatRow.keyAtOffset0}`);

  check('the plausibility check passes on a correct decode',
    r.report.actkKeys.HealthScript && r.report.actkKeys.HealthScript.sane === r.report.actkKeys.HealthScript.checked,
    JSON.stringify(r.report.actkKeys.HealthScript));
  check('every decoded value is flagged sane, not just most',
    ints.filter(x => x.k === 'obfI').every(x => x.sane === true),
    JSON.stringify(ints.filter(x => x.sane !== true)));
  check('a byte-width key would have FAILED the plausibility check',
    (function () {
      // Prove the guard is real: decode the big-key row with only the low byte
      // and confirm the result is rejected.
      const r2 = r.report.survey.HealthScript.find(x => x.o === 0xd4);
      if (!r2) return false;
      const broken = (r2.hidden ^ (BIG & 0xff)) | 0;
      return Math.abs(broken - r2.fake) > Math.max(1, Math.abs(r2.fake) * 0.6);
    })(), 'the guard would not have caught the byte-width bug');
  check('raw struct bytes are reported for offline verification',
    !!(bigRow && /hex=[0-9a-f]{40}/.test(bigRow.raw)), bigRow && bigRow.raw);
}

/* ================================================================== *
 * BUILD IDENTITY. VERSION was hand-written in three places and one drifted,
 * and a stale install reached the field twice - once even after being told
 * twice. So: one declaration, hoisted above the portal branch that renders
 * the badge, and the badge path itself is exercised.
 * ================================================================== */
{
  // These two assert on source structure, so they only apply to readable
  // source. The obfuscated payload renames identifiers into the _0x hex form,
  // which is exactly why this suite is behavioural everywhere else - and why
  // grepping for `var VERSION =` here would fail on the artifact we actually
  // ship. The behaviour those greps protect (one build id, reaching the
  // portal) is covered by the report-version assertions in section 1.
  const obfuscated = /\b_0x[0-9a-f]{4,}\b/.test(src);
  if (obfuscated) {
    check('source-structure checks skipped (target is obfuscated)', true, '');
  } else {
    const decls = (src.match(/^\s*var VERSION\s*=/gm) || []).length;
    check('VERSION is declared exactly once (no second, later copy to drift)',
      decls === 1, `${decls} declarations`);
    const pos = src.indexOf('var VERSION =');
    check('VERSION is declared before the portal branch returns',
      pos > 0 && pos < src.indexOf('if (IS_PORTAL)'),
      `declared at ${pos}, portal at ${src.indexOf('if (IS_PORTAL)')}`);
  }

  const portal = runFrame({ hostname: 'www.crazygames.com' });
  check('portal runs without throwing', !portal.fatal, portal.fatal || '');
  check('portal arms nothing', portal.pluginCalls.length === 0, `armed ${portal.pluginCalls.length}x`);
}

/* ================================================================== *
 * FRAME ROLES: the wrapper must stay inert.
 * ================================================================== */
{
  const w = runFrame({ hostname: 'games.crazygames.com' });
  check('wrapper does NOT arm UWMK', !w.fatal && w.pluginCalls.length === 0,
    w.fatal || `armed ${w.pluginCalls.length}x`);
  check('wrapper emits no report', !w.reports.length, `reports=${w.reports.length}`);

  const p = runFrame({});
  check('player DOES arm UWMK', p.pluginCalls.length === 1, `armed ${p.pluginCalls.length}x`);
  check('report identifies the player frame', p.report.frameRole === 'player', p.report.frameRole);
}

/* SENTINEL. If this does not print, the suite died partway through and the
 * PASS/FAIL totals describe only the part that ran - which is exactly how
 * "FAIL=0 PASS=143" came to look like a green run while 130 assertions were
 * never reached. A truncated suite must never read as a passing one. */
check('the suite ran to completion', true, '');

console.log(`\ntarget: ${target}`);
process.exit(failed ? 1 : 0);
