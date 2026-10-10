# Sakura Client — universal loader + 3 site payloads

One installable userscript that detects the site and runs the matching payload:

- **clutcher.io** → `sakura.clutcher.js` (keystrokes + ambience / world FX + Lunar menu with HUD, World and Beta tabs — zero dev features; Beta is always on, Lunar is the default look)
- **astrastrike.fun** → `sakura.astra.js` (clean mode: keyboard-only QWER/ASDFC overlay + same minimal menu, HUD tab only, game untouched)
- **overtide.io** / **kourstrike.io** → inlined into the loader (UWMK v1.1.0 + obfuscated payload — full Combat/Movement/Visual/Misc/Safety menu over IL2CPP hooks + overlay). These two domains ship the **identical** `Assembly-CSharp` build (verified: `global-metadata.dat` differs only in branding strings, and both produce a byte-identical `dump.cs`), so one payload covers both.

The first two are fetched from GitHub at DOM-ready. Overtide/KourStrike is **inlined**, because UWMK has to
patch `fetch` / `WebAssembly.instantiate` before Unity's boot scripts compile the WASM — a network
fetch at document-start always loses that race.

## Install (users)

1. Install [Tampermonkey](https://www.tampermonkey.net/) / Violentmonkey.
2. Open `dist/sakura.loader.user.js` (raw on GitHub) → Tampermonkey prompts to install.
3. Press **Insert** or click the ❀ button for the menu.

KourStrike/overtide-only players can install `dist/sakura.kour.user.js` instead — same payload, without the
other two sites. Installing both is safe; the payload self-guards against running twice.

## Setup (you — one time)

1. Push this `userscript/` folder to GitHub.
2. Edit `package.json` → `sakura.rawBase` with your repo path:
   `https://raw.githubusercontent.com/<YOU>/<REPO>/main/userscript/dist/`
   (or pass `SAKURA_RAW_BASE=... npm run build` instead).
3. Rebuild + commit `dist/`:
   ```bash
   cd userscript
   npm install
   npm run build
   ```

## Repo layout

```text
userscript/
  package.json   # only dep: javascript-obfuscator (+ sakura.rawBase URL)
  build.mjs      # loader + obfuscation build (inlines kour, + standalone kour bundle)
  src/
    loader.js    # clutcher/astra site detector — the only installed file (stays readable)
    clutcher.js  # full client source — edit here
    astra.js     # clean overlay source — edit here
    kour.js      # kourstrike menu source — edit here (needs vendor/uwmk.js)
  vendor/
    uwmk.js      # UnityWebModkit bundle (Recte UWMK experimental) — inlined, never obfuscated
  dist/          # commit all four
    sakura.loader.user.js  # THE installable script (kour inlined, document-start)
    sakura.clutcher.js     # obfuscated payload (fetched at DOM-ready)
    sakura.astra.js        # obfuscated payload (fetched at DOM-ready)
    sakura.kour.user.js    # standalone kour-only install (UWMK + obfuscated kour)
```

## Edit → build

```bash
npm run build   # obfuscated payloads -> dist/
npm run dev     # plain payloads -> dist/ (debugging)
```

## KourStrike internals

Class names and field offsets come from an `Il2CppDumper` dump of the
current build (pulled straight from the live `global-metadata.dat` inside the
game's `.data` archive, 2026-10-10). The game `O`-prefixes its components
and keeps the character/weapon layer in `LegionPlatforms.Overtide` — so there is
no `PlayerController`, `Shooter`, `Health`, `Weapon` or `Recoil` class, and any
hook written against those names is silently skipped by UWMK with
`Hook '…' skipped - method not found in scriptData`.

Only five hooks are registered:

| Hook | Type | Method | Why |
| --- | --- | --- | --- |
| `god` | prefix (block) | `OHealth.InitiateTakeHealth(int)` | the funnel all incoming damage passes through |
| `godDie` | prefix (block) | `OHealth.LocalDie(Player,OShooter,string,bool)` | backstop — blocks the actual death call |
| `noRecoil` | prefix (block) | `…Overtide.RecoilMotion.Tick()` | stops the recoil springs advancing |
| `capShooter` | postfix | `OShooter.SetGameRunning(bool)` | captures the local `OShooter` once a match starts |
| `capMove` | postfix | `…Overtide.Movement.IsGrounded()` | captures the local `Movement`, then disables itself |

Everything else (spread, damage, ammo, fire rate, speed, jump, gravity, bhop) is
a plain field write on a 200 ms tick, so there is no trampoline and no per-frame
JS callback. Scaled fields are written as `base x multiplier`, where `base` is
the value captured the first time that pointer+offset is seen — nothing is
written at all while a slider sits at its default.

Verified offsets:

```text
OHealth   maxHealth 0x4C(i32)   currentHealth 0x50(i32)
OShooter  currentLocalWeapon 0x38 (-> OvertideWeapon)   health 0x58
Movement  acceleration 0x1C  accelerationInAir 0x20  speedWalking 0x28
          speedAiming 0x2C    speedCrouching 0x30   speedRunning 0x34
          gravity 0x48        jumpGravity 0x4C       jumpForce 0x50
          lastJumpTime 0x9C
OvertideWeapon  defaultDamage 0x4C(i32)  cachedDamage 0x54(i32)
                cachedAmmo 0x5C(i32)     cachedFireRate 0x60(f32)
                cachedAccuracy 0x68(f32) spread 0x88(f32)  fireRate 0x8C(f32)
```

**Safe Mode** (Safety tab) skips UWMK entirely and runs the overlay only — use
it if a build change ever stops the hooks from resolving.

## Notes

- All three payloads are obfuscated ([`javascript-obfuscator`](https://www.npmjs.com/package/javascript-obfuscator)). The loader and the vendored UWMK bundle stay readable — UWMK is third-party webpack output, and obfuscating it is slow and risks breaking it.
- The loader itself is plain so anyone can audit what it fetches.
- Obfuscator options keep `renameGlobals: false`, `selfDefending: false`, `debugProtection: false`, `transformObjectKeys: false` so the game page keeps working.
- Each payload no-ops on the wrong host, so even a mix-up loads nothing foreign. The inlined kour block is wrapped in its own hostname check, so UWMK's fetch/WASM patches never install on clutcher.io or astrastrike.fun.
- The loader runs at `document-start` for kour's sake; clutcher/astra payloads are held back until `DOMContentLoaded` since they append to `document.body` at top level.
- If a site's CSP blocks the injected `<script>` tag, the loader retries via eval fallback.
