export type SummonerInject = ReturnType<typeof useSummonerProvider>

export interface ChampionMastery {
  id: number
  lastPlayed: number
  level: number
  points: number
}

export interface SummonerMastery {
  puuid: string
  champions: ChampionMastery[]
  totalLevels: number
  totalPoints: number
  updated: number
}

export interface Summoner {
  name: string
  puuid: string
  level: number
  icon: string
  ranked?: {
    solo?: RankedEntry
    flex?: RankedEntry
  }
  region: string
  tag: string
  updatedData: number
  updatedMatch: number
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
