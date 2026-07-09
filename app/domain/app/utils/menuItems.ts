import type { ContextMenuItem } from "@nuxt/ui"
import { map } from "valibot"
import { useBackpack } from "~/domain/backpack/composables/useBackpack"
import {
  deleteFolder,
  deleteFolderWithConfirm,
} from "~/domain/backpack/utils/folder/deleteFolder"
import { deletePocket } from "~/domain/pocket/utils/manage/deletePocket"
import { newPocket } from "~/domain/pocket/utils/newPocket"
import { newRandomPocket } from "~/domain/pocket/utils/newRandomPocket"

export const newFolderItem = (location?: string, close?: () => void) => ({
  label: "New Folder",
  icon: "i-folder-add",
  ui: {
    itemLeadingIcon: " ",
  },
  onSelect() {
    user().newPocketFolder({ location })
    if (close) close()
  },
})

export const openItem = (
  label: string,
  location: string, // folder id or pocket key
  type: "param" | "nav" | "pocket",
  close?: () => void
) => ({
  label: "Open",
  icon: "i-ui-open",
  ui: {
    itemLeadingIcon: " **:stroke-[2.5%]! ",
  },
  onSelect() {
    if (type === "param") {
      const routeId = useRouteParams("id")
      routeId.value = String(location)
    } else if (type === "pocket") navigateTo(`/backpack/folders/${location}`)
    else navigateTo(`/backpack/${location}`)
    if (close) close()
  },
})

export const separatorItem: ContextMenuItem = {
  type: "separator",
}

export const collapseAllItem = (close?: () => void) => {
  return {
    icon: "i-collapse-all",
    square: true,
    variant: "ghost",
    ui: {
      leadingIcon: "scale-94  ",
    },
    label: "Collapse all folders",
    onSelect() {
      pocketStore().collapseAllFolders()
      if (close) close()
    },
  }
}

const handleDelete = async (id: string) => {
  if (localStore().localSettings.confirm_folder_delete === false)
    return deleteFolder(id)
  else deleteFolderWithConfirm(id)
}

export const deleteItem = (
  id: string, // folder id or pocket key
  type: "folder" | "pocket",
  close?: () => void
) => {
  return {
    label: "Delete",
    onSelect() {
      if (type === "folder") handleDelete(id)
      else if (type === "pocket") deletePocket(id)
      if (close) close()
    },
    icon: "i-trash",
  }
}

export const newPocketItem = (label: string, close?: () => void) => ({
  label: "New Pocket",
  icon: "i-ui-pocket",
  onSelect() {
    newPocket()
    if (close) close()
  },
  onClick() {
    newPocket()
  },

  class: "**:stroke-[0.7%]!  **:stroke-p0! scale-116 ",
  ui: { itemLeadingIcon: "**:stroke-[0%]! scale-96" },
})

export type BackpackItem = ReturnType<typeof backpackItem>
export const backpackItem = (close: () => void) => {
  return {
    label: "Pockets",
    type: "label",
    value: "backpack-label",
    description: "Create, save, play. Gain match insight.",
    items: [
      {
        label: "Backpack",
        icon: "i-hugeicons-backpack-02",
        value: "backpack-pocket",
        class: "**:stroke-[8.5%]! scale-99",
        to: "/backpack/folders",
      },
      {
        ...newPocketItem("folders", close),
        children: [
          {
            description: "Generate a randomized pocket.",
            label: "YOLO",

            //i-hugeicons-crazy
            //i-fluent-emoji-high-contrast-fish-cake-with-swirl
            onClick() {
              newRandomPocket({
                location: String("folders"),
              })
            },
          },
        ],
      },
    ],
  }
}

export const followingItem = (close?: () => void) => {
  const { settings } = storeToRefs(user())
  return {
    label: "Following",
    type: "label",
    icon: "i-heart",
    value: "following-label",
    items: settings.value?.favorite_summoners.map(
      (puuid: string) => async () => await summonerStore().resolveOrFetch(puuid)
    ),
  }
}
