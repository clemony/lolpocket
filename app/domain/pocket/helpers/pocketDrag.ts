import type { DragEndEvent } from "@dnd-kit/vue"
import { isSortable } from "@dnd-kit/vue/sortable"
import type { PocketProps } from "~/domain/pocket/types"

export function onDragEnd(event: DragEndEvent) {
  console.log("🥸 - onDragEnd - event:", event)
  if (event.canceled) return false

  const { source, target } = event.operation
  if (!isSortable(source)) return false

  const location = String(
    isSortable(target) ? target.group : source.group || "all"
  )
  const order = isSortable(target) ? target.index : source.index

  if (source.initialIndex === order && source.initialGroup === location) {
    return false
  }

  const pocket = source.data as Partial<PocketProps> | undefined
  if (!pocket?.key) return false

  pocketStore().updatePocketSort(pocket.key, location, order)
  return true
}
