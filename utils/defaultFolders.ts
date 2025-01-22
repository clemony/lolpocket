import { usePocketStore } from 'stores/pocketStore'

export function defaultFolders() {
  const ps = usePocketStore()
  const defaultFolders: Array<Folder> = [
    {
      name: 'All',
      key: 'all-pockets',
      type: 'pocket',
      items: ps.allPockets,
      permanent: true,
      icon: 'teenyicons:folders-outline',
    },
    {
      name: 'Pinned',
      key: 'pinned-pockets',
      type: 'pocket',
      items: ps.pinnedPockets,
      permanent: true,
      icon: 'teenyicons:attach-outline',
    },
    {
      name: 'Trash',
      key: 'all-pockets',
      type: 'pocket',
      items: ps.trashPockets,
      permanent: true,
      icon: 'teenyicons:folders-outline',
    },
    {
      name: 'Archive',
      key: 'all-pockets',
      type: 'pocket',
      items: ps.archivePockets,
      permanent: true,
      icon: 'teenyicons:folders-outline',
    },
  ]
  return defaultFolders
}
