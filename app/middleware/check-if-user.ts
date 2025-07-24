export default defineNuxtRouteMiddleware((to, from) => {
  console.log('💠 - defineNuxtRouteMiddleware - to:', to)
  const as = useAccountStore()
  const riotAcc = computed(() => as.userAccount.riot)

  if (
    riotAcc.value.region != to.params.region
    || `${riotAcc.value.name}_${riotAcc.value.tag}` != to.params.slug
  ) {
    return abortNavigation()
  }
  console.log('Hi,', riotAcc.value.name, '!')
})
