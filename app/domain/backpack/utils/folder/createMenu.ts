import type { DropdownMenuItem } from "@nuxt/ui"
import { magicPocketMenu } from "~/domain/backpack/utils/folder/magicPocketMenu"
import {
  newFolderItem,
  newPocketItem
} from "~/domain/backpack/utils/folder/menuItems"

export const newItemOptions = (
  location: string | undefined,
  disableFolder = false
) =>
  computed<DropdownMenuItem[]>(
    () =>
      [
        ...computed(() =>
          disableFolder
            ? []
            : [
                newFolderItem,
                {
                  type: "separator"
                }
              ]
        ).value,
        newPocketItem(location ?? "folders"),

        {
          label: "Pocket Wizard",
          icon: "i-wand",
          ui: {
            itemLeadingIcon: "**:stroke-[12%]"
          },
          onClick: () => {}
        },
        {
          type: "separator"
        },
        ...magicPocketMenu(String(location)).value
      ].filter(Boolean) as DropdownMenuItem[]
  )
