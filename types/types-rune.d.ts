declare global {

  interface RuneSet {
    name: string
    key: string
    primary: {
      path: string
      runes: {
        0: RuneIndex
        1: RuneIndex
        2: RuneIndex
        3: RuneIndex
      }
    }
    secondary: {
      path: string
      runes: {
        1: RuneIndex
        2: RuneIndex
        3: RuneIndex
      }
    }
    shards: {
      0: ShardIndex
      1: ShardIndex
      2: ShardIndex
    }
  }

  interface ShardIndex {
    slotID: number
    slotName: string
  }

  interface Shard extends ShardIndex {
    name: string
    stats: string
    type: string
    icon: string
    color: string
  }

  interface Slot {
    runes: Rune[]
  }

  interface RuneIndex {
    id: number
    key: string
    name: string
  }

  interface Rune extends RuneIndex {
    icon: string
    shortDesc: string
    longDesc: string
  }

  interface Path {
    id: number
    key: string
    icon: string
    name: string
    slots: Slot[]
  }

}
export { }