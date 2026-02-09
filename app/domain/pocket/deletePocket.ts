export function deletePocket(pocket: Pocket | string) {
  const key = typeof pocket === "string" ? pocket : pocket.key
  if (!key) return

  if (!ps().trash.includes(key)) ps().trash.push(key)

  const pinnedIndex = ps().pinned.indexOf(key)
  if (pinnedIndex !== -1) ps().pinned.splice(pinnedIndex, 1)

  const archiveIndex = ps().archive.indexOf(key)
  if (archiveIndex !== -1) ps().archive.splice(archiveIndex, 1)
}
