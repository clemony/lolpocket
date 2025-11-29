import { patchIndex } from '#shared/indexes/patch-index'

export function currentPatch(): string{
  return patchIndex[0]
}