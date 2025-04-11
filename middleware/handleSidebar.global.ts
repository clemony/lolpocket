export default defineNuxtRouteMiddleware((to, from) => {
const us = useUiStore()

    if(us.settingsOpen){
us.settingsOpen = false
    }

  if (!from) return
  const sidebarIndex = ['nexus', 'backpack', 'calculator', 'pocket', 'items', 'champions', 'docs']

  sidebarIndex.indexOf(from.meta.section.toString()) > sidebarIndex.indexOf(to.meta.section.toString()) ? us.enter = '-50%' : us.enter = '50%'

  us.enter == '-50%' ? us.leave = '50%' : us.leave = '-50%'
})
