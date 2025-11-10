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
  key: string | number
  name: string
  cd: number | string
  charges?: number | string | null
  description: string | null
  recharge?: number | string | null
  text?: string
}

export interface StatIndex {
  id: string
  name: string
  abbr?: string[]
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