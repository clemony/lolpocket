export interface pocket {
    key: string
    name: string
    champions: pocketChampions[]
    items: pocketItems[]
    runes: pocketRunes[]
    spells: {
        spell1: spell
        spell2: spell
        alt1: spell
        alt2: spell
    }
    dateCreated: dateObject[]
    dateUpdated: dateObject[]
    tags: Array<string>
    pinned: boolean
    icon: string
    bgColor: string
    iconColor: string
    notes: string
    component: any
}

export interface pocketChampions {
    key: string
    champions: Champion[]
    starred: string
}

export interface spell {
    name: string
    description: string
    cd: number
    recharge?: number
    charges?: number
}

export interface pocketItems {
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

export interface ItemSet {
    key: string
    name: string
    items: Item[]
}

export interface DefaultItem {
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

export interface pocketRunes {
    key: string
    runeSets: RuneSet[]
    starred: number
    selected: number
}

export interface RuneTree {
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
export interface RuneSet extends RuneTree {
    key: string
    name: string
}

export interface Shard {
    name: string
    stats: string
    slotID: number
    slotName: string
    type: string
    icon: string
    color: string
}

export interface summoner {
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

export interface role {
    percent: number
}

export interface queue {
    rank: string
    tier: number
    games: number
    win: number
    loss: number
}

export interface champPlayCount {
    name: string
    games: number
    win: number
    loss: number
    kda: string
}
