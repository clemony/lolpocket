export default defineNuxtRouteMiddleware((to, from) => {
  const ts = useTempStore()
  if (ts.sidebarTrigger) {
    ts.sidebarTrigger = false
  }
})
