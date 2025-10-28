import type { regionIndex } from '#shared/appdata'
import type { RouteRecordRaw } from 'vue-router'
import { useDebounceFn } from '@vueuse/core'
import Fuse from 'fuse.js'
import { safeParse, string } from 'valibot'

interface UseSearchOptions {
  customChampions?: Ref<ChampionIndex[]> | ChampionIndex[]
  customItems?: Ref<ItemIndex[]> | ItemIndex[]
  pages?: boolean
  pockets?: boolean
}

export async function useSearch(
  query = ref<string>(''),
  tag = ref<string>(''),
  options: UseSearchOptions
) {
  const searchQuery = query
  const router = useRouter()

  // champion source
<<<<<<< HEAD
  // @todo runes
=======
  // TODO runes
>>>>>>> refs/remotes/origin/main
  const championSource
    = isRef(options.customChampions)
      ? options.customChampions
      : ref(options.customChampions ?? ix().champions)

  const itemSource
    = isRef(options.customItems)
      ? options.customItems
      : ref(options.customItems ?? ix().items)

  const championRef = computed(() => Object.values(unref(championSource)))
  const itemsRef = computed(() => Object.values(unref(itemSource)))

  const championFuse = ref<Fuse<any> | null>(null)
  const itemFuse = ref<Fuse<any> | null>(null)

  watch(
    championRef,
    (newVal) => {
      championFuse.value = new Fuse(newVal, { keys: ['name'], threshold: 0.3 })
    },
    { immediate: true }
  )

  watch(
    itemsRef,
    (newVal) => {
      itemFuse.value = new Fuse(newVal, {
        keys: ['name', 'nickname'],
        threshold: 0.3,
      })
    },
    { immediate: true }
  )

  const pageFuse
    = options.pages !== false
      ? ref(
          new Fuse(router.getRoutes(), {
            keys: ['name', 'meta.title', 'path', 'meta.searchKeys'],
            includeMatches: true,
            threshold: 0.3,
          })
        )
      : ref(null)

  const pocketFuse
    = options.pockets !== false
      ? ref(
          new Fuse(ps().pockets, {
            keys: ['name', 'champions', 'tags'],
            includeMatches: true,
            threshold: 0.3,
          })
        )
      : ref(null)

  const champions = computed(() => {
    return (
      championFuse.value?.search(searchQuery.value).map(r => r.item) || []
    )
  })

  const items = computed(() => {
    return itemFuse.value?.search(searchQuery.value).map(r => r.item) || []
  })

  const pageResults = computed(() => {
    if (!pageFuse.value)
      return []
    return pageFuse.value
      .search(searchQuery.value)
      .map(r => r.item)
      .filter(p => !p.meta?.search && p.path.split('/').length === 2)
  })

  const pockets = computed(() => {
    return pocketFuse.value?.search(searchQuery.value).map(r => r.item) || []
  })

  const resultsLength = computed(
    () =>
      items.value.length
      + champions.value.length
      + pockets.value.length
      + pageResults.value.length
  )

  const pages = computed (() => {
    const results = computed (() => !resultsLength || resultsLength === undefined ? pageResults.value : router.getRoutes().filter(r => r.meta?.search !== 'hidden' && r.path.split('/').length === 2))

    const g = shallowRef([])

    const singlePages = {
      name: '',
      items: (results.value.filter(r => r.meta?.search !== 'children') as RouteRecordRaw[]).sort((a, b) => Number(a.meta?.order) - Number(b.meta?.order)),
      order: 0
    }
    g.value.push(singlePages)

    results.value.filter(r => r.meta?.search === 'children').forEach((parent) => {
      g.value.push({
        name: parent.meta?.title || parent.name,
        items: (parent.children as RouteRecordRaw[]).sort((a, b) => Number(a.meta?.order) - Number(b.meta?.order)),
        order: parent.meta?.order
      })
    })
    return g.value.sort((a, b) => (b.order - a.order))
  })

  // const emit = defineEmits(['update:search', 'update:focus'])
  function clear() {
    query.value = ''
    tag.value = ''
    // emit('update:search', { search: { query, tag } })
  }

  return {
    champions,
    clear,
    items,
    pages,
    pockets,
    resultsLength,
    searchQuery
  }
}
