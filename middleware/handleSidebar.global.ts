export default defineNuxtRouteMiddleware((to, from) => {
  const us = useUiStore()

  if (us.settingsOpen) {
    us.settingsOpen = false
  }

  if (!from || to.path == '/' || from.path == '/')
    return
  const sidebarIndex = ['nexus', 'backpack', 'calculator', 'pocket', 'items', 'champions', 'docs']

  sidebarIndex.indexOf(from.meta.section.toString()) > sidebarIndex.indexOf(to.meta.section.toString()) ? us.enterY = '-50%' : us.enterY = '50%'

  us.enterY == '-50%' ? us.leaveY = '50%' : us.leaveY = '-50%'
})
