export interface NormalizeOptions {
  maxAbs: number
  scale?: number // default: 1
  clamp?: (x: number) => number // default: tanh
  round?: boolean // default: true
}

export function normalizeScore(
  raw: number,
  { maxAbs, scale = 1, clamp = Math.tanh, round = true }: NormalizeOptions
): number {
  if (!maxAbs || maxAbs === 0) return 0

  const normalized = clamp(raw / maxAbs) * scale
  return round ? Math.round(normalized) : normalized
}

export function synergyScore(raw: number, maxAbs: number): number {
  return normalizeScore(raw, {
    maxAbs,
    scale: 5,
  })
}

export function percentScore(raw: number, maxAbs: number): number {
  return normalizeScore(raw, {
    maxAbs,
    scale: 100,
  })
}

export function score1to10(raw: number, maxAbs: number): number {
  const n = normalizeScore(raw, { maxAbs, scale: 1, round: false }) // [-1..1]
  return Math.round(((n + 1) / 2) * 9 + 1)
}

const PRIOR_GAMES = 10

export function bayesianWinrate(
  wins: number,
  games: number,
  baselineWinrate: number,
  priorGames = 10
): number {
  if (games === 0) return baselineWinrate

  return (wins + priorGames * baselineWinrate) / (games + priorGames)
}

export function winDelta(
  win: number,
  games: number,
  totalWins: number,
  totalGames: number
) {
  const baselineWinrate = totalWins / totalGames

  const wr_with = bayesianWinrate(win, games, baselineWinrate)

  const wr_without = bayesianWinrate(
    totalWins - win,
    totalGames - games,
    baselineWinrate
  )

  return wr_with - wr_without
}
