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
  region: string
  tag: string
}

export interface StatDetail {
  games: number
  pickrate?: number
  win?: number
  winrate?: number
}

export interface TimedStatDetail extends StatDetail {
  avgTimestamp?: number
}

export interface PairedChampionStat extends TimedStatDetail {
  championId: number
  championName: string
  delta: number
  synergy: number
}

export type PairedChampionStatGroup = Record<number, PairedChampionStat>

export interface StatAverage {
  average: number
  total: number
}

export interface ItemSetStat extends StatDetail {
  items: number[]
}

export type OrderedStatEntry = [string, StatDetail]
export type OrderedTimedStatEntry = [number, TimedStatDetail]
export type OrderedChampionEntry = [number, PairedChampionStat]

export type SkillKey = 'Q' | 'W' | 'E' | 'R'

export interface PlayerChampionMastery {
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

export interface RankedEntry {
  name: string
  division: string
  losses: number
  lp: number
  queue: string
  tier: string
  wins: number
}
