import type { Table } from "@tanstack/vue-table"
import type { AcceptableValue } from "reka-ui"
import type { ShallowRef } from "vue"

export type ViewMode = "gallery" | "table"

export interface BackpackInject {
  sidebarCollapsed: ShallowRef<boolean>
  view: ShallowRef<ViewMode>
  search: ShallowRef<string>
  folderId: ShallowRef<string>
  folderName: ShallowRef<string>
  tableApi: ShallowRef<Table<Pocket> | null>
  activeTab: ShallowRef<string>
  backpackFolderOpen: ShallowRef<boolean>
  sidebarFolderRefs: ShallowRef<Record<string, boolean>>
  onFolderUpdate: (e: string | number) => void
  toggleSidebar: () => void
  collapseAllFolders: () => void
  path: ShallowRef<string | null | undefined>
}
export const useBackpackProvider = () => {
  const route = useRoute()

  const tableApi = shallowRef<Table<Pocket> | null>(null)

  const sidebarCollapsed = shallowRef<boolean>(false)
  const toggleSidebar = useToggle(sidebarCollapsed)

  const path = shallowRef<string | null>()
  const view = shallowRef<ViewMode>("gallery")

  const folderId = shallowRef<string>("backpack")
  const folderName = shallowRef<string>("Backpack")
  const activeTab = shallowRef<string>("Backpack")

  const id = useRouteParams("id")

  onMounted(() => {
    if (id.value) {
      folderId.value = String(id.value)
    }
  })

  function onFolderUpdate(e: AcceptableValue | undefined) {
    if (e !== "search") {
      if (e === undefined) folderId.value = "all"
      else id.value = String(e)
    }
  }

  const backpackFolderOpen = shallowRef<boolean>(true)
  const sidebarFolderRefs = shallowRef<Record<string, boolean>>({})

  const search = shallowRef<string>("")
  watch(
    () => search.value,
    (v) => {
      console.log("💠 - watch - newVal:", v)
      if (v && v.length > 2) folderId.value = "search"
    }
  )

  function collapseAllFolders() {
    backpackFolderOpen.value = false
    if (sidebarFolderRefs.value)
      for (const key in sidebarFolderRefs.value) {
        sidebarFolderRefs.value[key] = false
      }
  }

  const state = {
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
    view,
    path
  }
  return state
}
export const BackpackKey = Symbol("BackpackKey")
export function provideBackpack(state: BackpackInject) {
  provide(BackpackKey, state)
  return state
}

export function useBackpack() {
  const state = inject<BackpackInject | undefined>(BackpackKey)
  if (!state) throw new Error("No backpack provider found")
  return state
}
