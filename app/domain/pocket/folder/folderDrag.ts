import type { DragEndEvent } from "@dnd-kit/vue"
import { isSortable } from "@dnd-kit/vue/sortable"
import type { BackpackFolderKey } from "~/domain/pocket/folder/defaultFolders"
import { defaultFolderKeys } from "~/domain/pocket/folder/defaultFolders"

interface FolderDragData {
  kind: "folder"
  id: string
}

function isFolderDragData(data: unknown): data is FolderDragData {
  return (
    Boolean(data) &&
    typeof data === "object" &&
    (data as Partial<FolderDragData>).kind === "folder" &&
    typeof (data as Partial<FolderDragData>).id === "string"
  )
}

export function onDragEnd(event: DragEndEvent) {
  if (event.canceled) return false

  const { source, target } = event.operation
  if (!isSortable(source)) return false

  const folder = source.data
  if (!isFolderDragData(folder)) return false

  const order = isSortable(target) ? target.index : source.index

  if (source.initialIndex === order) return false

  if (defaultFolderKeys.includes(folder.id as BackpackFolderKey))
    user().updateDefaultFolderSort(folder.id, order)
  else user().updateFolderSort(folder.id, order)
  return true
}
