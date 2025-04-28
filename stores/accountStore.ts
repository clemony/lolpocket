import { defineStore } from 'pinia'

export const useAccountStore = defineStore(
  'as',
  () => {
    const themeClass = ref('daylight')
    const dataTheme = ref('daylight')
    const userNotes = ref<Note[]>([])
    const reducedMotion = ref(false)
    const favoriteChamps = ref<Champion[]>([])
    const favoriteItems = ref<Item[]>([])

    const userAccount = ref<userAccount>({
      name: 'Summoner',
      role: null,
      id: null,
      session: null,
      accessToken: '',
      refreshToken: '',
      puuid: '',
      gameName: 'Summoner',
      tagLine: 'Link Riot Account?',
      profileIconId: 0,
      summonerLevel: 0,
      region: 'Runeterra',
    })

    const userSummoner = ref<Summoner>({
      name: '',
      tag: '',
      puuid: '',
      profileIcon: '',
      level: 0,
      region: '',
      ranked: {
        solo: undefined,
        flex: undefined, // optional, safe
      },
      matches: [],
    })

    const { getAllMatches } = useMatchDexie()
    const { simplifyMatches } = useMatchSimplifier(userAccount.value.puuid)

    const matches = ref<SimplifiedMatchData[]>([])
    const fullMatches = ref<MatchData[]>([])

    function setFullMatches(data: MatchData[]) {
      fullMatches.value = data
      const simplifiedMatches = simplifyMatches(data)
      setMatches(simplifiedMatches)
    }

    // Function to set matches (simplified version)
    function setMatches(data: SimplifiedMatchData[]) {
      matches.value = data
    }

    // Function to append new matches (useful when loading new matches)
    function appendMatches(data: SimplifiedMatchData[]) {
      matches.value.push(...data)
    }

    // Function to load matches from IndexedDB (matchDexie)
    async function loadMatchesFromIndexedDB() {
      const cachedMatches = await getAllMatches()
      if (cachedMatches) {
        setFullMatches(cachedMatches)
      }
    }

    loadMatchesFromIndexedDB()

    return {
      // account
      userAccount,
      userSummoner,

      matches,
      fullMatches,
      setMatches,
      appendMatches,
      loadMatchesFromIndexedDB,
      setFullMatches,
      userNotes,

      // settings
      themeClass,
      dataTheme,
      reducedMotion,

      // champs
      favoriteChamps,

      // items
      favoriteItems,
    }
  },
  {
    persist: {
      storage: piniaPluginPersistedstate.localStorage(),
      key: 'accountStore',
    },
  },
)
