import type { AcceptableValue } from "reka-ui"
import type { InjectionKey } from "vue"
import type { ViewMode } from "~/domain/backpack/types"
import type { BackpackFolderKey } from "~~/shared/types/types.sortable"
import { backpackFolderKeys } from "~~/shared/types/types.sortable"

export interface BackpackInject {
  sidebarCollapsed: Ref<boolean>
  view: Ref<ViewMode>
  folderId: Ref<string>
  folderName: Ref<string>
  sidebarFolderRefs: Ref<Record<string, boolean>>
  onFolderUpdate: (e: AcceptableValue | undefined) => void
  toggleSidebar: () => void
  collapseAllFolders: () => void
  path: Ref<string | null | undefined>
}

export function backpackTabFolderId(value: unknown) {
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

  return typeof id === "string" &&
    backpackFolderKeys.includes(id as BackpackFolderKey)
    ? id
    : "folders"
}

export function useBackpackProvider(): BackpackInject {
  const route = useRoute()

  const sidebarCollapsed = ref<boolean>(false)
  const toggleSidebar = useToggle(sidebarCollapsed)

  const path = ref<string | null>()
  const view = ref<ViewMode>("gallery")
  const id = useRouteParams("id")

  const folderId = ref<string>("folders")
  const folderName = ref<string>("Backpack")
  const activeTab = ref<string>("Backpack")

  const backpackFolderOpen = ref<boolean>(true)
  const sidebarFolderRefs = ref<Record<string, boolean>>({})

  watch(
    () => route.path,
    (value) => {
      path.value = value
      view.value = value.endsWith("/table") ? "table" : "gallery"
    },
    { immediate: true }
  )

  watch(
    () => id.value,
    (value) => {
      folderId.value = backpackTabFolderId(value)
    },
    { immediate: true }
  )

  function onFolderUpdate(e: AcceptableValue | undefined) {
    const value = backpackTabFolderId(e)

    folderId.value = value
    id.value = value
  }

  function collapseAllFolders() {
    backpackFolderOpen.value = false
    for (const key in sidebarFolderRefs.value) {
      sidebarFolderRefs.value[key] = false
    }
  }

  return {
    sidebarCollapsed,
    toggleSidebar,
    sidebarFolderRefs,
    collapseAllFolders,
    onFolderUpdate,
    folderId,
    folderName,
    view,
    path
  }
}
export const BackpackKey = Symbol("BackpackKey") as InjectionKey<BackpackInject>
export function provideBackpack() {
  const state = useBackpackProvider()
  provide(BackpackKey, state)
  if (!state) throw new Error("No backpack provided")
  return state
}

export function useBackpack() {
  const state = inject(BackpackKey)
  if (!state) throw new Error("No backpack provider found")
  return state
}
