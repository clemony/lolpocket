import type { JwtPayload } from 'jwt-decode'

export type AccountRole = 'admin' | 'summoner' | 'default'
export type DockSide = 'top' | 'right' | 'bottom' | 'left' | 'floating'

export interface User {
  account: UserAccount
  summoner: Summoner
}

export interface UserAccount {
  name: string
  role: AccountRole
  uuid: string
  riot: {
    puuid: string
    name: string
    tag: string
    region: string
    profileIcon: string
  }
  pockets: UserPockets
  inbox: {
    messages: InboxMessage[]
    notifications: InboxItem[]
  }
}

export interface UserSettings {
  alertNewPocket: boolean
  alertDeletePocket: boolean
  motion: boolean
  noConfirmTrash: boolean
  showSolo: boolean
  showFlex: boolean
  showAllies: boolean
  theme: string
  dockX: number
  dockY: number
  dockSide: DockSide
}

export interface PublicData {
  splash: string
  title: string
  peerMessages: boolean
  updated: Date
}

export interface InboxItem {
  id: string
  date: Date
  template: string
  vars: Record<string, string>
  read?: boolean
}

export interface InboxMessage extends InboxItem {
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

export interface UserPockets {
  all: Pocket[]
  pinned: string[]
  archived: string[]
}

export interface Note {
  title: string
  content: string
  icon: string
  date: string
  heart?: boolean
}

export interface AuthRoleJwtPayload extends JwtPayload {
  app_metadata: {
    user_role: string
  }
}