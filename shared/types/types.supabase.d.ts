// types/supabase.d.ts
declare module '#supabase/server' {
  import type { Database } from '#types/database.types'
  import type { SupabaseClient } from '@supabase/supabase-js'

  export function serverSupabaseClient(
    event?: any
  ): SupabaseClient<Database>
}