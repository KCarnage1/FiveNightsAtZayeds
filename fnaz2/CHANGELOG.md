# Changelog

## 0.9.2
- Quality of life: rebind every key in Settings, Controls (a key that is already used swaps places), with Space, M, Tab and the arrows kept as extras.
- Gamepad support: A flashlight, B mask, X wind the music box, Y cameras, LB / RB seal the vents (or switch camera), stick or D-pad to look, Start to pause.
- A bar under the clock shows how much of the night is left.
- Settings, Gameplay: replay the tutorial. The pause menu has a Fullscreen button.

## 0.9.1
- Ibrahim has a face (a pale puppet mask for now) and the page no longer logs a missing picture.
- The web version publishes more reliably.

## 0.9.0
- Closer to the original Five Nights at Freddy's 2: the flashlight battery now recharges slowly (about 70 seconds to full) instead of almost instantly, so the light is a real resource.
- Golden Abdulla: from the second night he can appear in the hallway out of nowhere. Put the mask on, or turn the flashlight off if it was on, and he vanishes. Ignore him and the night is over.
- Bidoof, the light-jammer, now comes through the left vent. He never hurts you, but he knocks the flashlight out, which leaves the Withered Falcon free to run.
- A sealed vent is now visible: a steel shutter slides down over it and its lamp turns from green to red.
- Between nights, a cartridge sometimes appears after a loss: a small 8-bit minigame, "Take Cake to the Children". It never counts for anything.

## 0.8.4
- Characters now walk between rooms instead of teleporting: a walk cycle, a fast lean for the Withered Falcon in the hall, and a low creep through the vents. The Toy bodies on the title screen turn their heads and wave.
- Menus and screens fade in, buttons respond to hover and press, the clock pulses each hour, and the 6 AM screen pops.
- The characters gallery shows each one facing you, centred and large.
- Toy Zayed the Cat has a proper muzzle and short whiskers. Gelly is rebuilt, Bidoof's picture is fully visible, and Ibrahim has a neck and feet.

## 0.8.3
- A real jumpscare: the face lunges at you, the screen strobes red and shakes, the HUD disappears, then it cuts to static before the game over card.
- New controls: the mask is on Shift (or M). The action buttons are one tidy row at the bottom, and the camera buttons no longer clash with the map.
- A better camera feed: dim and grainy with scanlines, a REC light and the room name in the corner. Switching cameras flickers.
- The tutorial now teaches the mask with a harmless visitor, highlights the Prize Corner for the music box, and only counts winding on that camera.
- The vent seal lasts 5 seconds and needs 11 to recharge. Night 2 difficulty is back on target. The title is smaller so it no longer covers the characters.

## 0.8.2
- Fixed: after pressing Update now, the update prompt could come back because the browser reused the old game file. Every build now has its own file addresses and the update opens a fresh page.
- The desktop app's version number now always matches the release, and "what's new" shows after an update.
- Releases only go public once the Windows and both Mac downloads are attached.
- Opening a second copy of the desktop app brings the first one to the front.

## 0.8.1
- New: seal a vent. Press Q (left) or E (right), or tap SEAL L / SEAL R. A sealed vent keeps everything out for 7 seconds, then needs 9 to recharge. The tutorial and the Night 2 call teach it.
- The mask comes up faster, and pressing M while the cameras are open now closes them and puts the mask on.
- Smooth frame rate: if the game runs slowly it draws at a lower resolution until it is smooth (Settings, Video).
- Characters use the names from the first game: Zayed the Camel, the Cat, the Goat and the Falcon.
- Fixed the Back button in the characters gallery.
- New pictures for Gelly and Bidoof.

## 0.8.0
- Windows and Mac apps, with your game status shown on your Discord profile while the Discord app is open.
- Bidoof now uses his own picture, and the game has a new icon.
- Night 1 phone call is a real voice recording.
- Loading no longer freezes on slower graphics cards: the lights are prepared in the background, a note appears if loading is slow, and a failure shows a message instead of a stuck bar.
- Nights 1 and 2 are open. Nights 3 to 6 follow in a later update.

## 0.7.1
- A first-night tutorial that teaches the vents, the light, the mask, the cameras and the music box by doing, and never repeats.
- Accessibility: text size, high-contrast HUD, shape and text cues, sound captions with a direction arrow, and an Assist option (a quarter more time before something strikes).
- Nights 1 and 2 retuned: Night 1 is a gentle tutorial, Night 2 introduces the vents and the Withered Falcon, and there is always something to react to. No two threats can stack on you.
- Richer generated sound: room tone, vent clanks, footsteps with distance, flashlight buzz, mask breathing with a heartbeat, a layered jumpscare and a master limiter.
- Atmosphere: flashlight beam with dust, office light flicker, flickering signs, camera grain, scan band and a glitch when something moves.
- Faster: each animatronic is drawn with far fewer draw calls on the title screen and stage camera.
- Fixed: deaths were counted every frame on the game-over screen; damaged saves could crash the game; the Night 1 and 2 phone call could start while paused; held keys stuck after losing focus; a guest could be stuck in the lobby when the host left.
- Story text polished for Nights 1 and 2, with a clue pointing to a paper on the cameras in each call.

## 0.7.0
- First public release: Nights 1 and 2 are playable. Nights 3 to 6, the Custom Night and the Daily challenge are marked coming soon.

## 0.6.1
- Updates from inside the game: it checks for a newer published version on start and every ten minutes (and from Settings, Data, Check for updates), offers Update now, then shows what changed.
- Story in the game itself: a four-slide introduction the first time you play, a lore line on each night's title card, a quote from whoever killed you, story tips while loading, and character descriptions that follow the lore.
- Live profile pictures: characters can use the current Discord profile picture of the person they are based on, updated by the server every few minutes. Admin menu, Faces tab, links each character to a Discord user. Off switch in Settings.
- Lore: the case file (Extras). Twelve hidden papers on the cameras and in the office, call transcripts, and a four-digit puzzle that unlocks the truth about Order #0. New phone-call clues and a Night 6 epilogue that reflects what you found.
- Twelve more papers (24 in all): the party invitation, the staff cap label, the doors memo, the kitchen ledger, the telecom log and more. The truth about Order #0 now includes the costume party.
- Ibrahim, Gelly and Bidoof are linked to their Discord accounts for live pictures.
- Redrawn animatronics (smooth bodies, jointed limbs, soft-edged faces).

## 0.5.0
- New look: black-and-white security cameras, checkerboard floors, striped confetti walls, bunting, balloons, star curtains and signs.
- CAD-built props (music box, arcade cabinets, fan, vent grilles, flashlight, party tables) made with build123d.
- Toy bodies have rosy cheeks, gloss and a party piece each; Withered bodies are torn with bare metal showing.
- Harder late nights: Withered Zayed the Falcon is fairer to beat (a little more time, a little less light needed), and the other threats push harder on nights 4 to 6.
- Phone layout: camera buttons are a numbered grid, no overlaps, 44 px touch targets, one-line logo in landscape.
- Pause screen is one card; the night title card no longer covers menus.
- Fewer draw calls (about 5 times fewer in the office), so it runs better on phones.
- Works offline once loaded, and can be installed as an app.
- About screen with credits and what the game sends.
- Co-op hardened: everything from the other player is checked before it is used.
- No emoji in the interface; coins and shop items use drawn icons.

## 0.4.0
Shop, admin menu, new title screen, peer-to-peer co-op, debug page.

## 0.3.0
Loading page, home page, settings, phone calls, custom night, daily challenge, extras.
