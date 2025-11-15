import { skinIndex as skins } from '~~/shared/indexes'

export function getSkinName(
  key: string,
  id: number | string,
): string | undefined {
  return skins[key]?.find(skin => skin.id === id.toString())?.name
}

export function skinNameFromUrl(url: string): string | undefined {
  const s = url
    .replace(
      'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/',
      '',
    )
    .split('/')

  const name = capitalize(s[0])
  let id = [...s].pop()
  id = id.replace(/[a-z]+_splash_[a-z]+_/, '')
  id = id.replace('.jpg', '')

  return `${skins.value[name]?.find(skin => skin.id === id.toString())?.name} ${name}`
}
