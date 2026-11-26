# FNAZ 2 sound design (Nights 1 and 2)

All sound is generated with the Web Audio API in `src/audio.js`. Buses: sfx and music feed master, then a gentle limiter (DynamicsCompressor, -8 dB threshold, 12:1). One-shots are capped at 24 live voices; noise comes from one shared 2 s buffer; `S.frame` allocates nothing.

| Sound | Trigger | Story meaning |
|---|---|---|
| Room tone | `start()`, `S.hum` | Two saws 0.35 Hz apart plus dark noise. The empty restaurant is never quiet. |
| Vent clank | random 14-34 s in `S.frame`; vent moves | Hard-panned metal clank. Left or right tells you which vent to check. |
| Distant scrape | random 9-26 s; vent moves | Filtered noise sweep, panned. Something far away, usually nothing. |
| Footsteps | `S.move` to a non-vent node | Two soft steps. Farther nodes are duller (low-pass) and quieter, so the hall sounds near and the stage far. |
| Clang | animatronic enters from a vent | Heavy hit: it got through. |
| Flashlight | click on toggle; buzz while lit | Faint 100 Hz buzz. Below 25% battery it stutters and dips: it is dying. |
| Mask breathing | `S.breath` every 1.4 s while masked | Alternating inhale/exhale. Safe, but cramped. |
| Heartbeat | `S.frame` while any animatronic is in the office | Lub-dub, faster unmasked (0.65 s) than masked (0.85 s). |
| Phone | `S.ring` | Line static, three two-tone rings, then the call. |
| Music box | `S.box(level, dt)` | A-minor tune, sine plus octave. Slower, flatter and more detuned as it runs down; silence means danger. |
| Laugh, chime | Bidoof enters; pickups, box out, wins | Mockery; relief or notice. |
| Jumpscare | `S.scare` on kill | Noise burst, three detuned saw screams, low thump. Layer peaks sum to about 0.65, below -3 dBFS after master (0.8) and limiter. With `cfg.flashing` off the attack is 60 ms and the level 70%. |

Not yet verified by listening or by running the build (no shell was available when written). Run `node tests/audio.cjs` and tune by ear.
