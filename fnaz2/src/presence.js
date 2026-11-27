/* Discord Rich Presence from the desktop app. In the browser there is no window.fnaz, so this does nothing. */
const HOURS = ['12 AM', '1 AM', '2 AM', '3 AM', '4 AM', '5 AM', '6 AM'];
export function startPresence() {
  if (!window.fnaz || !window.fnaz.presence) return;
  const since = Date.now();
  const send = () => {
    const G = window.FNAZ2 && window.FNAZ2.G; if (!G) return;
    let details = 'In the menus', state = "Five Nights at Zayed's 2", party;
    if (G.mode === 'play' && G.S) {
      const hour = HOURS[Math.min(6, Math.floor(G.S.t / 80))];
      details = (G.opts && G.opts.coop ? 'Co-op · ' : '') + 'Night ' + G.S.night; state = G.paused ? 'Paused' : 'Surviving · ' + hour;
      if (G.opts && G.opts.coop) party = [2, 2];
    } else if (G.mode === 'dead') { details = 'Caught'; state = 'Night ' + (G.S && G.S.night || 1); }
    else if (G.mode === 'won') { details = 'Survived to 6 AM'; state = 'Night ' + (G.S && G.S.night || 1); }
    window.fnaz.presence({ details, state, since, party });
  };
  setTimeout(send, 3000); setInterval(send, 15000);
}
