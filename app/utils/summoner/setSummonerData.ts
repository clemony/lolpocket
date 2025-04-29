

export interface SummonerData {
  gameName: string;
  tagLine: string;
  profileIconId: number;
  summonerLevel: number;
  region: string;
  puuid: string;
}

async function useSummonerData(userId: string): Promise<SummonerData | undefined> {
  const as = useAccountStore()
  const client = useSupabaseClient()

  if (!as.userAccount.session) {
    return
  }
  
  const { data, error } = await client
    .from('user_data')
    .select('"gameName", "tagLine", "profileIconId", "summonerLevel", "region", "puuid"')
    .eq('user_id', userId)
    .limit(1)
    .single()

  if (error) {
    console.error("Error fetching summoner data:", error)
    return
  }

  return data as SummonerData
}

export async function setSummonerData(userId: string) {
  console.log('working')

  const result = await useSummonerData(userId)
  
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
}