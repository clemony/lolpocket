import type { DragEndEvent } from "@dnd-kit/vue"
import { onDragEnd as onFolderDragEnd } from "~/domain/pocket/folder/folderDrag"
import { onDragEnd as onPocketDragEnd } from "~/domain/pocket/helpers/pocketDrag"

export function onSidebarDragEnd(event: DragEndEvent) {
  return onFolderDragEnd(event) || onPocketDragEnd(event)
}
