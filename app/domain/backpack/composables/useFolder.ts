import type { AvatarProps } from "@nuxt/ui"
import { normalizeDragLocation } from "~/domain/backpack/utils/dragData"
import { backpackFolders } from "~/domain/backpack/utils/folder/defaultFolders"

import { getSplashFromSkinKey } from "~/domain/utils/img"
import { iconSets } from "~~/layers/ui/app/assets/icons/icon-sets"

function sortSortablePocket(a: SortablePocket, b: SortablePocket) {
  return (
    Number(toValue(a.order) ?? 0) - Number(toValue(b.order) ?? 0) ||
    0 ||
    String(a.label ?? "").localeCompare(String(b.label ?? ""), undefined, {
      numeric: true,
      sensitivity: "base"
    })
  )
}

function pocketLocation(location: unknown) {
  return normalizeDragLocation(location, "folders")
}

export function routeFolderId(value: unknown) {
  let id = value

  if (Array.isArray(value)) {
    id = value[0]
    for (let index = value.length - 1; index >= 0; index--) {
      if (typeof value[index] === "string") {
        id = value[index]
        break
      }
    }
  }

  return typeof id === "string" && id.length ? id : "folders"
}

export function resolveRouteFolder(
  complete: SortableFolder[],
  fallback: SortableFolder,
  id: string
) {
  return complete.find((folder) => folder.id === id) ?? fallback
}

const mapPocket = (p: Pocket): SortablePocket => {
  const location = computed(() => pocketLocation(p.location))

  return {
    ...p,
    button: computed(() => ({
      label: p.label,
      avatar: {
        src: getSplashFromSkinKey(p.skin, "tile"),
        size: "xs" as AvatarProps["size"]
      }
    })),
    id: computed(() => p.key)
  }
}

function mapFolder(
  folder: Folder,
  children: ComputedRef<SortablePocket[]>
): SortableFolder {
  const { sidebarFolderRefs } = storeToRefs(pocketStore())

  const count = children.value.length ?? 0
  const icons = iconSets[folder.iconKey ?? "folder"]
  return {
    ...folder,
    count,
    children,
    button: computed(() => ({
      icon: icons?.[
        sidebarFolderRefs.value[folder.id] === true ? "open" : "closed"
      ],
      label: folder.label,
      ui: {
        leadingIcon: icons?.class || undefined
      }
    }))
  }
}

export interface UseFoldersReturn {
  subfolders: ComputedRef<SortableFolder[]>
  pinned: ComputedRef<SortableFolder>
  favorites: ComputedRef<SortableFolder>
  archive: ComputedRef<SortableFolder>
  trash: ComputedRef<SortableFolder>
  defaults: ComputedRef<SortableFolder[]>
  complete: ComputedRef<SortableFolder[]>
  folders: ComputedRef<SortableFolder>
  routeFolder: ComputedRef<SortableFolder>
}

const [providePocketFolderState, useInjectedFolders] = createInjectionState(
  (): UseFoldersReturn => {
    const { defaultFolderOrder, settings } = storeToRefs(user())
    const store = pocketStore()
    const { pinned: pinnedKeys, pockets: sourcePockets } =
      storeToRefs(pocketStore())

    const route = useRoute()

    const favoriteKeys = computed(() => settings.value?.favorite_pockets ?? [])

    function childrenForLocation(location: string) {
      return computed(
        () =>
          sourcePockets.value
            .filter((p) => pocketLocation(p.location) === location)
            .map(mapPocket)
            .sort(sortSortablePocket) ?? []
      )
    }

    function childrenForKeys(keys: Ref<string[]> | ComputedRef<string[]>) {
      return computed(() =>
        keys.value
          .map((key) => store.pocketsByKey[key])
          .filter((pocket): pocket is Pocket => Boolean(pocket))
          .map(mapPocket)
          .sort(sortSortablePocket)
      )
    }

    const subfolders = computed(() => {
      return (settings.value?.folders ?? [])
        .map((folder) => {
          return mapFolder(folder, childrenForLocation(folder.id))
        })
        .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
    })

    const pinned = computed(() => {
      return mapFolder(backpackFolders.pinned, childrenForKeys(pinnedKeys))
    })

    const favorites = computed(() => {
      return mapFolder(backpackFolders.favorites, childrenForKeys(favoriteKeys))
    })

    function defaultFolder(
      key: BackpackFolderKey
    ): ComputedRef<SortableFolder> {
      return computed(() => {
        return mapFolder(backpackFolders[key], childrenForLocation(key))
      })
    }

    const folders = computed<SortableFolder>(() => {
      const folders = mapFolder(
        backpackFolders.folders,
        childrenForLocation("folders")
      )

      const count = subfolders.value.reduce(
        (acc: number, folder: SortableFolder) => acc + (folder?.count ?? 0),
        folders.children?.value?.length ?? 0
      )
      return {
        ...folders,
        subfolders,
        count
      }
    })

    const archive = defaultFolder("archive")
    const trash = defaultFolder("trash")

    const defaults = computed(() =>
      [
        pinned.value,
        folders.value,
        favorites.value,
        archive.value,
        trash.value
      ].sort(
        (a, b) =>
          (defaultFolderOrder.value[a.id as BackpackFolderKey] ??
            a.order ??
            0) -
          (defaultFolderOrder.value[b.id as BackpackFolderKey] ?? b.order ?? 0)
      )
    )

    const complete = computed(() => [...defaults.value, ...subfolders.value])

    const routeId = computed(() => routeFolderId(route.params.id))

    const routeFolder = computed(() =>
      resolveRouteFolder(complete.value, folders.value, routeId.value)
    )

    return {
      subfolders,
      complete,
      pinned,
      favorites,
      archive,
      trash,
      defaults,
      folders,
      routeFolder
    }
  }
)

export function usePocketFolderProvider() {
  return providePocketFolderState()
}

export function useFolders(): UseFoldersReturn {
  return useInjectedFolders() ?? providePocketFolderState()
}
