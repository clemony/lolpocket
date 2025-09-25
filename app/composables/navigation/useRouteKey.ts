import type { RouteRecordRaw } from 'vue-router'
import { onKeyDown, onKeyUp } from '@vueuse/core'
// composables/useRouteKeyNavigation.ts
import { useRoute, useRouter } from 'vue-router'

export function useRouteKeyNavigation() {
  const route = useRoute()
  const router = useRouter()

  const parent = ref<RouteRecordRaw | null>(null)
  const childRoutes = ref<any[]>([])
  const targetRoutes = ref<Record<string, string>>({})
  const orderedKeys = ref<string[]>([])
  const activeIndex = ref<number>(0)
  const activeKey = ref<string | null>(null)
  let stopDown: (() => void) | null = null
  let stopUp: (() => void) | null = null

  const buildTargets = () => {
    parent.value = route.matched.at(-2) || null
    childRoutes.value = parent.value?.children ?? []

    targetRoutes.value = {}
    orderedKeys.value = []

    for (const r of childRoutes.value) {
      if (r.meta?.key) {
      // Use router.resolve with current params + query
        const resolved = router.resolve({
          name: r.name,
          params: route.params,
          query: route.query,
        })

        targetRoutes.value[r.meta.key.toLowerCase()] = resolved.fullPath
        orderedKeys.value.push(r.meta.key.toLowerCase())
      }
    }

    // sync active index
    const currentKey = orderedKeys.value.findIndex(
      k => targetRoutes.value[k] === route.fullPath
    )
    activeIndex.value = currentKey >= 0 ? currentKey : 0
  }
  const register = () => {
    stopDown?.()
    stopUp?.()

    const keys = Object.keys(targetRoutes.value)
    if (!keys.length)
      return

    // direct hotkeys
    stopDown = onKeyDown(keys.flatMap(k => [k, k.toUpperCase()]), (e) => {
      const key = e.key.toLowerCase()
      activeKey.value = key
      if (targetRoutes.value[key]) {
        activeIndex.value = orderedKeys.value.indexOf(key)
      }
    }, { dedupe: true })

    stopUp = onKeyUp(keys.flatMap(k => [k, k.toUpperCase()]), (e) => {
      const key = e.key.toLowerCase()
      if (targetRoutes.value[key]) {
        activeKey.value = null
        router.push(targetRoutes.value[key])
      }
    }, { dedupe: true })
  }

  const update = () => {
    buildTargets()
    register()
  }

  watch(() => route.fullPath, update, { immediate: true })

  onBeforeUnmount(() => {
    stopDown?.()
    stopUp?.()
  })

  return {
    activeIndex,
    activeKey,
    childRoutes,
    orderedKeys,
    parent,
    targetRoutes
  }
}