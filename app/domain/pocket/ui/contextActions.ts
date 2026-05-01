import { deletePocket } from "~/domain/pocket/deletePocket"
import { duplicatePocket } from "~/domain/pocket/duplicate"
import { defaultPocketFolder } from "~/domain/pocket/manage/defaultFolders"
import type { PocketButton } from "~/domain/pocket/ui/pocketFolderItems"

export function pocketActions(p: PocketButton, toggleEdit: () => void) {
  if (!p.pocket) return
  const pinned = pocketStore().pinned.includes(p.pocket.key)
  const { settings } = storeToRefs(user())
  return computed(() =>
    [
      {
        label: pinned ? "Unpin" : "Pin",
        icon: pinned ? "i-unpin" : "i-pin",
        onClick: "",
        ui: {
          itemLeadingIcon: "**:stroke-[2.1] "
        }
      },
      {
        type: "separator"
      },
      {
        label: "Rename",
        icon: "i-lucide-text-cursor-input",
        onSelect: () => toggleEdit()
      },
      {
        label: "Duplicate",
        icon: "i-lucide-copy",
        onClick: () => duplicatePocket(p as Pocket)
      },
      {
        type: "separator"
      },
      settings.value
        ? {
            label: "Move to...",
            icon: "i-lucide-folder-symlink",
            children: settings.value.folders
          }
        : undefined,
      {
        type: "separator"
      },
      {
        label: "Delete",
        icon: "i-trash",
        onClick: () => deletePocket(p as Pocket)
      }
    ].filter(Boolean)
  )
}

export function folderActions(folder: PocketButton, toggleEdit: () => void) {
  if (!folder || !folder.id) return
  const { settings } = storeToRefs(user())
  return computed(() =>
    [
      {
        label: "Rename",
        icon: "i-lucide-text-cursor-input",
        onClick: () => toggleEdit()
      },
      settings.value
        ? {
            label: "Move to...",
            icon: "i-lucide-folder-symlink",
            children: settings.value.folders.filter((f) => f.id !== folder.id)
          }
        : undefined,

      ...(Object.keys(defaultPocketFolder).includes(String(folder.id))
        ? []
        : [
            {
              type: "separator"
            },
            {
              label: "Delete",
              icon: "i-trash"
            }
          ])
    ].filter(Boolean)
  )
}
