export type CallbackFunctionVariadicAnyReturn = (...args: any[]) => any
type CallbackFunctionVariadic = (...args: any[]) => void

export type navData = navGroup[]

export interface navGroup {
    name: string
    url?: string
    icon?: string
    array?: Array<any>
    isActive?: boolean
    open?: boolean
    items?: navItem[]
    submenu?: navGroup[]
}

export interface navItem {
    name: string
    url?: string
    icon?: string
    isActive?: boolean
    hash?: string
    ref?: any
    isVisible?: boolean
    type?: string
    trigger?: boolean
    data?: Array<any>
}

export type menu = menuGroup[]
export interface menuGroup {
    title?: string
    type?: string
    items: menuItem[]
}

export interface menuItem {
    title: string | ComputedRef<any>
    type?: string
    action?: any
    link?: string
    model?: any
    icon?: string
    iconTrue?: string
    shortcut?: string
    subMenu?: Array<menuItem>
}

export interface drawer {
    component?: any
    id?: string
    direction?: string
    title?: string
    description?: string
    submitText?: string
}

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

export interface DataObject {
    type: string
    tags?: string | string[] // `tags` can be either a string or an array of strings
    [key: string]: any
}

export interface dateObject {
    patch: string
    date: string
    time: string
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

export interface article {
    title: string
    source: string
    icon?: string
    source2?: string
    image: string
    link?: string
    linkTitle?: string
    color?: string
    date?: string
}
