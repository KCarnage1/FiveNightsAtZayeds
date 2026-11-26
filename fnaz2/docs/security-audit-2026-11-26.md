# Security audit

Skill: security-audit (save tampering, cheats, network exploits, data exposure, input validation). Inputs: all source in `src/` (FOUND). Not tested: a real server (the sandbox cannot reach it).

| Area | Finding | Status |
|---|---|---|
| Save tampering | Coins, items and progress are in localStorage and can be edited. The game is single player and nothing is shared, so the only effect is on the player's own copy. | Accepted |
| Admin | The secret word is stored only as hashes. Every power needs the server to accept the password; the password is held in memory only and never saved. Runs that use admin powers earn nothing. | OK |
| Co-op: guest to host | Input is limited to a known camera name and a true/false for winding. Quick messages are checked against a fixed list. | OK |
| Co-op: host to guest | Before this pass the guest copied whatever the host sent into the game state. A bad host could set odd fields or crash the guest's frame loop with unknown character names. Now only known numbers, places and characters are accepted, and effects are filtered. | Fixed |
| Rendering of server text | Announcements and the online list are written into the page with escaping. | OK |
| Data exposure | The publishable key in the page is meant to be public; the server decides what it may do. Presence data is a random ID, version, device type and screen, with an opt-out. | OK |
| Network | Co-op is peer to peer over WebRTC (encrypted). Without a relay server, players behind strict networks cannot connect. | Known limit |
| Content policy | There is no Content-Security-Policy yet. Adding one needs the matchmaking and game servers allowed explicitly. | Open |
