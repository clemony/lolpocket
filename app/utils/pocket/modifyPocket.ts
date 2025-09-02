// CHAMPS

export function removeChampion(champion, pocket) {
  const find = pocket.champions.findIndex(c => c == champion)
  if (find != -1)
    pocket.champions.splice(find, 1)
  if (champion == pocket.main.champion)
    pocket.main.champion = ''
}

// RUNES

export function resetRunes(set) {
  const id = set.id
  set = newRuneSet()
  set.id = id
}

export function deleteRuneSet(pocket, set) {
  const a = pocket.runes.findIndex(s => s.id == set.id)
  console.log('💠 - deleteRuneSet - a:', a)
  if (a != -1) {
    pocket.runes.splice(a, 1)
  }
}

export function removeSpellSet(pocket, set) {
  const a = pocket.spells.sets.findIndex(s => s == set)
  if (!a)
    return
  pocket.spells.sets.splice(a, 1)
}
