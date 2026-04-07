export interface Summoner {
  color: string
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
