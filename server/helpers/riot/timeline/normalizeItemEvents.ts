import type { NormalizedItemEvent, PlayerItemEvent } from "../../../types"

export function normalizeItemEvents(
  events: PlayerItemEvent[]
): NormalizedItemEvent[] {
  const result: NormalizedItemEvent[] = []

  const add = (timestamp: number, itemId?: number) => {
    if (!itemId) return
    result.push({ timestamp, action: "ADD", itemId })
  }

  const remove = (timestamp: number, itemId?: number) => {
    if (!itemId) return
    result.push({ timestamp, action: "REMOVE", itemId })
  }

  for (const e of events.sort((a, b) => a.timestamp - b.timestamp)) {
    const t = e.timestamp

    switch (e.type) {
      case "ITEM_PURCHASED": {
        const before = e.beforeId
        const after = e.afterId ?? e.itemId

        if (before && after) {
          // upgrade: replace before → after
          remove(t, before)
          add(t, after)
        } else {
          add(t, after)
        }

        break
      }

      case "ITEM_SOLD":
        remove(t, e.itemId ?? e.beforeId)
        break

      case "ITEM_DESTROYED":
        remove(t, e.itemId ?? e.beforeId)
        break

      case "ITEM_OBTAINED":
        add(t, e.afterId ?? e.itemId)
        break

      case "ITEM_UNDO": {
        // Reverse whatever change happened
        const { beforeId, afterId, itemId } = e

        // if purchase created afterId, remove it
        if (afterId) remove(t, afterId)

        // if undo restored beforeId, add it
        if (beforeId) add(t, beforeId)

        // fallback: undo removed something we know about
        if (!beforeId && !afterId && itemId) remove(t, itemId)

        break
      }

      default:
        // ignore unrelated events
        break
    }
  }

  return result
}
