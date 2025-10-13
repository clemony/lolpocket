export const directParentRoute = computed(() => {
  const route = useRoute()
  const matched = route.matched
  return matched.length > 1 ? matched[matched.length - 2] : null
})

export function closeAndNav(link: string) {
  ui().sidebarOpen = false
  navigateTo(link)
}