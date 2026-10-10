# Sakura Client — loader + 3 site payloads

One installable userscript that detects the site, then loads the matching file from GitHub:

- **clutcher.io** → `sakura.clutcher.js` (keystrokes + ambience / world FX + Lunar menu with HUD, World and Beta tabs — zero dev features; Beta is always on, Lunar is the default look)
- **astrastrike.fun** → `sakura.astra.js` (clean mode: keyboard-only QWER/ASDFC overlay + same minimal menu, HUD tab only, game untouched)
- **kourstrike.io** → `sakura.kour.user.js` (standalone install, UWMK v1.1.0 inlined — full Combat/Movement/Visual/Misc/Safety menu over IL2CPP hooks + overlay; runs at document-start)

## Install (users)

1. Install [Tampermonkey](https://www.tampermonkey.net/) / Violentmonkey.
2. Open `dist/sakura.loader.user.js` (raw on GitHub) → Tampermonkey prompts to install.
3. The loader fetches the right payload for the site you're on. Press **Insert** or click the ❀ button for the menu.

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
  build.mjs      # loader + obfuscation build (+ kour standalone bundle)
  src/
    loader.js    # site detector — the only installed file (stays readable)
    clutcher.js  # full client source — edit here
    astra.js     # clean overlay source — edit here
    kour.js      # kourstrike menu source — edit here (needs vendor/uwmk.js)
  vendor/
    uwmk.js      # UnityWebModkit bundle (Recte UWMK experimental) — inlined into kour build
  dist/          # commit all four
    sakura.loader.user.js  # installable (plain)
    sakura.clutcher.js     # obfuscated payload
    sakura.astra.js        # obfuscated payload
    sakura.kour.user.js    # installable standalone (UWMK + kour, plain, document-start)
```

## Edit → build

```bash
npm run build   # obfuscated payloads -> dist/
npm run dev     # plain payloads -> dist/ (debugging)
```

## Notes

- Only the two payloads are obfuscated ([`javascript-obfuscator`](https://www.npmjs.com/package/javascript-obfuscator)). The loader stays readable so anyone can audit what it fetches.
- Obfuscator options keep `renameGlobals: false`, `selfDefending: false`, `debugProtection: false`, `transformObjectKeys: false` so the game page keeps working.
- Each payload no-ops on the wrong host, so even a mix-up loads nothing foreign.
- If a site's CSP blocks the injected `<script>` tag, the loader retries via eval fallback.
