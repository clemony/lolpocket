export async function handleSidebarClose(bar) {
  const us = useUiStore()
  bar == 'menu' ? us.sidebarMenuOpen = false : us.settingsOpen = false

  nextTick(() => {
    us.enterY = us.previousEnterY
    us.leaveY = us.previousEnterY
    us.enterX = 0
    us.leaveX = 0
  })
}

export async function handleSidebarOpen(bar) {
  const us = useUiStore()
  us.enterY = 0
  us.leaveY = 0
  us.enterX = '-50%'
  us.leaveX = '50%'
  nextTick(() => {
    bar == 'menu' ? us.sidebarMenuOpen = true : us.settingsOpen = true
  })
}
