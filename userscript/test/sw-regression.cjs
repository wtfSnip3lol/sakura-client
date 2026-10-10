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

const OBJ = {};
let base = 0x20000;
for (const t of ['FPScontroller', 'HealthScript', 'WeaponManager', 'GG_GameManager']) {
  OBJ[t] = base;
  base += 0x1000;
}
obfFloat(OBJ.FPScontroller + 0x10, 4.25, 0x51);
obfFloat(OBJ.FPScontroller + 0x28, 7.5, 0x33);
obfBool(OBJ.FPScontroller + 0xb8, true, 0x19);
obfInt(OBJ.HealthScript + 0xc0, 100, 0x34);
obfFloat(OBJ.HealthScript + 0x130, 99.5, 0x12);

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
  return {
    tagName: 'DIV', id: '', style: {}, dataset: {}, children: [], _html: '',
    get innerHTML() { return this._html; }, set innerHTML(v) { this._html = v; },
    querySelector() { return null; }, appendChild(c) { this.children.push(c); return c; },
    remove() {}, onclick: null, addEventListener() {}
  };
}

/* ------------------------------------------------------------------ *
 * Harness
 * ------------------------------------------------------------------ */
function runFrame({ hostname, hooksApply = true, fireUpdate = true, heapVia = 'resolveGame' }) {
  const posted = [], pluginCalls = [], hookCalls = [], pending = [], listeners = {};
  const fireTypes = fireUpdate ? ['FPScontroller', 'HealthScript', 'WeaponManager', 'GG_GameManager'] : [];

  // The real game object. Only UWMK holds a reference to it - which is the
  // whole point of heapVia='resolveGame'.
  const gameObj = { Module: { HEAPU8: U8 } };

  const Runtime = {
    plugins: [], startedInitializing: false, internalWasmTypes: [], il2CppContext: undefined,
    _game: null,
    // Mirrors UWMK: memoised on first success, and only hook() populates it.
    resolveGame() { return this._game; },
    createPlugin(opts) {
      pluginCalls.push(opts);
      this.startedInitializing = true;
      this.plugins.push({
        name: opts.name, hooks: [],
        hookPrefix(target, cb) {
          const h = { ...target, callback: cb, applied: hooksApply, enabled: true };
          this.hooks.push(h);
          hookCalls.push(target);
          // A real hook cannot be applied without the game: it needs the
          // function table from game.Module.asm. Populate the RUNTIME's cache,
          // not the plugin's - `this` here is the plugin object.
          if (hooksApply && heapVia !== 'none') Runtime._game = gameObj;
          return h;
        }
      });
      this.il2CppContext = { scriptData: { FPScontroller: { Update: 1 }, HealthScript: { Update: 1 } } };
    }
  };

  const doc = {
    readyState: 'complete', body: makeEl(), documentElement: makeEl(), head: makeEl(),
    createElement: makeEl, getElementById: () => null, addEventListener() {}
  };
  class BC { constructor() {} postMessage() {} close() {} }

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

  let fatal = null;
  try {
    fn(win, doc, win.location, win.console, win.navigator, win.setTimeout, WebAssembly, BC);
    let guard = 0;
    while (pending.length && guard++ < 200) pending.shift()();
    const plugin = Runtime.plugins[0];
    if (plugin) for (const h of plugin.hooks) {
      if (!h.applied || !fireTypes.includes(h.typeName)) continue;
      try { h.callback(new FakeVW(OBJ[h.typeName])); }
      catch (e) { fatal = 'hook threw: ' + e.message; }
    }
    guard = 0;
    while (pending.length && guard++ < 200) pending.shift()();
  } catch (e) { fatal = e.message; }

  const reports = posted.filter(m => m && m.kind === 'report').map(m => m.report);
  return { fatal, posted, pluginCalls, hookCalls, reports, report: reports[reports.length - 1] };
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

  check('Update() hooks are registered on the player types', r.hookCalls.length === 4, `hooks=${r.hookCalls.length}`);
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
  check('game object found via Runtime.resolveGame() with NO window global',
    !!(r.report && r.report.globals.gameSource === 'Runtime.resolveGame()'),
    JSON.stringify(r.report && r.report.globals));
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
 * 2. THE v2.0.1 BUG. The field report showed unityInstance / unityGame /
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
 * 3. Genuinely unreachable heap must be reported, never swallowed.
 * ================================================================== */
{
  const r = runFrame({ heapVia: 'none' });
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
 * 3. Diagnostics when the pipeline is broken.
 * ================================================================== */
{
  const noHooks = runFrame({ hooksApply: false });
  check('warns when no Update() hook applied',
    noHooks.report.warnings.some(w => /0 of .*hooks applied/.test(w)),
    JSON.stringify(noHooks.report.warnings));
  check('reports hooksApplied=0 rather than claiming success',
    noHooks.report.hooksApplied === 0 && noHooks.report.hooksTotal === 4,
    JSON.stringify([noHooks.report.hooksApplied, noHooks.report.hooksTotal]));
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
 * 4. Frame roles: the wrapper must stay inert.
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