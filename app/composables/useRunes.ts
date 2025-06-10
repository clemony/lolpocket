export function useRunes(player?: ComputedRef<any>, set?: ComputedRef<any>) {
  const ix = useIndexStore()

  const runes = computed(() => ix.runes)

  const playerKeystone = computed(() =>
    ix.runeById(player.value.perks.keystone)
  )

  const playerPaths = computed(() => {
    if (!player?.value || !runes.value) return null
    ix.loadPaths()
    const match = ix.pathNameById(player.value.perks.secondary)
    return match ?? null
  })

  const pathList = [
    "Precision",
    "Domination",
    "Sorcery",
    "Resolve",
    "Inspiration",
  ]

  const getKeystones = (set: ComputedRef<any>) =>
    computed(() => runes.value?.[set.value[0]?.path]?.[0] ?? [])

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
    runes,
    playerKeystone,
    playerPaths,
    getKeystones,
    getPrimarySlots,
    getSecondarySlots,
    pathList,
  }
}
