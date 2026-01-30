export function matchFilters(
  puuid: string,
  match: MatchData,
  options: MatchFilter
) {
  const {
    ally,
    champion,
    date,
    ignoreRole = false,
    patch,
    queue,
    role,
  } = options

  const player = match.participants.find(p => p.puuid === puuid)
  if (!player) return false

  const matchesPatch
    = !patch || patch === ds().currentPatch || match.gamePatch === patch

  const matchesQueue
    = !queue || Number(queue) === 0 || match.queueId === Number(queue)

  const matchesChampion
    = !champion
      || champion === ''
      || champNameById(player.championId) === champion

  const matchesPlayer
    = !ally || match.participants.some(p => p.puuid === ally)

  const matchesRole
    = ignoreRole || !role || role === 'ALL' || player.role === role

  const matchesDate = dateInRange(match.gameEndTimestamp, toValue(date))

  return (
    matchesPatch
    && matchesQueue
    && matchesChampion
    && matchesPlayer
    && matchesDate
    && matchesRole
  )
}
