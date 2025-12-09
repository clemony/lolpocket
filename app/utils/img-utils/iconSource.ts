export function iconSource(type: string, id: string) {
  return (
    type === "ability" ?
      `https://cdn.communitydragon.org/latest/champion/${champNameById(
        id.length - 1
      )}/ability-icon/${id.slice(-1).toLowerCase()}`
    : type === "player" ? getSummonerIcon(id)
    : `/img/${type}s/${id}.webp`
  )
}
