export function matchFilters(
  puuid: string,
  match: MatchData,
  options: MatchFilter
) {
  const { patch, queue, champion, ally, role, ignoreRole = false } = options

  const ds = useDataStore()

  const player = match.participants.find(p => p.puuid == puuid)

  const matchesPatch
    = !patch || patch === ds.currentPatch || match.gamePatch === patch

  const matchesQueue
    = !queue || Number(queue) === 0 || match.queueId === Number(queue)

  const matchesChampion
    = !champion
      || champion === null
      || ix().champNameById(player.championId) === champion

  const matchesPlayer
    = !ally || match.participants.some(p => p.riotIdGameName === ally)

  const matchesRole
    = ignoreRole || !role || role === 'ALL' || player.teamPosition === role

  return (
    matchesPatch
    && matchesQueue
    && matchesChampion
    && matchesPlayer
    && matchesRole
  )
}

//
