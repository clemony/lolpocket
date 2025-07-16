declare global {
  interface MapIndex {
    id: number
    name: string
    mapStringId: string
  }

  interface MapData extends MapIndex {
    description: string
  }

  interface Role {
    name: string
    icon: string
  }

  interface Spell {
    name: string | null
    id: number
    description: string | null
    cd: number | string | null
    recharge?: number | string | null
    charges?: number | string | null
    text?: string
  }

  type SpellSet = [string, string]
}
export {}
