import type { MotionValue } from 'motion-v'
import { useScroll } from 'motion-v'

// scroll.ts
export const ScrollKey = Symbol('ScrollProvider')

interface ScrollState {
  scrollToHash: (instant?: boolean) => void
  scrollTop: (instant?: boolean) => void
  scrollY: MotionValue<number>
  scrollYProgress: MotionValue<number>
}

// module-level fallbacks (stable identity)
const fallbackScrollY = useMotionValue(0)
const fallbackScrollYProgress = useMotionValue(0)

export function useScrollProvider(
  el: Ref<HTMLElement | null>,
  opts?: { offset?: number }
) {
  const route = useRoute()
  const offset = opts?.offset ?? 0

  const { scrollY, scrollYProgress } = useScroll({
    container: el,
  })

  const state: ScrollState = {
    scrollToHash,
    scrollTop,
    scrollY,
    scrollYProgress,
  }

  function scrollToHash(instant = false) {
    const hash = route.hash
    const container = el.value
    if (!hash || !container) return

    const target = container.querySelector<HTMLElement>(hash)
    if (!target) return

    const top = target.offsetTop - container.offsetTop - offset

    container.scrollTo({
      behavior: instant ? 'auto' : 'smooth',
      top,
    })
  }
  function scrollTop(instant = false) {
    el.value?.scrollTo({
      behavior: instant ? 'auto' : 'smooth',
      top: 0,
    })
  }
  // 🔥 scroll on initial mount
  onMounted(() => {
    nextTick(() => scrollToHash(true))
  })

  // 🔥 scroll when hash changes
  watch(
    () => route.hash,
    () => nextTick(() => scrollToHash())
  )

  provide(ScrollKey, state)
  return state
}

export function useScrollInject(): ScrollState {
  return (
    inject<ScrollState>(ScrollKey) ?? {
      scrollToHash: () => {},
      scrollTop: () => {},
      scrollY: fallbackScrollY,
      scrollYProgress: fallbackScrollYProgress,
    }
  )
}
