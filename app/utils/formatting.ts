export function formatLink(link: string) {
  return link.replace(" ", "_").replace("'", "%27")
}
// get wiki link

export function getWikiLink(thing: string) {
  const a = formatLink(thing)
  return `https://wiki.leagueoflegends.com/en-us/${a}`
}

export function formatUrlChampKey(key: string): string {
  if (!key) return
  return key.toLowerCase().replace("'", "").replace(". ", "")
}

const nameHyphenMap: Record<string, string> = {
  "Aurelion Sol": "Aurelion\nSol",
  // 'Blitzcrank': 'Blitz-\ncrank',
  Fiddlesticks: "Fiddle-\nsticks",
  Heimerdinger: "Heimer-\ndinger",
  "Miss Fortune": "Miss\nFortune",
  Mordekaiser: "Morde-\nkaiser",
  // 'Master Yi': 'Master\nYi',
  "Renata Glasc": "Renata\nGlasc",
  "Tahm Kench": "Tahm\nkench",
  Tryndamere: "Tryn-\ndamere",
}

export function hyphenateChampionName(n: string): string {
  return nameHyphenMap[n] ?? n
}

export function formatNumberPosition(num: number, returnNum?: boolean) {
  if (returnNum) {
    return (
      num === 1 ? `st`
      : num === 2 ? `${num}nd`
      : num === 3 ? `${num}rd`
      : `${num}th`
    )
  } else {
    return (
      num === 1 ? `st`
      : num === 2 ? `nd`
      : num === 3 ? `rd`
      : `th`
    )
  }
}
