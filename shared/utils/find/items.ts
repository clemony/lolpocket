import { itemIndex } from '#shared/indexes'

export const itemById = (id: number) =>
  itemIndex.find(i => i.id === id)

export const itemIdByName = (name: string) =>
  itemIndex.find(i => i.name === name)?.id

export const itemNameById = (id: number) =>
  itemIndex.find(i => i.id === id)?.name