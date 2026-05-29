import type { TableRow } from "@nuxt/ui"

export const rowRunes = (row: TableRow<Pocket>) =>
  row.getValue<RuneSet | undefined>("runes")

export const rowItems = (row: TableRow<Pocket>) =>
  row.getValue<ItemSet["items"]>("items")

export const rowSpells = (row: TableRow<Pocket>) =>
  row.getValue<Array<number | undefined>>("spells")

export const rowChampions = (row: TableRow<Pocket>) =>
  row.getValue<string[]>("champions")
