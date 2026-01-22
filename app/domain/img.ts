import { skinIndex as skins } from "@constants"
import { bgArt } from "@domain"

export function getSplash(
  keyOrId: string | number,
  type: SplashType,
  s?: Skin
): string {
  const key = ckey(keyOrId)
  const champ = formatUrlChampKey(key)
  const skin = s || skinIndex[key][0]
  function id() {
    const a = skin.id.replace(/(\d+)\..*/, "$1")
    return a.length === 1 && key !== "Hwei" ? `0${a}` : a
  }
  const folder = computed(() => {
    return skin.name === "Original" && key !== "Hwei" ? "base" : `skin${id()}`
  })

  const partialUrl = skin.key.replace("<type>", type)

  return `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/${champ}/skins/${folder.value}/images/${partialUrl}.jpg`

  //`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champ}_${skin.id}.jpg`

  //
}

export function getRandomBg() {
  return getRandom(Object.values(bgArt))
}

export function getSkinName(
  key: string,
  id: number | string
): string | undefined {
  return skins[key]?.find((skin) => skin.id === id.toString())?.name
}

export function skinNameFromUrl(url: string): string | undefined {
  const s = url
    .replace(
      "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/",
      ""
    )
    .split("/")

  const name = capitalize(s[0])
  let id = [...s].pop()
  id = id.replace(/[a-z]+_splash_[a-z]+_/, "")
  id = id.replace(".jpg", "")

  return `${skins[name]?.find((skin) => skin.id === id.toString())?.name} ${name}`
}

const sanctumIcons = [7056, 7057]
export function getSummonerIcon(icon) {
  return `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/${icon}.jpg`

  /*
  if (sanctumIcons.includes(icon)) return `/img/sanctum/${icon}.webp`
  return `https://ddragon.leagueoflegends.com/cdn/${patchIndex[0]}/img/profileicon/${icon}.png` */
}
