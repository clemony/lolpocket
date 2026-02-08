export type Extension<T, E> = T & E

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
}

export interface ParseState {
  i: number
  str: string
}

export type SortDirection = 'asc' | 'desc'

export type LocaleOptions =  'de' | 'en' | 'fr'