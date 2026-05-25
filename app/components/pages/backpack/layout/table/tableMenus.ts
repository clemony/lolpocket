import type { DropdownMenuItem, TableRow } from "@nuxt/ui"
import { updatePocketLocation } from "~/domain/pocket/manage/editPocket"
import { iconSets } from "~~/layers/ui/app/assets/icons/icon-sets"
import { itemLabelUi } from "~~/layers/ui/app/variants/menu"

export const folderActions = (
  folder: Folder,
  row: TableRow<Pocket>,
  folders: Folder[]
) => {
  return [
    {
      label: "Move to...",
      ui: {
        item: "h-10!"
      }
    },
    { type: "separator" as DropdownMenuItem["type"] },
    {
      label: "Folders",
      type: "checkbox" as DropdownMenuItem["type"],
      icon: "i-folder",
      checked: folder.id === "folders",
      onSelect() {
        updatePocketLocation(row.original.key, "folders")
      }
    },
    ...folders.map((f) => ({
      label: f.label,
      type: "checkbox" as DropdownMenuItem["type"],
      icon: iconSets[f.iconKey]?.icon,
      checked: folder.id === f.location,
      ui: {
        itemLeadingIcon: f.icons?.class
      },
      onSelect() {
        updatePocketLocation(row.original.key, f.id)
      }
    }))
  ]
}
