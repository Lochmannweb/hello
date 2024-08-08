// lib/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
    console.error('Supabase URL or ANON key is missing.');
    // Handle the error gracefully
    throw new Error('Supabase URL or ANON key is missing.');
}

// Only create the client if the environment variables are present
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
