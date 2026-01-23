import type { DateRange } from 'reka-ui'
import equal from 'fast-deep-equal/es6'
import { computed, shallowRef, unref } from 'vue'

const GLOBAL_KEYS = [
  ['participants', 'championName'],
  ['participants', 'name'],
  ['participants', 'tag'],
]

const RESTRICTED_KEYS = ['keywords']

export function useMatchFilters(
  puuid: MaybeRef<string | null | undefined>,
  matches: MaybeRef<MatchData[] | null | undefined>
) {
  const query = shallowRef<string>('')
  const filter = shallowRef<MatchFilter>({})

  const defaultFilter: MatchFilter = {
    ally: '',
    amount: toValue(matches).length,
    champion: '',
    date: {
      end: null,
      start: null,
    },
    patch: null,
    queue: 0,
    role: 'all',
  }
  function setFilter<K extends keyof MatchFilter>(
    key: K,
    value: MatchFilter[K]
  ) {
    filter.value = { ...filter.value, [key]: value }
  }

  function clearFilters() {
    filter.value = defaultFilter
  }

  function filterEmpty(): boolean {
    return equal(filter.value, defaultFilter)
  }

  function setDateStart<K extends keyof DateRange>(value: DateRange[K]) {
    filter.value = { ...filter.value, date: { end: value, start: value } }
  }

  const filtered = computed<MatchData[]>(() => {
    const id = unref(puuid)
    const arr = unref(matches) ?? []
    const f = filter.value

    if (!id)
      return arr

    const empty
      = !f.ally && !f.champion && !f.patch && !f.queue && f.role === 'all'

    if (empty)
      return arr

    return arr.filter(m => matchFilters(id, m, f))
  })

  const player = computed(() => {
    const p = filtered.value.map((m) => {
      return {
        mapId: m.mapId,
        matchId: m.matchId,
        queueId: m.queueId,
        ...m.participants.find(p => p.puuid === toValue(puuid)),
      }
    })
    return p.map((a) => {
      const items = [
        ...Object.values(a.items),
        ...Object.values(a.items.slots),
      ].flatMap(i => itemNameById(i))

      const runes = [
        a.runes.keystone,
        ...Object.values(a.runes.primary.runes),
        ...Object.values(a.runes.secondary.runes),
      ].flatMap(i => runeNameById(i))

      const paths = [a.runes.primary.path, a.runes.secondary.path].map(i =>
        pathNameById(i)
      )
      const spells = a.spells.map(i => spellNameById(i))

      const outcome
        = a.win === 'remake'
          ? ['remake', 'surrender', 'redo']
          : a.win
            ? ['win', 'victory']
            : ['loss', 'lose', 'defeat']

      const map = Object.values(mapIndex.find(i => i.id === a.mapId)).filter(
        i => typeof i === 'string'
      )

      const queue = Object.values(queueIndex)

      return {
        keywords: [
          champNameById(a.championId),
          a.role,
          ...items,
          ...runes,
          ...paths,
          ...spells,
          ...outcome,
          ...map,
          ...queue,
        ].filter(i => i),
        matchId: a.matchId,
      }
    })
  })

  const globalSearch = useSearch(filtered, query, {
    keys: GLOBAL_KEYS,
  })

  const playerSearch = useSearch(player, query, {
    keys: RESTRICTED_KEYS,
  })

  const filteredMatches = computed<MatchData[]>(() => {
    if (!query.value.length)
      return filtered.value

    const playerMatches
      = playerSearch.value?.map(p =>
        unref(matches)?.find(m => m.matchId === p.matchId)
      ) ?? []

    const globalMatches = globalSearch.value ?? []

    const map = new Map<string, MatchData>()

    for (const m of [...playerMatches, ...globalMatches]) {
      if (m)
        map.set(m.matchId, m)
    }

    const final
      = filter.value.amount
        ? [...map.values()].splice(0, filter.value.amount)
        : [...map.values()]

    filter.value.amount === final.length
    return final
  })

  return {
    clearFilters,
    filter,
    filteredMatches,
    filterEmpty,
    query,
    setDateStart,
    setFilter,
  }
}
