export interface NormalizeOptions {
  clamp?: (x: number) => number // default: tanh
  maxAbs: number
  round?: boolean // default: true
  scale?: number // default: 1
}

export function normalizeScore(
  raw: number,
  { clamp = Math.tanh, maxAbs, round = true, scale = 1 }: NormalizeOptions
): number {
  if (!maxAbs || maxAbs === 0)
    return 0

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
  const n = normalizeScore(raw, { maxAbs, round: false, scale: 1 }) // [-1..1]
  return Math.round(((n + 1) / 2) * 9 + 1)
}

const PRIOR_GAMES = 10

export function bayesianWinrate(
  wins: number,
  games: number,
  baselineWinrate: number,
  priorGames = 10
): number {
  if (games === 0)
    return baselineWinrate

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
