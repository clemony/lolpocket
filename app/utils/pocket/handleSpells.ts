import { hexoid } from 'hexoid'

export function newSpellSet(key?) {
  const ds = useDataStore()
  const toID = hexoid()
  const newSet = {
    0: createDefaultSpell(),
    1: createDefaultSpell(),
  }

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
