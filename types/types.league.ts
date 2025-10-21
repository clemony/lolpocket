export interface MapIndex {
  id: number
  name: string
  mapStringId: string
}

export interface MapData extends MapIndex {
  description: string
}

export interface Role {
  name: string
  icon: string
}

export interface Spell {
  id: number
  name: string | null
  cd: number | string | null
  charges?: number | string | null
  description: string | null
  recharge?: number | string | null
  text?: string
}

export interface StatIndex {
  id: string
  name: string
  abbr?: string
  color?: string
  current?: number
  description: string
  group?: string
  icon?: string
  longAbbr?: string
  order?: number
  type?: string[]
  values?: Record<string, number | string>
}
