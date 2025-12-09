import { itemIndex } from "#shared/indexes"
import { itemRankColor } from "@references"

export const itemById = (id: number) => itemIndex.find((i) => i.id === id)

export const itemIdByName = (name: string) =>
  itemIndex.find((i) => i.name === name)?.id

export const itemNameById = (id: number) =>
  itemIndex.find((i) => i.id === id)?.name

export const itemColorByTier = (id: number) => itemRankColor?.[itemRank[id]]
