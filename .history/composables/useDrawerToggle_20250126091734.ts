export function useDrawerToggle(drawer) {
  const ts = useTempStore()

  const toggle = ref()
  if (drawer == 'sidebar') {
    toggle.value = ts.sidebarTrigger
  }
  else if (drawer == 'pocket') {
    toggle.value = ts.PocketSheetTrigger
  }
  else if (drawer == 'editPocket') {
    toggle.value = ts.editPocketTrigger
  }
  else if (drawer == 'item') {
    toggle.value = ts.itemDrawerTrigger
  }
  else if (drawer == 'champion') {
    toggle.value = ts.championDrawerTrigger
  }
  else if (drawer == 'champSelect') {
    toggle.value = ts.champSelectDrawerTrigger
  }
  else if (drawer == 'rune') {
    toggle.value = ts.runeDrawerTrigger
  }
  else if (drawer == 'cardBack') {
    toggle.value = ts.runeDrawerTrigger
  }

  !toggle.value ? (toggle.value = true) : (toggle.value = false)
}
