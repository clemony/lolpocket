import type { AvatarProps, ButtonProps, TreeItem } from "@nuxt/ui"
import { defaultPocketFolder } from "~/domain/pocket/manage/defaultFolders"
import { folderActions, pocketActions } from "~/domain/pocket/ui/contextActions"

export interface PocketButton extends Omit<ButtonProps, "type"> {
  id?: string
  pocket?: Pocket
  children?: PocketButton[]
  openIcon?: string
  type?: "button" | "folder"
}

export function asTreeItem(item: PocketButton): PocketButton {
  return item
}

function mapFolder(f: Folder) {
  return {
    ...f,
    ui: {
      label: "font-medium grow"
    } as PocketButton["ui"],
    trailingIcon: "i-up",

    label: f.label ?? "",
    children: getChildren(f.id)
  }
}

function getChildren(id: string) {
  return pocketStore()
    .pockets.filter((p: Pocket) => !p.location || p.location === id)
    .map((p: Pocket) => ({
      pocket: p,
      label: p.name,
      avatar: {
        src: p.splash,
        size: "xs" as AvatarProps["size"],
        ui: {
          image: "scale-180 translate-y-1",
          root: "overflow-hidden shadow-xs drop-shadow-xs"
        }
      },
      to: `/pocket/${p.key}`,
      getKey: () => p.key
    }))
}
export const items = computed<PocketButton[]>(() => {
  const { settings } = storeToRefs(user())
  const folders = safeObject(settings.value?.folders).map((f) => ({
    ...f,
    to: f.id
  }))

  return [
    mapFolder(defaultPocketFolder as Folder),
    ...folders.map((f) => mapFolder(f)).filter(Boolean)
  ]
})
