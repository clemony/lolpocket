export function isEven(n) {
  return n % 2 === 0
}

export function isOdd(n) {
  return Math.abs(n % 2) === 1
}

export function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value))
}

export function lerp(min: number, max: number, t: number) {
  return min + (max - min) * t
}

export function confidence(value: number, k = 5) {
  return value / (value + k)
}

export function mode(nums: number[]): number | null {
  if (!nums.length) return null

  const freq = new Map<number, number>()
  let maxCount = 0
  let result = nums[0]

  for (const n of nums) {
    const count = (freq.get(n) ?? 0) + 1
    freq.set(n, count)

    if (count > maxCount) {
      maxCount = count
      result = n
    }
  }

  return result
}

export function coerceNumber(v: unknown, fallback = 0) {
  return Number.isFinite(+v) ? +v : fallback
}

export function safeDivide(a: number, b: number, fallback = 0) {
  return b === 0 ? fallback : a / b
}

export const clamp01 = (v: number) => Math.min(1, Math.max(0, v))

export function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}

export function roundDecimalToPercent(v: number, total: number) {
  return v ? Math.round((v / total) * 1000) / 10 : 0
}

export function roundDecimal(v: number, dec = 1) {
  return v ? Math.round(v * (10 * dec)) / (10 * dec) : 0
}

export function roundInt(v: number, total: number, decimals = 1) {
  return v ? Math.round((v / total) * 10 ** decimals) / 10 ** decimals : 0
}

// wilson score lower bound for winrate confidence
export function wilsonLowerBound(wins: number, games: number, z = 1.96) {
  if (games === 0) return 0

  const p = wins / games
  const denom = 1 + (z * z) / games
  const num
    = p
      + (z * z) / (2 * games)
      - z * Math.sqrt((p * (1 - p) + (z * z) / (4 * games)) / games)

  return num / denom
}
