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
  description: string
  pathId: number
  tier: number
  tierLabel: string
  tierSlot: number
}

export interface RunePath {
  id: number
  name: string
  slots: PathSlot[]
  tooltip: string
}

export interface RuneMin {
  id: number
  name: string
}

export interface PathSlot {
  label: string
  runes: RuneMin[]
  tier: number
}

export interface PathIndex {
  id: number
  name: PathName
  color: string
}

export interface Shard {
  id: number
  name: string
  color: string
  description: string
}

export interface ShardObject {
  label: string
  shards: Shard[]
  tier: number
}
