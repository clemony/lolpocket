declare global {
  type ItemId = number

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
  }

  interface ItemIndex {
    id: ItemId
    name: string
  }

  interface Item {
    id?: ItemId
    name?: string
    nickname?: string | string[] | null
    rank?: string[]
    active?: Effect
    passives?: Effect[]
    modes?: {
      'classic sr 5v5'?: boolean
      'aram'?: boolean
      'nb'?: boolean
      'arena'?: boolean
    }
    stats?: StatArray[]
    noEffects?: boolean
    buildsInto?: number[]
    buildsFrom?: number[]
    shop?: {
      prices: {
        total?: number
        combined?: number
        sell?: number
      }
      purchasable: boolean
      tags: string[]
    }
    simpleDescription?: string
    specialRecipe?: string | number
    removed?: boolean | string
    icon?: string
    requiredChampion?: string
    requiedAlly?: string
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

  interface ItemClone extends ItemId{
    id: ItemId
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

type CalculatorSet = ItemIndex[]

}

export { }
