import type { DragEndEvent } from "@dnd-kit/vue"
import { isSortable } from "@dnd-kit/vue/sortable"
import {
  isFolderDragData,
  isPocketDragData
} from "~/domain/pocket/helpers/dragData"

export function onDragEnd(event: DragEndEvent) {
  if (event.canceled) return false

  const { source, target } = event.operation
  if (!isSortable(source)) return false

  const targetLocation =
    isFolderDragData(target?.data)
      ? target.data.item.id
      : isSortable(target)
        ? target.group
        : source.group
  const location = String(targetLocation || "all")
  const order = isSortable(target) ? target.index : source.index

  if (source.initialIndex === order && source.initialGroup === location) {
    return false
  }

  const pocket = source.data
  if (!isPocketDragData(pocket)) return false

  pocketStore().updatePocketSort(pocket.item.key, location, order)
  return true
}
