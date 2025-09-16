export type PathName
  = | 'Precision'
    | 'Domination'
    | 'Sorcery'
    | 'Resolve'
    | 'Inspiration'

export interface RuneIndex {
  id: number
  name: string
  path: PathName
}

export interface Rune extends RuneIndex {
  pathId: number
  description: string
  tier: number
  tierLabel: string
  tierSlot: number
}

export interface RunePath {
  id: number
  name: string
  tooltip: string
  slots: PathSlot[]
}

export interface RuneMin {
  id: number
  name: string
}

export interface PathSlot {
  tier: number
  label: string
  runes: RuneMin[]
}

export interface PathIndex {
  name: PathName
  id: number
  color: string
}

export interface Shard {
  name: string
  id: number
  description: string
  color: string
}

export interface ShardObject {
  tier: number
  label: string
  shards: Shard[]
}
