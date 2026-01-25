export function useMentionTabMenu(data: MentionData) {
  const query = shallowRef<string>("")
  const search = useSearch(data.items, query, { keys: ["name", "key"] })

  const results = computed(() =>
    search.value.length ? search.value : [...data.items].splice(0, 20)
  )

  const tab = shallowRef<number>(1)
  const groups: IndexGroup[] = [
    {
      name: "Search",
      icon: "search",
      items: results.value,
    },
    ...data.groups,
  ]

  const invert = shallowRef<boolean>(false)

  watch(
    () => tab.value,
    (newVal, oldVal) => {
      if (newVal < oldVal) invert.value = true
      else invert.value = false
    }
  )

  watch(
    () => query.value.length,
    (newVal) => {
      if (newVal > 0 && tab.value !== 0) tab.value = 0
    }
  )

  watch(
    () => query.value,
    (newVal) => {
      if (newVal === "" && tab.value !== 0) tab.value = 1
    }
  )

  return {
    groups,
    invert,
    query,
    results,
    tab,
  }
}
