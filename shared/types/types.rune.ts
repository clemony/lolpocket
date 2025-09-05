export type PathName
  = | 'Precision'
    | 'Domination'
    | 'Sorcery'
    | 'Resolve'
    | 'Inspiration'

export interface RuneMin {
  id: number
  name: string
}

export interface RuneIndex extends RuneMin {
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

export interface PathSlot {
  tier: number
  label: string
  runes: RuneMin[]
}

export interface PathIndex {
  name: PathName
  id: number
}

export interface ShardIndex {
  slot: number
  name: string
}

export interface Shard extends ShardIndex {
  slotName: string
  stats: string
  exportType: string
  icon: string
  color: string
  iconClass: string
}
