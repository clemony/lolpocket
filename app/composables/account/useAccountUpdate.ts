export async function useAccountUpdate(riotPuuid?: string, regionGroup?: string) {
  const puuid = riotPuuid || as().account?.puuid?.toString()
  const region = regionGroup || as().account?.regionGroup
  if (!puuid)
    return

  const resolve = await $fetch<Partial<Summoner>>('/api/riot/fetchSummonerData', { params: { puuid, region } })

  if (!resolve)
    return

  const account = {
    puuid: resolve.puuid,
    name: resolve.name,
    tag: resolve.tag,
    level: resolve.level,
    regionGroup: region,
    region: resolve.region,
    icon: resolve.profileIcon,
  }

  const session = await useSupabaseClient().auth.getSession()

  const post = await $fetch('api/supabase/updateUserAccount', {

    method: 'POST',
    headers: {
      Authorization: `Bearer ${session?.data.session.access_token}`,
    },
    body: {
      account,
    },
  })

  return account
}
