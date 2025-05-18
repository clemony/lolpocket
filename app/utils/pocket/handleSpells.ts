export function newSpellSet(key?) {
  const newSet: SpellSet = [null, null]

  if (key) {
    const pocket = getPocket(key)
    pocket.spells.push(newSet)
  }
  else {
    return newSet
  }
}

export function removeSpellSet(pocket, set) {
  const a = pocket.spells.sets.findIndex(s => s == set)
  if (!a)
    return
  pocket.spells.sets.splice(a, 1)
}

export const summonerSpellIconArray = ['/img/spells/heal.webp', '/img/spells/ignite.webp', '/img/spells/barrier.webp', '/img/spells/ghost.webp', '/img/spells/exhaust.webp', '/img/spells/smite.webp', '/img/spells/flash.webp', '/img/spells/teleport.webp']