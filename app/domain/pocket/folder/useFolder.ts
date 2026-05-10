import type { AvatarProps } from "@nuxt/ui"
import { defaultPocketFolders } from "~/domain/pocket/folder/defaultFolders"
import type {
  FolderButton,
  FolderExpose,
  PocketButton
} from "~/domain/pocket/types"
import { getSplashFromSkinKey } from "~/domain/utils/img"

export function mapFolder(f: Folder): FolderButton {
  const store = pocketStore()
  return {
    ...f,
    trailingIcon: "i-up",
    iconKey: f.iconKey ?? "folder",
    label: f.label ?? "",
    children: getChildren(f.id),
    type: "folder",
    slot: "folder"
  }
}

function getChildren(id: string): ComputedRef<PocketButton[]> {
  const store = pocketStore()
  return computed(() =>
    store.pockets
      .filter((p: Pocket) => !p.location || p.location === id)
      .map((p: Pocket) => ({
        pocket: p,
        slot: "pocket",
        type: "pocket",
        order: p.order,
        label: p.label,
        avatar: {
          src: getSplashFromSkinKey(p.skin, "tile"),
          size: "xs" as AvatarProps["size"],
          ui: {
            image: "scale-180 translate-y-1",
            root: "overflow-hidden shadow-xs drop-shadow-xs"
          }
        },
        to: `/pocket/${p.key}`,
        getKey: () => p.key
      }))
  )
}

export interface UsePocketReturn {
  folders: ComputedRef<FolderButton[]>
  pockets: ComputedRef<FolderButton>
  pinned: ComputedRef<FolderButton>
  favorites: ComputedRef<FolderButton>
  archive: ComputedRef<FolderButton>
  trash: ComputedRef<FolderButton>
}
const [usePocketFolderProvider, usePocketFolders] = createInjectionState(() => {
  const { settings } = storeToRefs(user())

  return computed<UsePocketReturn>(() => {
    const folders = computed(() =>
      safeObject(settings.value?.folders)
        .map((f) => mapFolder(f))
        .filter(Boolean)
    )

    const pockets = computed(() =>
      mapFolder(defaultPocketFolders.pockets as Folder)
    )

    return {
      pockets,
      folders,
      pinned: computed(() => mapFolder(defaultPocketFolders.pinned as Folder)),
      favorites: computed(() =>
        mapFolder(defaultPocketFolders.favorites as Folder)
      ),
      archive: computed(() =>
        mapFolder(defaultPocketFolders.archive as Folder)
      ),

      trash: computed(() => mapFolder(defaultPocketFolders.trash as Folder))
    }
  })
})

export { usePocketFolderProvider, usePocketFolders }

export function useFolderChildren(item: ComputedRef<FolderButton>) {
  const children = computed(() => toValue(item.value.children) ?? [])
  const childKey = (child: PocketButton) =>
    child.getKey?.() ?? child.pocket?.key ?? child.label

  const childRefs = useTemplateRefsList<HTMLElement & FolderExpose>()
  return {
    children,
    childRefs,
    childKey
  }
}
