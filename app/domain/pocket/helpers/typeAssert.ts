import type {
  FolderButton,
  PocketButton,
  PocketButtonChildren
} from "~/domain/pocket/types"

export function asPocketButton(
  item: PocketButton | PocketButton[] | undefined | PocketButtonChildren
): PocketButton {
  return item as PocketButton
}

export function asFolder(item: Folder | FolderButton | undefined): Folder {
  return item as Folder
}

export function asFolderButton(
  item: Folder | FolderButton | undefined
): FolderButton {
  return item as Folder
}
