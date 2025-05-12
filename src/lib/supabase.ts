import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Please click the "Connect to Supabase" button to configure your Supabase connection');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Subject = {
  id: string;
  name_en: string;
  name_np: string;
  level: string;
  order: number;
  active: boolean;
  created_at: string;
  updated_at: string;
};