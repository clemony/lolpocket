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
  // TODO runes
  const ix = useIndexStore()
  const championSource = isRef(options.customChampions)
    ? options.customChampions
    : ref(options.customChampions ?? ix.champions)

  const itemSource = isRef(options.customItems)
    ? options.customItems
    : ref(options.customItems ?? ix.items)

  const championRef = computed(() => Object.values(unref(championSource)))
  const itemsRef = computed(() => Object.values(unref(itemSource)))

  const championFuse = ref<Fuse<any> | null>(null)
  const itemFuse = ref<Fuse<any> | null>(null)

  watch(championRef, (newVal) => {
    championFuse.value = new Fuse(newVal, { keys: ['name'], threshold: 0.3 })
  }, { immediate: true })

  watch(itemsRef, (newVal) => {
    itemFuse.value = new Fuse(newVal, { keys: ['name', 'nickname'], threshold: 0.3 })
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