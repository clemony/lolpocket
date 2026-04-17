import pLimit from "p-limit"

const concurrency = 1
const limit = pLimit(concurrency)

// Riot soft caps.
const MAX_PER_SECOND = 15
const MAX_PER_TWO_MIN = 90 // under Riot's 100:120
const SECOND_WINDOW_MS = 1_000
const TWO_MIN_WINDOW_MS = 120_000

const secondWindowStarts: number[] = []
const twoMinuteWindowStarts: number[] = []

function pruneWindow(bucket: number[], now: number, windowMs: number) {
  while (bucket.length > 0 && now - bucket[0]! >= windowMs) {
    bucket.shift()
  }
}

function getWaitTimeMs(now: number) {
  pruneWindow(secondWindowStarts, now, SECOND_WINDOW_MS)
  pruneWindow(twoMinuteWindowStarts, now, TWO_MIN_WINDOW_MS)

  const secondWait =
    secondWindowStarts.length >= MAX_PER_SECOND
      ? SECOND_WINDOW_MS - (now - secondWindowStarts[0]!)
      : 0

  const twoMinuteWait =
    twoMinuteWindowStarts.length >= MAX_PER_TWO_MIN
      ? TWO_MIN_WINDOW_MS - (now - twoMinuteWindowStarts[0]!)
      : 0

  return Math.max(secondWait, twoMinuteWait, 0)
}

async function waitForCapacity() {
  while (true) {
    const now = Date.now()
    const waitMs = getWaitTimeMs(now)

    if (waitMs <= 0) {
      return
    }

    await new Promise(resolve => setTimeout(resolve, waitMs))
  }
}

export function scheduleJob<T>(job: () => Promise<T>): Promise<T> {
  return limit(async () => {
    await waitForCapacity()

    const now = Date.now()
    secondWindowStarts.push(now)
    twoMinuteWindowStarts.push(now)

    return job()
  })
}
