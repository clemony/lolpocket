declare type AccountRole = 'admin' | 'summoner' | 'default'

declare interface User {
  account: UserAccount
  summoner: Summoner
}

declare interface UserAccount {
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
  inbox: {
  messages: InboxMessage[]
  notifications: InboxItem[]
}
}

declare interface UserSettings {
  alertNewPocket: boolean
  alertDeletePocket: boolean
  motion: boolean
  noConfirmTrash: boolean
  showSolo: boolean
  showFlex: boolean
  showAllies: boolean
  theme: string
}

declare interface PublicData {
  splash: string
}

interface InboxItem {
  id: string
  date: Date
  template: string
  vars: Record<string, string>
  read?: boolean
}


declare interface InboxMessage extends InboxItem {
  title: string
  content: string
  from: {
    name: string
    id: string
    icon: string
  }
  to?: string
  trash?: boolean
  dateTrashed?: Date | null
}

declare interface UserPockets {
  all: Pocket[]
  pinned: string[]
  archived: string[]
}

declare interface Note {
  title: string
  content: string
  icon: string
  date: string
  heart?: boolean
}
