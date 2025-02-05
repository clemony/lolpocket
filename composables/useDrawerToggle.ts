export function useDrawerToggle(drawer: string, side?: string) {
  const ts = useTempStore()

  const toggle = ref(false)
  if (drawer == 'sidebar') {
    ts.drawerComponent = 'sidebar'
    ts.drawerTrigger = true
  }
  else if (drawer == 'pocket') {
    toggle.value = ts.pocketSheetTrigger
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

  toggle.value == false ? (toggle.value = true) : (toggle.value = false)
}
