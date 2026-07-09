export function deleteFolder(
  folderId?: string | undefined,
  folderRef?: Folder
) {
  if (!folderId && !folderRef) return
  const folder = folderId ? user().getFolder(folderId) : folderRef
  if (!folder) return
  const numTrashed = ref(0)
  const prepareTrash = pocketStore().pockets.filter(
    (p) => p.location === folder.id
  )

  if (prepareTrash.length) {
    numTrashed.value = prepareTrash.length
    prepareTrash.map((p) => ({ ...p, location: "trash" }))
  }
  const index = user().settings?.folders.findIndex((f) => f.id === folder.id)
  if (index !== undefined) {
    user().settings?.folders.splice(index, 1)
  }

  const toast = useToast()
  toast.add({
    title: `"${folder.label}" deleted!`,
    description: numTrashed.value
      ? `${numTrashed.value} pockets were moved to the trash.`
      : "There was nothing in it...",
    orientation: "horizontal",
    icon: "i-check",
  })
}

export async function deleteFolderWithConfirm(folderId: string | undefined) {
  if (!folderId) return
  const folder = user().getFolder(folderId)
  if (!folder) return
  const confirm = useConfirmModal()
  const confirmed = await confirm({
    title: `Delete "${folder.label}"?`,
    description: `Are you sure you want to delete "${folder.label}"? All pockets in "${folder.label}" will be moved to the Trash and "${folder.label}" will be gone forever.`,
  })

  if (confirmed.confirmed) {
    if (confirmed.neverAgain)
      localStore().localSettings.confirm_folder_delete = false
    console.log(`Folder "${folder.label}" deleted`)
    deleteFolder(folder.id)
  }
}
