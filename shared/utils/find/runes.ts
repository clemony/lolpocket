import { runeIndex } from '#shared/indexes'

export const runeById = (id: number) =>
  runeIndex.find(r => r.id === id)

export const runeNameById = (id: number) =>
  runeIndex.find(r => r.id === id)?.name