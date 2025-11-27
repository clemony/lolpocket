export interface MapIndex {
  id: number
  name: string
  mapStringId: string
}
export interface Index {
  id: number
  key?: string
  name: string
}

export type ItemIndex = Index
export type ChampionIndex = Index
export type SpellIndex = Index
export type RuneIndex = Index

export interface MapData extends MapIndex {
  description: string
}

export interface Role {
  name: string
  icon: string
}

export interface Spell {
  id: number
  name: string
  cd?: number
  charges?: number
  description: string
  recharge?: number
  range?: number
  level?: number
}

export interface StatIndex {
  id: string
  name: string
  abbr?: string
  key?: string
  color?: string
  description: string
  group?: string
  icon?: string
  unit?: string
}

export interface StatValues extends StatIndex {
  current?: number
  values?: Record<string, number | string>
}
