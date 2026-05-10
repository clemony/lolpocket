import type { DraggableEvent } from "vue-draggable-plus"

export function onChange(e: DraggableEvent) {
  console.log("🥸 - onChange - e:", e)
}

export function onAdd(e: DraggableEvent, folderId?: string) {
  console.log("🥸 - onAdd - folderId:", folderId)
  if (!folderId) return
  console.log("🥸 - onAdd - e:", e)
  e.data.pocket.location = folderId
  e.data.pocket.order = e.newIndex ? e.newIndex - 1 : 0
}
