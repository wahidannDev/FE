import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://xhrsswtxvyaxqzotislh.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhocnNzd3R4dnlheHF6b3Rpc2xoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ2Njk4MzIsImV4cCI6MjA2MDI0NTgzMn0.xYJVGGquX7sUOdfpgGH-hRbVGfkfCjB2-cCpO1bGH5s')
export default supabase;