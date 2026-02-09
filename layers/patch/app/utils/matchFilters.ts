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
      || champion === null
      || player.championId === champion

  const matchesPlayer
    = !ally || ally === '' || match.participants.some(p => p.puuid === ally)

  const matchesRole
    = ignoreRole || !role || role === 'all' || player.role === role

  const dateValue = toValue(date)
  const matchesDate
    = (!dateValue?.end && !dateValue?.start)
      || dateInRange(match.gameEndTimestamp, dateValue)

  return (
    matchesPatch
    && matchesQueue
    && matchesChampion
    && matchesPlayer
    && matchesDate
    && matchesRole
  )
}
