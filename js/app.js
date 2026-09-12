/* ==========================================================================
   WanderPulse — Unified Application Engine & Component Bundle
   ========================================================================== */

(function () {
  'use strict';

  // --- SVG Icon Library (Fallback & Instant Render) ---
  const SVG_ICONS = {
    'plane': `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.7 5.2c.3.4.8.5 1.3.3l.5-.3c.4-.2.6-.6.5-1.1z"/></svg>`,
    'map-pin': `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
    'calendar': `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>`,
    'plus-circle': `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="16"/><line x1="8" x2="16" y1="12" y2="12"/></svg>`,
    'database': `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`,
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
    'download': `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>`,
    'upload': `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>`,
    'cloud': `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19x-9c-2.5 0-4.5-2-4.5-4.5 0-2 1.3-3.7 3.2-4.2C7.7 7.7 10 5.5 13 5.5c2.7 0 5 1.8 5.7 4.3 1.8.3 3.3 1.8 3.3 3.7 0 2.5-2 4.5-4.5 4.5z"/></svg>`,
    'check-circle': `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`
  };

  function icon(name, color = '') {
    const svg = SVG_ICONS[name] || `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>`;
    if (color) {
      return svg.replace('<svg ', `<svg style="color: ${color};" `);
    }
    return svg;
  }

  // --- Initial Data ---
  const STORAGE_KEY = 'wanderpulse_trips_data_v2';
  const SETTINGS_KEY = 'wanderpulse_settings_v2';

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
      lat: 35.6762,
      lng: 139.6503,
      logistics: {
        flights: [
          { airline: 'Japan Airlines JL005', from: 'JFK (New York)', to: 'HND (Tokyo)', date: '2026-10-15 11:30 AM', confirmation: 'JAL-982173' }
        ],
        accommodations: [
          { name: 'Park Hyatt Tokyo', address: '3-7-1-2 Nishi-Shinjuku, Tokyo', checkIn: '2026-10-15', checkOut: '2026-10-19', confirmation: 'HTL-8831' },
          { name: 'Mimaru Kyoto Station', address: '15 Higashikujo, Kyoto', checkIn: '2026-10-19', checkOut: '2026-10-25', confirmation: 'HTL-4492' }
        ],
        notes: 'Remember to pick up Pocket Wi-Fi at Haneda Airport Terminal 3 counter!'
      },
      itinerary: [
        { id: 'it-1', day: 1, date: '2026-10-15', title: 'Arrival & Shinjuku Evening', time: '16:00', category: 'sightseeing', location: 'Shinjuku, Tokyo', notes: 'Check in hotel, explore Omoide Yokocho alleyways for ramen & yakitori.', lat: 35.6938, lng: 139.7034 },
        { id: 'it-2', day: 2, date: '2026-10-16', title: 'Meiji Shrine & Digital Art', time: '09:30', category: 'culture', location: 'Harajuku & Toyosu', notes: 'Morning stroll in Yoyogi park & Meiji Jingu. Afternoon TeamLab Planets reservation at 14:00.', lat: 35.6764, lng: 139.6993 },
        { id: 'it-3', day: 3, date: '2026-10-19', title: 'Shinkansen to Kyoto & Fushimi Inari', time: '08:00', category: 'transit', location: 'Tokyo Station -> Kyoto', notes: 'Board Hikari Shinkansen 507. Check in Mimaru Kyoto, sunset walk through 10,000 Torii gates.', lat: 34.9671, lng: 135.7727 },
        { id: 'it-4', day: 4, date: '2026-10-20', title: 'Arashiyama Bamboo & Monkey Park', time: '07:30', category: 'adventure', location: 'Arashiyama, Kyoto', notes: 'Early morning walk before crowds arrive. Rent electric bicycles near Saga-Arashiyama station.', lat: 35.0116, lng: 135.6777 }
      ],
      activities: [
        { id: 'act-1', title: 'TeamLab Planets Digital Art Museum', category: 'Culture', status: 'Booked', cost: 110, duration: '2.5 hrs', rating: 4.9, notes: 'Water exhibit requires barefoot walking.', lat: 35.6491, lng: 139.7898 },
        { id: 'act-2', title: 'Traditional Tea Ceremony in Gion', category: 'Culture', status: 'Planned', cost: 90, duration: '1.5 hrs', rating: 4.8, notes: 'Kimono fitting included.', lat: 35.0037, lng: 135.7772 },
        { id: 'act-3', title: 'Tsukiji Outer Market Food Tour', category: 'Dining', status: 'Booked', cost: 120, duration: '3 hrs', rating: 4.9, notes: 'Fresh Wagyu beef skewers, tamagoyaki, & sea urchin.', lat: 35.6654, lng: 139.7707 }
      ],
      packingList: [
        { id: 'pack-1', category: 'Documents', item: 'Passport & Japan Rail Pass Voucher', packed: true, assignee: 'Alex Rivers' },
        { id: 'pack-2', category: 'Electronics', item: 'Universal Travel Adapter & Power Bank 20,000mAh', packed: true, assignee: 'Alex Rivers' },
        { id: 'pack-3', category: 'Clothing', item: 'Comfortable Walking Shoes (Hoka/On Cloud)', packed: false, assignee: 'Elena Rostova' },
        { id: 'pack-4', category: 'Essentials', item: 'Suica / Pasmo IC Card & eSIM setup', packed: true, assignee: 'Marcus Vance' }
      ],
      prepChecklist: [
        { id: 'prep-1', title: 'Passport Valid 6+ Months', completed: true },
        { id: 'prep-2', title: 'Visit Japan Web Customs & Immigration QR', completed: true },
        { id: 'prep-3', title: 'Travel Medical Insurance (Allianz)', completed: true },
        { id: 'prep-4', title: 'Yen Cash Currency Exchange (¥50,000)', completed: false }
      ],
      attendees: [
        { id: 'att-1', name: 'Alex Rivers', role: 'Organizer', avatar: 'AR', email: 'alex@example.com', rsvp: 'Confirmed' },
        { id: 'att-2', name: 'Elena Rostova', role: 'Co-planner', avatar: 'ER', email: 'elena@example.com', rsvp: 'Confirmed' },
        { id: 'att-3', name: 'Marcus Vance', role: 'Member', avatar: 'MV', email: 'marcus@example.com', rsvp: 'Confirmed' },
        { id: 'att-4', name: 'Sophia Chen', role: 'Member', avatar: 'SC', email: 'sophia@example.com', rsvp: 'Confirmed' }
      ],
      expenses: [
        { id: 'exp-1', title: 'Shinkansen Bullet Train Tickets', amount: 480, paidBy: 'Alex Rivers', category: 'Transit', date: '2026-10-10', splitWith: ['Alex Rivers', 'Elena Rostova', 'Marcus Vance', 'Sophia Chen'] },
        { id: 'exp-2', title: 'Tokyo Park Hyatt Accommodation', amount: 1200, paidBy: 'Elena Rostova', category: 'Lodging', date: '2026-10-12', splitWith: ['Alex Rivers', 'Elena Rostova', 'Marcus Vance', 'Sophia Chen'] },
        { id: 'exp-3', title: 'Izakaya Welcome Omoide Yokocho', amount: 160, paidBy: 'Marcus Vance', category: 'Dining', date: '2026-10-15', splitWith: ['Alex Rivers', 'Elena Rostova', 'Marcus Vance', 'Sophia Chen'] },
        { id: 'exp-4', title: 'TeamLab Planets Tickets', amount: 110, paidBy: 'Sophia Chen', category: 'Activities', date: '2026-10-14', splitWith: ['Alex Rivers', 'Elena Rostova', 'Marcus Vance', 'Sophia Chen'] }
      ]
    },
    {
      id: 'trip-2',
      title: 'Amalfi Coast Summer Escape',
      destination: 'Positano & Capri, Italy',
      startDate: '2026-07-10',
      endDate: '2026-07-18',
      status: 'upcoming',
      coverImage: 'assets/images/amalfi.png',
      budget: 5200,
      currency: 'USD',
      lat: 40.6281,
      lng: 14.4850,
      logistics: { flights: [], accommodations: [], notes: 'Private boat charter booked.' },
      itinerary: [
        { id: 'it-10', day: 1, date: '2026-07-11', title: 'Check in Positano Cliffside Villa', time: '14:00', category: 'lodging', location: 'Positano Pier', notes: 'Balcony aperitivo over Spiaggia Grande.', lat: 40.6281, lng: 14.4850 }
      ],
      activities: [
        { id: 'act-10', title: 'Capri Private Boat & Blue Grotto', category: 'Adventure', status: 'Booked', cost: 650, duration: '6 hrs', rating: 5.0, notes: 'Includes Prosecco & fruit platter.', lat: 40.5507, lng: 14.2426 }
      ],
      packingList: [
        { id: 'pack-10', category: 'Clothing', item: 'Linen Shirts & Summer Dresses', packed: true, assignee: 'Alex Rivers' }
      ],
      prepChecklist: [
        { id: 'prep-10', title: 'EU eSIM Data Roaming Activation', completed: true }
      ],
      attendees: [
        { id: 'att-10', name: 'Alex Rivers', role: 'Organizer', avatar: 'AR', email: 'alex@example.com', rsvp: 'Confirmed' },
        { id: 'att-11', name: 'Sophia Chen', role: 'Co-planner', avatar: 'SC', email: 'sophia@example.com', rsvp: 'Confirmed' }
      ],
      expenses: [
        { id: 'exp-10', title: 'Private Yacht Capri Charter', amount: 650, paidBy: 'Alex Rivers', category: 'Activities', date: '2026-07-13', splitWith: ['Alex Rivers', 'Sophia Chen'] },
        { id: 'exp-11', title: 'Positano Villa Accommodation', amount: 1800, paidBy: 'Sophia Chen', category: 'Lodging', date: '2026-07-11', splitWith: ['Alex Rivers', 'Sophia Chen'] }
      ]
    },
    {
      id: 'trip-3',
      title: 'Swiss Alps Hiking Adventure',
      destination: 'Zermatt & Grindelwald, Switzerland',
      startDate: '2026-09-02',
      endDate: '2026-09-09',
      status: 'draft',
      coverImage: 'assets/images/swiss.png',
      budget: 3800,
      currency: 'USD',
      lat: 45.9765,
      lng: 7.7491,
      logistics: { flights: [], accommodations: [], notes: '' },
      itinerary: [],
      activities: [],
      packingList: [],
      prepChecklist: [],
      attendees: [
        { id: 'att-20', name: 'Marcus Vance', role: 'Organizer', avatar: 'MV', email: 'marcus@example.com', rsvp: 'Confirmed' }
      ],
      expenses: []
    }
  ];

  // --- Store implementation ---
  class Store {
    constructor() {
      this.trips = this.loadTrips();
      this.settings = this.loadSettings();
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
    getTrips() { return this.trips; }
    getCurrentTrip() { return this.trips.find(t => t.id === this.currentTripId) || this.trips[0] || null; }
    setCurrentTripId(id) { this.currentTripId = id; }
    addTrip(obj) {
      const newTrip = {
        id: 'trip-' + Date.now(),
        title: obj.title || 'New Travel Plan',
        destination: obj.destination || 'Uncharted Destination',
        startDate: obj.startDate || new Date().toISOString().split('T')[0],
        endDate: obj.endDate || new Date().toISOString().split('T')[0],
        status: obj.status || 'upcoming',
        coverImage: obj.coverImage || 'assets/images/hero.png',
        budget: parseFloat(obj.budget) || 2000,
        currency: obj.currency || 'USD',
        lat: 35.6762, lng: 139.6503,
        logistics: { flights: [], accommodations: [], notes: '' },
        itinerary: [], activities: [],
        packingList: [
          { id: 'p-1', category: 'Essentials', item: 'Passport & Phone Charger', packed: false, assignee: 'You' }
        ],
        prepChecklist: [
          { id: 'pr-1', title: 'Passport Valid 6+ Months', completed: false }
        ],
        attendees: [{ id: 'a-1', name: 'You', role: 'Organizer', avatar: 'ME', email: '', rsvp: 'Confirmed' }],
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
        const initials = attendeeObj.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
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

  // --- Toast notification ---
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

    containerEl.innerHTML = `
      <!-- Hero Banner -->
      <section class="hero-banner">
        <img src="assets/images/hero.png" alt="Travel Header" class="hero-bg-img" />
        <div class="hero-content">
          <span class="badge badge-upcoming" style="margin-bottom: 0.75rem;">Explore & Plan</span>
          <h1 class="hero-title">Your Next Unforgettable <span class="gradient-text">Adventure Awaits</span></h1>
          <p class="hero-subtitle">Organize travel details, day-by-day itineraries, group expenses, and packing checklists in one sleek dashboard.</p>
          <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
            <button id="btn-create-trip" class="btn btn-primary">
              ${icon('plus-circle')} Create Travel Plan
            </button>
            <button id="btn-open-settings" class="btn btn-secondary">
              ${icon('database')} Cloud Sync Settings
            </button>
          </div>
        </div>
      </section>

      <!-- Filter Bar -->
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

      <!-- Trips Grid -->
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

    // Event listeners
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
    if (createBtn) createBtn.addEventListener('click', openCreateTripModal);

    const settingsBtn = containerEl.querySelector('#btn-open-settings');
    if (settingsBtn) settingsBtn.addEventListener('click', openSettingsModal);

    containerEl.querySelectorAll('.trip-card[data-trip-id]').forEach(card => {
      card.addEventListener('click', (e) => {
        if (e.target.closest('.btn-delete-trip')) return;
        const tripId = card.getAttribute('data-trip-id');
        appStore.setCurrentTripId(tripId);
        currentView = 'trip-detail';
        renderCurrentView();
      });
    });

    containerEl.querySelectorAll('.btn-delete-trip').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const tripId = btn.getAttribute('data-trip-id');
        if (confirm('Delete this trip project?')) {
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
          <div style="display: flex; align-items: flex-start; justify-content: space-between;">
            <h3 class="trip-card-title">${trip.title}</h3>
            <button class="btn btn-icon-only btn-secondary btn-delete-trip" data-trip-id="${trip.id}" title="Delete">
              ${icon('trash-2', '#ef4444')}
            </button>
          </div>
          
          <div class="trip-card-dates">
            ${icon('map-pin', 'var(--accent-primary)')}
            <span>${trip.destination}</span>
          </div>

          <div class="trip-card-dates">
            ${icon('calendar', 'var(--text-muted)')}
            <span>${formatDate(trip.startDate)} - ${formatDate(trip.endDate)}</span>
          </div>

          <div style="margin-top: 0.5rem; margin-bottom: 1rem; font-size: 0.85rem; color: var(--text-secondary);">
            <span style="font-weight: 700; color: var(--accent-secondary);">${daysUntil}</span>
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
            <div>
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
    itinerary.forEach(item => {
      if (!daysMap[item.day]) daysMap[item.day] = [];
      daysMap[item.day].push(item);
    });
    const dayNumbers = Object.keys(daysMap).map(Number).sort((a, b) => a - b);

    container.innerHTML = `
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem;">
        <div>
          <h2>Day-by-Day Itinerary Timeline</h2>
          <p style="color: var(--text-secondary); font-size: 0.9rem;">Schedule activities, tours, transport, and reservations per day.</p>
        </div>
        <button class="btn btn-primary" id="btn-add-itinerary">
          ${icon('plus')} Add Itinerary Event
        </button>
      </div>

      ${dayNumbers.length === 0 ? `
        <div class="card" style="text-align: center; padding: 3rem;">
          <div style="margin-bottom: 1rem;">${icon('calendar', 'var(--text-muted)')}</div>
          <h3>No itinerary events scheduled yet</h3>
          <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">Click "Add Itinerary Event" to create your day-by-day itinerary.</p>
        </div>
      ` : `
        <div>
          ${dayNumbers.map(dayNum => `
            <div style="margin-bottom: 2.5rem;">
              <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
                <span style="background: var(--accent-gradient); color: #fff; padding: 0.35rem 0.85rem; border-radius: var(--radius-full); font-weight: 700; font-size: 0.85rem;">
                  Day ${dayNum}
                </span>
              </div>

              <div class="timeline">
                ${daysMap[dayNum].map(item => `
                  <div class="timeline-item">
                    <div class="timeline-node"></div>
                    <div class="timeline-card">
                      <div style="flex: 1;">
                        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.35rem;">
                          <span style="color: var(--accent-secondary); font-weight: 700; font-size: 0.9rem;">${item.time}</span>
                          <h4 style="font-size: 1.1rem; color: var(--text-primary);">${item.title}</h4>
                          <span class="badge" style="background: rgba(99, 102, 241, 0.15); color: var(--accent-primary); border: 1px solid rgba(99, 102, 241, 0.3);">
                            ${item.category}
                          </span>
                        </div>
                        ${item.location ? `
                          <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.35rem; display: flex; align-items: center; gap: 0.35rem;">
                            ${icon('map-pin', 'var(--text-muted)')} ${item.location}
                          </p>
                        ` : ''}
                        <p style="font-size: 0.9rem; color: var(--text-secondary);">${item.notes || ''}</p>
                      </div>
                      <button class="btn btn-icon-only btn-secondary btn-del-it" data-id="${item.id}">
                        ${icon('x', '#ef4444')}
                      </button>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      `}
    `;

    container.querySelector('#btn-add-itinerary')?.addEventListener('click', () => openAddItineraryModal(trip));

    container.querySelectorAll('.btn-del-it').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        appStore.deleteItineraryItem(trip.id, id);
        showToast('Itinerary event removed', 'info');
        renderItineraryPane(container, appStore.getCurrentTrip());
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
              <button class="btn btn-secondary btn-sm" id="btn-add-att">${icon('user-plus')} Add</button>
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
    container.querySelector('#btn-add-att')?.addEventListener('click', () => openAddAttendeeModal(trip));

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

  // --- Modals ---
  function openCreateTripModal() {
    const html = `
      <div class="modal-overlay active" id="modal-create-trip">
        <div class="modal-container">
          <div class="modal-header">
            <h3>${icon('plane', 'var(--accent-primary)')} Create New Travel Plan</h3>
            <button class="btn btn-icon-only btn-secondary" class="close-modal">&times;</button>
          </div>
          <div class="modal-body">
            <form id="form-create-trip">
              <div class="form-group">
                <label class="form-label">Trip Title</label>
                <input type="text" class="form-control" name="title" placeholder="e.g. Summer Vacation in Bali" required />
              </div>
              <div class="form-group">
                <label class="form-label">Destination</label>
                <input type="text" class="form-control" name="destination" placeholder="e.g. Ubud & Seminyak" required />
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">Start Date</label>
                  <input type="date" class="form-control" name="startDate" required />
                </div>
                <div class="form-group">
                  <label class="form-label">End Date</label>
                  <input type="date" class="form-control" name="endDate" required />
                </div>
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">Budget ($)</label>
                  <input type="number" class="form-control" name="budget" placeholder="3000" min="0" required />
                </div>
                <div class="form-group">
                  <label class="form-label">Status</label>
                  <select class="form-control" name="status">
                    <option value="upcoming">Upcoming</option>
                    <option value="active">Active</option>
                    <option value="draft">Draft</option>
                  </select>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary cancel-modal">Cancel</button>
            <button class="btn btn-primary submit-modal">Create Trip</button>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', html);
    const m = document.getElementById('modal-create-trip');
    const close = () => m.remove();
    m.querySelector('.cancel-modal').onclick = close;
    m.querySelector('.close-modal').onclick = close;
    m.querySelector('.submit-modal').onclick = () => {
      const f = m.querySelector('#form-create-trip');
      if (!f.checkValidity()) return f.reportValidity();
      const newTrip = appStore.addTrip(Object.fromEntries(new FormData(f).entries()));
      close();
      showToast('Travel project created!', 'success');
      currentView = 'trip-detail';
      renderCurrentView();
    };
  }

  function openAddItineraryModal(trip) {
    const html = `
      <div class="modal-overlay active" id="modal-add-it">
        <div class="modal-container">
          <div class="modal-header">
            <h3>${icon('plus-circle', 'var(--accent-primary)')} Add Itinerary Event</h3>
            <button class="btn btn-icon-only btn-secondary close-modal">&times;</button>
          </div>
          <div class="modal-body">
            <form id="form-add-it">
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
                <label class="form-label">Event Title</label>
                <input type="text" class="form-control" name="title" placeholder="e.g. Visit Senso-ji Temple" required />
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">Category</label>
                  <select class="form-control" name="category">
                    <option value="sightseeing">Sightseeing</option>
                    <option value="culture">Culture</option>
                    <option value="dining">Dining</option>
                    <option value="adventure">Adventure</option>
                    <option value="transit">Transit</option>
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
            <button class="btn btn-secondary cancel-modal">Cancel</button>
            <button class="btn btn-primary submit-modal">Add Event</button>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', html);
    const m = document.getElementById('modal-add-it');
    const close = () => m.remove();
    m.querySelector('.cancel-modal').onclick = close;
    m.querySelector('.close-modal').onclick = close;
    m.querySelector('.submit-modal').onclick = () => {
      const f = m.querySelector('#form-add-it');
      if (!f.checkValidity()) return f.reportValidity();
      const data = Object.fromEntries(new FormData(f).entries());
      data.day = parseInt(data.day);
      appStore.addItineraryItem(trip.id, data);
      close();
      showToast('Itinerary event added!', 'success');
      renderCurrentView();
    };
  }

  function openAddActivityModal(trip) {
    const html = `
      <div class="modal-overlay active" id="modal-add-act">
        <div class="modal-container">
          <div class="modal-header">
            <h3>${icon('compass', 'var(--accent-primary)')} Add Activity</h3>
            <button class="btn btn-icon-only btn-secondary close-modal">&times;</button>
          </div>
          <div class="modal-body">
            <form id="form-add-act">
              <div class="form-group">
                <label class="form-label">Title</label>
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
            <button class="btn btn-secondary cancel-modal">Cancel</button>
            <button class="btn btn-primary submit-modal">Save Activity</button>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', html);
    const m = document.getElementById('modal-add-act');
    const close = () => m.remove();
    m.querySelector('.cancel-modal').onclick = close;
    m.querySelector('.close-modal').onclick = close;
    m.querySelector('.submit-modal').onclick = () => {
      const f = m.querySelector('#form-add-act');
      if (!f.checkValidity()) return f.reportValidity();
      const data = Object.fromEntries(new FormData(f).entries());
      data.cost = parseFloat(data.cost) || 0;
      appStore.addActivity(trip.id, data);
      close();
      showToast('Activity saved!', 'success');
      renderCurrentView();
    };
  }

  function openAddPackingModal(trip) {
    const html = `
      <div class="modal-overlay active" id="modal-add-pack">
        <div class="modal-container">
          <div class="modal-header">
            <h3>${icon('plus-circle', 'var(--accent-primary)')} Add Packing Item</h3>
            <button class="btn btn-icon-only btn-secondary close-modal">&times;</button>
          </div>
          <div class="modal-body">
            <form id="form-add-pack">
              <div class="form-group">
                <label class="form-label">Item Name</label>
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
            <button class="btn btn-secondary cancel-modal">Cancel</button>
            <button class="btn btn-primary submit-modal">Add</button>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', html);
    const m = document.getElementById('modal-add-pack');
    const close = () => m.remove();
    m.querySelector('.cancel-modal').onclick = close;
    m.querySelector('.close-modal').onclick = close;
    m.querySelector('.submit-modal').onclick = () => {
      const f = m.querySelector('#form-add-pack');
      if (!f.checkValidity()) return f.reportValidity();
      appStore.addPackingItem(trip.id, Object.fromEntries(new FormData(f).entries()));
      close();
      showToast('Packing item added!', 'success');
      renderCurrentView();
    };
  }

  function openAddExpenseModal(trip) {
    const attendees = trip.attendees || [];
    const html = `
      <div class="modal-overlay active" id="modal-add-exp">
        <div class="modal-container">
          <div class="modal-header">
            <h3>${icon('dollar-sign', 'var(--accent-primary)')} Log Expense</h3>
            <button class="btn btn-icon-only btn-secondary close-modal">&times;</button>
          </div>
          <div class="modal-body">
            <form id="form-add-exp">
              <div class="form-group">
                <label class="form-label">Description</label>
                <input type="text" class="form-control" name="title" placeholder="e.g. Welcome Dinner" required />
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">Amount ($)</label>
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
            <button class="btn btn-secondary cancel-modal">Cancel</button>
            <button class="btn btn-primary submit-modal">Log Expense</button>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', html);
    const m = document.getElementById('modal-add-exp');
    const close = () => m.remove();
    m.querySelector('.cancel-modal').onclick = close;
    m.querySelector('.close-modal').onclick = close;
    m.querySelector('.submit-modal').onclick = () => {
      const f = m.querySelector('#form-add-exp');
      if (!f.checkValidity()) return f.reportValidity();
      const d = Object.fromEntries(new FormData(f).entries());
      d.amount = parseFloat(d.amount) || 0;
      d.splitWith = attendees.map(a => a.name);
      appStore.addExpense(trip.id, d);
      close();
      showToast('Expense logged!', 'success');
      renderCurrentView();
    };
  }

  function openAddAttendeeModal(trip) {
    const html = `
      <div class="modal-overlay active" id="modal-add-att">
        <div class="modal-container">
          <div class="modal-header">
            <h3>${icon('user-plus', 'var(--accent-primary)')} Add Attendee</h3>
            <button class="btn btn-icon-only btn-secondary close-modal">&times;</button>
          </div>
          <div class="modal-body">
            <form id="form-add-att">
              <div class="form-group">
                <label class="form-label">Name</label>
                <input type="text" class="form-control" name="name" placeholder="e.g. Jordan Smith" required />
              </div>
              <div class="form-group">
                <label class="form-label">Role</label>
                <select class="form-control" name="role">
                  <option value="Co-planner">Co-planner</option>
                  <option value="Member">Member</option>
                </select>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary cancel-modal">Cancel</button>
            <button class="btn btn-primary submit-modal">Add</button>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', html);
    const m = document.getElementById('modal-add-att');
    const close = () => m.remove();
    m.querySelector('.cancel-modal').onclick = close;
    m.querySelector('.close-modal').onclick = close;
    m.querySelector('.submit-modal').onclick = () => {
      const f = m.querySelector('#form-add-att');
      if (!f.checkValidity()) return f.reportValidity();
      appStore.addAttendee(trip.id, Object.fromEntries(new FormData(f).entries()));
      close();
      showToast('Attendee added!', 'success');
      renderCurrentView();
    };
  }

  function openSettingsModal() {
    const settings = appStore.loadSettings();
    const html = `
      <div class="modal-overlay active" id="modal-settings">
        <div class="modal-container">
          <div class="modal-header">
            <h3>${icon('database', 'var(--accent-primary)')} Cloud Storage & Settings</h3>
            <button class="btn btn-icon-only btn-secondary close-modal">&times;</button>
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
            <form id="form-settings">
              <div class="form-group">
                <label class="form-label">Supabase URL</label>
                <input type="url" class="form-control" name="supabaseUrl" placeholder="https://your-project.supabase.co" value="${settings.supabaseUrl || ''}" />
              </div>
              <div class="form-group">
                <label class="form-label">Supabase Anon Key</label>
                <input type="text" class="form-control" name="supabaseKey" placeholder="eyJhbG..." value="${settings.supabaseKey || ''}" />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary cancel-modal">Cancel</button>
            <button class="btn btn-primary submit-modal">Save Settings</button>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', html);
    const m = document.getElementById('modal-settings');
    const close = () => m.remove();
    m.querySelector('.cancel-modal').onclick = close;
    m.querySelector('.close-modal').onclick = close;
    m.querySelector('.submit-modal').onclick = () => {
      const f = m.querySelector('#form-settings');
      appStore.saveSettings(Object.fromEntries(new FormData(f).entries()));
      close();
      showToast('Settings saved!', 'success');
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
        labels: Object.keys(catMap),
        datasets: [{ data: Object.values(catMap), backgroundColor: ['#6366f1', '#06b6d4', '#10b981', '#f59e0b', '#ec4899'] }]
      },
      options: { responsive: true, plugins: { legend: { position: 'bottom', labels: { color: '#94a3b8' } } } }
    });
  }

  function initMap(trip) {
    const el = document.getElementById('map-container');
    if (!el || !window.L) return;
    const map = window.L.map('map-container').setView([trip.lat || 35.6762, trip.lng || 139.6503], 11);
    window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19 }).addTo(map);
    window.L.marker([trip.lat || 35.6762, trip.lng || 139.6503]).addTo(map).bindPopup(`<b>${trip.title}</b><br/>${trip.destination}`).openPopup();
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
  }

  // --- App Entry Point ---
  document.addEventListener('DOMContentLoaded', () => {
    const themeBtn = document.getElementById('theme-toggle-btn');
    const brandEl = document.querySelector('.nav-brand');

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

    if (brandEl) {
      brandEl.addEventListener('click', () => {
        currentView = 'dashboard';
        renderCurrentView();
      });
    }

    renderCurrentView();
  });

})();
