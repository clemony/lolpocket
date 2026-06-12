import { LazySlidebar } from "#components"
import type { RouteReturn } from "~/types/route.types"

const [useAppProvider, useAppInject] = createInjectionState(() => {
  const sidebarState = shallowRef<boolean>(false)
  const tab = shallowRef<string>("menu")
  const toggleSidebar = useToggle(sidebarState)
  const overlay = useOverlay()
  const modal = overlay.create(LazySlidebar)

  async function openSidebar(newTab?: string) {
    tab.value = newTab ?? "menu"
    modal.open({
      tab: tab.value,
      setTab: (newTab: string) => (tab.value = newTab),
    })
  }
  return {
    sidebar: {
      state: sidebarState,
      toggle: toggleSidebar,
      close: () => (sidebarState.value = false),
      open: (newTab?: string) => openSidebar(newTab),
      setTab: (newTab: string) => (tab.value = newTab),
    },
  }
})
export { useAppProvider }

export function useApp() {
  return (
    useAppInject() ?? {
      sidebar: {
        state: shallowRef<boolean>(false),
        toggle: () => {},
        close: () => {},
        open: () => {},
      },
    }
  )
}
