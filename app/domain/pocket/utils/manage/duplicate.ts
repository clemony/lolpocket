//
// duplicate
import { nowInstantString } from "#shared/utils"

export function duplicatePocket(original: Pocket): Pocket {
  const newPocket = deepCopy(original)

  newPocket.key = crypto.randomUUID()
  newPocket.label = `${original.label} (copy)`

  newPocket.ouuid = user().account?.uuid ?? ""
  const now = nowInstantString()
  newPocket.created = now
  newPocket.updated = now

  pocketStore().pockets.push(newPocket)
  return newPocket
}

export function duplicateRuneSet(original: RuneSet, target: string): RuneSet {
  const newSet = deepCopy(original)
  const store = pocketStore()
  const pocket = computed(() => store.getPocket(target))

  newSet.id = crypto.randomUUID()
  if (pocket?.value?.runes) pocket.value.runes.push(newSet)
  return newSet
}

export function duplicateItemSet(original: ItemSet, target: string): ItemSet {
  const newSet = deepCopy(original)
  const store = pocketStore()
  const pocket = computed(() => store.getPocket(target))

  newSet.name = `${original.name} (copy)`
  newSet.id = crypto.randomUUID()
  if (pocket.value?.items) pocket.value.items.push(newSet)
  return newSet
}
