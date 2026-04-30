export function deletePocket(pocket: Pocket) {
  const key = typeof pocket === "string" ? pocket : pocket.key
  if (!key) return

  pocket.location = "trash"
  pocket.trashed_at = new Date().toISOString()

  const pinnedIndex = pocketStore().pinned.indexOf(key)
  if (pinnedIndex !== -1) pocketStore().pinned.splice(pinnedIndex, 1)

  const archiveIndex = pocketStore().archive.indexOf(key)
  if (archiveIndex !== -1) pocketStore().archive.splice(archiveIndex, 1)
}
