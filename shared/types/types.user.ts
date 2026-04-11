import type { Account } from "."

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
  "vn2"
] as const

export type Region = (typeof regionKeys)[number]

export type AccountData = Account & Summoner

export type ProviderKey<K extends string> =
  | "email"
  | "google"
  | "discord"
  | "riot"
export type SbProviderKey<K extends string> = "discord" | "google"

export interface ProviderIdentity {
  provider: string
  description: string
  avatar: string
  name: string
}

export interface Identifier {
  name?: string
  puuid?: string
  icon?: string
  region?: string
  tag?: string
}

export interface Identity {
  puuid: string
  slugKey: string
}

export interface UserProfileResponse {
  settings: Settings | null
  account: Account | null
  pockets: Pocket[] | null
}
