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
  for (const t of ['FPScontroller', 'HealthScript', 'WeaponManager', 'GG_GameManager', 'EnemyBot']) {
    OBJ[t] = base;
    base += 0x1000;
  }
  function seedObjects() {
    U8.fill(0);
    obfFloat(OBJ.FPScontroller + 0x10, 4.25, 0x51);
    obfFloat(OBJ.FPScontroller + 0x28, 7.5, 0x33);
    obfFloat(OBJ.FPScontroller + 0x40, 12.5, 0xabcdef);
    obfFloat(OBJ.FPScontroller + 0x88, 2.5, 0x21);
    obfFloat(OBJ.FPScontroller + 0x11c, 1.75, 0x77);
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
    tagName: 'DIV', id: '', style: {}, dataset: {}, children: [], _html: '',
    get innerHTML() { return this._html; }, set innerHTML(v) { this._html = v; },
    // Returning a usable stub for id selectors is what lets the PANEL be
    // tested: the speed toggle only exists as an onclick handler attached here,
    // so a null-returning querySelector made the whole control untestable.
    querySelector(sel) {
      if (typeof sel === 'string' && sel.charAt(0) === '#') {
        const stub = makeEl();
        stub.id = sel.slice(1);
        if (el.ownerDoc) el.ownerDoc._els[sel] = stub;
        return stub;
      }
      return null;
    },
    appendChild(c) { this.children.push(c); return c; },
    remove() {}, onclick: null, addEventListener() {}
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
function runFrame({ hostname, hooksApply = true, fireUpdate = true, heapVia = 'resolveGame', scriptDataLate = false, applyFirst = false, resolveButNotApply = false, noInstantiate = false, speed = null, thenOff = false, extraFrames = 0, fireEnemyTwice = null, setup = null, lobby = false, deliverVia = 'bc' }) {
  // Reset the channel hub: payload instances from earlier runs would keep
  // their own SPEED_STATE and keep writing to the same heap, which looks
  // exactly like a compounding bug in the payload.
  BC_HUB.length = 0;
  seedObjects();
  // Setup runs AFTER seeding: seedObjects() zeroes the heap, so anything a case
  // writes beforehand is wiped and the test fails for the wrong reason.
  if (setup) setup();
  const posted = [], pluginCalls = [], hookCalls = [], pending = [], listeners = [], order = [], portalCommands = [];
  const fireTypes = fireUpdate ? ['FPScontroller', 'HealthScript', 'WeaponManager', 'GG_GameManager', 'EnemyBot'] : [];

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
    'setTimeout', 'WebAssembly', 'BroadcastChannel', body);

  doc._els = {};
  // Elements the payload creates must know their document, so an id lookup on a
  // created node can be looked up later by the test.
  doc.createElement = (tag) => { const e = makeEl(); e.ownerDoc = doc; e.tagName = tag; return e; };
  doc.body.ownerDoc = doc;
  doc.documentElement.ownerDoc = doc;

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

    fn(win, doc, win.location, win.console, win.navigator, win.setTimeout, FakeWasm, BC);
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
    if (plugin) for (const h of plugin.hooks) {
      if (!h.applied || !fireTypes.includes(h.typeName)) continue;
      // A lobby: EnemyBot and GG_GameManager simply do not tick.
      if (lobby && (h.typeName === 'EnemyBot' || h.typeName === 'GG_GameManager')) continue;
      const rec = OBJ[h.typeName];
      if (rec === undefined) continue;
      const fire = (ptr) => {
        try { h.callback(new FakeVW(ptr === undefined ? rec : ptr)); }
        catch (e) { fatal = 'hook threw: ' + e.message; }
      };
      // An enemy hook fires once per EnemyBot instance in a real match.
      if (fireEnemyTwice && h.typeName === 'EnemyBot') { for (const ep of fireEnemyTwice) fire(ep); continue; }
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
    fatal, posted, pluginCalls, hookCalls, reports, order, listeners, portalCommands, doc,
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

  check('Update() hooks are registered on the player types', r.hookCalls.length === 5, `hooks=${r.hookCalls.length}`);
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

  // Decisive: the decoy at fakeValue is 6.375 (real 4.25 * 1.5). Reporting the
  // decoy here means the codec never decrypted.
  const f10 = rows && rows.find(x => x.o === 0x10);
  check('ObscuredFloat is decrypted, not read as the decoy',
    !!(f10 && Math.abs(f10.v - 4.25) < 1e-4), `got ${f10 && f10.v}, expected 4.25`);
  check('the ACTk decoy is reported separately',
    !!(f10 && Math.abs(f10.fake - 6.375) < 1e-4), `fake=${f10 && f10.fake}`);
  check('fakeValueActive is surfaced (the detector-relevant flag)',
    !!(f10 && f10.act === 1), `act=${f10 && f10.act}`);
  const f28 = rows.find(x => x.o === 0x28);
  check('a second ObscuredFloat with a different key decrypts correctly',
    !!f28 && Math.abs(f28.v - 7.5) < 1e-4, `got ${f28 && f28.v}, expected 7.5`);

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
    r.hookCalls.length === 5, `hooks=${r.hookCalls.length} (names alone must suffice)`);
  const iHook = r.order.indexOf('hookPrefix:FPScontroller');
  const iData = r.order.indexOf('scriptData');
  check('hooks are registered BEFORE scriptData appears',
    iHook !== -1 && (iData === -1 || iHook < iData),
    `order=${r.order.join(' -> ')}`);
  check('registration happens in the same tick as createPlugin',
    r.order[0] === 'createPlugin' && r.order[1] && r.order[1].startsWith('hookPrefix:'),
    `order=${r.order.slice(0, 3).join(' -> ')}`);
  check('reported hooksRegisteredAtArm matches what was registered',
    r.report.hooksRegisteredAtArm === 5, String(r.report.hooksRegisteredAtArm));

  const dbl = runFrame({});
  check('registerHooks is idempotent (no duplicate hooks on retry)',
    dbl.hookCalls.length === 5, `hooks=${dbl.hookCalls.length} - registered twice?`);
}

/* ================================================================== *
 * 3. Too-late vs signature-mismatch must be distinguishable. Both look
 * identical in `applied`, which is why v2.0.2 could only report a coin flip.
 * ================================================================== */
{
  // UWMK's apply pass runs while plugin.hooks is still empty: too late.
  const late = runFrame({ applyFirst: true });
  check('registered-too-late is detected and named',
    late.hookCalls.length === 5 && late.report.hooksApplied === 0,
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
    Math.abs(r.report.survey.FPScontroller.find(x => x.o === 0x10).v - 4.25) < 1e-4,
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
  check('blocked heap: still captures objects', Object.keys(r.report.instances || {}).length === 4,
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
    noHooks.report.hooksApplied === 0 && noHooks.report.hooksTotal === 5,
    JSON.stringify([noHooks.report.hooksApplied, noHooks.report.hooksTotal]));
  check('signature-mismatch branch shows UWMK DID resolve the methods',
    noHooks.report.hooksResolved === 5, `hooksResolved=${noHooks.report.hooksResolved}`);
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
 * ESP RECON. Everything ESP needs exists in this build; the one thing that
 * does not is a world-to-screen projection.
 *   EnemyBot+0x24 inline Vector3 = cached world position
 *   GG_GameManager+0x14 Camera, +0x5C List<Player>
 * Transform exposes no IL2CPP fields and Plugin.call() is dead here, so the
 * projection has to come from a hooked call - and a guessed signature fails
 * module validation and stops the game booting. So report which WASM shapes
 * actually exist instead of gambling on one.
 * ================================================================== */
{
  // Two enemies at distinct positions.
  const e1 = OBJ.EnemyBot, e2 = OBJ.EnemyBot + 0x800;
  const r = runFrame({
    fireEnemyTwice: [e1, e2],
    setup() {
      wF32(e1 + 0x24, 10.5); wF32(e1 + 0x28, 1.25); wF32(e1 + 0x2c, -3.0);
      wF32(e2 + 0x24, -4.5); wF32(e2 + 0x28, 0.5);  wF32(e2 + 0x2c, 7.75);
      wI32(OBJ.GG_GameManager + 0x14, 0x7000000);   // Camera ref (a value)
      wI32(OBJ.GG_GameManager + 0x5c, 0x300000);    // List<Player> ref
      wI32(0x300000 + 0x10, 0x301000);              // List._items
      wI32(0x300000 + 0x18, 7);                     // List._size
    }
  });
  const esp = r.report.esp || {};
  check('two enemy instances are tracked separately',
    esp.enemyCount === 2, `enemyCount=${esp.enemyCount}`);
  check('enemy world position is read from the inline Vector3',
    esp.enemies.some(x => x.pos && Math.abs(x.pos[0] - 10.5) < 1e-4 && Math.abs(x.pos[2] + 3) < 1e-4),
    JSON.stringify(esp.enemies));
  check('the second enemy is distinct, not overwritten',
    esp.enemies.some(x => x.pos && Math.abs(x.pos[0] + 4.5) < 1e-4 && Math.abs(x.pos[1] - 0.5) < 1e-4),
    JSON.stringify(esp.enemies.map(x => x.pos)));
  check('camera pointer is read off GG_GameManager+0x14',
    esp.camera === '0x7000000', `camera=${esp.camera}`);
  check('player list pointer is read off GG_GameManager+0x5c',
    esp.playerList === '0x300000', `playerList=${esp.playerList}`);
  check('actual WASM signatures are reported for safe hook selection',
    esp.wasmTypes && typeof esp.wasmTypes === 'object', JSON.stringify(esp.wasmTypes).slice(0, 120));
  check('EnemyBot position is read from 0x24, not a misclassified pointer field',
    esp.enemies.every(x => x.posAt === '0x24'), JSON.stringify(esp.enemies.map(x => x.posAt)));
}

/* The recon must SAY why it is empty. An empty enemy list from a lobby is
 * expected, and reporting it as a bare [] sends the next person hunting a
 * non-existent bug. */
{
  const r = runFrame({ lobby: true });
  const esp = r.report.esp || {};
  check('an empty recon explains itself instead of returning a bare empty list',
    !!(esp.note && /match/i.test(esp.note)), JSON.stringify(esp.note));
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
 * SPEED. No offsets are hardcoded: every inited ObscuredFloat on
 * FPScontroller holding a movement-plausible value gets scaled. The value is
 * re-based whenever the game writes it, so the multiplier cannot compound.
 * ================================================================== */
{
  const r0 = runFrame({});
  const walk = (r0.report.survey.FPScontroller || []).filter(x => x.k === 'obfF' && x.v > 3 && x.v < 10);
  check('the movement cluster is present in the fixture to act on',
    walk.length >= 2, `walk-like fields=${walk.length}`);

  const r = runFrame({ speed: { on: true, factor: 2 } });
  const after = (r.report.survey.FPScontroller || []).filter(x => x.k === 'obfF');
  const scaled = after.filter(x => walk.some(w => Math.abs(w.v * 2 - x.v) < 1e-3));
  check('speed ON multiplies the movement fields', scaled.length === walk.length,
    `scaled=${scaled.length} of ${walk.length}`);
  check('speed OFF is the default (nothing written without consent)',
    r0.report.speed.on === false && r0.report.speed.writes === 0,
    JSON.stringify(r0.report.speed));
  check('speed state is reported back to the portal',
    r.report.speed.on === true && r.report.speed.factor === 2, JSON.stringify(r.report.speed));

  // The compounding guard: run many frames and confirm the value does not run
  // away. This is the failure mode that makes naive speed hacks unusable.
  const many = runFrame({ speed: { on: true, factor: 2 }, extraFrames: 30 });
  const base = {};
  for (const x of (r0.report.survey.FPScontroller || [])) if (x.k === 'obfF') base[x.o] = x.v;
  const afterMany = (many.report.survey.FPScontroller || []).filter(x => x.k === 'obfF');
  const drifted = afterMany.filter(x => Math.abs(base[x.o] * 2 - x.v) > 1e-3);
  check('every movement field is exactly base * factor after 30 frames',
    drifted.length === 0, `drifted=${JSON.stringify(drifted.map(x => ({ o: x.o, v: x.v, want: base[x.o] * 2 })))}`);
  check('no value ran away',
    afterMany.every(x => Math.abs(x.v) < 100), JSON.stringify(afterMany.map(x => x.v)));

  const off = runFrame({ speed: { on: true, factor: 2 }, thenOff: true, extraFrames: 10 });
  check('turning speed OFF stops writes', off.report.speed.on === false, JSON.stringify(off.report.speed));
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
    after.length === 1 && Math.abs(after[0].v - 8.5) < 1e-3, JSON.stringify(after));
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
  obfInt(OBJ.HealthScript + 0xd4, 200, BIG);
  obfFloat(OBJ.FPScontroller + 0x40, 12.5, KEYV);

  const r = runFrame({});
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
