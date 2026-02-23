//
import { defineStore } from "pinia"
import { useTimeline } from "~/domain/match/useTimeline"
import { aggregateAllies } from "~/domain/stats/aggregateAllies"
import { useChampionStats } from "~/domain/stats/useChampionStats"
import { getOrFetchAllMastery } from "~/domain/summoner/mastery/getOrFetchMastery"
import { getSplash } from "~/domain/utils/img"
import { skinIndex } from "#shared/constants/champions/skin-index"

export const sData = defineStore("summonerData", () => {
  const { summoner } = storeToRefs(sSession())
  const { matches } = storeToRefs(sMatches())
  const { filteredMatches } = storeToRefs(matchFilter())

  const id = computed(() => summoner.value?.puuid)
  const region = computed(() => summoner.value?.region)

  const account = computed<Account | null>(() => {
    const puuid = summoner.value?.puuid
    if (!puuid) return null
    return summonerAccounts().getByPuuid(puuid)
  })

  const { getAllTimelinesForPuuid } = useTimeline()

  const timelines = shallowRef<PlayerTimeline[] | null>([])

  async function getTimelines(): Promise<void> {
    if (!id.value) return
    timelines.value = await getAllTimelinesForPuuid(id.value)
  }

  const mastery = shallowRef<ChampionMastery[] | null>([])

  async function getMastery(): Promise<void> {
    if (!id.value || !region.value) return
    mastery.value = await getOrFetchAllMastery(id.value, region.value)
  }

  const champions = computed<ChampionStats[] | null>(() => {
    if (!id.value) return null
    return useChampionStats(matches, filteredMatches, id.value).value
  })

  const allies = computed<AllyStatDetail[] | null>(() => {
    if (!id.value) return null
    return aggregateAllies(filteredMatches, id.value).value
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
