/* The few icons the interface needs, drawn as solid shapes (no emoji, no icon-library look). Each is a 24px SVG that takes the text colour. */
const svg = (d) => `<svg class="ico" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false">${d}</svg>`;
export const ICONS = {
  battery: svg('<rect x="3" y="7" width="16" height="10" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><rect x="20" y="10" width="2" height="4" rx="1" fill="currentColor"/><rect x="5.5" y="9.5" width="7" height="5" fill="currentColor"/>'),
  charger: svg('<path d="M13 2 5 13h6l-1 9 9-12h-6z" fill="currentColor"/>'),
  spring: svg('<path d="M6 4h12M6 9h12M6 14h12M6 19h12" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><path d="M6 4q-3 2.5 0 5M18 9q3 2.5 0 5M6 14q-3 2.5 0 5" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>'),
  quick: svg('<path d="M12 3c-5 0-8 3.5-8 8 0 5 3 9 8 10 5-1 8-5 8-10 0-4.500-3-8-8-8z" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="9" cy="11" r="1.800" fill="currentColor"/><circle cx="15" cy="11" r="1.800" fill="currentColor"/><path d="M8.500 16q3.500 2 7 0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>'),
  charm: svg('<circle cx="8.500" cy="8.500" r="4" fill="currentColor"/><circle cx="15.500" cy="8.500" r="4" fill="currentColor"/><circle cx="8.500" cy="15.500" r="4" fill="currentColor"/><circle cx="15.500" cy="15.500" r="4" fill="currentColor"/><path d="M12 12l5 9" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>'),
  mask: svg('<path d="M12 3c-5 0-8 3.500-8 8 0 5 3 9 8 10 5-1 8-5 8-10 0-4.500-3-8-8-8z" fill="currentColor"/><circle cx="9" cy="11" r="1.800" fill="#0b0710"/><circle cx="15" cy="11" r="1.800" fill="#0b0710"/>'),
  light: svg('<rect x="3" y="9" width="10" height="6" rx="1.500" fill="currentColor"/><path d="M13 8.500 21 5v14l-8-3.500z" fill="currentColor"/>'),
  coin: '<i class="coin" role="img" aria-label="coins"></i>'
};
export const ic = (n) => ICONS[n] || '';
