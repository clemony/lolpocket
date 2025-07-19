import type { Session } from "@supabase/supabase-js"

declare global {
  type AccountRole = "admin" | "summoner" | "default"

  interface User {
    account: UserAccount
    summoner: Summoner
  }

  interface UserAccount {
    name: string
    role: AccountRole
    id: string
    riot: {
      puuid: string
      name: string
      tag: string
    }
    settings: {
      general: Record<string, string | boolean>
      notifications: Record<string, string | boolean>
      profile: Record<string, string | boolean>
    }
    pockets: UserPockets
    inbox: UserInbox
  }

  interface UserInbox {
    messages: InboxItemMsg[]
    notifications: InboxItem[]
    newMessages: number
    newNotifications: number
  }

  interface InboxItem {
    template?: string
    vars?: Record<string, string>
    time: Date
    message?: string
  }

  interface UserPockets {
    all: Pocket[]
    pinned: string[]
    archived: string[]
  }

  interface CurrentSession {
    session: Session
    accessToken: string
    refreshToken: string
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
