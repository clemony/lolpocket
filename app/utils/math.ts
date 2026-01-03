export function isEven(n) {
  return n % 2 === 0
}

export function isOdd(n) {
  return Math.abs(n % 2) === 1
}

export const coerceNumber = (v: unknown, fallback = 0) =>
  Number.isFinite(+v) ? +v : fallback

export const safeDivide = (a: number, b: number, fallback = 0) =>
  b === 0 ? fallback : a / b

export const clamp01 = (v: number) => Math.min(1, Math.max(0, v))

export function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}

export const roundDecimalToPercent = (v: number, total: number) =>
  v ? Math.round((v / total) * 1000) / 10 : 0

export const roundInt = (v: number, total: number, decimals = 1) =>
  v ? Math.round((v / total) * 10 ** decimals) / 10 ** decimals : 0

// wilson score lower bound for winrate confidence
export function wilsonLowerBound(wins: number, games: number, z = 1.96) {
  if (games === 0) return 0

  const p = wins / games
  const denom = 1 + (z * z) / games
  const num =
    p +
    (z * z) / (2 * games) -
    z * Math.sqrt((p * (1 - p) + (z * z) / (4 * games)) / games)

  return num / denom
}
