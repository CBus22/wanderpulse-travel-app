-- ==========================================================================
-- WanderPulse Database Schema (Free Supabase / PostgreSQL Setup)
-- Paste this script into your Supabase SQL Editor to initialize cloud storage
-- ==========================================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. TRIPS TABLE
CREATE TABLE IF NOT EXISTS trips (
  id VARCHAR(64) PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  destination VARCHAR(255) NOT NULL,
  start_date DATE,
  end_date DATE,
  status VARCHAR(32) DEFAULT 'upcoming',
  cover_image TEXT,
  budget NUMERIC(10, 2) DEFAULT 0,
  currency VARCHAR(8) DEFAULT 'USD',
  lat NUMERIC(9, 6),
  lng NUMERIC(9, 6),
  logistics JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. ITINERARY ITEMS TABLE
CREATE TABLE IF NOT EXISTS itinerary_items (
  id VARCHAR(64) PRIMARY KEY,
  trip_id VARCHAR(64) REFERENCES trips(id) ON DELETE CASCADE,
  day INT NOT NULL,
  date DATE,
  time VARCHAR(16),
  title VARCHAR(255) NOT NULL,
  category VARCHAR(64),
  location VARCHAR(255),
  notes TEXT,
  lat NUMERIC(9, 6),
  lng NUMERIC(9, 6),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 3. ACTIVITIES TABLE
CREATE TABLE IF NOT EXISTS activities (
  id VARCHAR(64) PRIMARY KEY,
  trip_id VARCHAR(64) REFERENCES trips(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  category VARCHAR(64),
  status VARCHAR(32) DEFAULT 'Planned',
  cost NUMERIC(10, 2) DEFAULT 0,
  duration VARCHAR(64),
  rating NUMERIC(3, 1),
  notes TEXT,
  lat NUMERIC(9, 6),
  lng NUMERIC(9, 6),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 4. PACKING ITEMS TABLE
CREATE TABLE IF NOT EXISTS packing_items (
  id VARCHAR(64) PRIMARY KEY,
  trip_id VARCHAR(64) REFERENCES trips(id) ON DELETE CASCADE,
  category VARCHAR(64) DEFAULT 'Essentials',
  item VARCHAR(255) NOT NULL,
  packed BOOLEAN DEFAULT FALSE,
  assignee VARCHAR(128),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 5. ATTENDEES TABLE
CREATE TABLE IF NOT EXISTS attendees (
  id VARCHAR(64) PRIMARY KEY,
  trip_id VARCHAR(64) REFERENCES trips(id) ON DELETE CASCADE,
  name VARCHAR(128) NOT NULL,
  role VARCHAR(64) DEFAULT 'Member',
  avatar VARCHAR(16),
  email VARCHAR(255),
  rsvp VARCHAR(32) DEFAULT 'Confirmed',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 6. EXPENSES TABLE
CREATE TABLE IF NOT EXISTS expenses (
  id VARCHAR(64) PRIMARY KEY,
  trip_id VARCHAR(64) REFERENCES trips(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  amount NUMERIC(10, 2) NOT NULL,
  paid_by VARCHAR(128) NOT NULL,
  category VARCHAR(64),
  date DATE,
  split_with JSONB DEFAULT '[]'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Row Level Security (RLS) policies (Optional / Public read-write enabled for demo)
ALTER TABLE trips ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public select" ON trips FOR SELECT USING (true);
CREATE POLICY "Allow public insert" ON trips FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public update" ON trips FOR UPDATE USING (true);
CREATE POLICY "Allow public delete" ON trips FOR DELETE USING (true);
