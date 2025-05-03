declare global {
type StatLite = number
type StatArray = StatLite[]
  type StatKeys = keyof Item['stats']

  interface ItemLite {
    name: string
    id: number
    rank: string[]
    stats: StatLite[]
    purchasable: boolean
    cost: number
    tags: string[]
  }

  interface Item {
    id?: number
    name?: string
    nickname?: string | string[] | null
    rank?: string[]
    type?: string
    caption?: string
    champion?: string
    itemlimit?: string
    limit?: string
    modes?: {
      'classic sr 5v5'?: boolean
      'aram'?: boolean
      'nb'?: boolean
      'arena'?: boolean
    }
    menu?: {
      'fighter'?: boolean
      'marksman'?: boolean
      'assassin'?: boolean
      'mage'?: boolean
      'tank'?: boolean
      'support'?: boolean
      'attack damage'?: boolean
      'critical strike'?: boolean
      'attack speed'?: boolean
      'onhit effects'?: boolean
      'armor pen'?: boolean
      'ability power'?: boolean
      'mana and reg'?: boolean
      'magic pen'?: boolean
      'health and reg'?: boolean
      'armor'?: boolean
      'magic res'?: boolean
      'ability haste'?: boolean
      'movement'?: boolean
      'lifesteal vamp'?: boolean
    }
    stats?: StatArray[]
    effects?: {
      pass?: effect
      pass2?: effect
      pass3?: effect

      act?: effect
    }
    recipe?: Item[]
    into?: string[]
    from?: string[]
    buy?: number | string | null
    gold?: {
      base?: number
      purchasable: boolean
      total?: number
      sell?: number
    }
    tags?: string[]
    req?: string | null
    removed?: boolean | string
    icon?: string
  }

  interface ItemSet {
    name: string
    key: string
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

  interface effect {
    name?: string
    unique?: boolean
    description?: string
    cd?: number | string
    recharge?: string
    charges?: string | number
    range?: string
  }

  type effectAmount = number

  interface ItemClone extends Item {
    cloneId: string
  }
  interface ItemStat extends StatLite {
    id: string
    displayName?: string
    checked?: boolean
    shortName?: string
    icon?: string
    class?: string
    iconClass?: string
    hoverClass?: string
    bgClass?: string
  }

type CalculatorSet = Item[]

}

export { }
