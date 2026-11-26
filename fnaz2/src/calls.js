import { cfg } from './settings.js';

/* The phone calls. Lore rules: the guard is Rashid; the Zayeds are one soul in four bodies (Camel patience, Cat nerve, Goat memory, Falcon hunger);
 * Abdulla's Cafeteria's phone line passed to Salem's Candy; Qerh Cooperations owns the place; the police arrive at six. */
export const CALLS = {
  1: ['Hello? Yoo-hoo! Welcome to your first night at the new Zayed\'s, Rashid. I\'m the phone guy at Qerh Cooperations.',
    'You may have heard about the old place. Forget it. New location. New bodies. Shiny. Friendly.',
    'We took the doors away. Insurance reasons, and a lot of broken hinges. Flashlight down the hall. If anything walks in, wear the Zayed mask. They think you are one of them.',
    'The new bodies are the Toys. The old ones are in Parts and Service. Do not go looking for them.',
    'There is old paperwork taped up around the building. Do not read it, and do not click on anything you find on the cameras. Party Room 2 is still set for a party. Nobody ever cleared the table.'],
  2: ['Hello! Night two. You made it. I\'m honestly relieved. The paperwork was getting heavy.',
    'Two air vents open into your office. Something small will use them. Put the mask on when it arrives, and it will leave.',
    'Those vents are older than the building. They were the order chute at the old cafeteria. Food went down. Orders came up. Some orders are still coming up.',
    'Things get left in the left vent. Check it on the cameras. If it is a slip, read it to the last line.',
    'The old bodies are awake now too. The Withered. The Falcon is the worst. He runs the hallway, and no mask will stop him. Light. Down the hall. Remember that.'],
  3: ['Hi, Rashid. A few things before you start.',
    'There is a music box in the Prize Corner. Wind it from the camera, hold the button, and keep it wound. It is not a toy. It belongs to someone named Ibrahim.',
    'Ibrahim is not one of the four. The Zayeds are one soul, split into four bodies: the Camel is the patience, the Cat is the nerve, the Goat is the memory, the Falcon is the hunger. Ibrahim is... somebody else. Nobody at Qerh Cooperations will say who.',
    'If the music stops, he comes out. Do not let it stop.',
    'The tune is a recording from the old phone line. Hold music. I will say no more, because I think you can work out what it means to be on hold for thirty years.'],
  4: ['Hello. Night four. Two things I was asked not to tell you.',
    'One: something new is crawling in the ceiling. Her name is Gelly. She uses the vents like a hallway. Mask works on her, but she will not leave quickly.',
    'Two: there is a little round one that laughs. Bidoof. He does not hurt anyone. He just breaks your flashlight, and that is worse. Put the mask on and he goes away.',
    'By the way, the old Abdulla\'s Cafeteria phone line still rings in this building. Same line as Salem\'s Candy. That is why the Falcon delivers. I hope you never hear it ring.',
    'If you find slips of paper on the cameras, order slips, each with a number, do not throw them away. Claims adjusters keep everything. Write down the numbers. Numbers have an order, and orders have a reason.'],
  5: ['Rashid. Almost there. I will be quick, I am being watched.',
    'I read the old police report. The cafeteria\'s file. Your name is in it. At Qerh Cooperations I am the one who handles files, and tonight I reopened yours.',
    'The soul that was split did not want to be split. Four bodies is a lot of anger to carry. Do not give it a reason.',
    'Last night is tomorrow. Whatever you hear at the door at six, do not open it for anyone.',
    'The report names a witness who was seventeen at the time, behind the counter at Salem\'s Candy. I will not say the initial. You know it. They put it on every slip.'],
  6: ['Hello? Yoo-hoo! It\'s me. I know, I said last night was the final night. I was wrong.',
    'The police will be outside at six. They are not coming for the Zayeds. The Falcon already knows, and so does the gold camel, Abdulla. He picks up whenever you call anyone.',
    'Now listen, because I will only say this once. Wait. Do you hear that? That is skates, on my office floor. No, no, wait. I am a claims adjuster. I just do the paperwork!',
    'If you have the four slips, put them in the order the bodies were made, and dial it on the case file. That is the only call I can still make for you.',
    '[Three knocks. A crash. Static.]']
};
let line = 0, timer = 0, on = false, current = null;
const voice = () => (typeof speechSynthesis !== 'undefined' ? speechSynthesis : null);
function pickVoice() { const v = voice(); if (!v) return null; const l = v.getVoices(); return l.find((x) => /en-(GB|US)/i.test(x.lang) && /male|david|daniel|guy|google uk english male/i.test(x.name)) || l.find((x) => /^en/i.test(x.lang)) || null; }

export function start(night, box) {
  stop(); const lines = CALLS[night]; if (!lines || !cfg.calls) return false;
  on = true; line = 0; current = box; box.hidden = false; box.querySelector('.who').textContent = night === 6 ? 'Phone guy · Qerh Cooperations' : 'Phone guy';
  next(lines); return true;
}
function next(lines) {
  if (!on) return; if (line >= lines.length) { setTimeout(stop, 1200); return; }
  const text = lines[line++]; current.querySelector('.txt').textContent = cfg.subtitles ? text : '…'; current.classList.toggle('hidetxt', !cfg.subtitles);
  const fallback = Math.max(3200, text.length * 62); let done = false;
  const go = () => { if (done || !on) return; done = true; clearTimeout(timer); timer = setTimeout(() => next(lines), 700); };
  const v = voice();
  if (cfg.voice && v && !/^\[/.test(text)) { try { v.cancel(); const u = new SpeechSynthesisUtterance(text); u.rate = 0.92; u.pitch = 0.75; const pv = pickVoice(); if (pv) u.voice = pv; u.onend = go; u.onerror = go; v.speak(u); timer = setTimeout(go, fallback + 5000); return; } catch (e) { /* fall back to the timer */ } }
  timer = setTimeout(go, fallback);
}
export function stop() { on = false; clearTimeout(timer); const v = voice(); if (v) try { v.cancel(); } catch (e) { /* ignore */ } if (current) current.hidden = true; }
export const playing = () => on;
