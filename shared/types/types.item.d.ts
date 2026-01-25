declare global {
export type ItemRecord = Record<number, ItemLite>
export type StatArray = number[]
export type StatKeys = keyof ItemLite['stats']

export interface ItemGold {
  base?: number
  purchasable?: boolean
  sell?: number
  total?: number
}

export interface ItemLite extends ItemIndex {
  aka?: string[]
  cost?: number
  gold?: ItemGold
  maps?: number[]
  rank?: string
  recipe?: number[]
  stats?: Record<string, number>
  tags?: string[]
}

export type CalculatorSet = [ number , number , number , number , number , number]


export interface ItemComponent {
  id: number
  name: string
  gold?: number
}

export interface Item {
  id: number
  name: string
  nicknames?: string[] | null
  active?: Effect[]
  buildsFrom?: ItemComponent[]
  buildsInto?: ItemComponent[]
  gold?: ItemGold
  icon?: string
  maps?: number[]
  noEffects?: boolean
  passives?: Effect[]
  rank?: string
  removed?: boolean | string
  requiedAlly?: string
  requiredChampion?: string

  description?: string
  specialRecipe?: string | number
  stats?: Record<string, number>
  tags?: string[]
}

export interface Effect {
  name?: string
  charges?: string | number
  cooldown?: number | string
  effects?: string
  mythic?: boolean
  range?: number
  recharge?: string
  unique?: boolean
}

export interface ItemClone {
  id: number
  cloneId: string
}
export interface ItemStat {
  id: string
  name?: string
  abbr?: string
  icon?: string
}
}

