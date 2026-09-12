/* ==========================================================================
   WanderPulse Dashboard Component
   ========================================================================== */

import { store } from '../store.js';

export function renderDashboard(containerEl) {
  const trips = store.getTrips();
  
  let currentFilter = 'all';
  let searchQuery = '';

  function getFilteredTrips() {
    return trips.filter(t => {
      const matchesFilter = currentFilter === 'all' || t.status === currentFilter;
      const matchesSearch = t.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            t.destination.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }

  function updateView() {
    const filteredTrips = getFilteredTrips();

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
              <i data-lucide="plus-circle"></i> Create Travel Plan
            </button>
            <button id="btn-open-settings" class="btn btn-secondary">
              <i data-lucide="database"></i> Cloud Sync Settings
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
          <i data-lucide="search" style="color: var(--text-muted); width: 18px;"></i>
          <input type="text" id="trip-search-input" placeholder="Search destination or trip..." value="${searchQuery}">
        </div>
      </div>

      <!-- Trips Grid -->
      ${filteredTrips.length === 0 ? `
        <div class="card" style="text-align: center; padding: 4rem 2rem;">
          <i data-lucide="compass" style="width: 48px; height: 48px; color: var(--text-muted); margin-bottom: 1rem;"></i>
          <h3>No travel projects found</h3>
          <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">Start planning your next getaway by creating your first trip.</p>
          <button id="btn-create-trip-empty" class="btn btn-primary"><i data-lucide="plus"></i> Create New Trip</button>
        </div>
      ` : `
        <div class="trips-grid">
          ${filteredTrips.map(trip => renderTripCard(trip)).join('')}
        </div>
      `}
    `;

    // Initialize Lucide icons
    if (window.lucide) window.lucide.createIcons();

    // Attach Event Listeners
    containerEl.querySelectorAll('.tab-btn[data-filter]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        currentFilter = e.currentTarget.getAttribute('data-filter');
        updateView();
      });
    });

    const searchInput = containerEl.querySelector('#trip-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        updateView();
      });
    }

    const createBtn = containerEl.querySelector('#btn-create-trip') || containerEl.querySelector('#btn-create-trip-empty');
    if (createBtn) {
      createBtn.addEventListener('click', openCreateTripModal);
    }

    const settingsBtn = containerEl.querySelector('#btn-open-settings');
    if (settingsBtn) {
      settingsBtn.addEventListener('click', () => {
        window.dispatchEvent(new CustomEvent('open-settings-modal'));
      });
    }

    // Trip Card Clicks
    containerEl.querySelectorAll('.trip-card[data-trip-id]').forEach(card => {
      card.addEventListener('click', (e) => {
        if (e.target.closest('.btn-delete-trip')) return;
        const tripId = card.getAttribute('data-trip-id');
        store.setCurrentTripId(tripId);
        window.dispatchEvent(new CustomEvent('navigate', { detail: { view: 'trip-detail', tripId } }));
      });
    });

    // Delete Trip Clicks
    containerEl.querySelectorAll('.btn-delete-trip').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const tripId = btn.getAttribute('data-trip-id');
        if (confirm('Are you sure you want to delete this trip project?')) {
          store.deleteTrip(tripId);
          window.showToast?.('Trip deleted successfully', 'info');
          updateView();
        }
      });
    });
  }

  updateView();
}

function renderTripCard(trip) {
  const daysUntil = getDaysUntil(trip.startDate);
  const badgeClass = `badge-${trip.status}`;

  return `
    <div class="card trip-card" data-trip-id="${trip.id}">
      <div class="trip-card-cover">
        <img src="${trip.coverImage}" alt="${trip.title}" class="trip-card-img" />
        <span class="badge ${badgeClass} trip-card-badge">${trip.status}</span>
      </div>
      <div class="trip-card-body">
        <div style="display: flex; align-items: flex-start; justify-content: space-between;">
          <h3 class="trip-card-title">${trip.title}</h3>
          <button class="btn btn-icon-only btn-secondary btn-delete-trip" data-trip-id="${trip.id}" title="Delete Trip">
            <i data-lucide="trash-2" style="width: 16px; height: 16px; color: #ef4444;"></i>
          </button>
        </div>
        
        <div class="trip-card-dates">
          <i data-lucide="map-pin" style="width: 16px; height: 16px; color: var(--accent-primary);"></i>
          <span>${trip.destination}</span>
        </div>

        <div class="trip-card-dates">
          <i data-lucide="calendar" style="width: 16px; height: 16px; color: var(--text-muted);"></i>
          <span>${formatDate(trip.startDate)} - ${formatDate(trip.endDate)}</span>
        </div>

        <div style="margin-top: 0.5rem; margin-bottom: 1rem; font-size: 0.85rem; color: var(--text-secondary);">
          <span style="font-weight: 700; color: var(--accent-secondary);">${daysUntil}</span>
        </div>

        <div class="trip-card-meta">
          <div class="avatars-group">
            ${trip.attendees.slice(0, 4).map(att => `
              <div class="avatar" title="${att.name}">${att.avatar}</div>
            `).join('')}
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

function formatDate(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function getDaysUntil(startDateStr) {
  if (!startDateStr) return '';
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const start = new Date(startDateStr + 'T00:00:00');
  const diffTime = start - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays < 0) return 'Past Trip';
  if (diffDays === 0) return 'Starts Today!';
  return `Countdown: ${diffDays} days away`;
}

function openCreateTripModal() {
  const modalHTML = `
    <div class="modal-overlay active" id="create-trip-modal">
      <div class="modal-container">
        <div class="modal-header">
          <h3 style="display: flex; align-items: center; gap: 0.5rem;">
            <i data-lucide="plane-takeoff" style="color: var(--accent-primary);"></i> Create New Travel Plan
          </h3>
          <button class="btn btn-icon-only btn-secondary" id="close-modal-btn">&times;</button>
        </div>
        <div class="modal-body">
          <form id="create-trip-form">
            <div class="form-group">
              <label class="form-label">Trip Title</label>
              <input type="text" class="form-control" name="title" placeholder="e.g. Summer Vacation in Bali" required />
            </div>

            <div class="form-group">
              <label class="form-label">Destination</label>
              <input type="text" class="form-control" name="destination" placeholder="e.g. Ubud & Seminyak, Indonesia" required />
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
                <label class="form-label">Estimated Budget ($)</label>
                <input type="number" class="form-control" name="budget" placeholder="3000" min="0" required />
              </div>
              <div class="form-group">
                <label class="form-label">Trip Status</label>
                <select class="form-control" name="status">
                  <option value="upcoming">Upcoming</option>
                  <option value="active">Active</option>
                  <option value="draft">Draft</option>
                </select>
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">Cover Image</label>
              <select class="form-control" name="coverImage">
                <option value="assets/images/tokyo.png">Tokyo Neon City</option>
                <option value="assets/images/amalfi.png">Amalfi Coast Mediterranean</option>
                <option value="assets/images/swiss.png">Swiss Alps Mountain Valley</option>
                <option value="assets/images/hero.png">Modern Travel Collage</option>
              </select>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" id="cancel-modal-btn">Cancel</button>
          <button class="btn btn-primary" id="submit-trip-btn">Create Trip Project</button>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHTML);
  if (window.lucide) window.lucide.createIcons();

  const modalEl = document.getElementById('create-trip-modal');
  const closeModal = () => modalEl.remove();

  modalEl.querySelector('#close-modal-btn').addEventListener('click', closeModal);
  modalEl.querySelector('#cancel-modal-btn').addEventListener('click', closeModal);

  modalEl.querySelector('#submit-trip-btn').addEventListener('click', () => {
    const form = modalEl.querySelector('#create-trip-form');
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const formData = new FormData(form);
    const newTrip = store.addTrip(Object.fromEntries(formData.entries()));
    closeModal();
    window.showToast?.('New travel project created!', 'success');
    window.dispatchEvent(new CustomEvent('navigate', { detail: { view: 'trip-detail', tripId: newTrip.id } }));
  });
}
