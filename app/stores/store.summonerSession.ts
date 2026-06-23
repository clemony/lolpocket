export const sSession = defineStore("summonerSession", () => {
  const summoner = shallowRef<Summoner | null>(null)
  const ready = ref(false)
  const lastResolvedKey = ref<string>("")

  function reset() {
    summoner.value = null
    ready.value = false
  }

  function setSummoner(next: Summoner) {
    summoner.value = { ...next } // snapshot, not reference
    ready.value = true
  }

  const account = computed<Account | null>(() => {
    const puuid = summoner.value?.puuid
    if (!puuid) return null
    return publicUsers().getByPuuid(puuid)
  })

  const splash = computed(() => {
    if (account.value?.skin)
      return getSplashFromSkinKey(account.value.skin, "uncentered")
  })

  return {
    ready,
    lastResolvedKey,
    reset,
    setSummoner,
    summoner,
    account,
    splash,
  }
})
