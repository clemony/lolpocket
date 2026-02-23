import type { Locale } from "@nuxt/ui"

export type Extension<T, E> = T & E

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
}

export interface ParseState {
  i: number
  str: string
}

export type SortDirection = "asc" | "desc"

export type LocaleCode = "en" | "zh_tw" | "de" | "fr" | "es"
export interface LocaleType extends Locale<any> {
  icon: string
}

export interface Label {
  name?: string
  color?: string
  value?: string | number
}
