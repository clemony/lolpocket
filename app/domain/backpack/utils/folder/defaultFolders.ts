export const backpackFolders: Record<BackpackFolderKey, Folder> = {
  pinned: {
    label: "Pinned",
    id: "pinned",
    to: "/backpack/pinned",
    iconKey: "pin",
    location: "default",
    open: false,
    order: 0
  },
  folders: {
    label: "Folders",
    id: "folders",
    iconKey: "folder",
    to: "/backpack/folders",
    location: "default",
    open: true,
    order: 2
  },
  favorites: {
    label: "Favorites",
    id: "favorites",
    to: "/backpack/favorites",
    iconKey: "heart",
    open: false,
    location: "default",
    order: 0
  },
  archive: {
    label: "Archive",
    id: "archive",
    to: "/backpack/archive",
    iconKey: "archive",
    open: false,
    location: "default",
    order: 4
  },
  trash: {
    label: "Trash",
    id: "trash",
    open: false,
    to: "/backpack/trash",
    iconKey: "trash",
    location: "default",
    order: 5
  }
}
