import type { UseRefHistoryReturn } from "@vueuse/core"
import type { Folder } from "#shared/schema"
import { defaultPocketFolders } from "~/domain/pocket/folder/defaultFolders"
import { generateName } from "~/domain/pocket/helpers/generateStrings"

import { iconSets } from "~~/layers/ui/app/assets/icons/icon-sets"

export function randomizeHistoryName(
  localLabel: UseRefHistoryReturn<string, string> | undefined,
  focusInput: () => void
) {
  if (!localLabel) return
  localLabel.source.value = generateName()
  focusInput()
}

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
  return Object.keys(defaultPocketFolders).includes(String(folder.id))
}
