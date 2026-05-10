import type { RouteRecordInfoGeneric } from "vue-router"

export type ViewMode = "gallery" | "list"

const [useBackpackProvider, useBackpackInject] = createInjectionState(() => {
  const collapsed = shallowRef<boolean>(false)
  const toggleCollapsed = useToggle(collapsed)

  const path = shallowRef<string>()
  const viewMode = shallowRef<ViewMode>("gallery")

  function setPath(newPath: string) {
    path.value = newPath
  }

  function goTo(newPath: string) {
    navigateTo(path.value)
  }

  return {
    collapsed,
    toggleCollapsed,
    viewMode,
    path,
    setPath,
    goTo
  }
})
export { useBackpackProvider }

export function useBackpack() {
  return (
    useBackpackInject() ?? {
      collapsed: shallowRef<boolean>(false),
      viewMode: shallowRef<ViewMode>("gallery"),
      toggleCollapsed: () => {},
      path: shallowRef<string>(),
      goTo: () => {},
      setPath: () => {}
    }
  )
}
