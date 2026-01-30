export function useRunes(player?: ComputedRef<any>, set?: ComputedRef<any>) {
  const runes = computed(() => runeIndex)

  const playerKeystone = computed(() =>
    runeById(player.value.perks.keystone)
  )

  const playerPaths = runeToPath[player.value?.runes?.secondary] ?? null

  const pathList = [
    'Precision',
    'Domination',
    'Sorcery',
    'Resolve',
    'Inspiration',
  ]

  /*   const getKeystones = (set: ComputedRef<any>) =>
    computed(
      () => runes.value?.filter(r => r.path === set.value?.primary?.path) || []
    ) */

  const getPrimarySlots = (set: ComputedRef<any>) =>
    computed(() => {
      if (!set.value?.[0]?.path) return []
      return Object.values(runes.value?.[set.value[0].path] ?? {}).slice(1, 4)
    })

  const getSecondarySlots = (set: ComputedRef<any>) =>
    computed(() => {
      if (!set.value?.[1]?.path) return []
      return Object.values(runes.value?.[set.value[1].path] ?? {}).slice(1, 4)
    })

  return {
    // getKeystones,
    getPrimarySlots,
    getSecondarySlots,
    pathList,
    playerKeystone,
    playerPaths,
    runes,
  }
}
