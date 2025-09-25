import { useScroll } from '@vueuse/core'

export function useScrollHandoff(
  parentRef: Ref<HTMLElement | null>,
  childRef: Ref<HTMLElement | null>,
  sentinelRef?: Ref<HTMLElement | null>,
) {
  const unlockChild = shallowRef(false)
  const scrollState = useScroll(parentRef, {})
  const UP_OFFSET = 150

  const { directions } = useScroll(childRef)

  watch(() => directions.top, (newVal) => {
    console.log('💠 - watch - newVal:', newVal)
    if (newVal === true)
      unlockChild.value = true
  })

  watch(() => directions.bottom, (newVal) => {
    console.log('💠 - watch - newVal:', newVal)
    if (newVal === true)
      unlockChild.value = false
  })
  /*
  let onWheel: (e: WheelEvent) => void
  let onTouchMove: (e: TouchEvent) => void
  onMounted(() => {
    const parent = parentRef.value
    const child = childRef.value
    if (!parent || !child)
      return */

  // --- Wheel ---
  /*     onWheel = (e: WheelEvent) => {
      const atTop = child.scrollTop <= 0
      const atBottom = child.scrollTop >= child.scrollHeight - child.clientHeight - 1

      if ((e.deltaY < 0 && atTop) || (e.deltaY > 0 && atBottom)) {
        parent.scrollBy({ top: e.deltaY })
        e.preventDefault()
      }
      updateHandoff()
    }
    child.addEventListener('wheel', onWheel, { passive: false }) */

  // --- Touch ---
  /*     let lastY = 0
    onTouchMove = (e: TouchEvent) => {
      const currentY = e.touches[0].clientY
      const deltaY = lastY - currentY
      const atTop = child.scrollTop <= 0
      const atBottom = child.scrollTop >= child.scrollHeight - child.clientHeight - 1

      if ((deltaY < 0 && atTop) || (deltaY > 0 && atBottom)) {
        parent.scrollBy({ top: deltaY })
        e.preventDefault()
      }
      lastY = currentY
      updateHandoff()
    }
    child.addEventListener('touchmove', onTouchMove, { passive: false })

    // Keep sentinel reactive to direction
    watch(() => scrollState.directions.top, () => updateHandoff())
  })
 *//*
  onBeforeUnmount(() => {
    const child = childRef.value
    if (!child)
      return
    if (onWheel)
      child.removeEventListener('wheel', onWheel)
    if (onTouchMove)
      child.removeEventListener('touchmove', onTouchMove)
  })
 */
  return { unlockChild }
}