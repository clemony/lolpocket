export interface MatchFilter {
  patch?: number | null
  queue?: number | null
  champion?: string | null
  ally?: string | null
  role?: string | null
  ignoreRole?: boolean
}

export interface ChampionFilter {
  position?: string
  role?: string | null
  query: string | null
  result: any[] | null
}

export interface ItemFilter {
  purchasable: boolean
  rank: string | null
  stats: string[] | null
  tags: string | null
  map: number | null
  query: string | null
  result: any[] | null
}
