declare global {
  type ItemId = number
  type ItemName = string
  interface ItemIndex {
    name: ItemName
    id: number
  }
  type ItemRecord = Record<ItemId, ItemLite>
  type StatLite = number
  type StatArray = StatLite[]
  type StatKeys = keyof ItemLite["stats"]

  interface ItemLite {
    id: number
    name: ItemName
    rank: string[]
    stats: Record<string, number>
    purchasable: boolean
    cost: number
    tags: string[]
    maps: number[]
  }

  interface ItemComponent {
    id: number
    name: ItemName
    gold?: number
  }

  interface Item {
    id: number
    name: ItemName
    rank?: string[]
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
    items: ItemId[]
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

  type effectAmount = number

  interface ItemClone extends ItemId {
    id: number
    cloneId: string
  }
  interface ItemStat extends StatLite {
    id: string
    displayName?: string
    shortName?: string
    icon?: string
  }

  type CalculatorSet = ItemIndex[]
}

export {}
