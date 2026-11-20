import { cfg } from './settings.js';

/* The phone calls. Lore rules: the guard is Rashid; the Zayeds are one soul in four bodies (Camel patience, Cat nerve, Goat memory, Falcon hunger);
 * Abdulla's Cafeteria's phone line passed to Salem's Candy; Qerh Cooperations owns the place; the police arrive at six. */
export const CALLS = {
  1: ['Hello? Hello, yoo-hoo! Welcome to your first night at the new Zayed\'s, Rashid. I\'m the phone guy from Qerh Cooperations.',
    'You may have heard about the old place. Forget it. This is the new location. Brand new bodies. Shiny. Friendly.',
    'We took the doors away. Insurance reasons, and also a lot of broken hinges. Use your flashlight down the hall, and if anything walks in, put the Zayed mask on. They think you are one of them.',
    'The new bodies are called the Toys. The old ones are in Parts and Service. Do not go looking for them. Good luck.'],
  2: ['Hello! Night two. You made it. I\'m honestly relieved, the paperwork was getting heavy.',
    'Two air vents open into your office, left and right. Something small and fast will use them. Mask on when it arrives, and it will leave.',
    'The old bodies are awake now too. The Withered ones. The Falcon is the worst of them. He runs the hallway, and no mask will stop him. Light. Down the hall. Remember that.'],
  3: ['Hi, Rashid. A few things before you start.',
    'There is a music box in the Prize Corner. Wind it from the camera, hold the button, and keep it wound. It is not a toy. It belongs to someone named Ibrahim.',
    'Ibrahim is not one of the four. The Zayeds are one soul, split into four bodies: the Camel is the patience, the Cat is the nerve, the Goat is the memory, the Falcon is the hunger. Ibrahim is... somebody else. Nobody at Qerh Cooperations will say who.',
    'If the music stops, he comes out. Do not let it stop.'],
  4: ['Hello. Night four. Two things I was asked not to tell you.',
    'One: something new is crawling in the ceiling. Her name is Gelly. She uses the vents like a hallway. Mask works on her, but she will not leave quickly.',
    'Two: there is a little round one that laughs. Bidoof. He does not hurt anyone. He just breaks your flashlight, and that is worse. Put the mask on and he goes away.',
    'By the way, the old Abdulla\'s Cafeteria phone line still rings in this building. Same line as Salem\'s Candy. That is why the Falcon delivers. I hope you never hear it ring.'],
  5: ['Rashid. Almost there. I will be quick, I am being watched.',
    'I read the old police report. The cafeteria\'s file. Your name is in it. At Qerh Cooperations I am the one who handles files, and tonight I reopened yours.',
    'The soul that was split did not want to be split. Four bodies is a lot of anger to carry. Do not give it a reason.',
    'Last night is tomorrow. Whatever you hear at the door at six, do not open it for anyone.'],
  6: ['Hello? Yoo-hoo! It\'s me. I know, I said last night was the final night. I was wrong.',
    'The police will be outside at six. They are not coming for the Zayeds. The Falcon already knows, and so does the gold camel, Abdulla. He picks up whenever you call anyone.',
    'Now listen, because I will only say this once. Wait. Do you hear that? That is skates, on my office floor. No, no, wait. I am a claims adjuster. I just do the paperwork!',
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
