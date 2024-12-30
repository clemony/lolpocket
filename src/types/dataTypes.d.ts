// rune

export interface Path {
    id: number
    key: string
    icon: string
    name: string
    slots: Slot[] // Slots are represented as an array
}

export interface Slot {
    runes: Rune[] // Each slot contains an array of runes
}

export interface Rune {
    id: number
    key: string
    icon: string
    name: string
    shortDesc: string
    longDesc: string
}

export interface Shard {
    mPerkId: number
    mPerkName: string
    mScript: {
        mSpellScriptData: {
            mEffectAmount: effectAmount[]
        }
    }
}
export type effectAmount = number
// champion

export type Champions = Champion[]

export interface Champion {
    version: string
    id: string
    key: string
    name: string
    title: string
    blurb: string
    info: {
        attack: number
        defense: number
        magic: number
        difficulty: number
    }
    image: {
        full: string
        sprite: string
        group: string
        x: number
        y: number
        w: number
        h: number
    }
    tags: string[]
    partype: string
    stats: {
        hp: number
        hpperlevel: number
        mp: number
        mpperlevel: number
        movespeed: number
        armor: number
        armorperlevel: number
        spellblock: number
        spellblockperlevel: number
        attackrange: number
        hpregen: number
        hpregenperlevel: number
        mpregen: number
        mpregenperlevel: number
        crit: number
        critperlevel: number
        attackdamage: number
        attackdamageperlevel: number
        attackspeedperlevel: number
        attackspeed: number
    }
}

// item

export interface Item {
    name: string
    description: string
    colloq: string
    plaintext: string
    into: {
        0: string
        1: string
        2: string
        3: string
        4: string
        5: string
        6: string
        7: string
        8: string
    }
    image: {
        full: string
        sprite: string
        group: string
        x: number
        y: number
        w: number
        h: number
    }
    inStore: boolean
    gold: {
        base: number
        purchasable: boolean
        total: number
        sell: number
    }
    tags: string[]
    maps: {
        11: boolean
        12: boolean
        21: boolean
        22: boolean
        30: boolean
        33: boolean
    }
    stats: stat[]
}

export type stat = string | number

export interface itemData {
    id: number
    nickname?: string[]
    tier?: number
    type?: string
    modes: {
        'classic sr 5v5'?: boolean
        aram?: boolean
        nb?: boolean
        arena?: boolean
    }
    menu?: {
        fighter?: boolean
        marksman?: boolean
        assassin?: boolean
        mage?: boolean
        tank?: boolean
        support?: boolean
        'attack damage'?: boolean
        'critical strike'?: boolean
        'attack speed'?: boolean
        'onhit effects'?: boolean
        'armor pen'?: boolean
        'ability power'?: boolean
        'mana and reg'?: boolean
        'magic pen'?: boolean
        'health and reg'?: boolean
        armor?: boolean
        'magic res'?: boolean
        'ability haste'?: boolean
        movement?: boolean
        'lifesteal vamp'?: boolean
    }
    stats: {
        ad?: number
        ah?: number
        ap?: number
        armor?: number
        armpen?: number
        as?: number
        cdr?: number
        cdrunique?: number
        crit?: number
        gp10?: number
        hp?: number
        hp5?: number
        hp5?: number
        hsp?: number
        hspunique?: number
        lethality?: number
        lethalityunique?: number
        lifesteal?: number
        mana?: number
        mp5?: number
        mp5?: number
        mpen?: number
        mpenflat?: number
        mr?: number
        ms?: number
        msflat?: number
        msunique?: number
        omnivamp?: number
        pvamp?: number
        spellvamp?: number
        spec?: number
        spec2?: number
    }
    effects: {
        pass?: effect
        pass2?: effect
        pass3?: effect

        act?: effect
    }
    recipe?: [Item[]]
    buy?: number
}

export interface effect {
    name?: string
    unique?: boolean
    description?: string
    cd?: number | string
    recharge?: string
    charges?: string | number
    range?: string
}
