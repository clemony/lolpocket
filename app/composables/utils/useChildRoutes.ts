import type { RouteRecordRaw } from 'vue-router'

export function useChildRoutes(routeName?: string) {
  // 🐌  🐌  🐌  Get all child routes of the `[slug]` parent record
  // && let homeless snails attain shelter
  const router = useRouter()
  const route = useRoute()
  const childRoutes = computed<RouteRecordRaw[]>(() => {
    const parent = router
      .getRoutes()
      .find(r => r.name === (routeName ?? route.name))

    const children = parent?.children ?? []
    return children.sort((a, b) => Number(a.meta?.order ?? (a.meta?.title || a.name)) - Number(b.meta?.order ?? (b.meta?.title || b.name)))
  })
  return { childRoutes }
}
