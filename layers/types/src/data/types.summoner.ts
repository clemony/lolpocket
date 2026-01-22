export type AccountData = Account & Summoner

export interface Identifier {
  puuid?: string
  region?: string
  name?: string
  tag?: string
  icon?: string
}

export interface Identity {
  puuid: string
  slugKey: string
}

export interface Summoner {
  name: string
  puuid: string
  icon: string
  level: number
  ranked?: {
    solo?: RankedEntry
    flex?: RankedEntry
  }
  region: string
  tag: string
  lastDataUpdate: number
  lastMatchUpdate: number
  lastUpdate: number
}

export interface StatDetail {
  games: number
  win?: number
  winrate?: number
  pickrate?: number
}

export interface TimedStatDetail extends StatDetail {
  avgTimestamp?: number
}

export interface PairedChampionStat extends TimedStatDetail {
  synergy: number
  delta: number
  championName: string
  championId: number
}

export type PairedChampionStatGroup = Record<number, PairedChampionStat>

export interface StatAverage {
  total: number
  average: number
}

export interface ItemSetStat extends StatDetail {
  items: number[]
}

export type OrderedStatEntry = [string, StatDetail]
export type OrderedTimedStatEntry = [number, TimedStatDetail]
export type OrderedChampionEntry = [number, PairedChampionStat]

export type SkillKey = "Q" | "W" | "E" | "R"

export interface PlayerChampionMastery {
  puuid: string
  championId: number
  lastPlayed?: number
  level?: number
  totalPoints?: number
  pointsUntilLevel: number
  pointsSinceLevel: number
  lastAccessedAt?: number
}

export interface SummonerMastery {
  puuid: string
  masteryLevels: number
  masteryPoints: number
  updated: number
}

export interface RankedEntry {
  division: string
  losses: number
  name: string
  lp: number
  queue: string
  tier: string
  wins: number
}
