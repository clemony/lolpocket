export interface ChampionMastery {
  id: number
  lastPlayed: number
  level: number
  points: number
}
export interface Summoner {
  name: string
  puuid: string
  level: number
  mastery?: {
    totalPoints: number
    totalLevels: number
    champions: ChampionMastery[]
    updated: number
  }
  profileIcon: string
  profileSplash: string
  ranked?: {
    solo?: RankedEntry
    flex?: RankedEntry
  }
  region: string
  tag: string
  updatedData: number
  updatedMatch: number
  updatedName: number
}
export interface RankedEntry {
  division: string
  losses: number
  lp: number
  queue: string
  tier: string
  wins: number
}

export interface TopChampion {
  name: string
  splash: string
}
