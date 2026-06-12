import type { DropdownMenuItem } from "@nuxt/ui"
import { newFolderItem, newPocketItem } from "~/domain/app/utils/menuItems"
import { magicPocketMenu } from "~/domain/backpack/utils/folder/magicPocketMenu"

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
