export default defineNuxtRouteMiddleware((to, from) => {
  if (to.params.champion_key)
    to.meta.title = ix().champNameByKey(to.params.champion_key.toString())
})
