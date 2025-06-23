// https://raw.communitydragon.org/plugins/rcp-be-lol-game-data/global/default/assets/characters/akshan/skins/base/images/akshan_splash_tile_0.jpg
//

export function getLoadSplash(key: string, img: string) {
  return `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/${key.toLowerCase()}/skins/base/${img}.jpg`
}

export function getSkinSplash(key: string, skin: Skin, type: SplashType) {
  const champ = key.toLowerCase()

  const folder = computed(() => {
    function id() {
      const a = skin.id.replace(/(\d+)\..*/, "$1")
      return a.length == 1 && key != "Hwei" ? `0${a}` : a
    }
    return skin.name == "Original" && key != "Hwei" ? "base" : `skin${id()}`
  })

  const partialUrl =
    type == "centered" ? `images/${champ}_splash_centered_${skin.id}`
    : type == "tile" ? `images/${champ}_splash_tile_${skin.id}`
    : type == "load" ? `${champ}loadscreen_skin`
    : null
  return `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/${champ}/skins/${folder.value}/${partialUrl}.jpg`
}

export function getSplash(key: string, type: SplashType) {
  if (!key) return
  const ix = useIndexStore()
  const img =
    type == "centered" ? ix.centeredByKey(key)
    : type == "tile" ? ix.tileByKey(key)
    : type == "load" ? ix.loadScreenByKey(key)
    : null

  return `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/${key.toLowerCase()}/skins/${key == "Hwei" ? "skin0/" : "base/"}${type != "load" ? "images/" : ""}${img}.jpg`
}

// function getSplash() {
//   if (!champKey)
//     return
//   const img = ix.loadScreenByKey(champKey)

//   return `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/${champKey.toLowerCase()}/skins/base/${img}.jpg`
// }
