# Five Nights at Zayed's

> Survive five nights as Rashid at Salem's Candy.

A desktop horror game built with Electron and a canvas/JS game engine.

## Download

Prebuilt builds are on the [Releases](../../releases) page.

- **Windows:** `FiveNightsAtZayeds-win32-x64.zip`. Unzip and run `FiveNightsAtZayeds.exe`.
- **macOS:** `FiveNightsAtZayeds-mac-arm64.zip` for Apple Silicon (M1 and newer), `FiveNightsAtZayeds-mac-x64.zip` for Intel.
  Unzip, then **right-click `FiveNightsAtZayeds.app` and choose Open** the first time (the app is not notarised by
  Apple, so a double-click is refused). If macOS says the app is damaged, run
  `xattr -cr /path/to/FiveNightsAtZayeds.app` in Terminal once and open it again.
  Quit with Cmd+Q; fullscreen toggles with F11 (Fn+F11 on most Macs).

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

## Play on a phone or in a browser

The web version is published at **https://kcarnage1.github.io/FiveNightsAtZayeds/** (landscape on phones).
Open it once online, then **Add to Home Screen** (iPhone: Share > Add to Home Screen; Android: Install app) and it
works offline like an app. The game itself is about 5 MB and is saved automatically. The three big videos (42 MB)
are optional: Settings > **Offline play** > *Download videos*. On phones, the game starts on Low graphics at 30 FPS,
with touch buttons for doors, lights, cameras and pause, and drag to look around. Online play works from a phone too.
Build it yourself with `scripts/build-web.sh <folder> <version>` and serve that folder.

## Modes and achievements

- **Nightmare Shamshamumu:** five very hard nights (title menu), unlocked one at a time. Two threats can overlap, power drains 30% faster. Doors do not overheat.
- **Achievements:** ten, with a screen on the title menu and a pop-up when one unlocks.
- **Balancing:** only one animatronic can threaten you at a time (two in Nightmare), with a short breather between threats. A door held shut for about 8 seconds overheats and needs a few seconds to cool (not in online games or Nightmare); watching Bonnie or Chica on their corner camera (2B, 4B) for 2 seconds makes them back off.

## Updates

The desktop app checks GitHub for a newer release a few seconds after launch and shows a banner on the title screen.
**Update now** downloads just the game files (`app.asar`, checked against its SHA-256), swaps them in and restarts, so
there is no need to download and unzip the whole build again. Settings has a **Check for updates** button. If the
install folder is not writable, the button opens the release page instead. Set `FNZ_NO_UPDATE=1` to turn the check off.

## Online play

Main menu, **Online**. One player hosts and shares the 4-letter room code; the other joins with it.
Game traffic is direct peer to peer; PeerJS's public broker is only used for the handshake.

- **Co-op guards:** both players are guards in the same office and share doors, lights, power and the tablet.
- **Guard vs animatronic:** the host is the guard, the guest plays one animatronic (the other three stay AI).
  Moving uses the normal rules (doors, tablet, Freddy at 4B, Foxy's cooldown) plus a short cooldown
  (`MOVE_COOLDOWN` in `net.js`).
- Discord shows your online game too (lobby, co-op or guard vs animatronic, and "2 of 2" in the party).
- The host picks the night, 4/20 or custom AI levels. `Enter` opens chat, `F1`-`F4` send quick messages.

## Packaging

```bash
npx @electron/asar pack . app.asar
npx electron-packager . "FiveNightsAtZayeds" --platform=win32 --arch=x64 --asar
```

## Credits

- Font: Titan One (`assets/fonts/titan-one-LICENSE.txt`)
- Electron (MIT) — see `LICENSE`
