// composables/useParentMeta.ts
import { useRoute } from 'vue-router'

/**
 * Get a meta property from the nearest parent route.
 * @param key The meta property key to look for
 * @param levelsUp How many levels up from the current route (default = 1 for direct parent)
 * @example const parentTitle = useParentMeta<string>('title') // pulls meta.title from direct parent
 * @example const grandparentTitle = useParentMeta<string>('title', 2)
 */
export function useParentMeta<T = unknown>(
  key: string,
  levelsUp = 1
): T | undefined {
  const route = useRoute()
  const index = route.matched.length - 1 - levelsUp
  return route.matched[index]?.meta?.[key] as T | undefined
}
