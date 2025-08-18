export type PathName
  = | 'Precision'
    | 'Domination'
    | 'Sorcery'
    | 'Resolve'
    | 'Inspiration'
export type RuneKey = string
export type PathSlots = Rune[]
export type PathRecord = Record<PathName, PathSlots[]>

export interface PathIndex {
  name: PathName
  id: number
}

export interface RuneIndex {
  name: string
  id: number
  key: string
  path: string
}

export interface PathRunes {
  1: number | null
  2: number | null
  3: number | null
}

export interface RuneSet {
  keystone: number
  0: PathSet
  1: PathSet
  shards: {
    1: ShardIndex
    2: ShardIndex
    3: ShardIndex
  }
}

export interface PathSet {
  path: string | null
  runes: PathRunes
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

export interface Rune {
  id: number
  key: string
  name: string
  description: string
  details: string
  path: string
  runeIndex: number
}

export interface Path {
  id: number
  key: string
  name: string
  slots: PathSlots[]
}
