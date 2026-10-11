// Inject the generated method map into src/skillwarz.js between its markers.
// Kept as a file rather than a shell one-liner because the generated map
// contains arbitrary binary identifiers; inlining them through a shell is how
// they get mangled.
import { readFileSync, writeFileSync } from 'fs';

const target = process.argv[2] || 'src/skillwarz.js';
const genFile = process.argv[3] || 'src/skillwarz-methods.gen.js';

const gen = readFileSync(genFile, 'utf8').trim();
let s = readFileSync(target, 'utf8');
const re = /(\/\*__SKILLWARZ_METHODS_START__\*\/)[\s\S]*?(\/\*__SKILLWARZ_METHODS_END__\*\/)/;
if (!re.test(s)) throw new Error('SK_METHODS markers missing from ' + target);
const before = s.length;
s = s.replace(re, (m, a, b) => a + '\n' + gen + '\n  ' + b);
writeFileSync(target, s, 'utf8');

const parsed = JSON.parse(s.match(/var SK_METHODS = (\{[\s\S]*?\});/)[1]);
console.log(`injected ${gen.length} chars into ${target} (+${s.length - before})`);
for (const k of Object.keys(parsed)) console.log(`  ${k}: ${parsed[k].length} methods`);