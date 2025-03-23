import { hexoid } from 'hexoid'

export function newSpellSet(key?) {
  const ds = useDataStore()
  const toID = hexoid()
  const newSet = [createDefaultSpell(), createDefaultSpell()]

  if (key) {
    const pocket = getPocket(key)
    pocket.spells.sets.push(newSet)

    if (pocket.runes.sets.length == 1) {
      pocket.spells.default = newSet
    }
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
