import type { FolderButton } from "~/domain/pocket/types"

export function editFolderIcon(
  folder: Folder | FolderButton | undefined,
  e: string
) {
  if (!folder) return
  folder.iconKey = e ?? "folder"
}
