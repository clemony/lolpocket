import { hexoid } from 'hexoid'

/*
createItem
newItemSet
removeItemFromSet
addItemToSet
itemCategories
itemTypes
itemStats
remove items
*/

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

export function deleteItemSet(pocket, set) {
  const i = pocket.items.sets.findIndex(s => s.key == set.key)
  if (i) {
    pocket.items.sets.splice(i, 1)
  }
}

export const itemCategories = ref<Category[]>([
  {
    id: 'fighter',
    displayName: 'fighter',
    checked: false,
    color: '--color-fighter',
  },
  {
    id: 'marksman',
    displayName: 'marksman',
    checked: false,
    color: '--color-precision',
  },
  {
    id: 'assassin',
    displayName: 'assassin',
    checked: false,
    color: '--color-domination',
  },
  {
    id: 'mage',
    displayName: 'mage',
    checked: false,
    color: '--color-sorcery',
  },
  {
    id: 'tank',
    displayName: 'tank',
    checked: false,
    color: '--color-resolve',
  },
  {
    id: 'support',
    displayName: 'support',
    checked: false,
    color: '--color-inspiration',
  },
  {
    id: 'onhit effects',
    displayName: 'on-hit Effects',
    checked: false,
    color: '--color-onhit',
  },
  { id: 'movement', displayName: 'movement', checked: false },
])

export const itemTypes = [
  'Starter',
  'Epic',
  'Boots',
  'Basic',
  'Legendary',
  'Trinket',
  'Consumable',
  'Potion',
  'Favorites',
]

export const itemStats = [
  { id: 'ad', displayName: 'Attack Damage', checked: false },
  { id: 'ah', displayName: 'Ability Haste', checked: false },
  { id: 'ap', displayName: 'Ability Power', checked: false },
  { id: 'armor', displayName: 'Armor', checked: false },
  { id: 'armpen', displayName: 'Armor Penetration', shortName: 'Armor Pen', checked: false },
  { id: 'as', displayName: 'Attack Speed', checked: false },
  { id: 'crit', displayName: 'Crit Chance', checked: false },
  { id: 'gp10', displayName: 'Gold / 10', shortName: 'GP/10', checked: false },
  { id: 'hp', displayName: 'Health', shortName: 'HP', checked: false },
  { id: 'hp5', displayName: 'Health Regen / 5', shortName: 'HP/5', checked: false },
  { id: 'hsp', displayName: 'Heal & Shield Power', checked: false },
  { id: 'lethality', displayName: 'Lethality', checked: false },
  { id: 'lifesteal', displayName: 'Lifesteal', checked: false },
  { id: 'mana', displayName: 'Mana', checked: false },
  { id: 'mp5', displayName: 'Mana Regen / 5', shortName: 'MP/5', checked: false },
  { id: 'mpen', displayName: 'Magic Penetration', shortName: 'Magic Pen', checked: false },
  { id: 'mpenflat', displayName: 'Flat Magic Pen', checked: false },
  { id: 'mr', displayName: 'Magic Resist', checked: false },
  { id: 'ms', displayName: 'Movespeed', checked: false },
  { id: 'msflat', displayName: 'Base Movespeed', checked: false },
]

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
