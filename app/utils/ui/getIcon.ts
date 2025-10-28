export function getIcon(icon: IconObject | ComputedRef<IconObject> | undefined) {
  return icon ? unref(icon) : undefined
}

export function getSummonerIcon(icon) {
  return `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/${icon}.jpg`
}