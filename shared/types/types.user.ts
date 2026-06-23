import type { AvatarProps, UserProps } from "@nuxt/ui"
import type { Inbox } from "."

export const regionKeys = [
  "br1",
  "eun1",
  "euw1",
  "jp1",
  "kr",
  "la1",
  "la2",
  "na1",
  "oc1",
  "ph2",
  "ru",
  "sg2",
  "th2",
  "tr1",
  "tw2",
  "vn2",
] as const

export type Region = (typeof regionKeys)[number]

export type AccountData = Account & Summoner

export type ProviderKey<K extends string = string> =
  | "email"
  | "google"
  | "discord"
  | "twitch"
  | "riot"

export type SbProviderKey<K extends string = string> =
  | "discord"
  | "google"
  | "twitch"

export interface ProviderIdentity {
  provider: string
  description: string
  avatar: string
  name: string
}

export interface ProviderType {
  label: ProviderKey
  class: string
  icon: string
  avatar?: string | ((icon: string) => string)
}

export interface ProviderProps {
  label: string
  connected?: boolean
  avatar?: {
    src?: string
    icon?: string
    size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl"
    alt?: string
  }
  icon?: string
  class?: string
  description?: string
  name?: string
}

export interface LocalSettings {
  sidebar_sort_folder_first: boolean
  sidebar_sort_method: "date" | "alpha"
  sidebar_sort_mode: "asc" | "desc"
  backpack_group_by: "folder" | "patch"
  confirm_folder_delete: boolean
  confirm_pocket_delete: boolean
}

export interface Identifier {
  name?: string
  puuid?: string
  icon?: string
  region?: string
  tag?: string
}

export type DisplayIdentifier = UserProps & {
  value: string
}

export interface Identity {
  puuid: string
  slugKey: string
}

export interface UserProfileResponse {
  settings?: Settings
  account?: Account
  inbox?: Inbox
  pockets?: Pocket[]
}
