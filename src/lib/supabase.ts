import { createClient } from '@supabase/supabase-js';
import 'dotenv/config';

const supabaseUrl  = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
console.log(supabaseUrl, supabaseKey)
if (!supabaseUrl || !supabaseKey) {
    throw new Error("SUPABASE_URL e SUPABASE_KEY precisam estar definidas nas variáveis de ambiente.");
  }
export const supabase = createClient(supabaseUrl, supabaseKey);
