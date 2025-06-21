import type { Session } from '@supabase/supabase-js'

declare global {
  type AccountRole = 'admin' | 'summoner'
  interface UserAccount {
    name: string
    role: AccountRole
    id: string
    session: Session
    accessToken: string
    refreshToken: string
    riot: UserSummoner | null
    settings: UserSettings
  }

  interface UserSettings {
    motion: boolean
    hero: string | null
  }

  interface Note {
    title: string
    content: string
    icon: string
    date: string
    heart?: boolean
  }
}
export {}
