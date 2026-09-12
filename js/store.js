/* ==========================================================================
   WanderPulse State Management & Local/Cloud Storage Store
   ========================================================================== */

const STORAGE_KEY = 'wanderpulse_trips_data_v1';
const SETTINGS_KEY = 'wanderpulse_settings_v1';

// Initial realistic default datasets
const initialTrips = [
  {
    id: 'trip-1',
    title: 'Tokyo & Kyoto Autumn Odyssey',
    destination: 'Tokyo & Kyoto, Japan',
    startDate: '2026-10-15',
    endDate: '2026-10-25',
    status: 'upcoming', // upcoming, active, completed, draft
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
      { id: 'act-3', title: 'Tsukiji Outer Market Food Tour', category: 'Dining', status: 'Booked', cost: 120, duration: '3 hrs', rating: 4.9, notes: 'Fresh Wagyu beef skewers, tamagoyaki, & sea urchin.', lat: 35.6654, lng: 139.7707 },
      { id: 'act-4', title: 'Kinkaku-ji (Golden Pavilion)', category: 'Sightseeing', status: 'Planned', cost: 15, duration: '1 hr', rating: 4.7, notes: 'Best photo lighting in late afternoon.', lat: 35.0394, lng: 135.7292 }
    ],
    packingList: [
      { id: 'pack-1', category: 'Documents', item: 'Passport & Japan Rail Pass Voucher', packed: true, assignee: 'Alex Rivers' },
      { id: 'pack-2', category: 'Electronics', item: 'Universal Travel Adapter & Power Bank 20,000mAh', packed: true, assignee: 'Alex Rivers' },
      { id: 'pack-3', category: 'Clothing', item: 'Comfortable Walking Shoes (Hoka/On Cloud)', packed: false, assignee: 'Elena Rostova' },
      { id: 'pack-4', category: 'Essentials', item: 'Suica / Pasmo IC Card & eSIM setup', packed: true, assignee: 'Marcus Vance' },
      { id: 'pack-5', category: 'Clothing', item: 'Light Layered Jackets (Autumn Temp 14-22°C)', packed: false, assignee: 'Sophia Chen' }
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
    logistics: {
      flights: [
        { airline: 'ITA Airways AZ611', from: 'JFK', to: 'NAP (Naples)', date: '2026-07-10 19:30', confirmation: 'ITA-77129' }
      ],
      accommodations: [
        { name: 'Villa Rosa Positano', address: 'Via Chiarito 14, Positano', checkIn: '2026-07-11', checkOut: '2026-07-18', confirmation: 'POS-9002' }
      ],
      notes: 'Private boat transfer scheduled from Naples Port to Positano pier.'
    },
    itinerary: [
      { id: 'it-10', day: 1, date: '2026-07-11', title: 'Check in Positano Cliffside Villa', time: '14:00', category: 'lodging', location: 'Positano Pier', notes: 'Unpack and enjoy aperitivo on balcony overlooking Spiaggia Grande.', lat: 40.6281, lng: 14.4850 },
      { id: 'it-11', day: 2, date: '2026-07-12', title: 'Path of the Gods (Sentiero degli Dei) Hike', time: '08:00', category: 'adventure', location: 'Bomerano to Nocelle', notes: 'Incredible coastal views. Bring 2L water & sun protection.', lat: 40.6190, lng: 14.5020 },
      { id: 'it-12', day: 3, date: '2026-07-13', title: 'Private Yacht Charter to Capri', time: '09:30', category: 'sightseeing', location: 'Capri & Blue Grotto', notes: 'Snorkeling at Faraglioni Rocks and lunch at La Fontelina.', lat: 40.5507, lng: 14.2426 }
    ],
    activities: [
      { id: 'act-10', title: 'Capri Private Boat & Blue Grotto', category: 'Adventure', status: 'Booked', cost: 650, duration: '6 hrs', rating: 5.0, notes: 'Includes Prosecco & fruit platter.', lat: 40.5507, lng: 14.2426 },
      { id: 'act-11', title: 'Ravello Villa Cimbrone Gardens', category: 'Sightseeing', status: 'Planned', cost: 30, duration: '2 hrs', rating: 4.9, notes: 'Infinity Terrace overlooking Gulf of Salerno.', lat: 40.6479, lng: 14.6111 }
    ],
    packingList: [
      { id: 'pack-10', category: 'Clothing', item: 'Linen Shirts & Summer Dresses', packed: true, assignee: 'Alex Rivers' },
      { id: 'pack-11', category: 'Essentials', item: 'Reef-safe Sunscreen SPF50 & Polarized Sunglasses', packed: true, assignee: 'Sophia Chen' }
    ],
    prepChecklist: [
      { id: 'prep-10', title: 'Schengen Visa / ETIAS Approval', completed: true },
      { id: 'prep-11', title: 'EU eSIM Data Roaming Activation', completed: true }
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
    logistics: {
      flights: [],
      accommodations: [
        { name: 'Hotel Matterhorn Focus Zermatt', address: 'Schuhheistrasse 38, Zermatt', checkIn: '2026-09-02', checkOut: '2026-09-09', confirmation: 'ZMT-1029' }
      ],
      notes: 'Check Swiss Travel Pass 8-day unlimited train voucher.'
    },
    itinerary: [
      { id: 'it-20', day: 1, date: '2026-09-02', title: 'Arrive Zermatt via Scenic Train', time: '11:00', category: 'transit', location: 'Zurich -> Zermatt', notes: 'Car-free mountain village. Hotel electric taxi pickup.', lat: 45.9765, lng: 7.7491 }
    ],
    activities: [
      { id: 'act-20', title: 'Gornergrat Railway & Matterhorn View', category: 'Adventure', status: 'Planned', cost: 120, duration: '4 hrs', rating: 4.9, notes: 'Panorama of 29 peaks above 4000m.', lat: 45.9825, lng: 7.7811 }
    ],
    packingList: [
      { id: 'pack-20', category: 'Gear', item: 'Vibram-sole Hiking Boots & Trekking Poles', packed: false, assignee: 'Marcus Vance' }
    ],
    prepChecklist: [
      { id: 'prep-20', title: 'Swiss Travel Pass Purchase', completed: false }
    ],
    attendees: [
      { id: 'att-20', name: 'Marcus Vance', role: 'Organizer', avatar: 'MV', email: 'marcus@example.com', rsvp: 'Confirmed' },
      { id: 'att-21', name: 'Elena Rostova', role: 'Member', avatar: 'ER', email: 'elena@example.com', rsvp: 'Confirmed' }
    ],
    expenses: []
  }
];

class AppStore {
  constructor() {
    this.trips = this.loadTrips();
    this.settings = this.loadSettings();
    this.currentTripId = this.trips[0]?.id || null;
    this.subscribers = [];
  }

  loadTrips() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (data) {
        return JSON.parse(data);
      }
    } catch (err) {
      console.warn('Failed to parse localStorage trips data:', err);
    }
    this.saveTrips(initialTrips);
    return initialTrips;
  }

  saveTrips(tripsData = this.trips) {
    this.trips = tripsData;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.trips));
    } catch (err) {
      console.error('Failed to save to localStorage:', err);
    }
    this.notify();
  }

  loadSettings() {
    try {
      const data = localStorage.getItem(SETTINGS_KEY);
      if (data) return JSON.parse(data);
    } catch (e) {}
    return {
      theme: 'dark',
      supabaseUrl: '',
      supabaseKey: '',
      useCloud: false
    };
  }

  saveSettings(settingsObj) {
    this.settings = { ...this.settings, ...settingsObj };
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(this.settings));
    this.notify();
  }

  subscribe(callback) {
    this.subscribers.push(callback);
    return () => {
      this.subscribers = this.subscribers.filter(cb => cb !== callback);
    };
  }

  notify() {
    this.subscribers.forEach(cb => cb(this.trips, this.getCurrentTrip()));
  }

  getTrips() {
    return this.trips;
  }

  getCurrentTrip() {
    return this.trips.find(t => t.id === this.currentTripId) || this.trips[0] || null;
  }

  setCurrentTripId(id) {
    this.currentTripId = id;
    this.notify();
  }

  // --- CRUD Methods ---
  addTrip(tripObj) {
    const newTrip = {
      id: 'trip-' + Date.now(),
      title: tripObj.title || 'New Travel Plan',
      destination: tripObj.destination || 'Uncharted Destination',
      startDate: tripObj.startDate || new Date().toISOString().split('T')[0],
      endDate: tripObj.endDate || new Date().toISOString().split('T')[0],
      status: tripObj.status || 'upcoming',
      coverImage: tripObj.coverImage || 'assets/images/hero.png',
      budget: parseFloat(tripObj.budget) || 2000,
      currency: tripObj.currency || 'USD',
      lat: tripObj.lat || 35.6762,
      lng: tripObj.lng || 139.6503,
      logistics: { flights: [], accommodations: [], notes: '' },
      itinerary: [],
      activities: [],
      packingList: [
        { id: 'p-' + Date.now(), category: 'Documents', item: 'Passport & Tickets', packed: false, assignee: 'You' },
        { id: 'p-' + (Date.now() + 1), category: 'Essentials', item: 'Phone Charger & Adapter', packed: false, assignee: 'You' }
      ],
      prepChecklist: [
        { id: 'pr-1', title: 'Check Passport Expiration Date', completed: false },
        { id: 'pr-2', title: 'Buy Travel Medical Insurance', completed: false }
      ],
      attendees: [
        { id: 'att-owner', name: 'You (Organizer)', role: 'Organizer', avatar: 'ME', email: 'me@example.com', rsvp: 'Confirmed' }
      ],
      expenses: []
    };

    this.trips.unshift(newTrip);
    this.currentTripId = newTrip.id;
    this.saveTrips();
    return newTrip;
  }

  updateTrip(tripId, updateData) {
    const idx = this.trips.findIndex(t => t.id === tripId);
    if (idx !== -1) {
      this.trips[idx] = { ...this.trips[idx], ...updateData };
      this.saveTrips();
    }
  }

  deleteTrip(tripId) {
    this.trips = this.trips.filter(t => t.id !== tripId);
    if (this.currentTripId === tripId) {
      this.currentTripId = this.trips[0]?.id || null;
    }
    this.saveTrips();
  }

  // --- Sub-Item CRUD Operations ---
  addItineraryItem(tripId, item) {
    const trip = this.trips.find(t => t.id === tripId);
    if (trip) {
      const newItem = { id: 'it-' + Date.now(), ...item };
      trip.itinerary.push(newItem);
      // Sort itinerary by day and time
      trip.itinerary.sort((a, b) => (a.day - b.day) || a.time.localeCompare(b.time));
      this.saveTrips();
    }
  }

  deleteItineraryItem(tripId, itemId) {
    const trip = this.trips.find(t => t.id === tripId);
    if (trip) {
      trip.itinerary = trip.itinerary.filter(i => i.id !== itemId);
      this.saveTrips();
    }
  }

  addActivity(tripId, act) {
    const trip = this.trips.find(t => t.id === tripId);
    if (trip) {
      const newAct = { id: 'act-' + Date.now(), ...act };
      trip.activities.push(newAct);
      this.saveTrips();
    }
  }

  deleteActivity(tripId, actId) {
    const trip = this.trips.find(t => t.id === tripId);
    if (trip) {
      trip.activities = trip.activities.filter(a => a.id !== actId);
      this.saveTrips();
    }
  }

  togglePackingItem(tripId, packId) {
    const trip = this.trips.find(t => t.id === tripId);
    if (trip) {
      const item = trip.packingList.find(p => p.id === packId);
      if (item) {
        item.packed = !item.packed;
        this.saveTrips();
      }
    }
  }

  addPackingItem(tripId, itemObj) {
    const trip = this.trips.find(t => t.id === tripId);
    if (trip) {
      trip.packingList.push({ id: 'pack-' + Date.now(), packed: false, ...itemObj });
      this.saveTrips();
    }
  }

  togglePrepItem(tripId, prepId) {
    const trip = this.trips.find(t => t.id === tripId);
    if (trip) {
      const item = trip.prepChecklist.find(p => p.id === prepId);
      if (item) {
        item.completed = !item.completed;
        this.saveTrips();
      }
    }
  }

  addAttendee(tripId, attendeeObj) {
    const trip = this.trips.find(t => t.id === tripId);
    if (trip) {
      const initials = attendeeObj.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
      trip.attendees.push({
        id: 'att-' + Date.now(),
        avatar: initials || 'AT',
        rsvp: 'Confirmed',
        ...attendeeObj
      });
      this.saveTrips();
    }
  }

  addExpense(tripId, expenseObj) {
    const trip = this.trips.find(t => t.id === tripId);
    if (trip) {
      trip.expenses.push({
        id: 'exp-' + Date.now(),
        date: new Date().toISOString().split('T')[0],
        ...expenseObj
      });
      this.saveTrips();
    }
  }

  deleteExpense(tripId, expId) {
    const trip = this.trips.find(t => t.id === tripId);
    if (trip) {
      trip.expenses = trip.expenses.filter(e => e.id !== expId);
      this.saveTrips();
    }
  }
}

export const store = new AppStore();
