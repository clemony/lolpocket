import type { CarouselApi } from "~/types/ui.types"

export const carouselEvents = [
  "init",
  "reInit",
  "select",
  "scroll",
  "resize",
] as const
export const useCarousel = (
  carousel: {
    ref: HTMLElement
    api: CarouselApi | undefined
  } | null,
  data: any
) => {
  const root = computed(() => carousel?.ref)
  const api = computed(() => carousel?.api)
  const canScrollPrev = shallowRef(false)
  const canScrollNext = shallowRef(false)

  let carouselApi: CarouselApi | undefined

  function updateCarouselMask() {
    if (!api.value) return
    canScrollPrev.value = api?.value.canScrollPrev() ?? false
    canScrollNext.value = api?.value.canScrollNext() ?? false
  }

  function unbindCarouselApi() {
    if (!carouselApi) return

    carouselEvents.forEach((event) =>
      carouselApi?.off(event, updateCarouselMask)
    )
    carouselApi = undefined
  }

  function bindCarouselApi(api?: CarouselApi) {
    if (!api || api === carouselApi) return

    unbindCarouselApi()
    carouselApi = api
    carouselEvents.forEach((event) => api.on(event, updateCarouselMask))
    updateCarouselMask()
  }

  watch(
    () => carousel?.api,
    (api) => bindCarouselApi(api),
    { flush: "post", immediate: true }
  )

  onMounted(async () => {
    await nextTick()
    bindCarouselApi(carousel?.api)
    updateCarouselMask()
  })

  onBeforeUnmount(unbindCarouselApi)

  const carouselViewportMask = computed(() => {
    if (canScrollPrev.value && canScrollNext.value) return "mask-x-from-90%"
    if (canScrollPrev.value) return "mask-l-from-94% mask-l-to-98%"
    if (canScrollNext.value) return "mask-r-to-97% mask-r-from-94%"
    return ""
  })

  function next() {
    if (canScrollNext.value) {
      carousel?.api?.scrollNext()
    }
  }

  function prev() {
    if (canScrollPrev.value) {
      carousel?.api?.scrollPrev()
    }
  }
  return {
    next,
    prev,
    canScrollNext,
    canScrollPrev,
    carouselViewportMask,
    updateCarouselMask,
    bindCarouselApi,
    unbindCarouselApi,
    carousel,
    carouselApi,
    carouselEvents,
  }
}
