export function useBackpackProvider() {
  const collapsed = shallowRef<boolean>(false)
  const toggleCollapsed = useToggle(collapsed)
  provide("backpackCommands", { collapsed, toggleCollapsed })

  return {
    collapsed,
    toggleCollapsed
  }
}

export function useBackpack() {
  const state =
    inject<ReturnType<typeof useBackpackProvider>>("backpackCommands")
  if (!state) throw new Error("No backpack provider found")
  return state
}
