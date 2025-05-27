export function formatLink(link: string) {
  return link.replace(' ', '_').replace('\'', '%27')
}
// get wiki link

export function getWikiLink(thing: string) {
  const a = formatLink(thing)
  return `https://wiki.leagueoflegends.com/en-us/${a}`
}
