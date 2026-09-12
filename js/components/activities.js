/* ==========================================================================
   WanderPulse Activities Sub-Tab Component
   ========================================================================== */

import { store } from '../store.js';

export function renderActivities(containerEl, trip) {
  const activities = trip.activities || [];

  containerEl.innerHTML = `
    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem;">
      <div>
        <h2>Trip Activities & Experiences</h2>
        <p style="color: var(--text-secondary); font-size: 0.9rem;">Keep track of bucket list ideas, booked tours, and activity costs.</p>
      </div>
      <button class="btn btn-primary" id="btn-add-activity">
        <i data-lucide="plus"></i> Add Activity
      </button>
    </div>

    ${activities.length === 0 ? `
      <div class="card" style="text-align: center; padding: 3rem;">
        <i data-lucide="compass" style="width: 40px; height: 40px; color: var(--text-muted); margin-bottom: 1rem;"></i>
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
              <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
                <span>Category: <strong style="color: var(--text-primary);">${act.category}</strong></span>
                <span>•</span>
                <span>Duration: <strong>${act.duration || 'N/A'}</strong></span>
              </p>
              <p style="font-size: 0.9rem; color: var(--text-muted);">${act.notes || ''}</p>
            </div>
            <div style="margin-top: 1.25rem; padding-top: 0.75rem; border-top: 1px solid var(--border-color); display: flex; justify-content: space-between; align-items: center;">
              <span style="font-size: 0.85rem; color: #f59e0b; font-weight: 700; display: flex; align-items: center; gap: 0.25rem;">
                <i data-lucide="star" style="width: 14px; fill: #f59e0b;"></i> ${act.rating || 4.8}
              </span>
              <button class="btn btn-icon-only btn-secondary btn-delete-act" data-act-id="${act.id}">
                <i data-lucide="trash-2" style="width: 16px; color: #ef4444;"></i>
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    `}
  `;

  if (window.lucide) window.lucide.createIcons();

  containerEl.querySelector('#btn-add-activity')?.addEventListener('click', () => {
    openAddActivityModal(trip);
  });

  containerEl.querySelectorAll('.btn-delete-act').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const actId = btn.getAttribute('data-act-id');
      if (confirm('Delete this activity?')) {
        store.deleteActivity(trip.id, actId);
        window.showToast?.('Activity removed', 'info');
        const updatedTrip = store.getTrips().find(t => t.id === trip.id);
        const container = document.querySelector('#tab-content-container');
        if (container) renderActivities(container, updatedTrip);
      }
    });
  });
}

function openAddActivityModal(trip) {
  const modalHTML = `
    <div class="modal-overlay active" id="add-activity-modal">
      <div class="modal-container">
        <div class="modal-header">
          <h3><i data-lucide="compass" style="color: var(--accent-primary);"></i> Add Activity / Experience</h3>
          <button class="btn btn-icon-only btn-secondary" id="close-modal-btn">&times;</button>
        </div>
        <div class="modal-body">
          <form id="add-activity-form">
            <div class="form-group">
              <label class="form-label">Activity Title</label>
              <input type="text" class="form-control" name="title" placeholder="e.g. Helicopter Tour over Volcano" required />
            </div>

            <div class="form-row">
              <div class="form-group">
                <label class="form-label">Category</label>
                <select class="form-control" name="category">
                  <option value="Sightseeing">Sightseeing</option>
                  <option value="Culture">Culture & Arts</option>
                  <option value="Dining">Dining & Culinary</option>
                  <option value="Adventure">Adventure & Outdoor</option>
                  <option value="Shopping">Shopping & Markets</option>
                  <option value="Nightlife">Nightlife & Drinks</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label">Booking Status</label>
                <select class="form-control" name="status">
                  <option value="Planned">Planned</option>
                  <option value="Booked">Booked</option>
                  <option value="Optional">Optional</option>
                </select>
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label class="form-label">Estimated Cost ($)</label>
                <input type="number" class="form-control" name="cost" placeholder="100" min="0" />
              </div>
              <div class="form-group">
                <label class="form-label">Estimated Duration</label>
                <input type="text" class="form-control" name="duration" placeholder="e.g. 2 hrs" />
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">Notes & Booking Instructions</label>
              <textarea class="form-control" name="notes" rows="3" placeholder="Meeting point, dress code, confirmation code..."></textarea>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" id="cancel-modal-btn">Cancel</button>
          <button class="btn btn-primary" id="submit-activity-btn">Save Activity</button>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHTML);
  if (window.lucide) window.lucide.createIcons();

  const modalEl = document.getElementById('add-activity-modal');
  const closeModal = () => modalEl.remove();

  modalEl.querySelector('#close-modal-btn').addEventListener('click', closeModal);
  modalEl.querySelector('#cancel-modal-btn').addEventListener('click', closeModal);

  modalEl.querySelector('#submit-activity-btn').addEventListener('click', () => {
    const form = modalEl.querySelector('#add-activity-form');
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const formData = new FormData(form);
    const actData = Object.fromEntries(formData.entries());
    actData.cost = parseFloat(actData.cost) || 0;

    store.addActivity(trip.id, actData);
    closeModal();
    window.showToast?.('Activity added!', 'success');

    const updatedTrip = store.getTrips().find(t => t.id === trip.id);
    const container = document.querySelector('#tab-content-container');
    if (container) renderActivities(container, updatedTrip);
  });
}
