import type { RouteRecordRaw } from 'vue-router'
import { onKeyDown, onKeyUp } from '@vueuse/core'
// composables/useRouteKeyNavigation.ts
import { useRoute, useRouter } from 'vue-router'

export function useRouteNavigation() {
  const route = useRoute()
  const router = useRouter()

  const parent = ref<RouteRecordRaw | null>(null)
  const childRoutes = ref<any[]>([])
  const targetRoutes = ref<Record<string, string>>({})
  const orderedKeys = ref<string[]>([])
  const activeIndex = ref<number>(0)

  const buildTargets = () => {
    parent.value = route.matched.at(-2) || null
    childRoutes.value = parent.value?.children ?? []

    targetRoutes.value = {}

    for (const r of childRoutes.value) {
      if (r.name) {
      // Use router.resolve with current params + query
        const resolved = router.resolve({
          name: r.name,
          params: route.params,
          query: route.query,
        })

        targetRoutes.value[r.name.toLowerCase()] = resolved.fullPath
      }
    }

    // sync active index
    const currentKey = orderedKeys.value.findIndex(
      k => targetRoutes.value[k] === route.fullPath
    )
    activeIndex.value = currentKey >= 0 ? currentKey : 0
  }

  const update = () => {
    buildTargets()
  }

  watch(() => route.fullPath, update, { immediate: true })

  return {
    activeIndex,
    childRoutes,
    orderedKeys,
    parent,
    targetRoutes
  }
}