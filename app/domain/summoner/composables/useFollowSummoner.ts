export const useFollowSummoner = (summoner: Ref<Summoner | null>) => {
  const { settings } = storeToRefs(user())

  const isSelf = computed(
    () =>
      !!summoner.value?.puuid && summoner.value.puuid === user().account?.puuid
  )

  const isFavorite = computed(
    () =>
      !!settings.value?.favorite_summoners.includes(summoner.value?.puuid ?? "")
  )

  const tooltipText = computed(() => {
    if (!settings.value) return "Sign in to follow"
    if (isSelf.value) return "You"
    return isFavorite.value ? "Remove from faves" : "Add to faves"
  })

  function update(newValue: boolean) {
    if (!settings.value) return
    if (newValue) {
      settings.value.favorite_summoners.push(summoner.value?.puuid ?? "")
    } else {
      settings.value.favorite_summoners =
        settings.value.favorite_summoners.filter(
          (id) => id !== summoner.value?.puuid
        )
    }
  }

  return {
    isSelf,
    isFavorite,
    tooltipText,
    update: (newValue: boolean) => update(newValue)
  }
}
