/* ==========================================================================
   WanderPulse Packing & Preparation Sub-Tab Component
   ========================================================================== */

import { store } from '../store.js';

export function renderPacking(containerEl, trip) {
  const packingList = trip.packingList || [];
  const prepList = trip.prepChecklist || [];

  const packedCount = packingList.filter(p => p.packed).length;
  const packPct = packingList.length > 0 ? Math.round((packedCount / packingList.length) * 100) : 0;

  const prepCount = prepList.filter(pr => pr.completed).length;
  const prepPct = prepList.length > 0 ? Math.round((prepCount / prepList.length) * 100) : 0;

  containerEl.innerHTML = `
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-bottom: 2rem;">
      <!-- Packing Progress Meter -->
      <div class="card">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
          <h3><i data-lucide="luggage" style="color: var(--accent-primary);"></i> Packing Progress</h3>
          <span style="font-weight: 700; color: var(--accent-primary); font-size: 1.2rem;">${packPct}%</span>
        </div>
        <div class="progress-bar-bg" style="margin-bottom: 0.75rem;">
          <div class="progress-bar-fill" style="width: ${packPct}%;"></div>
        </div>
        <p style="font-size: 0.85rem; color: var(--text-secondary);">${packedCount} of ${packingList.length} items packed into luggage.</p>
      </div>

      <!-- Readiness Checklist Progress -->
      <div class="card">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
          <h3><i data-lucide="shield-check" style="color: var(--status-active);"></i> Pre-Trip Readiness</h3>
          <span style="font-weight: 700; color: var(--status-active); font-size: 1.2rem;">${prepPct}%</span>
        </div>
        <div class="progress-bar-bg" style="margin-bottom: 0.75rem;">
          <div class="progress-bar-fill" style="width: ${prepPct}%; background: var(--accent-gradient-teal);"></div>
        </div>
        <p style="font-size: 0.85rem; color: var(--text-secondary);">${prepCount} of ${prepList.length} document/prep tasks completed.</p>
      </div>
    </div>

    <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 2rem;">
      <!-- Packing Checklist Table -->
      <div class="card">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.25rem;">
          <h3>Luggage & Gear Packing List</h3>
          <button class="btn btn-primary btn-sm" id="btn-add-packing-item">
            <i data-lucide="plus"></i> Add Item
          </button>
        </div>

        ${packingList.length === 0 ? '<p style="color: var(--text-muted);">No items in packing list.</p>' : `
          <div style="display: grid; gap: 0.75rem;">
            ${packingList.map(item => `
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 0.75rem 1rem; background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
                <div style="display: flex; align-items: center; gap: 0.75rem;">
                  <div class="checkbox-custom ${item.packed ? 'checked' : ''}" data-pack-id="${item.id}">
                    ${item.packed ? '✓' : ''}
                  </div>
                  <div>
                    <span style="${item.packed ? 'text-decoration: line-through; color: var(--text-muted);' : 'font-weight: 600;'}">
                      ${item.item}
                    </span>
                    <span class="badge" style="margin-left: 0.5rem; background: rgba(255,255,255,0.05); color: var(--text-secondary); font-size: 0.7rem;">
                      ${item.category}
                    </span>
                  </div>
                </div>
                <span style="font-size: 0.8rem; color: var(--text-muted);">${item.assignee || ''}</span>
              </div>
            `).join('')}
          </div>
        `}
      </div>

      <!-- Pre-Trip Prep Checklist -->
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

  if (window.lucide) window.lucide.createIcons();

  // Attach Checkbox Toggles
  containerEl.querySelectorAll('.checkbox-custom[data-pack-id]').forEach(cb => {
    cb.addEventListener('click', (e) => {
      const packId = cb.getAttribute('data-pack-id');
      store.togglePackingItem(trip.id, packId);
      const updatedTrip = store.getTrips().find(t => t.id === trip.id);
      const container = document.querySelector('#tab-content-container');
      if (container) renderPacking(container, updatedTrip);
    });
  });

  containerEl.querySelectorAll('.checkbox-custom[data-prep-id]').forEach(cb => {
    cb.addEventListener('click', (e) => {
      const prepId = cb.getAttribute('data-prep-id');
      store.togglePrepItem(trip.id, prepId);
      const updatedTrip = store.getTrips().find(t => t.id === trip.id);
      const container = document.querySelector('#tab-content-container');
      if (container) renderPacking(container, updatedTrip);
    });
  });

  containerEl.querySelector('#btn-add-packing-item')?.addEventListener('click', () => {
    openAddPackingItemModal(trip);
  });
}

function openAddPackingItemModal(trip) {
  const modalHTML = `
    <div class="modal-overlay active" id="add-packing-modal">
      <div class="modal-container">
        <div class="modal-header">
          <h3><i data-lucide="plus-circle" style="color: var(--accent-primary);"></i> Add Packing Item</h3>
          <button class="btn btn-icon-only btn-secondary" id="close-modal-btn">&times;</button>
        </div>
        <div class="modal-body">
          <form id="add-packing-form">
            <div class="form-group">
              <label class="form-label">Item Name</label>
              <input type="text" class="form-control" name="item" placeholder="e.g. Noise Cancelling Headphones" required />
            </div>

            <div class="form-row">
              <div class="form-group">
                <label class="form-label">Category</label>
                <select class="form-control" name="category">
                  <option value="Essentials">Essentials</option>
                  <option value="Clothing">Clothing</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Toiletries">Toiletries</option>
                  <option value="Documents">Documents</option>
                  <option value="Gear">Outdoor / Special Gear</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label">Who is Packing This?</label>
                <input type="text" class="form-control" name="assignee" placeholder="e.g. Alex Rivers" />
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" id="cancel-modal-btn">Cancel</button>
          <button class="btn btn-primary" id="submit-packing-btn">Add to List</button>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHTML);
  if (window.lucide) window.lucide.createIcons();

  const modalEl = document.getElementById('add-packing-modal');
  const closeModal = () => modalEl.remove();

  modalEl.querySelector('#close-modal-btn').addEventListener('click', closeModal);
  modalEl.querySelector('#cancel-modal-btn').addEventListener('click', closeModal);

  modalEl.querySelector('#submit-packing-btn').addEventListener('click', () => {
    const form = modalEl.querySelector('#add-packing-form');
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const formData = new FormData(form);
    store.addPackingItem(trip.id, Object.fromEntries(formData.entries()));
    closeModal();
    window.showToast?.('Packing item added!', 'success');

    const updatedTrip = store.getTrips().find(t => t.id === trip.id);
    const container = document.querySelector('#tab-content-container');
    if (container) renderPacking(container, updatedTrip);
  });
}
