// duplicate

export function deepCopy<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj))
}

export function duplicatePocket(original: Pocket): Pocket {
  const newPocket = deepCopy(original)

  newPocket.key = crypto.randomUUID()
  newPocket.name = `${original.name} (copy)`

  if (!newPocket.author.includes(as().account.puuid))
    newPocket.author.push(as().account.puuid)

  ps().pockets.push(newPocket)
  return newPocket
}

export function duplicateRuneSet(original: RuneSet, target: string): RuneSet {
  const newSet = deepCopy(original)
  const pocket = <Pocket>ps().getPocket(target)

  newSet.id = crypto.randomUUID()
  pocket.runes.push(newSet)
  return newSet
}

export function duplicateItemSet(original: ItemSet, target: string): ItemSet {
  const newSet = deepCopy(original)
  const pocket = <Pocket>ps().getPocket(target)

  newSet.name = `${original.name} (copy)`
  newSet.id = crypto.randomUUID()
  pocket.items.push(newSet)
  return newSet
}
