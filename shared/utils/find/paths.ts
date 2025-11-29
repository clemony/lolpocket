import { pathIndex } from '#shared/indexes'

export const pathColorByName = (name: string) =>
  pathIndex.find(p => p.name === name)?.color

export const pathNameById = (id: number) =>
  pathIndex.find(p => p.id === id)?.name