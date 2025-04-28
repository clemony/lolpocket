export function normalizeSummonerForStore(summoner: Summoner): ExtendedSummoner {
  const { simplifyMatch } = useMatchSimplifier(summoner.puuid)

  const sortedMatches = summoner.matches.sort((a, b) => b.info.gameCreation - a.info.gameCreation)
  const simplifiedMatches = sortedMatches
    .map(simplifyMatch)
    .filter(isSimplifiedMatchData)

  console.log('🔵 puuid for simplifyMatch:', summoner.puuid)
  console.log('🔵 matches count:', summoner.matches.length)
  console.log('🔵 first match participants:', summoner.matches[0]?.info.participants.map(p => p.puuid))

  return {
    ...summoner,
    matches: sortedMatches,
    simplifiedMatches,
  }
}