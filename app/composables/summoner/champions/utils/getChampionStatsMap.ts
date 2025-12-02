export function getChampionStatsMap(
  matches: MatchData[],
  puuid: string
): Map<string, ChampionStats> {
  const map = new Map<string, ChampionStats>()
  const player = matches.map((m) =>
    m.participants.find((p) => p.puuid === puuid)
  )

  player.forEach((match, index) => {
    if (!match) return

    const champ = ix().champNameById(match.championId)
    if (!champ) return
    if (!map.has(champ)) {
      map.set(champ, {
        id: match.championId,
        name: champ,
        assists: 0,
        deaths: 0,
        gamePatches: [],
        games: 0,
        killParticipation: 0,
        kills: 0,
        losses: 0,
        matchIndexes: [],
        winrate: 0,
        wins: 0,
      })
    }

    const stats = map.get(champ)!
    stats.games++
    match.win ? stats.wins++ : stats.losses++
    stats.kills += match.stats.kills.total
    stats.deaths += match.stats.deaths
    stats.assists += match.stats.assists
    stats.killParticipation += match.stats.kp
    stats.matchIndexes.push(index)
    stats.gamePatches.push(matches[index].gamePatch.toString())
    stats.winrate = (stats.wins / stats.games) * 100
  })

  return map
}
