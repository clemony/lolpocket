async function useSummonerData() {
  const ts = useTempStore()
  const as = useAccountStore()
  const client = useSupabaseClient()
  if (!ts.sessionInfo) {
    return
  }
  const { data } = await client.from('user_data').select('riot_id,summoner_name, summoner_tag').eq('user_id', as.userId).limit(1).single()
  const name = data.summoner_name
  const tag = data.summoner_tag
  if (data && data.summoner_name && data.summoner_tag) {
    return { name, tag }
  }
}

export async function useSetSummonerData() {
  await useSummonerData().then((result) => {
    if (result && result.name && result.tag) {
      const as = useAccountStore()
      as.riotAccount.name = result.name
      as.riotAccount.tag = result.tag
    }
  })
}
