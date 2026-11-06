/*
# Create bookings and contact_messages tables

1. New Tables
- `bookings` — service appointment requests submitted from the website booking form.
  - id (uuid, PK)
  - full_name (text, not null) — customer's full name
  - phone_number (text, not null) — customer phone
  - vehicle_make (text, not null) — e.g. Toyota
  - vehicle_model (text, not null) — e.g. Land Cruiser Prado
  - vehicle_registration (text, not null) — number plate
  - service_required (text, not null) — selected service
  - preferred_date (date, not null) — requested appointment date
  - description (text, nullable) — additional notes
  - status (text, default 'pending') — workflow status
  - created_at (timestamptz, default now())
- `contact_messages` — general enquiries submitted from the contact form.
  - id (uuid, PK)
  - full_name (text, not null)
  - phone_number (text, not null)
  - email (text, nullable, optional)
  - subject (text, not null)
  - message (text, not null)
  - status (text, default 'new')
  - created_at (timestamptz, default now())

2. Security
- Enable RLS on both tables.
- Grant INSERT only (no SELECT/UPDATE/DELETE) to anon + authenticated so visitors can submit but cannot read or modify submissions. This protects customer data while allowing public form submissions.
- INSERT policies allow any visitor (anon/authenticated) to insert, since submissions come from the public site with no sign-in.
- No SELECT/UPDATE/DELETE policies — submissions are managed by the business owner via the Supabase dashboard.
*/

CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  phone_number text NOT NULL,
  vehicle_make text NOT NULL,
  vehicle_model text NOT NULL,
  vehicle_registration text NOT NULL,
  service_required text NOT NULL,
  preferred_date date NOT NULL,
  description text,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

GRANT INSERT ON bookings TO anon, authenticated;

DROP POLICY IF EXISTS "public_insert_bookings" ON bookings;
CREATE POLICY "public_insert_bookings"
ON bookings FOR INSERT
TO anon, authenticated
WITH CHECK (true);

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  phone_number text NOT NULL,
  email text,
  subject text NOT NULL,
  message text NOT NULL,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

GRANT INSERT ON contact_messages TO anon, authenticated;

DROP POLICY IF EXISTS "public_insert_contact_messages" ON contact_messages;
CREATE POLICY "public_insert_contact_messages"
ON contact_messages FOR INSERT
TO anon, authenticated
WITH CHECK (true);