import { createClient } from '@supabase/supabase-js';

const supabaseUrl  = 'https://qwphxdvvybbzjdfnaqlf.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF3cGh4ZHZ2eWJiempkZm5hcWxmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczMDIzNTE2NywiZXhwIjoyMDQ1ODExMTY3fQ.4NJW_IUmw3BS-do4CCJ6Q69Mv3Yb1qEc5753RvbgVSw';
console.log(supabaseUrl, supabaseKey)
if (!supabaseUrl || !supabaseKey) {
    throw new Error("SUPABASE_URL e SUPABASE_KEY precisam estar definidas nas variáveis de ambiente.");
  }
export const supabase = createClient(supabaseUrl, supabaseKey);
