# Sakura Launcher

A sakura-themed desktop launcher for [Clutcher.io](https://www.clutcher.io/) and [AstraStrike](https://astrastrike.fun/).

- **Clutcher.io** — opens the game in its own Chromium window with the Sakura Client injected — keystrokes display and ambience visual presets.
- **AstraStrike** — clean mode: **nothing is injected into the page**. It opens the game in a Chromium window with launcher-level performance flags and a separate keystrokes overlay layer.

## Features

**Clutcher.io (Sakura Client)**

- **Keystrokes** — WASD, LMB, RMB, Space display with optional CPS counter
- **Ambience** — One-click visual presets (Sakura, Midnight, Sunset, Neon, Vivid, Cinematic, Arctic, Void, Synthwave, Noir, Dream)
- **Dev tab** (launcher DEV button + code only) — Launcher GPU switches, texture quality, no bloom, fast animations, FPS counter, and case tools (free cases, auto cases, infinite coins, case odds, give item)
- **Beta track** (launcher Beta button, no code) — Lunar-style UI with accent color, menu size, search and free keystrokes positioning

**AstraStrike (clean mode)**

- **Keystrokes overlay** — QWER / ASDFC / Shift·Space·Ctrl, sakura themed, drag-free (corner-selectable), scalable and fadeable
- Runs in its own `WebContentsView` fed by main-process key events — it cannot read or modify the game
- No JavaScript, CSS or preload is injected into the game page; the game runs exactly as it would in a normal browser

## Run

```bash
npm install
npm start
```

Switch games anytime: press **Alt** to reveal the menu → **Game** → pick a game (the launcher restarts).

The startup screen has two icon buttons in the bottom-left corner (hover for labels):
- **DEV** — enter the code to launch with the in-game dev tab unlocked
- **Beta** — no code; launches with the Beta track (Lunar-style UI) enabled

## Build (portable .exe)

```bash
npm run dist
```

Output goes to `release/`.

## Controls

- **Alt** — Show the launcher menu (game switch, overlay toggles)
- **F8** — AstraStrike: open/close the overlay edit panel (corner, scale, opacity)
- **F11** — Fullscreen
- **F5** — Reload
- **Insert** — Toggle the Sakura Client menu (Clutcher.io only)

Note: the AstraStrike overlay shows keyboard keys only. It has no access to the mouse, so there is no LMB/RMB display or CPS counter in that mode.
