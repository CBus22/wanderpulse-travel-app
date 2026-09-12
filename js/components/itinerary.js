/* ==========================================================================
   WanderPulse Itinerary Sub-Tab Component
   ========================================================================== */

import { store } from '../store.js';

export function renderItinerary(containerEl, trip) {
  const itinerary = trip.itinerary || [];
  
  // Group itinerary by Day
  const daysMap = {};
  itinerary.forEach(item => {
    if (!daysMap[item.day]) daysMap[item.day] = [];
    daysMap[item.day].push(item);
  });

  const dayNumbers = Object.keys(daysMap).map(Number).sort((a, b) => a - b);

  containerEl.innerHTML = `
    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem;">
      <div>
        <h2>Day-by-Day Itinerary Timeline</h2>
        <p style="color: var(--text-secondary); font-size: 0.9rem;">Schedule activities, tours, transport, and reservations per day.</p>
      </div>
      <button class="btn btn-primary" id="btn-add-itinerary-item">
        <i data-lucide="plus"></i> Add Itinerary Event
      </button>
    </div>

    ${dayNumbers.length === 0 ? `
      <div class="card" style="text-align: center; padding: 3rem;">
        <i data-lucide="calendar" style="width: 40px; height: 40px; color: var(--text-muted); margin-bottom: 1rem;"></i>
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
              <span style="color: var(--text-secondary); font-weight: 600;">
                ${daysMap[dayNum][0]?.date ? formatDate(daysMap[dayNum][0].date) : ''}
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
                          <i data-lucide="map-pin" style="width: 14px; color: var(--text-muted);"></i> ${item.location}
                        </p>
                      ` : ''}
                      <p style="font-size: 0.9rem; color: var(--text-secondary);">${item.notes || ''}</p>
                    </div>
                    <button class="btn btn-icon-only btn-secondary btn-delete-it-item" data-item-id="${item.id}" title="Remove event">
                      <i data-lucide="x" style="width: 16px; color: #ef4444;"></i>
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

  if (window.lucide) window.lucide.createIcons();

  // Attach Event Listeners
  containerEl.querySelector('#btn-add-itinerary-item')?.addEventListener('click', () => {
    openAddItineraryModal(trip);
  });

  containerEl.querySelectorAll('.btn-delete-it-item').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const itemId = btn.getAttribute('data-item-id');
      if (confirm('Delete this event from itinerary?')) {
        store.deleteItineraryItem(trip.id, itemId);
        window.showToast?.('Itinerary item removed', 'info');
        renderItinerary(containerEl, store.getTrips().find(t => t.id === trip.id));
      }
    });
  });
}

function openAddItineraryModal(trip) {
  const modalHTML = `
    <div class="modal-overlay active" id="add-itinerary-modal">
      <div class="modal-container">
        <div class="modal-header">
          <h3><i data-lucide="plus-circle" style="color: var(--accent-primary);"></i> Add Itinerary Event</h3>
          <button class="btn btn-icon-only btn-secondary" id="close-modal-btn">&times;</button>
        </div>
        <div class="modal-body">
          <form id="add-itinerary-form">
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">Trip Day #</label>
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
                  <option value="dining">Dining & Food</option>
                  <option value="adventure">Outdoor Adventure</option>
                  <option value="transit">Transit / Transport</option>
                  <option value="lodging">Hotel / Lodging</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label">Location / Address</label>
                <input type="text" class="form-control" name="location" placeholder="e.g. Asakusa, Tokyo" />
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">Notes & Details</label>
              <textarea class="form-control" name="notes" rows="3" placeholder="Reservation details, entrance fee info, etc."></textarea>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" id="cancel-modal-btn">Cancel</button>
          <button class="btn btn-primary" id="submit-itinerary-btn">Add to Itinerary</button>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHTML);
  if (window.lucide) window.lucide.createIcons();

  const modalEl = document.getElementById('add-itinerary-modal');
  const closeModal = () => modalEl.remove();

  modalEl.querySelector('#close-modal-btn').addEventListener('click', closeModal);
  modalEl.querySelector('#cancel-modal-btn').addEventListener('click', closeModal);

  modalEl.querySelector('#submit-itinerary-btn').addEventListener('click', () => {
    const form = modalEl.querySelector('#add-itinerary-form');
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const formData = new FormData(form);
    const itemData = Object.fromEntries(formData.entries());
    itemData.day = parseInt(itemData.day);

    store.addItineraryItem(trip.id, itemData);
    closeModal();
    window.showToast?.('Itinerary event added!', 'success');

    // Refresh sub tab
    const updatedTrip = store.getTrips().find(t => t.id === trip.id);
    const container = document.querySelector('#tab-content-container');
    if (container) renderItinerary(container, updatedTrip);
  });
}

function formatDate(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}
