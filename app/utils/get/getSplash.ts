export function getSplash(partialUrl: string) {
  return `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters${partialUrl}`
}

// https://raw.communitydragon.org/plugins/rcp-be-lol-game-data/global/default/assets/characters/akshan/skins/base/images/akshan_splash_tile_0.jpg
//

export function getSplashTileFromKey(key: string) {
  const extra = key == 'Ambessa' ? '.domina' : ''
  return `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/${key.toLowerCase()}/skins/base/images/${key.toLowerCase()}_splash_tile_0${extra}.jpg`
}
