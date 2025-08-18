/* import type { ShallowRef } from "vue"

export const user = Symbol("user") as InjectionKey<{
  account: UserAccount
  summoner: Summoner
  toggleRankedSolo: [ShallowRef<boolean>, (value?: boolean) => boolean]
  toggleRankedFlex: [ShallowRef<boolean>, (value?: boolean) => boolean]
  toggleDisplayAllies: [ShallowRef<boolean>, (value?: boolean) => boolean]
}>

export const getUserAccount = computed(() => {
  const as = useAccountStore()
  if (!as?.userAccount?.uuid || !as.userAccount.riot.puuid) return null
  return as.userAccount
})

export const getAccountSummoner = computed(() => {
  const as = useAccountStore()
  if (!as?.userAccount?.uuid || !as.userAccount.riot.puuid) return null

  const ss = useSummonerStore()

  return ss.getSummoner(as.userAccount.riot.puuid)
})

export const toggleRankedSolo = useToggle(
  getUserAccount.value.settings.profile.display.rankedSolo
)

export const toggleRankedFlex = useToggle(
  getUserAccount.value.settings.profile.display.rankedFlex
)

export const toggleDisplayAllies = useToggle(
  getUserAccount.value.settings.profile.display.allies
)
 */
