declare global {

  interface pocket {
    key: string
    name: string
    roles: string[] | null
    champions: {
      children: Champion[] | null
      default: Champion | null
    }
    items: {
      sets: ItemSet[] | null
      default: ItemSet | null
    }
    runes: {
      sets: RuneSet[] | null
      default: RuneSet | null
    }
    spells: {
      sets: SpellSet[] | null
      default: SpellSet | null
    }
    dateCreated: dateObject
    dateUpdated: dateObject
    tags: string[] | null
    location: {
      pinned: boolean
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

}
export { }
