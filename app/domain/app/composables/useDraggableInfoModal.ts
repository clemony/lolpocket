import type {
  ComponentPublicInstance,
  MaybeRefOrGetter,
  Ref,
} from "vue"
import {
  computed,
  nextTick,
  onBeforeUnmount,
  onMounted,
  shallowRef,
  toValue,
  watch,
} from "vue"

interface UseDraggableInfoModalOptions {
  modalKey: MaybeRefOrGetter<string>
  open: MaybeRefOrGetter<boolean>
  placementIndex?: MaybeRefOrGetter<number | undefined>
  placementCycle?: number
  placementStep?: number
  viewportMargin?: number
}

type ModalRef = Ref<HTMLElement | ComponentPublicInstance | null>

function resolveElement(
  target: Element | ComponentPublicInstance | null
): HTMLElement | null {
  if (target instanceof HTMLElement) return target
  if (target instanceof Element) return null

  const candidate = target?.$el
  return candidate instanceof HTMLElement ? candidate : null
}

function clampPlacementOffset(value: number, min: number, max: number) {
  if (min > max) return (min + max) / 2

  return Math.min(Math.max(value, min), max)
}

export function useDraggableInfoModal(options: UseDraggableInfoModalOptions) {
  const modalRef: ModalRef =
    shallowRef<HTMLElement | ComponentPublicInstance | null>(null)
  const viewportMargin = options.viewportMargin ?? 16
  const placementStep = options.placementStep ?? 28
  const placementCycle = options.placementCycle ?? 8
  const placementOffset = shallowRef({
    x: 0,
    y: 0,
  })
  const dragConstraints = shallowRef({
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
  })
  let measureFrame = 0
  let settleMeasureFrame = 0
  let resizeObserver: ResizeObserver | undefined

  function resolvePlacementOffset(width: number, height: number) {
    const placement = (toValue(options.placementIndex) ?? 0) % placementCycle
    const desiredOffset = placement * placementStep
    const centeredLeft = (window.innerWidth - width) / 2
    const centeredTop = (window.innerHeight - height) / 2
    const minX = viewportMargin - centeredLeft
    const maxX = window.innerWidth - viewportMargin - (centeredLeft + width)
    const minY = viewportMargin - centeredTop
    const maxY = window.innerHeight - viewportMargin - (centeredTop + height)

    return {
      x: clampPlacementOffset(desiredOffset, minX, maxX),
      y: clampPlacementOffset(desiredOffset, minY, maxY),
    }
  }

  function updateDragConstraints() {
    const element = resolveElement(modalRef.value)
    if (!element) return

    const width = element.offsetWidth
    const height = element.offsetHeight
    if (!width || !height) return

    const centeredLeft = (window.innerWidth - width) / 2
    const centeredTop = (window.innerHeight - height) / 2
    const offset = resolvePlacementOffset(width, height)
    placementOffset.value = offset
    const placedLeft = centeredLeft + offset.x
    const placedTop = centeredTop + offset.y

    dragConstraints.value = {
      bottom: window.innerHeight - viewportMargin - (placedTop + height),
      left: viewportMargin - placedLeft,
      right: window.innerWidth - viewportMargin - (placedLeft + width),
      top: viewportMargin - placedTop,
    }
  }

  function cancelScheduledMeasure() {
    if (measureFrame) cancelAnimationFrame(measureFrame)
    if (settleMeasureFrame) cancelAnimationFrame(settleMeasureFrame)
    measureFrame = 0
    settleMeasureFrame = 0
  }

  async function refreshDragConstraints() {
    await nextTick()
    cancelScheduledMeasure()
    measureFrame = requestAnimationFrame(() => {
      updateDragConstraints()

      settleMeasureFrame = requestAnimationFrame(() => {
        updateDragConstraints()
        measureFrame = 0
        settleMeasureFrame = 0
      })
    })
  }

  watch(
    () => toValue(options.open),
    (value) => {
      if (value) refreshDragConstraints()
    }
  )

  watch(
    () => toValue(options.modalKey),
    () => {
      if (toValue(options.open)) refreshDragConstraints()
    }
  )

  watch(
    () => toValue(options.placementIndex),
    () => {
      if (toValue(options.open)) refreshDragConstraints()
    }
  )

  watch(
    () => resolveElement(modalRef.value),
    (element) => {
      resizeObserver?.disconnect()
      resizeObserver = undefined

      if (!element) return

      resizeObserver = new ResizeObserver(() => {
        refreshDragConstraints()
      })
      resizeObserver.observe(element)
    },
    { flush: "post" }
  )

  onMounted(() => {
    window.addEventListener("resize", refreshDragConstraints)
  })

  onBeforeUnmount(() => {
    cancelScheduledMeasure()
    resizeObserver?.disconnect()
    window.removeEventListener("resize", refreshDragConstraints)
  })

  const modalStyle = computed(() => ({
    translate: `calc(-50% + ${placementOffset.value.x}px) calc(-50% + ${placementOffset.value.y}px)`,
  }))

  return {
    dragConstraints,
    modalRef,
    modalStyle,
    placementOffset,
    refreshDragConstraints,
    updateDragConstraints,
  }
}

export { clampPlacementOffset }
