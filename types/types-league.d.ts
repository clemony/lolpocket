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

  interface summoner {
    name: string
    tag: string
    region: string
    level: number
    icon: string
    border: string
    peakRank: {
      peak: string
      season: string
    }
    ranks: {
      soloDuo: queue
      flex: queue
    }
    mostPlayed?: champPlayCount[]
    roles: {
      role: string
    }
  }

  interface role {
    percent: number
  }

  interface queue {
    rank: string
    tier: number
    games: number
    win: number
    loss: number
  }

  interface ChampPlayCount {
    name: string
    games: number
    win: number
    loss: number
    kda: string
  }

  interface PlayerHistoryData {
    patch: string
    match: string
    win: boolean
    champion: number
    items: number[]
  }
}
export { }
