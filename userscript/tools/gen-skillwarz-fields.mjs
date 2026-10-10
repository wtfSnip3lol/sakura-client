// Generate IL2CPP field maps for the Sakura SkillWarz client straight from the
// Il2CppDumper output, so nothing is hand-transcribed.
//
//   node gen-skillwarz-fields.cjs [dump.cs] [out.json] [Type,Type,...]
import { readFileSync, writeFileSync } from 'fs';

const dumpPath = process.argv[2] || 'C:/Users/wh1sp/AppData/Local/Temp/opencode/swdump/dump.cs';
const outPath = process.argv[3] || 'src/skillwarz-fields.json';
const wanted = (process.argv[4] || 'FPScontroller,HealthScript,PlayerConfig,WeaponManager,GG_GameManager').split(',');

// Read as latin1, NOT utf8. The obfuscated member names contain raw bytes that
// utf8 decoding turns into U+2028/U+2029, and JS \s matches those - which splits
// \S+ mid-name and silently drops most fields. latin1 maps byte-for-byte.
const text = readFileSync(dumpPath, 'latin1');
const lines = text.split(/\r?\n/);

// C# type -> size + how to read it through ValueWrapper.readField
// ACTk sizes verified against the build-125 dump. Each struct is read through
// raw f32/i32/u8 slices, so the offsets below must match the dump exactly:
//   ObscuredFloat  key 0x00 | hidden 0x04 | byte4 0x08 | inited 0x0C | fake 0x10 | fakeActive 0x14 -> 0x18
//   ObscuredInt    key 0x00 | hidden 0x04 | inited 0x08 | fake 0x0C | fakeActive 0x10             -> 0x14
//   ObscuredBool   key 0x00 | hidden 0x04 | inited 0x08 | fake 0x09 | fakeActive 0x0A             -> 0x0C
// Only these three exist in this build - there is no ObscuredVector3.
function typeInfo(t) {
  const s = t.trim().replace(/\s+/g, ' ');
  if (s === 'ObscuredFloat') return { kind: 'obfF', size: 0x18, rw: 'f32' };
  if (s === 'ObscuredInt') return { kind: 'obfI', size: 0x14, rw: 'i32' };
  if (s === 'ObscuredBool') return { kind: 'obfB', size: 0x0c, rw: 'u8' };
  if (s === 'float') return { kind: 'f32', size: 4, rw: 'f32' };
  if (s === 'int') return { kind: 'i32', size: 4, rw: 'i32' };
  if (s === 'uint') return { kind: 'u32', size: 4, rw: 'u32' };
  if (s === 'short') return { kind: 'i16', size: 2, rw: 'i16' };
  if (s === 'ushort') return { kind: 'u16', size: 2, rw: 'u16' };
  if (s === 'byte' || s === 'bool') return { kind: 'u8', size: 1, rw: 'u8' };
  if (s === 'char') return { kind: 'u16', size: 2, rw: 'u16' };
  if (s === 'double') return { kind: 'f64', size: 8, rw: 'f32' };
  if (s === 'long' || s === 'ulong') return { kind: 'i64', size: 8, rw: 'i32' };
  return { kind: 'ref', size: 4, rw: 'i32' };
}

const result = {};
for (const typeName of wanted) {
  // Il2CppDumper lists compiler-generated iterator state machines as
  // "FPScontroller/<mangled>" and nested types as "HealthScript.AssistDamage",
  // and it emits them BEFORE the parent class. A plain \b matches before both
  // "/" and ".", so it latches onto the nested state machine and reports its
  // compiler fields (<>1__state, <crouchDelay>5__2) as the real class. Require
  // the name to be followed by a real boundary: space, colon, or end of line.
  const re = new RegExp(
    `^(?:public|internal)\\s+(?:unsafe\\s+)?(?:sealed\\s+|abstract\\s+|static\\s+)*(?:class|struct)\\s+${typeName}(?=[ \\t:]|$)`
  );
  let start = -1;
  for (let i = 0; i < lines.length; i++) {
    if (re.test(lines[i])) { start = i; break; }
  }
  if (start === -1) { console.error(`  (skip ${typeName}: not found)`); continue; }

  const fields = [];
  // Field block sits between "// Fields" and the next "// Methods" / "}" at col 0.
  let i = start;
  while (i < lines.length && !/\/\/ Fields/.test(lines[i])) i++;
  i++;
  // Deliberately avoid \s/\S for the member name. The obfuscator emits raw bytes
  // that decode to U+00A0 / U+0085 / U+2028, all of which JS treats as
  // whitespace, so \S+ splits mid-name and silently drops fields. [^;\r\n]+ is
  // byte-honest; the name runs to the terminating semicolon.
  const fieldRe = /^\s*(?:\[[^\]]*\]\s*)*(?:public|internal|private|protected)\s+(?:static\s+)?(?:readonly\s+)?(?:volatile\s+)?([A-Za-z_][A-Za-z0-9_.]*(?:<[^>]*>)?(?:\[\])?)\s+([^;\r\n]+);\s*\/\/\s*(0x[0-9A-Fa-f]+)\s*$/;
  while (i < lines.length) {
    const ln = lines[i];
    if (/^\s*\/\/ Methods/.test(ln) || /^\s*\/\/ RVA:/.test(ln) || /^\}/.test(ln)) break;
    const m = ln.match(fieldRe);
    if (m) {
      const raw = m[1].replace(/<[^>]*>/g, '').trim();
      // Generic names like List<HealthScript.AssistDamage> keep their base type.
      const ti = typeInfo(raw);
      const name = m[2];
      // Skip compiler noise on backing fields.
      if (name === 'value__') { i++; continue; }
      fields.push({
        n: name,
        t: raw,
        o: parseInt(m[3], 16),
        k: ti.kind,
        s: ti.size,
        r: ti.rw
      });
    }
    i++;
  }
  result[typeName] = { fields };
  const obf = fields.filter(f => f.k.indexOf('obf') === 0).length;
  console.log(`  ${typeName}: ${fields.length} fields (${obf} obscured)`);
}

// Two outputs: the standalone JSON (handy for diffing / spot checks) and the
// map injected into src/skillwarz.js. The userscript is assembled by build.mjs
// as a single file, so the map has to live inline - and generating it beats
// transcribing offsets by hand, which is exactly how this started out wrong.
writeFileSync(outPath, JSON.stringify(result, null, 1));
console.log(`wrote ${outPath}`);

// Only offset + kind ship. The obfuscated names are worthless here - they
// collapse to the same mojibake ("A?A?A?A...") and the offset is the only
// stable identity, both in the report and across runs. Shipping names would
// triple the payload to say nothing.
const slim = {};
for (const [typeName, def] of Object.entries(result)) {
  slim[typeName] = def.fields
    .filter(f => f.k.indexOf('obf') === 0 || ['f32', 'i32', 'u8'].includes(f.k))
    .map(f => [f.o, f.k]);
}

const payloadPath = 'src/skillwarz.js';
const payload = readFileSync(payloadPath, 'utf8');
const START = '/*__SKILLWARZ_FIELDS_START__*/';
const END = '/*__SKILLWARZ_FIELDS_END__*/';
const a = payload.indexOf(START);
const b = payload.indexOf(END);
if (a === -1 || b === -1 || b < a) {
  console.error(`${payloadPath}: field markers not found - add ${START} / ${END}`);
  process.exit(1);
}
const block =
  `${START}\nvar SK_FIELDS = ${JSON.stringify(slim)};\n${END}`;
writeFileSync(payloadPath, payload.slice(0, a) + block + payload.slice(b + END.length));
const total = Object.values(slim).reduce((n, d) => n + d.length, 0);
console.log(`injected ${total} readable fields into ${payloadPath}`);
