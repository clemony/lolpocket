//
import { skinIndex } from "#shared/constants/champions/skin-index"
import { aggregateAllies } from "~/domain/stats/aggregateAllies"
import { useChampionStats } from "~/domain/stats/useChampionStats"
import { getOrFetchAllMastery } from "~/domain/summoner/mastery/getOrFetchMastery"
import { useTimeline } from "~/domain/summoner/match/useTimeline"
import { getSplash, getSplashFromSkinKey } from "~/domain/utils/img"

export const sData = defineStore("summonerData", () => {
  const { summoner } = storeToRefs(sSession())
  const { matches } = storeToRefs(sMatches())
  const { filteredMatches } = storeToRefs(matchFilter())

  const id = computed(() => summoner.value?.puuid)
  const region = computed(() => summoner.value?.region)

  const account = computed<Account | null>(() => {
    const puuid = summoner.value?.puuid
    if (!puuid) return null
    return publicUsers().getByPuuid(puuid)
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

  const champions = useChampionStats(matches, filteredMatches, id)

  const allies = computed<AllyStatDetail[] | null>(() => {
    if (!id.value) return null
    return aggregateAllies(filteredMatches, id.value).value
  })

  const splash = computed(() => {
    if (account.value?.skin)
      return getSplashFromSkinKey(account.value.skin, "uncentered")

    const first = champKeyById(champions.value?.[0]?.championId ?? 0)
    if (!first) return null
    else if (first)
      return getSplash(first, "uncentered", getRandom(skinIndex[first] ?? []))

    return null
  })

  return {
    account,
    matches,
    allies,
    champions,
    mastery,
    splash,
    timelines,

    getMastery,
    getTimelines
  }
})
