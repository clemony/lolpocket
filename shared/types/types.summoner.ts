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
  "vn2",
] as const

export type Region = (typeof regionKeys)[number]

export type AccountData = Account & Summoner

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

export interface Summoner {
  name: string
  puuid: string
  icon: string
  lastDataUpdate: number
  lastMatchUpdate: number
  lastUpdate: number
  level: number
  ranked?: {
    solo?: RankedEntry
    flex?: RankedEntry
  }
  region: Region
  tag: string
}

export interface RankedEntry {
  name: string
  division: string
  loss: number
  lp: number
  queue: string
  tier: string
  win: number
}

export type SkillKey = "Q" | "W" | "E" | "R"

export interface ChampionMastery {
  puuid: string
  championId: number
  lastAccessedAt?: number
  lastPlayed?: number
  level?: number
  pointsSinceLevel: number
  pointsUntilLevel: number
  totalPoints?: number
}

export interface SummonerMastery {
  puuid: string
  masteryLevels: number
  masteryPoints: number
  updated: number
}
