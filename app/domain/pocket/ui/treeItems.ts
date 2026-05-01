import type { AvatarProps, TreeItem } from "@nuxt/ui"
import { defaultPocketFolder } from "~/domain/pocket/manage/defaultFolders"
import { folderActions, pocketActions } from "~/domain/pocket/ui/contextActions"

export interface TreeItemExt extends TreeItem {
  avatar?: AvatarProps
  pocket?: Pocket
}

export function asTreeItem(item: TreeItemExt): TreeItemExt {
  return item
}

function mapFolder(f: Folder) {
  return {
    ...f,
    ui: {
      label: "font-medium grow"
    } as TreeItemExt["ui"],
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
        size: "xs",
        ui: {
          image: "scale-180 translate-y-1",
          root: "overflow-hidden shadow-xs drop-shadow-xs"
        }
      },
      to: `/pocket/${p.key}`,
      getKey: () => p.key
    }))
}
export const items = computed<TreeItemExt[]>(() => {
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

export function moveItem(oldIndex: number, newIndex: number) {
  if (oldIndex === newIndex) return

  const source = items.value[oldIndex]
  const target = items.value[newIndex]
  if (!source || !target) return

  const [moved] = source.parent.splice(source.index, 1)
  if (!moved) return

  const updatedTarget = items.value.find(({ item }) => item === target.item)
  if (!updatedTarget) return

  const insertIndex =
    oldIndex < newIndex ? updatedTarget.index + 1 : updatedTarget.index
  updatedTarget.parent.splice(insertIndex, 0, moved)
}
