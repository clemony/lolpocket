// https://raw.communitydragon.org/plugins/rcp-be-lol-game-data/global/default/assets/characters/akshan/skins/base/images/akshan_splash_tile_0.jpg

export function getSummonerIcon(icon) {
  return `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/${icon}.jpg`
}
export function getLoadSplash(key: string, img: string) {
  return `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/${key.toLowerCase()}/skins/base/${img}.jpg`
}

function cKey(keyOrId: string | number): string {
  const key = ref<string>()

  if (typeof keyOrId == 'number')
    key.value = ix().champKeyById(keyOrId)
  else key.value = keyOrId

  return key.value
}
export function getSkinSplash(
  keyOrId: string | number,
  skin: Skin,
  type: SplashType
) {
  const key = cKey(keyOrId)
  const champ = key.toLowerCase().replace('\'', '').replace('. ', '')

  const folder = computed(() => {
    function id() {
      const a = skin.id.replace(/(\d+)\..*/, '$1')
      return a.length == 1 && key != 'Hwei' ? `0${a}` : a
    }
    return skin.name == 'Original' && key != 'Hwei' ? 'base' : `skin${id()}`
  })

  const partialUrl
    = type == 'uncentered'
      ? `images/${champ}_splash_uncentered_${skin.id}`
      : type == 'centered'
        ? `images/${champ}_splash_centered_${skin.id}`
        : type == 'tile'
          ? `images/${champ}_splash_tile_${skin.id}`
          : type == 'load'
            ? `${champ}loadscreen_skin`
            : null
  return `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/${champ}/skins/${folder.value}/${partialUrl}.jpg`
}

export function getSplash(keyOrId: string | number, type: SplashType) {
  const key = cKey(keyOrId)
  if (!key)
    return
  const ix = useIndexStore()
  const img
    = type == 'uncentered'
      ? ix.splashByKey(key)
      : type == 'centered'
        ? ix.centeredByKey(key)
        : type == 'tile'
          ? ix.tileByKey(key)
          : type == 'load'
            ? ix.loadScreenByKey(key)
            : null

  return `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/${key.toLowerCase()}/skins/${key == 'Hwei' ? 'skin0/' : 'base/'}${type != 'load' ? 'images/' : ''}${img}.jpg`
}
