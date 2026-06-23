//
import { skinIndex } from "#shared/constants/champions/skin-index"
import { getOrFetchAllMastery } from "~/domain/summoner/composables/mastery/getOrFetchMastery"
import { useTimeline } from "~/domain/summoner/composables/match/useTimeline"
import { aggregateAllies } from "~/domain/summoner/stats/aggregateAllies"
import { useChampionStats } from "~/domain/summoner/stats/useChampionStats"
import { getSplash, getSplashFromSkinKey } from "~/domain/utils/img"

export const sData = defineStore("summonerData", () => {
  const { summoner } = storeToRefs(sSession())
  const { matches } = storeToRefs(sMatches())
  const { filteredMatches } = storeToRefs(matchFilter())

  const id = computed(() => summoner.value?.puuid)
  const region = computed(() => summoner.value?.region)

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

  const champions = useChampionStats(matches, filteredMatches, id)

  const allies = computed<AllyStatDetail[] | undefined>(() => {
    if (!id.value) return undefined
    return aggregateAllies(filteredMatches, id.value).value
  })

  const mostPlayed = computed(() => {
    const first = champions.value?.[0]?.championId ?? 0
    console.log("🥸 - first:", first)

    return {
      name: first ? champNameById(first) : undefined,
      id,
      splash: first ? getSplash(first, "uncentered") : undefined,
    }
  })

  return {
    matches,
    allies,
    champions,
    mastery,
    timelines,
    mostPlayed,
    getMastery,
    getTimelines,
  }
})
