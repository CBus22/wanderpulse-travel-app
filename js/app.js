/* ==========================================================================
   WanderPulse — Unified Application Engine & Component Bundle
   ========================================================================== */

(function () {
  'use strict';

  // --- SVG Icon Library ---
  const SVG_ICONS = {
    'plane': `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.7 5.2c.3.4.8.5 1.3.3l.5-.3c.4-.2.6-.6.5-1.1z"/></svg>`,
    'map-pin': `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
    'calendar': `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>`,
    'plus-circle': `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="16"/><line x1="8" x2="16" y1="12" y2="12"/></svg>`,
    'database': `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`,
    'settings': `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>`,
    'user': `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
    'search': `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/></svg>`,
    'compass': `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>`,
    'plus': `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="5" y2="19"/><line x1="5" x2="19" y1="12" y2="12"/></svg>`,
    'trash-2': `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>`,
    'arrow-left': `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" x2="5" y1="12" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>`,
    'file-text': `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg>`,
    'clock': `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
    'check-square': `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>`,
    'dollar-sign': `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
    'map': `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21 3 6"/><line x1="9" x2="9" y1="3" y2="18"/><line x1="15" x2="15" y1="6" y2="21"/></svg>`,
    'share-2': `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>`,
    'sparkles': `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>`,
    'image': `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>`,
    'info': `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="16" y2="12"/><line x1="12" x2="12.01" y1="8" y2="8"/></svg>`,
    'building': `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>`,
    'notebook': `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 6h4"/><path d="M2 10h4"/><path d="M2 14h4"/><path d="M2 18h4"/><rect width="16" height="20" x="6" y="2" rx="2"/></svg>`,
    'star': `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
    'x': `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/></svg>`,
    'luggage': `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 20a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" x2="10" y1="12" y2="16"/><line x1="14" x2="14" y1="12" y2="16"/></svg>`,
    'shield-check': `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>`,
    'user-plus': `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" x2="19" y1="8" y2="14"/><line x1="16" x2="22" y1="11" y2="11"/></svg>`,
    'calculator': `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16" y1="14" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/></svg>`,
    'moon': `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`,
    'sun': `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`,
    'copy': `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>`,
    'cloud': `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19x-9c-2.5 0-4.5-2-4.5-4.5 0-2 1.3-3.7 3.2-4.2C7.7 7.7 10 5.5 13 5.5c2.7 0 5 1.8 5.7 4.3 1.8.3 3.3 1.8 3.3 3.7 0 2.5-2 4.5-4.5 4.5z"/></svg>`,
    'check-circle': `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
    'more-horizontal': `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>`,
    'edit': `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`
  };

  function icon(name, color = '') {
    const svg = SVG_ICONS[name] || `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>`;
    if (color) return svg.replace('<svg ', `<svg style="color: ${color};" `);
    return svg;
  }

  // --- Dynamic Destination Photo Resolver & Preset Library ---
  const PHOTO_LIBRARY_PRESETS = [
    // --- Beaches & Coastal ---
    { id: 'beach-1', name: 'Cancún & Maya Coast', category: 'beaches', url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80', keywords: ['cancun', 'cozumel', 'riviera maya', 'playa del carmen', 'caribbean'] },
    { id: 'beach-2', name: 'Miami South Beach', category: 'beaches', url: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80', keywords: ['miami', 'florida', 'key west', 'tampa', 'orlando', 'ocean'] },
    { id: 'beach-3', name: 'Bali Tropical Haven', category: 'beaches', url: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80', keywords: ['bali', 'indonesia', 'seminyak', 'ubud', 'lombok'] },
    { id: 'beach-4', name: 'Hawaii Ocean Sunset', category: 'beaches', url: 'https://images.unsplash.com/photo-1542259009477-d625272157b7?auto=format&fit=crop&w=1200&q=80', keywords: ['hawaii', 'honolulu', 'maui', 'oahu', 'kauai', 'waikiki'] },
    { id: 'beach-5', name: 'Phuket Emerald Island', category: 'beaches', url: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=1200&q=80', keywords: ['phuket', 'thailand', 'krabi', 'koh samui', 'phi phi'] },
    { id: 'beach-6', name: 'Cabo San Lucas Sunset', category: 'beaches', url: 'https://images.unsplash.com/photo-1512813195386-6cf811ad3542?auto=format&fit=crop&w=1200&q=80', keywords: ['cabo', 'los cabos', 'mexico', 'puerto vallarta', 'tulum', 'baja'] },
    { id: 'beach-7', name: 'Maldives Overwater Bungalow', category: 'beaches', url: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80', keywords: ['maldives', 'tahiti', 'bora bora', 'fiji', 'seychelles', 'bahamas', 'jamaica', 'punta cana', 'aruba', 'barbados'] },
    { id: 'beach-8', name: 'Amalfi Coast Villa', category: 'beaches', url: 'assets/images/amalfi.png', keywords: ['amalfi', 'positano', 'capri', 'naples', 'sorrento', 'italy coast'] },

    // --- Cities & Metropolis ---
    { id: 'city-1', name: 'Tokyo Shinjuku Skyline', category: 'cities', url: 'assets/images/tokyo.png', keywords: ['tokyo', 'japan', 'shinjuku', 'shibuya', 'kyoto', 'osaka'] },
    { id: 'city-2', name: 'Paris Eiffel Tower', category: 'cities', url: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80', keywords: ['paris', 'france', 'nice', 'lyon', 'eiffel'] },
    { id: 'city-3', name: 'New York Times Square', category: 'cities', url: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=1200&q=80', keywords: ['new york', 'nyc', 'manhattan', 'brooklyn'] },
    { id: 'city-4', name: 'London Big Ben', category: 'cities', url: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80', keywords: ['london', 'uk', 'england', 'manchester', 'edinburgh'] },
    { id: 'city-5', name: 'Dubai Skyscraper Horizon', category: 'cities', url: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80', keywords: ['dubai', 'uae', 'abu dhabi', 'burj khalifa'] },
    { id: 'city-6', name: 'Sydney Opera House', category: 'cities', url: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1200&q=80', keywords: ['sydney', 'australia', 'melbourne', 'brisbane'] },
    { id: 'city-7', name: 'Barcelona Sagrada Familia', category: 'cities', url: 'https://images.unsplash.com/photo-1583422409516-2895a771deda?auto=format&fit=crop&w=1200&q=80', keywords: ['barcelona', 'spain', 'madrid', 'seville', 'ibiza'] },
    { id: 'city-8', name: 'Amsterdam Romantic Canals', category: 'cities', url: 'https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=1200&q=80', keywords: ['amsterdam', 'netherlands', 'holland', 'rotterdam'] },
    { id: 'city-9', name: 'Las Vegas Strip Neon', category: 'cities', url: 'https://images.unsplash.com/photo-1581351123004-757df051db8e?auto=format&fit=crop&w=1200&q=80', keywords: ['las vegas', 'vegas', 'nevada', 'casino'] },
    { id: 'city-10', name: 'Chicago River & Towers', category: 'cities', url: 'https://images.unsplash.com/photo-1477959858617-67f30ac4ce78?auto=format&fit=crop&w=1200&q=80', keywords: ['chicago', 'illinois', 'windy city'] },

    // --- Nature & Mountains ---
    { id: 'nature-1', name: 'Swiss Alps Chalet', category: 'nature', url: 'assets/images/swiss.png', keywords: ['swiss', 'alps', 'switzerland', 'zermatt', 'matterhorn', 'ski', 'snow', 'mountains'] },
    { id: 'nature-2', name: 'Iceland Northern Lights', category: 'nature', url: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=1200&q=80', keywords: ['iceland', 'reykjavik', 'aurora', 'glacier', 'fjord'] },
    { id: 'nature-3', name: 'Yosemite National Park', category: 'nature', url: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=1200&q=80', keywords: ['yosemite', 'california', 'national park', 'hiking', 'redwoods'] },
    { id: 'nature-4', name: 'Grand Canyon Sunrise', category: 'nature', url: 'https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?auto=format&fit=crop&w=1200&q=80', keywords: ['grand canyon', 'arizona', 'utah', 'sedona', 'zion'] },
    { id: 'nature-5', name: 'Serengeti Safari', category: 'nature', url: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80', keywords: ['safari', 'africa', 'kenya', 'tanzania', 'south africa'] },

    // --- Culture & History ---
    { id: 'culture-1', name: 'Rome Colosseum Ancient', category: 'culture', url: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1200&q=80', keywords: ['rome', 'italy', 'florence', 'tuscany', 'colosseum'] },
    { id: 'culture-2', name: 'Santorini Sunset', category: 'culture', url: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80', keywords: ['santorini', 'greece', 'athens', 'mykonos', 'crete'] },
    { id: 'culture-3', name: 'Cairo Pyramids of Giza', category: 'culture', url: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=1200&q=80', keywords: ['cairo', 'egypt', 'pyramid', 'nile', 'luxor'] },
    { id: 'culture-4', name: 'Venice Waterways', category: 'culture', url: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1200&q=80', keywords: ['venice', 'gondola'] },

    // --- Adventure & Road Trips ---
    { id: 'adv-1', name: 'Scenic Coastal Highway', category: 'adventure', url: 'assets/images/hero.png', keywords: ['road trip', 'route 66', 'highway', 'drive', 'coastal', 'adventure'] },
    { id: 'adv-2', name: 'Sahara Desert Dunes', category: 'adventure', url: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80', keywords: ['desert', 'sahara', 'morocco', 'dunes'] },
    { id: 'adv-3', name: 'Luxury Ocean Cruise', category: 'adventure', url: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1200&q=80', keywords: ['cruise', 'ship', 'caribbean cruise', 'sailing', 'boat'] }
  ];

  function hashString(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = (hash << 5) - hash + str.charCodeAt(i);
      hash |= 0;
    }
    return Math.abs(hash);
  }

  function resolveDestinationPhoto(destinationText) {
    if (!destinationText || !destinationText.trim()) return 'assets/images/hero.png';
    const query = destinationText.toLowerCase().trim();

    // 1. Direct Keyword Match against curated library
    for (const preset of PHOTO_LIBRARY_PRESETS) {
      if (preset.keywords.some(k => query.includes(k))) {
        return preset.url;
      }
    }

    // 2. Deterministic Hash Picker for any unlisted destination (offset to avoid single repetitive fallback)
    const index = (hashString(query) % (PHOTO_LIBRARY_PRESETS.length - 1)) + 1;
    return PHOTO_LIBRARY_PRESETS[index]?.url || 'assets/images/hero.png';
  }

  // --- Storage ---
  const STORAGE_KEY = 'wanderpulse_trips_data_v6';
  const SETTINGS_KEY = 'wanderpulse_settings_v6';
  const PROFILE_KEY = 'wanderpulse_user_profile_v6';

  const defaultProfile = {
    name: 'Alex Rivers',
    avatar: 'AR',
    bio: 'Passionate globetrotter, photographer, & hiking enthusiast seeking authentic cultural experiences around the world.',
    currency: 'USD',
    homeAirport: 'JFK (New York)',
    passportCountry: 'United States',
    dietary: 'No restrictions',
    travelStyle: ['Solo Trekking', 'Cultural Discovery', 'Food & Photography']
  };

  const initialTrips = [
    {
      id: 'trip-1',
      title: 'Tokyo & Kyoto Autumn Odyssey',
      destination: 'Tokyo & Kyoto, Japan',
      startDate: '2026-10-15',
      endDate: '2026-10-25',
      status: 'upcoming',
      coverImage: 'assets/images/tokyo.png',
      budget: 4500,
      currency: 'USD',
      isPrivate: false,
      lat: 35.6762, lng: 139.6503,
      logistics: {
        flights: [
          { airline: 'Japan Airlines JL005', from: 'JFK (New York)', to: 'HND (Tokyo)', date: '2026-10-15 11:30 AM', confirmation: 'JAL-982173' }
        ],
        accommodations: [
          { name: 'Park Hyatt Tokyo', address: '3-7-1-2 Nishi-Shinjuku, Tokyo', checkIn: '2026-10-15', checkOut: '2026-10-19', confirmation: 'HTL-8831' }
        ],
        notes: 'Pick up Pocket Wi-Fi at Haneda Terminal 3.'
      },
      itinerary: [
        { id: 'it-1', day: 1, date: '2026-10-15', title: 'Arrival & Shinjuku Evening', time: '16:00', category: 'sightseeing', location: 'Shinjuku, Tokyo', notes: 'Explore Omoide Yokocho alleyways for ramen & yakitori.', lat: 35.6938, lng: 139.7034 }
      ],
      activities: [
        { id: 'act-1', title: 'TeamLab Planets Digital Art', category: 'Culture', status: 'Booked', cost: 110, duration: '2.5 hrs', rating: 4.9 }
      ],
      packingList: [
        { id: 'pack-1', category: 'Documents', item: 'Passport & Rail Pass', packed: true, assignee: 'Alex Rivers' }
      ],
      prepChecklist: [
        { id: 'prep-1', title: 'Passport Valid 6+ Months', completed: true }
      ],
      attendees: [
        { id: 'att-1', name: 'Alex Rivers', role: 'Organizer', avatar: 'AR', email: 'alex@example.com', rsvp: 'Confirmed' },
        { id: 'att-2', name: 'Elena Rostova', role: 'Co-planner', avatar: 'ER', email: 'elena@example.com', rsvp: 'Confirmed' }
      ],
      expenses: [
        { id: 'exp-1', title: 'Shinkansen Tickets', amount: 480, paidBy: 'Alex Rivers', category: 'Transit', date: '2026-10-10', splitWith: ['Alex Rivers', 'Elena Rostova'] }
      ]
    },
    {
      id: 'trip-2',
      title: 'Cancún Beach Resort Getaway',
      destination: 'Cancun, Mexico',
      startDate: '2026-11-01',
      endDate: '2026-11-07',
      status: 'upcoming',
      coverImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      budget: 3200,
      currency: 'USD',
      isPrivate: false,
      lat: 21.1619, lng: -86.8515,
      logistics: { flights: [], accommodations: [], notes: '' },
      itinerary: [], activities: [], packingList: [], prepChecklist: [],
      attendees: [
        { id: 'att-10', name: 'Alex Rivers', role: 'Organizer', avatar: 'AR', email: 'alex@example.com', rsvp: 'Confirmed' }
      ],
      expenses: []
    }
  ];

  class Store {
    constructor() {
      this.trips = this.loadTrips();
      this.settings = this.loadSettings();
      this.profile = this.loadProfile();
      this.currentTripId = this.trips[0]?.id || null;
    }
    loadTrips() {
      try {
        const d = localStorage.getItem(STORAGE_KEY);
        if (d) return JSON.parse(d);
      } catch (e) {}
      this.saveTrips(initialTrips);
      return initialTrips;
    }
    saveTrips(data = this.trips) {
      this.trips = data;
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(this.trips)); } catch (e) {}
    }
    loadSettings() {
      try {
        const d = localStorage.getItem(SETTINGS_KEY);
        if (d) return JSON.parse(d);
      } catch (e) {}
      return { theme: 'dark', supabaseUrl: '', supabaseKey: '', useCloud: false };
    }
    saveSettings(s) {
      this.settings = { ...this.settings, ...s };
      try { localStorage.setItem(SETTINGS_KEY, JSON.stringify(this.settings)); } catch (e) {}
    }
    loadProfile() {
      try {
        const d = localStorage.getItem(PROFILE_KEY);
        if (d) return JSON.parse(d);
      } catch (e) {}
      return defaultProfile;
    }
    saveProfile(p) {
      this.profile = { ...this.profile, ...p };
      try { localStorage.setItem(PROFILE_KEY, JSON.stringify(this.profile)); } catch (e) {}
    }
    getTrips() { return this.trips; }
    getCurrentTrip() { return this.trips.find(t => t.id === this.currentTripId) || this.trips[0] || null; }
    setCurrentTripId(id) { this.currentTripId = id; }
    
    addTrip(obj) {
      const today = new Date().toISOString().split('T')[0];
      const nextWeek = new Date(Date.now() + 7 * 86400000).toISOString().split('T')[0];

      // Dynamic resolution based on Destination OR Title if custom photo not manually selected
      const queryText = (obj.destination && obj.destination.trim()) ? obj.destination : obj.title;
      const autoCover = (obj.coverImage && obj.coverImage.trim()) ? obj.coverImage : resolveDestinationPhoto(queryText);
      const coords = resolveDestinationCoords(queryText);

      const newTrip = {
        id: 'trip-' + Date.now(),
        title: obj.title || 'My Travel Adventure',
        destination: obj.destination || 'Dream Destination',
        startDate: obj.startDate || today,
        endDate: obj.endDate || nextWeek,
        status: obj.status || 'upcoming',
        coverImage: autoCover,
        budget: parseFloat(obj.budget) || 1500,
        currency: 'USD',
        isPrivate: obj.isPrivate === 'true' || obj.isPrivate === true,
        lat: coords.lat, lng: coords.lng,
        logistics: { flights: [], accommodations: [], notes: '' },
        itinerary: [], activities: [],
        packingList: [
          { id: 'p-1', category: 'Essentials', item: 'Passport & Charger', packed: false, assignee: this.profile.name }
        ],
        prepChecklist: [
          { id: 'pr-1', title: 'Passport Valid 6+ Months', completed: false }
        ],
        attendees: [{ id: 'a-1', name: this.profile.name, role: 'Organizer', avatar: this.profile.avatar, email: '', rsvp: 'Confirmed' }],
        expenses: []
      };
      this.trips.unshift(newTrip);
      this.currentTripId = newTrip.id;
      this.saveTrips();
      return newTrip;
    }

    deleteTrip(id) {
      this.trips = this.trips.filter(t => t.id !== id);
      if (this.currentTripId === id) this.currentTripId = this.trips[0]?.id || null;
      this.saveTrips();
    }

    updateTrip(id, obj) {
      const trip = this.trips.find(t => t.id === id);
      if (trip) {
        if (obj.title !== undefined) trip.title = obj.title;
        if (obj.destination !== undefined) {
          trip.destination = obj.destination;
          const coords = resolveDestinationCoords(obj.destination || trip.title);
          trip.lat = coords.lat;
          trip.lng = coords.lng;
        }
        if (obj.startDate !== undefined) trip.startDate = obj.startDate;
        if (obj.endDate !== undefined) trip.endDate = obj.endDate;
        if (obj.coverImage !== undefined) trip.coverImage = obj.coverImage;
        if (obj.budget !== undefined) trip.budget = parseFloat(obj.budget) || 0;
        if (obj.isPrivate !== undefined) trip.isPrivate = (obj.isPrivate === 'true' || obj.isPrivate === true);
        if (obj.status !== undefined) trip.status = obj.status;
        this.saveTrips();
      }
      return trip;
    }

    addItineraryItem(tripId, item) {
      const t = this.trips.find(x => x.id === tripId);
      if (t) {
        t.itinerary.push({ id: 'it-' + Date.now(), ...item });
        t.itinerary.sort((a, b) => (a.day - b.day) || a.time.localeCompare(b.time));
        this.saveTrips();
      }
    }
    deleteItineraryItem(tripId, itemId) {
      const t = this.trips.find(x => x.id === tripId);
      if (t) { t.itinerary = t.itinerary.filter(i => i.id !== itemId); this.saveTrips(); }
    }

    addActivity(tripId, act) {
      const t = this.trips.find(x => x.id === tripId);
      if (t) { t.activities.push({ id: 'act-' + Date.now(), ...act }); this.saveTrips(); }
    }
    deleteActivity(tripId, actId) {
      const t = this.trips.find(x => x.id === tripId);
      if (t) { t.activities = t.activities.filter(a => a.id !== actId); this.saveTrips(); }
    }

    togglePackingItem(tripId, packId) {
      const t = this.trips.find(x => x.id === tripId);
      if (t) {
        const item = t.packingList.find(p => p.id === packId);
        if (item) { item.packed = !item.packed; this.saveTrips(); }
      }
    }
    addPackingItem(tripId, itemObj) {
      const t = this.trips.find(x => x.id === tripId);
      if (t) {
        t.packingList.push({
          id: 'pack-' + Date.now(),
          packed: false,
          quantity: itemObj.quantity || 1,
          bagTag: itemObj.bagTag || 'Carry-On',
          isEssential: itemObj.isEssential || false,
          category: itemObj.category || 'Clothing',
          assignee: itemObj.assignee || this.profile.name,
          ...itemObj
        });
        this.saveTrips();
      }
    }
    updatePackingQuantity(tripId, packId, delta) {
      const t = this.trips.find(x => x.id === tripId);
      if (t) {
        const item = t.packingList.find(p => p.id === packId);
        if (item) {
          item.quantity = Math.max(1, (parseInt(item.quantity) || 1) + delta);
          this.saveTrips();
        }
      }
    }
    deletePackingItem(tripId, packId) {
      const t = this.trips.find(x => x.id === tripId);
      if (t) {
        t.packingList = t.packingList.filter(p => p.id !== packId);
        this.saveTrips();
      }
    }
    togglePackingItemEssential(tripId, packId) {
      const t = this.trips.find(x => x.id === tripId);
      if (t) {
        const item = t.packingList.find(p => p.id === packId);
        if (item) {
          item.isEssential = !item.isEssential;
          this.saveTrips();
        }
      }
    }

    togglePrepItem(tripId, prepId) {
      const t = this.trips.find(x => x.id === tripId);
      if (t) {
        const item = t.prepChecklist.find(p => p.id === prepId);
        if (item) { item.completed = !item.completed; this.saveTrips(); }
      }
    }

    addAttendee(tripId, attendeeObj) {
      const t = this.trips.find(x => x.id === tripId);
      if (t) {
        const initials = attendeeObj.name ? attendeeObj.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2) : 'AT';
        t.attendees.push({ id: 'att-' + Date.now(), avatar: initials || 'AT', rsvp: 'Confirmed', ...attendeeObj });
        this.saveTrips();
      }
    }

    addExpense(tripId, expenseObj) {
      const t = this.trips.find(x => x.id === tripId);
      if (t) { t.expenses.push({ id: 'exp-' + Date.now(), date: new Date().toISOString().split('T')[0], ...expenseObj }); this.saveTrips(); }
    }
    deleteExpense(tripId, expId) {
      const t = this.trips.find(x => x.id === tripId);
      if (t) { t.expenses = t.expenses.filter(e => e.id !== expId); this.saveTrips(); }
    }
  }

  const appStore = new Store();

  function showToast(message, type = 'info') {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
      ${icon(type === 'success' ? 'check-circle' : 'info', type === 'success' ? 'var(--status-active)' : 'var(--accent-primary)')}
      <span>${message}</span>
    `;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.animation = 'slideOut 0.3s ease forwards';
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }

  // --- Views ---
  let currentView = 'dashboard';
  let currentFilter = 'all';
  let searchQuery = '';

  function renderDashboard(containerEl) {
    const trips = appStore.getTrips();
    const filteredTrips = trips.filter(t => {
      const matchesFilter = currentFilter === 'all' || t.status === currentFilter;
      const matchesSearch = t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            t.destination.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesFilter && matchesSearch;
    });

    const nextUpcomingTrip = trips.find(t => t.status === 'upcoming' || t.status === 'active') || trips[0];

    containerEl.innerHTML = `
      <section class="hero-banner">
        <div class="hero-banner-grid">
          <div class="hero-content">
            <span class="badge badge-upcoming" style="margin-bottom: 0.75rem;">${icon('plane')} Travel Workspace</span>
            <h1 class="hero-title">Your Next Unforgettable <span class="gradient-text">Adventure Awaits</span></h1>
            <p class="hero-subtitle">Organize travel details, day-by-day itineraries, group expenses, and packing checklists in one sleek dashboard.</p>
            <div style="display: flex; gap: 0.85rem; flex-wrap: wrap;">
              <button id="btn-create-trip" class="btn btn-primary">
                ${icon('plus-circle')} Create Travel Plan
              </button>
              <button id="btn-explore-destinations" class="btn btn-secondary">
                ${icon('compass')} Explore Destinations
              </button>
            </div>
          </div>

          ${nextUpcomingTrip ? `
            <div class="hero-countdown-card">
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem;">
                <span class="badge badge-upcoming" style="font-size: 0.7rem;">Upcoming Journey</span>
                <span style="font-size: 0.8rem; font-weight: 700; color: var(--accent-secondary);">${getDaysUntil(nextUpcomingTrip.startDate)}</span>
              </div>
              
              <div style="height: 110px; border-radius: var(--radius-md); overflow: hidden; margin-bottom: 0.75rem; position: relative;">
                <img src="${nextUpcomingTrip.coverImage}" alt="${nextUpcomingTrip.title}" style="width: 100%; height: 100%; object-fit: cover;" />
                <div style="position: absolute; bottom: 0.35rem; left: 0.35rem; background: rgba(0,0,0,0.7); backdrop-filter: blur(4px); padding: 0.2rem 0.5rem; border-radius: var(--radius-full); font-size: 0.7rem; color: #fff;">
                  📍 ${nextUpcomingTrip.destination}
                </div>
              </div>

              <h4 style="font-size: 0.95rem; margin-bottom: 0.25rem; text-overflow: ellipsis; overflow: hidden; white-space: nowrap;">${nextUpcomingTrip.title}</h4>
              <p style="font-size: 0.78rem; color: var(--text-secondary); margin-bottom: 0.85rem;">${formatDate(nextUpcomingTrip.startDate)} - ${formatDate(nextUpcomingTrip.endDate)}</p>

              <button class="btn btn-secondary btn-sm" id="btn-hero-jump-trip" data-id="${nextUpcomingTrip.id}" style="width: 100%; justify-content: center; font-size: 0.8rem;">
                View Trip Itinerary &rarr;
              </button>
            </div>
          ` : ''}
        </div>
      </section>

      <div class="filter-bar">
        <div class="tabs-group">
          <button class="tab-btn ${currentFilter === 'all' ? 'active' : ''}" data-filter="all">All Trips (${trips.length})</button>
          <button class="tab-btn ${currentFilter === 'upcoming' ? 'active' : ''}" data-filter="upcoming">Upcoming</button>
          <button class="tab-btn ${currentFilter === 'active' ? 'active' : ''}" data-filter="active">Active</button>
          <button class="tab-btn ${currentFilter === 'completed' ? 'active' : ''}" data-filter="completed">Completed</button>
          <button class="tab-btn ${currentFilter === 'draft' ? 'active' : ''}" data-filter="draft">Drafts</button>
        </div>

        <div class="search-box">
          ${icon('search', 'var(--text-muted)')}
          <input type="text" id="trip-search-input" placeholder="Search destination or trip..." value="${searchQuery}">
        </div>
      </div>

      ${filteredTrips.length === 0 ? `
        <div class="card" style="text-align: center; padding: 4rem 2rem;">
          <div style="margin-bottom: 1rem;">${icon('compass', 'var(--text-muted)')}</div>
          <h3>No travel projects found</h3>
          <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">Start planning your next getaway by creating your first trip.</p>
          <button id="btn-create-trip-empty" class="btn btn-primary">${icon('plus')} Create New Trip</button>
        </div>
      ` : `
        <div class="trips-grid">
          ${filteredTrips.map(trip => renderTripCard(trip)).join('')}
        </div>
      `}
    `;

    containerEl.querySelectorAll('.tab-btn[data-filter]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        currentFilter = e.currentTarget.getAttribute('data-filter');
        renderDashboard(containerEl);
      });
    });

    const searchInput = containerEl.querySelector('#trip-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        renderDashboard(containerEl);
      });
    }

    const createBtn = containerEl.querySelector('#btn-create-trip') || containerEl.querySelector('#btn-create-trip-empty');
    if (createBtn) createBtn.addEventListener('click', () => openCreateTripModal(false));

    const exploreBtn = containerEl.querySelector('#btn-explore-destinations');
    if (exploreBtn) exploreBtn.addEventListener('click', () => openCreateTripModal(false));

    const heroJumpBtn = containerEl.querySelector('#btn-hero-jump-trip');
    if (heroJumpBtn) {
      heroJumpBtn.addEventListener('click', () => {
        const id = heroJumpBtn.getAttribute('data-id');
        appStore.setCurrentTripId(id);
        currentView = 'trip-detail';
        renderCurrentView();
      });
    }

    containerEl.querySelectorAll('.trip-card[data-trip-id]').forEach(card => {
      card.addEventListener('click', (e) => {
        if (e.target.closest('.kebab-menu-container')) return;
        const tripId = card.getAttribute('data-trip-id');
        appStore.setCurrentTripId(tripId);
        currentView = 'trip-detail';
        renderCurrentView();
      });
    });

    // Wire Kebab Dropdown toggles & actions
    containerEl.querySelectorAll('.kebab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const parent = btn.closest('.kebab-menu-container');
        const dropdown = parent.querySelector('.kebab-dropdown');
        document.querySelectorAll('.kebab-dropdown').forEach(d => { if (d !== dropdown) d.classList.remove('active'); });
        dropdown.classList.toggle('active');
      });
    });

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.kebab-menu-container')) {
        document.querySelectorAll('.kebab-dropdown').forEach(d => d.classList.remove('active'));
      }
    });

    containerEl.querySelectorAll('.kebab-action-edit').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const tripId = btn.getAttribute('data-trip-id');
        const trip = appStore.getTrips().find(t => t.id === tripId);
        if (trip) openEditTripModal(trip);
      });
    });

    containerEl.querySelectorAll('.kebab-action-delete').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const tripId = btn.getAttribute('data-trip-id');
        if (confirm('Are you sure you want to delete this trip project?')) {
          appStore.deleteTrip(tripId);
          showToast('Trip deleted', 'info');
          renderDashboard(containerEl);
        }
      });
    });
  }

  function renderTripCard(trip) {
    const daysUntil = getDaysUntil(trip.startDate);
    return `
      <div class="card trip-card" data-trip-id="${trip.id}">
        <div class="trip-card-cover">
          <img src="${trip.coverImage}" alt="${trip.title}" class="trip-card-img" />
          <span class="badge badge-${trip.status} trip-card-badge">${trip.status}</span>
        </div>
        <div class="trip-card-body">
          <div style="display: flex; align-items: flex-start; justify-content: space-between; gap: 0.5rem;">
            <div>
              <h3 class="trip-card-title">${trip.title}</h3>
              <div class="trip-card-location">
                ${icon('map-pin', 'var(--accent-secondary)')}
                <span>${trip.destination}</span>
              </div>
            </div>

            <!-- Kebab Menu Trigger -->
            <div class="kebab-menu-container">
              <button class="kebab-btn" type="button" title="Trip Options">
                ${icon('more-horizontal')}
              </button>
              <div class="kebab-dropdown">
                <button class="kebab-item kebab-action-edit" data-trip-id="${trip.id}" type="button">
                  ${icon('edit')} Edit Details
                </button>
                <button class="kebab-item danger kebab-action-delete" data-trip-id="${trip.id}" type="button">
                  ${icon('trash-2')} Delete Trip
                </button>
              </div>
            </div>
          </div>
          
          <div style="margin-top: 0.5rem; margin-bottom: 0.85rem; display: flex; align-items: center; justify-content: space-between;">
            <div class="trip-card-dates">
              ${icon('calendar', 'var(--text-muted)')}
              <span>${formatDate(trip.startDate)} - ${formatDate(trip.endDate)}</span>
            </div>
            <div class="trip-card-countdown-tag">
              ${daysUntil}
            </div>
          </div>

          <div class="trip-card-meta">
            <div class="avatars-group">
              ${trip.attendees.slice(0, 4).map(att => `<div class="avatar" title="${att.name}">${att.avatar}</div>`).join('')}
              ${trip.attendees.length > 4 ? `<div class="avatar">+${trip.attendees.length - 4}</div>` : ''}
            </div>
            <div style="font-weight: 700; color: var(--text-primary);">
              $${trip.budget ? trip.budget.toLocaleString() : '0'} ${trip.currency}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // --- Personal Space View ---
  function renderPersonalSpace(containerEl) {
    const profile = appStore.loadProfile();
    const trips = appStore.getTrips();

    const privateTrips = trips.filter(t => t.isPrivate || t.attendees.length <= 1);
    const groupTrips = trips.filter(t => !t.isPrivate && t.attendees.length > 1);

    containerEl.innerHTML = `
      <div class="nav-back-btn" id="btn-back-dash-from-space">
        ${icon('arrow-left')}
        <span>Back to Main Dashboard</span>
      </div>

      <div class="profile-card">
        <div class="profile-avatar-large">${profile.avatar}</div>
        <div style="flex: 1;">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 1rem;">
            <div>
              <h1 style="font-size: 2rem; margin-bottom: 0.35rem;">${profile.name}</h1>
              <p style="color: var(--text-secondary); max-width: 600px; margin-bottom: 1rem; font-size: 0.95rem;">${profile.bio}</p>
            </div>
            <button class="btn btn-secondary btn-sm" id="btn-edit-profile">
              ${icon('settings')} Edit Profile & Preferences
            </button>
          </div>

          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
            ${(profile.travelStyle || []).map(style => `
              <span class="badge" style="background: rgba(99, 102, 241, 0.15); color: var(--accent-primary); border: 1px solid rgba(99, 102, 241, 0.3);">
                ${style}
              </span>
            `).join('')}
          </div>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.25rem; margin-bottom: 2.5rem;">
        <div class="stat-card">
          <div class="stat-label">Home Airport</div>
          <div class="stat-value" style="font-size: 1.2rem; color: var(--accent-primary);">${profile.homeAirport || 'JFK'}</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">Preferred Currency</div>
          <div class="stat-value" style="font-size: 1.2rem; color: var(--status-active);">${profile.currency || 'USD'}</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">Passport Nationality</div>
          <div class="stat-value" style="font-size: 1.2rem; color: var(--text-primary);">${profile.passportCountry || 'United States'}</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">Dietary Preferences</div>
          <div class="stat-value" style="font-size: 1.2rem; color: var(--accent-secondary);">${profile.dietary || 'None'}</div>
        </div>
      </div>

      <div style="margin-bottom: 3rem;">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem;">
          <h2>🔒 Private Personal Trips (${privateTrips.length})</h2>
          <button class="btn btn-primary btn-sm" id="btn-create-private-trip">
            ${icon('plus')} New Private Trip
          </button>
        </div>

        ${privateTrips.length === 0 ? `
          <div class="card" style="text-align: center; padding: 2rem;">
            <p style="color: var(--text-muted);">No private personal trips created yet.</p>
          </div>
        ` : `
          <div class="trips-grid">
            ${privateTrips.map(trip => renderTripCard(trip)).join('')}
          </div>
        `}
      </div>

      <div style="margin-bottom: 3rem;">
        <h2>👥 Shared Group Trips (${groupTrips.length})</h2>
        <p style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 1.25rem;">Trips with friends and collaborators.</p>

        ${groupTrips.length === 0 ? `
          <div class="card" style="text-align: center; padding: 2rem;">
            <p style="color: var(--text-muted);">No shared group trips active.</p>
          </div>
        ` : `
          <div class="trips-grid">
            ${groupTrips.map(trip => renderTripCard(trip)).join('')}
          </div>
        `}
      </div>
    `;

    containerEl.querySelector('#btn-back-dash-from-space').addEventListener('click', () => {
      currentView = 'dashboard';
      renderCurrentView();
    });

    containerEl.querySelector('#btn-edit-profile').addEventListener('click', openEditProfileModal);
    containerEl.querySelector('#btn-create-private-trip')?.addEventListener('click', () => openCreateTripModal(true));

    containerEl.querySelectorAll('.trip-card[data-trip-id]').forEach(card => {
      card.addEventListener('click', (e) => {
        if (e.target.closest('.btn-delete-trip')) return;
        const tripId = card.getAttribute('data-trip-id');
        appStore.setCurrentTripId(tripId);
        currentView = 'trip-detail';
        renderCurrentView();
      });
    });
  }

  let activeSubTab = 'itinerary';

  function renderTripDetail(containerEl) {
    const trip = appStore.getCurrentTrip();
    if (!trip) {
      currentView = 'dashboard';
      renderCurrentView();
      return;
    }

    containerEl.innerHTML = `
      <div class="nav-back-btn" id="btn-back-dash">
        ${icon('arrow-left')}
        <span>Back to All Travel Plans</span>
      </div>

      <div class="trip-detail-header">
        <img src="${trip.coverImage}" alt="${trip.title}" class="trip-banner-img" />
        <div class="trip-banner-overlay">
          <div class="trip-header-info">
            <div>
              <span class="badge badge-${trip.status}" style="margin-bottom: 0.5rem;">${trip.status}</span>
              <h1 style="font-size: 2.2rem; margin-bottom: 0.25rem;">${trip.title}</h1>
              <p style="color: var(--text-secondary); display: flex; align-items: center; gap: 0.5rem; font-size: 0.95rem;">
                ${icon('map-pin', 'var(--accent-secondary)')} ${trip.destination}
                <span style="margin: 0 0.4rem;">•</span>
                ${icon('calendar', 'var(--text-muted)')} ${formatDate(trip.startDate)} - ${formatDate(trip.endDate)}
              </p>
            </div>
            <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; align-items: center;">
              <button class="btn btn-primary btn-sm" id="btn-invite-collaborator">
                ${icon('share-2')} Invite Collaborators
              </button>
              <button class="btn btn-secondary btn-sm" id="btn-edit-trip-info">
                ${icon('edit')} Edit Trip & Photo
              </button>
              <button class="btn btn-secondary btn-sm" id="btn-open-logistics">
                ${icon('file-text')} Logistics & Notes
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="trip-detail-tabs">
        <button class="detail-tab ${activeSubTab === 'itinerary' ? 'active' : ''}" data-tab="itinerary">
          ${icon('clock')} Itinerary Timeline
        </button>
        <button class="detail-tab ${activeSubTab === 'activities' ? 'active' : ''}" data-tab="activities">
          ${icon('compass')} Activities (${trip.activities.length})
        </button>
        <button class="detail-tab ${activeSubTab === 'packing' ? 'active' : ''}" data-tab="packing">
          ${icon('check-square')} Packing & Prep
        </button>
        <button class="detail-tab ${activeSubTab === 'expenses' ? 'active' : ''}" data-tab="expenses">
          ${icon('dollar-sign')} Attendees & Expenses
        </button>
        <button class="detail-tab ${activeSubTab === 'map' ? 'active' : ''}" data-tab="map">
          ${icon('map')} Interactive Map
        </button>
        <button class="detail-tab ${activeSubTab === 'logistics' ? 'active' : ''}" data-tab="logistics">
          ${icon('info')} Flights & Hotels
        </button>
      </div>

      <div id="subtab-pane"></div>
    `;

    containerEl.querySelector('#btn-back-dash').addEventListener('click', () => {
      currentView = 'dashboard';
      renderCurrentView();
    });

    const editBtn = containerEl.querySelector('#btn-edit-trip-info');
    if (editBtn) {
      editBtn.addEventListener('click', () => {
        openEditTripModal(trip);
      });
    }

    containerEl.querySelector('#btn-invite-collaborator').addEventListener('click', () => {
      openInviteModal(trip);
    });

    containerEl.querySelector('#btn-open-logistics').addEventListener('click', () => {
      activeSubTab = 'logistics';
      renderTripDetail(containerEl);
    });

    containerEl.querySelectorAll('.detail-tab').forEach(tabBtn => {
      tabBtn.addEventListener('click', (e) => {
        activeSubTab = e.currentTarget.getAttribute('data-tab');
        renderTripDetail(containerEl);
      });
    });

    const pane = containerEl.querySelector('#subtab-pane');
    if (activeSubTab === 'itinerary') renderItineraryPane(pane, trip);
    else if (activeSubTab === 'activities') renderActivitiesPane(pane, trip);
    else if (activeSubTab === 'packing') renderPackingPane(pane, trip);
    else if (activeSubTab === 'expenses') renderExpensesPane(pane, trip);
    else if (activeSubTab === 'map') renderMapPane(pane, trip);
    else if (activeSubTab === 'logistics') renderLogisticsPane(pane, trip);
  }

  // --- Sub-tab Panes ---
  function renderItineraryPane(container, trip) {
    const itinerary = trip.itinerary || [];
    const daysMap = {};
    
    // Default at least Day 1 if empty
    if (itinerary.length === 0) {
      daysMap[1] = [];
    } else {
      itinerary.forEach(item => {
        const d = item.day || 1;
        if (!daysMap[d]) daysMap[d] = [];
        daysMap[d].push(item);
      });
    }

    const dayNumbers = Object.keys(daysMap).map(Number).sort((a, b) => a - b);

    const weatherPresets = [
      '☀️ 74°F Sunny', '⛅ 71°F Partly Cloudy', '🌤️ 75°F Clear & Warm',
      '🌧️ 68°F Light Rain', '☀️ 77°F Golden Hour', '🌤️ 72°F Breezy'
    ];

    function getNodeDetails(category = '') {
      const cat = (category || '').toLowerCase();
      if (cat.includes('transit') || cat.includes('flight') || cat.includes('drive')) return { nodeClass: 'node-transit', iconName: 'plane', label: 'Transit' };
      if (cat.includes('lodging') || cat.includes('hotel') || cat.includes('stay')) return { nodeClass: 'node-lodging', iconName: 'building', label: 'Lodging' };
      if (cat.includes('dining') || cat.includes('food') || cat.includes('meal') || cat.includes('restaurant')) return { nodeClass: 'node-dining', iconName: 'star', label: 'Dining' };
      if (cat.includes('culture') || cat.includes('sightseeing') || cat.includes('art') || cat.includes('museum')) return { nodeClass: 'node-culture', iconName: 'sparkles', label: 'Culture' };
      return { nodeClass: 'node-activity', iconName: 'compass', label: 'Activity' };
    }

    function calculateDayHours(items) {
      if (!items || items.length === 0) return '0 hrs';
      return `${(items.length * 1.5).toFixed(1)} hrs scheduled`;
    }

    container.innerHTML = `
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem;">
        <div>
          <h2>Day-by-Day Itinerary Timeline</h2>
          <p style="color: var(--text-secondary); font-size: 0.9rem;">Chronological timeline, real-time conflict warnings, and transit buffers.</p>
        </div>
        <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
          <button class="btn btn-secondary" id="btn-open-bucket-drawer">
            🎒 Bucket List (${(trip.activities || []).length})
          </button>
          <button class="btn btn-primary" id="btn-add-itinerary">
            ${icon('plus')} Add Event
          </button>
        </div>
      </div>

      <div class="itinerary-split-grid">
        <!-- Left Rail Sticky Day Navigation -->
        <aside class="itinerary-day-rail">
          <div style="font-size: 0.75rem; font-weight: 800; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em; padding: 0.25rem 0.5rem; display: flex; align-items: center; justify-content: space-between;">
            <span>Day Anchors</span>
            <span>${dayNumbers.length} Days</span>
          </div>

          ${dayNumbers.map((dayNum, idx) => {
            const itemsCount = (daysMap[dayNum] || []).length;
            const weather = weatherPresets[idx % weatherPresets.length];
            const hoursStr = calculateDayHours(daysMap[dayNum]);
            return `
              <button class="day-anchor-btn ${idx === 0 ? 'active' : ''}" data-day="${dayNum}">
                <div class="day-anchor-title">Day ${dayNum} • ${formatDate(trip.startDate)}</div>
                <div class="day-anchor-weather">${weather}</div>
                <div class="day-anchor-stats">${itemsCount} events • ${hoursStr}</div>
              </button>
            `;
          }).join('')}
        </aside>

        <!-- Right Main Timeline Feed -->
        <main class="itinerary-main-feed">
          ${dayNumbers.map((dayNum, idx) => {
            const dayItems = daysMap[dayNum] || [];
            const weather = weatherPresets[idx % weatherPresets.length];
            
            // Conflict detector pass
            const processedItems = dayItems.map((item, i) => {
              const prev = dayItems[i - 1];
              const isConflict = prev && (prev.time === item.time);
              return { ...item, isConflict, conflictWith: isConflict ? prev.title : null };
            });

            return `
              <section id="day-section-${dayNum}" style="margin-bottom: 3rem; scroll-margin-top: 100px;">
                <!-- Day Section Sticky Header -->
                <div class="card" style="padding: 1rem 1.25rem; margin-bottom: 1rem; border-color: var(--border-glow); background: var(--bg-secondary); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.75rem;">
                  <div style="display: flex; align-items: center; gap: 0.85rem;">
                    <span style="background: var(--accent-gradient); color: #fff; padding: 0.35rem 0.85rem; border-radius: var(--radius-full); font-weight: 800; font-size: 0.9rem;">
                      Day ${dayNum}
                    </span>
                    <div>
                      <strong style="font-size: 1.1rem; color: var(--text-primary);">Day ${dayNum} Schedule</strong>
                      <div style="font-size: 0.8rem; color: var(--accent-secondary); display: flex; align-items: center; gap: 0.5rem;">
                        <span>${weather}</span>
                        <span>•</span>
                        <span>${dayItems.length} planned events</span>
                      </div>
                    </div>
                  </div>

                  <button class="btn btn-secondary btn-sm btn-quick-add-day" data-day="${dayNum}">
                    ${icon('plus')} Add to Day ${dayNum}
                  </button>
                </div>

                ${dayItems.length === 0 ? `
                  <div class="empty-canvas-container">
                    <div style="font-weight: 800; color: var(--accent-primary); font-size: 0.85rem; letter-spacing: 0.05em; text-transform: uppercase; margin-bottom: 0.5rem;">
                      Day ${dayNum} — Empty Canvas
                    </div>
                    <h4 style="font-size: 1.2rem; margin-bottom: 0.5rem;">No events scheduled for Day ${dayNum}</h4>
                    <p style="color: var(--text-secondary); max-width: 480px; margin: 0 auto 1rem auto; font-size: 0.85rem;">
                      Add a flight, hotel check-in, or bucket list activity to build this day's itinerary.
                    </p>
                    <div class="empty-chips-group">
                      <button class="action-chip" data-day="${dayNum}" data-cat="transit">✈️ + Add Flight</button>
                      <button class="action-chip" data-day="${dayNum}" data-cat="lodging">🏨 + Add Lodging</button>
                      <button class="action-chip" data-day="${dayNum}" data-cat="activity">🎟️ + Add Activity</button>
                      <button class="action-chip" data-day="${dayNum}" data-cat="dining">🍽️ + Add Meal</button>
                    </div>
                  </div>
                ` : `
                  <div class="time-spine">
                    ${processedItems.map((item, itemIdx) => {
                      const node = getNodeDetails(item.category);
                      const prevItem = processedItems[itemIdx - 1];

                      return `
                        ${prevItem ? `
                          <!-- Transit Buffer Pill -->
                          <div class="transit-buffer-pill">
                            🚘 ~${20 + (itemIdx * 5)} min estimated transit between <strong>${prevItem.title}</strong> &amp; <strong>${item.title}</strong>
                          </div>
                        ` : ''}

                        <!-- Inline Insert Divider (Before Card) -->
                        <div class="inline-insert-divider btn-inline-insert" data-day="${dayNum}" data-time="${item.time}">
                          <div class="inline-insert-line"></div>
                          <button class="inline-insert-btn" type="button">+ Insert Event</button>
                          <div class="inline-insert-line"></div>
                        </div>

                        <!-- Spine Event Card -->
                        <div class="spine-card ${item.isConflict ? 'conflict-alert' : ''}">
                          <!-- Color Coded Spine Node -->
                          <div class="spine-node ${node.nodeClass}" title="${node.label}">
                            ${icon(node.iconName)}
                          </div>

                          <div style="display: flex; align-items: flex-start; justify-content: space-between; gap: 0.75rem;">
                            <div style="flex: 1;">
                              <!-- Header: Time & Badges -->
                              <div style="display: flex; align-items: center; gap: 0.65rem; flex-wrap: wrap; margin-bottom: 0.4rem;">
                                <span style="font-weight: 800; font-size: 0.95rem; color: var(--accent-secondary);">${item.time || '09:00'}</span>
                                <span class="badge" style="background: rgba(255,255,255,0.06); color: var(--text-secondary); border: 1px solid var(--border-color); font-size: 0.7rem;">
                                  ⏱️ 1h 30m duration
                                </span>
                                <span class="badge" style="background: rgba(99, 102, 241, 0.15); color: var(--accent-primary); border: 1px solid rgba(99, 102, 241, 0.3);">
                                  ${item.category || 'Sightseeing'}
                                </span>
                                ${item.isConflict ? `
                                  <span class="badge" style="background: rgba(245, 158, 11, 0.2); color: #f59e0b; border: 1px solid rgba(245, 158, 11, 0.4);">
                                    ⚠️ Time overlap with ${item.conflictWith}
                                  </span>
                                ` : ''}
                              </div>

                              <h4 style="font-size: 1.15rem; color: var(--text-primary); margin-bottom: 0.35rem;">${item.title}</h4>

                              ${item.location ? `
                                <div style="margin-bottom: 0.4rem; font-size: 0.85rem; color: var(--text-secondary); display: flex; align-items: center; gap: 0.4rem; flex-wrap: wrap;">
                                  ${icon('map-pin', 'var(--accent-primary)')}
                                  <span>${item.location}</span>
                                  <a href="https://maps.google.com/?q=${encodeURIComponent(item.location)}" target="_blank" style="color: var(--accent-primary); font-weight: 600; font-size: 0.8rem; text-decoration: none;">
                                    Google Maps &rarr;
                                  </a>
                                </div>
                              ` : ''}

                              ${item.notes ? `
                                <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 0.75rem;">${item.notes}</p>
                              ` : ''}

                              <!-- Card Footer Metadata -->
                              <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 0.75rem; padding-top: 0.6rem; border-top: 1px solid rgba(255,255,255,0.06); font-size: 0.8rem; color: var(--text-muted);">
                                <div class="avatars-group">
                                  ${trip.attendees.slice(0, 3).map(a => `<div class="avatar" title="${a.name}">${a.avatar}</div>`).join('')}
                                </div>
                                <span style="font-weight: 700; color: var(--text-primary);">$45 / person</span>
                              </div>
                            </div>

                            <!-- Card Action Buttons -->
                            <div style="display: flex; flex-direction: column; gap: 0.35rem;">
                              <button class="btn btn-icon-only btn-secondary btn-del-it" data-id="${item.id}" title="Remove Event">
                                ${icon('trash-2', '#ef4444')}
                              </button>
                            </div>
                          </div>
                        </div>
                      `;
                    }).join('')}

                    <!-- End of Day Inline Insert -->
                    <div class="inline-insert-divider btn-inline-insert" data-day="${dayNum}">
                      <div class="inline-insert-line"></div>
                      <button class="inline-insert-btn" type="button">+ Insert Event to Day ${dayNum}</button>
                      <div class="inline-insert-line"></div>
                    </div>
                  </div>
                `}
              </section>
            `;
          }).join('')}
        </main>
      </div>
    `;

    // --- Wire Event Listeners ---
    container.querySelector('#btn-add-itinerary')?.addEventListener('click', () => openAddItineraryModal(trip));
    container.querySelector('#btn-open-bucket-drawer')?.addEventListener('click', () => openBucketListDrawer(trip));

    // Day Anchor smooth scrolling
    container.querySelectorAll('.day-anchor-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        container.querySelectorAll('.day-anchor-btn').forEach(b => b.classList.remove('active'));
        e.currentTarget.classList.add('active');
        const dayNum = e.currentTarget.getAttribute('data-day');
        const sec = container.querySelector(`#day-section-${dayNum}`);
        if (sec) sec.scrollIntoView({ behavior: 'smooth' });
      });
    });

    container.querySelectorAll('.btn-quick-add-day').forEach(btn => {
      btn.addEventListener('click', () => {
        const d = parseInt(btn.getAttribute('data-day')) || 1;
        openAddItineraryModal(trip, 'sightseeing', d);
      });
    });

    container.querySelectorAll('.action-chip[data-cat]').forEach(chip => {
      chip.addEventListener('click', () => {
        const cat = chip.getAttribute('data-cat');
        const dayNum = parseInt(chip.getAttribute('data-day')) || 1;
        openAddItineraryModal(trip, cat, dayNum);
      });
    });

    container.querySelectorAll('.btn-inline-insert').forEach(btn => {
      btn.addEventListener('click', () => {
        const dayNum = parseInt(btn.getAttribute('data-day')) || 1;
        openAddItineraryModal(trip, 'sightseeing', dayNum);
      });
    });

    container.querySelectorAll('.btn-del-it').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        appStore.deleteItineraryItem(trip.id, id);
        showToast('Itinerary event removed', 'info');
        renderItineraryPane(container, appStore.getCurrentTrip());
      });
    });
  }

  // --- Unscheduled Bucket List Drawer ---
  function openBucketListDrawer(trip) {
    const activities = trip.activities || [];
    const html = `
      <div class="bucket-drawer-overlay active" id="bucket-drawer">
        <div class="bucket-drawer-content">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem; border-bottom: 1px solid var(--border-color); padding-bottom: 1rem;">
            <h3>🎒 Bucket List & Ideas</h3>
            <button class="btn btn-icon-only btn-secondary close-drawer" type="button">&times;</button>
          </div>

          <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 1.25rem;">
            Unassigned activity ideas! Click <strong>+ Assign</strong> to place any idea directly onto your day-by-day itinerary.
          </p>

          ${activities.length === 0 ? `
            <div style="text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
              ${icon('compass')}
              <p style="margin-top: 0.5rem; font-size: 0.9rem;">No bucket list items added yet. Add activities from the Activities tab!</p>
            </div>
          ` : `
            <div style="display: flex; flex-direction: column; gap: 0.85rem; flex: 1; overflow-y: auto;">
              ${activities.map(act => `
                <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1rem;">
                  <div style="display: flex; align-items: flex-start; justify-content: space-between; gap: 0.5rem; margin-bottom: 0.4rem;">
                    <strong style="font-size: 0.95rem; color: var(--text-primary);">${act.title}</strong>
                    <span class="badge" style="background: rgba(99, 102, 241, 0.15); color: var(--accent-primary); font-size: 0.7rem;">${act.category}</span>
                  </div>
                  <div style="font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 0.75rem;">
                    Cost: $${act.cost || 0} • Duration: ${act.duration || '1.5 hrs'}
                  </div>
                  <div style="display: flex; gap: 0.5rem;">
                    <button class="btn btn-primary btn-sm btn-assign-act" data-title="${act.title}" data-cat="${act.category}" style="flex: 1; font-size: 0.78rem;">
                      + Assign to Day 1
                    </button>
                    <button class="btn btn-secondary btn-sm btn-assign-act-d2" data-title="${act.title}" data-cat="${act.category}" style="flex: 1; font-size: 0.78rem;">
                      + Assign to Day 2
                    </button>
                  </div>
                </div>
              `).join('')}
            </div>
          `}

          <div style="margin-top: 1.5rem; border-top: 1px solid var(--border-color); padding-top: 1rem;">
            <button class="btn btn-secondary close-drawer" style="width: 100%;">Close Drawer</button>
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', html);
    const drawer = document.getElementById('bucket-drawer');
    const close = () => drawer.remove();
    drawer.querySelectorAll('.close-drawer').forEach(b => b.onclick = close);

    drawer.querySelectorAll('.btn-assign-act').forEach(btn => {
      btn.addEventListener('click', () => {
        const title = btn.getAttribute('data-title');
        const cat = btn.getAttribute('data-cat');
        appStore.addItineraryItem(trip.id, {
          day: 1,
          time: '10:00',
          title: title,
          category: cat || 'sightseeing',
          location: trip.destination,
          notes: 'Assigned from Bucket List'
        });
        close();
        showToast(`Assigned "${title}" to Day 1!`, 'success');
        renderCurrentView();
      });
    });

    drawer.querySelectorAll('.btn-assign-act-d2').forEach(btn => {
      btn.addEventListener('click', () => {
        const title = btn.getAttribute('data-title');
        const cat = btn.getAttribute('data-cat');
        appStore.addItineraryItem(trip.id, {
          day: 2,
          time: '14:00',
          title: title,
          category: cat || 'sightseeing',
          location: trip.destination,
          notes: 'Assigned from Bucket List'
        });
        close();
        showToast(`Assigned "${title}" to Day 2!`, 'success');
        renderCurrentView();
      });
    });
  }

  function renderActivitiesPane(container, trip) {
    const activities = trip.activities || [];
    container.innerHTML = `
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem;">
        <div>
          <h2>Trip Activities & Experiences</h2>
          <p style="color: var(--text-secondary); font-size: 0.9rem;">Keep track of bucket list ideas, booked tours, and activity costs.</p>
        </div>
        <button class="btn btn-primary" id="btn-add-act">
          ${icon('plus')} Add Activity
        </button>
      </div>

      ${activities.length === 0 ? `
        <div class="card" style="text-align: center; padding: 3rem;">
          <div style="margin-bottom: 1rem;">${icon('compass', 'var(--text-muted)')}</div>
          <h3>No activities added yet</h3>
          <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">Add museum visits, hikes, food tours, or boat charters to your trip.</p>
        </div>
      ` : `
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 1.5rem;">
          ${activities.map(act => `
            <div class="card" style="display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.75rem;">
                  <span class="badge ${act.status === 'Booked' ? 'badge-active' : 'badge-upcoming'}">${act.status}</span>
                  <span style="font-weight: 700; color: var(--accent-secondary); font-size: 1.1rem;">$${act.cost || 0}</span>
                </div>
                <h3 style="font-size: 1.2rem; margin-bottom: 0.4rem;">${act.title}</h3>
                <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.75rem;">
                  Category: <strong>${act.category}</strong> • Duration: <strong>${act.duration || 'N/A'}</strong>
                </p>
                <p style="font-size: 0.9rem; color: var(--text-muted);">${act.notes || ''}</p>
              </div>
              <div style="margin-top: 1.25rem; padding-top: 0.75rem; border-top: 1px solid var(--border-color); display: flex; justify-content: space-between; align-items: center;">
                <span style="font-size: 0.85rem; color: #f59e0b; font-weight: 700; display: flex; align-items: center; gap: 0.25rem;">
                  ${icon('star')} ${act.rating || 4.8}
                </span>
                <button class="btn btn-icon-only btn-secondary btn-del-act" data-id="${act.id}">
                  ${icon('trash-2', '#ef4444')}
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      `}
    `;

    container.querySelector('#btn-add-act')?.addEventListener('click', () => openAddActivityModal(trip));

    container.querySelectorAll('.btn-del-act').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        appStore.deleteActivity(trip.id, id);
        showToast('Activity removed', 'info');
        renderActivitiesPane(container, appStore.getCurrentTrip());
      });
    });
  }

  function parseNaturalLanguagePackingInput(rawText) {
    let text = (rawText || '').trim();
    let quantity = 1;
    let bagTag = 'Carry-On';
    let isEssential = false;

    const qtyMatchEnd = text.match(/\s+x\s*(\d+)$/i);
    const qtyMatchFront = text.match(/^(\d+)\s*x\s+/i);
    const qtyMatchParen = text.match(/\((\d+)\)$/);

    if (qtyMatchEnd) {
      quantity = parseInt(qtyMatchEnd[1]) || 1;
      text = text.replace(/\s+x\s*(\d+)$/i, '').trim();
    } else if (qtyMatchFront) {
      quantity = parseInt(qtyMatchFront[1]) || 1;
      text = text.replace(/^(\d+)\s*x\s+/i, '').trim();
    } else if (qtyMatchParen) {
      quantity = parseInt(qtyMatchParen[1]) || 1;
      text = text.replace(/\((\d+)\)$/, '').trim();
    }

    const lower = text.toLowerCase();
    if (lower.includes('passport') || lower.includes('license') || lower.includes('permit') || lower.includes('ticket') || lower.includes('visa') || lower.includes('id') || lower.includes('wallet')) {
      isEssential = true;
      bagTag = 'Carry-On';
    } else if (lower.includes('boot') || lower.includes('jacket') || lower.includes('coat') || lower.includes('shampoo') || lower.includes('sleeping bag') || lower.includes('suit')) {
      bagTag = 'Checked';
    } else if (lower.includes('charger') || lower.includes('camera') || lower.includes('phone') || lower.includes('headphones') || lower.includes('snack')) {
      bagTag = 'Daypack';
    }

    return { item: text, quantity, bagTag, isEssential };
  }

  function openPackingTemplateModal(trip) {
    const templates = [
      {
        id: 'hiking',
        title: '🎒 National Park & Hiking Weekend',
        desc: 'Essential trail gear, layers, navigation, and park permit documentation.',
        items: [
          { item: 'Waterproof Trail Hiking Boots', category: 'Clothing', quantity: 1, bagTag: 'Checked', isEssential: true },
          { item: 'Thermal Base Layer Tops', category: 'Clothing', quantity: 2, bagTag: 'Checked', isEssential: false },
          { item: 'Compact Wind & Rain Shell', category: 'Clothing', quantity: 1, bagTag: 'Daypack', isEssential: true },
          { item: 'Headlamp & Spare Batteries', category: 'Tech', quantity: 1, bagTag: 'Daypack', isEssential: true },
          { item: '3L Hydration Water Bladder', category: 'Tech', quantity: 1, bagTag: 'Daypack', isEssential: false },
          { item: 'Trail First Aid & Blister Kit', category: 'Toiletries', quantity: 1, bagTag: 'Daypack', isEssential: true },
          { item: 'High-Energy Protein Bars', category: 'Toiletries', quantity: 6, bagTag: 'Daypack', isEssential: false },
          { item: 'National Park Permit & ID', category: 'Documents', quantity: 1, bagTag: 'Carry-On', isEssential: true }
        ]
      },
      {
        id: 'international',
        title: '✈️ International Flight & City Odyssey',
        desc: 'Passport, universal adapters, noise-canceling tech, and travel documents.',
        items: [
          { item: 'Valid Passport & Visa Documents', category: 'Documents', quantity: 1, bagTag: 'Carry-On', isEssential: true },
          { item: 'Universal Worldwide Power Adapter', category: 'Tech', quantity: 1, bagTag: 'Carry-On', isEssential: true },
          { item: 'Noise-Canceling Headphones', category: 'Tech', quantity: 1, bagTag: 'Carry-On', isEssential: false },
          { item: 'Flight Compression Socks', category: 'Clothing', quantity: 2, bagTag: 'Carry-On', isEssential: false },
          { item: 'Foreign Currency & Backup Cards', category: 'Documents', quantity: 1, bagTag: 'Carry-On', isEssential: true },
          { item: 'International eSIM / Travel Data SIM', category: 'Tech', quantity: 1, bagTag: 'Carry-On', isEssential: true }
        ]
      },
      {
        id: 'beach',
        title: '🏖️ Tropical Beach & Island Resort',
        desc: 'Swimwear, reef-safe sunscreen, dry bags, and resort apparel.',
        items: [
          { item: 'Designer Swimwear / Trunks', category: 'Clothing', quantity: 3, bagTag: 'Checked', isEssential: false },
          { item: 'Reef-Safe Sunscreen SPF 50', category: 'Toiletries', quantity: 1, bagTag: 'Checked', isEssential: true },
          { item: 'Polarized UV Sunglasses', category: 'Tech', quantity: 1, bagTag: 'Carry-On', isEssential: true },
          { item: 'Quick-Dry Microfiber Beach Towel', category: 'Clothing', quantity: 1, bagTag: 'Checked', isEssential: false },
          { item: 'Waterproof Phone Dry Bag', category: 'Tech', quantity: 1, bagTag: 'Daypack', isEssential: false }
        ]
      },
      {
        id: 'cabin',
        title: '🚗 Cabin Escape & Scenic Road Trip',
        desc: 'Fleece layers, camp stove, car chargers, board games, and cooler.',
        items: [
          { item: 'Portable Camping Stove & Fuel', category: 'Tech', quantity: 1, bagTag: 'Checked', isEssential: false },
          { item: 'Cozy Fleece Sweater / Hoodie', category: 'Clothing', quantity: 2, bagTag: 'Checked', isEssential: false },
          { item: 'Board Games & Playing Cards', category: 'Tech', quantity: 2, bagTag: 'Checked', isEssential: false },
          { item: 'Multi-Port USB Car Fast Charger', category: 'Tech', quantity: 1, bagTag: 'Carry-On', isEssential: true },
          { item: 'Roadside Emergency First Aid Kit', category: 'Toiletries', quantity: 1, bagTag: 'Checked', isEssential: true }
        ]
      }
    ];

    const html = `
      <div class="modal-overlay active" id="modal-packing-template">
        <div class="modal-container" style="max-width: 640px;">
          <div class="modal-header">
            <h3>${icon('sparkles', 'var(--accent-primary)')} Import Packing Starter Kit</h3>
            <button class="btn btn-icon-only btn-secondary close-modal" type="button">&times;</button>
          </div>
          <div class="modal-body">
            <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 1.25rem;">
              Select a pre-configured travel checklist to instant-fill your trip's gear and document requirements.
            </p>

            <div style="display: grid; gap: 1rem;">
              ${templates.map(tpl => `
                <div class="template-card" data-template-id="${tpl.id}">
                  <div>
                    <h4 style="font-size: 1.05rem; margin-bottom: 0.35rem; color: var(--text-primary);">${tpl.title}</h4>
                    <p style="font-size: 0.82rem; color: var(--text-secondary); margin-bottom: 0.75rem;">${tpl.desc}</p>
                    <div style="display: flex; gap: 0.4rem; flex-wrap: wrap;">
                      ${tpl.items.slice(0, 4).map(i => `<span class="badge" style="font-size: 0.7rem; background: rgba(255,255,255,0.06); color: var(--text-muted);">${i.item}</span>`).join('')}
                      <span class="badge" style="font-size: 0.7rem; background: rgba(99,102,241,0.15); color: var(--accent-primary);">+${tpl.items.length - 4} more</span>
                    </div>
                  </div>
                  <button class="btn btn-primary btn-sm btn-import-tpl" data-template-id="${tpl.id}" style="margin-top: 0.85rem; width: 100%; justify-content: center;">
                    Import ${tpl.items.length} Items &rarr;
                  </button>
                </div>
              `).join('')}
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary cancel-modal" type="button">Cancel</button>
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', html);
    const m = document.getElementById('modal-packing-template');
    const close = () => m.remove();
    m.querySelectorAll('.cancel-modal, .close-modal').forEach(b => b.onclick = close);

    m.querySelectorAll('.btn-import-tpl').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const tplId = e.currentTarget.getAttribute('data-template-id');
        const targetTpl = templates.find(t => t.id === tplId);
        if (targetTpl) {
          targetTpl.items.forEach(i => {
            appStore.addPackingItem(trip.id, i);
          });
          close();
          showToast(`Imported ${targetTpl.items.length} items from ${targetTpl.title}!`, 'success');
          renderCurrentView();
        }
      });
    });
  }

  function exportPackingListPrint(trip) {
    const packingList = trip.packingList || [];
    const prepList = trip.prepChecklist || [];

    const printWin = window.open('', '_blank');
    if (!printWin) return showToast('Please allow popups to print list', 'info');

    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>WanderPulse — Packing Checklist (${trip.title})</title>
        <style>
          body { font-family: system-ui, sans-serif; padding: 2rem; color: #1e293b; }
          h1 { font-size: 1.8rem; margin-bottom: 0.25rem; }
          .subtitle { color: #64748b; font-size: 0.95rem; margin-bottom: 1.5rem; }
          .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; }
          .section { border: 1px solid #cbd5e1; border-radius: 8px; padding: 1.25rem; }
          h3 { margin-top: 0; font-size: 1.1rem; border-bottom: 2px solid #6366f1; padding-bottom: 0.5rem; }
          .item { display: flex; align-items: center; gap: 0.75rem; padding: 0.5rem 0; border-bottom: 1px solid #f1f5f9; }
          .box { width: 16px; height: 16px; border: 2px solid #64748b; border-radius: 3px; }
          .badge { font-size: 0.7rem; padding: 2px 6px; background: #e2e8f0; border-radius: 4px; font-weight: bold; }
        </style>
      </head>
      <body>
        <h1>✈️ ${trip.title} — Official Packing List</h1>
        <div class="subtitle">Destination: ${trip.destination} • Dates: ${formatDate(trip.startDate)} - ${formatDate(trip.endDate)}</div>

        <div class="grid">
          <div class="section">
            <h3>Luggage &amp; Gear Checklist</h3>
            ${packingList.map(i => `
              <div class="item">
                <div class="box">${i.packed ? '✓' : ''}</div>
                <div style="flex: 1;">
                  <strong>${i.item}</strong> (x${i.quantity || 1})
                  ${i.isEssential ? '<span class="badge" style="background: #fef3c7; color: #d97706;">Essential</span>' : ''}
                </div>
                <span class="badge">${i.bagTag || 'Carry-On'}</span>
              </div>
            `).join('')}
          </div>

          <div class="section">
            <h3>Pre-Trip Readiness &amp; Permits</h3>
            ${prepList.map(p => `
              <div class="item">
                <div class="box">${p.completed ? '✓' : ''}</div>
                <div>${p.title}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </body>
      </html>
    `;

    printWin.document.write(html);
    printWin.document.close();
    printWin.focus();
    setTimeout(() => { printWin.print(); }, 500);
  }

  let packingFilterState = 'all';
  let isWeatherDrawerOpen = true;

  function renderPackingPane(container, trip) {
    const packingList = trip.packingList || [];
    const prepList = trip.prepChecklist || [];

    const filteredPacking = packingList.filter(i => {
      if (packingFilterState === 'personal') return !i.assignee || i.assignee === appStore.profile.name;
      if (packingFilterState === 'group') return i.assignee && i.assignee !== appStore.profile.name;
      return true;
    });

    const packedCount = packingList.filter(p => p.packed).length;
    const totalCount = packingList.length + prepList.length;
    const packedTotal = packedCount + prepList.filter(p => p.completed).length;
    const overallPct = totalCount > 0 ? Math.round((packedTotal / totalCount) * 100) : 0;

    const categories = [
      { key: 'Clothing', title: '👕 Clothing & Apparel', desc: 'Layers, outerwear, footwear & trail apparel' },
      { key: 'Tech', title: '⚡ Tech & Gear', desc: 'Chargers, power banks, camera & GPS devices' },
      { key: 'Toiletries', title: '🧴 Toiletries & Health', desc: 'First aid, prescriptions, SPF & hygiene' },
      { key: 'Documents', title: '📄 Pre-Trip Readiness & Docs', desc: 'Permits, passports, vouchers & tickets' }
    ];

    const weatherSuggestions = [
      { item: 'Thermal Base Layer Top', category: 'Clothing', bagTag: 'Checked', isEssential: true },
      { item: 'Compact Wind & Rain Shell', category: 'Clothing', bagTag: 'Daypack', isEssential: true },
      { item: '20,000mAh Heavy Duty Power Bank', category: 'Tech', bagTag: 'Daypack', isEssential: true },
      { item: 'Reef-Safe Sunscreen SPF 50', category: 'Toiletries', bagTag: 'Carry-On', isEssential: false },
      { item: 'Waterproof Trail Hiking Boots', category: 'Clothing', bagTag: 'Checked', isEssential: false }
    ];

    container.innerHTML = `
      <div class="packing-progress-banner">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.85rem; flex-wrap: wrap; gap: 1rem;">
          <div>
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.25rem;">
              <h2 style="font-size: 1.4rem; color: var(--text-primary);">Packing &amp; Travel Readiness</h2>
              <span class="badge badge-active" style="font-size: 0.8rem;">${overallPct}% Complete</span>
            </div>
            <p style="color: var(--text-secondary); font-size: 0.88rem;">
              ${packedTotal} of ${totalCount} items packed &amp; tasks verified.
            </p>
          </div>

          <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
            <button class="btn btn-secondary btn-sm" id="btn-open-templates">
              ${icon('sparkles')} Smart Templates
            </button>
            <button class="btn btn-secondary btn-sm" id="btn-toggle-weather-drawer">
              🌤️ Weather Suggestions
            </button>
            <button class="btn btn-primary btn-sm" id="btn-print-packing">
              🖨️ Export PDF / Print
            </button>
          </div>
        </div>

        <div class="progress-bar-bg" style="height: 10px; margin-bottom: 1.15rem;">
          <div class="progress-bar-fill" style="width: ${overallPct}%;"></div>
        </div>

        <div class="map-filter-bar" id="packing-filter-pills" style="display: inline-flex;">
          <button class="map-pill-btn ${packingFilterState === 'all' ? 'active' : ''}" data-pfilter="all">All Items (${packingList.length + prepList.length})</button>
          <button class="map-pill-btn ${packingFilterState === 'personal' ? 'active' : ''}" data-pfilter="personal">👤 My Personal Items</button>
          <button class="map-pill-btn ${packingFilterState === 'group' ? 'active' : ''}" data-pfilter="group">👥 Shared Group Gear</button>
          <button class="map-pill-btn ${packingFilterState === 'documents' ? 'active' : ''}" data-pfilter="documents">📄 Pre-Trip Documents</button>
        </div>
      </div>

      ${isWeatherDrawerOpen ? `
        <div class="weather-smart-drawer">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.75rem;">
            <div style="display: flex; align-items: center; gap: 0.5rem;">
              <span style="font-size: 1.2rem;">🌤️</span>
              <div>
                <strong style="font-size: 0.95rem; color: var(--text-primary);">Smart Weather Recommendations for ${trip.destination}</strong>
                <div style="font-size: 0.78rem; color: var(--text-secondary);">Forecast: Low of 42°F expected — Pack warm layers &amp; power backups</div>
              </div>
            </div>
            <button class="btn btn-icon-only btn-secondary btn-close-weather" type="button" style="width: 24px; height: 24px; font-size: 0.7rem;">&times;</button>
          </div>

          <div style="display: flex; gap: 0.6rem; flex-wrap: wrap;">
            ${weatherSuggestions.map(s => `
              <button class="suggestion-chip btn-add-suggestion" data-item="${s.item}" data-cat="${s.category}" data-tag="${s.bagTag}" data-essential="${s.isEssential}">
                + ${s.item} <span style="font-size: 0.7rem; opacity: 0.7;">(${s.bagTag})</span>
              </button>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <div class="packing-category-grid">
        ${categories.map(cat => {
          let categoryItems = [];
          if (cat.key === 'Documents') {
            categoryItems = [...filteredPacking.filter(i => (i.category || '').toLowerCase().includes('doc') || (i.category || '').toLowerCase().includes('prep')), ...prepList.map(pr => ({ id: pr.id, item: pr.title, packed: pr.completed, isPrep: true, category: 'Documents' }))];
          } else {
            categoryItems = filteredPacking.filter(i => (i.category || 'Clothing').toLowerCase() === cat.key.toLowerCase());
          }

          const catPackedCount = categoryItems.filter(i => i.packed).length;

          return `
            <div class="packing-category-card">
              <div class="packing-card-header">
                <div>
                  <h3 style="font-size: 1.05rem; margin-bottom: 0.15rem; color: var(--text-primary);">${cat.title}</h3>
                  <div style="font-size: 0.75rem; color: var(--text-muted);">${cat.desc}</div>
                </div>
                <span class="badge badge-active" style="font-size: 0.75rem;">
                  ${catPackedCount}/${categoryItems.length} Packed
                </span>
              </div>

              <div class="packing-card-body">
                ${categoryItems.length === 0 ? `
                  <div style="text-align: center; padding: 2rem 1rem; color: var(--text-muted); font-size: 0.85rem;">
                    No items in ${cat.key} yet. Type below to add.
                  </div>
                ` : `
                  ${categoryItems.map(item => `
                    <div class="packing-item-card ${item.packed ? 'packed-done' : ''}">
                      <div style="display: flex; align-items: center; gap: 0.65rem; flex: 1;">
                        <div class="checkbox-custom ${item.packed ? 'checked' : ''}" data-pack-id="${item.id}" data-is-prep="${item.isPrep || false}">
                          ${item.packed ? '✓' : ''}
                        </div>
                        <div style="flex: 1;">
                          <span class="packing-item-title" style="font-weight: 600; font-size: 0.9rem;">
                            ${item.item}
                            ${item.isEssential ? `<span class="essential-star" title="Essential Priority Item">★</span>` : ''}
                          </span>
                        </div>
                      </div>

                      <div style="display: flex; align-items: center; gap: 0.5rem;">
                        ${!item.isPrep ? `
                          <div class="qty-stepper">
                            <button class="qty-btn btn-qty-minus" data-id="${item.id}">-</button>
                            <span class="qty-count">${item.quantity || 1}</span>
                            <button class="qty-btn btn-qty-plus" data-id="${item.id}">+</button>
                          </div>

                          <span class="bag-tag-badge ${(item.bagTag || 'Carry-On').toLowerCase().replace(' ', '-')}">
                            ${item.bagTag || 'Carry-On'}
                          </span>

                          ${item.assignee ? `
                            <div class="avatar" title="Packed by ${item.assignee}" style="width: 22px; height: 22px; font-size: 0.65rem;">
                              ${item.assignee.slice(0, 2).toUpperCase()}
                            </div>
                          ` : ''}

                          <button class="btn btn-icon-only btn-secondary btn-del-pack" data-id="${item.id}" title="Remove Item" style="padding: 2px;">
                            ${icon('trash-2', '#ef4444')}
                          </button>
                        ` : ''}
                      </div>
                    </div>
                  `).join('')}
                `}

                <div style="margin-top: 0.75rem; border-top: 1px dashed var(--border-color); padding-top: 0.75rem;">
                  <form class="form-bulk-pack" data-category="${cat.key}" onsubmit="return false;">
                    <input type="text" class="form-control input-bulk-pack" placeholder="+ Type item (e.g., Wool socks x3) &amp; press Enter" style="font-size: 0.8rem; padding: 0.4rem 0.75rem;" />
                  </form>
                </div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;

    container.querySelectorAll('#packing-filter-pills .map-pill-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        packingFilterState = e.currentTarget.getAttribute('data-pfilter');
        renderPackingPane(container, trip);
      });
    });

    container.querySelectorAll('.checkbox-custom[data-pack-id]').forEach(cb => {
      cb.addEventListener('click', () => {
        const id = cb.getAttribute('data-pack-id');
        const isPrep = cb.getAttribute('data-is-prep') === 'true';
        if (isPrep) appStore.togglePrepItem(trip.id, id);
        else appStore.togglePackingItem(trip.id, id);
        renderPackingPane(container, appStore.getCurrentTrip());
      });
    });

    container.querySelectorAll('.btn-qty-minus').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        appStore.updatePackingQuantity(trip.id, btn.getAttribute('data-id'), -1);
        renderPackingPane(container, appStore.getCurrentTrip());
      });
    });

    container.querySelectorAll('.btn-qty-plus').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        appStore.updatePackingQuantity(trip.id, btn.getAttribute('data-id'), 1);
        renderPackingPane(container, appStore.getCurrentTrip());
      });
    });

    container.querySelectorAll('.btn-del-pack').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        appStore.deletePackingItem(trip.id, btn.getAttribute('data-id'));
        showToast('Item removed', 'info');
        renderPackingPane(container, appStore.getCurrentTrip());
      });
    });

    container.querySelectorAll('.form-bulk-pack').forEach(form => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = form.querySelector('.input-bulk-pack');
        const val = input.value.trim();
        const category = form.getAttribute('data-category');
        if (val) {
          const parsed = parseNaturalLanguagePackingInput(val);
          parsed.category = category;
          appStore.addPackingItem(trip.id, parsed);
          input.value = '';
          input.focus();
          showToast(`Added ${parsed.item} (x${parsed.quantity})!`, 'success');
          renderPackingPane(container, appStore.getCurrentTrip());
        }
      });
    });

    container.querySelectorAll('.btn-add-suggestion').forEach(btn => {
      btn.addEventListener('click', () => {
        const item = btn.getAttribute('data-item');
        const category = btn.getAttribute('data-cat');
        const bagTag = btn.getAttribute('data-tag');
        const isEssential = btn.getAttribute('data-essential') === 'true';
        appStore.addPackingItem(trip.id, { item, category, bagTag, isEssential, quantity: 1 });
        showToast(`Added ${item} to checklist!`, 'success');
        renderPackingPane(container, appStore.getCurrentTrip());
      });
    });

    container.querySelector('.btn-close-weather')?.addEventListener('click', () => {
      isWeatherDrawerOpen = false;
      renderPackingPane(container, trip);
    });

    container.querySelector('#btn-toggle-weather-drawer')?.addEventListener('click', () => {
      isWeatherDrawerOpen = !isWeatherDrawerOpen;
      renderPackingPane(container, trip);
    });

    container.querySelector('#btn-open-templates')?.addEventListener('click', () => {
      openPackingTemplateModal(trip);
    });

    container.querySelector('#btn-print-packing')?.addEventListener('click', () => {
      exportPackingListPrint(trip);
    });
  }

  function renderExpensesPane(container, trip) {
    const attendees = trip.attendees || [];
    const expenses = trip.expenses || [];
    const totalSpent = expenses.reduce((sum, e) => sum + (parseFloat(e.amount) || 0), 0);
    const totalBudget = trip.budget || 0;
    const remaining = totalBudget - totalSpent;

    const balances = {};
    attendees.forEach(a => balances[a.name] = 0);
    expenses.forEach(exp => {
      const amt = parseFloat(exp.amount) || 0;
      const splitWith = exp.splitWith && exp.splitWith.length > 0 ? exp.splitWith : attendees.map(a => a.name);
      const perShare = amt / splitWith.length;
      balances[exp.paidBy] = (balances[exp.paidBy] || 0) + amt;
      splitWith.forEach(p => balances[p] = (balances[p] || 0) - perShare);
    });

    const settlements = calculateSettlements(balances);

    container.innerHTML = `
      <div class="expense-summary-grid">
        <div class="stat-card">
          <div class="stat-label">Total Spent</div>
          <div class="stat-value" style="color: var(--accent-primary);">$${totalSpent.toLocaleString()}</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">Total Budget</div>
          <div class="stat-value" style="color: var(--text-primary);">$${totalBudget.toLocaleString()}</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">Remaining Budget</div>
          <div class="stat-value" style="color: ${remaining >= 0 ? 'var(--status-active)' : '#ef4444'};">$${remaining.toLocaleString()}</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">Attendees</div>
          <div class="stat-value" style="color: var(--accent-secondary);">${attendees.length} members</div>
        </div>
      </div>

      ${settlements.length > 0 ? `
        <div class="card" style="margin-bottom: 2rem; border-color: rgba(16, 185, 129, 0.3); background: rgba(16, 185, 129, 0.05);">
          <h3 style="margin-bottom: 1rem; color: var(--status-active); display: flex; align-items: center; gap: 0.5rem;">
            ${icon('calculator')} Smart Settlement Calculator (Optimal Transfers)
          </h3>
          <div style="display: grid; gap: 0.75rem;">
            ${settlements.map(s => `
              <div style="display: flex; align-items: center; justify-content: space-between; background: var(--bg-card); padding: 0.85rem 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
                <span><strong style="color: #f87171;">${s.from}</strong> owes <strong style="color: var(--status-active);">${s.to}</strong></span>
                <span class="badge badge-active">$${s.amount.toFixed(2)}</span>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 2rem;">
        <div class="card">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.25rem;">
            <h3>Group Expense Log</h3>
            <button class="btn btn-primary btn-sm" id="btn-add-exp">${icon('plus')} Log Expense</button>
          </div>

          <div style="display: grid; gap: 1rem;">
            ${expenses.map(exp => `
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
                <div>
                  <strong style="font-size: 1.1rem; color: var(--text-primary);">${exp.title}</strong>
                  <p style="font-size: 0.85rem; color: var(--text-secondary);">Paid by <strong>${exp.paidBy}</strong> • Category: ${exp.category}</p>
                </div>
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <span style="font-weight: 700; font-size: 1.2rem; color: var(--text-primary);">$${parseFloat(exp.amount).toFixed(2)}</span>
                  <button class="btn btn-icon-only btn-secondary btn-del-exp" data-id="${exp.id}">${icon('trash-2', '#ef4444')}</button>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 1.5rem;">
          <div class="card">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.25rem;">
              <h3>Trip Attendees</h3>
              <button class="btn btn-secondary btn-sm" id="btn-add-att">${icon('user-plus')} Invite</button>
            </div>
            <div style="display: grid; gap: 0.75rem;">
              ${attendees.map(att => {
                const bal = balances[att.name] || 0;
                const isPos = bal >= 0;
                return `
                  <div style="display: flex; align-items: center; justify-content: space-between; padding: 0.75rem; background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
                    <div style="display: flex; align-items: center; gap: 0.75rem;">
                      <div class="avatar">${att.avatar}</div>
                      <div>
                        <div style="font-weight: 600;">${att.name}</div>
                        <div style="font-size: 0.75rem; color: var(--text-muted);">${att.role}</div>
                      </div>
                    </div>
                    <div style="text-align: right;">
                      <div style="font-size: 0.85rem; font-weight: 700; color: ${isPos ? 'var(--status-active)' : '#ef4444'};">
                        ${isPos ? '+' : ''}$${bal.toFixed(2)}
                      </div>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>

          <div class="card">
            <h4 style="margin-bottom: 1rem;">Expense Breakdown</h4>
            <canvas id="expenseChart" style="max-height: 220px;"></canvas>
          </div>
        </div>
      </div>
    `;

    renderExpenseChart(expenses);

    container.querySelector('#btn-add-exp')?.addEventListener('click', () => openAddExpenseModal(trip));
    container.querySelector('#btn-add-att')?.addEventListener('click', () => openInviteModal(trip));

    container.querySelectorAll('.btn-del-exp').forEach(btn => {
      btn.addEventListener('click', () => {
        appStore.deleteExpense(trip.id, btn.getAttribute('data-id'));
        showToast('Expense removed', 'info');
        renderExpensesPane(container, appStore.getCurrentTrip());
      });
    });
  }

  let mapExplorerState = {
    selectedDay: 'all',
    selectedCategory: 'all',
    layerMode: 'route', // 'route' or 'explore'
    searchQuery: ''
  };

  function calculateDistanceMiles(lat1, lon1, lat2, lon2) {
    const R = 3958.8; // Radius of earth in miles
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return Math.round(R * c * 10) / 10;
  }

  function getCategoryColor(cat) {
    const c = (cat || '').toLowerCase();
    if (c.includes('transit') || c.includes('flight') || c.includes('drive')) return '#06b6d4'; // Cyan
    if (c.includes('lodging') || c.includes('hotel') || c.includes('stay')) return '#f59e0b'; // Amber
    if (c.includes('dining') || c.includes('food') || c.includes('meal')) return '#ec4899'; // Rose
    if (c.includes('note')) return '#8b5cf6'; // Violet
    return '#10b981'; // Emerald Activity
  }

  function exportGoogleMapsRoute(trip, items) {
    if (!items || items.length === 0) return showToast('No stops to export', 'info');
    const validLocs = items.map(i => i.location || i.title).filter(Boolean);
    if (validLocs.length === 0) return showToast('No location names found', 'info');

    const origin = encodeURIComponent(validLocs[0] + ' ' + trip.destination);
    const destination = encodeURIComponent(validLocs[validLocs.length - 1] + ' ' + trip.destination);
    let waypointsParam = '';
    if (validLocs.length > 2) {
      const waypoints = validLocs.slice(1, -1).map(l => encodeURIComponent(l + ' ' + trip.destination)).join('|');
      waypointsParam = `&waypoints=${waypoints}`;
    }

    const url = `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}${waypointsParam}`;
    window.open(url, '_blank');
    showToast('Opening Google Maps Multi-stop Route!', 'success');
  }

  function exportGPXRoute(trip, items) {
    if (!items || items.length === 0) return showToast('No itinerary stops to export', 'info');

    let gpx = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    gpx += `<gpx version="1.1" creator="WanderPulse Travel Engine" xmlns="http://www.topografix.com/GPX/1/1">\n`;
    gpx += `  <metadata>\n    <name>${trip.title} — Waypoint Route</name>\n    <desc>Day-by-day itinerary route exported from WanderPulse</desc>\n  </metadata>\n`;

    items.forEach((item, idx) => {
      const lat = item.lat || 35.6762;
      const lng = item.lng || 139.6503;
      gpx += `  <wpt lat="${lat}" lon="${lng}">\n`;
      gpx += `    <name>Stop ${idx + 1}: ${item.title}</name>\n`;
      gpx += `    <desc>${item.location || ''} • Day ${item.day || 1} ${item.time || ''}</desc>\n`;
      gpx += `    <sym>Flag</sym>\n`;
      gpx += `  </wpt>\n`;
    });

    gpx += `</gpx>`;

    const blob = new Blob([gpx], { type: 'application/gpx+xml;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${trip.title.replace(/[^a-z0-9]/gi, '_')}_Route.gpx`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('Downloaded GPX Route File!', 'success');
  }

  function renderMapPane(container, trip) {
    const itinerary = trip.itinerary || [];
    let totalDays = 7;
    if (trip.startDate && trip.endDate) {
      const s = new Date(trip.startDate + 'T00:00:00');
      const e = new Date(trip.endDate + 'T00:00:00');
      const diff = Math.max(1, Math.ceil((e - s) / (1000 * 60 * 60 * 24)) + 1);
      totalDays = Math.max(diff, 14);
    }
    const daysList = Array.from({ length: totalDays }, (_, i) => i + 1);

    container.innerHTML = `
      <div class="map-explorer-grid">
        <!-- Left Sidebar Panel -->
        <aside class="map-sidebar-panel">
          <div class="map-sidebar-header">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.4rem;">
              <h3 style="font-size: 1.1rem; display: flex; align-items: center; gap: 0.5rem; color: var(--text-primary);">
                ${icon('map', 'var(--accent-primary)')} Stop Sequence
              </h3>
              <span class="badge badge-upcoming" id="stop-count-badge" style="font-size: 0.75rem;">
                ${itinerary.length} Stops
              </span>
            </div>
            <p style="font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 0.85rem;">
              Synchronized day itinerary stops &amp; live navigation.
            </p>

            <div class="search-box" style="padding: 0.35rem 0.75rem;">
              ${icon('search', 'var(--text-muted)')}
              <input type="text" id="sidebar-stop-search" placeholder="Filter stops or places..." value="${mapExplorerState.searchQuery}" style="font-size: 0.8rem;" />
            </div>
          </div>

          <div class="map-sidebar-feed" id="map-sidebar-feed">
            <!-- Rendered dynamically -->
          </div>
        </aside>

        <!-- Right Map Canvas Panel -->
        <main class="map-canvas-panel">
          <!-- Floating Controls Overlay Bar -->
          <div class="map-floating-controls">
            <div class="map-filter-bar" id="map-day-pills">
              <button class="map-pill-btn ${mapExplorerState.selectedDay === 'all' ? 'active' : ''}" data-day="all">All Days</button>
              ${daysList.map(d => `<button class="map-pill-btn ${mapExplorerState.selectedDay === String(d) ? 'active' : ''}" data-day="${d}">Day ${d}</button>`).join('')}
            </div>

            <div style="display: flex; gap: 0.4rem; flex-wrap: wrap;">
              <div class="map-filter-bar" id="map-cat-chips">
                <button class="map-pill-btn ${mapExplorerState.selectedCategory === 'all' ? 'active' : ''}" data-cat="all">All Types</button>
                <button class="map-pill-btn ${mapExplorerState.selectedCategory === 'lodging' ? 'active' : ''}" data-cat="lodging">🏨 Stay</button>
                <button class="map-pill-btn ${mapExplorerState.selectedCategory === 'dining' ? 'active' : ''}" data-cat="dining">🍽️ Food</button>
                <button class="map-pill-btn ${mapExplorerState.selectedCategory === 'activity' ? 'active' : ''}" data-cat="activity">🎟️ Activity</button>
                <button class="map-pill-btn ${mapExplorerState.selectedCategory === 'transit' ? 'active' : ''}" data-cat="transit">✈️ Transit</button>
              </div>

              <div class="map-filter-bar">
                <button class="map-pill-btn active" id="btn-mode-toggle" type="button">
                  ${mapExplorerState.layerMode === 'route' ? '🛣️ Route View' : '📍 Exploration View'}
                </button>
              </div>

              <div class="map-filter-bar">
                <button class="map-pill-btn" id="btn-gmaps-route" type="button" title="Open Multi-stop Route in Google Maps">
                  🗺️ Google Maps
                </button>
                <button class="map-pill-btn" id="btn-export-gpx" type="button" title="Download GPX file for GPS">
                  📥 GPX Export
                </button>
              </div>
            </div>
          </div>

          <div id="map-container-explorer"></div>
        </main>
      </div>
    `;

    // Wire Controls
    const dayPills = container.querySelectorAll('#map-day-pills .map-pill-btn');
    dayPills.forEach(pill => {
      pill.addEventListener('click', (e) => {
        dayPills.forEach(p => p.classList.remove('active'));
        e.currentTarget.classList.add('active');
        mapExplorerState.selectedDay = e.currentTarget.getAttribute('data-day');
        updateExplorerView(trip, container);
      });
    });

    const catChips = container.querySelectorAll('#map-cat-chips .map-pill-btn');
    catChips.forEach(chip => {
      chip.addEventListener('click', (e) => {
        catChips.forEach(c => c.classList.remove('active'));
        e.currentTarget.classList.add('active');
        mapExplorerState.selectedCategory = e.currentTarget.getAttribute('data-cat');
        updateExplorerView(trip, container);
      });
    });

    const modeBtn = container.querySelector('#btn-mode-toggle');
    if (modeBtn) {
      modeBtn.addEventListener('click', () => {
        mapExplorerState.layerMode = mapExplorerState.layerMode === 'route' ? 'explore' : 'route';
        modeBtn.textContent = mapExplorerState.layerMode === 'route' ? '🛣️ Route View' : '📍 Exploration View';
        updateExplorerView(trip, container);
      });
    }

    const searchInput = container.querySelector('#sidebar-stop-search');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        mapExplorerState.searchQuery = e.target.value;
        updateExplorerView(trip, container);
      });
    }

    const gmapsBtn = container.querySelector('#btn-gmaps-route');
    if (gmapsBtn) {
      gmapsBtn.addEventListener('click', () => {
        const filtered = getFilteredStops(trip);
        exportGoogleMapsRoute(trip, filtered);
      });
    }

    const gpxBtn = container.querySelector('#btn-export-gpx');
    if (gpxBtn) {
      gpxBtn.addEventListener('click', () => {
        const filtered = getFilteredStops(trip);
        exportGPXRoute(trip, filtered);
      });
    }

    setTimeout(() => updateExplorerView(trip, container), 100);
  }

  function getFilteredStops(trip) {
    const itinerary = trip.itinerary || [];
    return itinerary.filter(item => {
      const matchesDay = mapExplorerState.selectedDay === 'all' || String(item.day || 1) === mapExplorerState.selectedDay;
      const cat = (item.category || '').toLowerCase();
      const matchesCat = mapExplorerState.selectedCategory === 'all' ||
                         (mapExplorerState.selectedCategory === 'lodging' && (cat.includes('lodging') || cat.includes('hotel') || cat.includes('stay'))) ||
                         (mapExplorerState.selectedCategory === 'dining' && (cat.includes('dining') || cat.includes('food') || cat.includes('meal'))) ||
                         (mapExplorerState.selectedCategory === 'transit' && (cat.includes('transit') || cat.includes('flight') || cat.includes('drive'))) ||
                         (mapExplorerState.selectedCategory === 'activity' && (!cat.includes('lodging') && !cat.includes('dining') && !cat.includes('transit')));
      const query = mapExplorerState.searchQuery.toLowerCase();
      const matchesSearch = !query || item.title.toLowerCase().includes(query) || (item.location && item.location.toLowerCase().includes(query));
      return matchesDay && matchesCat && matchesSearch;
    });
  }

  async function updateExplorerView(trip, container) {
    const stopsFeed = container.querySelector('#map-sidebar-feed');
    const stopCountBadge = container.querySelector('#stop-count-badge');
    const filteredStops = getFilteredStops(trip);

    if (stopCountBadge) stopCountBadge.textContent = `${filteredStops.length} Stops`;

    // Render Sidebar Feed Cards
    if (filteredStops.length === 0) {
      stopsFeed.innerHTML = `
        <div style="text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
          <div style="font-size: 2rem; margin-bottom: 0.5rem;">🗺️</div>
          <p style="font-size: 0.9rem; margin-bottom: 0.5rem;">No matching itinerary stops found.</p>
          <span style="font-size: 0.75rem; color: var(--text-secondary);">Try adjusting your day or category filters.</span>
        </div>
      `;
    } else {
      stopsFeed.innerHTML = filteredStops.map((item, idx) => {
        const nextItem = filteredStops[idx + 1];
        const catColor = getCategoryColor(item.category);
        return `
          <div class="map-stop-card" data-stop-id="${item.id}" data-idx="${idx}">
            <div style="display: flex; align-items: flex-start; justify-content: space-between; gap: 0.75rem;">
              <div style="display: flex; align-items: flex-start; gap: 0.75rem; flex: 1;">
                <div class="stop-sequence-badge">${idx + 1}</div>
                <div>
                  <div style="display: flex; align-items: center; gap: 0.4rem; flex-wrap: wrap; margin-bottom: 0.25rem;">
                    <span style="font-weight: 800; font-size: 0.8rem; color: var(--accent-secondary);">Day ${item.day || 1} • ${item.time || '09:00'}</span>
                    <span class="badge" style="background: rgba(255,255,255,0.06); color: ${catColor}; border: 1px solid rgba(255,255,255,0.1); font-size: 0.68rem;">
                      ${item.category || 'Activity'}
                    </span>
                  </div>
                  <strong style="font-size: 0.95rem; color: var(--text-primary); display: block; margin-bottom: 0.2rem;">${item.title}</strong>
                  ${item.location ? `
                    <div style="font-size: 0.78rem; color: var(--text-secondary); display: flex; align-items: center; gap: 0.3rem;">
                      ${icon('map-pin', 'var(--accent-primary)')} ${item.location}
                    </div>
                  ` : ''}
                </div>
              </div>
            </div>

            ${nextItem ? `
              <div style="margin-top: 0.6rem; padding-top: 0.5rem; border-top: 1px dashed rgba(255,255,255,0.08); font-size: 0.75rem; color: #38bdf8; display: flex; align-items: center; gap: 0.35rem;">
                🚘 Estimated Leg to Stop #${idx + 2} (${nextItem.title.slice(0, 18)}...)
              </div>
            ` : ''}
          </div>
        `;
      }).join('');
    }

    // Initialize/Update Map Engine Canvas
    await initExplorerMapEngine(trip, filteredStops, container);
  }

  async function initExplorerMapEngine(trip, stops, container) {
    const el = document.getElementById('map-container-explorer');
    if (!el || !window.L) return;

    if (window._activeExplorerMap) {
      try { window._activeExplorerMap.remove(); } catch(e) {}
      window._activeExplorerMap = null;
    }

    const mainCoords = resolveDestinationCoords(trip.destination || trip.title);

    // Initialize Leaflet map with Dark Carto Basemap
    const map = window.L.map('map-container-explorer', {
      scrollWheelZoom: true,
      zoomControl: false
    }).setView([mainCoords.lat, mainCoords.lng], 11);

    window._activeExplorerMap = map;

    // OpenStreetMap Standard Tiles with Dark Theme Filter (100% Free, zero API key required)
    window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Add zoom control bottom right
    window.L.control.zoom({ position: 'bottomright' }).addTo(map);

    setTimeout(() => { try { map.invalidateSize(); } catch(e) {} }, 50);
    setTimeout(() => { try { map.invalidateSize(); } catch(e) {} }, 250);

    const bounds = [];
    const markerStore = {};
    const routeCoordsList = [];

    // Geocode & Render Numbered Pins
    for (let idx = 0; idx < stops.length; idx++) {
      const item = stops[idx];
      let itemCoords = null;
      if (item.location) {
        itemCoords = await geocodeLocation(item.location);
      }
      if (!itemCoords) {
        itemCoords = {
          lat: mainCoords.lat + (Math.sin(idx + 1) * 0.018),
          lng: mainCoords.lng + (Math.cos(idx + 1) * 0.018)
        };
      }

      item.lat = itemCoords.lat;
      item.lng = itemCoords.lng;
      bounds.push([itemCoords.lat, itemCoords.lng]);
      routeCoordsList.push({ coords: [itemCoords.lat, itemCoords.lng], title: item.title, day: item.day });

      const catColor = getCategoryColor(item.category);

      const pinIcon = window.L.divIcon({
        className: 'numbered-map-pin',
        html: `
          <div style="background: ${catColor}; color: white; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 13px; box-shadow: 0 3px 10px rgba(0,0,0,0.5); border: 2.5px solid #ffffff;">
            ${idx + 1}
          </div>
        `,
        iconSize: [32, 32],
        iconAnchor: [16, 16],
        popupAnchor: [0, -16]
      });

      const marker = window.L.marker([itemCoords.lat, itemCoords.lng], { icon: pinIcon })
        .addTo(map)
        .bindPopup(`
          <div style="font-family: var(--font-family-base); padding: 4px; max-width: 240px;">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 4px;">
              <span style="font-size: 0.72rem; font-weight: 800; color: ${catColor}; text-transform: uppercase;">Stop #${idx + 1} • Day ${item.day || 1}</span>
              <span style="font-size: 0.75rem; color: #64748b; font-weight: 600;">${item.time || '09:00'}</span>
            </div>
            <h4 style="margin: 0 0 4px 0; font-size: 0.95rem; color: #0f172a;">${item.title}</h4>
            ${item.location ? `<p style="margin: 0 0 6px 0; font-size: 0.8rem; color: #475569;">📍 ${item.location}</p>` : ''}
            <div style="display: flex; gap: 0.5rem; margin-top: 6px;">
              <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent((item.location || item.title) + ' ' + trip.destination)}" target="_blank" style="color: #6366f1; font-size: 0.78rem; font-weight: 700; text-decoration: none;">Directions &rarr;</a>
            </div>
          </div>
        `);

      markerStore[item.id] = marker;

      // Right-to-Left Sync (Marker click -> highlight sidebar card & scroll)
      marker.on('click', () => {
        container.querySelectorAll('.map-stop-card').forEach(c => c.classList.remove('active-highlight'));
        const card = container.querySelector(`.map-stop-card[data-stop-id="${item.id}"]`);
        if (card) {
          card.classList.add('active-highlight');
          card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      });
    }

    // Draw Glowing Route Lines in Route Mode
    if (mapExplorerState.layerMode === 'route' && routeCoordsList.length > 1) {
      const linePath = routeCoordsList.map(r => r.coords);
      const polyline = window.L.polyline(linePath, {
        color: '#38bdf8',
        weight: 4,
        opacity: 0.85,
        dashArray: '8, 8',
        lineCap: 'round'
      }).addTo(map);

      // Mid-path Distance Chips
      for (let i = 0; i < routeCoordsList.length - 1; i++) {
        const p1 = routeCoordsList[i].coords;
        const p2 = routeCoordsList[i + 1].coords;
        const dist = calculateDistanceMiles(p1[0], p1[1], p2[0], p2[1]);
        const midLat = (p1[0] + p2[0]) / 2;
        const midLng = (p1[1] + p2[1]) / 2;

        const distanceIcon = window.L.divIcon({
          className: 'route-distance-chip',
          html: `🚘 ${dist} mi`,
          iconSize: [60, 20],
          iconAnchor: [30, 10]
        });
        window.L.marker([midLat, midLng], { icon: distanceIcon }).addTo(map);
      }
    }

    // Fit Bounds
    if (bounds.length > 0) {
      try {
        if (bounds.length === 1) map.setView(bounds[0], 13);
        else map.fitBounds(bounds, { padding: [50, 50], maxZoom: 14 });
      } catch(e) {}
    } else {
      map.setView([mainCoords.lat, mainCoords.lng], 11);
    }

    // Left-to-Right Sync (Sidebar card hover/click -> map flyTo & open popup)
    container.querySelectorAll('.map-stop-card').forEach(card => {
      const stopId = card.getAttribute('data-stop-id');
      const marker = markerStore[stopId];

      card.addEventListener('click', () => {
        container.querySelectorAll('.map-stop-card').forEach(c => c.classList.remove('active-highlight'));
        card.classList.add('active-highlight');
        if (marker) {
          const latLng = marker.getLatLng();
          map.flyTo([latLng.lat, latLng.lng], 14, { animate: true, duration: 1.2 });
          marker.openPopup();
        }
      });
    });
  }


  function renderLogisticsPane(container, trip) {
    container.innerHTML = `
      <div class="card" style="margin-bottom: 2rem;">
        <h3 style="margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">${icon('plane', 'var(--accent-primary)')} Flights & Transportation</h3>
        ${trip.logistics.flights.length === 0 ? '<p style="color: var(--text-muted);">No flights added yet.</p>' : `
          <div style="display: grid; gap: 1rem;">
            ${trip.logistics.flights.map(f => `
              <div style="background: var(--bg-secondary); border: 1px solid var(--border-color); padding: 1rem; border-radius: var(--radius-md); display: flex; justify-content: space-between; align-items: center;">
                <div>
                  <strong style="font-size: 1.1rem; color: var(--text-primary);">${f.airline}</strong>
                  <p style="color: var(--text-secondary); font-size: 0.9rem;">${f.from} ➔ ${f.to}</p>
                </div>
                <span class="badge badge-upcoming">Conf: ${f.confirmation}</span>
              </div>
            `).join('')}
          </div>
        `}
      </div>

      <div class="card" style="margin-bottom: 2rem;">
        <h3 style="margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">${icon('building', 'var(--accent-secondary)')} Accommodations</h3>
        ${trip.logistics.accommodations.length === 0 ? '<p style="color: var(--text-muted);">No hotel bookings saved.</p>' : `
          <div style="display: grid; gap: 1rem;">
            ${trip.logistics.accommodations.map(a => `
              <div style="background: var(--bg-secondary); border: 1px solid var(--border-color); padding: 1rem; border-radius: var(--radius-md); display: flex; justify-content: space-between; align-items: center;">
                <div>
                  <strong style="font-size: 1.1rem; color: var(--text-primary);">${a.name}</strong>
                  <p style="color: var(--text-secondary); font-size: 0.9rem;">${a.address}</p>
                </div>
                <span class="badge badge-active">Conf: ${a.confirmation}</span>
              </div>
            `).join('')}
          </div>
        `}
      </div>

      <div class="card">
        <h3 style="margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">${icon('notebook', '#f59e0b')} Trip Notes</h3>
        <textarea class="form-control" id="trip-notes-input" rows="4">${trip.logistics.notes || ''}</textarea>
        <button class="btn btn-primary btn-sm" id="btn-save-notes" style="margin-top: 1rem;">Save Notes</button>
      </div>
    `;

    container.querySelector('#btn-save-notes')?.addEventListener('click', () => {
      trip.logistics.notes = container.querySelector('#trip-notes-input').value;
      appStore.saveTrips();
      showToast('Notes saved!', 'success');
    });
  }

  // --- Cover Photo Gallery Picker Helper ---
  function buildPhotoGalleryHTML(currentUrl = '') {
    return `
      <div class="photo-gallery-container">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem; flex-wrap: wrap; gap: 0.5rem;">
          <span style="font-size: 0.85rem; font-weight: 700; color: var(--text-primary); display: flex; align-items: center; gap: 0.35rem;">
            ${icon('image', 'var(--accent-primary)')} Select Cover Photo
          </span>
          <button type="button" class="btn btn-secondary btn-sm" id="btn-auto-detect-photo" style="padding: 0.25rem 0.65rem; font-size: 0.75rem;">
            ${icon('sparkles')} Auto-Detect from Location
          </button>
        </div>

        <div class="photo-category-tabs" id="photo-cat-tabs">
          <button type="button" class="photo-cat-btn active" data-cat="all">All (${PHOTO_LIBRARY_PRESETS.length})</button>
          <button type="button" class="photo-cat-btn" data-cat="beaches">🏖️ Beaches</button>
          <button type="button" class="photo-cat-btn" data-cat="cities">🏙️ Cities</button>
          <button type="button" class="photo-cat-btn" data-cat="nature">⛰️ Nature</button>
          <button type="button" class="photo-cat-btn" data-cat="culture">🏛️ Culture</button>
          <button type="button" class="photo-cat-btn" data-cat="adventure">🚗 Adventure</button>
        </div>

        <div style="display: flex; gap: 0.5rem; margin-bottom: 0.5rem;">
          <div class="search-box" style="flex: 1; padding: 0.35rem 0.75rem;">
            ${icon('search', 'var(--text-muted)')}
            <input type="text" id="photo-search-input" placeholder="Search gallery (e.g. Paris, Beach, Alps...)" style="font-size: 0.8rem;">
          </div>
        </div>

        <div class="photo-grid-scroll" id="photo-grid-list">
          <!-- Thumbnails rendered dynamically -->
        </div>

        <div style="margin-top: 0.75rem; border-top: 1px dashed var(--border-color); padding-top: 0.75rem;">
          <label class="form-label" style="font-size: 0.75rem; color: var(--text-secondary);">Or Paste Custom Image URL</label>
          <input type="url" class="form-control" id="input-custom-photo-url" placeholder="https://images.unsplash.com/photo-..." value="${currentUrl && !PHOTO_LIBRARY_PRESETS.some(p => p.url === currentUrl) ? currentUrl : ''}" style="font-size: 0.8rem; padding: 0.4rem 0.75rem;">
        </div>
      </div>
    `;
  }

  function setupPhotoGalleryPicker(modalContainer, selectedUrl, onSelectPhoto) {
    let currentSelected = selectedUrl || 'assets/images/hero.png';
    let currentCategory = 'all';
    let currentSearch = '';

    const gridList = modalContainer.querySelector('#photo-grid-list');
    const customUrlInput = modalContainer.querySelector('#input-custom-photo-url');
    const searchInput = modalContainer.querySelector('#photo-search-input');
    const catTabs = modalContainer.querySelectorAll('.photo-cat-btn');
    const autoDetectBtn = modalContainer.querySelector('#btn-auto-detect-photo');

    function renderGrid() {
      const filtered = PHOTO_LIBRARY_PRESETS.filter(p => {
        const matchesCat = currentCategory === 'all' || p.category === currentCategory;
        const matchesSearch = !currentSearch || p.name.toLowerCase().includes(currentSearch.toLowerCase()) || p.keywords.some(k => k.includes(currentSearch.toLowerCase()));
        return matchesCat && matchesSearch;
      });

      gridList.innerHTML = filtered.map(p => `
        <div class="photo-thumb-card ${p.url === currentSelected ? 'selected' : ''}" data-url="${p.url}">
          <img src="${p.url}" alt="${p.name}" loading="lazy" />
          <div class="thumb-badge">${p.name}</div>
        </div>
      `).join('');

      gridList.querySelectorAll('.photo-thumb-card').forEach(card => {
        card.addEventListener('click', () => {
          const url = card.getAttribute('data-url');
          currentSelected = url;
          if (customUrlInput) customUrlInput.value = '';
          renderGrid();
          onSelectPhoto(url, 'manual');
        });
      });
    }

    catTabs.forEach(btn => {
      btn.addEventListener('click', (e) => {
        catTabs.forEach(b => b.classList.remove('active'));
        e.currentTarget.classList.add('active');
        currentCategory = e.currentTarget.getAttribute('data-cat');
        renderGrid();
      });
    });

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        currentSearch = e.target.value;
        renderGrid();
      });
    }

    if (customUrlInput) {
      customUrlInput.addEventListener('input', (e) => {
        const url = e.target.value.trim();
        if (url) {
          currentSelected = url;
          renderGrid();
          onSelectPhoto(url, 'custom');
        }
      });
    }

    if (autoDetectBtn) {
      autoDetectBtn.addEventListener('click', () => {
        const destVal = modalContainer.querySelector('#input-destination')?.value;
        const titleVal = modalContainer.querySelector('#input-title')?.value;
        const queryText = (destVal && destVal.trim()) ? destVal : titleVal;
        const detectedUrl = resolveDestinationPhoto(queryText);
        currentSelected = detectedUrl;
        if (customUrlInput) customUrlInput.value = '';
        renderGrid();
        onSelectPhoto(detectedUrl, 'auto');
        showToast('Auto-detected destination photo!', 'info');
      });
    }

    renderGrid();
  }

  // --- Modals ---
  function openCreateTripModal(isPrivateByDefault = false) {
    let selectedCoverUrl = 'assets/images/hero.png';
    let isUserManualPick = false;

    const html = `
      <div class="modal-overlay active" id="modal-create-trip">
        <div class="modal-container" style="max-width: 680px;">
          <div class="modal-header">
            <h3>${icon('plane', 'var(--accent-primary)')} Create New Travel Plan</h3>
            <button class="btn btn-icon-only btn-secondary close-modal" type="button">&times;</button>
          </div>
          <div class="modal-body">
            <form id="form-create-trip" onsubmit="return false;">
              <div class="form-group">
                <label class="form-label">Trip Title *</label>
                <input type="text" class="form-control" id="input-title" name="title" placeholder="e.g. Summer Escape to Paris" required />
              </div>
              
              <div class="form-group">
                <label class="form-label" style="display: flex; align-items: center; justify-content: space-between;">
                  <span>Destination / Location</span>
                  <span style="font-size: 0.75rem; color: var(--accent-secondary); font-weight: normal; display: flex; align-items: center; gap: 0.25rem;">
                    ${icon('sparkles')} Auto-selects photo or pick manually!
                  </span>
                </label>
                <input type="text" class="form-control" id="input-destination" name="destination" placeholder="e.g. Paris, Tokyo, Maui, Rome, Swiss Alps..." />
              </div>

              <!-- Live Photo Preview Banner -->
              <div id="photo-preview-container" style="margin-bottom: 1.25rem; border-radius: var(--radius-md); overflow: hidden; height: 160px; border: 1px solid var(--border-color); position: relative;">
                <img id="img-cover-preview" src="${selectedCoverUrl}" style="width: 100%; height: 100%; object-fit: cover;" />
                <div style="position: absolute; bottom: 0.5rem; left: 0.5rem; background: rgba(0,0,0,0.75); backdrop-filter: blur(4px); padding: 0.3rem 0.75rem; border-radius: var(--radius-full); font-size: 0.75rem; color: #fff; display: flex; align-items: center; gap: 0.35rem;">
                  ${icon('image')} Selected Cover Photo
                </div>
              </div>

              <input type="hidden" name="coverImage" id="hidden-cover-image" value="${selectedCoverUrl}" />

              <!-- Interactive Gallery Picker -->
              ${buildPhotoGalleryHTML(selectedCoverUrl)}

              <div class="form-row" style="margin-top: 1.25rem;">
                <div class="form-group">
                  <label class="form-label">Start Date</label>
                  <input type="date" class="form-control" name="startDate" />
                </div>
                <div class="form-group">
                  <label class="form-label">End Date</label>
                  <input type="date" class="form-control" name="endDate" />
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">Estimated Budget ($)</label>
                  <input type="number" class="form-control" name="budget" placeholder="1500" min="0" />
                </div>
                <div class="form-group">
                  <label class="form-label">Privacy Level</label>
                  <select class="form-control" name="isPrivate">
                    <option value="false" ${!isPrivateByDefault ? 'selected' : ''}>Shared Group Trip (Collaborative)</option>
                    <option value="true" ${isPrivateByDefault ? 'selected' : ''}>Private Personal Trip (Only You)</option>
                  </select>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary cancel-modal" type="button">Cancel</button>
            <button class="btn btn-primary submit-modal" type="button">Create Trip Project</button>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', html);
    const m = document.getElementById('modal-create-trip');
    const close = () => m.remove();
    m.querySelectorAll('.cancel-modal, .close-modal').forEach(b => b.onclick = close);

    const titleInput = m.querySelector('#input-title');
    const destInput = m.querySelector('#input-destination');
    const imgPreview = m.querySelector('#img-cover-preview');
    const hiddenCover = m.querySelector('#hidden-cover-image');

    const updatePreviewPhoto = (url, origin = 'auto') => {
      selectedCoverUrl = url;
      imgPreview.src = url;
      hiddenCover.value = url;
      if (origin === 'manual' || origin === 'custom') isUserManualPick = true;
    };

    const autoUpdateOnTyping = () => {
      if (isUserManualPick) return; // respect manual selection
      const query = (destInput.value && destInput.value.trim()) ? destInput.value : titleInput.value;
      const detected = resolveDestinationPhoto(query);
      updatePreviewPhoto(detected, 'auto');
    };

    destInput.addEventListener('input', autoUpdateOnTyping);
    titleInput.addEventListener('input', autoUpdateOnTyping);

    setupPhotoGalleryPicker(m, selectedCoverUrl, (newUrl, mode) => {
      updatePreviewPhoto(newUrl, mode);
    });

    const handleSave = () => {
      const form = m.querySelector('#form-create-trip');
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());

      if (!data.title || !data.title.trim()) {
        showToast('Please enter a trip title', 'info');
        return;
      }

      data.coverImage = selectedCoverUrl || hiddenCover.value || resolveDestinationPhoto(data.destination || data.title);

      const newTrip = appStore.addTrip(data);
      close();
      showToast(`Trip created with selected photo!`, 'success');
      currentView = 'trip-detail';
      renderCurrentView();
    };

    m.querySelector('.submit-modal').onclick = handleSave;
    m.querySelector('#form-create-trip').onsubmit = handleSave;
  }

  function openEditTripModal(trip) {
    let selectedCoverUrl = trip.coverImage || 'assets/images/hero.png';

    const html = `
      <div class="modal-overlay active" id="modal-edit-trip">
        <div class="modal-container" style="max-width: 680px;">
          <div class="modal-header">
            <h3>${icon('settings', 'var(--accent-primary)')} Edit Trip & Change Cover Photo</h3>
            <button class="btn btn-icon-only btn-secondary close-modal" type="button">&times;</button>
          </div>
          <div class="modal-body">
            <form id="form-edit-trip" onsubmit="return false;">
              <div class="form-group">
                <label class="form-label">Trip Title *</label>
                <input type="text" class="form-control" id="input-edit-title" name="title" value="${trip.title}" required />
              </div>
              
              <div class="form-group">
                <label class="form-label">Destination / Location</label>
                <input type="text" class="form-control" id="input-edit-destination" name="destination" value="${trip.destination}" />
              </div>

              <!-- Live Cover Photo Preview -->
              <div style="margin-bottom: 1.25rem; border-radius: var(--radius-md); overflow: hidden; height: 160px; border: 1px solid var(--border-color); position: relative;">
                <img id="img-edit-cover-preview" src="${selectedCoverUrl}" style="width: 100%; height: 100%; object-fit: cover;" />
                <div style="position: absolute; bottom: 0.5rem; left: 0.5rem; background: rgba(0,0,0,0.75); backdrop-filter: blur(4px); padding: 0.3rem 0.75rem; border-radius: var(--radius-full); font-size: 0.75rem; color: #fff; display: flex; align-items: center; gap: 0.35rem;">
                  ${icon('image')} Current Cover Photo
                </div>
              </div>

              <input type="hidden" name="coverImage" id="hidden-edit-cover-image" value="${selectedCoverUrl}" />

              <!-- Interactive Gallery Picker -->
              ${buildPhotoGalleryHTML(selectedCoverUrl)}

              <div class="form-row" style="margin-top: 1.25rem;">
                <div class="form-group">
                  <label class="form-label">Start Date</label>
                  <input type="date" class="form-control" name="startDate" value="${trip.startDate || ''}" />
                </div>
                <div class="form-group">
                  <label class="form-label">End Date</label>
                  <input type="date" class="form-control" name="endDate" value="${trip.endDate || ''}" />
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">Estimated Budget ($)</label>
                  <input type="number" class="form-control" name="budget" value="${trip.budget || 0}" min="0" />
                </div>
                <div class="form-group">
                  <label class="form-label">Trip Status</label>
                  <select class="form-control" name="status">
                    <option value="upcoming" ${trip.status === 'upcoming' ? 'selected' : ''}>Upcoming</option>
                    <option value="active" ${trip.status === 'active' ? 'selected' : ''}>Active</option>
                    <option value="completed" ${trip.status === 'completed' ? 'selected' : ''}>Completed</option>
                    <option value="draft" ${trip.status === 'draft' ? 'selected' : ''}>Draft</option>
                  </select>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary cancel-modal" type="button">Cancel</button>
            <button class="btn btn-primary submit-modal" type="button">Save Changes</button>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', html);
    const m = document.getElementById('modal-edit-trip');
    const close = () => m.remove();
    m.querySelectorAll('.cancel-modal, .close-modal').forEach(b => b.onclick = close);

    const imgPreview = m.querySelector('#img-edit-cover-preview');
    const hiddenCover = m.querySelector('#hidden-edit-cover-image');

    const updatePreviewPhoto = (url) => {
      selectedCoverUrl = url;
      imgPreview.src = url;
      hiddenCover.value = url;
    };

    setupPhotoGalleryPicker(m, selectedCoverUrl, (newUrl) => {
      updatePreviewPhoto(newUrl);
    });

    const handleSave = () => {
      const form = m.querySelector('#form-edit-trip');
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());

      if (!data.title || !data.title.trim()) {
        showToast('Please enter a trip title', 'info');
        return;
      }

      data.coverImage = selectedCoverUrl || hiddenCover.value;
      appStore.updateTrip(trip.id, data);
      close();
      showToast('Trip updated successfully!', 'success');
      renderCurrentView();
    };

    m.querySelector('.submit-modal').onclick = handleSave;
    m.querySelector('#form-edit-trip').onsubmit = handleSave;
  }

  function openEditProfileModal() {
    const profile = appStore.loadProfile();
    const html = `
      <div class="modal-overlay active" id="modal-edit-profile">
        <div class="modal-container">
          <div class="modal-header">
            <h3>${icon('user', 'var(--accent-primary)')} Edit Personal Profile & Preferences</h3>
            <button class="btn btn-icon-only btn-secondary close-modal" type="button">&times;</button>
          </div>
          <div class="modal-body">
            <form id="form-edit-profile" onsubmit="return false;">
              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">Full Name</label>
                  <input type="text" class="form-control" name="name" value="${profile.name}" required />
                </div>
                <div class="form-group">
                  <label class="form-label">Avatar Initials</label>
                  <input type="text" class="form-control" name="avatar" value="${profile.avatar}" maxlength="3" required />
                </div>
              </div>
              <div class="form-group">
                <label class="form-label">Bio & Traveler Philosophy</label>
                <textarea class="form-control" name="bio" rows="3">${profile.bio}</textarea>
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">Home Airport</label>
                  <input type="text" class="form-control" name="homeAirport" value="${profile.homeAirport || ''}" placeholder="e.g. JFK / HND" />
                </div>
                <div class="form-group">
                  <label class="form-label">Preferred Currency</label>
                  <select class="form-control" name="currency">
                    <option value="USD" ${profile.currency === 'USD' ? 'selected' : ''}>USD ($)</option>
                    <option value="EUR" ${profile.currency === 'EUR' ? 'selected' : ''}>EUR (€)</option>
                    <option value="GBP" ${profile.currency === 'GBP' ? 'selected' : ''}>GBP (£)</option>
                    <option value="JPY" ${profile.currency === 'JPY' ? 'selected' : ''}>JPY (¥)</option>
                  </select>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">Passport Nationality</label>
                  <input type="text" class="form-control" name="passportCountry" value="${profile.passportCountry || ''}" />
                </div>
                <div class="form-group">
                  <label class="form-label">Dietary Preferences</label>
                  <input type="text" class="form-control" name="dietary" value="${profile.dietary || ''}" />
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary cancel-modal" type="button">Cancel</button>
            <button class="btn btn-primary submit-modal" type="button">Save Profile</button>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', html);
    const m = document.getElementById('modal-edit-profile');
    const close = () => m.remove();
    m.querySelectorAll('.cancel-modal, .close-modal').forEach(b => b.onclick = close);

    m.querySelector('.submit-modal').onclick = () => {
      const f = m.querySelector('#form-edit-profile');
      const data = Object.fromEntries(new FormData(f).entries());
      appStore.saveProfile(data);
      close();
      showToast('Profile preferences updated!', 'success');
      if (currentView === 'personal-space') renderCurrentView();
    };
  }

  function openInviteModal(trip) {
    const shareUrl = `${window.location.origin}${window.location.pathname}#trip=${trip.id}`;
    const html = `
      <div class="modal-overlay active" id="modal-invite">
        <div class="modal-container">
          <div class="modal-header">
            <h3>${icon('share-2', 'var(--accent-primary)')} Invite Collaborators to ${trip.title}</h3>
            <button class="btn btn-icon-only btn-secondary close-modal" type="button">&times;</button>
          </div>
          <div class="modal-body">
            <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 1rem;">
              Share this link with your travel partners so they can view and collaborate on this trip itinerary.
            </p>

            <div class="share-link-box">
              <input type="text" id="share-link-input" value="${shareUrl}" readonly />
              <button class="btn btn-primary btn-sm" id="btn-copy-link">
                ${icon('copy')} Copy
              </button>
            </div>

            <hr style="border: 0; border-top: 1px solid var(--border-color); margin: 1.5rem 0;" />

            <h4>Or Invite via Email / Name</h4>
            <form id="form-invite-att" onsubmit="return false;" style="margin-top: 1rem;">
              <div class="form-group">
                <label class="form-label">Collaborator Name *</label>
                <input type="text" class="form-control" name="name" placeholder="e.g. Jordan Smith" required />
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">Role</label>
                  <select class="form-control" name="role">
                    <option value="Co-planner">Co-planner (Can edit)</option>
                    <option value="Member">Member (Can add expenses)</option>
                    <option value="Viewer">Viewer (Read only)</option>
                  </select>
                </div>
                <div class="form-group">
                  <label class="form-label">Email Address</label>
                  <input type="email" class="form-control" name="email" placeholder="jordan@example.com" />
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary cancel-modal" type="button">Close</button>
            <button class="btn btn-primary submit-modal" type="button">Add Collaborator</button>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', html);
    const m = document.getElementById('modal-invite');
    const close = () => m.remove();
    m.querySelectorAll('.cancel-modal, .close-modal').forEach(b => b.onclick = close);

    m.querySelector('#btn-copy-link').onclick = () => {
      const input = m.querySelector('#share-link-input');
      input.select();
      navigator.clipboard.writeText(shareUrl);
      showToast('Invite link copied to clipboard!', 'success');
    };

    m.querySelector('.submit-modal').onclick = () => {
      const f = m.querySelector('#form-invite-att');
      const data = Object.fromEntries(new FormData(f).entries());
      if (!data.name || !data.name.trim()) return showToast('Please enter a name', 'info');
      appStore.addAttendee(trip.id, data);
      close();
      showToast('Collaborator invited!', 'success');
      renderCurrentView();
    };
  }

  function resolveDestinationTimezone(destinationText) {
    if (!destinationText) return 'Destination Local Timezone (Auto-locked)';
    const query = destinationText.toLowerCase();
    if (query.includes('tokyo') || query.includes('japan') || query.includes('kyoto') || query.includes('osaka')) return 'Asia/Tokyo (JST, UTC+9)';
    if (query.includes('cancun') || query.includes('mexico') || query.includes('playa')) return 'America/Cancun (EST, UTC-5)';
    if (query.includes('paris') || query.includes('france') || query.includes('rome') || query.includes('italy') || query.includes('spain') || query.includes('barcelona') || query.includes('swiss') || query.includes('alps') || query.includes('amsterdam')) return 'Europe/Paris (CEST, UTC+2)';
    if (query.includes('london') || query.includes('uk') || query.includes('edinburgh') || query.includes('dublin')) return 'Europe/London (BST, UTC+1)';
    if (query.includes('new york') || query.includes('nyc') || query.includes('miami') || query.includes('orlando')) return 'America/New_York (EDT, UTC-4)';
    if (query.includes('hawaii') || query.includes('honolulu') || query.includes('maui')) return 'Pacific/Honolulu (HST, UTC-10)';
    if (query.includes('bali') || query.includes('indonesia')) return 'Asia/Makassar (WITA, UTC+8)';
    if (query.includes('phuket') || query.includes('thailand') || query.includes('bangkok')) return 'Asia/Bangkok (ICT, UTC+7)';
    if (query.includes('sydney') || query.includes('australia')) return 'Australia/Sydney (AEST, UTC+10)';
    if (query.includes('dubai') || query.includes('uae')) return 'Asia/Dubai (GST, UTC+4)';
    return 'Destination Local Timezone (Auto-locked)';
  }

  function formatDayDateLabel(trip, dayNum) {
    if (!trip || !trip.startDate) return `Day ${dayNum}`;
    const start = new Date(trip.startDate + 'T00:00:00');
    start.setDate(start.getDate() + (dayNum - 1));
    const dayName = start.toLocaleDateString('en-US', { weekday: 'short' });
    const monthName = start.toLocaleDateString('en-US', { month: 'short' });
    const dateNum = start.getDate();
    const yearNum = start.getFullYear();
    return `Day ${dayNum} • ${dayName}, ${monthName} ${dateNum}, ${yearNum}`;
  }

  function getCategoryIcon(cat) {
    const c = (cat || '').toLowerCase();
    if (c === 'transit') return 'plane';
    if (c === 'lodging') return 'building';
    if (c === 'dining') return 'star';
    if (c === 'note') return 'file-text';
    return 'compass';
  }

  function getTitlePlaceholder(cat) {
    const c = (cat || '').toLowerCase();
    if (c === 'transit') return 'e.g. Flight JL005 to Tokyo or Shinkansen Express';
    if (c === 'lodging') return 'e.g. Check-in Park Hyatt Tokyo';
    if (c === 'dining') return 'e.g. Sukiyabashi Jiro Omakase Dinner';
    if (c === 'note') return 'e.g. Pick up Pocket Wi-Fi at Haneda Airport';
    return 'e.g. Hike to Alum Cave Bluffs or Visit Senso-ji Temple';
  }

  function buildConditionalFieldsHTML(cat) {
    const c = (cat || '').toLowerCase();
    if (c === 'transit') {
      return `
        <div class="form-row">
          <div class="form-group" style="margin-bottom: 0;">
            <label class="form-label">Carrier / Transport Type</label>
            <input type="text" class="form-control" name="transitCarrier" placeholder="e.g. Japan Airlines / Shinkansen" />
          </div>
          <div class="form-group" style="margin-bottom: 0;">
            <label class="form-label">Flight / Train #</label>
            <input type="text" class="form-control" name="transitNumber" placeholder="e.g. JL005 / Nozomi 12" />
          </div>
        </div>
      `;
    }
    if (c === 'lodging') {
      return `
        <div class="form-row">
          <div class="form-group" style="margin-bottom: 0;">
            <label class="form-label">Accommodation Type</label>
            <select class="form-control" name="lodgingType">
              <option value="Hotel">Hotel</option>
              <option value="Resort">Resort</option>
              <option value="Airbnb / Villa">Airbnb / Villa</option>
              <option value="Hostel">Hostel</option>
            </select>
          </div>
          <div class="form-group" style="margin-bottom: 0;">
            <label class="form-label">Room / Booking Ref</label>
            <input type="text" class="form-control" name="lodgingRef" placeholder="e.g. Deluxe Suite / Conf #883" />
          </div>
        </div>
      `;
    }
    if (c === 'dining') {
      return `
        <div class="form-row">
          <div class="form-group" style="margin-bottom: 0;">
            <label class="form-label">Cuisine / Dining Type</label>
            <input type="text" class="form-control" name="diningType" placeholder="e.g. Japanese Ramen, Seafood, Omakase" />
          </div>
          <div class="form-group" style="margin-bottom: 0;">
            <label class="form-label">Party Size / Reservation Name</label>
            <input type="text" class="form-control" name="partySize" placeholder="e.g. Party of 4 under Rivers" />
          </div>
        </div>
      `;
    }
    if (c === 'note') {
      return `
        <div style="background: rgba(139, 92, 246, 0.08); border: 1px solid rgba(139, 92, 246, 0.25); border-radius: var(--radius-md); padding: 0.75rem 1rem; font-size: 0.82rem; color: var(--text-secondary);">
          📝 <strong>Travel Note:</strong> Memos and reminders will anchor directly to your day timeline feed.
        </div>
      `;
    }
    return `
      <div class="form-row">
        <div class="form-group" style="margin-bottom: 0;">
          <label class="form-label">Estimated Duration</label>
          <input type="text" class="form-control" name="duration" placeholder="e.g. 2.5 hrs" />
        </div>
        <div class="form-group" style="margin-bottom: 0;">
          <label class="form-label">Activity Type</label>
          <select class="form-control" name="activityType">
            <option value="Sightseeing">Sightseeing</option>
            <option value="Culture & Art">Culture & Art</option>
            <option value="Outdoor & Hiking">Outdoor & Hiking</option>
            <option value="Guided Tour">Guided Tour</option>
            <option value="Entertainment">Entertainment</option>
          </select>
        </div>
      </div>
    `;
  }

  function openAddItineraryModal(trip, defaultCategory = 'activity', initialDay = 1, initialTime = '09:00') {
    let currentCategory = defaultCategory || 'activity';
    let isAllDay = false;
    let isAccordionExpanded = false;

    let totalDays = 7;
    if (trip.startDate && trip.endDate) {
      const s = new Date(trip.startDate + 'T00:00:00');
      const e = new Date(trip.endDate + 'T00:00:00');
      const diff = Math.max(1, Math.ceil((e - s) / (1000 * 60 * 60 * 24)) + 1);
      totalDays = Math.max(diff, 14);
    }
    const daysList = Array.from({ length: totalDays }, (_, i) => i + 1);
    const tzLabel = resolveDestinationTimezone(trip.destination || trip.title);

    const html = `
      <div class="modal-overlay active" id="modal-add-it">
        <div class="modal-container" style="max-width: 640px;">
          <div class="modal-header" style="align-items: flex-start;">
            <div>
              <div style="font-size: 0.75rem; font-weight: 700; color: var(--accent-primary); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.2rem; display: flex; align-items: center; gap: 0.35rem;">
                <span>Trip: ${trip.title}</span>
              </div>
              <h3 style="font-size: 1.35rem; display: flex; align-items: center; gap: 0.5rem;">
                <span id="modal-category-icon">${icon(getCategoryIcon(currentCategory), 'var(--accent-primary)')}</span>
                <span>Add Activity / Event</span>
              </h3>
            </div>
            <div style="display: flex; align-items: center; gap: 0.5rem;">
              <span class="kbd-badge" title="Press Esc key to cancel">Esc</span>
              <button class="btn btn-icon-only btn-secondary close-modal" type="button">&times;</button>
            </div>
          </div>

          <div class="modal-body">
            <form id="form-add-it" onsubmit="return false;">
              <div class="category-segmented-bar" id="it-category-bar">
                <button type="button" class="cat-tab-btn ${currentCategory === 'transit' ? 'active' : ''}" data-category="transit">
                  ✈️ Transit
                </button>
                <button type="button" class="cat-tab-btn ${currentCategory === 'lodging' ? 'active' : ''}" data-category="lodging">
                  🏨 Stay
                </button>
                <button type="button" class="cat-tab-btn ${currentCategory === 'dining' ? 'active' : ''}" data-category="dining">
                  🍽️ Food &amp; Drink
                </button>
                <button type="button" class="cat-tab-btn ${currentCategory === 'activity' || currentCategory === 'sightseeing' || currentCategory === 'culture' ? 'active' : ''}" data-category="activity">
                  🎟️ Activity
                </button>
                <button type="button" class="cat-tab-btn ${currentCategory === 'note' ? 'active' : ''}" data-category="note">
                  📝 General Note
                </button>
              </div>

              <input type="hidden" name="category" id="hidden-it-category" value="${currentCategory}" />

              <div class="form-group">
                <label class="form-label" id="label-title">Activity / Event Name *</label>
                <input type="text" class="form-control" id="input-it-title" name="title" placeholder="${getTitlePlaceholder(currentCategory)}" required />
              </div>

              <div id="conditional-fields-container" style="margin-bottom: 1.25rem;">
                ${buildConditionalFieldsHTML(currentCategory)}
              </div>

              <div class="form-group">
                <label class="form-label" style="display: flex; align-items: center; justify-content: space-between;">
                  <span>Location / Address</span>
                  <a href="https://maps.google.com" target="_blank" id="link-maps-preview" style="font-size: 0.78rem; color: var(--accent-primary); font-weight: 600; text-decoration: none; display: flex; align-items: center; gap: 0.25rem;">
                    ${icon('map-pin', 'var(--accent-primary)')} Open Maps &rarr;
                  </a>
                </label>
                <input type="text" class="form-control" id="input-it-location" name="location" placeholder="e.g. Asakusa, Tokyo, Japan or 123 Main St" />
              </div>

              <div class="card" style="background: rgba(15, 23, 42, 0.4); border-color: var(--border-color); padding: 1rem; margin-bottom: 1.25rem;">
                <div class="form-group" style="margin-bottom: 0.85rem;">
                  <label class="form-label">Day Schedule Target</label>
                  <select class="form-control" name="day" id="select-it-day">
                    ${daysList.map(d => `
                      <option value="${d}" ${d === initialDay ? 'selected' : ''}>
                        ${formatDayDateLabel(trip, d)}
                      </option>
                    `).join('')}
                  </select>
                </div>

                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.75rem;">
                  <span style="font-size: 0.85rem; font-weight: 600; color: var(--text-secondary);">Scheduling Times</span>
                  <label class="toggle-switch">
                    <input type="checkbox" id="toggle-all-day" class="toggle-switch-input" style="display: none;" />
                    <span class="toggle-switch-track">
                      <span class="toggle-switch-thumb"></span>
                    </span>
                    <span style="font-size: 0.8rem; font-weight: 600; color: var(--text-secondary);">All Day / Flexible Time</span>
                  </label>
                </div>

                <div class="form-row" id="time-pickers-row">
                  <div class="form-group" style="margin-bottom: 0;">
                    <label class="form-label">Start Time</label>
                    <input type="time" class="form-control" id="input-start-time" name="time" value="${initialTime}" />
                  </div>
                  <div class="form-group" style="margin-bottom: 0;">
                    <label class="form-label">End Time (Optional)</label>
                    <input type="time" class="form-control" id="input-end-time" name="endTime" value="10:30" />
                  </div>
                </div>

                <div class="tz-lock-badge">
                  🌐 Destination Timezone: <strong>${tzLabel}</strong>
                </div>
              </div>

              <div class="accordion-wrapper">
                <button type="button" class="accordion-trigger" id="btn-toggle-logistics">
                  <span style="display: flex; align-items: center; gap: 0.5rem;">
                    ⚙️ Logistics, Reservation &amp; Expenses (Optional)
                  </span>
                  <span id="accordion-chevron" style="transition: transform 0.2s ease;">▼</span>
                </button>
                <div class="accordion-content" id="logistics-accordion-body">
                  <div class="form-group">
                    <label class="form-label">Confirmation / Reservation Code</label>
                    <div style="display: flex; gap: 0.5rem;">
                      <input type="text" class="form-control" id="input-it-conf" name="confirmation" placeholder="e.g. JAL-982173 or HTL-8831" style="font-family: monospace;" />
                      <button type="button" class="btn btn-secondary btn-sm" id="btn-copy-conf" style="white-space: nowrap;">
                        ${icon('copy')} Copy
                      </button>
                    </div>
                  </div>

                  <div class="form-row">
                    <div class="form-group">
                      <label class="form-label">Cost / Expense ($)</label>
                      <input type="number" step="0.01" class="form-control" id="input-it-cost" name="cost" placeholder="0.00" min="0" />
                    </div>
                    <div class="form-group" style="display: flex; flex-direction: column; justify-content: flex-end;">
                      <label class="toggle-switch" style="margin-bottom: 0.6rem;">
                        <input type="checkbox" id="toggle-attach-expense" name="attachExpense" class="toggle-switch-input" style="display: none;" checked />
                        <span class="toggle-switch-track">
                          <span class="toggle-switch-thumb"></span>
                        </span>
                        <span style="font-size: 0.8rem; font-weight: 600; color: var(--text-secondary);">Attach to Trip Expenses</span>
                      </label>
                    </div>
                  </div>

                  <div class="form-group" style="margin-bottom: 0;">
                    <label class="form-label">Ticket / Booking URL Attachment</label>
                    <input type="url" class="form-control" id="input-it-url" name="attachmentUrl" placeholder="https://booking.com/ticket.pdf..." style="font-size: 0.8rem;" />
                  </div>
                </div>
              </div>

              <div class="form-group" style="margin-top: 1.25rem;">
                <label class="form-label">Notes &amp; Reminders</label>
                <textarea class="form-control" id="input-it-notes" name="notes" rows="3" placeholder="Add parking tips, trail notes, voucher details, or packing reminders..."></textarea>
              </div>
            </form>
          </div>

          <div class="modal-footer" style="justify-content: space-between; flex-wrap: wrap; gap: 0.75rem;">
            <button class="btn btn-secondary cancel-modal" type="button">Cancel</button>

            <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
              <button class="btn btn-secondary" id="btn-save-add-another" type="button">
                ➕ Save &amp; Add Another
              </button>
              <button class="btn btn-primary submit-modal" id="btn-submit-it" type="button" style="display: flex; align-items: center; gap: 0.5rem;">
                <span>Add to Timeline</span>
                <span class="kbd-badge">Ctrl + Enter</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', html);
    const m = document.getElementById('modal-add-it');
    const titleInput = m.querySelector('#input-it-title');
    const locationInput = m.querySelector('#input-it-location');
    const mapsLink = m.querySelector('#link-maps-preview');
    const hiddenCategoryInput = m.querySelector('#hidden-it-category');
    const categoryIconEl = m.querySelector('#modal-category-icon');
    const conditionalContainer = m.querySelector('#conditional-fields-container');

    setTimeout(() => titleInput?.focus(), 100);

    const close = () => {
      document.removeEventListener('keydown', handleKeydown);
      m.remove();
    };

    m.querySelectorAll('.cancel-modal, .close-modal').forEach(b => b.onclick = close);

    locationInput?.addEventListener('input', (e) => {
      const val = e.target.value.trim();
      const query = val ? (val + ' ' + (trip.destination || '')) : (trip.destination || '');
      mapsLink.href = `https://maps.google.com/?q=${encodeURIComponent(query)}`;
    });

    m.querySelectorAll('.cat-tab-btn').forEach(tabBtn => {
      tabBtn.addEventListener('click', (e) => {
        m.querySelectorAll('.cat-tab-btn').forEach(b => b.classList.remove('active'));
        const btn = e.currentTarget;
        btn.classList.add('active');
        const cat = btn.getAttribute('data-category');
        currentCategory = cat;
        hiddenCategoryInput.value = cat;
        categoryIconEl.innerHTML = icon(getCategoryIcon(cat), 'var(--accent-primary)');
        titleInput.placeholder = getTitlePlaceholder(cat);
        conditionalContainer.innerHTML = buildConditionalFieldsHTML(cat);
      });
    });

    const allDayToggle = m.querySelector('#toggle-all-day');
    const timePickersRow = m.querySelector('#time-pickers-row');
    allDayToggle?.addEventListener('change', () => {
      isAllDay = allDayToggle.checked;
      if (isAllDay) {
        timePickersRow.style.opacity = '0.4';
        timePickersRow.style.pointerEvents = 'none';
      } else {
        timePickersRow.style.opacity = '1';
        timePickersRow.style.pointerEvents = 'auto';
      }
    });

    const accordionBtn = m.querySelector('#btn-toggle-logistics');
    const accordionBody = m.querySelector('#logistics-accordion-body');
    const accordionChevron = m.querySelector('#accordion-chevron');
    accordionBtn?.addEventListener('click', () => {
      isAccordionExpanded = !isAccordionExpanded;
      if (isAccordionExpanded) {
        accordionBody.classList.add('expanded');
        accordionChevron.style.transform = 'rotate(180deg)';
      } else {
        accordionBody.classList.remove('expanded');
        accordionChevron.style.transform = 'rotate(0deg)';
      }
    });

    m.querySelector('#btn-copy-conf')?.addEventListener('click', () => {
      const confVal = m.querySelector('#input-it-conf')?.value;
      if (confVal) {
        navigator.clipboard.writeText(confVal);
        showToast('Confirmation code copied!', 'success');
      } else {
        showToast('Please enter a confirmation code first', 'info');
      }
    });

    const handleSave = (keepOpen = false) => {
      const form = m.querySelector('#form-add-it');
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());

      if (!data.title || !data.title.trim()) {
        showToast('Please enter an activity title', 'info');
        titleInput?.focus();
        return;
      }

      data.day = parseInt(data.day) || 1;
      data.time = isAllDay ? 'All Day' : (data.time || '09:00');
      data.category = currentCategory;

      appStore.addItineraryItem(trip.id, data);

      const attachExp = m.querySelector('#toggle-attach-expense')?.checked;
      const costVal = parseFloat(data.cost) || 0;
      if (attachExp && costVal > 0) {
        appStore.addExpense(trip.id, {
          title: data.title,
          amount: costVal,
          category: currentCategory === 'dining' ? 'Dining' : (currentCategory === 'transit' ? 'Transit' : 'Activities'),
          paidBy: appStore.profile.name,
          splitWith: (trip.attendees || []).map(a => a.name)
        });
      }

      if (keepOpen) {
        showToast(`Saved "${data.title}"! Add another...`, 'success');
        titleInput.value = '';
        if (locationInput) locationInput.value = '';
        const costInput = m.querySelector('#input-it-cost');
        if (costInput) costInput.value = '';
        const confInput = m.querySelector('#input-it-conf');
        if (confInput) confInput.value = '';
        titleInput.focus();
        renderCurrentView();
      } else {
        close();
        showToast(`Added "${data.title}" to Day ${data.day} timeline!`, 'success');
        renderCurrentView();
      }
    };

    m.querySelector('#btn-submit-it').onclick = () => handleSave(false);
    m.querySelector('#btn-save-add-another').onclick = () => handleSave(true);

    const handleKeydown = (e) => {
      if (e.key === 'Escape') {
        close();
      } else if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
        e.preventDefault();
        handleSave(false);
      }
    };

    document.addEventListener('keydown', handleKeydown);
  }

  function openAddActivityModal(trip) {
    const html = `
      <div class="modal-overlay active" id="modal-add-act">
        <div class="modal-container">
          <div class="modal-header">
            <h3>${icon('compass', 'var(--accent-primary)')} Add Activity</h3>
            <button class="btn btn-icon-only btn-secondary close-modal" type="button">&times;</button>
          </div>
          <div class="modal-body">
            <form id="form-add-act" onsubmit="return false;">
              <div class="form-group">
                <label class="form-label">Title *</label>
                <input type="text" class="form-control" name="title" placeholder="e.g. Helicopter Tour" required />
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">Category</label>
                  <select class="form-control" name="category">
                    <option value="Sightseeing">Sightseeing</option>
                    <option value="Culture">Culture</option>
                    <option value="Dining">Dining</option>
                    <option value="Adventure">Adventure</option>
                  </select>
                </div>
                <div class="form-group">
                  <label class="form-label">Status</label>
                  <select class="form-control" name="status">
                    <option value="Planned">Planned</option>
                    <option value="Booked">Booked</option>
                  </select>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">Cost ($)</label>
                  <input type="number" class="form-control" name="cost" placeholder="100" />
                </div>
                <div class="form-group">
                  <label class="form-label">Duration</label>
                  <input type="text" class="form-control" name="duration" placeholder="e.g. 2 hrs" />
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary cancel-modal" type="button">Cancel</button>
            <button class="btn btn-primary submit-modal" type="button">Save Activity</button>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', html);
    const m = document.getElementById('modal-add-act');
    const close = () => m.remove();
    m.querySelectorAll('.cancel-modal, .close-modal').forEach(b => b.onclick = close);

    const handleSave = () => {
      const f = m.querySelector('#form-add-act');
      const data = Object.fromEntries(new FormData(f).entries());
      if (!data.title || !data.title.trim()) return showToast('Please enter activity title', 'info');
      data.cost = parseFloat(data.cost) || 0;
      appStore.addActivity(trip.id, data);
      close();
      showToast('Activity saved!', 'success');
      renderCurrentView();
    };
    m.querySelector('.submit-modal').onclick = handleSave;
  }

  function openAddPackingModal(trip) {
    const html = `
      <div class="modal-overlay active" id="modal-add-pack">
        <div class="modal-container">
          <div class="modal-header">
            <h3>${icon('plus-circle', 'var(--accent-primary)')} Add Packing Item</h3>
            <button class="btn btn-icon-only btn-secondary close-modal" type="button">&times;</button>
          </div>
          <div class="modal-body">
            <form id="form-add-pack" onsubmit="return false;">
              <div class="form-group">
                <label class="form-label">Item Name *</label>
                <input type="text" class="form-control" name="item" placeholder="e.g. Universal Adapter" required />
              </div>
              <div class="form-group">
                <label class="form-label">Category</label>
                <select class="form-control" name="category">
                  <option value="Essentials">Essentials</option>
                  <option value="Clothing">Clothing</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Toiletries">Toiletries</option>
                </select>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary cancel-modal" type="button">Cancel</button>
            <button class="btn btn-primary submit-modal" type="button">Add</button>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', html);
    const m = document.getElementById('modal-add-pack');
    const close = () => m.remove();
    m.querySelectorAll('.cancel-modal, .close-modal').forEach(b => b.onclick = close);

    const handleSave = () => {
      const f = m.querySelector('#form-add-pack');
      const data = Object.fromEntries(new FormData(f).entries());
      if (!data.item || !data.item.trim()) return showToast('Please enter item name', 'info');
      appStore.addPackingItem(trip.id, data);
      close();
      showToast('Packing item added!', 'success');
      renderCurrentView();
    };
    m.querySelector('.submit-modal').onclick = handleSave;
  }

  function openAddExpenseModal(trip) {
    const attendees = trip.attendees || [];
    const html = `
      <div class="modal-overlay active" id="modal-add-exp">
        <div class="modal-container">
          <div class="modal-header">
            <h3>${icon('dollar-sign', 'var(--accent-primary)')} Log Expense</h3>
            <button class="btn btn-icon-only btn-secondary close-modal" type="button">&times;</button>
          </div>
          <div class="modal-body">
            <form id="form-add-exp" onsubmit="return false;">
              <div class="form-group">
                <label class="form-label">Description *</label>
                <input type="text" class="form-control" name="title" placeholder="e.g. Welcome Dinner" required />
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">Amount ($) *</label>
                  <input type="number" step="0.01" class="form-control" name="amount" placeholder="150.00" required />
                </div>
                <div class="form-group">
                  <label class="form-label">Category</label>
                  <select class="form-control" name="category">
                    <option value="Dining">Dining</option>
                    <option value="Lodging">Lodging</option>
                    <option value="Transit">Transit</option>
                    <option value="Activities">Activities</option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <label class="form-label">Paid By</label>
                <select class="form-control" name="paidBy">
                  ${attendees.map(a => `<option value="${a.name}">${a.name}</option>`).join('')}
                </select>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary cancel-modal" type="button">Cancel</button>
            <button class="btn btn-primary submit-modal" type="button">Log Expense</button>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', html);
    const m = document.getElementById('modal-add-exp');
    const close = () => m.remove();
    m.querySelectorAll('.cancel-modal, .close-modal').forEach(b => b.onclick = close);

    const handleSave = () => {
      const f = m.querySelector('#form-add-exp');
      const d = Object.fromEntries(new FormData(f).entries());
      if (!d.title || !d.title.trim()) return showToast('Please enter expense description', 'info');
      d.amount = parseFloat(d.amount) || 0;
      d.splitWith = attendees.map(a => a.name);
      appStore.addExpense(trip.id, d);
      close();
      showToast('Expense logged!', 'success');
      renderCurrentView();
    };
    m.querySelector('.submit-modal').onclick = handleSave;
  }

  function openSettingsModal() {
    const settings = appStore.loadSettings();
    const html = `
      <div class="modal-overlay active" id="modal-settings">
        <div class="modal-container">
          <div class="modal-header">
            <h3>${icon('settings', 'var(--accent-primary)')} Database & Settings</h3>
            <button class="btn btn-icon-only btn-secondary close-modal" type="button">&times;</button>
          </div>
          <div class="modal-body">
            <div style="background: rgba(99, 102, 241, 0.08); border: 1px solid rgba(99, 102, 241, 0.25); border-radius: var(--radius-md); padding: 1rem; margin-bottom: 1.5rem;">
              <strong style="color: var(--accent-primary); display: flex; align-items: center; gap: 0.5rem;">
                ${icon('cloud')} Free Supabase Cloud Database Adapter
              </strong>
              <p style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.35rem;">
                WanderPulse stores your trips locally in browser storage out of the box. Connect a free project on <strong>Supabase.com</strong> to sync across devices!
              </p>
            </div>
            <form id="form-settings" onsubmit="return false;">
              <div class="form-group">
                <label class="form-label">Supabase Project URL</label>
                <input type="url" class="form-control" name="supabaseUrl" placeholder="https://your-project.supabase.co" value="${settings.supabaseUrl || ''}" />
              </div>
              <div class="form-group">
                <label class="form-label">Supabase Anon / Publishable Key</label>
                <input type="text" class="form-control" name="supabaseKey" placeholder="sb_publishable_..." value="${settings.supabaseKey || ''}" />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary cancel-modal" type="button">Cancel</button>
            <button class="btn btn-primary submit-modal" type="button">Save Settings</button>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', html);
    const m = document.getElementById('modal-settings');
    const close = () => m.remove();
    m.querySelectorAll('.cancel-modal, .close-modal').forEach(b => b.onclick = close);

    m.querySelector('.submit-modal').onclick = () => {
      const f = m.querySelector('#form-settings');
      appStore.saveSettings(Object.fromEntries(new FormData(f).entries()));
      close();
      showToast('Cloud Database Settings saved!', 'success');
    };
  }

  // --- Calculations & Helpers ---
  function calculateSettlements(balancesObj) {
    const debtors = [];
    const creditors = [];
    Object.entries(balancesObj).forEach(([person, amt]) => {
      if (amt < -0.01) debtors.push({ person, amount: -amt });
      else if (amt > 0.01) creditors.push({ person, amount: amt });
    });
    const settlements = [];
    let i = 0, j = 0;
    while (i < debtors.length && j < creditors.length) {
      const d = debtors[i], c = creditors[j];
      const sAmt = Math.min(d.amount, c.amount);
      settlements.push({ from: d.person, to: c.person, amount: sAmt });
      d.amount -= sAmt;
      c.amount -= sAmt;
      if (d.amount < 0.01) i++;
      if (c.amount < 0.01) j++;
    }
    return settlements;
  }

  function renderExpenseChart(expenses) {
    const ctx = document.getElementById('expenseChart');
    if (!ctx || !window.Chart) return;
    const catMap = {};
    expenses.forEach(e => {
      const c = e.category || 'Other';
      catMap[c] = (catMap[c] || 0) + (parseFloat(e.amount) || 0);
    });
    new window.Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: Object.keys(catMap).length > 0 ? Object.keys(catMap) : ['No Expenses'],
        datasets: [{ data: Object.values(catMap).length > 0 ? Object.values(catMap) : [1], backgroundColor: ['#6366f1', '#06b6d4', '#10b981', '#f59e0b', '#ec4899'] }]
      },
      options: { responsive: true, plugins: { legend: { position: 'bottom', labels: { color: '#94a3b8' } } } }
    });
  }

  // --- Geocoding Destination & Event Coordinates ---
  const DESTINATION_COORDINATES_MAP = {
    'cancun': { lat: 21.1619, lng: -86.8515 },
    'cozumel': { lat: 20.4230, lng: -86.9223 },
    'playa del carmen': { lat: 20.6296, lng: -87.0739 },
    'tulum': { lat: 20.2114, lng: -87.4654 },
    'cabo': { lat: 22.8905, lng: -109.9167 },
    'puerto vallarta': { lat: 20.6534, lng: -105.2253 },
    'mexico': { lat: 19.4326, lng: -99.1332 },
    'paris': { lat: 48.8566, lng: 2.3522 },
    'nice': { lat: 43.7102, lng: 7.2620 },
    'lyon': { lat: 45.7640, lng: 4.8357 },
    'france': { lat: 48.8566, lng: 2.3522 },
    'rome': { lat: 41.9028, lng: 12.4964 },
    'florence': { lat: 43.7696, lng: 11.2558 },
    'venice': { lat: 45.4408, lng: 12.3155 },
    'amalfi': { lat: 40.6340, lng: 14.6027 },
    'positano': { lat: 40.6281, lng: 14.4850 },
    'milan': { lat: 45.4642, lng: 9.1900 },
    'italy': { lat: 41.9028, lng: 12.4964 },
    'tokyo': { lat: 35.6762, lng: 139.6503 },
    'kyoto': { lat: 35.0116, lng: 135.7681 },
    'osaka': { lat: 34.6937, lng: 135.5023 },
    'japan': { lat: 35.6762, lng: 139.6503 },
    'bali': { lat: -8.4095, lng: 115.1889 },
    'ubud': { lat: -8.5069, lng: 115.2625 },
    'indonesia': { lat: -8.4095, lng: 115.1889 },
    'hawaii': { lat: 21.3069, lng: -157.8583 },
    'honolulu': { lat: 21.3069, lng: -157.8583 },
    'maui': { lat: 20.7984, lng: -156.3319 },
    'kauai': { lat: 22.0964, lng: -159.5261 },
    'new york': { lat: 40.7128, lng: -74.0060 },
    'nyc': { lat: 40.7128, lng: -74.0060 },
    'manhattan': { lat: 40.7831, lng: -73.9712 },
    'london': { lat: 51.5074, lng: -0.1278 },
    'edinburgh': { lat: 55.9533, lng: -3.1883 },
    'uk': { lat: 51.5074, lng: -0.1278 },
    'barcelona': { lat: 41.3851, lng: 2.1734 },
    'madrid': { lat: 40.4168, lng: -3.7038 },
    'seville': { lat: 37.3891, lng: -5.9845 },
    'ibiza': { lat: 38.9067, lng: 1.4206 },
    'spain': { lat: 40.4168, lng: -3.7038 },
    'dubai': { lat: 25.2048, lng: 55.2708 },
    'abu dhabi': { lat: 24.4539, lng: 54.3773 },
    'uae': { lat: 25.2048, lng: 55.2708 },
    'iceland': { lat: 64.1466, lng: -21.9426 },
    'reykjavik': { lat: 64.1466, lng: -21.9426 },
    'sydney': { lat: -33.8688, lng: 151.2093 },
    'melbourne': { lat: -37.8136, lng: 144.9631 },
    'australia': { lat: -33.8688, lng: 151.2093 },
    'cairo': { lat: 30.0444, lng: 31.2357 },
    'egypt': { lat: 30.0444, lng: 31.2357 },
    'phuket': { lat: 7.8804, lng: 98.3923 },
    'bangkok': { lat: 13.7563, lng: 100.5018 },
    'krabi': { lat: 8.0863, lng: 98.9063 },
    'thailand': { lat: 13.7563, lng: 100.5018 },
    'santorini': { lat: 36.3932, lng: 25.4615 },
    'athens': { lat: 37.9838, lng: 23.7275 },
    'mykonos': { lat: 37.4467, lng: 25.3289 },
    'greece': { lat: 37.9838, lng: 23.7275 },
    'miami': { lat: 25.7617, lng: -80.1918 },
    'orlando': { lat: 28.5383, lng: -81.3792 },
    'key west': { lat: 24.5551, lng: -81.7800 },
    'florida': { lat: 25.7617, lng: -80.1918 },
    'venice': { lat: 45.4408, lng: 12.3155 },
    'amsterdam': { lat: 52.3676, lng: 4.9041 },
    'swiss': { lat: 46.8182, lng: 8.2275 },
    'switzerland': { lat: 46.8182, lng: 8.2275 },
    'zermatt': { lat: 46.0207, lng: 7.7491 },
    'zurich': { lat: 47.3769, lng: 8.5417 },
    'alps': { lat: 46.8182, lng: 8.2275 },
    'las vegas': { lat: 36.1699, lng: -115.1398 },
    'vegas': { lat: 36.1699, lng: -115.1398 },
    'chicago': { lat: 41.8781, lng: -87.6298 },
    'san francisco': { lat: 37.7749, lng: -122.4194 },
    'los angeles': { lat: 34.0522, lng: -118.2437 },
    'seattle': { lat: 47.6062, lng: -122.3321 },
    'yosemite': { lat: 37.8651, lng: -119.5383 },
    'grand canyon': { lat: 36.1069, lng: -112.1129 },
    'maldives': { lat: 3.2028, lng: 73.2207 },
    'bora bora': { lat: -16.5004, lng: -151.7415 },
    'singapore': { lat: 1.3521, lng: 103.8198 },
    'hong kong': { lat: 22.3193, lng: 114.1694 },
    'seoul': { lat: 37.5665, lng: 126.9780 },
    'vienna': { lat: 48.2082, lng: 16.3738 },
    'prague': { lat: 50.0755, lng: 14.4378 },
    'budapest': { lat: 47.4979, lng: 19.0402 },
    'lisbon': { lat: 38.7223, lng: -9.1393 },
    'dublin': { lat: 53.3498, lng: -6.2603 },
    'vancouver': { lat: 49.2827, lng: -123.1207 },
    'toronto': { lat: 43.6532, lng: -79.3832 },
    'rio': { lat: -22.9068, lng: -43.1729 },
    'buenos aires': { lat: -34.6037, lng: -58.3816 },
    'machu picchu': { lat: -13.1631, lng: -72.5450 },
    'costa rica': { lat: 9.7489, lng: -83.7534 },
    'marrakech': { lat: 31.6295, lng: -7.9811 },
    'cape town': { lat: -33.9249, lng: 18.4241 }
  };

  const GEO_CACHE_KEY = 'wanderpulse_geocache_v1';
  function getGeoCache() {
    try { return JSON.parse(localStorage.getItem(GEO_CACHE_KEY)) || {}; } catch(e) { return {}; }
  }
  function saveGeoCache(cache) {
    try { localStorage.setItem(GEO_CACHE_KEY, JSON.stringify(cache)); } catch(e) {}
  }

  function resolveDestinationCoords(destinationText) {
    if (!destinationText || !destinationText.trim()) return { lat: 35.6762, lng: 139.6503 };
    const query = destinationText.toLowerCase().trim();
    for (const [key, coords] of Object.entries(DESTINATION_COORDINATES_MAP)) {
      if (query.includes(key)) return coords;
    }
    const cache = getGeoCache();
    if (cache[query]) return cache[query];
    return { lat: 48.8566, lng: 2.3522 };
  }

  async function geocodeLocation(locationText) {
    if (!locationText || !locationText.trim()) return null;
    const query = locationText.trim().toLowerCase();

    for (const [key, coords] of Object.entries(DESTINATION_COORDINATES_MAP)) {
      if (query.includes(key)) return coords;
    }

    const cache = getGeoCache();
    if (cache[query]) return cache[query];

    try {
      const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${encodeURIComponent(query)}`);
      const data = await res.json();
      if (data && data.length > 0) {
        const coords = { lat: parseFloat(data[0].lat), lng: parseFloat(data[0].lon) };
        cache[query] = coords;
        saveGeoCache(cache);
        return coords;
      }
    } catch(e) {
      console.warn('Nominatim geocode lookup error:', e);
    }
    return null;
  }

  async function initMap(trip) {
    const mainEl = document.getElementById('subtab-pane') || document.getElementById('app-main');
    if (mainEl) renderMapPane(mainEl, trip);
  }


  function formatDate(dStr) {
    if (!dStr) return '';
    const d = new Date(dStr + 'T00:00:00');
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  }

  function getDaysUntil(dStr) {
    if (!dStr) return '';
    const today = new Date(); today.setHours(0,0,0,0);
    const start = new Date(dStr + 'T00:00:00');
    const diff = Math.ceil((start - today) / (1000 * 60 * 60 * 24));
    if (diff < 0) return 'Past Trip';
    if (diff === 0) return 'Starts Today!';
    return `Countdown: ${diff} days away`;
  }

  function renderCurrentView() {
    const mainEl = document.getElementById('app-main');
    if (!mainEl) return;
    if (currentView === 'dashboard') renderDashboard(mainEl);
    else if (currentView === 'trip-detail') renderTripDetail(mainEl);
    else if (currentView === 'personal-space') renderPersonalSpace(mainEl);
  }

  // --- App Entry Point ---
  document.addEventListener('DOMContentLoaded', () => {
    const themeBtn = document.getElementById('theme-toggle-btn');
    const settingsBtn = document.getElementById('settings-btn');
    const settingsFooterBtn = document.getElementById('footer-settings-btn');
    const brandEl = document.querySelector('.nav-brand');
    const navSpaceBtn = document.getElementById('nav-space-btn');

    function syncNavProfile() {
      const p = appStore.loadProfile();
      const avatarEl = document.getElementById('nav-user-avatar');
      const nameEl = document.getElementById('nav-user-name');
      if (avatarEl) avatarEl.textContent = p.avatar || 'AR';
      if (nameEl) nameEl.textContent = p.name || 'Alex Rivers';
    }

    if (themeBtn) {
      themeBtn.innerHTML = icon('moon');
      themeBtn.addEventListener('click', () => {
        const cur = document.documentElement.getAttribute('data-theme') || 'dark';
        const next = cur === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        themeBtn.innerHTML = icon(next === 'dark' ? 'moon' : 'sun');
        appStore.saveSettings({ theme: next });
        showToast(`Theme switched to ${next}`, 'info');
      });
    }

    if (settingsBtn) {
      settingsBtn.innerHTML = icon('settings');
      settingsBtn.addEventListener('click', openSettingsModal);
    }

    if (settingsFooterBtn) {
      settingsFooterBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openSettingsModal();
      });
    }

    const navProfileTrigger = document.getElementById('nav-profile-trigger') || document.getElementById('nav-space-btn');
    if (navProfileTrigger) {
      navProfileTrigger.addEventListener('click', () => {
        currentView = 'personal-space';
        renderCurrentView();
      });
    }

    if (brandEl) {
      brandEl.addEventListener('click', () => {
        currentView = 'dashboard';
        renderCurrentView();
      });
    }

    syncNavProfile();
    renderCurrentView();
  });

})();
