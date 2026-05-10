export const defaultPocketFolders = {
  pinned: {
    label: "Pinned",
    id: "pinned",
    to: "/backpack/pinned",
    iconKey: "pin",
    location: "",
    open: false,
    order: 0
  },
  favorites: {
    label: "Favorites",
    id: "favorites",
    to: "/backpack/favorites",
    iconKey: "heart",
    open: false,
    location: "",
    order: 1
  },
  pockets: {
    label: "Pockets",
    id: "pockets",
    iconKey: "folder",
    to: "/backpack",
    location: "",
    open: true,
    order: 2
  },
  archive: {
    label: "Archive",
    id: "archive",
    to: "/backpack/archive",
    iconKey: "archive",
    open: false,
    location: "",
    order: 4
  },
  trash: {
    label: "Trash",
    id: "trash",
    open: false,
    to: "/backpack/trash",
    iconKey: "trash",
    location: "",
    order: 5
  }
} satisfies Record<string, Folder>
