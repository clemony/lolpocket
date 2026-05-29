//
// --- Pocket Factory ---

import { generateName } from "~/domain/utils/generateStrings"
import { pType } from "~/domain/utils/pType"

export function newItemSet(): ItemSet {
  return {
    id: crypto.randomUUID(),
    name: generateName(),
    items: [],
    quest: 0
  }
}
export function newSpellSet(): SpellSet {
  return {
    id: crypto.randomUUID(),
    d: 0,
    f: 0
  }
}

export function newRuneSet(): RuneSet {
  return {
    id: crypto.randomUUID(),
    keystone: null,
    primary: {
      path: 0,
      runes: [0, 0, 0]
    },
    secondary: {
      path: 0,
      runes: [0, 0]
    },
    shards: [0, 0, 0]
  }
}

export function resetRuneSet(set: RuneSet): RuneSet {
  const id = set.id
  const a = getDeepDefaults(runeSetSchema)
  a.id = id
  return a
}

export function addSpellSet(pocket: Pocket | string) {
  let set = <SpellSet[]>[]
  const p: Pocket | undefined =
    typeof pocket === "string" ? toValue(pType(pocket)) : toValue(pocket)
  if (!p?.spells) return
  set = p.spells
  const a = getDeepDefaults(spellSetSchema)
  a.id = crypto.randomUUID()
  set.push(a)
}

export function addRuneSet(pocket: Pocket | string) {
  const p: Pocket | undefined =
    typeof pocket === "string" ? toValue(pType(pocket)) : toValue(pocket)
  if (!p?.runes) return
  if (p.runes.length >= 10) return "Max amount of rune sets reached!"

  let set = <RuneSet[]>[]
  set = p.runes
  const a = newRuneSet()
  a.id = crypto.randomUUID()
  set.push(a)
}
