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
function runFrame({ hostname, hooksApply = true, fireUpdate = true, heapVia = 'resolveGame', scriptDataLate = false, applyFirst = false, resolveButNotApply = false, noInstantiate = false, speed = null, thenOff = false, extraFrames = 0, fireEnemyTwice = null, setup = null, lobby = false, deliverVia = 'bc', preFire = null, ls = {}, fireMany = null }) {
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
          const h = { ...target, callback: cb, applied: false, enabled: true };
          this.hooks.push(h);
          hookCalls.push(target);
          order.push('hookPrefix:' + target.typeName);
          // A real hook cannot be applied without the game: it needs the
          // function table from game.Module.asm. Populate the RUNTIME's cache,
          // not the plugin's - `this` here is the plugin object.
          if (hooksApply && heapVia !== 'none') {
            // 'pluginRuntime' models the field report: the EXPORTED Runtime's
            // resolveGame() returns null while the plugin's own _runtime - a
            // different object that still holds the game - can resolve it.
            if (heapVia === 'pluginRuntime') pluginRuntime._game = gameObj;
            else Runtime._game = gameObj;
          }
          if (heapVia === 'takeover') {
            // A second UWMK copy loaded and overwrote the global. Our tag is
            // gone; the orphaned Runtime still holds the game.
            orphanRuntime._game = gameObj;
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

  const win = {
    document: doc,
    location: { hostname: hostname || 'skillwarz.game-files.crazygames.com', href: 'https://x/' },
    console: { log() {}, warn() {}, error() {}, info() {}, debug() {} },
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
  doc.createElement = (tag) => { const e = makeEl(); e.ownerDoc = doc; e.tagName = tag; return e; };
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
    ctx.hudEl = (name) => (ctx.hud && ctx.hud._els ? ctx.hud._els['[data-a="' + name + '"]'] : null);
    if (preFire) { try { preFire(ctx); } catch (e) { fatal = 'preFire threw: ' + e.message; } }

    if (plugin) for (const h of plugin.hooks) {
      if (!h.applied || !fireTypes.includes(h.typeName)) continue;
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
      for (let n = 0; n < extraFrames; n++) fire();
      if (thenOff && h.typeName === 'FPScontroller') {
        sendToPlayer({ __sakura: '__sakura_sw_v2', kind: 'cmd', cmd: 'speed', arg: { on: false } });
      }
    }
    guard = 0;
    while (pending.length && guard++ < 200) pending.shift()();
  } catch (e) { fatal = e.message; }

  const reports = posted.filter(m => m && m.kind === 'report').map(m => m.report);
  return {
    fatal, posted, pluginCalls, hookCalls, reports, order, listeners, portalCommands, doc, ctx,
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

  check('Update() hooks are registered on the player types', r.hookCalls.length === 9, `hooks=${r.hookCalls.length}`);
  check('hooks use the IL2CPP (this, MethodInfo*) -> void signature',
    r.hookCalls.every(h => h.methodName === 'Update' && Array.isArray(h.params)
      && h.params.length === 2 && h.params[0] === 'i32' && h.returnType === undefined),
    JSON.stringify(r.hookCalls[0]));

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
    r.hookCalls.length === 9, `hooks=${r.hookCalls.length} (names alone must suffice)`);
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
    dbl.hookCalls.length === 9, `hooks=${dbl.hookCalls.length} - registered twice?`);
}

/* ================================================================== *
 * 3. Too-late vs signature-mismatch must be distinguishable. Both look
 * identical in `applied`, which is why v2.0.2 could only report a coin flip.
 * ================================================================== */
{
  // UWMK's apply pass runs while plugin.hooks is still empty: too late.
  const late = runFrame({ applyFirst: true });
  check('registered-too-late is detected and named',
    late.hookCalls.length === 9 && late.report.hooksApplied === 0,
    `hooks=${late.hookCalls.length} applied=${late.report.hooksApplied}`);
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
  check('the local player is reported so the projection has an origin',
    r.report.local && r.report.local.eye &&
      Math.abs(r.report.local.eye[1] - 1.7) < 1e-4,
    JSON.stringify(r.report.local));
  // Drive the toggle exactly the way the user does: click 1 = radar+boxes,
  // click 2 = off. Each step must be observable from the report.
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
      preFire(c) { for (let i = 0; i < clicks; i++) c.hudEl('esp').onclick(); }
    });
    return r2.report.espView;
  };
  check('ESP starts on, radar only', step(0) && step(0).on === true && step(0).boxes === false,
    JSON.stringify(step(0)));
  check('one click turns the box layer on', step(1) && step(1).boxes === true, JSON.stringify(step(1)));
  check('a second click turns it off entirely', step(2) && step(2).on === false, JSON.stringify(step(2)));
}

/* NOTHING MAY BE DRAWN OVER THE GAME UNTIL THERE IS A ROUND.
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
  // 0x2E4 and 0x298 are the same XZ, so which one "wins" is arbitrary and
  // irrelevant - feet or eye, the map is identical. What matters is that it is
  // one of the real positions and not the gravity vector.
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
      Math.abs(r.report.local.eye[1] - 6.896) < 1e-3,
    JSON.stringify(r.report.local));
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

/* The portal side: it must post INTO the iframes, not only broadcast. */
{
  const r = runFrame({ hostname: 'www.crazygames.com' });
  const speedBtn = r.doc._els['#sw2-speed'];
  check('portal wires a speed toggle', !!(speedBtn && typeof speedBtn.onclick === 'function'),
    `speedBtn=${!!speedBtn} onclick=${speedBtn && typeof speedBtn.onclick}`);
  if (speedBtn && speedBtn.onclick) {
    speedBtn.onclick();
    check('clicking speed posts a command into the game frame',
      r.portalCommands.some(m => m && m.kind === 'cmd' && m.cmd === 'speed'),
      JSON.stringify(r.portalCommands));
    check('the command targets the game frame, not just a broadcast',
      r.portalCommands.some(m => m && m.kind === 'cmd' && m.arg && typeof m.arg.on === 'boolean'),
      JSON.stringify(r.portalCommands.map(m => m && m.arg)));
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

  check('the panel is built', panelInDom(), 'no #sakura-sw-v2 in the document');

  const bodyEl = r.doc._els['#sw2-body'];
  check('the panel starts COLLAPSED so it does not cover the game',
    !!bodyEl && bodyEl.style.display === 'none', `display=${bodyEl && bodyEl.style.display}`);
  check('the collapsed panel is not stretched across the viewport',
    rootEl() && rootEl().style.width === 'auto', `width=${rootEl() && rootEl().style.width}`);

  r.doc._els['#sw2-toggle'].onclick();
  check('the toggle opens it',
    r.doc._els['#sw2-body'].style.display === '', JSON.stringify(r.doc._els['#sw2-body'].style));
  check('the toggle button now says close',
    r.doc._els['#sw2-toggle'].textContent === 'close', r.doc._els['#sw2-toggle'].textContent);

  r.doc._els['#sw2-x'].onclick();
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

console.log(`\ntarget: ${target}`);
process.exit(failed ? 1 : 0);
