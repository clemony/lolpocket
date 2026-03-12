import type { MaybeRefOrGetter, Ref } from "vue"
import { nextTick, toValue } from "vue"
import { useEventListener } from "@vueuse/core"

const ITEM_SELECTOR = '[data-slot="item"][role="option"]'

type Edge = "first" | "last"

function isVisible(element: HTMLElement) {
  return element.getClientRects().length > 0
}

function getMenuItems(panel: HTMLElement | null | undefined) {
  if (!panel) return []

  return [...panel.querySelectorAll<HTMLElement>(ITEM_SELECTOR)].filter(
    (item) => !item.hasAttribute("data-disabled") && isVisible(item),
  )
}

function focusTrigger(input: HTMLInputElement | null | undefined) {
  if (!input) return false
  input.focus({ preventScroll: true })
  return true
}

function focusMenuEdge(panel: HTMLElement | null | undefined, edge: Edge) {
  const items = getMenuItems(panel)
  const target = edge === "first" ? items[0] : items.at(-1)

  if (!target) return false

  target.focus({ preventScroll: true })
  target.scrollIntoView({ block: "nearest" })
  return true
}

async function focusMenuEdgeWithRetry(
  panel: HTMLElement | null | undefined,
  edge: Edge,
) {
  if (focusMenuEdge(panel, edge)) return

  await nextTick()
  focusMenuEdge(panel, edge)
}

export function useCommandFocusNavigation(options: {
  open: Ref<boolean>
  panel: Ref<HTMLElement | null>
  trigger: MaybeRefOrGetter<HTMLInputElement | null | undefined>
}) {
  const onTriggerKeydown = (event: KeyboardEvent) => {
    if (!options.open.value) return

    const panel = options.panel.value
    const key = event.key
    const canMoveForward = key === "ArrowDown" || (key === "Tab" && !event.shiftKey)
    const canMoveBackward = key === "ArrowUp" || (key === "Tab" && event.shiftKey)

    if (!canMoveForward && !canMoveBackward) return

    const edge: Edge = canMoveForward ? "first" : "last"
    const hasItems = getMenuItems(panel).length > 0
    if (!hasItems) return

    event.preventDefault()
    void focusMenuEdgeWithRetry(panel, edge)
  }

  const onPanelKeydown = (event: KeyboardEvent) => {
    if (!options.open.value) return

    const panel = options.panel.value
    const trigger = toValue(options.trigger)
    if (!panel || !trigger) return

    const target = event.target
    if (!(target instanceof Node) || !panel.contains(target)) return

    const key = event.key
    const items = getMenuItems(panel)
    if (!items.length) return

    const activeElement = document.activeElement
    const first = items[0]
    const last = items.at(-1)

    if (key === "Tab") {
      event.preventDefault()
      focusTrigger(trigger)
      return
    }

    if (key === "ArrowUp" && activeElement === first) {
      event.preventDefault()
      focusTrigger(trigger)
      return
    }

    if (key === "ArrowDown" && activeElement === last) {
      event.preventDefault()
      focusTrigger(trigger)
    }
  }

  useEventListener(
    () => toValue(options.trigger),
    "keydown",
    onTriggerKeydown,
  )

  useEventListener(options.panel, "keydown", onPanelKeydown)
}
