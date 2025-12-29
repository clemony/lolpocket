import { patchIndex } from "~~/shared/constants/patch-index"

export function currentPatch(): string {
  return patchIndex[0]
}
