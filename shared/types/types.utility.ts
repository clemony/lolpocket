export type Extension<T, E> = T & E

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
}

export interface ParseState {
  i: number
  str: string
}

export type SortDirection = 'asc' | 'desc'

export interface ContactAddress {
  address: string
  class?: Record<string, string>
  external?: boolean
  icon?: string
  label: string
}
