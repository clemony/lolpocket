export default defineNuxtRouteMiddleware((to, from) => {
  /*   const session = useSupabaseSession()

  if (!session.value.access_token) */
  // @fixme
  // navigateTo('/login')
  // navigateTo('/nexus') // for now
  // console.log('🌱 - session:', session)
  if (to)
    console.log('fml')
})
