# Sakura client — rewrite (same UI, new engine)

Goal: the same panel, the same features, a loop that stops burning frames when
there is nothing to do. Performance order: **in-match frame time → menu/panel →
launcher**.

## Ground rules

1. **The current client keeps working.** The rewrite ships as a separate payload
   (`dist/sakura.clutch.next.js`) until it reaches parity, so there is always a
   fallback and the two can be A/B'd.
2. **The UI is data, not code.** `userscript/src/next/panel.gen.js` is generated
   from the current client by `tools/extract-next-ui.mjs`: the stylesheet, the
   nav tree, the 36 MODS tiles, the 35 settings cards and all 356 settings keys
   are lifted verbatim. "Same UI" is therefore mechanical, not a promise.
   Regenerate with `node tools/extract-next-ui.mjs` after any UI change.
3. **Features are ported, never re-derived from scratch.** Every game hook,
   constant and DOM id below is already proven; the port copies the *knowledge*
   and rewrites how and when it runs.
4. Every ported group lands with: `node --check`, a stub test, a parity check of
   the panel source, a build, and a commit.

## Game contract (the reverse-engineered surface, one place only)

| fact | value |
| --- | --- |
| game object | `window.game` (class instance), `state` = `"menu"`/playing |
| player | `game.player`: `x,y,z,vx,vy,vz,yaw,pitch,eyeH(1.6256),height(1.8288),radius(.4064),health,armor,alive,team,name,money` |
| eye | `player.x, player.y + player.eyeH, player.z` (`player.eyePos(v)`) |
| camera | `game.camera` (`matrixWorld.elements`, column-major) |
| scene | `game.scene`, level mesh from `game.map.buildMesh()` (merged) |
| collision | `game.physics`: `raycast(ox,oy,oz,dx,dy,dz,maxT,mask)`, `groundHeight(x,y,z)`, `solidAt`, `boxes[]`, `tris[]` (each `{mask,minX..maxZ}`), brushes default `mask 7`, rays default `mask 1`, `canStand` uses mask 1 |
| map | `game.map`: `min[],max[],voidY,ceilY,ambient,skyLight,vis` |
| hud | `game.hud.xh` (crosshair), DOM `#killcard` (`.kc-name`, class `show`), `#hitmark` (`pop`/`hs`), `#deathov`, `#money`, `#radar`, `.dmgarc` |
| viewmodel | `game.viewmodel` (`current`, `root`, `_lhand`, `_offhand`), `game.cs2.rig.arms`, mesh names `lhand`,`offhand`,`mag`,`arm`,`hand` |
| weapons | `game.weapons.scopeLevel`, `game.scoped` |
| THREE | no `window.THREE` — classes must be harvested from live objects (`geometry.boundingBox`, `position.constructor`, `matrixWorld.elements`) |

## Engine (new)

```
src/next/core.js     settings store (356 keys, debounced persist, change events)
                     scheduler (rAF, per-task hz, when() gates, priority + budget,
                     per-task cost stats, adaptive back-off)
                     dom/shadow host, css once, cached refs
                     overlay canvas (DPR, resize-aware, single clear, layer list)
                     keys (held set, capture-phase, editable guard)
                     hooks (idempotent patch + restore)
src/next/game.js     the table above, as defensive getters + the cover probe
src/next/ui.js       renders NEXT_* data: MODS grid, nav, cards, search, drag
src/next/features/*  ported subsystems, each registering scheduled tasks
src/next/boot.js     wiring: settings → hooks → tasks → panel → overlay
build-next.mjs       bundles modules → dist/sakura.clutch.next.js (obfuscated)
```

### Why the loop gets faster

- **Gated tasks.** Every subsystem declares a cheap `when()` (its own settings
  flag + `playing`). Today eight subsystems run every frame unconditionally,
  including when every one of them is switched off.
- **Cadences.** Radar/scan/stat work moves to 5–20 Hz instead of per-frame;
  only the overlay draw stays per-frame, and only while something is visible.
- **Budget.** Tasks are priority-tagged (0 = must run, 1 = cosmetic). If our own
  frame cost exceeds the budget, cosmetic tasks are skipped that frame — the
  "uncapped FPS" case where the client, not the game, is the bottleneck.
- **Debounced persistence.** 403 `save()` call sites currently each
  `JSON.stringify` + `localStorage.setItem` synchronously. One deferred flush.
- **Measured.** Per-task cost stats feed the frame-time HUD row, so the gain is
  a number on screen instead of a feeling.

## Port order

- [x] 0. UI + settings contract extracted (`tools/extract-next-ui.mjs`, `panel.gen.js`)
- [x] 1. Engine, panel and bundler live — see "Pass 1" below
- [ ] 2. keys + overlay + HUD group (keystrokes, watermark, FPS graph, clock, bars, ammo)
- [ ] 3. crosshair group (game crosshair, overlay crosshair, pixel editor, scope)
- [ ] 4. fx group (tracers, muzzle, impact, weather + 3D/cover gate, motes)
- [ ] 5. chams group (arm/gun/knife chams, viewmodel pose/fov, arm adjust)
- [ ] 6. world group (lighting, sky, fog presets, grade, bloom, day cycle, motion blur)
- [ ] 7. game group (team colors, death screen, hitmarker, damage arcs, money, radar)
- [ ] 8. stats group (kill banner, session stats, combat tracking)
- [ ] 9. parity pass: side-by-side checklist per card, then flip the default
- [ ] 10. launcher pass (startup, injection, memory) once the payload is settled

## Pass 1 — engine, panel, bundler (done)

Files: `src/next/core.js` (engine), `src/next/game.js` (game adapter),
`src/next/boot.js` (the seam), `build-next.mjs`, and the generated
`defaults.gen.js` + `panel.gen.js`.

How the panel is wired: `buildPanel()` is lifted verbatim and, in the v2 client,
it is a *wrapper* — it declares `NAV`, `LN_ICONS` and `LUNAR_MODULES` in its own
body and nests `show`, `rebuildPanel`, `interfaceCard`, `buildLunarPanel`,
`cardsFor` and `note` inside itself. Lifting it whole is what keeps the UI
identical; lifting those functions individually ships every row and tile twice.
`tools/verify-next.mjs` fails the build if that lift list ever goes stale.

The panel resolves `settings`, `save`, `getGame`, `applyPreset`, `chApplyPreset`,
`stReset`, `hudSes`, `wxStatusEl`, `wxCoverEl` as bare names in the bundle scope,
exactly as the v2 client provided them. `boot.js` supplies them; feature passes
replace the stubs.

Verified in a browser (`test/harness.html`, served over HTTP, fake `window.game`):

| check | v2 client | next |
| --- | --- | --- |
| settings keys | 356 | 356 (same names) |
| MODS tiles | 36 | 36 |
| `row()` calls | 314 | 314 |
| nav levels | 2 | 2 |
| sliders / switches / selects / colors | — | 133 / 109 / 34 / 40 |
| console errors | — | 0 |
| persistence | 1 synchronous write per change | 1 deferred write per burst |

Live in the new client already: the cover probe (ported from the v2 client and
owned by the game adapter) answers through the panel — `Under cover = yes ·
roof 4.8m` against the harness's fake roof brush.

Two bugs this pass caught, both worth recording:

1. **Double lift.** Lifting the nested panel functions alongside `buildPanel`
   duplicated all 314 rows and 36 tiles (186 KB). The verifier now counts them
   against the v2 UI region.
2. **Budget starved everything.** The scheduler compared the wall-clock gap
   between frames (~5 ms at 199 fps) against a 3.5 ms budget, so every cosmetic
   task was skipped forever — the readouts never ticked. The budget now uses the
   measured task-loop cost (EMA), which is what it was always meant to mean.


## Pass 2 — new modules (done)

The v2 client is frozen as the rollback reference, so the new work could not be
added by editing it. Instead the rewrite gains modules the v2 client never had,
each built on the engine's own surfaces (`SK.task`, `SK.watch`, `SK.paint`,
`SK.hotkeys`), and a third tab in the Lunar panel that hosts their cards.

New settings live in `src/next/defaults.ext.js`, which the bundler loads between
the generated schema and `core.js` — so the new keys are part of the schema
before the engine snapshots it, and they persist like every other key (22 keys,
379 total, no overlap with a v2 key; `tools/verify-next.mjs` fails on a clash).

| module | what it does |
| --- | --- |
| `features/perf.js` | frame-time graph on the overlay, panel header strip, per-task cost table (amortised ms/frame), auto quality |
| `features/keys.js` | hotkey *registry* — each binding has a setting key, a default and an action, so the menu key is rebindable instead of welded to Insert |
| `features/move.js` | movement meter: horizontal speed, threshold marker, READY state (reads `player.vx/vz`, never writes) |
| `features/profiles.js` | named config snapshots in the client's own storage, alongside the v2 Export/Import blob |
| `ext.js` | the EXTRA tab: cards built with the panel's *own* vocabulary (`row`, `toggleSwitch`, `rangeField`, `selectField`, `actionBtn`, `moduleCard`) so nothing is hand-rolled |

The EXTRA tab attaches *after* `buildPanel()` returns, because the lifted panel
cannot be edited without breaking "same UI". `rebuildPanel()` destroys and
rebuilds the whole panel, so attaching is an idempotent 10 Hz mount that the
engine re-runs only while the tab is missing (one extra run per rebuild, then it
gates itself off — visible in the cost table as `ext-mount 10Hz`).

Auto quality is the one feature that reaches into the scheduler: `SK.stopCosmetic`
pauses every prio-0… prio-1 cosmetic task at once when fps sits under the target.

Verified in the browser, on top of pass 1's parity checks:

- EXTRA tab renders 4 cards / 27 rows; selecting it stands MODS and SETTINGS
  down and restores them on the way back.
- Header strip live: `191 fps · 5.2 ms · client 0.33 ms/frame · 10 tasks`.
- Frame graph and movement meter both paint (pixels sampled: `#7de3ff` fill at
  the meter, translucent `rgba(12,10,14,.62)` under the graph).
- Hotkeys: `Insert` toggles the menu through the registry; binding two modules to
  one key reports `Frame graph + Movement meter = F9` and the first wins.
- Profiles: save → mutate → load restored the value; delete emptied the list.
- Panel rebuild: EXTRA and the strip re-attach themselves, cards intact.
- Auto quality: cosmetic tasks ran 0 times while paused, essential `settings`
  task kept its 12 Hz, and the pause lifted the moment auto was switched off.
- 31 verifier checks pass (`node tools/verify-next.mjs`), 0 console errors.

Three bugs this pass caught:

1. **The pause outlived the autopilot.** Switching auto quality off while it had
   paused cosmetic work left the pause on forever: the recovery branch lives in a
   task that only runs while the feature is on. Now a `SK.watch(["perfAuto"])`
   lifts it.
2. **A one-shot task read as per-frame cost.** `ext-mount` runs once and costs
   2.2 ms; reported as-is it dominated the panel and made the client look slow.
   The table now reports amortised ms/frame (`2.40 ms @10Hz → 0.124`).
3. **Two tabs active at once.** The lifted tabs only deactivate each other when
   one of *them* is clicked, so selecting EXTRA needed to stand them down itself.

Not backported: these modules are rewrite-native. The v2 client (still the
shipped payload) has none of them until the parity flip, or until they are
deliberately backported.

## Pass 3 â€” HUD group (done)

Port of the v2 client's overlay HUD: keystrokes (`clutcher.js` 619-670), the pill
helpers (912-969), watermark / FPS / clock+session / bars / ammo (1121-1324) and
the drag editor (552-616) â€” one file, `src/next/features/hud.js`.

This is a *port*, not a rewrite, and deliberately so: the drawing is the v2
drawing (same literals: `rgba(22,8,16,0.7)` pills, `#ffb3c6` text, `#7dff8a` HP,
`#ff4444` low, the same key-cap geometry). The verifier now fails if any of those
literal signatures disappear, so a future "cleaner" repaint cannot silently break
UI parity.

What changed structurally:

- all six widgets are **one painter** on `SK.paint`, so there is still exactly one
  canvas, one clear and one rAF loop for the whole client
- the painter is handed `(ctx, o, dt, ts)` instead of closing over a global loop,
  which is what the FPS EMA, the session timer and the watermark clock need
- session/shots/hits tracking runs **before** the in-match gate and outside every
  widget branch, exactly like the v2 loop: switch every HUD row off and the
  counters still accrue (the verifier asserts that ordering)
- the drag editor only had to supply the *effect*: `setMenuOpen` in the lifted
  panel already flips `hudEdit`, the overlay's `pointer-events` and the outlines,
  so dragging writes `ksFree/ksX/ksY` and `fpsFree/fpsX/fpsY` into the same
  settings the drawer reads

Game contact is read-only, as always: `player.kills` / `player.alive` for the
session, and the game's own HUD DOM (`#hp`, `#armor`, `#ammo`, `#reserve`,
`#hitmark`) for the bars, ammo and hit counting. Nothing is written back.

Verified in the browser (harness now wipes the client's store on load, so every
run starts from DEFAULTS instead of inheriting the last test's values):

- colour census over the overlay finds every signature: pill fills, `#ffb3c6`
  text, `#7dff8a` HP and `#7db8f0` armor pixels, graph line
- pixel probes: held `W` cap is accent-lit while idle `A` is dark, the gap
  between caps is empty
- FPS EMA live (142), 120-sample history feeding the graph
- real input events: LMB x2 + RMB -> `2` and `1` CPS; held LMB -> shots; the
  game's `#hitmark.pop` -> hits
- session: `player.kills` 2 -> 3 counted cumulatively, `alive` flip -> deaths 1
- drag editor: mousedown on the key block + mousemove moved the rect from
  y=680 to y=372 and wrote `ksFree: true, ksY: 48`; overlay `pointer-events`
  follows the menu (`auto` open, `none` closed)
- 36 verifier checks pass, 0 console errors

Two things this pass caught:

1. **A ghost in the harness, not the client.** The overlay went blank mid-test
   with no page errors. The cause was the *previous* test's settings surviving in
   `localStorage`: `perfAuto` with an unreachable target, so auto quality was
   (correctly) pausing every cosmetic task â€” including the overlay painter. The
   harness now wipes the store per load, which makes verification reproducible.
2. **The scheduler hides painter throws by design.** A throwing task is caught
   and disabled with a warning, so the only symptom is a stopped widget and a
   stale canvas. Worth remembering when a widget "just stops": check the console
   for `task overlay-paint threw`, not the page's error list.

## Camera flicks (v2 fix + the same guard in the rewrite, done)

Reported from a live match: "hella camera flicks when playing". Nothing in the
client moves the camera (the only game-object write in the whole v2 client is
`renderer.toneMappingExposure`), so the flick had to be input, not view. The
pointer-lock handling is the one place the client fights the game for the mouse,
and both of its behaviours are ON by default:

1. **"Free mouse on open"** (`menuMouse`) calls `exitPointerLock()` so the cursor
   can work the menu without the game pausing. The game keeps reading mouse
   movement as look input while it is unlocked - that is the whole point of not
   pausing - so sweeping the cursor across the screen to reach the menu drags the
   view with it.
2. **"Re-lock on close"** (`lockOnClose`) calls `requestPointerLock()` on the game
   canvas when the menu closes. Every lock transition delivers one movement event
   carrying the delta accumulated while unlocked, which the game applies in a
   single step.

The fix is one routine, identical in both clients (v2 inline, rewrite in
`src/next/features/pointer.js`), swallowing that movement in the **capture phase
on `window`**, before the game's own listeners:

- a `pointerlockchange` arms two events, covering both directions: the release
  that frees the cursor and the re-lock that takes it back
- movement is dropped only while the client is the reason the cursor is free:
  `menuOpen && !document.pointerLockElement` and the game is live
- events raised inside the client's own shadow root are exempt (they retarget to
  the host element), so the panel, its hover states and the drag editor are
  untouched
- `ptrGuard` lives in `defaults.ext.js` with the rest of the new schema, and its
  control is the **Pointer card in the rewrite's EXTRA tab** - the v2 panel is
  left byte-identical (its guard is unconditional, exactly like before this
  change, so the "same UI" reference cannot drift). The card also shows the two
  counters live.

Known limit: movement over the client's own panel still reaches the game. That
event has to be delivered to the panel, and a capture-phase stop would kill the
panel's own handlers with it. The panel is small and the sweep that matters - the
cursor crossing the game area - is covered.

Diagnostics, both console-callable:

- `__sakuraPtr()` (v2) / `SK.pointer.state()` (rewrite): `blocked`, `last`
  (`lock-transition` / `cursor-freed`), `armed`, `freed`, `locked`
- `__sakuraSpikes()` (v2): every frame over 25 ms with the client's own cost split
  out (`our` = ticks + overlay draw, not the frame gap), so a hitch can be
  attributed to the client or to the game/GPU. Only logs when `devLog` is on.

A/B checks that isolate the cause during one match, with no rebuild:

- turn **Free mouse on open** off: if the flicks stop, it is case 1
- turn **Re-lock on close** off: if they stop, it is case 2
- if `__sakuraPtr().blocked` climbs while it still flicks, the game's look reader
  sits upstream of the capture listener (a window-capture listener registered
  before the client) and the next step is a virtual cursor over a still-locked
  pointer

Verified in the harness (rewrite build):

- menu open + live + unlocked: a `mousemove` on `document.body` never reaches a
  game-side listener, `defaultPrevented` true, `last: "cursor-freed"`
- a synthetic `pointerlockchange` swallows exactly two movements
  (`last: "lock-transition"`) and lets the third through
- movement dispatched on the client's own host still reaches the host's own
  listener, so the panel is unaffected (and, per the known limit, the game too)
- the Pointer card's switch flips `aria-checked` and `settings.ptrGuard` together:
  off -> the same movement reaches the game, on -> it does not, and the live
  `Blocked` row counts 2 -> 3 with `cursor-freed`
- 45 verifier checks pass - 7 new: both clients must carry the same rule, the
  guard's row must be rewrite-only (present in `ext.js`, absent from the v2 panel
  and from `panel.gen.js`, so the v2 panel stays at 314 rows), `ptrGuard` must be
  a new-schema key rather than a v2 one, and the spike probe must report client
  cost separately - and 0 console errors

