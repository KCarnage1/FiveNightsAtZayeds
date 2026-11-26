/* The case file. Documents are found by looking at the cameras and the office walls (click a paper to pick it up), by surviving nights
 * (the phone call is filed as a transcript), and by solving the order puzzle. Nothing here is explained outright: put the pieces together.
 * Canon rules: the guard is Rashid; Abdulla's Cafeteria's one phone line went to Salem's Candy; Qerh Cooperations owns the building;
 * one soul was split into four bodies (Camel patience, Cat nerve, Goat memory, Falcon hunger); the police come at six. */
import { stats, saveStats } from './settings.js';
import { CALLS } from './calls.js';

export const CODE = '4712'; // the four order slips, in the order the bodies were made: Camel 4, Cat 7, Goat 1, Falcon 2
export const FINAL_ID = 'order0';

/* kind: 'paper' (found in the world: where/at tells which camera shows it), 'call' (a transcript), 'final' (the puzzle's answer) */
export const DOCS = [
  { id: 'menu', kind: 'paper', night: 1, title: "Abdulla's Cafeteria: menu board", where: 'Main Hall', cam: 'main', at: { x: 8.88, y: 1.9, z: -16.5, ry: -Math.PI / 2, w: 1.5, h: 1.0 }, art: 'menu',
    text: "ABDULLA'S CAFETERIA\nOrders by phone only. One line, never busy.\n\nShawarma plate .......... 12\nSalem's Cupcakes (dozen) .. 30\nSPECIAL DELIVERY: ask for the Falcon. He arrives before the food does.\n\nCall and he picks up. He always picks up." },
  { id: 'clipping', kind: 'paper', night: 1, title: 'Newspaper clipping: "Cafeteria Closes"', where: 'Your office', cam: null, at: { x: -2.88, y: 1.2, z: 1.95, ry: Math.PI / 2, w: .5, h: .65 }, art: 'paper',
    text: "LOCAL CAFETERIA CLOSES AFTER 'ORDER NIGHT'\n\nAbdulla's Cafeteria shut its doors this week. Police found the building empty on the morning after a large catering order. The kitchen was warm. The phone was off the hook. Nothing was missing, and nothing was delivered.\n\nThe building has been taken over by Salem's Candy next door." },
  { id: 'slip_camel', kind: 'paper', night: 2, title: 'Order slip #4', where: 'Party Room 1', cam: 'partyL', at: { x: -11.7, y: 0.845, z: -7.1, ry: 0, rx: -Math.PI / 2, w: .28, h: .36 }, art: 'slip', digit: '4',
    text: "ORDER SLIP  No. 4\nParty of twelve. Table by the window.\nCamel's part: PATIENCE.\nThey said they would wait. They are still waiting.\n\nTaken by: R." },
  { id: 'slip_cat', kind: 'paper', night: 2, title: 'Order slip #7', where: 'Left vent', cam: 'ventL', at: { x: -5.6, y: 0.04, z: -0.6, ry: 0, rx: -Math.PI / 2, w: .28, h: .36 }, art: 'slip', digit: '7',
    text: "ORDER SLIP  No. 7\nThe caller rang from inside the building.\nCat's part: NERVE.\nIt took nerve to place an order that could not be filled.\n\nTaken by: R." },
  { id: 'slip_goat', kind: 'paper', night: 3, title: 'Order slip #1', where: 'Prize Corner', cam: 'prize', at: { x: -11.9, y: 1.72, z: -19.9, ry: 0.3, rx: -Math.PI / 2, w: .28, h: .36 }, art: 'slip', digit: '1',
    text: "ORDER SLIP  No. 1\n12 cupcakes. Four candles on each. Do not forget the candles.\nGoat's part: MEMORY.\nIt remembers the order. It does not remember who placed it.\n\nTaken by: R." },
  { id: 'slip_falcon', kind: 'paper', night: 4, title: 'Order slip #2', where: 'Game Area', cam: 'game', at: { x: 13.6, y: 0.02, z: -19.4, ry: 0, rx: -Math.PI / 2, w: .28, h: .36 }, art: 'slip', digit: '2',
    text: "ORDER SLIP  No. 2\nDeliver by six. Roller skates. Do not stop.\nFalcon's part: HUNGER.\nA delivery that has not arrived keeps getting hungrier.\n\nTaken by: R." },
  { id: 'transfer_log', kind: 'paper', night: 3, title: 'Whiteboard: transfer log', where: 'Parts & Service', cam: 'parts', at: { x: 2.4, y: 1.7, z: -29.86, ry: 0, w: 1.4, h: .9 }, art: 'board',
    text: "QERH COOPERATIONS. PARTS & SERVICE\nSOUL TRANSFER LOG (project Fresh Start)\n\nCamel -> Toy body ....... took\nCat -> Toy body ......... took\nGoat -> Toy body ........ took\nFalcon -> Toy body ...... took, but keeps going back to the old one\n\nNOTE: it splits in four every time. Nobody here knows why four. Do not ask the night guard." },
  { id: 'musicbox_card', kind: 'paper', night: 3, title: 'Card taped under the music box', where: 'Prize Corner', cam: 'prize', at: { x: -10.9, y: 0.02, z: -19.1, ry: 0, rx: -Math.PI / 2, w: .3, h: .22 }, art: 'paper',
    text: "SALEM'S CANDY. FRONT DESK\nThe tune is the HOLD MUSIC. While it plays, the caller is still on the line.\nWind it every night. If the music stops, the line drops, and whoever was holding comes to find out why.\n\nHis name is Ibrahim. He has been holding since the night of the order." },
  { id: 'chute_plan', kind: 'paper', night: 4, title: 'Blueprint: the order chute', where: "Kid's Cove", cam: 'kids', at: { x: -7.5, y: 1.35, z: -24.45, ry: 0, w: 1.0, h: .7 }, art: 'plan',
    text: "ABDULLA'S CAFETERIA. KITCHEN TO TABLES\nThe order chute runs behind every party room and out through the ceiling vents. Food went down it. Orders came back up it.\n\nSalem's Candy built a candy mascot to ride the chute and hand things out at the vents. It is called GELLY. It was built to deliver, and it still delivers. It just never knocks." },
  { id: 'bell_tag', kind: 'paper', night: 4, title: 'Tag on a small round animatronic', where: 'The stage', cam: 'stage', at: { x: 3.4, y: 0.42, z: -19.2, ry: 0.4, rx: -Math.PI / 2, w: .22, h: .3 }, art: 'slip',
    text: "COMPLAINTS DEPARTMENT\nBIDOOF rings the bell once for every complaint.\nBidoof does not hurt anyone. Bidoof only takes the light, because the light means the shop is open, and the shop is closed.\n\nIf Bidoof is laughing, someone complained about you." },
  { id: 'report', kind: 'paper', night: 5, title: 'Police report excerpt', where: 'Parts & Service', cam: 'parts', at: { x: -3.2, y: 1.6, z: -29.5, ry: 0, w: .5, h: .65 }, art: 'paper',
    text: "POLICE REPORT (excerpt)\nWitness: R. (age 17 at the time). Counter staff, Salem's Candy.\nStatement: the witness took a phone order at 5:58 pm, wrote it down, and did not pass it on to the kitchen. The witness says the caller never gave a name, and that the phone kept ringing afterwards with nobody on the line.\n\nFiled with Qerh Cooperations, claim Q-0007. Reopened this week." },
  { id: 'cupcake', kind: 'paper', night: 6, title: 'A cupcake with a note', where: 'Your desk', cam: null, at: { x: 0.35, y: 1.0, z: 1.55, ry: -0.4, rx: 0, w: .22, h: .22 }, art: 'cupcake',
    text: "A single cupcake with four candles. The note reads: \"Your order is ready.\"\n\nThe handwriting is yours, Rashid. You wrote this one down a long time ago, and nobody ever came for it.\n\nDo not eat it. If you do, the order is complete, and they will have nothing left to wait for." },
  { id: FINAL_ID, kind: 'final', night: 0, title: 'ORDER #0', where: 'The four slips', cam: null,
    text: "ORDER #0\nTaken by: R.\n\nIn the week the cafeteria closed, its phone number was moved to the Salem's Candy counter. That evening a caller rang the old number and asked for twelve cupcakes, four candles on each, delivered by six. Rashid, seventeen and behind the counter, wrote it down and went on his break. Nobody passed it to the kitchen. Abdulla, who had stayed behind to close the cafeteria's kitchen, heard the extension ring, picked it up, and promised it would arrive.\n\nIt never did.\n\nThe order cannot be cancelled and cannot be completed, so it split into the four things it needed to survive: someone to wait (Camel), someone to call (Cat), someone to remember (Goat), someone to deliver (Falcon). Ibrahim holds the line. Gelly rides the chute. Bidoof rings the bell. Abdulla picks up the phone.\n\nThey are not coming to hurt you, Rashid. They are coming to deliver what you wrote down.\n\nThe police are at the door at six. They do not know what is inside. Whether you open the door, or eat the cupcake, or hang up, is the only part of the order nobody has written yet." }
];
for (let n = 1; n <= 6; n++) DOCS.push({ id: 'call' + n, kind: 'call', night: n, title: `Phone call, night ${n} (transcript)`, where: `Survive night ${n}`, cam: null, text: (CALLS[n] || []).join('\n\n') });

export const byId = (id) => DOCS.find((d) => d.id === id);
export const found = () => stats.lore || (stats.lore = {});
export const has = (id) => !!found()[id];
export function collect(id) { const d = byId(id); if (!d || has(id)) return false; found()[id] = Date.now(); saveStats(); return true; }
export const countFound = () => DOCS.filter((d) => d.kind !== 'final' && has(d.id)).length;
export const total = () => DOCS.filter((d) => d.kind !== 'final').length;
export const slipsFound = () => DOCS.filter((d) => d.digit).every((d) => has(d.id));
/* The puzzle: the digits on the four slips, in the order the bodies were made. */
export const tryCode = (c) => { if (String(c).trim() === CODE) { collect(FINAL_ID); return true; } return false; };
export const hint = (d) => (d.kind === 'call' ? `Survive night ${d.night} and hear the call.` : d.kind === 'final' ? 'Four slips, four digits. Put them in the order the bodies were made.' : `Look for it on the cameras from night ${d.night}. Area: ${d.where}.`);
