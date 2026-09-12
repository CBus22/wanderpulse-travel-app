/* ==========================================================================
   WanderPulse Trip Detail Component
   ========================================================================== */

import { store } from '../store.js';
import { renderItinerary } from './itinerary.js';
import { renderActivities } from './activities.js';
import { renderPacking } from './packing.js';
import { renderExpenses } from './expenses.js';
import { renderMap } from './map.js';

export function renderTripDetail(containerEl, tripId) {
  const trip = store.getTrips().find(t => t.id === tripId) || store.getCurrentTrip();

  if (!trip) {
    containerEl.innerHTML = `
      <div class="card" style="text-align: center; padding: 4rem;">
        <h2>Trip not found</h2>
        <button class="btn btn-primary" id="btn-back-dash" style="margin-top: 1rem;">Back to Dashboard</button>
      </div>
    `;
    containerEl.querySelector('#btn-back-dash')?.addEventListener('click', () => {
      window.dispatchEvent(new CustomEvent('navigate', { detail: { view: 'dashboard' } }));
    });
    return;
  }

  let activeTab = 'itinerary';

  function updateView() {
    containerEl.innerHTML = `
      <!-- Back Navigation Button -->
      <div class="nav-back-btn" id="btn-back-to-dashboard">
        <i data-lucide="arrow-left" style="width: 18px;"></i>
        <span>Back to All Travel Plans</span>
      </div>

      <!-- Trip Header Banner -->
      <div class="trip-detail-header">
        <img src="${trip.coverImage}" alt="${trip.title}" class="trip-banner-img" />
        <div class="trip-banner-overlay">
          <div class="trip-header-info">
            <div>
              <span class="badge badge-${trip.status}" style="margin-bottom: 0.5rem;">${trip.status}</span>
              <h1 style="font-size: 2.2rem; margin-bottom: 0.25rem;">${trip.title}</h1>
              <p style="color: var(--text-secondary); display: flex; align-items: center; gap: 0.5rem; font-size: 0.95rem;">
                <i data-lucide="map-pin" style="color: var(--accent-secondary); width: 16px;"></i> ${trip.destination}
                <span style="margin: 0 0.4rem;">•</span>
                <i data-lucide="calendar" style="color: var(--text-muted); width: 16px;"></i> ${formatDate(trip.startDate)} - ${formatDate(trip.endDate)}
              </p>
            </div>
            <div style="display: flex; gap: 0.75rem;">
              <button class="btn btn-secondary btn-sm" id="btn-edit-logistics">
                <i data-lucide="file-text"></i> Logistics & Notes
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Detail Sub-Tabs Bar -->
      <div class="trip-detail-tabs">
        <button class="detail-tab ${activeTab === 'itinerary' ? 'active' : ''}" data-tab="itinerary">
          <i data-lucide="clock" style="width: 18px;"></i> Itinerary & Timeline
        </button>
        <button class="detail-tab ${activeTab === 'activities' ? 'active' : ''}" data-tab="activities">
          <i data-lucide="compass" style="width: 18px;"></i> Activities (${trip.activities.length})
        </button>
        <button class="detail-tab ${activeTab === 'packing' ? 'active' : ''}" data-tab="packing">
          <i data-lucide="check-square" style="width: 18px;"></i> Packing & Prep
        </button>
        <button class="detail-tab ${activeTab === 'expenses' ? 'active' : ''}" data-tab="expenses">
          <i data-lucide="dollar-sign" style="width: 18px;"></i> Attendees & Expenses
        </button>
        <button class="detail-tab ${activeTab === 'map' ? 'active' : ''}" data-tab="map">
          <i data-lucide="map" style="width: 18px;"></i> Map Route
        </button>
        <button class="detail-tab ${activeTab === 'logistics' ? 'active' : ''}" data-tab="logistics">
          <i data-lucide="info" style="width: 18px;"></i> Flights & Hotels
        </button>
      </div>

      <!-- Sub-Tab Content Panes -->
      <div id="tab-content-container"></div>
    `;

    if (window.lucide) window.lucide.createIcons();

    // Attach Event Listeners
    containerEl.querySelector('#btn-back-to-dashboard').addEventListener('click', () => {
      window.dispatchEvent(new CustomEvent('navigate', { detail: { view: 'dashboard' } }));
    });

    containerEl.querySelector('#btn-edit-logistics').addEventListener('click', () => {
      activeTab = 'logistics';
      updateView();
    });

    containerEl.querySelectorAll('.detail-tab').forEach(tabBtn => {
      tabBtn.addEventListener('click', (e) => {
        activeTab = e.currentTarget.getAttribute('data-tab');
        updateView();
      });
    });

    // Render corresponding sub-tab pane
    const contentEl = containerEl.querySelector('#tab-content-container');
    if (activeTab === 'itinerary') {
      renderItinerary(contentEl, trip);
    } else if (activeTab === 'activities') {
      renderActivities(contentEl, trip);
    } else if (activeTab === 'packing') {
      renderPacking(contentEl, trip);
    } else if (activeTab === 'expenses') {
      renderExpenses(contentEl, trip);
    } else if (activeTab === 'map') {
      renderMap(contentEl, trip);
    } else if (activeTab === 'logistics') {
      renderLogistics(contentEl, trip);
    }
  }

  updateView();
}

function renderLogistics(containerEl, trip) {
  containerEl.innerHTML = `
    <div class="card" style="margin-bottom: 2rem;">
      <h3 style="margin-bottom: 1.25rem; display: flex; align-items: center; gap: 0.5rem;">
        <i data-lucide="plane" style="color: var(--accent-primary);"></i> Flights & Transportation
      </h3>
      ${trip.logistics.flights.length === 0 ? '<p style="color: var(--text-muted);">No flights added yet.</p>' : `
        <div style="display: grid; gap: 1rem;">
          ${trip.logistics.flights.map(f => `
            <div style="background: var(--bg-secondary); border: 1px solid var(--border-color); padding: 1rem; border-radius: var(--radius-md); display: flex; justify-content: space-between; align-items: center;">
              <div>
                <strong style="font-size: 1.1rem; color: var(--text-primary);">${f.airline}</strong>
                <p style="color: var(--text-secondary); font-size: 0.9rem;">${f.from} ➔ ${f.to}</p>
                <p style="color: var(--text-muted); font-size: 0.8rem;">Date: ${f.date}</p>
              </div>
              <span class="badge badge-upcoming">Conf: ${f.confirmation}</span>
            </div>
          `).join('')}
        </div>
      `}
    </div>

    <div class="card" style="margin-bottom: 2rem;">
      <h3 style="margin-bottom: 1.25rem; display: flex; align-items: center; gap: 0.5rem;">
        <i data-lucide="building" style="color: var(--accent-secondary);"></i> Hotel & Accommodation Bookings
      </h3>
      ${trip.logistics.accommodations.length === 0 ? '<p style="color: var(--text-muted);">No accommodations recorded.</p>' : `
        <div style="display: grid; gap: 1rem;">
          ${trip.logistics.accommodations.map(a => `
            <div style="background: var(--bg-secondary); border: 1px solid var(--border-color); padding: 1rem; border-radius: var(--radius-md); display: flex; justify-content: space-between; align-items: center;">
              <div>
                <strong style="font-size: 1.1rem; color: var(--text-primary);">${a.name}</strong>
                <p style="color: var(--text-secondary); font-size: 0.9rem;">${a.address}</p>
                <p style="color: var(--text-muted); font-size: 0.8rem;">Check-in: ${a.checkIn} | Check-out: ${a.checkOut}</p>
              </div>
              <span class="badge badge-active">Conf: ${a.confirmation}</span>
            </div>
          `).join('')}
        </div>
      `}
    </div>

    <div class="card">
      <h3 style="margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
        <i data-lucide="notebook" style="color: #f59e0b;"></i> Trip Notes & Important Reminders
      </h3>
      <textarea class="form-control" id="trip-notes-area" rows="4" placeholder="Add booking codes, Wi-Fi passwords, emergency contacts...">${trip.logistics.notes || ''}</textarea>
      <button class="btn btn-primary btn-sm" id="btn-save-notes" style="margin-top: 1rem;">Save Notes</button>
    </div>
  `;

  if (window.lucide) window.lucide.createIcons();

  containerEl.querySelector('#btn-save-notes')?.addEventListener('click', () => {
    const notesVal = containerEl.querySelector('#trip-notes-area').value;
    trip.logistics.notes = notesVal;
    store.updateTrip(trip.id, { logistics: trip.logistics });
    window.showToast?.('Trip notes saved!', 'success');
  });
}

function formatDate(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}
