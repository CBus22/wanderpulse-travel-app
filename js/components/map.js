/* ==========================================================================
   WanderPulse Interactive Leaflet Map Sub-Tab Component
   ========================================================================== */

export function renderMap(containerEl, trip) {
  containerEl.innerHTML = `
    <div class="card" style="margin-bottom: 1.5rem;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
        <div>
          <h3>Interactive Destination Map & Pins</h3>
          <p style="color: var(--text-secondary); font-size: 0.9rem;">Visualize trip locations, accommodations, and itinerary activity pins.</p>
        </div>
      </div>
      <div id="map-container"></div>
    </div>
  `;

  setTimeout(() => {
    initLeafletMap(trip);
  }, 100);
}

function initLeafletMap(trip) {
  const mapElement = document.getElementById('map-container');
  if (!mapElement || !window.L) return;

  const centerLat = trip.lat || 35.6762;
  const centerLng = trip.lng || 139.6503;

  // Initialize Leaflet Map instance
  const map = window.L.map('map-container').setView([centerLat, centerLng], 11);

  // Add OpenStreetMap tile layer
  window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);

  // Add Destination Pin
  window.L.marker([centerLat, centerLng])
    .addTo(map)
    .bindPopup(`<b>${trip.title}</b><br/>${trip.destination}`)
    .openPopup();

  // Add Itinerary Location Pins if coordinates exist
  if (trip.itinerary) {
    trip.itinerary.forEach(it => {
      if (it.lat && it.lng) {
        window.L.marker([it.lat, it.lng])
          .addTo(map)
          .bindPopup(`<b>Day ${it.day}: ${it.title}</b><br/>${it.location || ''}`);
      }
    });
  }

  // Add Activity Pins
  if (trip.activities) {
    trip.activities.forEach(act => {
      if (act.lat && act.lng) {
        window.L.marker([act.lat, act.lng])
          .addTo(map)
          .bindPopup(`<b>${act.title}</b><br/>Status: ${act.status}`);
      }
    });
  }
}
