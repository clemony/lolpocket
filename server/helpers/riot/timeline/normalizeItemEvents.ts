export function normalizeItemEvents(events) {
  // -------------------------------------------------------
  // 1. PREP
  // -------------------------------------------------------
  events = [...events].sort((a, b) => a.timestamp - b.timestamp)

  const result = []

  // stackable tracking
  const STACKABLE = new Set([2003, 2055])
  const STACK_WINDOW = 10_000

  // Track active items to detect real upgrades
  const inventory = new Map() // itemId → count

  // Track purchases that later get undone
  const undonePurchases = new Set() // timestamps of purchase events

  // To link destroy→purchase→upgrade chains
  const pendingDestroys = [] // { itemId, timestamp }

  // Helper
  const pushAdd = (timestamp, id, count = 1) => {
    if (STACKABLE.has(id)) {
      for (let i = result.length - 1; i >= 0; i--) {
        const ev = result[i]
        if (ev.action !== "ADD" || !ev.items) continue
        const found = ev.items.find(it => it.id === id)
        if (found && timestamp - ev.timestamp <= STACK_WINDOW) {
          found.count += count
          return
        }
        if (timestamp - ev.timestamp > STACK_WINDOW) break
      }
    }
    result.push({
      timestamp,
      action: "ADD",
      id, count
    })
  }

  const pushUpgrade = (timestamp, from, to, meta = null) => {
    result.push({
      timestamp,
      action: meta ?? "UPGRADE",
      from,
      to
    })
  }

  // -------------------------------------------------------
  // 2. MAIN EVENT LOOP
  // -------------------------------------------------------
  for (const e of events) {
    const ts = e.timestamp

    switch (e.type) {
      case "ITEM_DESTROYED":
      case "ITEM_SOLD": {
        pendingDestroys.push({ itemId: e.itemId, timestamp: ts })
        break
      }

      case "ITEM_PURCHASED": {
        const bought = e.itemId

        // Was this paired with a destroy at this ts?
        const matching = pendingDestroys.find(d => d.timestamp === ts)
        if (matching) {
          // real upgrade
          pushUpgrade(ts, [matching.itemId], bought)
          // consume the destroy
          const idx = pendingDestroys.indexOf(matching)
          pendingDestroys.splice(idx, 1)
        } else {
          // pure purchase
          pushAdd(ts, bought)
        }

        // update active inventory
        inventory.set(bought, (inventory.get(bought) || 0) + 1)
        break
      }

      case "ITEM_UNDO": {
        const ref = e.beforeId
        if (!ref) break

        // mark the last purchase of that item as undone
        undonePurchases.add(ref)

        // revert ADD or UPGRADE that created `ref`
        const idx = result.findLastIndex(ev =>
          (ev.action === "ADD" && ev.items.some(i => i.id === ref)) ||
          (ev.action === "UPGRADE" && ev.to === ref)
        )
        if (idx !== -1) {
          result.splice(idx, 1)
        }

        // restore the reverted item to inventory
        inventory.set(ref, (inventory.get(ref) || 1))
        break
      }

      case "ITEM_OBTAINED": {
        const item = e.afterId ?? e.itemId
        pushAdd(ts, item)
        inventory.set(item, (inventory.get(item) || 0) + 1)
        break
      }
    }
  }

  // -------------------------------------------------------
  // 3. SUPPORT ITEM SPECIAL CASE
  // -------------------------------------------------------
  const S1 = 3865
  const S2 = 3866
  const S3 = 3867
  const CHAIN = [S1, S2, S3]

  const r65 = result.find(ev => ev.action === "ADD" && ev.items?.some(i => i.id === S1))
  const r66 = result.find(ev => ev.action === "ADD" && ev.items?.some(i => i.id === S2))
  const r67 = result.find(ev => ev.action === "ADD" && ev.items?.some(i => i.id === S3))

  if (r65) {
    pushUpgrade(r65.timestamp, [S1], S2)
  }
  if (r66 || r67) {
    pushUpgrade(
      (r67?.timestamp ?? r66.timestamp),
      [
        ...(r66 ? [S2] : []),
        ...(r67 ? [S3] : [])
      ],
      null,
      "SUPPORT_UPGRADE"
    )
  }

  // -------------------------------------------------------
  // 4. CLEANUP + SORT
  // -------------------------------------------------------
  result.sort((a, b) => a.timestamp - b.timestamp)

  // -------------------------------------------------------
  // 5. SHOPPING WINDOW MERGE
  // -------------------------------------------------------
  const SHOP_WINDOW = 30_000
  const merged = []

  for (const ev of result) {
    const last = merged[merged.length - 1]
    if (last && ev.timestamp - last.timestamp <= SHOP_WINDOW) {
      last.events.push({ ...ev, timestamp: undefined })
    } else {
      merged.push({
        timestamp: ev.timestamp,
        events: [{ ...ev, timestamp: undefined }]
      })
    }
  }

  return merged
}