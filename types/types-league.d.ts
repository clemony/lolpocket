declare global {

  interface Role {
    name: string
    icon: string
  }

  interface Spell {
    name: string
    description: string
    cd: number | string
    recharge?: number | string
    charges?: number | string
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

  interface champPlayCount {
    name: string
    games: number
    win: number
    loss: number
    kda: string
  }

}
export { }
