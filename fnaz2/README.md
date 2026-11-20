# Five Nights at Zayed's 2

New bodies, old souls. No doors: use the flashlight, the Zayed mask, the cameras and the music box to survive until 6 AM.

- `npm install && npm run build`, then serve this folder over http and open `index.html`.
- `npm test` runs the AI tests. `tests/*.cjs` are Playwright checks (screenshots and flows).
- Features: loading page, animated home page, 6 nights with phone calls, custom night with share codes, daily challenge, extras (stats, character gallery), pause, full settings (audio, video quality, sensitivity, accessibility, online sharing), touch controls, optional online presence and announcements.
- Code: `src/ai.js` (pure, seeded brain), `src/map.js` (pizzeria), `src/models/` (characters), `src/main.js` (game and screens), `src/settings.js`, `src/calls.js`, `src/online.js`, `src/audio.js`.
