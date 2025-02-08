export default function deletePocket(pocketKey: string) {
  const ps = usePocketStore()
  const pocket: pocket = getPocket(pocketKey)
  const index = ps.pockets.findIndex(set => set.key === pocketKey)

  if (index !== -1 && pocket) {
    if (ps.pinnedFolder.includes(pocket)) {
      ps.pinnedFolder.splice(index, 1)
    }
    ps.trashFolder.push(pocket)
    pocket.folderKey = 'trash'
    ps.pockets.splice(index, 1)
  }
}
