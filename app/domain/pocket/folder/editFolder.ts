export function editFolderIcon(folder: Folder | undefined, e: string) {
  if (!folder) return
  folder.iconKey = e ?? "folder"
}

export function updatePocketName(child: SortablePocket, label: string) {
  const store = pocketStore()
  store.updatePocketName(child.key, label)
}
