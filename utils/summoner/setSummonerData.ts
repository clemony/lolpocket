async function useSummonerData(userId) {
  const as = useAccountStore()
  const client = useSupabaseClient()

  if (!as.userAccount.session) {
    return
  }
  const { data } = await client.from('user_data').select('"gameName", "tagLine", "profileIconId", "summonerLevel","region", "puuid"').eq('user_id', userId).limit(1).single()
  if (data) {
    return data
  }
}

export async function setSummonerData(userId) {
  console.log('working')
  await useSummonerData(userId).then((result) => {
    if (result) {
      const as = useAccountStore()
      as.userAccount.gameName = result.gameName
      as.userAccount.tagLine = result.tagLine
      as.userAccount.profileIconId = result.profileIconId
      as.userAccount.summonerLevel = result.summonerLevel
      as.userAccount.puuid = result.puuid
      as.userAccount.region = result.region
      as.$persist
    }
  })
}
