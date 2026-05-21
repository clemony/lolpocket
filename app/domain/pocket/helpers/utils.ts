import type { Folder } from "#shared/schema"
import { backpackFolders } from "~/domain/pocket/folder/defaultFolders"
import { iconSets } from "~~/layers/ui/app/assets/icons/icon-sets"

export interface IconUi {
  name: string[]
  class: HTMLAttributes["class"][]
}
export function iconSetFromKey(key: string): IconUi {
  const ico = safeObject(iconSets[key])
  return {
    name: [ico.open, ico.closed],
    class: [ico.ui?.open, ico.ui?.closed]
  }
}

export function isDefault(folder: Folder | undefined) {
  if (!folder) return false
  return Object.keys(backpackFolders).includes(String(folder.id))
}
