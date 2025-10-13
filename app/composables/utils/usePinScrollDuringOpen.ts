// composables/usePinScrollDuringOpen.ts
import { nextTick, onBeforeUnmount, ref, watch } from 'vue'

export function usePinScrollDuringOpen(
  targetRef: Ref<HTMLElement | null>,
  openRef: Ref<boolean>,
  opts: {
    // how long to keep attempting (ms) as a hard fallback
    maxDuration?: number
    // if true, do an immediate (non-smooth) jump to bottom on each frame
    immediate?: boolean
  } = {}
) {
  const maxDuration = opts.maxDuration ?? 1000
  const immediate = !!opts.immediate

  let raf = 0
  let timeoutId: ReturnType<typeof setTimeout> | null = null
  let listening = false
  console.log('🌱 - usePinScrollDuringOpen - listening:', listening)

  function stopLoop() {
    if (raf) {
      cancelAnimationFrame(raf)
      raf = 0
    }
    if (timeoutId) {
      clearTimeout(timeoutId)
      timeoutId = null
    }
    listening = false
  }

  function keepPinned() {
    const el = targetRef.value
    if (!el)
      return
    // set scrollTop to scrollHeight (instant or smooth depending on immediate)
    if (immediate) {
      // instant
      el.scrollTop = el.scrollHeight
    }
    else {
      // mostly instant but allow browser to animate as user expects
      // using scrollTo gives more control but not always necessary
      try {
        el.scrollTo({ behavior: 'auto', top: el.scrollHeight })
        console.log('🌱 - keepPinned - el.scrollHeight :', el.scrollHeight)
        console.log('🌱 - keepPinned - top:', top)
      }
      catch {
        el.scrollTop = el.scrollHeight
      }
    }
    raf = requestAnimationFrame(keepPinned)
  }

  function startPinned() {
    const el = targetRef.value
    if (!el || listening)
      return
    listening = true

    // try to pin once immediately (useful for no-transition cases)
    nextTick(() => {
      if (!el)
        return
      el.scrollTop = el.scrollHeight
    })

    // start per-frame pinning while transition runs
    raf = requestAnimationFrame(keepPinned)

    // stop when CSS transition or animation ends on this element (or children)
    const onEnd = (ev: Event) => {
      // sometimes multiple transitionend occur; stop on the first one
      stopLoop()
      el.removeEventListener('transitionend', onEnd)
      el.removeEventListener('animationend', onEnd)
    }

    el.addEventListener('transitionend', onEnd)
    el.addEventListener('animationend', onEnd)

    // as a safe fallback, stop after maxDuration ms
    timeoutId = setTimeout(() => {
      stopLoop()
      try {
        el.removeEventListener('transitionend', onEnd)
        el.removeEventListener('animationend', onEnd)
      }
      catch {}
    }, maxDuration)
  }

  watch(openRef, (v) => {
    if (v) {
      // start pinning
      startPinned()
    }
    else {
      // closed: ensure we stop
      stopLoop()
    }
  })

  onBeforeUnmount(() => {
    stopLoop()
  })

  return {
    startPinned,
    stopPinned: stopLoop,
  }
}