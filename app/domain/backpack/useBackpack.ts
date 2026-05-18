import type { Table } from "@tanstack/vue-table"
import type { AcceptableValue } from "reka-ui"
import type { InjectionKey, Ref, ShallowRef } from "vue"

export type ViewMode = "gallery" | "table"

export interface BackpackInject {
  sidebarCollapsed: Ref<boolean>
  view: Ref<ViewMode>
  search: Ref<string>
  searchVisible: Ref<boolean>
  folderId: Ref<string>
  folderName: Ref<string>
  tableApi: ShallowRef<Table<Pocket> | null>
  activeTab: Ref<string>
  backpackFolderOpen: Ref<boolean>

  sidebarFolderRefs: Ref<Record<string, boolean>>
  onFolderUpdate: (e: AcceptableValue | undefined) => void
  toggleSidebar: () => void
  toggleSearch: (value?: boolean) => void
  collapseAllFolders: () => void
  path: Ref<string | null | undefined>
}
export function useBackpackProvider(): BackpackInject {
  const route = useRoute()

  const tableApi = shallowRef<Table<Pocket> | null>(null)

  const sidebarCollapsed = ref<boolean>(false)
  const toggleSidebar = useToggle(sidebarCollapsed)

  const path = ref<string | null>()
  const view = ref<ViewMode>("gallery")

  const folderId = ref<string>("all")
  const folderName = ref<string>("Backpack")
  const activeTab = ref<string>("Backpack")
  const searchVisible = ref<boolean>(false)

  const backpackFolderOpen = ref<boolean>(true)
  const sidebarFolderRefs = ref<Record<string, boolean>>({})

  const search = ref<string>("")
  const id = useRouteParams("id")

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
      if (folderId.value !== "search") folderId.value = String(value ?? "all")
    },
    { immediate: true }
  )

  watch(
    () => search.value,
    (value) => {
      if (value && value.length > 2) {
        folderId.value = "search"
      } else if (folderId.value === "search") {
        folderId.value = String(id.value ?? "all")
      }
    }
  )

  const toggleSearch = useToggle(searchVisible)

  function onFolderUpdate(e: AcceptableValue | undefined) {
    if (e !== "search") {
      const value = String(e ?? "all")

      folderId.value = value
      id.value = value
    }
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
    backpackFolderOpen,
    collapseAllFolders,
    onFolderUpdate,
    tableApi,
    folderId,
    folderName,
    activeTab,
    search,
    searchVisible,
    toggleSearch,
    view,
    path
  }
}
export const BackpackKey = Symbol("BackpackKey") as InjectionKey<BackpackInject>
export function provideBackpack() {
  const state = useBackpackProvider()
  provide(BackpackKey, state)
  return state
}

export function useBackpack() {
  const state = inject(BackpackKey)
  if (!state) throw new Error("No backpack provider found")
  return state
}
