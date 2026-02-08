import pLimit from 'p-limit'

const concurrency = 1
const limit = pLimit(concurrency)

// riot soft caps
const MAX_PER_SECOND = 15
const MAX_PER_TWO_MIN = 90 // under riot's 100:120

let secondBucket = 0
let minuteBucket = 0

setInterval(() => {
  secondBucket = 0
}, 1000)
setInterval(() => {
  minuteBucket = 0
}, 120_000)

async function waitForCapacity() {
  // eslint-disable-next-line no-unmodified-loop-condition
  while (secondBucket >= MAX_PER_SECOND || minuteBucket >= MAX_PER_TWO_MIN) {
    await new Promise(r => setTimeout(r, 50))
  }
}

export function scheduleJob<T>(job: () => Promise<T>): Promise<T> {
  return limit(async () => {
    await waitForCapacity()

    secondBucket++
    minuteBucket++

    return job()
  })
}