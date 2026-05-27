import type { SortablePocketChildren } from "~/domain/pocket/types"

export function asSortablePocket(
  item:
    | SortablePocket
    | SortableFolder
    | SortablePocket[]
    | undefined
    | SortablePocketChildren
    | Folder
): SortablePocket {
  return item as SortablePocket
}

export function asSortableFolder(
  item: SortableFolder | SortablePocket | Folder | undefined | string | number
): SortableFolder {
  return item as SortableFolder
}

export function asSortableFolderOrPocket(
  item:
    | SortablePocket
    | SortableFolder
    | SortablePocket[]
    | undefined
    | SortablePocketChildren
    | Folder
): SortablePocket | SortableFolder {
  return item as SortablePocket | SortableFolder
}
