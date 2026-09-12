# ✈️ WanderPulse — Modern Travel Planner & Group Expense App

**WanderPulse** is a visually stunning, feature-complete travel management web application built for individual adventurers and group travelers. Manage trip details, day-by-day itineraries, activity bucket lists, packing checklists, attendee rosters, and group expense splitting with automatic balance settlement.

---

## ✨ Features Overview

1. **Travel Projects & Dashboard**:
   - Create, edit, and manage multiple travel plans/projects.
   - Filter by status (Upcoming, Active, Completed, Drafts) and search destinations.
   - Countdown clocks, date range tracking, estimated total budget, and rich visual cover cards.

2. **Day-by-Day Itineraries & Logistics**:
   - Time-slotted daily timeline schedule with category badges (Sightseeing, Culture, Dining, Adventure, Transit).
   - Flight info, hotel check-in/check-out details, confirmation codes, and trip notes.

3. **Activities & Bucket Lists**:
   - Track planned and booked experiences, costs, duration, and ratings.

4. **Packing & Readiness Checklist**:
   - Smart categorized packing list with progress meter.
   - Pre-trip readiness tracker (Passport validity, visas, insurance, currency exchange).

5. **Attendees & Group Expense Splitter**:
   - Attendee manager with roles and avatars.
   - **Smart Expense Splitter**: Log shared group expenses, track who paid, calculate net balances, and generate optimal minimum-transaction settlement suggestions ("who owes whom").
   - Interactive expense category doughnut chart via Chart.js.

6. **Interactive Destination Map**:
   - Pinpoint destinations, hotel stays, and activity spots using Leaflet.js interactive maps.

7. **Dual-Storage Engine (Local-First + Free Supabase Database)**:
   - **Local Storage**: Works 100% out-of-the-box without needing logins or API setup.
   - **Supabase Cloud Sync**: Connect a free Supabase database to sync travel plans across devices.

---

## 🚀 How to Run Locally

Because WanderPulse is built with static web standards (HTML5, CSS3, ES Modules), no npm build step is required!

1. Double-click `index.html` to open it directly in any modern web browser.
2. Alternatively, use VS Code Live Server extension or any static web server:
   ```bash
   npx serve .
   ```

---

## 🐙 How to Push to GitHub

1. Open your terminal in this project folder (`Anti G Projects/Travel App`):
   ```bash
   git init
   git add .
   git commit -m "Initial commit of WanderPulse travel app"
   ```

2. Create a new repository on [GitHub.com](https://github.com/new).
3. Link and push your local repo to GitHub:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/wanderpulse-travel-app.git
   git branch -M main
   git push -u origin main
   ```

---

## ⚡ How to Deploy on Vercel (Free)

1. Log into your [Vercel Account](https://vercel.com).
2. Click **"Add New Project"** ➔ **"Import Repository"**.
3. Select your GitHub repository (`wanderpulse-travel-app`).
4. Keep all default settings (Framework Preset: **Other / Static**).
5. Click **"Deploy"**! Your travel app will be live on a global `.vercel.app` URL in seconds.

---

## 🗄️ Setting Up Free Supabase Cloud Database (Optional)

1. Create a free account on [Supabase.com](https://supabase.com).
2. Click **"New Project"** and select a database password & region.
3. In your Supabase Dashboard, go to **SQL Editor** ➔ Paste the contents of `supabase-schema.sql` ➔ Click **Run**.
4. Go to **Project Settings ➔ API**, copy your **Project URL** and **anon / public key**.
5. Open WanderPulse, click **"Cloud Sync Settings"** in the top hero banner, paste your URL & key, and check **"Enable Cloud Sync"**!
