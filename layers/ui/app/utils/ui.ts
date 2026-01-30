import type { ClassValue } from 'clsx'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const tooltipPlacements = ['top', 'bottom', 'left', 'right']
export const tooltipSizes = ['default', 'md', 'lg']

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function closeAndNav(link: string) {
  ui().sidebarOpen = false
  navigateTo(link)
}

export function getIcon(
  icon: IconObject | ComputedRef<IconObject> | undefined
) {
  return icon ? unref(icon) : undefined
}

/* motion */

export function useMotionPolicy() {
  const reduced = usePreferredReducedMotion()
  return computed(() => reduced.value !== 'reduce')
}

export function rafThrottle<T extends (...args: any[]) => void>(fn: T): T {
  let locked = false
  return ((...args) => {
    if (locked) return
    locked = true
    requestAnimationFrame(() => {
      fn(...args)
      locked = false
    })
  }) as T
}

export function omitUIProps<T extends Record<string, any>>(props: T) {
  return reactiveOmit(
    props,
    'class',
    'variant',
    'size',
    'on',
    'base',
    'hover'
  ) as unknown as Omit<
    T,
    'class' | 'variant' | 'size' | 'on' | 'base' | 'hover'
  >
}

export function useBreakpoint(breakpoint) {
  const breakpoints = useBreakpoints({
    x0: 0, // optional
    x640: 640,
    x1024: 1024,
    x1280: 1280,
  })

  // Can be 'mobile' or 'tablet' or 'laptop' or 'desktop'
  const activeBreakpoint = breakpoints.active()

  const greaterOrEqual = breakpoints.greaterOrEqual(breakpoint)
  const greaterThan = breakpoints.greater(breakpoint)
  const lessOrEqual = breakpoints.smallerOrEqual(breakpoint)
  const lessThan = breakpoints.smaller(breakpoint)

  return {
    activeBreakpoint,
    greaterOrEqual,
    greaterThan,
    lessOrEqual,
    lessThan,
  }
}

export interface Scroll {
  top: () => void
}

export function scrollToTop() {
  window.scrollTo({ behavior: 'smooth', top: 0 })
}

export function scrollContainerToTop(container: HTMLElement | null) {
  console.log('hi')
  nextTick(() => {
    container?.scrollTo({ behavior: 'smooth', top: 0 })
  })
}

export function createNoise(str: string) {
  let h = 2166136261
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i)
    h += (h << 1) + (h << 4) + (h << 7) + (h << 8) + (h << 24)
  }
  return (h >>> 0) / 4294967295 // 0 → 1
}

export function cssVar(name: string) {
  return getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim()
}
