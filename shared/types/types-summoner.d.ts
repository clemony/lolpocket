declare global {
  export interface ChampionMastery {
    id: ChampionId
    level: number
    points: number
    lastPlayed: number
  }

  interface Summoner {
    name: string
    tag: string
    puuid: string
    profileIcon: string
    level: number
    region: string
    ranked?: {
      solo?: RankedEntry
      flex?: RankedEntry
    }
    matches?: {
      full: MatchData[]
      simplified: SimplifiedMatchData[]
      lastUpdate: Date
    }
    mastery?: {
      top: ChampionMastery[] // Top 10 list
      full?: ChampionMastery[] // Optional full, lazy loaded
      lastUpdate: Date
    }
  }

  interface RankedEntry {
    tier: string
    division: string
    lp: number
    wins: number
    losses: number
    queueType: string
  }

  interface SummonerResponse {
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

  interface ChampionMasteryResponse {
    puuid: string
    mastery: ChampionMastery[]
    full: boolean
  }

  interface SummonerIdentifier {
    puuid?: string
    region?: string
    name?: string
    tag?: string
  }
}
export {}
