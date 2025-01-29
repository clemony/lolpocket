declare global {
  interface pocket {
    key: string
    name: string
    champions: pocketChampions[]
    roles: Role[]
    items: pocketItems[]
    runes: pocketRunes[]
    spells: [Spell, Spell]
    dateCreated: dateObject[]
    dateUpdated: dateObject[]
    tags: Array<string>
    pinned: boolean
    icon: string
    bgColor: string
    iconColor: string
    notes: string
    component: any
    inFolder: [Folder.name]
  }

  interface Role {
    name: string
    icon: string
  }

  interface pocketChampions {
    key: string
    champions: Champion[]
    starred: string
  }

  interface Spell {
    name: string
    description: string
    cd: number
    recharge?: number
    charges?: number
  }

  interface pocketItems {
    key: string
    itemSets: ItemSet[]
    starred: number
    alts: {
      alt1: DefaultItem[]
      alt2: DefaultItem[]
      alt3: DefaultItem[]
      alt4: DefaultItem[]
      alt5: DefaultItem[]
      alt6: DefaultItem[]
    }
    start: ItemSet[]
    core: ItemSet[]
    final: ItemSet[]
  }

  interface ItemSet {
    key: string
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

  interface pocketRunes {
    key: string
    runeSets: RuneSet[]
    starred: number
    selected: number
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
    key: string
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
export {}
