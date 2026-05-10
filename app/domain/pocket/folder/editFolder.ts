import type { Folder } from "#shared/schema"

export function editFolderIcon(folder: Folder | undefined, e: string) {
  if (!folder) return
  folder.iconKey = e ?? "folder"
}
