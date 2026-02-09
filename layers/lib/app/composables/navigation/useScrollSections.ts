// scroll-sections.ts
export const ScrollSectionsKey = Symbol('ScrollSections')

interface Section {
  id: string
  el: HTMLElement
  top: number
}

export interface ScrollSectionsApi {
  activeId: Ref<string | null>
  activeIndex: Ref<number>
  registerAll: (ids: readonly string[]) => void
}

export function useScrollSectionsProvider(
  container: Ref<HTMLElement | null>,
  scrollY: any,
  opts?: { offset?: number }
): ScrollSectionsApi {
  const offset = opts?.offset ?? 0
  const sections = ref<Section[]>([])
  const activeId = ref<string | null>(null)

  function registerAll(ids: readonly string[]) {
    const root = container.value
    if (!root) return

    sections.value = ids
      .map((id) => {
        const el = root.querySelector<HTMLElement>(`#${id}`)
        if (!el) return null
        return { id, el, top: 0 }
      })
      .filter(Boolean) as Section[]

    measure()
    if (!activeId.value) activeId.value = sections.value[0]?.id ?? null
  }

  function measure() {
    const root = container.value
    if (!root) return

    const containerTop = root.getBoundingClientRect().top

    for (const s of sections.value) {
      const r = s.el.getBoundingClientRect()
      s.top = r.top - containerTop + scrollY.get()
    }

    sections.value.sort((a, b) => a.top - b.top)
  }

  const activeIndex = computed(() =>
    sections.value.map(s => s.id).indexOf(activeId.value as any)
  )

  useMotionValueEvent(scrollY, 'change', (y) => {
    const trigger = Number(y) + offset

    let candidate: Section | undefined

    for (const s of sections.value) {
      if (s.top <= trigger) candidate = s
      else break
    }

    // only update when we actually found something
    if (candidate?.id) {
      activeId.value = candidate.id
    }
  })

  onMounted(() => {
    nextTick(() => registerAll(sections.value.map(s => s.id)))
    window.addEventListener('resize', measure)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', measure)
  })

  const api = { activeId, activeIndex, registerAll }

  provide(ScrollSectionsKey, api)
  return api
}

export function useScrollSectionsInject() {
  const api = inject<ScrollSectionsApi | undefined>(ScrollSectionsKey)

  if (!api) throw new Error('No ScrollSections provider found')

  return api
}
