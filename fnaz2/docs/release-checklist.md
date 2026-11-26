# Release checklist (Five Nights at Zayed's 2)

Skill: release-checklist. Status as of this commit. "Done" means checked by a test or by looking at it in a real run.

## Build
- [x] `scripts/build-web.sh` builds the playable folder (3.2 MB) and a cache list.
- [x] In-game updater verified (`tests/update.cjs`): finds a newer build, offers it, clears the cache, reloads and shows what changed. The Pages build uses the commit as the build id, so every deploy is picked up by players automatically.
- [x] Offline load verified (`tests/offline.cjs`): the home screen and a night run with no connection.
- [x] Lint clean (`npx eslint src`).
- [x] All automated checks pass (`tests/all.sh`): AI, debug page with peer-to-peer, full flow, two-browser co-op, shop and admin, phone audit.

## Hosting
- [x] The Pages workflow builds the game into `/fnaz2/` next to the first game.
- [ ] **Not live yet:** Pages deploys when `main` changes. This work is on `claude/hopeful-keller-o2xfu2` and has to be merged or pushed to `main`.
- [ ] Repo Settings, Pages, Source must be "GitHub Actions" (it already is for the first game).

## Quality
- [x] Contrast and touch targets checked with the antislop tools; focus outlines and reduced motion in place.
- [x] Balance simulated across nights and player types (`docs/balance-check-2026-11-26.md`).
- [x] Security review (`docs/security-audit-2026-11-26.md`).
- [ ] **Not done:** a person playing all six nights on a real phone and a real desktop GPU. Frame time on real devices is not measured.
- [ ] **Not done:** co-op over the public matchmaking server and across two real networks. It was tested through a local one.

## Content
- [ ] Ibrahim, Gelly and Bidoof still use placeholder bodies (waiting for the pictures).
- [ ] No recorded voicelines or music (sounds are generated; phone calls use text-to-speech).

## Legal and privacy
- [x] About screen: fan game, not affiliated; what the game sends.
- [ ] Confirm the owners of the photo faces agree to them being public.

## Store page
- [x] Title, description and share image tags in `index.html`.
- [ ] A screenshot or trailer for the post (take it from the live page).
