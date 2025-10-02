// scroll.ts
export const ScrollKey = Symbol('ScrollProvider')

export function useScrollProvider(el: Ref<HTMLElement | null>) {
  function scrollTop() {
    if (el.value)
      el.value.scrollTo({ behavior: 'smooth', top: 0 })
  }
  const { scrollY, scrollYProgress } = useScroll({
    container: el
  })
  const state = { scrollTop, scrollY, scrollYProgress }
  provide(ScrollKey, state)
  return state
}

export function useScrollInject() {
  const state = inject<{
    scrollTop: () => void
    scrollYProgress: MotionValue
    scrollY: MotionValue
  }>(ScrollKey)

  if (!state) {
    throw new Error(
      'No Scroll provider found. Make sure useScrollProvider is called in a parent component.'
    )
  }

  return state
}