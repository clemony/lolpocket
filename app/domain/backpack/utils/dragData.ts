import type { DragEndEvent } from "@dnd-kit/vue"
import { isSortable } from "@dnd-kit/vue/sortable"

export function isFolderDragData(data: unknown): data is FolderDragData {
  return (
    Boolean(data) &&
    typeof data === "object" &&
    ["folder", "subfolder"].includes(
      String((data as Partial<FolderDragData>).kind)
    ) &&
    typeof (data as Partial<FolderDragData>).item?.id === "string"
  )
}

export function isPocketDragData(data: unknown): data is PocketDragData {
  return (
    Boolean(data) &&
    typeof data === "object" &&
    (data as Partial<PocketDragData>).kind === "pocket" &&
    typeof (data as Partial<PocketDragData>).item?.key === "string"
  )
}

export function isBackpackDragData(
  data: unknown
): data is FolderDragData | PocketDragData {
  return isFolderDragData(data) || isPocketDragData(data)
}

function unwrapValue(value: unknown): unknown {
  if (typeof value === "function") return unwrapValue(value())
  if (value && typeof value === "object" && "value" in value) {
    return unwrapValue((value as { value: unknown }).value)
  }
  return value
}

export function normalizeDragLocation(value: unknown, fallback = "folders") {
  const unwrapped = unwrapValue(value)

  if (typeof unwrapped === "number") return String(unwrapped)
  if (typeof unwrapped !== "string") return fallback

  const location = unwrapped.includes(":")
    ? unwrapped.slice(unwrapped.indexOf(":") + 1)
    : unwrapped

  return location && location !== "[object Object]" ? location : fallback
}

export function namespacedDragGroup(
  namespace: string,
  location: unknown,
  fallback = "folders"
) {
  return `${namespace}:${normalizeDragLocation(location, fallback)}`
}

export function pocketLocation(data: PocketDragData, fallback?: unknown) {
  const location = normalizeDragLocation(data.item.location, "")
  if (location) return location
  return normalizeDragLocation(fallback, "folders")
}

export function pocketTargetLocation(
  source: DragEndEvent["operation"]["source"],
  target: DragEndEvent["operation"]["target"]
) {
  if (isFolderDragData(target?.data)) return target.data.item.id
  if (isPocketDragData(target?.data))
    return pocketLocation(
      target.data,
      isSortable(target) ? target.group : undefined
    )
  if (isSortable(target)) return normalizeDragLocation(target.group, "folders")
  if (isSortable(source)) return normalizeDragLocation(source.group, "folders")
  return "all"
}
