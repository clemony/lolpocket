declare global {
  interface MapIndex {
    id: number
    name: string
    mapStringId: string
  }

  interface MapData extends MapIndex {
    description: string
  }

  interface Role {
    name: string
    icon: string
  }

  interface Spell {
    name: string | null
    id: number
    description: string | null
    cd: number | string | null
    recharge?: number | string | null
    charges?: number | string | null
    text?: string
  }

  type SpellSet = [string, string]

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
}
export {}
