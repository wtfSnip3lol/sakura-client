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
- [ ] 1. core.js, game.js, ui.js, boot.js, build-next.mjs — panel loads, empty engine
- [ ] 2. keys + overlay + HUD group (keystrokes, watermark, FPS graph, clock, bars, ammo)
- [ ] 3. crosshair group (game crosshair, overlay crosshair, pixel editor, scope)
- [ ] 4. fx group (tracers, muzzle, impact, weather + 3D/cover gate, motes)
- [ ] 5. chams group (arm/gun/knife chams, viewmodel pose/fov, arm adjust)
- [ ] 6. world group (lighting, sky, fog presets, grade, bloom, day cycle, motion blur)
- [ ] 7. game group (team colors, death screen, hitmarker, damage arcs, money, radar)
- [ ] 8. stats group (kill banner, session stats, combat tracking)
- [ ] 9. parity pass: side-by-side checklist per card, then flip the default
- [ ] 10. launcher pass (startup, injection, memory) once the payload is settled
