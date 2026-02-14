//
// CHAMPS

import { newRuneSet } from "~/domain/pocket/addPocketModules"

export function removeChampion(champion: string, pocket: Pocket) {
  if (!pocket.champions) return
  const find = pocket.champions.findIndex((c) => c === champion)
  if (find !== -1) pocket.champions.splice(find, 1)
  if (champion === pocket._champion) pocket._champion = ""
}

// RUNES

export function resetRunes(set: RuneSet) {
  const id = set.id
  set = newRuneSet()
  set.id = id
}

export function deleteRuneSet(pocket: Pocket, set: RuneSet) {
  if (!pocket.runes) return
  const a = pocket.runes.findIndex((s) => s.id === set.id)
  console.log("💠 - deleteRuneSet - a:", a)
  if (a !== -1) {
    pocket.runes.splice(a, 1)
  }
}

export function removeSpellSet(pocket: Pocket, set: SpellSet) {
  if (!pocket.spells) return
  const a = pocket.spells.findIndex((s) => s === set)
  if (a === -1) return
  pocket.spells.splice(a, 1)
}
