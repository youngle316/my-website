'use client';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vytqzqdcprbakqskprqg.supabase.co';
const supabaseKey = process.env.SUPABASE_KEY as string;
export const supabase = createClient(supabaseUrl, supabaseKey);
