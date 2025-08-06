import { getISOWeek } from '~/utils'

interface TimeSeriesStat {
  period: string // e.g., '2025-W32'
  games: number
  wins: number
  winrate: number
}

export function useChampionWinrateTimeline(
  matches: SimplifiedMatchData[],
  championName: string,
): TimeSeriesStat[] {
  const grouped: Record<string, TimeSeriesStat> = {}

  for (const match of matches) {
    if (match.championName !== championName)
      continue

    const date = new Date(match.gameEndTimestamp)
    const year = date.getUTCFullYear()
    const week = getISOWeek(date)
    const key = `${year}-W${week.toString().padStart(2, '0')}`

    if (!grouped[key]) {
      grouped[key] = {
        period: key,
        games: 0,
        wins: 0,
        winrate: 0,
      }
    }

    grouped[key].games++
    if (match.win)
      grouped[key].wins++
  }

  for (const key in grouped) {
    const stat = grouped[key]
    stat.winrate = (stat.wins / stat.games) * 100
  }

  return Object.values(grouped).sort((a, b) =>
    a.period.localeCompare(b.period),
  )
}