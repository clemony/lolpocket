export default function deletePocket(pocketKey: string) {
  const pocket: pocket = getPocket(pocketKey)
  const index = usePocketStore().pockets.findIndex(set => set.key === pocketKey)

  if (index !== -1 && pocket) {
    if (pocket.pinned == true) {
      pocket.pinned = false
    }
    usePocketStore().trashPockets.push(pocket)
    usePocketStore().pockets.splice(index, 1)
  }
}
