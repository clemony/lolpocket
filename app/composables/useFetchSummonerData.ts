export async function useFetchSummonerData(queryPuuid: string) {
  const { name, profileIcon, puuid, tag, level, region, leagueEntry } = await $fetch('/api/shieldbow/get-summoner-data', {
    query: { puuid: queryPuuid },
  })
  const as = useAccountStore()
  const rankedEntries: Record<string, RankedEntry> = {}

  // Process each queue and add it to rankedEntries
  for (const queue in leagueEntry) {
    const entry = leagueEntry[queue]
    rankedEntries[queue] = {
      tier: entry.tier,
      division: entry.division,
      lp: entry.lp,
      wins: entry.wins,
      losses: entry.losses,
      queueType: queue,
    }
  }

  // Provide fallback data if a specific queue type is missing
  const soloQueue = rankedEntries.RANKED_SOLO_5x5 ?? {
    tier: 'UNRANKED',
    division: '',
    lp: 0,
    wins: 0,
    losses: 0,
    queueType: 'RANKED_SOLO_5x5',
  }

  const flexQueue = rankedEntries.RANKED_FLEX_SR ?? {
    tier: 'UNRANKED',
    division: '',
    lp: 0,
    wins: 0,
    losses: 0,
    queueType: 'RANKED_FLEX_SR',
  }

  // Summoner object with both queues (if they exist)
  const summoner: Summoner = {
    name,
    tag,
    puuid,
    profileIcon,
    level,
    region,
    ranked: {
      solo: soloQueue,
      flex: flexQueue,
    },
    matches: [],
  }
  if (summoner.puuid == as.userAccount.puuid) {
  console.log("💠 - useFetchSummonerData - as.userAccount.puuid:", as.userAccount.puuid)
  console.log("💠 - useFetchSummonerData - summoner.puuid:", summoner.puuid)

      as.userSummoner.tag = tag,
       as.userSummoner.puuid = puuid,
      as.userSummoner.profileIcon = profileIcon,
       console.log("💠 - useFetchSummonerData - as.userSummoner.profileIcon:", as.userSummoner.profileIcon)
       as.userSummoner.level = level,
       as.userSummoner.region = region,
      as.userSummoner.name = name

  }

  return summoner
}