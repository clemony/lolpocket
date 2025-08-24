export default defineNuxtRouteMiddleware((to, from) => {
  const session = useSupabaseSession()

  if (!session.value.access_token)
    navigateTo('/login')
})
