export interface Pocket {
  key: string
  name: string
  roles: string[] | null
  champions: ChampionKey[] | null
  items: ItemSet[] | null
  runes: RuneSet[] | null
  spells: SpellSet[] | null
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
    filter: 'color' | 'grayscale' | null
    font: {
      0: string | null
      1: string | null
    }
  }
  complete: {
    items: ItemSet[] | null
    runes: RuneSet | null
  }
}
