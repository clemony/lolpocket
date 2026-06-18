import {
  LazySettingsSidebar,
  LazySidebar,
  LazySidebarInbox,
  LazySidebarMenu,
  LazySidebarSearch,
  LazySocialPanel,
} from "#components"
import type {
  Component,
  ComputedRef,
  InjectionKey,
  ShallowRef,
} from "vue"

export interface SidebarContext {
  component: ComputedRef<Component | undefined>
  tab: ShallowRef<string>
  state: ShallowRef<boolean>
  toggle: (value?: boolean) => boolean
  close: () => boolean
  open: (newTab?: string) => Promise<void>
  setTab: (newTab: string) => string
}

const SidebarKey = Symbol("sidebar") as InjectionKey<SidebarContext>

export function useSidebarProvider(): SidebarContext {
  const sidebarState = shallowRef<boolean>(false)
  const tab = shallowRef<string>("menu")
  const toggleSidebar = useToggle(sidebarState)
  const overlay = useOverlay()
  const modal = overlay.create(LazySidebar)

  async function openSidebar(newTab?: string) {
    tab.value = newTab ?? "menu"
    modal.open({
      tab: tab.value,
      setTab: (newTab: string) => (tab.value = newTab),
    })
  }

  const component = computed<Component | undefined>(
    () =>
      ({
        menu: LazySidebarMenu,
        inbox: LazySidebarInbox,
        search: LazySidebarSearch,
        settings: LazySettingsSidebar,
        social: LazySocialPanel,
      })[tab.value]
  )

  const state: SidebarContext = {
    component,
    tab,
    state: sidebarState,
    toggle: toggleSidebar,
    close: () => (sidebarState.value = false),
    open: (newTab?: string) => openSidebar(newTab),
    setTab: (newTab: string) => (tab.value = newTab),
  }

  provide(SidebarKey, state)
  return state
}

export function useSidebar() {
  const state = inject(SidebarKey)
  if (!state) throw new Error("No sidebar provider found")
  return state
}
