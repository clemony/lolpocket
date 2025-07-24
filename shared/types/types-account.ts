declare global {
  type AccountRole = 'admin' | 'summoner' | 'default'

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
      region: string
    }
    pockets: UserPockets
    inbox: UserInbox
  }

  interface UserSettings {
    alertNewPocket: boolean
    alertDeletePocket: boolean
    motion: boolean
    noConfirmTrash: boolean
    showSolo: boolean
    showFlex: boolean
    showAllies: boolean
    theme: string
  }

  interface PublicData {
    splash: string
  }
  interface UserInbox {
    messages: InboxItem[]
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

  interface Note {
    title: string
    content: string
    icon: string
    date: string
    heart?: boolean
  }
}
export {}
