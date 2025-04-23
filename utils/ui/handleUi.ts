
export async function handleSidebarClose(sidebar){
  console.log("💠 - handleSidebarClose - sidebar:", sidebar)
  const us = useUiStore()
  sidebar = false
  nextTick(() =>{
  us.enterY = us.previousEnterY
  us.leaveY = us.previousEnterY
  us.enterX = 0
  us.leaveX = 0
  })
}

export async function handleSidebarOpen(sidebar){
console.log("💠 - handleSidebarOpen - sidebar:", sidebar)
const us = useUiStore()
    us.enterY = 0
    us.leaveY = 0
    us.enterX = '-50%'
    us.leaveX = '50%'
    nextTick(() => {
    sidebar = true
    })
}
