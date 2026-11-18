# The Rust brain

`fnaz-ai` is the animatronics' brain (movement rolls, door and camera rules, power, the clock) written in Rust. It is a
line-by-line port of `../ai.js`, which in turn is the game logic that used to live inside `game.bundle.js`.

How it fits together:

- `ai.js` is the readable reference. It is pure game logic with no sound or drawing: it changes the game state and
  returns a list of effects (`steps`, `kill`, `say`...) for `game.bundle.js` to play.
- `rust/fnaz-ai` does exactly the same, compiled to WebAssembly. `fnaz-ai.wasm.js` is that module embedded as base64
  (so it loads the same way on the web, on a phone and in the desktop app).
- `ai-wasm.js` loads it. It runs a short self-test against `ai.js` first and only then switches over. If anything is
  wrong it keeps using `ai.js`. `FNAZAI.engine` says which one is running; add `?js` to the address to force `ai.js`.
- Both use the same seeded random generator (mulberry32, kept in `state.rng`), so a given seed and the same inputs give
  the same night in both. The game can even switch between them mid-night.

Build and test:

```bash
rustup target add wasm32-unknown-unknown
scripts/build-wasm.sh                 # builds rust/fnaz-ai and rewrites fnaz-ai.wasm.js
node tests/ai-equiv.js 400            # ai.js against the ORIGINAL code from game.bundle.js (old-ai.src.js)
node tests/ai-wasm.js 1000            # the Rust module against ai.js
cd rust/fnaz-ai && cargo fmt --check && cargo clippy --all-targets -- -D warnings && cargo test
```

The two test scripts run many random scripted nights (random AI levels, nights 1 to 12, online and reduced-motion
modes, human-controlled animatronics, doors, lights, tablet and camera switches) and compare the whole game state, every
effect and the random stream after every tick.

Known limit: `Math.sin` (used only for the blackout flicker flag `zFlash`) is computed by different maths libraries in
JavaScript and Rust, so in principle it could differ in the last bit right at the flicker threshold. It has never
differed in the tests, and it only drives a flicker on screen.
