// /app/plugins/tooltips.client.ts
import { defineNuxtPlugin } from "#app"
import {
  arrow,
  autoUpdate,
  flip,
  offset,
  shift,
  useFloating,
} from "@floating-ui/vue"
import { createApp, h, markRaw, nextTick, shallowRef } from "vue"
import TooltipArrow from "~/base/popup/tooltip/TooltipArrow.vue"

export default defineNuxtPlugin(() => {
  if (typeof window === "undefined") return

  const referenceEl = shallowRef<HTMLElement | null>(null)
  const floatingEl = shallowRef<HTMLElement | null>(null)
  const arrowEl = shallowRef<HTMLElement | null>(null)

  const visible = shallowRef(false)
  const isPositioned = shallowRef(false)
  const justShown = shallowRef(false)
  // separate mounted vs shown
  const mounted = shallowRef(false) // DOM exists
  const shown = shallowRef(false) // visible (opacity / data-state)

  const compRef = shallowRef<any | null>(null)
  const propsRef = shallowRef<Record<string, any>>({})
  const activeTrigger = shallowRef<HTMLElement | null>(null)
  const activeType = shallowRef<string | null>(null)

  // one-time entry animation flag
  const animateIn = shallowRef(false)

  const cache = new Map<string, any>()

  const { floatingStyles, update, placement, middlewareData } = useFloating(
    referenceEl,
    floatingEl,
    {
      placement: "top",
      middleware: [
        offset(8),
        flip({
          fallbackPlacements: ["top", "right", "bottom", "left"],
          fallbackAxisSideDirection: "end",
        }),
        shift({ padding: 6 }),
        arrow({ element: arrowEl }),
      ],
      transform: true, // enables moveTransition via CSS
      whileElementsMounted: autoUpdate,
    }
  )

  async function loadTooltip(type: string) {
    const cached = cache.get(type)
    if (cached) return cached

    let c: any
    switch (type) {
      case "item":
        c = (await import("~/components/lol/items/display/ItemTooltip.vue"))
          .default
        break
      case "champion":
        c = (
          await import("~/components/lol/champions/display/ChampionTooltip.vue")
        ).default
        break
      case "ability":
        c = (
          await import("~/components/lol/champions/display/AbilityTooltip.vue")
        ).default
        break
      case "spell":
        c = (await import("~/components/lol/spells/SpellData.vue")).default
        break
      case "rune":
        c = (await import("~/components/lol/runes/display/RuneData.vue"))
          .default
        break
      default:
        c = { render: () => "Unknown tooltip" }
    }

    c = markRaw(c)
    cache.set(type, c)
    return c
  }

  const TooltipRoot = {
    name: "GlobalFloatingTooltip",
    setup() {
      return () => {
        // don't render at all if not mounted or no component yet
        if (!mounted.value || !compRef.value) return null

        const { x, y } = middlewareData.value.arrow || {}
        const arrowStyle: Record<string, string> = {}
        if (x != null) arrowStyle.left = `${x}px`
        if (y != null) arrowStyle.top = `${y}px`

        return h(
          "div",
          {
            ref: floatingEl,
            style: {
              ...floatingStyles.value,
              zIndex: 9999,
              pointerEvents: "none",
              // ONLY transform moveTransition here (between triggers),
              // not entry animation.
              transition:
                shown.value ?
                  "transform 150ms cubic-bezier(0.22, 0.61, 0.36, 1)"
                : "transform 0ms linear",
            },
          },
          [
            h(
              "div",
              {
                class: "tippy-box ",
                "data-inertia": "",
                "data-state": shown.value ? "visible" : "hidden",
                "data-theme": propsRef.value.theme ?? "datatip neutral",
                "data-placement": placement.value,
                // tells CSS whether to run the shift-toward keyframes
                "data-animate": animateIn.value ? "in" : "move",
                style: {
                  pointerEvents: "auto",
                  // opacity controlled here for entry/exit only
                  opacity: shown.value ? 1 : 0,
                },
              },
              [
                // Arrow host — positioned by middleware
                h(
                  "div",
                  {
                    class: "tippy-svg-arrow",
                    ref: (el: Element | null) => {
                      // TS-safe cast
                      arrowEl.value = (el as HTMLElement) || null
                    },
                    style: arrowStyle,
                  },
                  [h(TooltipArrow)]
                ),

                h("div", { class: "tippy-content" }, [
                  h(compRef.value, {
                    ...propsRef.value,
                    key: `${activeType.value}:${propsRef.value.id ?? ""}`,
                  }),
                ]),
              ]
            ),
          ]
        )
      }
    },
  }

  const root = document.createElement("div")
  root.setAttribute("data-tooltip-root", "1")
  document.body.appendChild(root)
  createApp(TooltipRoot).mount(root)

  // =====================================================
  //   Interaction pipeline
  // =====================================================

  let hideTimer: number | null = null
  let longPressTimer: number | null = null
  const HOT_SELECTOR = "[data-tip][data-id]"

  function clearHideTimer() {
    if (hideTimer != null) {
      clearTimeout(hideTimer)
      hideTimer = null
    }
  }

  function scheduleHide() {
    clearHideTimer()
    hideTimer = window.setTimeout(() => {
      shown.value = false
      visible.value = false
      // leave mounted = true so next show is faster
      activeTrigger.value = null
      activeType.value = null
    }, 80)
  }

  async function activate(el: HTMLElement) {
    const type = el.dataset.tip
    if (!type) return

    const isReenteringSame =
      shown.value && activeTrigger.value === el && activeType.value === type

    activeTrigger.value = el
    activeType.value = type
    referenceEl.value = el
    isPositioned.value = false

    propsRef.value = {
      id: el.dataset.id ? Number(el.dataset.id) : undefined,
      ability: el.dataset.ability,
      map: el.dataset.map ? Number(el.dataset.map) : undefined,
      theme: el.dataset.theme,
    }
    justShown.value = true
    visible.value = true
    mounted.value = true

    // Decide if we should run shift-toward animation:
    // - first time visible in this cycle -> animate
    // - moving between triggers while already shown -> no animate
    animateIn.value = !shown.value && !isReenteringSame

    if (!visible.value || activeTrigger.value !== el) return

    // Show shell, but keep opacity 0 until position is ready
    const component = await loadTooltip(type)
    compRef.value = component

    await nextTick()
    // first computePosition for the current trigger
    await update()

    // 👉 Now floating UI produced a real transform, allow animation
    requestAnimationFrame(() => {
      isPositioned.value = true
      justShown.value = false
    })

    // user might have moved off meanwhile
    if (activeTrigger.value !== el || activeType.value !== type) {
      return
    }

    // now that position is correct, fade in / run shift-toward
    shown.value = true
  }

  document.addEventListener(
    "pointerover",
    (e) => {
      const target = e.target as HTMLElement | null
      if (!target) return

      const trigger = target.closest(HOT_SELECTOR) as HTMLElement | null
      if (!trigger) return

      clearHideTimer()

      if (e.pointerType === "touch") {
        if (longPressTimer != null) clearTimeout(longPressTimer)
        longPressTimer = window.setTimeout(() => {
          activate(trigger)
        }, 250)
      } else {
        activate(trigger)
      }
    },
    { passive: true, capture: true }
  )

  document.addEventListener(
    "pointerout",
    (e) => {
      const from = e.target as HTMLElement | null
      if (!from) return

      const trigger = from.closest(HOT_SELECTOR) as HTMLElement | null
      if (!trigger) return

      const to = e.relatedTarget as HTMLElement | null
      if (to && trigger.contains(to)) return
      if (to && to.closest(HOT_SELECTOR)) return
      if (to && root.contains(to)) return

      scheduleHide()
    },
    { passive: true, capture: true }
  )

  root.addEventListener("pointerover", () => {
    clearHideTimer()
  })

  root.addEventListener("pointerout", (e) => {
    const to = e.relatedTarget as HTMLElement | null
    if (to && to.closest(HOT_SELECTOR)) return
    scheduleHide()
  })

  document.addEventListener(
    "pointerup",
    (e) => {
      if (longPressTimer != null) {
        clearTimeout(longPressTimer)
        longPressTimer = null
      }
      if (e.pointerType === "touch") {
        scheduleHide()
      }
    },
    { passive: true }
  )

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && shown.value) {
      shown.value = false
      activeTrigger.value = null
      activeType.value = null
    }
  })
})
