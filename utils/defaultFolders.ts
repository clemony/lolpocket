import { usePocketStore } from 'stores/pocketStore'

export function defaultFolders() {
  const ps = usePocketStore()
  const defaultFolders: Array<Folder> = [
    {
      name: 'Pinned',
      key: 'pinned-pockets',
       link: '/pocket/Pockets-pinned',
       description:"All your favorite pockets in one place.",
      type: 'pocket',
      items: ps.pinnedFolder,
      permanent: true,
      icon: 'teenyicons:attach-outline',
    },
    {
      name: 'All',
      key: 'all-pockets',
           link: '/pocket/Pockets',
               description:"View all of your pockets in table format.",
      type: 'pocket',
      items: ps.allPockets,
      permanent: true,
      icon: 'teenyicons:folders-outline',
    },
    {
      name: 'Trash',
           link: '/pocket/Trash',
      key: 'all-pockets',
      type: 'pocket',
          description:"The ideas that didn't pan out exactly as planned.",
      items: ps.trashFolder,
      permanent: true,
      icon: 'teenyicons:bin-outline',
    },
    {
      name: 'Archive',
      link: '/pocket/Archive',
      key: 'all-pockets',
          description:"Creations from previous patches.",
      type: 'pocket',
      items: ps.archiveFolder,
      permanent: true,
      icon: 'teenyicons:archive-outline',
    },
  ]
  return defaultFolders
}
