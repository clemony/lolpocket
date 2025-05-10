declare global {

  interface Pocket {
    key: string
    name: string
    roles: string[] | null
    champions: {
      children: ChampioIndexn[] | null
      default: ChampionIndex | null
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
    icon: string | null
    notes?: string[] | null
    card: {
      splash: string | null
      align: string | null
      color: string | null
      filter: boolean | null
      font: {
        0: string | null
        1: string | null
      }
    }
    complete: {
      items: {
        0: ItemSet | null
        1: ItemSet | null
        2: ItemSet | null
      }
      runes: RuneSet | null
    }
  }

}
export { }
