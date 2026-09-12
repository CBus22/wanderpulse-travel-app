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
      if (t) { t.packingList.push({ id: 'pack-' + Date.now(), packed: false, ...itemObj }); this.saveTrips(); }
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

  function renderPackingPane(container, trip) {
    const packingList = trip.packingList || [];
    const prepList = trip.prepChecklist || [];
    const packedCount = packingList.filter(p => p.packed).length;
    const packPct = packingList.length > 0 ? Math.round((packedCount / packingList.length) * 100) : 0;
    const prepCount = prepList.filter(pr => pr.completed).length;
    const prepPct = prepList.length > 0 ? Math.round((prepCount / prepList.length) * 100) : 0;

    container.innerHTML = `
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-bottom: 2rem;">
        <div class="card">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
            <h3 style="display: flex; align-items: center; gap: 0.5rem;">${icon('luggage', 'var(--accent-primary)')} Packing Progress</h3>
            <span style="font-weight: 700; color: var(--accent-primary); font-size: 1.2rem;">${packPct}%</span>
          </div>
          <div class="progress-bar-bg" style="margin-bottom: 0.75rem;">
            <div class="progress-bar-fill" style="width: ${packPct}%;"></div>
          </div>
          <p style="font-size: 0.85rem; color: var(--text-secondary);">${packedCount} of ${packingList.length} items packed into luggage.</p>
        </div>

        <div class="card">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
            <h3 style="display: flex; align-items: center; gap: 0.5rem;">${icon('shield-check', 'var(--status-active)')} Pre-Trip Readiness</h3>
            <span style="font-weight: 700; color: var(--status-active); font-size: 1.2rem;">${prepPct}%</span>
          </div>
          <div class="progress-bar-bg" style="margin-bottom: 0.75rem;">
            <div class="progress-bar-fill" style="width: ${prepPct}%; background: var(--accent-gradient-teal);"></div>
          </div>
          <p style="font-size: 0.85rem; color: var(--text-secondary);">${prepCount} of ${prepList.length} prep tasks completed.</p>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 2rem;">
        <div class="card">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.25rem;">
            <h3>Luggage & Gear Packing List</h3>
            <button class="btn btn-primary btn-sm" id="btn-add-packing">${icon('plus')} Add Item</button>
          </div>

          <div style="display: grid; gap: 0.75rem;">
            ${packingList.map(item => `
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 0.75rem 1rem; background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
                <div style="display: flex; align-items: center; gap: 0.75rem;">
                  <div class="checkbox-custom ${item.packed ? 'checked' : ''}" data-pack-id="${item.id}">
                    ${item.packed ? '✓' : ''}
                  </div>
                  <span style="${item.packed ? 'text-decoration: line-through; color: var(--text-muted);' : 'font-weight: 600;'}">
                    ${item.item}
                  </span>
                </div>
                <span style="font-size: 0.8rem; color: var(--text-muted);">${item.assignee || ''}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="card">
          <h3 style="margin-bottom: 1.25rem;">Travel Prep & Documents</h3>
          <div style="display: grid; gap: 0.75rem;">
            ${prepList.map(prep => `
              <div style="display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem; background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
                <div class="checkbox-custom ${prep.completed ? 'checked' : ''}" data-prep-id="${prep.id}">
                  ${prep.completed ? '✓' : ''}
                </div>
                <span style="${prep.completed ? 'text-decoration: line-through; color: var(--text-muted);' : 'font-size: 0.9rem;'}">
                  ${prep.title}
                </span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;

    container.querySelectorAll('.checkbox-custom[data-pack-id]').forEach(cb => {
      cb.addEventListener('click', () => {
        appStore.togglePackingItem(trip.id, cb.getAttribute('data-pack-id'));
        renderPackingPane(container, appStore.getCurrentTrip());
      });
    });

    container.querySelectorAll('.checkbox-custom[data-prep-id]').forEach(cb => {
      cb.addEventListener('click', () => {
        appStore.togglePrepItem(trip.id, cb.getAttribute('data-prep-id'));
        renderPackingPane(container, appStore.getCurrentTrip());
      });
    });

    container.querySelector('#btn-add-packing')?.addEventListener('click', () => openAddPackingModal(trip));
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

  function renderMapPane(container, trip) {
    container.innerHTML = `
      <div class="card">
        <h3>Interactive Destination Map & Pins</h3>
        <p style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 1rem;">Explore trip locations, hotels, and itinerary activities.</p>
        <div id="map-container"></div>
      </div>
    `;
    setTimeout(() => initMap(trip), 100);
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

  function openAddItineraryModal(trip, defaultCategory = 'sightseeing') {
    const html = `
      <div class="modal-overlay active" id="modal-add-it">
        <div class="modal-container">
          <div class="modal-header">
            <h3>${icon('plus-circle', 'var(--accent-primary)')} Add Itinerary Event</h3>
            <button class="btn btn-icon-only btn-secondary close-modal" type="button">&times;</button>
          </div>
          <div class="modal-body">
            <form id="form-add-it" onsubmit="return false;">
              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">Day #</label>
                  <input type="number" class="form-control" name="day" value="1" min="1" required />
                </div>
                <div class="form-group">
                  <label class="form-label">Time</label>
                  <input type="time" class="form-control" name="time" value="09:00" required />
                </div>
              </div>
              <div class="form-group">
                <label class="form-label">Event Title *</label>
                <input type="text" class="form-control" name="title" placeholder="e.g. Visit Senso-ji Temple" required />
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">Category</label>
                  <select class="form-control" name="category">
                    <option value="sightseeing" ${defaultCategory === 'sightseeing' ? 'selected' : ''}>Sightseeing / Hotel</option>
                    <option value="culture" ${defaultCategory === 'culture' ? 'selected' : ''}>Culture / Activity</option>
                    <option value="dining" ${defaultCategory === 'dining' ? 'selected' : ''}>Dining / Meal</option>
                    <option value="adventure" ${defaultCategory === 'adventure' ? 'selected' : ''}>Adventure / Tour</option>
                    <option value="transit" ${defaultCategory === 'transit' ? 'selected' : ''}>Transit / Flight</option>
                  </select>
                </div>
                <div class="form-group">
                  <label class="form-label">Location</label>
                  <input type="text" class="form-control" name="location" placeholder="e.g. Asakusa, Tokyo" />
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary cancel-modal" type="button">Cancel</button>
            <button class="btn btn-primary submit-modal" type="button">Add Event</button>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', html);
    const m = document.getElementById('modal-add-it');
    const close = () => m.remove();
    m.querySelectorAll('.cancel-modal, .close-modal').forEach(b => b.onclick = close);

    const handleSave = () => {
      const f = m.querySelector('#form-add-it');
      const data = Object.fromEntries(new FormData(f).entries());
      if (!data.title || !data.title.trim()) return showToast('Please enter event title', 'info');
      data.day = parseInt(data.day) || 1;
      appStore.addItineraryItem(trip.id, data);
      close();
      showToast('Itinerary event added!', 'success');
      renderCurrentView();
    };
    m.querySelector('.submit-modal').onclick = handleSave;
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
    const el = document.getElementById('map-container');
    if (!el || !window.L) return;

    if (window._activeLeafletMap) {
      try { window._activeLeafletMap.remove(); } catch(e) {}
      window._activeLeafletMap = null;
    }

    let mainCoords = (trip.lat && trip.lng && (trip.lat !== 21.1619 || (trip.destination && trip.destination.toLowerCase().includes('cancun'))))
      ? { lat: trip.lat, lng: trip.lng }
      : resolveDestinationCoords(trip.destination || trip.title);

    const map = window.L.map('map-container', {
      scrollWheelZoom: true,
      zoomControl: true
    }).setView([mainCoords.lat, mainCoords.lng], 11);
    
    window._activeLeafletMap = map;

    window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // Invalidate size after container renders in tab
    setTimeout(() => { try { map.invalidateSize(); } catch(e) {} }, 50);
    setTimeout(() => { try { map.invalidateSize(); } catch(e) {} }, 250);

    // Custom main destination marker
    const mainIcon = window.L.divIcon({
      className: 'custom-map-pin main-pin',
      html: `<div style="background: linear-gradient(135deg, #6366f1, #06b6d4); color: white; width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 18px; box-shadow: 0 4px 12px rgba(99,102,241,0.5); border: 2px solid #ffffff;">📍</div>`,
      iconSize: [36, 36],
      iconAnchor: [18, 18],
      popupAnchor: [0, -18]
    });

    const mainMarker = window.L.marker([mainCoords.lat, mainCoords.lng], { icon: mainIcon })
      .addTo(map)
      .bindPopup(`
        <div style="font-family: var(--font-family-base); padding: 4px;">
          <h4 style="margin: 0 0 4px 0; font-size: 1rem; color: #0f172a;">📍 ${trip.title}</h4>
          <p style="margin: 0; font-size: 0.85rem; color: #475569;">${trip.destination}</p>
        </div>
      `)
      .openPopup();

    const bounds = [[mainCoords.lat, mainCoords.lng]];

    // Real-time geocoding check for trip destination
    const geocodedMain = await geocodeLocation(trip.destination || trip.title);
    if (geocodedMain && (geocodedMain.lat !== mainCoords.lat || geocodedMain.lng !== mainCoords.lng)) {
      mainCoords = geocodedMain;
      trip.lat = geocodedMain.lat;
      trip.lng = geocodedMain.lng;
      appStore.saveTrips();
      mainMarker.setLatLng([geocodedMain.lat, geocodedMain.lng]);
      map.setView([geocodedMain.lat, geocodedMain.lng], 11);
      bounds[0] = [geocodedMain.lat, geocodedMain.lng];
    }

    // Process Itinerary Markers
    const itinerary = trip.itinerary || [];
    for (let idx = 0; idx < itinerary.length; idx++) {
      const item = itinerary[idx];
      if (item.location || item.title) {
        let itemCoords = null;
        if (item.location) {
          itemCoords = await geocodeLocation(item.location);
        }
        if (!itemCoords) {
          itemCoords = {
            lat: mainCoords.lat + (Math.sin(idx + 1) * 0.015),
            lng: mainCoords.lng + (Math.cos(idx + 1) * 0.015)
          };
        }

        bounds.push([itemCoords.lat, itemCoords.lng]);

        const cat = (item.category || '').toLowerCase();
        let pinEmoji = '🎟️';
        let pinColor = '#10b981';
        if (cat.includes('transit') || cat.includes('flight')) { pinEmoji = '✈️'; pinColor = '#06b6d4'; }
        else if (cat.includes('lodging') || cat.includes('hotel')) { pinEmoji = '🏨'; pinColor = '#f59e0b'; }
        else if (cat.includes('dining') || cat.includes('food')) { pinEmoji = '🍽️'; pinColor = '#ec4899'; }
        else if (cat.includes('culture') || cat.includes('sightseeing')) { pinEmoji = '🏛️'; pinColor = '#8b5cf6'; }

        const itemIcon = window.L.divIcon({
          className: 'custom-map-pin item-pin',
          html: `<div style="background: ${pinColor}; color: white; width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; box-shadow: 0 2px 8px rgba(0,0,0,0.3); border: 2px solid #ffffff;">${pinEmoji}</div>`,
          iconSize: [28, 28],
          iconAnchor: [14, 14],
          popupAnchor: [0, -14]
        });

        window.L.marker([itemCoords.lat, itemCoords.lng], { icon: itemIcon })
          .addTo(map)
          .bindPopup(`
            <div style="font-family: var(--font-family-base); padding: 4px;">
              <span style="font-size: 0.75rem; font-weight: 700; color: ${pinColor}; text-transform: uppercase;">Day ${item.day || 1} • ${item.time || ''}</span>
              <h4 style="margin: 2px 0 4px 0; font-size: 0.95rem; color: #0f172a;">${item.title}</h4>
              ${item.location ? `<p style="margin: 0 0 6px 0; font-size: 0.8rem; color: #475569;">📍 ${item.location}</p>` : ''}
              <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent((item.location || item.title) + ' ' + trip.destination)}" target="_blank" style="color: #6366f1; font-size: 0.8rem; font-weight: 700; text-decoration: none;">Get Directions &rarr;</a>
            </div>
          `);
      }
    }

    if (bounds.length > 1) {
      try {
        map.fitBounds(bounds, { padding: [40, 40], maxZoom: 14 });
      } catch(e) {}
    }
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
