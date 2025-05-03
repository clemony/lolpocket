import type { Session } from '@supabase/supabase-js'
import type { JwtPayload } from 'jwt-decode'
import type { RefOrElement } from 'vue-draggable-plus'

declare global {

  interface AuthRoleJwtPayload extends JwtPayload {
    app_metadata: {
      user_role: string
    }
  }

  interface OgResponse {
    title: string
    description: string
    image: string
    url: string
  }
  interface PatchNotesData extends OgResponse {
    patch: string
  }
  interface userAccount {
    name: string
    role: string
    id: string
    session: Session
    accessToken: string
    refreshToken: string
    puuid: string
    gameName: string
    tagLine: string
    profileIconId: number
    summonerLevel: number
    region: string
  }

  interface Filters {
    patch?: number | null
    queue?: number | null
    champion?: string | null
    ally?: string | null
    role?: string | null
  }

  interface ItemFilter {
    purchasable: boolean
    rank: string | null
    stats: string[] | null
    tags: string | null
    query: string | null
    result: any[] | null
  }

  interface Folder {
    name: string
    key: string
    type?: string
    description?: string
    buttonRef?: any
    link?: string
    items?: any[]
    icon?: string
    permanent?: boolean
    locked?: boolean
    iconSolid?: string
  }

  interface Tabs {
    currentValue: {
      pos: number
      width: number
    }
    returnValue: {
      pos: number
      width: number
    }
  }

  interface Note {
    title: string
    content: string
    icon: string
    date: string
    heart?: boolean
  }

  interface Category {
    id: string
    displayName?: string
    checked: boolean
    icon?: string
    color?: string
    champions?: Array<string>
  }

  type categories = Category[]

  interface Module {
    name?: string
    component?: DefineComponent
    ghost?: DefineComponent
    queue?: string
    title?: string
  }

  type ModuleSlot = Module | null

  type ModuleList = (Module | null)[]

  interface dateObject {
    patch: string
    date: string
    time: string
  }
}
export { }