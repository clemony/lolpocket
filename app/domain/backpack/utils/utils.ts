import { backpackFolders } from "~/domain/backpack/utils/folder/defaultFolders"

export function isDefault(folder: Folder | undefined) {
  if (!folder) return false
  return Object.keys(backpackFolders).includes(String(folder.id))
}
