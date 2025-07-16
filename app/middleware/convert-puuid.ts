export default defineNuxtRouteMiddleware(async (to, from) => {
  if (to.params.puuid) {
    const ss = useSummonerStore()
    const summoner = await ss.getSummoner(to.params.puuid.toString())
    if (summoner) {
      return navigateTo(
        `/summoner/${summoner.region}/${summoner.name}_${summoner.tag}`
      )
    }
  }
})
