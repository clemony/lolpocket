export const defaultPocketFolders: Record<string, Folder> = {
  pinned: {
    label: "Pinned",
    id: "pinned",
    iconKey: "pin",
    location: "",
    open: false,
    order: 0
  },
  favorites: {
    label: "Favorites",
    id: "favorites",
    iconKey: "heart",
    open: false,
    location: "",
    order: 0
  },
  pockets: {
    label: "Pockets",
    id: "pockets",
    iconKey: "folder",
    to: "/backpack",
    location: "",
    open: true,
    order: 0
  },
  archive: {
    label: "Archive",
    id: "archive",
    to: "/backpack/archive",
    iconKey: "archive",
    open: false,
    location: "",
    order: 0
  },
  trash: {
    label: "Trash",
    id: "trash",
    open: false,
    to: "/backpack/trash",
    iconKey: "trash",
    location: "",
    order: 0
  }
}
