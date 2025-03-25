import { hexoid } from 'hexoid'

/*
createItem
newItemSet
removeItemFromSet
addItemToSet
remove items
*/

export function createItem(): Item {
  return {
    name: '',
    buy: 0,
    stats: {},
    effects: {},
    type: '',
    // recipe: [<Item[]>([])],
    id: 0,
    removed: '',
    menu: {},
    nickname: [],
    tier: 0,
    caption: '',
    itemlimit: '',
    limit: '',
    modes: {},
    cloneId: '',
  }
}
export function newItemSet(pocketKey?, setName?) {
  const toID = hexoid()
  const newSet = {
    name: setName || `${generateMediumString()} Set`,
    key: toID(),
    items: [createItem()],
  }

  if (pocketKey) {
    const pocket = getPocket(pocketKey)

    newSet.items.splice(0, 1)
    pocket.items.sets.push(newSet)
    if (pocket.items.sets.length == 1) {
      pocket.items.default = newSet
    }
  }
  return newSet
}

export function removeItemFromSet(pocket, itemSet, itemx) {
  const thisPocket = getPocket(pocket)
  const set = thisPocket?.items[0].sets.find(set => set.key === itemSet)

  if (set) {
    const index = set.items.findIndex(item => item === itemx)
    if (set && Array.isArray(set.items)) {
      set.items.splice(index)
    }
  }
}

export function addItemToSet(pocket, itemSet, item) {
  const set = pocket.items.sets.find(set => set.key === itemSet)

  if (set && Array.isArray(set.items)) {
    set.items.push(item)
  }
}

export function resetItems(set) {
  if (set && Array.isArray(set.items)) {
    set.items.splice(0, set.items.length) // Reset the array
  }
}

export function deleteItemSet(pocket, set) {
  const i = pocket.items.sets.findIndex(s => s.key == set.key)
  if (i) {
    pocket.items.sets.splice(i, 1)
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
