

export const itemById = (id: number) => itemIndex.find(i => i.id === id)

export function itemIdByName(name: string) {
  return itemIndex.find(i => i.name === name)?.id
}

export function itemNameById(id: number) {
  return itemIndex.find(i => i.id === id)?.name
}

export const itemColorByTier = (id: number) => itemRankColor?.[itemRank[id]]

export const supportItemIds = [3869, 3870, 3871, 3876, 3877]
