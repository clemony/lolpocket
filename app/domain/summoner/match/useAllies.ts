import type { Teammate } from "~/domain/summoner/types.summoner"

export function useAllies(
  puuid: string,
  matches: MaybeRef<MatchData[]>
): Teammate[] {
  const teammateStats = new Map<
    string,
    {
      games: number
      wins: number
      icon: number
      puuid: string
      name: string
      tag: string
    }
  >()

  for (const match of toValue(matches)) {
    const player = match.participants.find((p) => p.puuid === puuid)
    if (!player) continue

    const teammates = match.participants.filter(
      (p) => p.teamId === player.teamId && p.puuid !== puuid
    )

    for (const ally of teammates) {
      const s = teammateStats.get(ally.puuid) || {
        name: ally.name,
        puuid: ally.puuid,
        games: 0,
        icon: ally.icon,
        tag: ally.tag,
        wins: 0,
      }

      s.games++
      if (player.win) s.wins++

      teammateStats.set(ally.puuid, s)
    }
  }

  return [...teammateStats.entries()]
    .filter(([_, stats]) => stats.games >= 2)
    .map(([puuid, stats]) => {
      const raw = stats.wins / stats.games
      const wilson = wilsonLowerBound(stats.wins, stats.games)

      return {
        ...stats,
        weightedWinrate: Math.round(wilson * 100), // replaced
        winrate: Math.round(raw * 100),
      }
    })
    .sort((a, b) => b.games - a.games)
}
