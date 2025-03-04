interface pocket {
  key: string
  name: string
  roles: string[]
  champions: {
    children: Champion[]
    default: Champion
  }
  items: {
    sets: ItemSet[]
    default: string
  }
  runes: {
    sets: RuneSet[]
    default: string
  }
  spells: Spell[]
  dateCreated: dateObject
  dateUpdated: dateObject
  tags: string[]
  location: {
    pinned: number
    folder: string
  }
  icon: string
  notes: string[]
  card: {
    splash: string
    align: string
    color: string
    filter: boolean
    font: {
      0: string
      1: string
    }
  }
  complete: {
    items: {
      0: ItemSet
      1: ItemSet
      2: ItemSet
    }
    runes: RuneSet
  }
}
interface pChampions {
  children: Champion[]
  default: Champion
  key: string
}
interface pItems {
  sets: ItemSet[]
  key: string

}
interface pRunes {
  sets: RuneSet[]
  key: string
}