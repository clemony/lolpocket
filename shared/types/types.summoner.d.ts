declare global {
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

export type SkillKey = 'Q' | 'W' | 'E' | 'R'


export interface RankedEntry {
  name: string
  division: string
  losses: number
  lp: number
  queue: string
  tier: string
  wins: number
}

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
}

