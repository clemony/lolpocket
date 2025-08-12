export function generateSummonerLinks(summoner: Summoner) {
  return {
    history: `/summoner/${summoner.region}/${summoner.name}_${summoner.tag}`,
    mastery: `/summoner/${summoner.region}/${summoner.name}_${summoner.tag}/mastery`,
    live: `/summoner/${summoner.region}/${summoner.name}_${summoner.tag}/live`,
  }
}