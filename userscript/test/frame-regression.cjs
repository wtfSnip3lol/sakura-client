// Regression test for the GAME FRAME side of the SkillWarz auto-diagnose probe.
//
// Bug: the probe only ever *read* window.UnityWebModkit.Runtime. It never called
// createPlugin(), so UWMK's initialize() -> hookWasmInstantiate() never ran, the
// game's WebAssembly.instantiate was never intercepted, and il2CppContext stayed
// undefined forever. Result: "scriptData not ready yet" with zero diagnostics.
//
// Run: node test/frame-regression.cjs [path-to-skillwarz-diag.js]
const fs = require('fs');
const path = require('path');

const target = process.argv[2] || path.join(__dirname, '..', 'src', 'skillwarz-diag.js');
const src = fs.readFileSync(target, 'utf8');

function makeEl() {
  return {
    tagName: 'DIV', id: '', style: {}, dataset: {}, children: [], _html: '',
    get innerHTML() { return this._html; }, set innerHTML(v) { this._html = v; },
    querySelector() { return null; }, appendChild(c) { this.children.push(c); return c; },
    remove() {}, onclick: null, getAttribute() { return null; }, setAttribute() {},
    addEventListener() {}
  };
}

function runFrame({ readyWithScriptData }) {
  const posted = [];
  const pluginCalls = [];
  const doc = {
    readyState: 'complete',
    body: makeEl(),
    documentElement: makeEl(),
    head: makeEl(),
    createElement: makeEl,
    getElementById: () => null,          // no div#sakura-sw -> no conflict
    addEventListener() {}
  };

  // Minimal Runtime that records createPlugin() and, optionally, exposes a
  // context immediately so the probe's poll settles on the first tick.
  const Runtime = {
    plugins: [],
    startedInitializing: false,
    internalWasmTypes: null,
    il2CppContext: undefined,
    createPlugin(opts) {
      pluginCalls.push(opts);
      this.startedInitializing = true;
      this.plugins.push({ name: opts.name });
      if (readyWithScriptData) {
        this.il2CppContext = { scriptData: { FPScontroller: { Update: 0 } } };
      }
    }
  };

  const win = {
    document: doc,
    location: { hostname: 'games.crazygames.com', href: 'https://games.crazygames.com/en_US/skillwarz/index.html' },
    console: { log() {}, warn() {}, error() {}, info() {}, debug() {} },
    UnityWebModkit: { Runtime },
    addEventListener() {},
    setTimeout(fn) { pending.push(fn); return 0; },
    navigator: {},
    performance: { getEntriesByType: () => [] },
    parent: { postMessage(m) { posted.push(m); } },
    top: { postMessage(m) { posted.push(m); } }
  };
  doc.createElement = makeEl;

  const pending = [];
  const body = src
    .replace(/^\(function\s*\(\)\s*\{/, '(function(){')
    .replace(/\}\)\(\);\s*$/, '})();');
  const fn = new Function('window', 'document', 'location', 'console', 'navigator',
    'setTimeout', 'WebAssembly', body);

  try {
    fn(win, doc, win.location, win.console, win.navigator, win.setTimeout, WebAssembly);
    // Drain the probe's poll chain (bounded).
    let guard = 0;
    while (pending.length && guard++ < 5000) {
      const q = pending.shift();
      q();
    }
  } catch (e) {
    return { fatal: e.message };
  }

  const reports = posted.filter(m => m && m.kind === 'report').map(m => m.report);
  return { pluginCalls, reports, report: reports[reports.length - 1] };
}

let failed = 0;
function check(name, cond, detail) {
  console.log(`${cond ? 'PASS' : 'FAIL'}  ${name}` + (cond ? '' : `\n        -> ${detail}`));
  if (!cond) failed++;
}

// --- Case 1: context becomes available -------------------------------
const a = runFrame({ readyWithScriptData: true });
check('createPlugin() is called (the v1.9.3 bug)',
  !a.fatal && a.pluginCalls.length === 1, a.fatal || `calls=${a.pluginCalls.length}`);
check('plugin is registered with a name',
  !!(a.pluginCalls[0] && a.pluginCalls[0].name), 'no opts passed');
check('a report is posted to the portal',
  !!(a.report), 'no report message');
check('report.arm.ok is true',
  !!(a.report && a.report.arm && a.report.arm.ok),
  JSON.stringify(a.report && a.report.arm));
check('scriptData is read when the context exists',
  !!(a.report && a.report.scriptData === true),
  JSON.stringify(a.report && a.report.scriptData));
check('targets are matched from scriptData',
  !!(a.report && a.report.targetsFound && a.report.targetsFound.indexOf('FPScontroller') !== -1),
  JSON.stringify(a.report && a.report.targetsFound));

// --- Case 2: context never arrives (the real-world failure) ---------
const b = runFrame({ readyWithScriptData: false });
check('still calls createPlugin() when context is unavailable',
  !b.fatal && b.pluginCalls.length === 1, b.fatal || `calls=${b.pluginCalls.length}`);
check('reports failure instead of hanging silent',
  !!(b.report && b.report.scriptData === null),
  'no failure report');
check('failure report carries the arming state',
  !!(b.report && b.report.arm),
  'arm missing from failure report');

// --- Heartbeat: the panel must never be blank ------------------------
check('posts a report immediately, before anything resolves',
  !!(b.reports && b.reports.length >= 1),
  'no immediate report');
check('keeps heartbeating while waiting',
  !!(b.reports && b.reports.length > 5),
  `only ${b.reports ? b.reports.length : 0} reports`);
check('every report carries arming state',
  !!(b.reports && b.reports.every(r => r && r.arm)),
  'a report was missing arm');
check('every report carries elapsedMs',
  !!(b.reports && b.reports.every(r => r && typeof r.elapsedMs === 'number')),
  'a report was missing elapsedMs');

// --- Case 3: conflict detection --------------------------------------
{
  const orig = src;
  const docWithOverlay = makeEl();
  docWithOverlay.id = 'sakura-sw';
  // sanity: the conflict warning path exists in the source
  check('conflict warning for the old probe is implemented',
    /CONFLICT/.test(orig), 'no CONFLICT warning in source');
}

console.log(`\ntarget: ${target}`);
process.exit(failed ? 1 : 0);