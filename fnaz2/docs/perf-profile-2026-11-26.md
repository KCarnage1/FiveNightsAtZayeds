# Performance profile

Skill: perf-profile. Inputs: renderer statistics from a real run (`node tests/perf.cjs`, FOUND). A frame-time budget for target devices was never set and no phone was available, so frame time is **NOT ASSESSED**. The only frame time measured is a software renderer (no GPU), useful for comparing before and after, not as a device figure.

## Draw calls per view (lower is better; phones struggle above about 300)
| View | Before | After |
|---|---|---|
| office | 799 | 156 |
| main hall camera | 668 | 129 |
| party rooms | 374 | 72 |
| left vent | 861 | 133 |
| title screen | 416 | 329 |
| show stage camera | 463 | 344 |
| parts and service | 399 | 393 |

Software-renderer frame time in the office: median 450 ms before, 233 ms after (about 1.9 times faster, same machine).

## What was done
- Balloons (about 200 draw calls) are now one instanced mesh and one line set.
- Walls of each room are merged into one mesh.
- Each CAD prop is merged by material when it loads (a table went from about 14 parts to about 5).

## Still expensive (ranked)
1. **The animatronics:** each body is about 100 small meshes, so the title screen (four visible) and the stage and parts cameras stay at 330 to 390 calls. Next step: merge each body's rigid parts per joint (head, jaw, arms, body), which keeps the animation.
2. Triangles peak at about 116k on the parts camera (Withered bodies are detailed). Fine for desktop, worth a low-detail version for phones.
3. Textures: 33 to 51 canvas textures. Fine.

Measured with `tests/perf.cjs`; re-run it after any change to the map or the models.
