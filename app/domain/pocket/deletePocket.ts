export function deletePocket(pocket: Pocket | string) {
  const key = typeof pocket === "string" ? pocket : pocket.key
  if (!key) return

  if (!usePockets().trash.includes(key)) usePockets().trash.push(key)

  const pinnedIndex = usePockets().pinned.indexOf(key)
  if (pinnedIndex !== -1) usePockets().pinned.splice(pinnedIndex, 1)

  const archiveIndex = usePockets().archive.indexOf(key)
  if (archiveIndex !== -1) usePockets().archive.splice(archiveIndex, 1)
}
