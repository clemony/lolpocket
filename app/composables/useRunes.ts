export function useRunes(player?: ComputedRef<any>, set?: ComputedRef<any>) {
  const { data: runeData } = useFetch<Record<string, Path>>('/api/runes.json')

  const allRunes = computed(() =>
    Object.values(runeData.value ?? {}).flatMap(path =>
      Object.values(path).flat(),
    ),
  )

  const playerKeystone = computed(() => {
    if (!player?.value)
      return null
    const id = player.value.perks.keystone
    const found = allRunes.value.find(r => r.id === id)
    return found
      ? {
          path: found.path.toLowerCase(),
          key: found.key,
        }
      : null
  })

  const playerPaths = computed(() => {
    if (!player?.value || !runeData.value)
      return null
    const secondary = player.value.perks.secondary
    const match = Object.values(runeData.value).find(p => p.id === secondary)
    return {
      secondary: match?.name ?? null,
    }
  })

  const pathList = ['Precision', 'Domination', 'Sorcery', 'Resolve', 'Inspiration']

  const getKeystones = (set: ComputedRef<any>) => computed(() =>
    runeData.value?.[set.value[0]?.path]?.[0] ?? [],
  )

  const getPrimarySlots = (set: ComputedRef<any>) => computed(() => {
    if (!set.value?.[0]?.path)
      return []
    return Object.values(runeData.value?.[set.value[0].path] ?? {}).slice(1, 4)
  })

  const getSecondarySlots = (set: ComputedRef<any>) => computed(() => {
    if (!set.value?.[1]?.path)
      return []
    return Object.values(runeData.value?.[set.value[1].path] ?? {}).slice(1, 4)
  })

  return {
    runeData,
    allRunes,
    playerKeystone,
    playerPaths,
    getKeystones,
    getPrimarySlots,
    getSecondarySlots,
    pathList,
  }
}