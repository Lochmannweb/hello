import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
    console.error('Supabase URL or ANON key is missing.');
    // Handle the error gracefully, e.g., throw an error or return early
    throw new Error('Supabase URL or ANON key is missing.');
  } else {
    console.log('Supabase initialized successfully.');
  }

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
