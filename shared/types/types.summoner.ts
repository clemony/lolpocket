export interface ChampionMastery {
  id: number
  lastPlayed: number
  level: number
  points: number
}
export interface Summoner {
  name: string
  puuid: string
  lastMatchUpdate: number
  lastNameCheck: number
  lastUpdate?: number
  level: number
  mastery?: {
    totalPoints: number
    totalLevels: number
    champions: ChampionMastery[]
    lastUpdate: number
  }
  profileIcon: string
  profileSplash: string
  ranked?: {
    solo?: RankedEntry
    flex?: RankedEntry
  }
  region: string
  tag: string
}

export interface RankedEntry {
  division: string
  losses: number
  lp: number
  queueType: string
  tier: string
  wins: number
}

export interface TopChampion {
  name: string
  splash: string
}
