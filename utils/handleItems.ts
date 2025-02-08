import { hexoid } from 'hexoid'

export function createItem(): Item {
  return {
    name: '',
    buy: 0,
    stats: {},
    effects: {},
    type: '',
    recipe: [<Item[]>([])],
    id: 0,
    removed: '',
    menu: {},
    nickname: [],
    tier: 0,
    caption: '',
    itemlimit: '',
    limit: '',
    modes: {},
  }
}
export function newItemSet(pocketKey?) {
  const toID = hexoid()
  const newSet = {
    name: `${generateRandomName()} Set`,
    key: toID(),
    items: [createItem()],
  }

  if (pocketKey) {
    const pocket = getPocket(pocketKey)

    newSet.items.splice(0, 1)
    pocket.items.sets.push(newSet)
    if (pocket.items.sets.length == 1) {
      pocket.items.default = newSet.key
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
