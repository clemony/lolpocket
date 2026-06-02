import { LazyCommandDialog } from "#components"
import type { RouteReturn } from "~/types/route.types"

const [useAppProvider, useAppInject] = createInjectionState(() => {
  const routes = buildRoutes()
  const settingsState = shallowRef<boolean>(false)
  const commandState = shallowRef<boolean>(false)

  const toggleSettings = useToggle(settingsState)
  const toggleCommand = useToggle(commandState)

  const overlay = useOverlay()

  const modal = overlay.create(LazyCommandDialog)

  async function openCommand() {
    modal.open()
  }
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
      close: () => (commandState.value = false),
      open: openCommand
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
        close: () => {},
        open: () => {}
      }
      /*     sidebar: {
        open: shallowRef<boolean>(false),
        toggle: () => {}
      } */
    }
  )
}
