import { defineStore } from 'pinia'

export const useSummonerData = defineStore('summonerData', () => {
  const { summoner } = storeToRefs(s_session())
  const { filteredMatches, matches } = storeToRefs(useSummonerMatches())

  const id = toValue(summoner.value?.puuid)
  const region = toValue(summoner.value?.region)

  const account = computed<Account | null>(() => {
    if (!id) return null
    return acc().getByPuuid(summoner.value.puuid)
  })

  const { getAllTimelinesForPuuid } = useTimeline()

  const timelines = shallowRef<PlayerTimeline[] | null>([])

  async function getTimelines() {
    if (!id) return null
    timelines.value = await getAllTimelinesForPuuid(id)
  }

  const mastery = shallowRef<ChampionMastery[] | null>([])

  async function getMastery() {
    if (!id) return null
    mastery.value = await getOrFetchAllMastery(id, region)
  }

  const champions = computed<ChampionStats[]>(() => {
    if (!id) return null
    return useChampionStats(matches, filteredMatches, id).value
  })

  const allies = computed<AllyStatDetail[]>(() => {
    if (!id) return null
    return aggregateAllies(filteredMatches, id).value
  })

  const splash = computed(() => {
    if (account.value?.splash) return account.value.splash

    const first = champKeyById(champions.value[0].championId)
    if (!first) return null
    else if (first) return getSplash(first, 'uncentered', getRandom(skinIndex[first]))

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
