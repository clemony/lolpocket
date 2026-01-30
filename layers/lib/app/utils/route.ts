export function useTypedRouteParam(name: string) {
  const route = useRoute()
  return computed(() => {
    const v = route.params[name]
    return typeof v === 'string' ? v : v?.[0]
  })
}

export const getDirectParentRoute = computed(() => {
  const route = useRoute()
  const matched = route.matched
  return matched.length > 1 ? matched[matched.length - 2] : null
})

export function getParentRoute() {
  const route = useRoute()
  route.matched[route.matched.length - 2]
}
