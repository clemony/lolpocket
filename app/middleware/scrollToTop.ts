//
import type { RouteLocationNormalized, RouteLocationNormalizedLoaded } from "vue-router"

export function scrollBehavior(
  to: RouteLocationNormalized,
  from: RouteLocationNormalizedLoaded,
  savedPosition: { left: number; top: number } | null
) {
  return { top: 0 }
}
