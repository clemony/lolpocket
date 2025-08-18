export type ItemId = number
export type ItemName = string
export type ItemRecord = Record<ItemId, ItemLite>
export type StatLite = number
export type StatArray = StatLite[]
export type StatKeys = keyof ItemLite['stats']
export type effectAmount = number

export interface ItemIndex {
  name: ItemName
  id: number
}

export interface ItemLite extends ItemIndex {
  aka?: string[]
  rank?: string
  stats?: Record<string, number>
  purchasable?: boolean
  cost?: number
  tags?: string[]
  maps?: number[]
}

export interface CalculatorSet {
  0: number
  1: number
  2: number
  3: number
  4: number
  5: number
}

export interface ItemComponent {
  id: number
  name: ItemName
  gold?: number
}

export interface Item {
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

export interface ItemSet {
  name: string
  items: number[]
}

export interface Effect {
  name?: string
  unique?: boolean
  effects?: string
  cooldown?: number | string
  recharge?: string
  charges?: string | number
  range?: number
}

export interface ItemClone {
  id: number
  cloneId: string
}
export interface ItemStat {
  id: string
  displayName?: string
  shortName?: string
  icon?: string
}
