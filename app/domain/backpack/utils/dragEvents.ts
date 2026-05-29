import type { DragEndEvent } from "@dnd-kit/vue"
import { isSortable } from "@dnd-kit/vue/sortable"
import {
  isFolderDragData,
  isPocketDragData,
  normalizeDragLocation,
  pocketLocation,
  pocketTargetLocation
} from "~/domain/backpack/utils/dragData"

export function onDragEnd(event: DragEndEvent) {
  return onFolderDragEnd(event) || onPocketDragEnd(event)
}

export function onPocketDragEnd(event: DragEndEvent) {
  if (event.canceled) return false

  const { source, target } = event.operation
  if (!isSortable(source)) return false

  const pocket = source.data
  if (!isPocketDragData(pocket)) return false

  const targetLocation = pocketTargetLocation(source, target)
  const location = normalizeDragLocation(targetLocation, "folders")
  const order = isSortable(target) ? target.index : source.index
  const sourceLocation = pocketLocation(pocket, source.initialGroup)

  if (source.initialIndex === order && sourceLocation === location) {
    return false
  }

  pocketStore().updatePocketSort(pocket.item.key, location, order)
  return true
}

export function onFolderDragEnd(event: DragEndEvent) {
  if (event.canceled) return false

  const { source, target } = event.operation
  if (!isSortable(source)) return false

  const item = source.data
  if (!isFolderDragData(item)) return false

  const order = isSortable(target) ? target.index : source.index

  if (source.initialIndex === order) return false

  if ((item as FolderDragData).kind === "folder")
    user().updateDefaultFolderSort(item.item.id, order)
  else if ((item as FolderDragData).kind === "subfolder")
    user().updateFolderSort(item.item.id, order)
  return true
}
