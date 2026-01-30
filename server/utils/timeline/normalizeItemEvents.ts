export function normalizeItemEvents(events: any[]): ItemEventGroup[] {
  // group raw events by timestamp (stable order)
  const byTs = new Map<number, any[]>()
  for (const e of [...events].sort((a, b) => a.timestamp - b.timestamp)) {
    ;(byTs.get(e.timestamp) ?? byTs.set(e.timestamp, []).get(e.timestamp)).push(
      e
    )
  }

  const STACKABLE = new Set([2003, 2055])
  const SHOP_WINDOW = 30_000
  const pendingSupport: { id: number, ts: number } | null = null

  const rawOut: ItemEvent[] = []

  //
  // PHASE 1 — ONLY PURCHASED / OBTAINED / UNDO
  //
  for (const [ts, group] of Array.from(byTs.entries()).sort(
    (a, b) => a[0] - b[0]
  )) {
    const purchases: number[] = []
    const obtained: number[] = []
    const undos: any[] = []

    for (const ev of group) {
      if (ev.type === 'ITEM_PURCHASED') purchases.push(ev.itemId ?? ev.afterId)
      else if (ev.type === 'ITEM_OBTAINED')
        obtained.push(ev.itemId ?? ev.afterId)
      else if (ev.type === 'ITEM_UNDO') undos.push(ev)
      //
      // PHASE 2 — SUPPORT ITEM SYNTHETIC UPGRADES
      //
      if (ev.type === 'ITEM_DESTROYED' && ev.itemId === 3865) {
        rawOut.push({
          id: 3865,
          action: 'ADD',
          count: 1,
          timestamp: events[0].timestamp,
        })
        rawOut.push({
          action: 'S1_UPGRADE',
          from: 3865,
          timestamp: ts,
          to: 3866,
        })
        continue
      }

      if (ev.type === 'ITEM_DESTROYED' && ev.itemId === 3866) {
        rawOut.push({
          action: 'S2_UPGRADE',
          from: 3866,
          timestamp: ts,
          to: 0,
        })
        continue
      }
    }

    // obtained → always add
    for (const id of obtained)
      rawOut.push({ id, action: 'ADD', count: 1, timestamp: ts })

    // purchases → always add
    for (const id of purchases)
      rawOut.push({ id, action: 'ADD', count: 1, timestamp: ts })

    // undo removes last entry matching beforeId
    for (const undo of undos) {
      const ref = undo.beforeId
      if (!ref) continue
      const idx = findLastIndex(
        rawOut,
        r =>
          (r.action === 'ADD' && r.id === ref)
          || (r.action === 'UPGRADE' && r.to === ref)
      )
      if (idx !== -1) rawOut.splice(idx, 1)
    }
  }

  rawOut.sort((a, b) => a.timestamp - b.timestamp)

  //
  // PHASE 3 — CREATE SHOPPING WINDOWS
  //
  const windows: ItemEventGroup[] = []
  for (const ev of rawOut) {
    const last = windows[windows.length - 1]
    if (last && ev.timestamp - last.timestamp <= SHOP_WINDOW)
      last.events.push(stripTs(ev))
    else windows.push({ events: [stripTs(ev)], timestamp: ev.timestamp })
  }

  //
  // PHASE 4 — REFINE EACH WINDOW
  //
  const refined = windows.map(w => refineWindow(w, STACKABLE, rawOut))

  return refined
}
