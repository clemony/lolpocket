import type { ItemEvent, ItemEventGroup, PlayerItemEvent } from "#shared/types"
import { findLastIndex, stripTs } from "./helpers"
import { refineWindow } from "./refineWindow"

export function normalizeItemEvents(
  events: PlayerItemEvent[]
): ItemEventGroup[] {
  // group raw events by timestamp (stable order)
  const byTs = new Map<number, PlayerItemEvent[]>()
  for (const e of [...events].sort((a, b) => a.timestamp - b.timestamp)) {
    let bucket = byTs.get(e.timestamp)
    if (!bucket) {
      bucket = []
      byTs.set(e.timestamp, bucket)
    }
    bucket.push(e)
  }

  const STACKABLE = new Set([2003, 2055])
  const SHOP_WINDOW = 30_000

  const rawOut: ItemEvent[] = []

  //
  // PHASE 1 — ONLY PURCHASED / OBTAINED / UNDO
  //
  for (const [ts, group] of Array.from(byTs.entries()).sort(
    (a, b) => a[0] - b[0]
  )) {
    const purchases: number[] = []
    const obtained: number[] = []
    const undos: PlayerItemEvent[] = []

    for (const ev of group) {
      if (ev.type === "ITEM_PURCHASED") {
        const id = ev.itemId ?? ev.afterId
        if (id != null) purchases.push(id)
      } else if (ev.type === "ITEM_OBTAINED") {
        const id = ev.itemId ?? ev.afterId
        if (id != null) obtained.push(id)
      } else if (ev.type === "ITEM_UNDO") undos.push(ev)
      //
      // PHASE 2 — SUPPORT ITEM SYNTHETIC UPGRADES
      //
      if (ev.type === "ITEM_DESTROYED" && ev.itemId === 3865) {
        rawOut.push({
          id: 3865,
          action: "ADD",
          count: 1,
          timestamp: events[0]?.timestamp ?? ts,
        })
        rawOut.push({
          action: "S1_UPGRADE",
          from: 3865,
          timestamp: ts,
          to: 3866,
        })
        continue
      }

      if (ev.type === "ITEM_DESTROYED" && ev.itemId === 3866) {
        rawOut.push({
          action: "S2_UPGRADE",
          from: 3866,
          timestamp: ts,
          to: 0,
        })
        continue
      }
    }

    // obtained → always add
    for (const id of obtained)
      rawOut.push({ id, action: "ADD", count: 1, timestamp: ts })

    // purchases → always add
    for (const id of purchases)
      rawOut.push({ id, action: "ADD", count: 1, timestamp: ts })

    // undo removes last entry matching beforeId
    for (const undo of undos) {
      const ref = undo.beforeId
      if (!ref) continue
      const idx = findLastIndex(
        rawOut,
        (r) =>
          (r.action === "ADD" && r.id === ref) ||
          (r.action === "UPGRADE" && r.to === ref)
      )
      if (idx !== -1) rawOut.splice(idx, 1)
    }
  }

  rawOut.sort((a, b) => a.timestamp! - b.timestamp!)

  //
  // PHASE 3 — CREATE SHOPPING WINDOWS
  //
  const windows: ItemEventGroup[] = []
  for (const ev of rawOut) {
    const last = windows.at(-1)
    if (last && ev.timestamp! - last.timestamp <= SHOP_WINDOW)
      last.events.push(stripTs(ev))
    else windows.push({ timestamp: ev.timestamp!, events: [stripTs(ev)] })
  }

  //
  // PHASE 4 — REFINE EACH WINDOW
  //
  const refined = windows.map((w) => refineWindow(w, STACKABLE, rawOut))

  return refined
}
