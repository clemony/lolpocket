export function useDialogToggle(modal) {
  const ts = useTempStore()

  const toggle = ref()
  if (modal == 'login') {
    toggle.value = ts.loginOpen
  }

  !toggle.value ? (toggle.value = true) : (toggle.value = false)
}
