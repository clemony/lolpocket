import type { StatRecord } from "~~/shared/constants/items/collection/itemStatRecord"

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
  requiredAlly?: string
  description?: string
  specialRecipe?: string | number
  stats: Record<string, number>
  tags?: string[]
  arena?: ArenaItem
  masterwork?: boolean | MasterworkStats
}

export type ArenaItem = Omit<Item, "arena" | "maps" | "name" | "tags">

export interface MasterworkStats {
  upgradeId: number
  stats?: Record<string, number>
  bonusStats?: Record<string, number>
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

export interface ItemComponent {
  id: number
  name: string
  gold?: number
}

export interface ItemGold {
  base?: number
  purchasable?: boolean
  sell?: number
  total?: number
}

export type ItemRecord = Record<number, ItemLite>
export type StatArray = number[]
export type StatKeys = keyof ItemLite["stats"]

export interface ItemLite {
  id: number
  key: string
  name: string
  aka?: string[]
  cost?: number
  gold?: ItemGold
  maps?: number[]
  rank?: string
  recipe?: number[]
  stats?: Record<string, number>
  tags?: string[]
  arena?: ArenaItem
}

export type CalculatorSet = [number, number, number, number, number, number]

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
