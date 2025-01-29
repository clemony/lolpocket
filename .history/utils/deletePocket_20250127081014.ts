export default function deletePocket(pocketKey: string) {
  const ps = usePocketStore()
  const pocket: pocket = getPocket(pocketKey)
  const index = .pockets.findIndex(set => set.key === pocketKey)

  if (index !== -1 && pocket) {
    if (pocket.pinned == true) {
      pocket.pinned = false
    }
    usePocketStore().trashFolder.push(pocket)
    usePocketStore().pockets.splice(index, 1)
  }
}
