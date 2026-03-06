# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Running the Game

Open `index.html` directly in any modern browser — no build step, no server, no dependencies.

```bash
start index.html         # Windows
open index.html          # macOS
xdg-open index.html      # Linux
```

To reset the high score between test sessions: open DevTools → Application → Local Storage → delete `retroShooterHS`.

## Git Workflow

This repo uses `gh` CLI and conventional commit prefixes (`feat:`, `fix:`, `refactor:`, `chore:`). Always commit specific files by name rather than `git add .`. Push to GitHub after each logical change.

Local git identity is configured at the repo level (`--local`) as `brnoroberts-afk / brnoroberts-afk@users.noreply.github.com`.

## Architecture

Three files, loaded in order by `index.html`:

1. **`levels.js`** — exports `LEVELS[]`. Each entry defines `worldWidth/Height`, `playerStart`, `floorColor`/`gridColor`, `bonusTimeLimit`, and `waves[]`. A wave is `{ delay: seconds, spawns: [{type, x, y}] }`. Waves fire by elapsed time, not kill count.

2. **`game.js`** — the entire engine, structured as sequential sections:
   - `FONT` bitmask table + `drawPixelText()` — all UI text rendered pixel-by-pixel with `fillRect`; no system fonts used anywhere.
   - Canvas setup: fixed internal resolution `640×480` (`BASE_W/H`), CSS-scaled to fill the window while maintaining aspect ratio. `SCALE` tracks the ratio for mouse coordinate conversion.
   - `G` object — single global holding all runtime state: `level`, `score`, `highScore`, `player`, `enemies[]`, `bullets[]`, `particles[]`, `camera`, `keys`, `mouse`, `spawnQueue[]`, `levelElapsed`, `screenFlash`, `noDamageThisLevel`.
   - `gameState` string drives the top-level loop: `MENU | PLAYING | LEVEL_COMPLETE | GAME_OVER`.
   - Classes: `Particle`, `Bullet`, `Player`, `Enemy`. All entities store world-space `x/y`; rendering subtracts `G.camera` to get screen coords.
   - `Enemy` is a single class parameterised by `type` string (`grunt`, `flanker`, `turret`, `tank`, `dasher`). Stats scale per level via `Math.pow(1.12/1.15/0.92, G.level)` multipliers applied in the constructor.
   - `doCollisions()` — AABB `rectsOverlap()` checks: enemy bullets vs player, player bullets vs enemies, enemy body vs player (contact damage + knockback).
   - `gameLoop(timestamp)` — `requestAnimationFrame` loop, dt capped at 100 ms. Dispatches to `updateGame()` + `renderGame()` or UI screen draw functions.
   - Render order each frame: floor tiles → enemies → bullets → player → particles → screen flash → HUD → crosshair.

## Key Conventions

- **All sprites are pure `fillRect`** — no images, no paths, no arcs. `ctx.save/rotate/restore` is used only for rotating gun barrels.
- **World vs screen coords**: entities live in world space; always subtract `G.camera.{x,y}` before drawing. Mouse coords are kept in both spaces (`screenX/Y` and `worldX/Y`).
- **Dead flag pattern**: entities set `this.dead = true` during update; arrays are filtered at the end of `updateGame()`. Never splice mid-loop.
- **Level completion**: triggered when all waves are `done` AND `G.enemies.length === 0`. Add new enemy types to the `LEVELS` wave spawns and the `Enemy` constructor switch — no other wiring needed.
- **Adding a character to the pixel font**: add a 7-row × 5-col binary array to the `FONT` object at the top of `game.js`.
