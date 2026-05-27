import type { DragDropManager } from "@dnd-kit/abstract"
import type { DragDropProviderProps } from "@dnd-kit/vue"
import { backpackFolders } from "~/domain/pocket/folder/defaultFolders"

export function isDefault(folder: Folder | undefined) {
  if (!folder) return false
  return Object.keys(backpackFolders).includes(String(folder.id))
}

export interface BoundingRect {
  width: number | undefined
  height: number | undefined
}
export function gridRect(
  manager: DragDropManager<any, any> | undefined
): BoundingRect | undefined {
  if (!manager) return
  const el = manager?.registry.draggables.value
    .toArray()
    .values()
    .find((v) => /grid/.test(v.id.toString()))
    ?.element?.getBoundingClientRect()

  return {
    width: el?.width,
    height: el?.height
  }
}
