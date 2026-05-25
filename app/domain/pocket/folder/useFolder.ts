import { CollisionPriority } from "@dnd-kit/abstract"
import type { AvatarProps } from "@nuxt/ui"
import { backpackFolders } from "~/domain/pocket/folder/defaultFolders"
import { clickFriendlySensors } from "~/domain/pocket/helpers/sortableSensors"
import type { FolderExpose } from "~/domain/pocket/types"
import { getSplashFromSkinKey } from "~/domain/utils/img"
import { iconSets } from "~~/layers/ui/app/assets/icons/icon-sets"

type FolderInput =
  | SortableFolder
  | Ref<SortableFolder | undefined>
  | ComputedRef<SortableFolder | undefined>

function sortSortablePocket(a: SortablePocket, b: SortablePocket) {
  return (
    Number(toValue(a.sortable.index) ?? 0) -
      Number(toValue(b.sortable.index) ?? 0) ||
    0 ||
    String(a.label ?? "").localeCompare(String(b.label ?? ""), undefined, {
      numeric: true,
      sensitivity: "base"
    })
  )
}

function folderSortableGroup(location: string | undefined) {
  return `folder:${location ?? "folders"}`
}

const sortableCollisionPriority = CollisionPriority.High
const folderDropCollisionPriority = CollisionPriority.Low

const mapPocket = (p: Pocket): SortablePocket => {
  const data = computed<PocketDragData>(() => ({
    item: p,
    kind: "pocket",
    avatar: {
      src: getSplashFromSkinKey(p.skin, "tile"),
      size: "xs" as AvatarProps["size"],
      ui: {
        image: "scale-180 translate-y-1",
        root: "overflow-hidden shadow-xs drop-shadow-xs"
      }
    },
    to: `/backpack/${location}/pocket/${p.key}`
  }))

  return {
    ...p,
    id: computed(() => p.key),
    sortable: {
      id: computed(() => p.key ?? ""),
      type: "pocket",
      accept: ["pocket", "grid:pocket"],
      collisionPriority: sortableCollisionPriority,
      index: computed(() => p.order ?? 0),
      group: computed(() => p.location ?? "folders"),
      data,
      sensors: clickFriendlySensors
    }
  }
}

function mapFolder(folder: Folder): SortableFolder {
  const { defaultFolderOrder } = storeToRefs(user())
  const type = folder.location === "folders" ? "subfolder" : "folder"
  const data = computed<FolderDragData>(() => ({
    kind: type,
    item: folder
  }))

  return {
    ...folder,
    icons: iconSets[folder.iconKey ?? "folder"],
    sortable: {
      id: computed(() => folder.id),
      type,
      sensors: clickFriendlySensors,
      index: computed(() =>
        type === "folder"
          ? defaultFolderOrder.value[folder.id as BackpackFolderKey]
          : (folder.order ?? 0)
      ),
      accept: type,
      collisionPriority: sortableCollisionPriority,
      group: computed(() => folderSortableGroup(folder.location)),
      data
    },
    droppable: {
      id: computed(() => `droppable-${folder.id}`),
      accept: ["pocket", "grid:pocket"],
      collisionPriority: folderDropCollisionPriority,
      type,
      data
    }
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
  routeId: ComputedRef<string>
  routeFolder: ComputedRef<SortableFolder>
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

    function childrenForLocation(location: string) {
      return computed(
        () =>
          sourcePockets.value
            .filter((p) => p.location === location)
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
          const children = childrenForLocation(folder.id)
          return mapFolder({
            ...folder,
            to: `/backpack/${folder.id}`,
            location: folder.location || folder.id,
            count: children.value.length ?? 0,
            children
          })
        })
        .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
    })

    const pinned = computed(() => {
      const children = childrenForKeys(pinnedKeys)
      return mapFolder({
        ...backpackFolders.pinned,
        children,
        count: children.value.length ?? 0
      })
    })

    const favorites = computed(() => {
      const children = childrenForKeys(favoriteKeys)
      return mapFolder({
        ...backpackFolders.favorites,
        children,
        count: children.value.length ?? 0
      })
    })

    function defaultFolder(
      key: BackpackFolderKey
    ): ComputedRef<SortableFolder> {
      const children = childrenForLocation(key)

      return computed(() => {
        return mapFolder({
          ...backpackFolders[key],
          children,
          count: children.value.length ?? 0
        })
      })
    }

    const folders = computed<SortableFolder>(() => {
      const folders = mapFolder({
        ...backpackFolders.folders,
        children: childrenForLocation("folders")
      })

      const count = subfolders.value.reduce(
        (acc: number, folder: SortableFolder) => acc + (folder?.count ?? 0),
        0
      )
      return {
        ...folders,
        subfolders,
        count: (folders.children?.value?.length ?? 0) + count
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
  const childKey = (child: SortablePocket) => child.key
  const childData = (child: SortablePocket) => toValue(child)

  const childRefs = useTemplateRefsList<HTMLElement & FolderExpose>()

  return {
    children,
    childRefs,
    childData,
    childKey
  }
}
