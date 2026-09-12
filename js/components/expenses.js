/* ==========================================================================
   WanderPulse Attendees & Group Expense Splitter Sub-Tab
   ========================================================================== */

import { store } from '../store.js';

export function renderExpenses(containerEl, trip) {
  const attendees = trip.attendees || [];
  const expenses = trip.expenses || [];

  // Calculate Total Spent
  const totalSpent = expenses.reduce((sum, e) => sum + (parseFloat(e.amount) || 0), 0);
  const totalBudget = trip.budget || 0;
  const remainingBudget = totalBudget - totalSpent;

  // Calculate Net Balances per Attendee
  const balances = {};
  attendees.forEach(a => balances[a.name] = 0);

  expenses.forEach(exp => {
    const amt = parseFloat(exp.amount) || 0;
    const payer = exp.paidBy;
    const splitWith = exp.splitWith && exp.splitWith.length > 0 ? exp.splitWith : attendees.map(a => a.name);
    const perPersonShare = amt / splitWith.length;

    // Credit payer
    if (balances[payer] !== undefined) {
      balances[payer] += amt;
    } else {
      balances[payer] = amt;
    }

    // Debit each person sharing
    splitWith.forEach(person => {
      if (balances[person] !== undefined) {
        balances[person] -= perPersonShare;
      } else {
        balances[person] = -perPersonShare;
      }
    });
  });

  // Calculate Settlement Payments (Who owes whom)
  const settlements = calculateSettlements(balances);

  containerEl.innerHTML = `
    <!-- Expense Stats Grid -->
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
        <div class="stat-value" style="color: ${remainingBudget >= 0 ? 'var(--status-active)' : '#ef4444'};">
          $${remainingBudget.toLocaleString()}
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Attendees</div>
        <div class="stat-value" style="color: var(--accent-secondary);">${attendees.length} members</div>
      </div>
    </div>

    <!-- Settlement Suggestions ("Who owes whom") -->
    ${settlements.length > 0 ? `
      <div class="card" style="margin-bottom: 2rem; border-color: rgba(16, 185, 129, 0.3); background: rgba(16, 185, 129, 0.05);">
        <h3 style="margin-bottom: 1rem; color: var(--status-active); display: flex; align-items: center; gap: 0.5rem;">
          <i data-lucide="calculator"></i> Smart Settlement Calculator (Optimal Transfers)
        </h3>
        <div style="display: grid; gap: 0.75rem;">
          ${settlements.map(s => `
            <div style="display: flex; align-items: center; justify-content: space-between; background: var(--bg-card); padding: 0.85rem 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
              <span style="font-weight: 600;">
                <strong style="color: #f87171;">${s.from}</strong> owes <strong style="color: var(--status-active);">${s.to}</strong>
              </span>
              <span class="badge badge-active" style="font-size: 0.9rem;">$${s.amount.toFixed(2)}</span>
            </div>
          `).join('')}
        </div>
      </div>
    ` : ''}

    <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 2rem;">
      <!-- Expenses List -->
      <div class="card">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.25rem;">
          <h3>Group Expense Log</h3>
          <button class="btn btn-primary btn-sm" id="btn-add-expense">
            <i data-lucide="plus"></i> Log Expense
          </button>
        </div>

        ${expenses.length === 0 ? '<p style="color: var(--text-muted);">No expenses logged yet.</p>' : `
          <div style="display: grid; gap: 1rem;">
            ${expenses.map(exp => `
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
                <div>
                  <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.25rem;">
                    <strong style="font-size: 1.1rem; color: var(--text-primary);">${exp.title}</strong>
                    <span class="badge" style="background: rgba(99, 102, 241, 0.15); color: var(--accent-primary); font-size: 0.7rem;">
                      ${exp.category}
                    </span>
                  </div>
                  <p style="font-size: 0.85rem; color: var(--text-secondary);">
                    Paid by <strong style="color: var(--text-primary);">${exp.paidBy}</strong> • Split among ${exp.splitWith ? exp.splitWith.length : attendees.length} people
                  </p>
                </div>
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <span style="font-weight: 700; font-size: 1.2rem; color: var(--text-primary);">$${parseFloat(exp.amount).toFixed(2)}</span>
                  <button class="btn btn-icon-only btn-secondary btn-delete-exp" data-exp-id="${exp.id}">
                    <i data-lucide="trash-2" style="width: 16px; color: #ef4444;"></i>
                  </button>
                </div>
              </div>
            `).join('')}
          </div>
        `}
      </div>

      <!-- Attendees & Net Balances -->
      <div style="display: flex; flex-direction: column; gap: 1.5rem;">
        <div class="card">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.25rem;">
            <h3>Trip Attendees</h3>
            <button class="btn btn-secondary btn-sm" id="btn-add-attendee">
              <i data-lucide="user-plus"></i> Add
            </button>
          </div>

          <div style="display: grid; gap: 0.75rem;">
            ${attendees.map(att => {
              const bal = balances[att.name] || 0;
              const isPositive = bal >= 0;
              return `
                <div style="display: flex; align-items: center; justify-content: space-between; padding: 0.75rem; background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
                  <div style="display: flex; align-items: center; gap: 0.75rem;">
                    <div class="avatar">${att.avatar}</div>
                    <div>
                      <div style="font-weight: 600; font-size: 0.95rem;">${att.name}</div>
                      <div style="font-size: 0.75rem; color: var(--text-muted);">${att.role}</div>
                    </div>
                  </div>
                  <div style="text-align: right;">
                    <div style="font-size: 0.85rem; font-weight: 700; color: ${isPositive ? 'var(--status-active)' : '#ef4444'};">
                      ${isPositive ? '+' : ''}$${bal.toFixed(2)}
                    </div>
                    <div style="font-size: 0.7rem; color: var(--text-muted);">${isPositive ? 'gets back' : 'owes'}</div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Chart canvas card -->
        <div class="card">
          <h4 style="margin-bottom: 1rem;">Expense Breakdown by Category</h4>
          <canvas id="expenseChart" style="max-height: 220px;"></canvas>
        </div>
      </div>
    </div>
  `;

  if (window.lucide) window.lucide.createIcons();
  renderExpenseChart(expenses);

  // Event Listeners
  containerEl.querySelector('#btn-add-expense')?.addEventListener('click', () => {
    openAddExpenseModal(trip);
  });

  containerEl.querySelector('#btn-add-attendee')?.addEventListener('click', () => {
    openAddAttendeeModal(trip);
  });

  containerEl.querySelectorAll('.btn-delete-exp').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const expId = btn.getAttribute('data-exp-id');
      if (confirm('Delete this expense entry?')) {
        store.deleteExpense(trip.id, expId);
        window.showToast?.('Expense deleted', 'info');
        const updatedTrip = store.getTrips().find(t => t.id === trip.id);
        const container = document.querySelector('#tab-content-container');
        if (container) renderExpenses(container, updatedTrip);
      }
    });
  });
}

function calculateSettlements(balancesObj) {
  const debtors = [];
  const creditors = [];

  Object.entries(balancesObj).forEach(([person, amount]) => {
    if (amount < -0.01) {
      debtors.push({ person, amount: -amount });
    } else if (amount > 0.01) {
      creditors.push({ person, amount });
    }
  });

  const settlements = [];
  let i = 0;
  let j = 0;

  while (i < debtors.length && j < creditors.length) {
    const debtor = debtors[i];
    const creditor = creditors[j];
    const settlementAmount = Math.min(debtor.amount, creditor.amount);

    settlements.push({
      from: debtor.person,
      to: creditor.person,
      amount: settlementAmount
    });

    debtor.amount -= settlementAmount;
    creditor.amount -= settlementAmount;

    if (debtor.amount < 0.01) i++;
    if (creditor.amount < 0.01) j++;
  }

  return settlements;
}

function renderExpenseChart(expenses) {
  const ctx = document.getElementById('expenseChart');
  if (!ctx || !window.Chart) return;

  const categories = {};
  expenses.forEach(e => {
    const cat = e.category || 'Other';
    categories[cat] = (categories[cat] || 0) + (parseFloat(e.amount) || 0);
  });

  const labels = Object.keys(categories);
  const data = Object.values(categories);

  new window.Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: labels.length > 0 ? labels : ['No Expenses'],
      datasets: [{
        data: data.length > 0 ? data : [1],
        backgroundColor: ['#6366f1', '#06b6d4', '#10b981', '#f59e0b', '#ec4899', '#8b5cf6'],
        borderWidth: 0
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: 'bottom', labels: { color: '#94a3b8', font: { size: 11 } } }
      }
    }
  });
}

function openAddExpenseModal(trip) {
  const attendees = trip.attendees || [];
  const modalHTML = `
    <div class="modal-overlay active" id="add-expense-modal">
      <div class="modal-container">
        <div class="modal-header">
          <h3><i data-lucide="dollar-sign" style="color: var(--accent-primary);"></i> Log Group Expense</h3>
          <button class="btn btn-icon-only btn-secondary" id="close-modal-btn">&times;</button>
        </div>
        <div class="modal-body">
          <form id="add-expense-form">
            <div class="form-group">
              <label class="form-label">Expense Description</label>
              <input type="text" class="form-control" name="title" placeholder="e.g. Group Dinner at Izakaya" required />
            </div>

            <div class="form-row">
              <div class="form-group">
                <label class="form-label">Amount ($)</label>
                <input type="number" step="0.01" class="form-control" name="amount" placeholder="150.00" required />
              </div>
              <div class="form-group">
                <label class="form-label">Category</label>
                <select class="form-control" name="category">
                  <option value="Dining">Dining & Drinks</option>
                  <option value="Lodging">Lodging / Hotel</option>
                  <option value="Transit">Transit / Flights</option>
                  <option value="Activities">Activities & Tours</option>
                  <option value="Shopping">Shopping / Supplies</option>
                </select>
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">Paid By</label>
              <select class="form-control" name="paidBy">
                ${attendees.map(att => `<option value="${att.name}">${att.name}</option>`).join('')}
              </select>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" id="cancel-modal-btn">Cancel</button>
          <button class="btn btn-primary" id="submit-expense-btn">Add Expense</button>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHTML);
  if (window.lucide) window.lucide.createIcons();

  const modalEl = document.getElementById('add-expense-modal');
  const closeModal = () => modalEl.remove();

  modalEl.querySelector('#close-modal-btn').addEventListener('click', closeModal);
  modalEl.querySelector('#cancel-modal-btn').addEventListener('click', closeModal);

  modalEl.querySelector('#submit-expense-btn').addEventListener('click', () => {
    const form = modalEl.querySelector('#add-expense-form');
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const formData = new FormData(form);
    const expData = Object.fromEntries(formData.entries());
    expData.amount = parseFloat(expData.amount) || 0;
    expData.splitWith = attendees.map(a => a.name);

    store.addExpense(trip.id, expData);
    closeModal();
    window.showToast?.('Expense logged!', 'success');

    const updatedTrip = store.getTrips().find(t => t.id === trip.id);
    const container = document.querySelector('#tab-content-container');
    if (container) renderExpenses(container, updatedTrip);
  });
}

function openAddAttendeeModal(trip) {
  const modalHTML = `
    <div class="modal-overlay active" id="add-attendee-modal">
      <div class="modal-container">
        <div class="modal-header">
          <h3><i data-lucide="user-plus" style="color: var(--accent-primary);"></i> Add Attendee / Collaborator</h3>
          <button class="btn btn-icon-only btn-secondary" id="close-modal-btn">&times;</button>
        </div>
        <div class="modal-body">
          <form id="add-attendee-form">
            <div class="form-group">
              <label class="form-label">Full Name</label>
              <input type="text" class="form-control" name="name" placeholder="e.g. Jordan Smith" required />
            </div>

            <div class="form-row">
              <div class="form-group">
                <label class="form-label">Role</label>
                <select class="form-control" name="role">
                  <option value="Co-planner">Co-planner</option>
                  <option value="Member">Member</option>
                  <option value="Viewer">Viewer</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label">Email</label>
                <input type="email" class="form-control" name="email" placeholder="jordan@example.com" />
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" id="cancel-modal-btn">Cancel</button>
          <button class="btn btn-primary" id="submit-attendee-btn">Add Attendee</button>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHTML);
  if (window.lucide) window.lucide.createIcons();

  const modalEl = document.getElementById('add-attendee-modal');
  const closeModal = () => modalEl.remove();

  modalEl.querySelector('#close-modal-btn').addEventListener('click', closeModal);
  modalEl.querySelector('#cancel-modal-btn').addEventListener('click', closeModal);

  modalEl.querySelector('#submit-attendee-btn').addEventListener('click', () => {
    const form = modalEl.querySelector('#add-attendee-form');
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const formData = new FormData(form);
    store.addAttendee(trip.id, Object.fromEntries(formData.entries()));
    closeModal();
    window.showToast?.('Attendee added!', 'success');

    const updatedTrip = store.getTrips().find(t => t.id === trip.id);
    const container = document.querySelector('#tab-content-container');
    if (container) renderExpenses(container, updatedTrip);
  });
}
