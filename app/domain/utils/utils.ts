//
export function ckey(keyOrId: string | number): string {
  const key = ref<string>("")

  if (typeof keyOrId === "number") key.value = champKeyById(keyOrId) ?? ""
  else key.value = keyOrId

  return key.value
}

// get wiki link

export function wikiLink(thing: string, region = "en-us") {
  const a = formatLink(thing)
  return `https://wiki.leagueoflegends.com/${region}/${a}`
}

export function formatUrlChampKey(key: string): string {
  if (!key) return ""
  return key.toLowerCase().replace("'", "").replace(". ", "")
}
