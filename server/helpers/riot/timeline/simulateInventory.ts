// reuse your types
export interface PlayerItemEvent {
  timestamp: number
  participantId: number
  itemId?: number
  afterId?: number
  beforeId?: number
  goldGain?: number
  type:
    | "ITEM_UNDO"
    | "ITEM_DESTROYED"
    | "ITEM_PURCHASED"
    | "ITEM_SOLD"
    | "ITEM_OBTAINED"
    | string
}

export type Inventory = number[] // simple list of itemIds (allows duplicates)

export interface InventorySnapshot {
  timestamp: number
  inventory: Inventory
  event?: PlayerItemEvent
}

/**
 * Simulate inventory from a list of player item events.
 *
 * - events: array of PlayerItemEvent (can include other event types; they will be ignored)
 * - opts:
 *    - sampleIntervalMs?: number -> if provided, also emit snapshots every X ms (from 0 to last event)
 *    - maxSlots?: number -> optional cap on number of slots (default 7/6+trinket? use 7)
 *
 * Returns snapshots in chronological order (unique timestamps).
 */
export function simulateInventory(
  events: PlayerItemEvent[],
  opts?: { sampleIntervalMs?: number; maxSlots?: number }
): InventorySnapshot[] {
  const MAX_SLOTS = opts?.maxSlots ?? 7 // default: 7 (6 item slots + trinket)
  // only keep item events and sort by timestamp asc
  const itemEvents = events
    .filter((e) =>
      [
        "ITEM_PURCHASED",
        "ITEM_SOLD",
        "ITEM_DESTROYED",
        "ITEM_OBTAINED",
        "ITEM_UNDO",
      ].includes(e.type)
    )
    .sort((a, b) => a.timestamp - b.timestamp)

  const snapshots: InventorySnapshot[] = []
  const inventory: Inventory = []

  // helper mutators (operate on inventory array)
  const addItem = (id?: number) => {
    if (!id || id === 0) return
    if (inventory.length < MAX_SLOTS) {
      inventory.push(id)
    } else {
      // if full, still push — but you may want to discard or handle differently
      // we'll push to keep history, but you can adjust to drop or replace.
      inventory.push(id)
    }
  }

  const removeItem = (id?: number) => {
    if (!id || id === 0) return
    const idx = inventory.indexOf(id)
    if (idx >= 0) inventory.splice(idx, 1)
  }

  const replaceItem = (oldId?: number, newId?: number) => {
    if (!oldId || oldId === 0) {
      // fallback: just add new
      addItem(newId)
      return
    }
    const idx = inventory.indexOf(oldId)
    if (idx >= 0) {
      // if newId is 0/undefined, we interpret as removal
      if (!newId || newId === 0) inventory.splice(idx, 1)
      else inventory[idx] = newId
    } else {
      // if old not found, just add new if it exists
      if (newId && newId !== 0) addItem(newId)
    }
  }

  // emit function (clones inventory)
  const emit = (ts: number, event?: PlayerItemEvent) => {
    snapshots.push({
      timestamp: ts,
      inventory: inventory.slice(),
      event,
    })
  }

  // process chronological events
  for (const ev of itemEvents) {
    switch (ev.type) {
      case "ITEM_PURCHASED":
        // Riot sometimes gives afterId/beforeId for upgrades; sometimes just itemId
        if (ev.beforeId || ev.afterId) {
          // interpret purchase + upgrade: replace before -> after
          replaceItem(ev.beforeId, ev.afterId ?? ev.itemId)
        } else {
          addItem(ev.itemId ?? ev.afterId)
        }
        break

      case "ITEM_OBTAINED":
        // obtained by passive/transform (e.g. pets, ornn)
        // prefer afterId then itemId
        addItem(ev.afterId ?? ev.itemId)
        break

      case "ITEM_SOLD":
        // sold an itemId; if beforeId exists prefer that
        removeItem(ev.itemId ?? ev.beforeId)
        break

      case "ITEM_DESTROYED":
        // consumed or destroyed (e.g. elixir or support item)
        removeItem(ev.itemId ?? ev.beforeId)
        break

      case "ITEM_UNDO":
        // Undo is messy. Typical shape: beforeId (what was there before), afterId (what was after).
        // Example: undoing a purchase may show afterId = 0 and beforeId = 0 or some previous id.
        // We'll handle gracefully:
        // - If afterId exists and is non-zero -> remove it (undo created it)
        // - If beforeId exists and non-zero -> ensure beforeId is present (restore)
        if (ev.afterId && ev.afterId !== 0) {
          removeItem(ev.afterId)
        }
        if (ev.beforeId && ev.beforeId !== 0) {
          // if beforeId already present, do nothing; else add it back
          if (!inventory.includes(ev.beforeId)) addItem(ev.beforeId)
        }
        // fallback: if itemId present, remove it
        if (ev.itemId && ev.itemId !== 0 && !ev.afterId && !ev.beforeId) {
          removeItem(ev.itemId)
        }
        break

      default:
        // ignore other item-like strings
        break
    }

    emit(ev.timestamp, ev)
  }

  // optionally sample snapshots every sampleIntervalMs between 0 and last event
  if (opts?.sampleIntervalMs && snapshots.length > 0) {
    const sampleMs = opts.sampleIntervalMs
    const firstTs = 0
    const lastTs = snapshots[snapshots.length - 1].timestamp
    // build a map of latest inventory up to each sample point
    const sampled: InventorySnapshot[] = []
    let evIdx = 0
    let currentInv: Inventory = []

    // iterate sample times
    for (let t = firstTs; t <= lastTs; t += sampleMs) {
      // advance through snapshots/events up to t
      while (evIdx < snapshots.length && snapshots[evIdx].timestamp <= t) {
        currentInv = snapshots[evIdx].inventory
        evIdx++
      }
      sampled.push({
        timestamp: t,
        inventory: currentInv ? currentInv.slice() : [],
      })
    }
    return sampled
  }

  return snapshots
}
