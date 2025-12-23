import { clamp } from "motion-v"

// scroll-sections.ts
export const ScrollSectionsKey = Symbol("ScrollSections")

type SectionEntry = {
  id: string
  el: HTMLElement
  top: number
  bottom: number
}

export function useScrollSectionsProvider(
  container: Ref<HTMLElement | null>,
  scrollY: MotionValue<number>
) {
  const sections = ref<SectionEntry[]>([])
  const activeIndex = ref(0)
  const progressBetween = ref(0)

  function registerSection(id: string, el: HTMLElement) {
    sections.value.push({ id, el, top: 0, bottom: 0 })
  }

  function measure() {
    if (!container.value) return
    const containerTop = container.value.getBoundingClientRect().top

    for (const s of sections.value) {
      const r = s.el.getBoundingClientRect()
      s.top = r.top - containerTop + scrollY.get()
      s.bottom = s.top + r.height
    }

    sections.value.sort((a, b) => a.top - b.top)
  }

  useMotionValueEvent(scrollY, "change", (y) => {
    const list = sections.value
    if (!list.length || !container.value) return

    const viewportMid = y + container.value.clientHeight / 2

    let i = list.findIndex(
      (s, idx) =>
        viewportMid >= s.top &&
        (idx === list.length - 1 || viewportMid < list[idx + 1].top)
    )

    if (i === -1) i = list.length - 1
    activeIndex.value = i

    const curr = list[i]
    const next = list[i + 1]
    if (!next) {
      progressBetween.value = 1
    } else {
      progressBetween.value = clamp(
        (viewportMid - curr.top) / (next.top - curr.top),
        0,
        1
      )
    }
  })

  const progressOverall = computed(() => {
    const count = sections.value.length
    if (count <= 1) return 0

    return clamp(
      ((activeIndex.value + progressBetween.value) / (count - 1)) * 100,
      0,
      100
    )
  })

  onMounted(() => {
    nextTick(measure)
    window.addEventListener("resize", measure)
  })

  onUnmounted(() => {
    window.removeEventListener("resize", measure)
  })

  provide(ScrollSectionsKey, {
    registerSection,
    activeIndex,
    progressBetween,
    sections,
    progressOverall,
  })

  return {
    activeIndex,
    progressBetween,
    progressOverall,
    sections,
  }
}

export function useScrollSection(id: string, el: Ref<HTMLElement | null>) {
  const ctx = inject<any>(ScrollSectionsKey)
  if (!ctx) throw new Error("Missing ScrollSections provider")

  onMounted(() => {
    if (el.value) ctx.registerSection(id, el.value)
  })

  const index = computed(() =>
    ctx.sections.value.findIndex((s: any) => s.id === id)
  )

  const isActive = computed(() => index.value === ctx.activeIndex.value)

  return {
    isActive,
    activeIndex: ctx.activeIndex,
    progressBetween: ctx.progressBetween,
  }
}

export function useScrollSectionsInject() {
  const ctx = inject<{
    sections: Ref<{ id: string }[]>
    activeIndex: Ref<number>
    progressBetween: Ref<number>
    progressOverall: ComputedRef<number>
  }>(ScrollSectionsKey)

  if (!ctx) throw new Error("No ScrollSections provider found")

  return ctx
}
