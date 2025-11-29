import { mapIndex } from '#shared/indexes'

export const mapIdById = (id: number) =>
  mapIndex.find(m => m.id === id)?.mapStringId

export const mapNameById = (id: number) =>
  mapIndex.find(m => m.id === id)?.name