// types/supabase.d.ts
import type { SupabaseClient } from '@supabase/supabase-js'
import type { Database } from './database.types'

declare module '#supabase/server' {

  export function serverSupabaseClient(event?: any): SupabaseClient<Database>
}
