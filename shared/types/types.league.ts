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
  name: string | null
  id: number
  description: string | null
  cd: number | string | null
  recharge?: number | string | null
  charges?: number | string | null
  text?: string
}

/* export type SpellSet = [string, string] */
