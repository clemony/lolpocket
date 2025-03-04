declare global {

  interface RuneSet {
    name: string
    key: string
    primary: {
      path: string
      runes: {
        0: Rune
        1: Rune
        2: Rune
        3: Rune
      }
    }
    secondary: {
      path: string
      runes: {
        1: Rune
        2: Rune
        3: Rune
      }
    }
    shards: {
      0: Shard
      1: Shard
      2: Shard
    }
  }

  interface Shard {
    name: string
    stats: string
    slotID: number
    slotName: string
    type: string
    icon: string
    color: string
  }

  interface Slot {
    runes: Rune[]
  }

  interface Rune {
    id: number
    key: string
    icon: string
    name: string
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