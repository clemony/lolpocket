export function getSimpleMatches(puuid: string){
const as = useAccountStore()
const ss = useSummonerStore()
return  ref<SimplifiedMatchData[]>(puuid == as.userAccount.puuid ? as.matches : ss.getSummoner(puuid).simplifiedMatches)
}