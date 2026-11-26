# Balance check: the AI difficulty tables

Skill: balance-check. Inputs: `src/ai.js` (FOUND), a design document with targets (ABSENT: no GDD exists), so values with no stated range are not judged against a target. The findings below come from simulation (`node tests/balance.mjs`: 60 seeded runs per night per player type).

**Health summary: CONCERNS** (tuned in this pass; one concern remains).

## Player models
| Player | What it does |
|---|---|
| idle | does nothing |
| mask only | holds the mask the whole night, never winds the box |
| camper | sits on the music box camera |
| lazy (1.2 s delay) | reacts slowly and drops the mask for a moment |
| careful (0.8 s delay) | a competent human: mask when something is in the office, light on the runner, winds the box |
| careful (instant) | a perfect player |

## Survival by night, before and after tuning (careful, 0.8 s delay)
| | N1 | N2 | N3 | N4 | N5 | N6 |
|---|---|---|---|---|---|---|
| before | 100 | 93 | 92 | 75 | 48 | 20 |
| after | 100 | 97 | 95 | 82 | 60 | 43 |

## Findings
1. **No degenerate strategy.** Idle, mask-only and camping all lose every night (0 to 2 percent). Nothing passive wins.
2. **Withered Sherbet was a difficulty cliff (fixed).** The run window was 4.2 s and the light had to hold for 1.1 s. A human who has to look at the hallway first lost the final night 80 percent of the time. Now 4.6 s and 1.0 s; the finale is 43 percent for a careful human, 72 percent for a perfect player.
3. **Late nights were too gentle for the other threats (fixed).** Night 5 and 6 levels for the Toys, the Withered, Gelly and Ibrahim were raised by 1 to 3, and the music box now drains faster at high levels (0.07 per level instead of 0.05).
4. **Remaining concern: every death on nights 4 to 6 is still Withered Sherbet.** The other threats are all answered by one habit (wear the mask when something is in the office), so they rarely kill a player who reacts within a second. Suggested next step: give the mask a cost (it blocks the cameras and flashlight already; a slow breathing-battery would add more) or let two intruders arrive together more often.
5. Night 1 is 100 percent survivable by design (tutorial).

## Changes made
`src/ai.js`: runner window 4.2 to 4.6 s, runner hold 1.1 to 1.0 s, night 4 to 6 levels, music box drain slope. The Rust port (`rust/ai-rs`) carries the same numbers.
