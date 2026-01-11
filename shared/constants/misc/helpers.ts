export const spellNameById = (id: number) => spellbook[id]?.name
import { mapIndex } from "#shared"
import { patchIndex } from "~~/shared/constants/patch-index"

export function currentPatch(): string {
  return patchIndex[0]
}

export const mapIdById = (id: number) =>
  mapIndex.find((m) => m.id === id)?.mapStringId

export const mapNameById = (id: number) =>
  mapIndex.find((m) => m.id === id)?.name
