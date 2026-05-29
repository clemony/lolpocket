export function asSortablePocket(
  item: SortablePocket | SortableFolder | SortablePocket[] | undefined | Folder
): SortablePocket {
  return item as SortablePocket
}

export function asSortableFolder(
  item: SortableFolder | SortablePocket | Folder | undefined | string | number
): SortableFolder {
  return item as SortableFolder
}

export function asSortableFolderOrPocket(
  item: SortablePocket | SortableFolder | SortablePocket[] | undefined | Folder
): SortablePocket | SortableFolder {
  return item as SortablePocket | SortableFolder
}

export function asPocket(
  item:
    | SortablePocket
    | SortableFolder
    | SortablePocket[]
    | undefined
    | Folder
    | any
): Pocket {
  return item as Pocket
}
