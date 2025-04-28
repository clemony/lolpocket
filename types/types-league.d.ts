declare global {

  interface Role {
    name: string
    icon: string
  }

  interface Spell {
    name: string | null
    description: string | null
    cd: number | string | null
    recharge?: number | string | null
    charges?: number | string | null
  }

  interface SpellSet {
    0: Spell
    1: Spell
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
    matches?: MatchData[]
    simplifiedMatches?: SimplifiedMatchData[]
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
export { }
