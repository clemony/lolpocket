export async function useFetchSummonerData(queryPuuid: string) {
  const summoner = await $fetch<Summoner>("/api/riot/get-summoner-data", {
    query: { puuid: queryPuuid },
  })
  console.log("💠 - useFetchSummonerData - summoner:", summoner)

  const as = useAccountStore()

  if (summoner.puuid === as.userAccount.riot.puuid) {
    Object.assign(as.userAccount.riot, summoner)
  }
  console.log("💠 - useFetchSummonerData - summoner:", summoner)

  return summoner
}
