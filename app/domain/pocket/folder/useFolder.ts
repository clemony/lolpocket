import type { AvatarProps } from "@nuxt/ui"
import type { BackpackFolderKey } from "~/domain/pocket/folder/defaultFolders"
import { backpackFolders } from "~/domain/pocket/folder/defaultFolders"
import type { FolderExpose, PocketProps } from "~/domain/pocket/types"
import { getSplashFromSkinKey } from "~/domain/utils/img"

type FolderInput =
  | Folder
  | Ref<Folder | undefined>
  | ComputedRef<Folder | undefined>

function sortPocketProps(a: PocketProps, b: PocketProps) {
  return (
    ((a.index as number | undefined) ?? 0) -
      ((b.index as number | undefined) ?? 0) ||
    String(a.data?.value.label ?? "").localeCompare(
      String(b.data?.value.label ?? ""),
      undefined,
      {
        numeric: true,
        sensitivity: "base"
      }
    )
  )
}

const mapPocket = (p: Pocket): PocketProps => ({
  ...p,
  key: p.key,
  id: computed(() => p.key ?? ""),
  type: "pocket",
  accept: "pocket",
  group: computed(() => p.location ?? "folders"),
  index: computed(() => p.order ?? 0),
  data: computed(() => p),
  avatar: {
    src: getSplashFromSkinKey(p.skin, "tile"),
    size: "xs" as AvatarProps["size"],
    ui: {
      image: "scale-180 translate-y-1",
      root: "overflow-hidden shadow-xs drop-shadow-xs"
    }
  },
  to: `/backpack/${location}/pocket/${p.key}`
})

function mapFolder(folder: Folder): Folder {
  return {
    ...folder,
    sortable: {
      id: computed(() => folder.id ?? ""),
      index: computed(() => folder.order ?? 0),
      group: computed(() => folder.location ?? "folders"),
      type: "folder",
      accept: "pocket",
      data: computed(() => ({ kind: "folder" as const, id: folder.id }))
    }
  }
}

export interface UseFoldersReturn {
  subfolders: ComputedRef<Folder[]>
  pinned: ComputedRef<Folder>
  favorites: ComputedRef<Folder>
  archive: ComputedRef<Folder>
  trash: ComputedRef<Folder>
  defaults: ComputedRef<Folder[]>
  complete: ComputedRef<Folder[]>
  folders: ComputedRef<Folder>
  routeId: ComputedRef<string>
  routeFolder: ComputedRef<Folder>
  routeFolderId: ComputedRef<string>
  routeLocation: ComputedRef<string>
}

const [providePocketFolderState, useInjectedFolders] = createInjectionState(
  (): UseFoldersReturn => {
    const { defaultFolderOrder, settings } = storeToRefs(user())
    const store = pocketStore()
    const { pinned: pinnedKeys, pockets: sourcePockets } = storeToRefs(store)
    const route = useRoute()

    const favoriteKeys = computed(() => settings.value?.favorite_pockets ?? [])

    const childrenByLocation = computed<Record<string, PocketProps[]>>(() => {
      const children: Record<string, PocketProps[]> = {}

      for (const pocket of sourcePockets.value) {
        const location = pocket.location || "folders"
        children[location] ??= []
        children[location].push(mapPocket(pocket))
      }

      for (const value of Object.values(children)) {
        value.sort(sortPocketProps)
      }

      return children
    })

    function childrenForLocation(location: string) {
      return computed(() => childrenByLocation.value[location] ?? [])
    }

    function childrenForKeys(keys: Ref<string[]> | ComputedRef<string[]>) {
      return computed(() =>
        keys.value
          .map((key) => store.pocketsByKey[key])
          .filter((pocket): pocket is Pocket => Boolean(pocket))
          .map(mapPocket)
          .sort(sortPocketProps)
      )
    }

    const subfolders = computed(() => {
      return (settings.value?.folders ?? [])
        .map((folder) =>
          mapFolder({
            ...folder,
            to: `/backpack/${folder.id}`,
            location: folder.location || folder.id,
            children: childrenForLocation(folder.id)
          })
        )
        .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
    })

    function defaultFolder(key: keyof typeof backpackFolders) {
      return computed(() =>
        mapFolder({
          ...backpackFolders[key],
          children:
            key === "pinned"
              ? childrenForKeys(pinnedKeys)
              : key === "favorites"
                ? childrenForKeys(favoriteKeys)
                : childrenForLocation(backpackFolders[key].location || key)
        })
      )
    }

    const foldersFolder = computed<Folder>(() => {
      const folders = mapFolder({
        ...backpackFolders.folders,
        children: childrenForLocation("folders")
      })
      return {
        ...folders,
        subfolders
      }
    })

    const pinned = defaultFolder("pinned")
    const favorites = defaultFolder("favorites")
    const folders = foldersFolder
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

    const complete = computed(() => [
      pinned.value,
      favorites.value,
      folders.value,
      ...subfolders.value,
      archive.value,
      trash.value
    ])

    const routeId = computed(() => {
      const value = route.params.id
      const id = Array.isArray(value) ? value[0] : value

      return id || "folders"
    })

    const routeFolder = computed(
      () =>
        complete.value.find(
          (folder) =>
            folder.id === routeId.value || folder.location === routeId.value
        ) ?? folders.value
    )

    const routeFolderId = computed(() => routeFolder.value.id)
    const routeLocation = computed(
      () => routeFolder.value.location || routeFolder.value.id
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
      routeId,
      routeFolder,
      routeFolderId,
      routeLocation
    }
  }
)

export function usePocketFolderProvider() {
  return providePocketFolderState()
}

export function useFolders(): UseFoldersReturn {
  return useInjectedFolders() ?? providePocketFolderState()
}

export function useFolderChildren(item: FolderInput | undefined) {
  const folder = computed(() => toValue(item))
  const children = computed(() => toValue(folder.value?.children) ?? [])
  const childKey = (child: PocketProps) => child.key
  const childData = (child: PocketProps) => toValue(child.data)

  const childRefs = useTemplateRefsList<HTMLElement & FolderExpose>()

  return {
    children,
    childRefs,
    childData,
    childKey
  }
}
