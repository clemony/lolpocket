declare global {
  type ItemId = number
  type ItemName = string
 interface ItemIndex  {
  name: ItemName
   id: ItemId
  }
  type ItemRecord = Record<ItemId, ItemLite>
  type StatLite = number
  type StatArray = StatLite[]
  type StatKeys = keyof ItemLite['stats']

  interface ItemLite {
    name: string
    id: ItemId
    rank: string[]
    stats: Record<string, number>
    purchasable: boolean
    cost: number
    tags: string[]
    maps: number[]
  }

  interface Item {
    name: string
    id: ItemId
    rank: string[]
    buildsFrom?: number[]
    buildsInto?: number[]
    specialRecipe?: string | number
    noEffects?: boolean
    removed?: boolean | string
    requiredChampion?: string
    requiedAlly?: string
    icon?: string
    simpleDescription?: string
    nicknames?: string[] | null
    passives?: Effect[]
    active?: Effect
    stats: Record<string, number>
    shop?: {
      prices: {
        total?: number
        combined?: number
        sell?: number
      }
      purchasable: boolean
      tags: string[]
    }
    maps: number[]
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
    range?: string
  }

  type effectAmount = number

  interface ItemClone extends ItemId {
    id: ItemId
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

export { }
