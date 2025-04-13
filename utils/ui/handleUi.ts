
export async function handleSettingsClose(){
  const us = useUiStore()
  us.settingsOpen = false
  nextTick(() =>{
  us.enterY = us.previousEnterY
  us.leaveY = us.previousEnterY
  us.enterX = 0
  us.leaveX = 0
  })
}

export async function handleSettingsOpen(){
const us = useUiStore()
    us.enterY = 0
    us.leaveY = 0
    us.enterX = '-50%'
    us.leaveX = '50%'
    nextTick(() => {
    us.settingsOpen = true
    })
}
