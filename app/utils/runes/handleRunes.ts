import { hexoid } from 'hexoid'

/* KEY

4. resetRunes
5. deleteRuneSet
6. getShardClass
7. getShardIcon
8. getRunePathName
*/

export function resetRunes(set) {
  set.keystone = null
  set[0].runes = { 1: null, 2: null, 3: null }
  set[1].runes = { 1: null, 2: null, 3: null }
}

export function deleteRuneSet(pocket, set) {
  console.log('💠 - deleteRuneSet - pocket:', pocket)
  console.log('💠 - deleteRuneSet - set:', set)
  const a = pocket.runes.findIndex(s => s == set)
  console.log('💠 - deleteRuneSet - a:', a)
  if (a != -1) {
    pocket.runes.splice(a, 1)
  }
}

export function getRunePathName(runeId: number, runePaths: any[]): string | null {
  for (const path of runePaths) {
    for (const slot of path.slots) {
      if (slot.runes.some(rune => rune.id === runeId)) {
        return path.name // Return the name of the path if the rune is found
      }
    }
  }
  return null // Return null if the rune isn't found in any path
}

// export function setSpellbookRune() {
//   const ds = useDataStore()
//   const rs = useRuneStore()
//   const a = ds.paths.find(p => p.name.toLowerCase() == 'inspiration')
//   rs.hoveredRune = a.slots[0].runes.find(r => r.name == 'Unsealed Spellbook')
// }
