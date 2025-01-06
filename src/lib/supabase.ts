import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://zsxuzlzfwovsbzzrpcbc.supabase.co'
const supabaseKey =
    '=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpzeHV6bHpmd292c2J6enJwY2JjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUyNDg3MDcsImV4cCI6MjA1MDgyNDcwN30.JhLNIN3WK6_0T_SRVunioNNGyiJ1BpwSjGXS7WaVszU'

export const supabase = createClient(supabaseUrl, supabaseKey)
