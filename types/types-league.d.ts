declare global {

  interface RiotAccount {
    puuid: string
    gameName: string
    tagLine: string
    profileIconId: string
    summonerLevel: number
    region: string
  }

  interface pocket {
    key: string
    name: string
    roles: Role[]
    champions: {
      children: Champion[]
      default: Champion
    }
    items: {
      sets: ItemSet[]
      default: Itemset
    }
    runes: {
      sets: RuneSet[]
      default: RuneSet
    }
    spells: Spell[]
    dateCreated: dateObject
    dateUpdated: dateObject
    tags: string[]
    icon: string
    notes: string[]
  }

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

  interface ItemSet {
    name: string
    items: Item[]
  }

  interface DefaultItem {
    name: string
    img: string
    buy: number
    sell: number
    stats: string
    passive: string
    active: string
    type: string
    cat: string
    wiki: string
    id: number
    count: number
  }

  interface RuneTree {
    primary: {
      path: string
      keystone: Rune
      runes: {
        1: Rune
        2: Rune
        3: Rune
      }
    }
    secondary: {
      path: string
      runes: {
        1: Rune
        2: Rune
      }
    }
    shards: {
      0: Shard
      1: Shard
      2: Shard
    }
  }
  interface RuneSet extends RuneTree {
    name: string
  }

  interface Shard {
    name: string
    stats: string
    slotID: number
    slotName: string
    type: string
    icon: string
    color: string
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
    mostPlayed?: [champPlayCount]
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
