# Balance: Nights 1 and 2

Produced with `node tests/balance.mjs` (survival table) and `node tests/balance.mjs gaps` (pacing). Locked in by `tests/ai.test.mjs`.

## Player models (tests/balance.mjs)

| player | reaction delay | lapses |
|---|---|---|
| lazy | 1.2 s, mask only 3 s of every 4, winds the box only below 35 | 20% of new threats noticed 0.5 to 2.5 s late |
| average | 0.8 s, masks, lights the Falcon, winds the box to nearly full | 10% of new threats noticed 0.5 to 2.5 s late |
| careful | 0.8 s | none |
| instant | 0 s | none |

## Targets and results (60 seeded runs per cell, 150 in the tests)

| night / player | before | after | target |
|---|---|---|---|
| N1 average | 95 | 100 | >= 98 |
| N1 lazy | 88 | 98 | high |
| N2 average | 85 | 90 | about 90 |
| N2 lazy | 45 | 53 | about 60 |
| N2 careful 0.8 s | 97 | 100 | n/a |
| N2 instant | 100 | 100 | always winnable |
| idle, mask-only, camper | 0 | 0 | must lose |

## Pacing (careful 0.8 s player with lapses; cue = door approach, entry, run, box low or out)

| | before N1 | after N1 | before N2 | after N2 |
|---|---|---|---|---|
| cues per run, hour 1 | 1.1 | 2.2 | 2.7 | 3.5 |
| cues per run, hour 5 | 2.4 | 7.0 | 8.1 | 8.8 |
| median gap between cues | 30.8 s | 10.9 s | 9.3 s | 7.9 s |
| longest gap | 76 s | 50 s | 69 s | 51 s |
| runs with a gap over 60 s | 100% | 0% | 53% | 0% |
| real scares (entries, not Bidoof) per run | 2.8 | 5.0 | 7.0 | 7.0 |
| seconds with two real threats at once | 0 | 0 | 0.3 | 0 |

The ramp inside a night comes from the hour bonus (+1 level from hour 3, +2 from hour 5) on top of the levels below.

## Level changes (nights 1 and 2, plus knock-on values so nights stay in order)

| character | N1 before / after | N2 before / after | N3 before / after |
|---|---|---|---|
| Toy Zayed | 0 / 1 | 2 / 2 | 4 / 4 |
| Toy Bubbles (left vent) | 2 / 2 | 3 / 2 | 5 / 5 |
| Toy Taffy (right vent) | 0 / 0 | 0 / 1 | 3 / 3 |
| Withered Falcon (wSherbet) | 0 / 0 | 1 / 3 | 2 / 3 |
| Bidoof | 0 / 4 | 2 / 2 | 3 / 3 |
| Ibrahim (music box) | 1 / 6 | 2 / 6 | 4 / 6 |

Night 1 teaches the mask (Toy Bubbles through the left vent), the light (Toy Zayed in the hall is pushed back by it), and the music box (it drains in about 45 s, so the player has to visit the Prize Corner about once a minute). Bidoof is harmless and fills the quiet gaps. Night 2 adds the right vent and the Falcon.

## Rules added (measured problems)

1. Nights 1 and 2: one real threat at a time. A character cannot enter while the Falcon is in the hall or another non-Bidoof is in the office, and the Falcon cannot start a run while anything is in the office. Measured before: the Falcon running while Bubbles, Bidoof and Zayed arrived within 4.3 s, which no player can answer (the mask disables the light). Without the limit the average player's N2 survival was about 80% and killed mostly by the pile-ups. Mirrored in `rust/ai-rs/src/port.rs`.
2. Night 1 only: an intruder needs 1.2 s longer to strike (3.4 s becomes 4.6 s, minus 0.06 s per level). Tutorial grace: the average player was 93 to 95% without it. Mirrored in the port.

## What remains

- Night 3 and later were not tuned: with the lapse model the average player now survives N3 58%, N4 33%. Night 3 needs a pass (the Falcon at 3 and the music box at 6 make it harder than before).
- The lazy player at N2 is 53%, a little under the 60% target; the model is only an approximation of a human.
- The music box never runs out for any scripted player; the box scare is seen only by players who ignore it.
- Run `cargo test` in `rust/ai-rs` against regenerated cases (`tests/gen-ai-cases.mjs`); only `cargo check` was run here.
