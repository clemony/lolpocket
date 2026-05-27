import type { DragEndEvent } from "@dnd-kit/vue"
import { isSortable } from "@dnd-kit/vue/sortable"
import {
  isFolderDragData,
  isPocketDragData
} from "~/domain/pocket/helpers/dragData"
import { normalizeDragLocation } from "~/domain/pocket/helpers/dragLocation"

export function onSidebarDragEnd(event: DragEndEvent) {
  return onFolderDragEnd(event) || onPocketDragEnd(event)
}

function pocketLocation(data: PocketDragData, fallback?: unknown) {
  const location = normalizeDragLocation(data.item.location, "")
  if (location) return location
  return normalizeDragLocation(fallback, "folders")
}

function pocketTargetLocation(
  source: DragEndEvent["operation"]["source"],
  target: DragEndEvent["operation"]["target"]
) {
  if (isFolderDragData(target?.data)) return target.data.item.id
  if (isPocketDragData(target?.data))
    return pocketLocation(
      target.data,
      isSortable(target) ? target.group : undefined
    )
  if (isSortable(target)) return normalizeDragLocation(target.group, "all")
  if (isSortable(source)) return normalizeDragLocation(source.group, "all")
  return "all"
}

export function onPocketDragEnd(event: DragEndEvent) {
  if (event.canceled) return false

  const { source, target } = event.operation
  if (!isSortable(source)) return false

  const pocket = source.data
  if (!isPocketDragData(pocket)) return false

  const targetLocation = pocketTargetLocation(source, target)
  const location = normalizeDragLocation(targetLocation, "all")
  const order = isSortable(target) ? target.index : source.index
  const sourceLocation = pocketLocation(pocket, source.initialGroup)

  if (source.initialIndex === order && sourceLocation === location) {
    return false
  }

  pocketStore().updatePocketSort(pocket.item.key, location, order)
  return true
}

export { isFolderDragData }

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
