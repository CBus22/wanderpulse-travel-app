/* ==========================================================================
   WanderPulse Settings & Cloud DB Sync Modal Component
   ========================================================================== */

import { store } from '../store.js';

export function openSettingsModal() {
  const settings = store.loadSettings();

  const modalHTML = `
    <div class="modal-overlay active" id="settings-modal">
      <div class="modal-container">
        <div class="modal-header">
          <h3><i data-lucide="database" style="color: var(--accent-primary);"></i> Cloud Storage & Settings</h3>
          <button class="btn btn-icon-only btn-secondary" id="close-modal-btn">&times;</button>
        </div>
        <div class="modal-body">
          <div style="background: rgba(99, 102, 241, 0.08); border: 1px solid rgba(99, 102, 241, 0.25); border-radius: var(--radius-md); padding: 1rem; margin-bottom: 1.5rem;">
            <strong style="color: var(--accent-primary); display: flex; align-items: center; gap: 0.5rem;">
              <i data-lucide="cloud"></i> Free Supabase Cloud Database Adapter
            </strong>
            <p style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.35rem;">
              WanderPulse stores your trips locally in browser storage out of the box. To sync your travel plans across devices for free, set up a free project on <strong>Supabase.com</strong> and paste your Project URL & Anon Key below!
            </p>
          </div>

          <form id="settings-form">
            <div class="form-group">
              <label class="form-label">Supabase Project URL</label>
              <input type="url" class="form-control" name="supabaseUrl" placeholder="https://your-project.supabase.co" value="${settings.supabaseUrl || ''}" />
            </div>

            <div class="form-group">
              <label class="form-label">Supabase Anon Key</label>
              <input type="text" class="form-control" name="supabaseKey" placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6Ik..." value="${settings.supabaseKey || ''}" />
            </div>

            <div class="form-group">
              <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
                <input type="checkbox" name="useCloud" ${settings.useCloud ? 'checked' : ''} />
                <span style="font-weight: 600;">Enable Cloud Sync Database Engine</span>
              </label>
            </div>
          </form>

          <hr style="border: 0; border-top: 1px solid var(--border-color); margin: 1.5rem 0;" />

          <h4>Backup & Restore Data</h4>
          <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 1rem;">Export your complete travel plans to JSON file or import a backup.</p>
          
          <div style="display: flex; gap: 1rem;">
            <button class="btn btn-secondary btn-sm" id="btn-export-json">
              <i data-lucide="download"></i> Export Data JSON
            </button>
            <label class="btn btn-secondary btn-sm" style="cursor: pointer;">
              <i data-lucide="upload"></i> Import Backup JSON
              <input type="file" id="import-json-file" accept=".json" style="display: none;" />
            </label>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" id="cancel-modal-btn">Cancel</button>
          <button class="btn btn-primary" id="save-settings-btn">Save Settings</button>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHTML);
  if (window.lucide) window.lucide.createIcons();

  const modalEl = document.getElementById('settings-modal');
  const closeModal = () => modalEl.remove();

  modalEl.querySelector('#close-modal-btn').addEventListener('click', closeModal);
  modalEl.querySelector('#cancel-modal-btn').addEventListener('click', closeModal);

  modalEl.querySelector('#save-settings-btn').addEventListener('click', () => {
    const form = modalEl.querySelector('#settings-form');
    const formData = new FormData(form);
    const updatedSettings = {
      supabaseUrl: formData.get('supabaseUrl'),
      supabaseKey: formData.get('supabaseKey'),
      useCloud: formData.get('useCloud') === 'on'
    };
    store.saveSettings(updatedSettings);
    closeModal();
    window.showToast?.('Settings updated!', 'success');
  });

  // Export JSON
  modalEl.querySelector('#btn-export-json').addEventListener('click', () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(store.getTrips(), null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `wanderpulse_backup_${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    window.showToast?.('Travel data exported!', 'success');
  });

  // Import JSON
  modalEl.querySelector('#import-json-file').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const importedTrips = JSON.parse(event.target.result);
        if (Array.isArray(importedTrips)) {
          store.saveTrips(importedTrips);
          window.showToast?.('Travel data restored from backup!', 'success');
          closeModal();
          window.dispatchEvent(new CustomEvent('navigate', { detail: { view: 'dashboard' } }));
        } else {
          alert('Invalid backup file format');
        }
      } catch (err) {
        alert('Error parsing JSON backup file');
      }
    };
    reader.readAsText(file);
  });
}
