import { ITEM_EVENT_TYPES } from "./itemEventTypes"

export const SHOP_BOUNDS = {
  BLUE: {
    maxX: 1500,
    maxY: 1500,
    minX: 0,
    minY: 0,
  },
  RED: {
    maxX: 15000,
    maxY: 15000,
    minX: 13000,
    minY: 13000,
  },
}

function isInShopArea(pos: { x: number, y: number }, teamId: 100 | 200) {
  const b = teamId === 100 ? SHOP_BOUNDS.BLUE : SHOP_BOUNDS.RED
  return (
    pos.x >= b.minX && pos.x <= b.maxX && pos.y >= b.minY && pos.y <= b.maxY
  )
}

interface ShopState {
  lastInShop: boolean
  lastTimestamp: number
  totalShopMs: number
}

export function computeShopTime(
  frames: any[],
  events: any[],
  participantId: number,
  teamId: 100 | 200
) {
  let totalShopMs = 0
  let shopWindowStart: number | null = null
  let lastFrameTs = 0
  let lastInShop = false

  // 1. Detect shop windows via frames
  for (const frame of frames) {
    const pf = frame.participantFrames[String(participantId)]
    if (!pf?.position) {
      lastFrameTs = frame.timestamp
      continue
    }

    const inShopNow = isInShopArea(pf.position, teamId)

    // ENTER SHOP
    if (!lastInShop && inShopNow) {
      shopWindowStart = frame.timestamp
    }

    // EXIT SHOP
    if (lastInShop && !inShopNow && shopWindowStart !== null) {
      totalShopMs += frame.timestamp - shopWindowStart
      shopWindowStart = null
    }

    lastInShop = inShopNow
    lastFrameTs = frame.timestamp
  }

  // 2. Fallback: infer shop time from item events if no frame overlap occurred
  if (totalShopMs === 0) {
    const itemEvents = events
      .filter(
        e => e.participantId === participantId && ITEM_EVENT_TYPES.has(e.type)
      )
      .sort((a, b) => a.timestamp - b.timestamp)

    if (itemEvents.length) {
      const first = itemEvents[0].timestamp
      const last = itemEvents.at(-1).timestamp

      // Hard clamp to avoid inflating time
      const estimated = Math.min(last - first + 1500, 12000)

      totalShopMs = Math.max(estimated, 0)
    }
  }

  return totalShopMs
}
