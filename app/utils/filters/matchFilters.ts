export function matchFilters(
  match: SimplifiedMatchData,
  options: MatchFilter,
) {
  const {
    patch,
    queue,
    champion,
    ally,
    role,
    ignoreRole = false,
  } = options

  const ds = useDataStore()

  const matchesPatch
    = !patch
      || patch === ds.currentPatch
      || match.gameVersion === patch

  const matchesQueue
    = !queue
      || Number(queue) === 0
      || match.queueId === Number(queue)

  const matchesChampion
    = !champion
      || champion === null
      || match.championName === champion

  const matchesPlayer
    = !ally
      || match.participants.some(p => p.riotIdGameName === ally)

  const matchesRole
    = ignoreRole
      || !role
      || role === 'ALL'
      || match.teamPosition === role

  return matchesPatch && matchesQueue && matchesChampion && matchesPlayer && matchesRole
}

//