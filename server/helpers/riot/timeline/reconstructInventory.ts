import type { NormalizedItemEvent } from "../../../types"

export function reconstructInventory(
  log: NormalizedItemEvent[],
  cutoff: number
): number[] {
  const inv: number[] = []

  for (const e of log) {
    if (e.timestamp > cutoff) break

    if (e.action === "ADD") inv.push(e.itemId)
    else {
      const idx = inv.indexOf(e.itemId)
      if (idx >= 0) inv.splice(idx, 1)
    }
  }

  return inv
}
