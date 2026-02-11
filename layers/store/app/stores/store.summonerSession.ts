export const sSession = defineStore("summonerSession", () => {
  const summoner = shallowRef<Summoner | null>(null)
  const ready = ref(false)

  function reset() {
    summoner.value = null
    ready.value = false
  }

  function setSummoner(next: Summoner) {
    summoner.value = { ...next } // snapshot, not reference
    ready.value = true
  }

  return {
    ready,
    reset,
    setSummoner,
    summoner,
  }
})
