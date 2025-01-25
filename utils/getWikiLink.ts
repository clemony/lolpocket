export default function getWikiLink(thing: string) {
  const a = formatLink(thing)
  return `https://wiki.leagueoflegends.com/en-us/${a}`
}
