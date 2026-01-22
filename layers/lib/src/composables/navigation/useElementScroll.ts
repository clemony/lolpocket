import { useScroll, type MotionValue } from "motion-v"

// scroll.ts
export const ScrollKey = Symbol("ScrollProvider")

type ScrollState = {
  scrollTop: (instant?: boolean) => void
  scrollToHash: (instant?: boolean) => void
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
    scrollTop,
    scrollToHash,
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
      top,
      behavior: instant ? "auto" : "smooth",
    })
  }
  function scrollTop(instant = false) {
    el.value?.scrollTo({
      top: 0,
      behavior: instant ? "auto" : "smooth",
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
      scrollTop: () => {},
      scrollToHash: () => {},
      scrollY: fallbackScrollY,
      scrollYProgress: fallbackScrollYProgress,
    }
  )
}
