export async function useFetchSummonerData(queryPuuid: string) {
  const summoner = await $fetch<Summoner>("/api/riot/get-summoner-data", {
    query: { puuid: queryPuuid },
  })

  const as = useAccountStore()

  if (summoner.puuid === as.userAccount.riot.puuid) {
    Object.assign(as.userAccount.riot, summoner)
  }

  return summoner
}
