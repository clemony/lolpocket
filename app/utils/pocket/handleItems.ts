import { toast } from 'vue-sonner'

export function removeItemFromSet(
  pocket: Pocket,
  itemSet: ItemSet,
  itemx: ItemId
) {
  const set = pocket?.items.find(set => set === itemSet)

  console.log('💠 - removeItemFromSet - set:', set)
  if (set) {
    const index = set.items.findIndex(item => item === itemx)
    console.log('💠 - removeItemFromSet - index:', index)
    if (set && Array.isArray(set.items)) {
      set.items.splice(index, 1)
    }
  }
}

export function addItemToSet(pocket: Pocket, itemSet: ItemSet, item: ItemId) {
  const set = pocket.items.find(set => set === itemSet)

  if (set && Array.isArray(set.items)) {
    set.items.push(item)
  }
}

export function resetItems(set: ItemSet) {
  if (set && Array.isArray(set.items)) {
    set.items.splice(0, set.items.length)
  }
}

export function copyItemSetToPocket(targetPocket: Pocket, set: ItemSet) {
  const newSet = deepCopy(set)

  if (!set || !newSet || !targetPocket) {
    toast('Something went wrong!')
  }
  else {
    targetPocket.items.push(newSet)
    toast(`Set copied to ${targetPocket.name}!`)
  }
}

export function deleteItemSet(pocket: Pocket, set: ItemSet) {
  const i = pocket.items.findIndex(s => s === set)
  if (i) {
    pocket.items.splice(i, 1)
  }
}
