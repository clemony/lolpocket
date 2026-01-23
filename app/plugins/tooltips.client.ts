import type { Placement } from '@floating-ui/dom'
import { defineNuxtPlugin } from '#app'
import {
  arrow,
  autoUpdate,
  flip,
  offset,
  shift,
  useFloating,
} from '@floating-ui/vue'
import { createApp, h, markRaw, nextTick, shallowRef } from 'vue'
// import TooltipArrow from "~/base/tooltip/TooltipArrow.vue"
import MiniTip from '~/components/common/tooltip/TooltipRenderer.vue'
import { tooltipPayloadRegistry } from '~/utils/tooltipPayload'

export default defineNuxtPlugin(() => {
  if (typeof window === 'undefined')
    return

  const referenceEl = shallowRef<HTMLElement | null>(null)
  const floatingEl = shallowRef<HTMLElement | null>(null)
  const arrowEl = shallowRef<HTMLElement | null>(null)

  let hoverToken = 0

  const frozenTransform = shallowRef<string | null>(null)
  const lastTransform = shallowRef<string | null>(null)
  const lastPosition = shallowRef<{ x: number, y: number } | null>(null)

  const axisMode = shallowRef<'x' | 'y' | 'none'>('none')
  const AXIS_EPSILON = 2 // px

  const visible = shallowRef(false)
  const isPositioned = shallowRef(false)
  const justShown = shallowRef(false)
  const mounted = shallowRef(false) // DOM exists
  const shown = shallowRef(false) // visible (opacity / data-state)

  const requestedPlacement = shallowRef<Placement>('top')

  const compRef = shallowRef<any | null>(null)
  const propsRef = shallowRef<Record<string, any>>({})
  const activeTrigger = shallowRef<HTMLElement | null>(null)
  const activeType = shallowRef<string | null>(null)

  // one-time entry animation flag
  const animateIn = shallowRef(false)

  const cache = new Map<string, any>()

  const { middlewareData, floatingStyles, placement, update } = useFloating(
    referenceEl,
    floatingEl,
    {
      middleware: [
        offset(8),
        flip({
          flipAlignment: false,
        }),
        shift({ padding: 6 }),
        arrow({ element: arrowEl }),
      ],
      placement: requestedPlacement,
      transform: true, // enables moveTransition via CSS
      whileElementsMounted: autoUpdate,
    }
  )

  watch(activeTrigger, (el) => {
    if (el && !el.isConnected) {
      shown.value = false
      visible.value = false
      activeTrigger.value = null
      activeType.value = null
    }
  })

  async function loadTooltip(type: string) {
    const cached = cache.get(type)
    if (cached)
      return cached

    const c = markRaw(MiniTip)
    cache.set(type, c)
    return c
  }

  const TooltipRoot = {
    name: 'GlobalFloatingTooltip',
    setup() {
      return () => {
        // don't render at all if not mounted or no component yet
        if (!mounted.value || !compRef.value)
          return null

        const arrowData = isPositioned.value ? middlewareData.value.arrow : null

        const { x, y } = arrowData || {}
        const arrowStyle: Record<string, string> = {}
        if (x != null)
          arrowStyle.left = `${x}px`
        if (y != null)
          arrowStyle.top = `${y}px`

        const resolvedTransform
          = (isPositioned.value && floatingStyles.value.transform)
            || frozenTransform.value
            || lastTransform.value
            || 'translate3d(0px, 0px, 0)'

        return h(
          'div',
          {
            ref: floatingEl,
            style: {
              ...floatingStyles.value,
              pointerEvents:
                shown.value && propsRef.value.interactive ? 'auto' : 'none',
              transform: resolvedTransform,
              transition:
                shown.value && axisMode.value === 'x' && !animateIn.value
                  ? 'transform 150ms cubic-bezier(0.22, 0.61, 0.36, 1)'
                  : 'transform 0ms linear',
              zIndex: 9999,
            },
          },
          [
            h(
              'div',
              {
                'class': 'tippy-box ',
                // tells CSS whether to run the shift-toward keyframes
                'data-animate':
                  animateIn.value || axisMode.value === 'y' ? 'in' : 'move',
                'data-inertia': '',
                'data-placement': placement.value,
                'data-state': shown.value ? 'visible' : 'hidden',
                'data-theme': propsRef.value.theme ?? 'mini-tip neutral ',
                'style': {
                  // opacity controlled here for entry/exit only
                  opacity: shown.value ? 1 : 0,
                },
              },
              [
                // Arrow host — positioned by middleware
                h(
                  'div',
                  {
                    class: 'tippy-svg-arrow',
                    ref: (el: Element | null) => {
                      // TS-safe cast
                      arrowEl.value = (el as HTMLElement) || null
                    },
                    style: arrowStyle,
                  }
                  // [h(TooltipArrow)]
                ),

                h('div', { class: 'tippy-content' }, [
                  h(compRef.value, {
                    ...propsRef.value,
                    key: `${activeType.value}:${propsRef.value.id ?? ''}`,
                  }),
                ]),
              ]
            ),
          ]
        )
      }
    },
  }

  const root = document.createElement('div')
  root.setAttribute('data-tooltip-root', '1')
  document.body.appendChild(root)
  createApp(TooltipRoot).mount(root)

  // =====================================================
  //   Interaction pipeline
  // =====================================================

  let hideTimer: number | null = null
  let showTimer: number | null = null
  let longPressTimer: number | null = null
  const HOT_SELECTOR = '[data-type]'

  function clearHideTimer() {
    if (hideTimer != null) {
      clearTimeout(hideTimer)
      hideTimer = null
    }
  }

  function clearShowTimer() {
    if (showTimer != null) {
      clearTimeout(showTimer)
      showTimer = null
    }
  }

  function scheduleHide() {
    clearHideTimer()

    const delay = propsRef.value.interactive ? 150 : 80

    hideTimer = window.setTimeout(() => {
      shown.value = false
      visible.value = false
      activeTrigger.value = null
      activeType.value = null
    }, delay)
  }

  function isAnchorAlive(el: HTMLElement | null) {
    return !!el && el.isConnected
  }

  if (shown.value && axisMode.value === 'x') {
    frozenTransform.value = floatingEl.value?.style.transform ?? null
  }

  async function activate(el: HTMLElement) {
    const type = el.dataset.type
    if (!type)
      return

    const triggerPlacement = el.dataset.placement as Placement | undefined
    requestedPlacement.value = triggerPlacement || 'top'

    if (!isAnchorAlive(el)) {
      shown.value = false
      visible.value = false
      activeTrigger.value = null
      activeType.value = null
      return
    }

    activeTrigger.value = el
    activeType.value = type
    referenceEl.value = el
    isPositioned.value = false

    const payload = tooltipPayloadRegistry.get(el)

    propsRef.value = {
      id: el.dataset.id,
      name: el.dataset.name,
      class: el.dataset.class,
      icon: el.dataset.icon,
      img: el.dataset.img,
      interactive: el.dataset.interactive === 'true',
      map: el.dataset.map,
      payload,
      size: el.dataset.size,
      tag: el.dataset.tag,
      text: el.dataset.text,
      theme: el.dataset.theme,
      type: el.dataset.type,
    }

    justShown.value = true
    mounted.value = true
    animateIn.value = !shown.value

    if (activeTrigger.value !== el)
      return

    const component = await loadTooltip(type)
    compRef.value = component

    await nextTick()
    await update()

    const t = floatingEl.value?.style.transform
    if (t) {
      const match = t.match(/translate3d?\(([-\d.]+)px,\s*([-\d.]+)px/)
      if (match) {
        const [, xStr, yStr] = match
        const x = Number(xStr)
        const y = Number(yStr)

        if (lastPosition.value) {
          const dx = Math.abs(x - lastPosition.value.x)
          const dy = Math.abs(y - lastPosition.value.y)

          // axis detection threshold (tweakable)
          axisMode.value
            = dx > dy + AXIS_EPSILON
              ? 'x'
              : dy > dx + AXIS_EPSILON
                ? 'y'
                : 'none'
        }

        lastPosition.value = { x, y }
      }
    }

    requestAnimationFrame(() => {
      if (activeTrigger.value !== el)
        return

      isPositioned.value = true
      frozenTransform.value = null
      visible.value = true
      shown.value = true
      animateIn.value = false
      justShown.value = false
    })
  }

  document.addEventListener(
    'pointerover',
    (e) => {
      const target = e.target as HTMLElement | null
      if (!target)
        return

      const trigger = target.closest(HOT_SELECTOR) as HTMLElement | null
      if (!trigger)
        return

      hoverToken++
      const token = hoverToken

      clearHideTimer()

      if (shown.value && activeTrigger.value === trigger) {
        activate(trigger)
        return
      }

      if (e.pointerType === 'touch') {
        if (longPressTimer != null)
          clearTimeout(longPressTimer)
        longPressTimer = window.setTimeout(() => {
          activate(trigger)
        }, 250)
      }
      else {
        clearShowTimer()

        const delay
          = trigger.dataset.delay != null ? Number(trigger.dataset.delay) : 140 // 👈 default hover intent delay

        showTimer = window.setTimeout(() => {
          if (token !== hoverToken)
            return
          if (!trigger.matches(':hover'))
            return
          activate(trigger)
        }, delay)
      }
    },
    { capture: true, passive: true }
  )

  document.addEventListener(
    'pointerout',
    (e) => {
      const from = e.target as HTMLElement | null
      if (!from)
        return

      const trigger = from.closest(HOT_SELECTOR) as HTMLElement | null
      if (!trigger)
        return

      const to = e.relatedTarget as HTMLElement | null
      if (to && trigger.contains(to))
        return
      if (to && to.closest(HOT_SELECTOR))
        return
      if (to && root.contains(to))
        return

      hoverToken++
      clearShowTimer()
      scheduleHide()
    },
    { capture: true, passive: true }
  )

  root.addEventListener('pointerover', () => {
    clearHideTimer()
  })

  root.addEventListener('pointerout', (e) => {
    const to = e.relatedTarget as HTMLElement | null
    if (to && to.closest(HOT_SELECTOR))
      return
    hoverToken++
    clearShowTimer()
    scheduleHide()
  })

  document.addEventListener(
    'pointerup',
    (e) => {
      if (longPressTimer != null) {
        clearTimeout(longPressTimer)
        longPressTimer = null
      }
      if (e.pointerType === 'touch') {
        hoverToken++
        clearShowTimer()
        scheduleHide()
      }
    },
    { passive: true }
  )

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && shown.value) {
      shown.value = false
      activeTrigger.value = null
      activeType.value = null
    }
  })

  root.addEventListener('focusin', () => {
    clearHideTimer()
  })

  root.addEventListener('focusout', () => {
    hoverToken++
    clearShowTimer()
    scheduleHide()
  })
})
