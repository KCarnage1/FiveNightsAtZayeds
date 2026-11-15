# Five Nights at Zayed's

> Survive five nights as Rashid at Salem's Candy.

A desktop horror game built with Electron and a canvas/JS game engine.

## Download

Prebuilt Windows build: see the [Releases](../../releases) page
(`FiveNightsAtZayeds-win32-x64.zip` — unzip and run `FiveNightsAtZayeds.exe`).

## Run from source

```bash
npm install
npm start
```

Requires Node.js 18+.

## Project layout

| File | Purpose |
| --- | --- |
| `electron-main.js` | Electron entry point: window, fps cap, Discord RPC, self-test |
| `preload.js` | Narrow `contextBridge` API (`window.fnaz`), page can't reach Node |
| `index.html` / `styles.css` | Shell and menus |
| `game.bundle.js` | Bundled game logic |
| `audio.js` | Sound manager |
| `net.js`, `peerjs.min.js` | Online play (WebRTC peer to peer via PeerJS) |
| `assets/` | Faces, voice lines, music, video, fonts |
| `discord.json` | Discord application ID for Rich Presence |

## Configuration

| Variable | Effect |
| --- | --- |
| `FNZ_SELFTEST=1` | Loads the game hidden, verifies every sound/video decodes, exits 0 on success |
| `FNZ_FPS=<n\|auto>` | Overrides the frame-rate limit for this launch |
| `FNZ_DISCORD_ID=<id>` | Overrides the Discord application ID |

Frame rate can also be set in-game; the choice is stored in `launch.json` in the
Electron user-data folder and applied at the next launch (VSync is disabled when
uncapped).

**Controls:** `F11` toggles fullscreen.

## Online play

Main menu, **Online**. One player hosts and shares the 4-letter room code; the other joins with it.
Game traffic is direct peer to peer; PeerJS's public broker is only used for the handshake.

- **Co-op guards:** both players are guards in the same office and share doors, lights, power and the tablet.
- **Guard vs animatronic:** the host is the guard, the guest plays one animatronic (the other three stay AI).
  Moving uses the normal rules (doors, tablet, Freddy at 4B, Foxy's cooldown) plus a short cooldown
  (`MOVE_COOLDOWN` in `net.js`).
- The host picks the night, 4/20 or custom AI levels. `Enter` opens chat, `F1`-`F4` send quick messages.

## Packaging

```bash
npx @electron/asar pack . app.asar
npx electron-packager . "FiveNightsAtZayeds" --platform=win32 --arch=x64 --asar
```

## Credits

- Font: Titan One (`assets/fonts/titan-one-LICENSE.txt`)
- Electron (MIT) — see `LICENSE`
