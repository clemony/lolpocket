const [useAppProvider, useAppInject] = createInjectionState(() => {
  const routes = buildRoutes()
  const settingsState = shallowRef<boolean>(false)
  const commandState = shallowRef<boolean>(false)

  const toggleSettings = useToggle(settingsState)
  const toggleCommand = useToggle(commandState)
  return {
    routes,
    settings: {
      state: settingsState,
      toggle: toggleSettings,
      close: () => (settingsState.value = false)
    },
    command: {
      state: commandState,
      toggle: toggleCommand,
      close: () => (commandState.value = false)
    }
  }
})
export { useAppProvider }

export function useApp() {
  return (
    useAppInject() ?? {
      routes: {} as RouteReturn,
      settings: {
        state: shallowRef<boolean>(false),
        toggle: () => {},
        close: () => {}
      },
      command: {
        state: shallowRef<boolean>(false),
        toggle: () => {},
        close: () => {}
      }
      /*     sidebar: {
        open: shallowRef<boolean>(false),
        toggle: () => {}
      } */
    }
  )
}
