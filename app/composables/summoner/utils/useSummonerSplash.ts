export function useSummonerSplash(
  account: Ref<Account>,
  summoner: Ref<Summoner>,
  matches: MatchData[]
) {
  const splash = computed(() => {
    if (account && account?.value.splash) return account?.value.splash
    const { top } = useChampions(summoner?.value?.puuid, matches)
    if (top()?.key && top()?.key !== "0")
      return getSplash(
        top()?.key,
        "uncentered",
        getRandom(skinIndex[top()?.key])
      )
    //
    return getRandomBg()
  })
  return splash
}
