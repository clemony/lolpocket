//
import equal from "fast-deep-equal/es6"
import { defineStore } from "pinia"
import { patchIndex } from "#shared/constants/patch-index"

export const matchFilter = defineStore("match-filter", () => {
  const { summoner: s } = storeToRefs(sSession())
  const { matches } = storeToRefs(sMatches())
  console.log("🥸 - matches:", matches)

  const GLOBAL_KEYS = [
    ["participants", "championName"],
    ["participants", "name"],
    ["participants", "tag"],
  ]

  const RESTRICTED_KEYS = ["keywords"]

  const query = shallowRef("")
  const filter = shallowRef<MatchFilter>({
    ally: "",
    amount: undefined,
    champion: null,
    patch: undefined,
    queue: 0,
    role: "all",
    date: { end: undefined, start: undefined },
  })

  const DEFAULT_FILTER = structuredClone(filter.value)

  function setFilter<K extends keyof MatchFilter>(
    key: K,
    value: MatchFilter[K]
  ) {
    filter.value = { ...filter.value, [key]: value }
  }

  function clearFilters() {
    filter.value = structuredClone(DEFAULT_FILTER)
  }

  function filterEmpty() {
    return equal(filter.value, DEFAULT_FILTER)
  }

  const baseFiltered = computed<MatchData[]>(() => {
    const arr = matches.value
    const f = filter.value

    const puuid = s.value?.puuid
    if (!puuid) return arr

    const empty =
      !f.ally && !f.champion && !f.patch && !f.queue && f.role === "all"

    if (empty) return arr

    return arr.filter((m) => matchFilters(puuid, m, f))
  })

  const playerIndex = computed(() => {
    const puuid = s.value?.puuid
    if (!puuid) return []

    return baseFiltered.value
      .map((m) => {
        const p = m.participants.find((p) => p.puuid === puuid)
        if (!p) return null

        const items = [
          ...Object.values(p.items),
          ...Object.values(p.items.slots),
        ].flatMap((i) => itemNameById(i as number))

        const runes = [
          p.runes.keystone,
          ...Object.values(p.runes.primary.runes),
          ...Object.values(p.runes.secondary.runes),
        ].flatMap((i) => runeNameById(i))

        const paths = [p.runes.primary.path, p.runes.secondary.path].map((i) =>
          pathNameById(i)
        )

        const spells = p.spells.map((i) => spellNameById(i))

        const outcome =
          p.win === "remake"
            ? ["remake", "surrender", "redo"]
            : p.win
              ? ["win", "victory"]
              : ["loss", "lose", "defeat"]

        return {
          keywords: [
            champNameById(p.championId),
            p.role,
            ...items,
            ...runes,
            ...paths,
            ...spells,
            ...outcome,
          ].filter(Boolean),
          matchId: m.matchId,
        }
      })
      .filter((entry): entry is { keywords: string[]; matchId: string } =>
        Boolean(entry)
      )
  })

  const globalSearch = useSearch(baseFiltered, query, {
    keys: GLOBAL_KEYS,
  })

  const playerSearch = useSearch(playerIndex, query, {
    keys: RESTRICTED_KEYS,
  })

  const filteredMatches = computed<MatchData[]>(() => {
    if (!query.value.length) return baseFiltered.value

    const map = new Map<string, MatchData>()

    for (const m of globalSearch.value ?? []) map.set(m.matchId, m)

    for (const p of playerSearch.value ?? []) {
      if (!p) continue
      const m = matches.value.find((m) => m.matchId === p.matchId)
      if (m) map.set(m.matchId, m)
    }

    const out = [...map.values()]

    return filter.value.amount ? out.slice(0, filter.value.amount) : out
  })

  return {
    baseFiltered,
    clearFilters,
    filter,
    filteredMatches,
    filterEmpty,
    query,
    setFilter,
  }
})

export function matchFilters(
  puuid: string,
  match: MatchData,
  options: MatchFilter
) {
  const {
    ally,
    champion,
    date,
    ignoreRole = false,
    patch,
    queue,
    role,
  } = options

  const player = match.participants.find((p) => p.puuid === puuid)
  if (!player) return false

  const matchesPatch =
    !patch || patch.toString() === patchIndex[0] || match.gamePatch === patch

  const matchesQueue =
    !queue || Number(queue) === 0 || match.queueId === Number(queue)

  const matchesChampion =
    !champion || champion === null || player.championId === champion

  const matchesPlayer =
    !ally || ally === "" || match.participants.some((p) => p.puuid === ally)

  const matchesRole =
    ignoreRole || !role || role === "all" || player.role === role

  const dateValue = toValue(date)
  const matchesDate =
    (!dateValue?.end && !dateValue?.start) ||
    dateInRange(match.gameEndTimestamp, dateValue)

  return (
    matchesPatch &&
    matchesQueue &&
    matchesChampion &&
    matchesPlayer &&
    matchesDate &&
    matchesRole
  )
}
