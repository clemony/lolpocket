
interface FilterOptions {
  patchSelect?: string
  queueSelect?: number
  championSelect?: string
  playerSelect?: string
  roleSelect?: string
  ignoreRole?: boolean
}

export function matchFilters(
  match: SimplifiedMatchData,
  options: FilterOptions
) {
  const {
    patchSelect,
    queueSelect,
    championSelect,
    playerSelect,
    roleSelect,
    ignoreRole = false
  } = options

  const ds = useDataStore()

  const matchesPatch =
    !patchSelect ||
    patchSelect === ds.currentPatch ||
    match.gameVersion === patchSelect

  const matchesQueue =
    !queueSelect ||
    Number(queueSelect) === 0 ||
    match.queueId === Number(queueSelect)

  const matchesChampion =
    !championSelect ||
    championSelect === 'All' ||
    match.championName === championSelect

  const matchesPlayer =
    !playerSelect ||
    match.participants.some(p => p.riotIdGameName === playerSelect)

  const matchesRole =
    ignoreRole ||
    !roleSelect ||
    roleSelect === 'ALL' ||
    match.teamPosition === roleSelect

  return matchesPatch && matchesQueue && matchesChampion && matchesPlayer && matchesRole
}