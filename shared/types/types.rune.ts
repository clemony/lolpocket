export interface Rune {
  id: number
  name: string
  description: string
  path: PathName
  pathId: number
  tier: number
  tierLabel: string
}

export type PathName =
  | "Precision"
  | "Domination"
  | "Sorcery"
  | "Resolve"
  | "Inspiration"

export interface Path {
  id: number
  name: string
  icon?: string
  color?: string
  slots?: PathSlot[]
  tooltip: string
}

export interface RuneMin {
  id: number
  name: string
}

export interface PathSlot {
  label: string
  runes: Rune[] | RuneMin[]
  tier: number
}

export interface PathIndex {
  color: string
  id: number
  name: PathName
  tooltip: string
}

export interface Shard {
  color: string
  id: number
  name: string
  description: string
}

export interface ShardRegistry {
  label: string
  shards: Shard[]
  tier: number
}
