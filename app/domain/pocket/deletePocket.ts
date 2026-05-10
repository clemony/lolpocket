import { nowInstantString } from "#shared/utils"

export function deletePocket(key: string) {
  console.log("🥸 - deletePocket - key:", key)
  if (!key) return
  const store = pocketStore()

  store.pockets = store.pockets.map((p) =>
    p.key === key
      ? { ...p, location: "trash", trashed_at: nowInstantString() }
      : p
  )
  console.log("🥸 - deletePocket - store.pockets:", store.pockets)

  const pinnedIndex = store.pinned.indexOf(key)
  if (pinnedIndex !== -1) store.pinned.splice(pinnedIndex, 1)
}
