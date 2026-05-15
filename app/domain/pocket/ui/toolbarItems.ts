import { FolderPlusIcon, SparkleIcon } from "#components"
import type { ButtonProps, DropdownMenuItem } from "@nuxt/ui"
import { useBackpack } from "~/domain/backpack/useBackpack"
import { newRandomPocket } from "~/domain/pocket/newRandomPocket"

function handleNewFolder() {
  const folder = user().newPocketFolder()
}

export const randomPocketBtn: ButtonProps = {
  icon: h(SparkleIcon, { class: "size-4" }),
  square: true,
  label: "Randomize",
  ui: {
    base: "p-0 anchor  ",
    leadingIcon: "size-4! ",
    label: "hidden "
  },
  onClick: () => newRandomPocket()
}

export const newFolderBtn: ButtonProps = {
  square: true,
  icon: "i-lucide-folder-plus", //h(FolderPlusIcon),
  // color: "neutral",
  variant: "ghost",
  ui: {
    base: "p-0",
    label: "hidden",
    leadingIcon: " **:stroke-[1.8] group-hover/btn:**:stroke-[2.3]"
  },
  label: "New folder",
  onClick: () => handleNewFolder()
}

export const collapseAllBtn = computed<ButtonProps>(() => {
  const { collapseAllFolders } = useBackpack()
  return {
    icon: "i-collapse-all",
    square: true,
    variant: "ghost",
    ui: {
      base: "p-0",
      label: "hidden",
      leadingIcon: "scale-94 **:stroke-[1.9] group-hover/btn:**:stroke-[2.3]"
    },
    label: "Collapse all",
    onClick: () => collapseAllFolders()
  }
})
