import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://dfqwvyhbbmoyiyzcuqfn.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRmcXd2eWhiYm1veWl5emN1cWZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI1MzAxMTQsImV4cCI6MjA3ODEwNjExNH0.UmwloPVHFM-k9K9Z1IYfjFkiOnIL7nWf7MO321H5slE'
export const supabase = createClient (supabaseUrl, supabaseKey)