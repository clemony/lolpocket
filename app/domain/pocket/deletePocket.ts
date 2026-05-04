import { nowInstantString } from "#shared/utils"

export function deletePocket(pocket: Pocket) {
  const key = typeof pocket === "string" ? pocket : pocket.key
  if (!key) return

  pocket.location = "trash"
  pocket.trashed_at = nowInstantString()

  const pinnedIndex = pocketStore().pinned.indexOf(key)
  if (pinnedIndex !== -1) pocketStore().pinned.splice(pinnedIndex, 1)
}
