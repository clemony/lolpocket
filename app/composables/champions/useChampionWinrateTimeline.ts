import { getISOWeek } from '~/utils'

export interface TimeSeriesStat {
  span: string // e.g., '2025-W32'
  games: number
  wins: number
  winrate: number
}

export function useChampionWinrateTimeline(
  matches: SimplifiedMatchData[],
  championName: string,
): TimeSeriesStat[] {
  const grouped: Record<string, TimeSeriesStat> = {}
  console.log('💠 - useChampionWinrateTimeline - grouped:', grouped)

  for (const match of matches) {
    if (match.championName !== championName)
      continue

    const date = new Date(match.gameEndTimestamp)
    const year = date.getUTCFullYear()
    const week = getISOWeek(date)
    const span = week.toString().padStart(2, '0')
    const key = `${year}-W${span}`

    if (!grouped[key]) {
      grouped[key] = {
        span,
        games: 0,
        wins: 0,
        winrate: 0,
      }
    }

    grouped[key].games++
    if (match.win)
      grouped[key].wins++
    console.log('💠 - useChampionWinrateTimeline - grouped[key].wins:', grouped[key].wins)
  }

  for (const key in grouped) {
    const stat = grouped[key]
    stat.winrate = (stat.wins / stat.games) * 100
  }
  console.log('💠 - useChampionWinrateTimeline - grouped:', grouped)

  return Object.values(grouped).sort((a, b) =>
    a.span.localeCompare(b.span),
  )
}