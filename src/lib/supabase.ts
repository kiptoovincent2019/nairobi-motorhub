import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type BookingPayload = {
  full_name: string;
  phone_number: string;
  vehicle_make: string;
  vehicle_model: string;
  vehicle_registration: string;
  service_required: string;
  preferred_date: string;
  description?: string;
};

export type ContactPayload = {
  full_name: string;
  phone_number: string;
  email?: string;
  subject: string;
  message: string;
};

export async function submitBooking(payload: BookingPayload) {
  const { error } = await supabase
    .from('bookings')
    .insert(payload);

  if (error) throw error;
}

export async function submitContactMessage(payload: ContactPayload) {
  const { error } = await supabase
    .from('contact_messages')
    .insert(payload);

  if (error) throw error;
}