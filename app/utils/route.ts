export const directParentRoute = computed(() => {
  const route = useRoute()
  const matched = route.matched
  return matched.length > 1 ? matched[matched.length - 2] : null
})
