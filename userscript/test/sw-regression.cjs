// Regression test for the SkillWarz client (src/skillwarz.js), GAME FRAME side.
//
// These assertions are behavioural, run against a modelled fake of ACTk memory.
// Source-text greps would be worthless here: the base64 string array in the
// obfuscated build hides every literal, and the whole point of this payload is
// that it decodes values that no name in the binary can tell us.
//
// Run: node test/sw-regression.cjs [path-to-skillwarz.js]
const fs = require('fs');
const path = require('path');

const target = process.argv[2] || path.join(__dirname, '..', 'src', 'skillwarz.js');
const src = fs.readFileSync(target, 'utf8');

/* ------------------------------------------------------------------ *
 * A fake IL2CPP heap with ACTk structs laid out exactly as the build-125
 * dump describes. readField/writeField go through this, so the payload's
 * offsets are exercised for real, not asserted about.
 * ------------------------------------------------------------------ */
const HEAP = new Map();          // address -> byte
const NEXT = { addr: 0x10000 };

function put(addr, bytes) { for (let i = 0; i < bytes.length; i++) HEAP.set(addr + i, bytes[i]); }
function get(addr) { return HEAP.get(addr) || 0; }

function writeI32(addr, v) { put(addr, [v & 0xff, (v >> 8) & 0xff, (v >> 16) & 0xff, (v >>> 24) & 0xff]); }
function readI32(addr) { return (get(addr) | (get(addr + 1) << 8) | (get(addr + 2) << 16) | (get(addr + 3) << 24)) | 0; }
function writeF32(addr, v) { writeI32(addr, new Int32Array(new Float32Array([v]).buffer)[0]); }
function readF32(addr) { return new Float32Array(new Int32Array([readI32(addr)]).buffer)[0]; }

class FakeVW {
  constructor(ptr) { this._result = ptr; }
  val() { return this._result; }
  readField(offset, type) {
    const a = this._result + offset;
    switch (type) {
      case 'i8': return new FakeVW((get(a) << 24) >> 24);
      case 'u8': return new FakeVW(get(a) & 0xff);
      case 'i16': { const v = get(a) | (get(a + 1) << 8); return new FakeVW((v << 16) >> 16); }
      case 'u16': return new FakeVW((get(a) | (get(a + 1) << 8)) & 0xffff);
      case 'i32': return new FakeVW(readI32(a));
      case 'u32': return new FakeVW(readI32(a) >>> 0);
      case 'f32': return new FakeVW(readF32(a));
      default: return new FakeVW(readI32(a));
    }
  }
  writeField(offset, type, value) {
    const a = this._result + offset;
    switch (type) {
      case 'u8': put(a, [value & 0xff]); break;
      case 'i32': case 'u32': writeI32(a, value | 0); break;
      case 'f32': writeF32(a, value); break;
      default: writeI32(a, value | 0);
    }
    return this;
  }
}

/* Build an ObscuredFloat/Int/Bool the way ACTk 2.x would. */
function makeObfFloat(base, real, key) {
  writeI32(base + 0x00, key);
  writeI32(base + 0x04, new Int32Array(new Float32Array([real]).buffer)[0] ^ key); // hidden
  HEAP.set(base + 0x0c, 1);      // inited
  writeF32(base + 0x10, real * 1.5); // decoy, deliberately different
  HEAP.set(base + 0x14, 1);      // fakeValueActive
}
function makeObfInt(base, real, key) {
  writeI32(base + 0x00, key);
  writeI32(base + 0x04, (real | 0) ^ key);
  HEAP.set(base + 0x08, 1);
  writeI32(base + 0x0c, (real | 0) + 7);
  HEAP.set(base + 0x10, 1);
}

function alloc() { const a = NEXT.addr; NEXT.addr += 0x400; return a; }

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
function runFrame({ hostname, hooksApply = true, fireUpdate = true, typeCount = 950 }) {
  const posted = [];
  const pluginCalls = [];
  const hookCalls = [];
  const listeners = {};
  const pending = [];

  const players = {};
  if (fireUpdate) {
    for (const t of ['FPScontroller', 'HealthScript', 'WeaponManager', 'GG_GameManager']) {
      players[t] = alloc();
      makeObfFloat(players[t] + 0x10, 4.25, 0x51);
      makeObfFloat(players[t] + 0x28, 7.5, 0x33);
      makeObfInt(players[t] + 0x0b8 + 0x40, 12, 0x77);
    }
  }

  const Runtime = {
    plugins: [],
    startedInitializing: false,
    internalWasmTypes: [],
    il2CppContext: undefined,
    createPlugin(opts) {
      pluginCalls.push(opts);
      this.startedInitializing = true;
      this.plugins.push({
        name: opts.name,
        hooks: [],
        hookPrefix(target, cb) {
          const h = { ...target, callback: cb, applied: hooksApply, enabled: true };
          this.hooks.push(h);
          hookCalls.push(target);
          return h;
        }
      });
      this.il2CppContext = { scriptData: { FPScontroller: { Update: 1 }, HealthScript: { Update: 1 } } };
    }
  };

  const doc = {
    readyState: 'complete',
    body: makeEl(), documentElement: makeEl(), head: makeEl(),
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

  const body = src.replace(/^\(function\s*\(\)\s*\{/, '(function(){').replace(/\}\)\(\);\s*$/, '})();');
  const fn = new Function('window', 'document', 'location', 'console', 'navigator',
    'setTimeout', 'WebAssembly', 'BroadcastChannel', body);

  let fatal = null;
  try {
    fn(win, doc, win.location, win.console, win.navigator, win.setTimeout, WebAssembly, BC);
    // Let it register hooks, then simulate the game's Update() calling through.
    let guard = 0;
    while (pending.length && guard++ < 200) pending.shift()();
    const plugin = Runtime.plugins[0];
    if (plugin) {
      for (const h of plugin.hooks) {
        if (!h.applied || h.typeName === undefined) continue;
        const rec = players[h.typeName];
        if (rec !== undefined) {
          try { h.callback(new FakeVW(rec)); } catch (e) { fatal = 'hook threw: ' + e.message; }
        }
      }
    }
    guard = 0;
    while (pending.length && guard++ < 200) pending.shift()();
  } catch (e) {
    fatal = e.message;
  }

  const reports = posted.filter(m => m && m.kind === 'report').map(m => m.report);
  return { fatal, posted, pluginCalls, hookCalls, reports, report: reports[reports.length - 1], players, win, listeners };
}

let failed = 0;
function check(name, cond, detail) {
  console.log(`${cond ? 'PASS' : 'FAIL'}  ${name}` + (cond ? '' : `\n        -> ${detail}`));
  if (!cond) failed++;
}

/* ================================================================== *
 * 1. The ACTk codec — the whole payload rests on this being right.
 * ================================================================== */
{
  const r = runFrame({ hostname: 'skillwarz.game-files.crazygames.com' });
  check('player frame runs without throwing', !r.fatal, r.fatal || '');
  check('createPlugin() is called exactly once', !r.fatal && r.pluginCalls.length === 1,
    r.fatal || `calls=${r.pluginCalls.length}`);
  check('referencedAssemblies is non-empty (empty = silent no-op)',
    !!(r.pluginCalls[0] && r.pluginCalls[0].referencedAssemblies && r.pluginCalls[0].referencedAssemblies.length),
    JSON.stringify(r.pluginCalls[0] && r.pluginCalls[0].referencedAssemblies));
  check('referencedAssemblies includes Assembly-CSharp.dll',
    !!(r.pluginCalls[0] && r.pluginCalls[0].referencedAssemblies.includes('Assembly-CSharp.dll')),
    'game types live in Assembly-CSharp.dll');

  check('a report is posted to the portal', !!r.report, 'no report');
  check('Update() hooks are registered on the player types',
    r.hookCalls.length === 4, `hooks=${r.hookCalls.length}`);
  check('hooks use the IL2CPP (this, MethodInfo*) -> void signature',
    r.hookCalls.every(h => h.methodName === 'Update'
      && Array.isArray(h.params) && h.params.length === 2 && h.params[0] === 'i32'
      && h.returnType === undefined),
    JSON.stringify(r.hookCalls[0]));

  check('live FPScontroller instance is captured',
    !!(r.report && r.report.instances && r.report.instances.FPScontroller),
    JSON.stringify(r.report && r.report.instances));

  const rows = r.report && r.report.survey && r.report.survey.FPScontroller;
  check('survey produces rows for the captured object', !!(rows && rows.length),
    'survey empty');

  // The decisive assertion: a decoy of 6.375 (real 4.25 * 1.5) sits at the
  // fakeValue offset. If the payload read the decoy instead of decrypting
  // hiddenValue ^ key, it would report 6.375 here.
  const f10 = rows && rows.find(x => x.o === 0x10);
  check('ObscuredFloat is decrypted, not read as the decoy',
    !!(f10 && Math.abs(f10.v - 4.25) < 1e-4), `got ${f10 && f10.v}, expected 4.25`);
  check('the ACTk decoy is still reported separately',
    !!(f10 && Math.abs(f10.fake - 6.375) < 1e-4), `fake=${f10 && f10.fake}`);
  check('fakeValueActive is surfaced (the detector-relevant flag)',
    !!(f10 && f10.act === 1), `act=${f10 && f10.act}`);

  const f28 = rows && rows.find(x => x.o === 0x28);
  check('a second ObscuredFloat with a different key decrypts correctly',
    !!(f28 && Math.abs(f28.v - 7.5) < 1e-4), `got ${f28 && f28.v}, expected 7.5`);

  check('warnings are an array', !!(r.report && Array.isArray(r.report.warnings)),
    'warnings missing');
  check('no warning when hooks applied and objects captured',
    !(r.report && r.report.warnings.some(w => /0 of .* hooks applied/.test(w))),
    JSON.stringify(r.report && r.report.warnings));
}

/* ================================================================== *
 * 2. Diagnostics must fire when the pipeline is broken, not stay silent.
 * ================================================================== */
{
  const noHooks = runFrame({ hostname: 'skillwarz.game-files.crazygames.com', hooksApply: false });
  check('warns when no Update() hook applied',
    !!(noHooks.report && noHooks.report.warnings.some(w => /0 of .*hooks applied/.test(w))),
    JSON.stringify(noHooks.report && noHooks.report.warnings));
  check('reports hooksApplied=0 rather than claiming success',
    !!(noHooks.report && noHooks.report.hooksApplied === 0 && noHooks.report.hooksTotal === 4),
    JSON.stringify(noHooks.report && [noHooks.report.hooksApplied, noHooks.report.hooksTotal]));
}

{
  const idle = runFrame({ hostname: 'skillwarz.game-files.crazygames.com', fireUpdate: false });
  check('warns when hooks are live but nothing has fired yet',
    !!(idle.report && idle.report.warnings.some(w => /no FPScontroller/.test(w))),
    JSON.stringify(idle.report && idle.report.warnings));
  check('still heartbeats with no instances',
    !!(idle.reports && idle.reports.length > 3), `reports=${idle.reports && idle.reports.length}`);
}

/* ================================================================== *
 * 3. Frame roles. The wrapper must stay inert — arming there was the
 * original v1.9.4 bug and Unity runs one frame deeper.
 * ================================================================== */
{
  const w = runFrame({ hostname: 'games.crazygames.com' });
  check('wrapper does NOT arm UWMK', !w.fatal && w.pluginCalls.length === 0,
    w.fatal || `armed ${w.pluginCalls.length}x`);
  check('wrapper emits no report', !(w.reports && w.reports.length),
    `reports=${w.reports && w.reports.length}`);

  const p = runFrame({ hostname: 'skillwarz.game-files.crazygames.com' });
  check('player DOES arm UWMK', p.pluginCalls.length === 1, `armed ${p.pluginCalls.length}x`);
  check('report identifies the player frame',
    !!(p.report && p.report.frameRole === 'player'), JSON.stringify(p.report && p.report.frameRole));
}

console.log(`\ntarget: ${target}`);
process.exit(failed ? 1 : 0);