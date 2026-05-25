import type { DragEndEvent } from "@dnd-kit/vue"
import { isSortable } from "@dnd-kit/vue/sortable"
import { isFolderDragData } from "~/domain/pocket/helpers/dragData"

export { isFolderDragData }

export function onDragEnd(event: DragEndEvent) {
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
