/* ==========================================================================
   WanderPulse Main Application Controller & Router
   ========================================================================== */

import { store } from './store.js';
import { renderDashboard } from './components/dashboard.js';
import { renderTripDetail } from './components/tripDetail.js';
import { openSettingsModal } from './components/settingsModal.js';

let currentView = 'dashboard';
let currentTripId = null;

document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

function initApp() {
  const mainContainer = document.getElementById('app-main');
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const brandEl = document.querySelector('.nav-brand');

  // Load saved theme
  const settings = store.loadSettings();
  if (settings.theme) {
    document.documentElement.setAttribute('data-theme', settings.theme);
  }

  // Toast Notification Manager
  window.showToast = function(message, type = 'info') {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
      <i data-lucide="${type === 'success' ? 'check-circle' : 'info'}" style="color: ${type === 'success' ? 'var(--status-active)' : 'var(--accent-primary)'};"></i>
      <span>${message}</span>
    `;
    container.appendChild(toast);
    if (window.lucide) window.lucide.createIcons();

    setTimeout(() => {
      toast.style.animation = 'slideOut 0.3s ease forwards';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  };

  // Theme Toggle Listener
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      store.saveSettings({ theme: newTheme });
      window.showToast(`Switched to ${newTheme} theme`, 'info');
    });
  }

  // Brand Header Click -> Return to Dashboard
  if (brandEl) {
    brandEl.addEventListener('click', () => {
      currentView = 'dashboard';
      renderCurrentView();
    });
  }

  // Custom Navigation Event Listener
  window.addEventListener('navigate', (e) => {
    currentView = e.detail.view;
    if (e.detail.tripId) {
      currentTripId = e.detail.tripId;
    }
    renderCurrentView();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Settings Modal Event Listener
  window.addEventListener('open-settings-modal', () => {
    openSettingsModal();
  });

  // Render initial view
  renderCurrentView();
}

function renderCurrentView() {
  const mainContainer = document.getElementById('app-main');
  if (!mainContainer) return;

  if (currentView === 'dashboard') {
    renderDashboard(mainContainer);
  } else if (currentView === 'trip-detail') {
    renderTripDetail(mainContainer, currentTripId || store.getCurrentTrip()?.id);
  }
}
