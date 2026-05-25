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
