declare global {
  type ItemId = number
  type ItemName = string
  type ItemRecord = Record<ItemId, ItemLite>
  type StatLite = number
  type StatArray = StatLite[]
  type StatKeys = keyof ItemLite["stats"]
  type effectAmount = number

  interface ItemIndex {
    name: ItemName
    id: number
  }

  interface ItemLite extends ItemIndex {
    aka?: string[]
    rank?: string
    stats?: Record<string, number>
    purchasable?: boolean
    cost?: number
    tags?: string[]
    maps?: number[]
  }

  interface CalculatorSet {
    0: number
    1: number
    2: number
    3: number
    4: number
    5: number
  }

  interface ItemComponent {
    id: number
    name: ItemName
    gold?: number
  }

  interface Item {
    id: number
    name: ItemName
    rank?: string
    buildsFrom?: ItemComponent[]
    buildsInto?: ItemComponent[]
    specialRecipe?: string | number
    noEffects?: boolean
    removed?: boolean | string
    requiredChampion?: string
    requiedAlly?: string
    icon?: string
    simpleDescription?: string
    nicknames?: string[] | null
    passives?: Effect[]
    active?: Effect[]
    stats: Record<string, number>
    shop?: {
      prices: {
        total?: number
        combined?: number
        sell?: number
      }
      purchasable?: boolean
      tags?: string[]
    }
    maps?: number[]
  }

  interface ItemSet {
    name: string
    items: number[]
  }

  interface Effect {
    name?: string
    unique?: boolean
    effects?: string
    cooldown?: number | string
    recharge?: string
    charges?: string | number
    range?: number
  }

  interface ItemClone {
    id: number
    cloneId: string
  }
  interface ItemStat {
    id: string
    displayName?: string
    shortName?: string
    icon?: string
  }
}

export {}
