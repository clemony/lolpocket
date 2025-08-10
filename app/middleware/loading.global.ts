export default defineNuxtRouteMiddleware((to, from) => {
  const indicator = useLoadingIndicator()

  // Start immediately
  indicator.start()

  // Finish when route is ready
  onNuxtReady(() => {
    indicator.finish()
  })
})