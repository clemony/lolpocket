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
      sets: ItemSet[]
      default: string
    }
    runes: {
      sets: RuneSet[]
      default: string
    }
    spells: {
      sets: SpellSet[] | null
      default: SpellSet[] | null
    }
    dateCreated: dateObject
    dateUpdated: dateObject
    tags: string[] | null
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

}
export { }
