export interface Summoner {
  name: string
  color: string
  puuid: string
  icon: string
  region: Region
  tag: string
  //
  lastDataUpdate: number
  lastMatchUpdate: number
  lastUpdate: number
  level: number
  ranked?: {
    solo?: RankedEntry
    flex?: RankedEntry
  }
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
