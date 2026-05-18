import type { DropdownMenuItem, TableRow } from "@nuxt/ui"
import { updatePocketLocation } from "~/domain/pocket/manage/editPocket"
import { iconSets } from "~~/layers/ui/app/assets/icons/icon-sets"

export const folderActions = (folder: Folder, row: TableRow<Pocket>) => {
  return [
    {
      label: "Move to..."
    },
    { type: "separator" as DropdownMenuItem["type"] },
    ...(user().settings?.folders.map((f) => ({
      label: f.label,
      icon: iconSets[f.iconKey]?.icon,
      ui: {
        itemLeadingIcon: iconSets[f.iconKey]?.ui?.open
      },
      onSelect() {
        updatePocketLocation(row.original.key, f.id)
      }
    })) as DropdownMenuItem[])
  ]
}
