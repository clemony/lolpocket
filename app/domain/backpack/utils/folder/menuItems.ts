import type { ContextMenuItem } from "@nuxt/ui"
import { useBackpack } from "~/domain/backpack/composables/useBackpack"
import {
  deleteFolder,
  deleteFolderWithConfirm
} from "~/domain/backpack/utils/folder/deleteFolder"
import { deletePocket } from "~/domain/pocket/utils/manage/deletePocket"

export const newFolderItem = (location?: string) => ({
  label: "New Folder",
  icon: "i-folder-add",
  ui: {
    itemLeadingIcon: " "
  },
  onSelect() {
    user().newPocketFolder({ location })
  }
})
export const newPocketItem = (label: string) => ({
  label: "New Pocket",
  icon: "i-lp-pocket-plus",

  ui: { itemLeadingIcon: "**:stroke-[10%] scale-96" }
})

export const openItem = (
  label: string,
  location: string, // folder id or pocket key
  type: "param" | "nav" | "pocket"
) => ({
  label: "Open",
  icon: "i-ui-open",
  ui: {
    itemLeadingIcon: " **:stroke-[2.5%]! "
  },
  onSelect() {
    if (type === "param") {
      const routeId = useRouteParams("id")
      routeId.value = String(location)
    } else if (type === "pocket") navigateTo(`/backpack/folders/${location}`)
    else navigateTo(`/backpack/${location}`)
  }
})

export const separatorItem: ContextMenuItem = {
  type: "separator"
}

export const collapseAllItem = () => {
  const { collapseAllFolders } = useBackpack()
  return {
    icon: "i-collapse-all",
    square: true,
    variant: "ghost",
    ui: {
      leadingIcon: "scale-94  "
    },
    label: "Collapse all folders",
    onSelect() {
      collapseAllFolders()
    }
  }
}

const handleDelete = async (id: string) => {
  if (user().localSettings.confirm_folder_delete === false)
    return deleteFolder(id)
  else deleteFolderWithConfirm(id)
}

export const deleteItem = (
  id: string, // folder id or pocket key
  type: "folder" | "pocket"
) => {
  return {
    label: "Delete",
    onSelect() {
      if (type === "folder") handleDelete(id)
      else if (type === "pocket") deletePocket(id)
    },
    icon: "i-trash"
  }
}
