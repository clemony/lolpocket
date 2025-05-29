declare global {

  type RuneKey = string

  interface RuneIndex {
    name: string
    id: number
    key: string
    path: string
  }
  
  interface PathRunes {
    1: RuneId | null
    2: RuneId | null
    3: RuneId | null
  }

  interface RuneSet {
    keystone: RuneId
    0: PathSet
    1: PathSet
    shards: {
      1: ShardIndex
      2: ShardIndex
      3: ShardIndex
    }
  }

  interface PathSet {
    path: string | null
    runes: PathRunes
  }

  interface ShardIndex {
    slot: number
    name: string
  }

  interface Shard extends ShardIndex {
    slotName: string
    stats: string
    type: string
    icon: string
    color: string
    iconClass: string
  }

  interface Rune {
    id: number
    key: string
    name: string
    description: string
    details: string
    path: string
    runeIndex: number
  }

  interface Path {
    id: number
    key: string
    name: string
    slots: [Rune[]]
  }

}
export { }
