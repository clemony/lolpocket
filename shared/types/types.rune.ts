export interface Rune {
  id: number
  name: string
  description: string
  path: PathName
  pathId: number
  tier: number
  tierLabel: string
  tierSlot: number
}

export type PathName
  = | 'Precision'
    | 'Domination'
    | 'Sorcery'
    | 'Resolve'
    | 'Inspiration'

export interface Path {
  id: number
  name: string
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
  id: number
  name: PathName
  color: string
  tooltip: string
}

export interface Shard {
  id: number
  name: string
  color: string
  description: string
}

export interface ShardRegistry {
  label: string
  shards: Shard[]
  tier: number
}
