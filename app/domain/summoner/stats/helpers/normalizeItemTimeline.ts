import { itemRank } from "#shared/constants/items/index/itemToRank"

export const TEN_MINUTES = 10 * 60 * 1000

export function isBoots(id: number) {
  return itemRank[id] === 'Boots'
}

export function isLegendary(id: number) {
  return itemRank[id] === 'Legendary'
}

export function isTrinket(id: number) {
  return itemRank[id] === 'Trinket'
}

export const SUPPORT_LEGENDARIES = new Set<number>([
  3869, // Celestial Opposition
  3870, // Dream Maker
  3871, // Zaz'Zak's Realmspike
  3876, // Solstice Sleigh
  3877, // Bloodsong
])

export const TEAR_TRANSFORMS: Record<number, number> = {
  2526: 2530, // Circlet -> Diadem
  3003: 3040, // Archangel -> Seraph
  3004: 3042, // Manamune -> Muramana
  3119: 3121, // Winter's Approach -> Fimbulwinter
}

export const TEAR_BASE_BY_FINAL = Object.fromEntries(
  Object.entries(TEAR_TRANSFORMS).map(([base, final]) => [final, Number(base)])
)

export function getLegendarySlotKey(id: number): number {
  return TEAR_BASE_BY_FINAL[id] ?? id
}

export function getFinalItems(items: PlayerItems): number[] {
  return Object.values(items).filter(id => id && id !== 0) as number[]
}

export function getItemAcquireTimes(
  timeline: PlayerTimeline,
  finalItems: number[],
  supportItem?: number
): Map<number, number> {
  const map = new Map<number, number>()
  const finalSet = new Set(finalItems)

  for (const frame of timeline.items) {
    for (const ev of frame.events) {
      // 1️⃣ Normal purchases
      if (ev.action === 'ADD' && ev.id) {
        if (!map.has(ev.id)) {
          map.set(ev.id, frame.timestamp)
        }
      }

      if (ev.action === 'UPGRADE' && ev.to) {
        if (!map.has(ev.to)) {
          map.set(ev.to, frame.timestamp)
        }
      }

      if (ev.action === 'ADD' && ev.id) {
        // 🔑 Tear base → final item alias
        const finalId = TEAR_TRANSFORMS[ev.id]
        if (finalId && finalSet.has(finalId) && !map.has(finalId)) {
          map.set(finalId, frame.timestamp)
        }
      }

      // 3️⃣ Support item upgrades
      if (
        (ev.action === 'S1_UPGRADE' || ev.action === 'S2_UPGRADE')
        && supportItem
        && !map.has(supportItem)
      ) {
        map.set(supportItem, frame.timestamp)
      }
    }
  }

  return map
}

export function resolveFinalItemOrder(
  finalItems: number[],
  acquireTimes: Map<number, number>
) {
  return finalItems
    .map(id => ({
      id,
      timestamp: acquireTimes.get(id) ?? Infinity,
    }))
    .sort((a, b) => a.timestamp - b.timestamp)
}
