import { toast } from 'vue-sonner'
/*
createItem
newItemSet
removeItemFromSet
addItemToSet
remove items
*/

export function removeItemFromSet(pocket: Pocket, itemSet: ItemSet, itemx: ItemId) {
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

export function duplicateItemSet(pocket: Pocket, set: ItemSet) {
  const newSet = deepCopy(set)
  pocket.items.push(newSet)
}

export function resetItems(set: ItemSet) {
  if (set && Array.isArray(set.items)) {
    set.items.splice(0, set.items.length) // Reset the array
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
  const i = pocket.items.findIndex(s => s == set)
  if (i) {
    pocket.items.splice(i, 1)
  }
}

// remove items

export const removingItems = ref<Record<string, boolean>>({})

export function onRemove<T>(evt: any, array: T[]) {
  const itemKey = evt.item.dataset.key // Get unique key of removed item
  const index = evt.oldIndex

  if (index === undefined || index < 0 || index >= array.length)
    return // Ensure valid index

  // Apply "removing" class
  removingItems.value[itemKey] = true

  // Wait for animation to finish before actually removing
  setTimeout(() => {
    array.splice(index, 1) // Remove item from array
    delete removingItems.value[itemKey] // Cleanup
  }, 600) // Match animation duration
}
