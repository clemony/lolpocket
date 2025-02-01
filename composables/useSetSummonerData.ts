async function useSummonerData(userId) {
  const ts = useTempStore()
  const as = useAccountStore()
  const client = useSupabaseClient()
  if (!ts.sessionInfo) {
    return
  }
  const { data } = await client.from('user_data').select('"gameName", "tagLine", "profileIconId", "summonerLevel","region"').eq('user_id', userId).limit(1).single()
  const name = data.gameName
  const tag = data.tagLine
  if (data) {
    return data
  }
}

export async function useSetSummonerData(userId) {
  console.log('working')
  await useSummonerData(userId).then((result) => {
    if (result) {
      const as = useAccountStore()
      as.riotAccount.gameName = result.gameName
      as.riotAccount.tagLine = result.tagLine
      as.riotAccount.profileIconId = result.profileIconId
      as.riotAccount.summonerLevel = result.summonerLevel
      as.riotAccount.region = result.region
      as.$persist
    }
  })
}
