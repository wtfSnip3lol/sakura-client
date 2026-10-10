// Regression test for the Sakura SkillWarz auto-diagnose panel.
//
// Bug (v1.9.2 and earlier): mount() began with `if (document.body) return true;`
// and returned BEFORE creating the panel element. panel() then did
// `getElementById(...)` -> null -> `root.style.cssText` ->
// "Cannot read properties of null (reading 'style')", which killed the panel on
// every www.crazygames.com context and hid the probe result entirely.
//
// Run: node test/panel-regression.cjs            (tests the source)
//      node test/panel-regression.cjs <file.js>  (tests any build of the payload)
const fs = require('fs');
const path = require('path');

const target = process.argv[2] || path.join(__dirname, '..', 'src', 'skillwarz-diag.js');
const src = fs.readFileSync(target, 'utf8');

function makeEl(tag) {
  return {
    tagName: (tag || 'div').toUpperCase(), id: '', textContent: '', value: '',
    style: {}, dataset: {}, children: [], _html: '',
    classList: { add() {}, remove() {} },
    get innerHTML() { return this._html; },
    set innerHTML(v) { this._html = v; },
    // Deliberately hostile: the panel must survive a DOM where lookups fail.
    querySelector() { return null; },
    appendChild(c) { this.children.push(c); return c; },
    remove() {}, onclick: null,
    getAttribute() { return null; }, setAttribute() {},
    addEventListener() {}
  };
}

function makeDoc(withBody) {
  const doc = {
    readyState: withBody ? 'complete' : 'loading',
    getElementById() { return null; },
    createElement: makeEl,
    addEventListener() {}
  };
  if (withBody) doc.body = makeEl('body');
  doc.documentElement = makeEl('html');
  doc.head = makeEl('head');
  return doc;
}

function runCase(name, withBody) {
  const doc = makeDoc(withBody);
  const listeners = [];
  const console_ = { log() {}, warn() {} };
  const location_ = {
    hostname: 'www.crazygames.com',
    href: 'https://www.crazygames.com/game/skillwarz'
  };
  const win = {
    document: doc, location: location_, console: console_,
    addEventListener(t, fn) { listeners.push([t, fn]); },
    setTimeout() { return 0; },
    navigator: {}
  };
  const body = src
    .replace(/^\(function\s*\(\)\s*\{/, '(function(){')
    .replace(/\}\)\(\);\s*$/, '})();');
  const fn = new Function('window', 'document', 'location', 'console', 'navigator', 'setTimeout', body);
  try {
    fn(win, doc, location_, console_, win.navigator, win.setTimeout);
    for (const [t, cb] of listeners) if (t === 'DOMContentLoaded') cb();
  } catch (e) {
    return { name, ok: false, err: e.message };
  }
  return { name, ok: true };
}

const cases = [
  runCase('A: document.body exists at boot (the v1.9.2 bug case)', true),
  runCase('B: no body yet (deferred to DOMContentLoaded)', false)
];

let failed = 0;
for (const r of cases) {
  console.log(`${r.ok ? 'PASS' : 'FAIL'}  ${r.name}` + (r.ok ? '' : `\n        -> ${r.err}`));
  if (!r.ok) failed++;
}
console.log(`\ntarget: ${target}`);
process.exit(failed ? 1 : 0);