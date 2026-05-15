import type { AvatarProps } from "@nuxt/ui"
import { defaultPocketFolders } from "~/domain/pocket/folder/defaultFolders"
import type { FolderExpose, PocketProps } from "~/domain/pocket/types"
import { getSplashFromSkinKey } from "~/domain/utils/img"

type FolderInput =
  | Folder
  | Ref<Folder | undefined>
  | ComputedRef<Folder | undefined>

type AllFolderInput =
  | AllFolder
  | Ref<AllFolder | undefined>
  | ComputedRef<AllFolder | undefined>

function sortPocketProps(a: PocketProps, b: PocketProps) {
  return (
    ((a.order as number | undefined) ?? 0) -
      ((b.order as number | undefined) ?? 0) ||
    String(a.label ?? "").localeCompare(String(b.label ?? ""), undefined, {
      numeric: true,
      sensitivity: "base"
    })
  )
}

function mapPocket(pocket: Pocket): PocketProps {
  const location = pocket.location || "all"

  return {
    pocket,
    slot: "pocket",
    type: "pocket",
    order: pocket.order,
    label: pocket.label,
    avatar: {
      src: getSplashFromSkinKey(pocket.skin, "tile"),
      size: "xs" as AvatarProps["size"],
      ui: {
        image: "scale-180 translate-y-1",
        root: "overflow-hidden shadow-xs drop-shadow-xs"
      }
    },
    to: `/backpack/${location}/pocket/${pocket.key}`,
    getKey: () => pocket.key
  }
}

function mapFolder(folder: Folder): Folder {
  return {
    ...folder,
    iconKey: folder.iconKey ?? "folder",
    label: folder.label ?? "",
    slot: "folder"
  }
}

export interface UseFoldersReturn {
  folders: ComputedRef<Folder[]>
  pinned: ComputedRef<Folder>
  favorites: ComputedRef<Folder>
  archive: ComputedRef<Folder>
  trash: ComputedRef<Folder>
  defaults: ComputedRef<Folder[]>
  complete: ComputedRef<Folder[]>
  all: ComputedRef<AllFolder>
  routeId: ComputedRef<string>
  routeFolder: ComputedRef<Folder>
  routeFolderId: ComputedRef<string>
  routeLocation: ComputedRef<string>
}

const [providePocketFolderState, useInjectedFolders] = createInjectionState(
  (): UseFoldersReturn => {
    const { settings } = storeToRefs(user())
    const store = pocketStore()
    const { pinned: pinnedKeys, pockets: sourcePockets } = storeToRefs(store)
    const route = useRoute()

    const favoriteKeys = computed(() => settings.value?.favorite_pockets ?? [])

    const childrenByLocation = computed<Record<string, PocketProps[]>>(() => {
      const children: Record<string, PocketProps[]> = {}

      for (const pocket of sourcePockets.value) {
        const location = pocket.location || "all"
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

    const folders = computed(() =>
      (settings.value?.folders ?? [])
        .map((folder) =>
          mapFolder({
            ...folder,
            to: `/backpack/${folder.id}`,
            location: folder.location || folder.id,
            children: childrenForLocation(folder.id)
          })
        )
        .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
    )
    function defaultFolder(key: keyof typeof defaultPocketFolders) {
      return computed(() =>
        mapFolder({
          ...defaultPocketFolders[key],
          children:
            key === "pinned"
              ? childrenForKeys(pinnedKeys)
              : key === "favorites"
                ? childrenForKeys(favoriteKeys)
                : childrenForLocation(defaultPocketFolders[key].location || key)
        })
      )
    }

    function allFolder() {
      return computed<AllFolder>(() => {
        const all = mapFolder({
          ...defaultPocketFolders.all,
          children: childrenForLocation(
            defaultPocketFolders.all.location || "all"
          )
        })
        return {
          ...all,
          folders
        }
      })
    }

    const pinned = defaultFolder("pinned")
    const favorites = defaultFolder("favorites")
    const all = allFolder()
    const archive = defaultFolder("archive")
    const trash = defaultFolder("trash")

    const defaults = computed(() => [
      pinned.value,
      all.value,
      favorites.value,
      archive.value,
      trash.value
    ])

    const complete = computed(() => [
      pinned.value,
      favorites.value,
      all.value,
      ...folders.value,
      archive.value,
      trash.value
    ])

    const routeId = computed(() => {
      const value = route.params.id
      const id = Array.isArray(value) ? value[0] : value

      return id || "all"
    })

    const routeFolder = computed(
      () =>
        complete.value.find(
          (folder) =>
            folder.id === routeId.value || folder.location === routeId.value
        ) ?? all.value
    )

    const routeFolderId = computed(() => routeFolder.value.id)
    const routeLocation = computed(
      () => routeFolder.value.location || routeFolder.value.id
    )

    return {
      folders,
      complete,
      pinned,
      favorites,
      archive,
      trash,
      defaults,
      all,
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
  const childKey = (child: PocketProps) =>
    child.getKey?.() ?? child.pocket?.key ?? child.label

  const childRefs = useTemplateRefsList<HTMLElement & FolderExpose>()

  return {
    children,
    childRefs,
    childKey
  }
}
export function useAllFolderChildren(item: AllFolderInput | undefined) {
  const folder = computed(() => toValue(item))
  const children = computed(() => toValue(folder.value?.children) ?? [])
  const childKey = (child: PocketProps) =>
    child.getKey?.() ?? child.pocket?.key ?? child.label

  const childRefs = useTemplateRefsList<HTMLElement & FolderExpose>()

  return {
    children,
    childRefs,
    childKey
  }
}
