//
import { defineStore } from "pinia"

export const sData = defineStore("summonerData", () => {
  const { summoner } = storeToRefs(sSession())
  const { matches } = storeToRefs(sMatches())
  const { filteredMatches } = storeToRefs(matchFilter())

  const id = toValue(summoner.value?.puuid)
  const region = toValue(summoner.value?.region)

  const account = computed<Account | null>(() => {
    const puuid = summoner.value?.puuid
    if (!puuid) return null
    return acc().getByPuuid(puuid)
  })

  const { getAllTimelinesForPuuid } = useTimeline()

  const timelines = shallowRef<PlayerTimeline[] | null>([])

  async function getTimelines(): Promise<void> {
    if (!id) return
    timelines.value = await getAllTimelinesForPuuid(id)
  }

  const mastery = shallowRef<ChampionMastery[] | null>([])

  async function getMastery(): Promise<void> {
    if (!id || !region) return
    mastery.value = await getOrFetchAllMastery(id, region)
  }

  const champions = computed<ChampionStats[] | null>(() => {
    if (!id) return null
    return useChampionStats(matches, filteredMatches, id).value
  })

  const allies = computed<AllyStatDetail[] | null>(() => {
    if (!id) return null
    return aggregateAllies(filteredMatches, id).value
  })

  const splash = computed(() => {
    if (account.value?.splash) return account.value.splash

    const first = champKeyById(champions.value?.[0]?.championId ?? 0)
    if (!first) return null
    else if (first)
      return getSplash(first, "uncentered", getRandom(skinIndex[first] ?? []))

    return null
  })

  return {
    account,
    allies,
    champions,
    mastery,
    splash,
    timelines,

    getMastery,
    getTimelines,
  }
})
