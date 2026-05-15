export interface Index {
  id: number
  key?: string
  name: string
}

export interface MapIndex {
  id: number
  name: string
  mapStringId: string
}

export interface MapData extends MapIndex {
  description: string
}

export interface QueueIndex {
  description: string
  map: Partial<MapIndex>
  queueId: number
}

export interface ModeIndex {
  description?: string
  mapId: number | null
  mapName: string | null
  mapStringId: string | null
  modeKey: string
  modeLabel: string
  modeSlug: string
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
  level?: number
  modes?: string[]
  range?: number
  recharge?: number
}

export interface StatIndex {
  color?: string
  id: string
  key?: string
  name: string
  abbr?: string
  description: string
  group?: string
  icon?: string
  unit?: string
}

export interface StatValues extends StatIndex {
  current?: number
  values?: Record<string, number | string>
}
