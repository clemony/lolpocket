const allButton = ref(null)
const pinnedButton = ref(null)
const archiveButton = ref(null)
const trashButton = ref(null)

export const defaultFolders: Array<Folder> = [
  {
    name: 'Pinned',
    key: 'pinned',
    link: '/pockets/pinned',
    buttonRef: pinnedButton,
    description: 'All your favorite pockets in one place.',
    type: 'pocket',
    permanent: true,
    icon: 'teenyicons:attach-outline',
  },
  {
    name: 'All',
    key: 'all',
    link: '/pockets',
    buttonRef: allButton,
    description: 'View all of your pockets in table format.',
    type: 'pocket',
    permanent: true,
    icon: 'teenyicons:folders-outline',
  },
  {
    name: 'Trash',
    link: '/pockets/trash',
    key: 'trash',
    buttonRef: trashButton,
    type: 'pocket',
    description: 'The ideas that didn\'t pan out exactly as planned.',
    permanent: true,
    icon: 'teenyicons:bin-outline',
  },
  {
    name: 'Archive',
    link: '/pockets/archive',
    key: 'archive',
    buttonRef: archiveButton,
    description: 'Creations from previous patches.',
    type: 'pocket',
    permanent: true,
    icon: 'teenyicons:archive-outline',
  },
]

export const folderLinks: Array<SidebarItem> = [
  {
    name: 'Pinned',
    key: 'pinned',
    link: '/pockets/pinned',
    buttonRef: pinnedButton,
    icon: 'teenyicons:attach-outline',
  },
  {
    name: 'All',
    key: 'all',
    link: '/pockets',
    buttonRef: allButton,
    icon: 'teenyicons:folders-outline',
  },
  {
    name: 'Trash',
    link: '/pockets/trash',
    key: 'trash',
    buttonRef: trashButton,
    icon: 'teenyicons:bin-outline',
  },
  {
    name: 'Archive',
    link: '/pockets/archive',
    key: 'archive',
    buttonRef: archiveButton,
    icon: 'teenyicons:archive-outline',
  },
]
