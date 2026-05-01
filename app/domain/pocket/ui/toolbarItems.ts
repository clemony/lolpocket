import { FolderPlusIcon, SparkleIcon } from "#components"
import type { ButtonProps } from "@nuxt/ui"
import type { SeparatorProps } from "reka-ui"
import { newPocket } from "~/domain/pocket/newPocket"
import { newRandomPocket } from "~/domain/pocket/newRandomPocket"

function handleNewFolder() {
  const folder = user().newPocketFolder()
}

export const toolbarItems: Record<string, ButtonProps> = {
  new: {
    icon: "i-add",
    label: "New Pocket",
    onClick: () => newPocket(),
    ui: {
      leadingIcon: "**:stroke-[2.3] in-group/sidebar:scale-106"
    }
  },
  random: {
    icon: h(SparkleIcon),
    square: true,
    label: "New Random Pocket",
    ui: {
      base: "p-0 anchor  ",
      leadingIcon: "size-4! ",
      label: "hidden "
    },
    onClick: () => newRandomPocket()
  },
  folder: {
    square: true,
    icon: h(FolderPlusIcon),
    ui: {
      base: "p-0",
      label: "hidden"
    },
    label: "New folder",
    onClick: () => handleNewFolder()
  },
  collapseAll: {
    icon: "i-collapse-all",
    square: true,
    ui: {
      base: "p-0",
      label: "hidden",
      leadingIcon: "scale-94 **:stroke-[2.3] group-hover/btn:**:stroke-[2.5]"
    },
    label: "Collapse all",
    onClick: () => {}
  }
}
