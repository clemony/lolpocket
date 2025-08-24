export default defineNuxtRouteMiddleware((to, from) => {
  console.log('💠 - defineNuxtRouteMiddleware - to:', to)

  if (
    as().account.region != to.params.region
    || `${as().account.name}_${as().account.tag}` != to.params.slug
  ) {
    return abortNavigation()
  }
})
