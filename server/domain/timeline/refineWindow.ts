import { itemRecipe } from "~~/shared/constants/items/item-recipe"

export function refineWindow(
  window: { events: ItemEvent[]; timestamp: number },
  STACKABLE: Set<number>,
  history: any[]
) {
  const refined: ItemEvent[] = []

  // We only care about ADDs that already happened before this window timestamp
  const priorAdds = history.filter(
    (h) => h.timestamp < window.timestamp && h.action === "ADD"
  )

  // Fast lookup for counts of all items purchased prior to this window
  const priorCounts = new Map<number, number>()
  for (const ev of priorAdds) {
    priorCounts.set(ev.id, (priorCounts.get(ev.id) || 0) + (ev.count ?? 1))
  }

  for (const ev of window.events) {
    if (ev.action === "S1_UPGRADE" || ev.action === "S2_UPGRADE") {
      refined.push(ev)
      continue
    }
    if (ev.action !== "ADD") continue

    const id = ev.id
    const count = ev.count ?? 1

    // Handle stackables normally
    if (STACKABLE.has(id)) {
      const last = refined.find((r) => r.action === "ADD" && r.id === id)
      if (last) {
        last.count = (last.count ?? 1) + count
      } else {
        refined.push({ action: "ADD", id, count })
      }
      continue
    }

    const recipe = itemRecipe[id]

    if (!recipe) {
      // No recipe → straight ADD
      refined.push({ action: "ADD", id, count })
      continue
    }

    // Check if every recipe component appears in priorAdds
    const canUpgrade = recipe.every((comp) => priorCounts.get(comp) > 0)

    if (!canUpgrade) {
      // Bought whole item → ADD
      refined.push({ action: "ADD", id, count })
      continue
    }

    // Valid upgrade
    refined.push({
      action: "UPGRADE",
      to: id,
      from: recipe.slice(),
    })
  }

  return {
    timestamp: window.timestamp,
    events: refined,
  }
}
