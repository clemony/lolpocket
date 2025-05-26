import Fuse from 'fuse.js'

interface UseSearchOptions {
  customChampions?: Ref<ChampionIndex[]> | ChampionIndex[]
  customItems?: Ref<ItemIndex[]> | ItemIndex[]
  includePages?: boolean
  includePockets?: boolean
}

export async function useSearch(query = ref(''), options: UseSearchOptions = {}) {
  const searchQuery = query
  const ps = usePocketStore()
  const router = useRouter()

  // champion source
  const championSource = isRef(options.customChampions)
    ? options.customChampions
    : ref(options.customChampions ?? await $fetch<ChampionIndex[]>('/api/index/champion-index.json'))

  const itemSource = isRef(options.customItems)
    ? options.customItems
    : ref(options.customItems ?? await $fetch<ItemIndex[]>('/api/index/item-index.json'))

  const champions = computed(() => Object.values(unref(championSource)))
  const items = computed(() => Object.values(unref(itemSource)))

  const championFuse = ref<Fuse<any> | null>(null)
  const itemFuse = ref<Fuse<any> | null>(null)

  watch(champions, (newVal) => {
    championFuse.value = new Fuse(newVal, { keys: ['name'], threshold: 0.3 })
  }, { immediate: true })

  watch(items, (newVal) => {
    itemFuse.value = new Fuse(newVal, { keys: ['name'], threshold: 0.3 })
  }, { immediate: true })

  const pageFuse = options.includePages !== false
    ? ref(new Fuse(router.getRoutes(), {
        keys: ['name', 'meta.title', 'meta.section', 'meta.searchKeys'],
        includeMatches: true,
        threshold: 0.3,
      }))
    : ref(null)

  const pocketFuse = options.includePockets !== false
    ? ref(new Fuse(ps.pockets, {
        keys: ['name', 'champions', 'tags'],
        includeMatches: true,
        threshold: 0.3,
      }))
    : ref(null)

  const championResult = computed(() => {
    return championFuse.value?.search(searchQuery.value).map(r => r.item) || []
  })

  const itemResult = computed(() => {
    return itemFuse.value?.search(searchQuery.value).map(r => r.item) || []
  })

  const pageResult = computed(() => {
    if (!pageFuse.value)
      return []
    return pageFuse.value.search(searchQuery.value).map(r => r.item).filter(p => p.meta.search !== false)
  })

  const groupedPages = computed(() => {
    const grouped: Record<string, PageRecord[]> = {}
    for (const route of pageResult.value) {
      const section = route.meta?.section || 'Uncategorized'
      if (!grouped[section])
        grouped[section] = []
      grouped[section].push(route)
    }
    return Object.entries(grouped).map(([section, routes]) => ({ section, routes }))
  })

  const pocketResult = computed(() => {
    return pocketFuse.value?.search(searchQuery.value).map(r => r.item) || []
  })

  const resultsLength = computed(() =>
    itemResult.value.length + championResult.value.length + pocketResult.value.length,
  )

  return {
    searchQuery,
    pageResult,
    groupedPages,
    pocketResult,
    championResult,
    itemResult,
    resultsLength,
  }
}