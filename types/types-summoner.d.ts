declare global {
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
  }

  interface RankedEntry {
    tier: string
    division: string
    lp: number
    wins: number
    losses: number
    queueType: string
  }

  interface ExtendedSummoner extends Summoner {
    matches: MatchData[]
    simplifiedMatches: SimplifiedMatchData[]
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
}
export {}
