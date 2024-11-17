export interface navObject {
    title: string
    url?: string
    icon?: string
    array?: Array<any>
    isActive?: boolean
    items?: navObject[]
}

export interface navData {
    navCollapse: Array<navObject>
    navLinks: Array<navObject>
    pocketLinks: Array<navObject>
}

interface OpenTab {
    id: string
    name: string
    link: string
    title: any
    icon?: any
    pocketKey?: string
}

export interface modal {
    component?: any
    id?: string
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

export interface Champion {
    name: string
    img: string
    wiki: string
    title: string
    tags: string[]
    type: string
    abilities: {
        passive: Ability
        q: Ability
        w: Ability
        e: Ability
        r: Ability
    }
    items: Item[]
}

export interface Ability {
    key: string
    name: string
    context: string
    img: string
    data: Record<string, string>
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

export interface Item {
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

export interface RuneSet {
    key: string
    name: string
    primary: string
    keystone: Rune
    p1: Rune
    p2: Rune
    p3: Rune
    secondary: string
    s1: Rune
    s2: Rune
    shards: {
        shard1: Shard
        shard2: Shard
        shard3: Shard
    }
}

export interface Rune {
    name: string
    wiki: string
    tier: number
    type: string
    img: string
    stats: string
    path: string
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

export interface navItem {
    ref: any
    isVisible: boolean
    name: string
    type: string
    trigger: boolean
    data: Array<any>
}
