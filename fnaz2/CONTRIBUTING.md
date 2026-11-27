# Working on Five Nights at Zayed's 2

For people who build, test or release the game. Players: see the [README](README.md).

## Run it

```bash
npm ci
npm run build          # bundles src/ into game.bundle.js
python3 -m http.server 8766   # serve this folder, then open http://localhost:8766/index.html
```

`npm run dev` bundles without minifying. `npm run peer` starts a local matchmaking broker for online tests; open the game with `?peer=localhost:9000`.

## Tests

| What | How |
|---|---|
| AI rules (seeded, pure) | `npm test` |
| Lint | `npx eslint src` |
| Everything in a real browser (flow, co-op, shop, lore, phone layout, adversarial) | `bash tests/all.sh` with the server on `:8766` and the broker on `:9000` |
| In-browser self-test | open `/debug.html` (`?peer=localhost:9000` for the online checks), or press F3 in the game |

The browser tests need Playwright and set `BASE=http://localhost:PORT` if the server is elsewhere.

## Layout

`src/ai.js` pure seeded brain · `src/map.js` the building · `src/models/` characters and props · `src/main.js` game and screens · `src/calls.js` phone calls (recordings in `assets/voice/`) · `src/lore.js` case file · `src/coop.js` and `src/net.js` online · `src/update.js` in-game updater · `src/presence.js` Discord status · `desktop/` the Windows and Mac app · `docs/` design notes, balance and security reports.

## Releasing

- **Web:** every push to `main` builds and publishes to GitHub Pages (`.github/workflows/pages.yml`). Players get a new build through the in-game "Update now" banner. Raise `version` in `package.json` and add a `CHANGELOG.md` entry first; the banner shows that entry.
- **Windows and Mac:** run the *Release* workflow from the Actions tab with a tag such as `v0.8.0`. It builds the app folder (`scripts/build-desktop.sh`) and attaches the zips to a GitHub release. The Mac app is signed ad hoc, not notarised.
- **Discord status:** the app ID is in `desktop/discord.json`. The large picture key is `logo`, uploaded under Rich Presence, Art Assets in the Discord Developer Portal.
