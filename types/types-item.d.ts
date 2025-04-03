declare global {
type stat = string | number

  type StatKeys = keyof Item['stats']

  /*   type Items = [Item] */

  interface Item {
    id?: number
    name?: string
    nickname?: string | string[] | null
    tier?: number
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
    stats?: {
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
    effects?: {
      pass?: effect
      pass2?: effect
      pass3?: effect

      act?: effect
    }
    recipe?: Item[]
    buy?: number | string | null
    req?: string | null
    removed?: boolean | string
    cloneId?: string
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
  interface Stat {
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
