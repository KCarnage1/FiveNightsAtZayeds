# Five Nights at Zayed's 2

New bodies, old souls. No doors: use the flashlight, the Zayed mask, the cameras and the music box to survive until 6 AM.

- `npm install && npm run build`, then serve this folder over http and open `index.html`.
- `npm test` runs the AI tests. `tests/*.cjs` are Playwright checks (screenshots and flows).
- Features: loading page, animated home page, 6 nights with phone calls, custom night with share codes, daily challenge, extras (stats, character gallery), pause, full settings (audio, video quality, sensitivity, accessibility, online sharing), touch controls, optional online presence and announcements.
- Code: `src/ai.js` (pure, seeded brain), `src/map.js` (pizzeria), `src/models/` (characters), `src/main.js` (game and screens), `src/settings.js`, `src/calls.js`, `src/online.js`, `src/audio.js`.

## v0.4
- **Shop** (coins from nights, hours and a daily reward): permanent upgrades (battery, charger, music-box spring, quick mask, lucky charm) and mask/flashlight colours.
- **Admin menu**: type the secret word, then the server checks the password. Cheats, cast control, economy, online list, broadcast.
- **Online co-op (peer-to-peer)**: host = Guard (flashlight, mask), guest = Operator (cameras, music box). Room codes and invite links (`?join=CODE`). Run a local broker for testing: `npm run peer` then open the game with `?peer=localhost:9000`.
- **/debug.html**: in-browser self-tests (graphics, characters, AI, saves, online, peer-to-peer). Press F3 in the game for a live debug overlay.
- Tests: `npm test` (AI), `node tests/coop.cjs` (two real browsers over WebRTC), `tests/shop-admin.cjs`, `tests/flow.cjs`, `tests/debug.cjs` (need the local server on :8766 and the broker on :9000).
