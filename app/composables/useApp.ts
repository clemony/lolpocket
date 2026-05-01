const [useAppProvider, useAppInject] = createInjectionState(() => {
  const routes = buildRoutes()
  const settingsOpen = shallowRef<boolean>(false)
  const commandOpen = shallowRef<boolean>(false)

  const toggleSettings = useToggle(settingsOpen)
  const toggleCommand = useToggle(commandOpen)
  return {
    routes,
    settings: {
      open: settingsOpen,
      toggle: toggleSettings
    },
    command: {
      open: commandOpen,
      toggle: toggleCommand
    }
  }
})
export { useAppProvider }

export function useApp() {
  return (
    useAppInject() ?? {
      routes: {} as RouteReturn,
      settings: {
        open: shallowRef<boolean>(false),
        toggle: () => {}
      },
      command: {
        open: shallowRef<boolean>(false),
        toggle: () => {}
      }
      /*     sidebar: {
        open: shallowRef<boolean>(false),
        toggle: () => {}
      } */
    }
  )
}
