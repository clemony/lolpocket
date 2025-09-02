// duplicate

import { hexoid } from 'hexoid'

export function deepCopy<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj))
}

export function duplicatePocket(original: Pocket): Pocket {
  const toID = hexoid()
  const newPocket = deepCopy(original)

  newPocket.key = toID()
  newPocket.name = `${original.name} (copy)`

  ps().pockets.push(newPocket)
  return newPocket
}

export function duplicateRuneSet(original: RuneSet, target: string): RuneSet {
  const toID = hexoid()
  const newSet = deepCopy(original)
  const pocket = <Pocket>(ps().getPocket(target))

  newSet.id = toID()
  pocket.runes.push(newSet)
  return newSet
}

export function duplicateItemSet(original: ItemSet, target: string): ItemSet {
  const toID = hexoid()
  const newSet = deepCopy(original)
  const pocket = <Pocket>(ps().getPocket(target))

  newSet.name = `${original.name} (copy)`
  newSet.id = toID()
  pocket.items.push(newSet)
  return newSet
}