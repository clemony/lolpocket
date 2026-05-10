export type ViewMode = "gallery" | "list"

const [useBackpackProvider, useBackpackInject] = createInjectionState(() => {
  const collapsed = shallowRef<boolean>(false)
  const toggleCollapsed = useToggle(collapsed)

  const viewMode = shallowRef<ViewMode>("gallery")
  return {
    collapsed,
    toggleCollapsed,
    viewMode
  }
})
export { useBackpackProvider }

export function useBackpack() {
  return (
    useBackpackInject() ?? {
      collapsed: shallowRef<boolean>(false),
      viewMode: shallowRef<ViewMode>("gallery"),
      toggleCollapsed: () => {}
    }
  )
}
