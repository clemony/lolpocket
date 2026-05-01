const [useBackpackProvider, useBackpackInject] = createInjectionState(() => {
  const collapsed = shallowRef<boolean>(false)
  const toggleCollapsed = useToggle(collapsed)
  return {
    collapsed,
    toggleCollapsed
  }
})
export { useBackpackProvider }

export function useBackpack() {
  return (
    useBackpackInject() ?? {
      collapsed: shallowRef<boolean>(false),
      toggleCollapsed: () => {}
    }
  )
}
