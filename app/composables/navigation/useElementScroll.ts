// scroll.ts
export const ScrollKey = Symbol("ScrollProvider")

export function useScrollProvider(
  el: Ref<HTMLElement | null>,
  opts?: { offset?: number }
) {
  const route = useRoute()
  const offset = opts?.offset ?? 0

  const { scrollY, scrollYProgress } = useMotionScroll({
    container: el,
  })

  function scrollTop(instant = false) {
    el.value?.scrollTo({
      top: 0,
      behavior: instant ? "auto" : "smooth",
    })
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

  // 🔥 scroll on initial mount
  onMounted(() => {
    nextTick(() => scrollToHash(true))
  })

  // 🔥 scroll when hash changes
  watch(
    () => route.hash,
    () => nextTick(() => scrollToHash())
  )

  const state = {
    scrollTop,
    scrollToHash,
    scrollY,
    scrollYProgress,
  }

  provide(ScrollKey, state)
  return state
}

export function useScrollInject() {
  const state = inject<{
    scrollTop: (instant?: boolean) => void
    scrollToHash: (instant?: boolean) => void
    scrollY: MotionValue
    scrollYProgress: MotionValue
  }>(ScrollKey)

  if (!state) {
    throw new Error("No Scroll provider found.")
  }

  return state
}
