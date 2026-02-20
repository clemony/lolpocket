//
// duplicate

export function deepCopy<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj))
}

export function duplicatePocket(original: Pocket): Pocket {
  const newPocket = deepCopy(original)

  newPocket.key = crypto.randomUUID()
  newPocket.name = `${original.name} (copy)`

  newPocket.ouuid = user().account?.uuid ?? ""

  usePockets().pockets.push(newPocket)
  return newPocket
}

export function duplicateRuneSet(original: RuneSet, target: string): RuneSet {
  const newSet = deepCopy(original)
  const pocket = <Pocket>usePockets().getPocket(target)

  newSet.id = crypto.randomUUID()
  if (pocket?.runes) pocket.runes.push(newSet)
  return newSet
}

export function duplicateItemSet(original: ItemSet, target: string): ItemSet {
  const newSet = deepCopy(original)
  const pocket = <Pocket>usePockets().getPocket(target)

  newSet.name = `${original.name} (copy)`
  newSet.id = crypto.randomUUID()
  if (pocket?.items) pocket.items.push(newSet)
  return newSet
}
