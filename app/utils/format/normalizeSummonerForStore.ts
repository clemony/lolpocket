export async function normalizeSummonerForStore(
  summoner: Summoner
): Promise<Summoner> {
  const puuid = summoner.puuid
  const direction = "new"
  const count = 20
  const existingIds = null
  const { full, simplified } = await useGetMatches({
    puuid,
    existingIds,
    count,
    direction,
  })
  const sortedMatches = summoner.matches.sort(
    (a, b) => b.info.gameCreation - a.info.gameCreation
  )
  /*   const simplifiedMatches = sortedMatches
    .map(a.value)
    .filter(isSimplifiedMatchData) */

  console.log("🔵 matches count:", summoner.matches.length)
  console.log(
    "🔵 first match participants:",
    summoner.matches[0]?.info.participants.map((p) => p.puuid)
  )

  return {
    ...summoner,
    matches: sortedMatches,
    //simplifiedMatches,
  }
}
