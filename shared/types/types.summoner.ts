export interface ChampionMastery {
  id: number
  level: number
  points: number
  lastPlayed: number
}

export interface Summoner {
  name: string
  tag: string
  puuid: string
  profileIcon: string
  profileSplash: string
  level: number
  region: string
  ranked?: {
    solo?: RankedEntry
    flex?: RankedEntry
  }
  mastery?: {
    totalPoints: number
    totalLevels: number
    champions: ChampionMastery[]
    lastUpdate: Date
  }
  lastMatchUpdate: Date
  lastUpdate?: Date
}

export interface RankedEntry {
  tier: string
  division: string
  lp: number
  wins: number
  losses: number
  queueType: string
}

export interface SummonerResponse {
  name: string
  tag: string
  puuid: string
  profileIcon: string
  level: number
  region: string
  ranked: {
    solo?: RankedEntry
    flex?: RankedEntry
  }
}

export interface ChampionMasteryResponse {
  puuid: string
  mastery: ChampionMastery[]
  totalPoints: number
  totalLevels: number

}

export interface SummonerIdentifier {
  puuid?: string
  region?: string
  name?: string
  tag?: string
}

export interface TopChampion {
  name: string
  splash: string
}
