import { count } from 'console'
import { type } from 'os'

export interface pocket {
    name: string
    type: string
    pinned: boolean
    key: string
    icon: string
    bgColor: string
    iconColor: string
    champions: pocketChampions[]
    items: pocketItems[]
    runes: pocketRunes[]
    notes: string
    dateCreated: dateObject[]
    dateUpdated: dateObject[]
    activeComponent: string
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
    shards: string[]
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
    img: string
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
