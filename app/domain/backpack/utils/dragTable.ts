import type { DragEndEvent } from "@dnd-kit/vue"

export const columnOrder = ref<string[]>([
  "location",
  "label",
  "champions",
  "runes",
  "items",
  "spells",
  "position",
  "_map",
  "updated",
  "public"
])

function moveValue<T>(values: T[], from: number, to: number): T[] {
  const next = [...values]
  const [value] = next.splice(from, 1)

  if (value === undefined) return values

  next.splice(to, 0, value)
  return next
}

export function moveColumn(activeId: string, overId: string) {
  if (!activeId || !overId || activeId === overId) return

  const from = columnOrder.value.indexOf(activeId)
  const to = columnOrder.value.indexOf(overId)

  if (from === -1 || to === -1) return

  columnOrder.value = moveValue(columnOrder.value, from, to)
}

export function onColumnDragEnd(event: DragEndEvent) {
  if (event.canceled) return

  const activeId = String(event.operation.source?.id ?? "")
  const overId = String(event.operation.target?.id ?? "")

  moveColumn(activeId, overId)
}
