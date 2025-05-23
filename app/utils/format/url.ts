export function getSplash(partialUrl: string){
  return `https://raw.communitydragon.org/pbe/plugins/rcp-be-lol-game-data/global/default/assets/characters${partialUrl}`
}

// get wiki link

export function getWikiLink(thing: string) {
  const a = formatLink(thing)
  return `https://wiki.leagueoflegends.com/en-us/${a}`
}
