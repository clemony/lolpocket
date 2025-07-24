// ./helpers/fetchProfileSplash.ts
import { useSupabaseClient } from '#imports'
import type { PostgrestSingleResponse } from '@supabase/supabase-js'

interface ProfileSplash {
  user_id: string
  splash_url: string
  updated_at?: string
}

export async function fetchProfileSplash(userId: string): Promise<ProfileSplash | null> {
  const client = useSupabaseClient()

  const { data, error }: PostgrestSingleResponse<ProfileSplash> = await client
    .from('profile_splash')
    .select('*')
    .eq('user_id', userId)
    .single()

  if (error) {
    console.warn('⚠️ fetchProfileSplash error:', error.message)
    return null
  }

  return data || null
}
