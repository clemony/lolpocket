export function useUserFolders() {
  const as = useAccountStore()
  const ps = usePocketStore()

  const userFolders = computed<Folder[]>(() =>
    as.userFolders.map(folder => ({
      ...folder,
      items: ps.pockets.filter(pocket => pocket.folderKey === folder.key),
    })),
  )

  return { userFolders }
}

// const { userFolders } = useUserFolders()