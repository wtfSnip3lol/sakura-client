// Generate the SkillWarz METHOD map from dump.cs.
//
// src/skillwarz.js reads MouseLook's angles off struct fields and has been
// guessing: +0x18 turned out to be a yaw clamp and +0x28 a heading, while pitch
// is not in the struct at all. The dump says so outright - MouseLook exposes
//
//   public float <obf>()       x2      <- the real pitch and yaw
//   public void <obf>(float)   x3      <- and the setters, to write them
//
// UWMK's hookPostfix hands the return value to the callback and hookPrefix
// hands the float argument, so the angles do not have to be inferred at all -
// they can be read directly, and written.
//
// These identifiers are obfuscated binary names. They are EXTRACTED here rather
// than transcribed, for the same reason the field map is generated: a
// transcription of a mojibake'd identifier is a guess with extra steps, and
// this file's whole failure pattern is a plausible-looking wrong constant.
import { readFileSync, writeFileSync } from 'fs';

const dump = readFileSync(process.argv[2], 'utf8');
const WANT = (process.argv[3] || 'MouseLook').split(',');
const target = process.argv[4];

function classBody(name) {
  const re = new RegExp(`^public (?:abstract |sealed )?(?:class|struct) ${name}\\b[\\s\\S]*?^\\}`, 'm');
  const m = dump.match(re);
  if (!m) throw new Error(`class ${name} not found in dump`);
  return m[0];
}

// "\tpublic float <name>(float <p>) { }" - access, return type and name are all
// single tokens, the name being arbitrary binary text.
const METHOD = /^\t(public|private|protected|internal)(?:\s+static)?\s+(\S+)\s+([^\s(]+)\(([^)]*)\)\s*\{\s*\}/gm;

function shortType(t) { return t.split(/[.`]/).pop(); }

const map = {};
for (const cls of WANT) {
  const body = classBody(cls);
  const all = [];
  let m;
  METHOD.lastIndex = 0;
  while ((m = METHOD.exec(body))) {
    const params = m[4].trim();
    const ptypes = params ? params.split(',').map((p) => shortType(p.trim().split(/\s+/)[0])) : [];
    all.push({ name: m[3], ret: shortType(m[2]), params: ptypes });
  }
  // Keep only what the WASM table can address: a scalar return and scalar
  // params. Anything else is noise for this purpose.
  map[cls] = all
    .filter((x) => ['void', 'float', 'int', 'bool'].includes(x.ret))
    .filter((x) => x.params.every((p) => ['int', 'float', 'bool'].includes(p)))
    .map((x) => ({
      name: x.name,
      ret: x.ret,
      params: x.params,
      // The exact strings hookPrefix/hookPostfix need, derived rather than
      // guessed: an instance method carries an implicit i32 `this` first.
      wasmParams: ['i32'].concat(x.params.map((p) => (p === 'float' ? 'f32' : 'i32'))),
      wasmRet: x.ret === 'void' ? undefined : x.ret === 'float' ? 'f32' : 'i32',
    }));
}

if (target) {
  // Emitted as a JS assignment so it can live between the SK_METHODS markers
  // in src/skillwarz.js beside the generated field map, and so the build can
  // prove it was regenerated rather than silently carrying a stale copy.
  const js = '  var SK_METHODS = ' + JSON.stringify(map) + ';';
  writeFileSync(target, js, 'utf8');
  console.log(`wrote ${target}`);
}
for (const cls of Object.keys(map)) {
  console.log(`\n${cls}: ${map[cls].length} callable methods`);
  for (const x of map[cls]) {
    console.log(`  ${x.ret.padEnd(5)} len=${String(x.name.length).padEnd(3)} (${x.params.join(',') || '-'}) wasm: (${x.wasmParams.join(',')})${x.wasmRet ? ' -> ' + x.wasmRet : ''}`);
  }
}