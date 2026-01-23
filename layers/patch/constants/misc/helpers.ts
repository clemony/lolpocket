

export const spellNameById = (id: number) => spells[id]?.name

export function currentPatch(): string {
  return patchIndex[0]
}

export function mapIdById(id: number) {
  return mapIndex.find(m => m.id === id)?.mapStringId
}

export function mapNameById(id: number) {
  return mapIndex.find(m => m.id === id)?.name
}
