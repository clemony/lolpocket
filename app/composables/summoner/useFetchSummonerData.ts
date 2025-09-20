export async function useFetchSummonerData(queryPuuid: string) {
  const summoner = await $fetch<Summoner>('/api/riot/fetchSummonerData', {
    query: { puuid: queryPuuid },
  })
  console.log('💠 - useFetchSummonerData - summoner:', summoner)

  /*   if (summoner.puuid === as().account.puuid) {
    Object.assign(as().account.riot, summoner)
  } */
  return summoner
}
