// Move the generated SK_METHODS block ABOVE the armUwmk() IIFE.
//
// armUwmk() runs as an IIFE early in the file and calls registerViewHooks(),
// which needs SK_METHODS. `var` hoists the declaration but not the assignment,
// so a map defined textually later is undefined at arming time - the hooks
// cannot be registered, UWMK's one-shot apply pass has already run by the time
// anything retries, and every view hook is lost silently.
//
// The field map has the same shape and has never bitten, because nothing reads
// it until a report is collected. Anything read DURING arming has to live
// earlier than arming.
import { readFileSync, writeFileSync } from 'fs';

const p = process.argv[2] || 'src/skillwarz.js';
let s = readFileSync(p, 'utf8');

const block = s.match(/\s*\/\*__SKILLWARZ_METHODS_START__\*\/[\s\S]*?\/\*__SKILLWARZ_METHODS_END__\*\//);
if (!block) { console.log('markers already removed - nothing to do'); process.exit(0); }

s = s.replace(block[0], '');

const anchor = '  var HOOKS = [];       // { type, hook, keep }';
if (!s.includes(anchor)) throw new Error('anchor not found');
s = s.replace(anchor, block[0].trim() + '\n\n' + anchor);

writeFileSync(p, s, 'utf8');
const at = s.indexOf('__SKILLWARZ_METHODS_START__');
const armAt = s.indexOf('(function armUwmk()');
console.log(`moved SK_METHODS block: now at ${at}, armUwmk at ${armAt} -> ${at < armAt ? 'BEFORE (correct)' : 'STILL AFTER'}`);