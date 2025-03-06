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

export const statTotalGold: Stat[] = [
  {
    id: 'total',
    displayName: 'Total Gold Cost',
    checked: false,
    shortName: 'Total',
    icon: '',
    class: '',
  },
]
export const itemStats: Stat[] = [
  {
    id: 'ad',
    displayName: 'Attack Damage',
    checked: false,
    shortName: 'AD',
    icon: 'mdi:axe',
    class: 'hover:bg-precision-light/60',
  },

  {
    id: 'ah',
    displayName: 'Ability Haste',
    checked: false,
    shortName: 'AH',
    icon: 'iconoir:hourglass',
    class: 'hover:bg-inspiration-light/60',
  },

  {
    id: 'ap',
    displayName: 'Ability Power',
    checked: false,
    shortName: 'AP',
    icon: 'icon-park-outline:magic',
    class: 'hover:bg-sorcery-light/60',
  },

  {
    id: 'armor',
    displayName: 'Armor',
    checked: false,
    shortName: 'ARMOR',
    icon: 'mingcute:shield-shape-line',
    class: 'hover:bg-precision-light/60',
  },

  {
    id: 'armpen',
    displayName: 'Armor Penetration',
    shortName: 'APEN',
    checked: false,
    icon: 'mingcute:safe-shield-2-line',
    class: 'hover:bg-precision-light/60',
  },

  {
    id: 'as',
    displayName: 'Attack Speed',
    checked: false,
    shortName: 'AS',
    icon: 'mdi:bow-arrow',
    class: 'hover:bg-precision-light/60',
  },

  {
    id: 'crit',
    displayName: 'Crit Chance',
    checked: false,
    shortName: 'CRIT',
    icon: 'game-icons:comet-spark',
    class: 'hover:bg-domination-light/60',
  },

  {
    id: 'gp10',
    displayName: 'Gold / 10',
    shortName: 'GP/10',
    checked: false,
    icon: 'iconoir:coins',
    class: 'hover:bg-precision-light/60',
  },

  {
    id: 'hp',
    displayName: 'Health',
    shortName: 'HP',
    checked: false,
    icon: 'mdi:cards-heart-outline',
    class: 'hover:bg-resolve-light/60',
  },

  {
    id: 'hp5',
    displayName: 'Health Regen / 5',
    shortName: 'HP/5',
    checked: false,
    icon: 'material-symbols:heart-plus-outline',
    class: 'hover:bg-resolve-light/60',
  },

  {
    id: 'hsp',
    displayName: 'Heal & Shield Power',
    checked: false,
    shortName: 'HSP',
    icon: 'mingcute:shield-line',
    class: 'hover:bg-inspiration-light/60',
  },

  {
    id: 'lethality',
    displayName: 'Lethality',
    checked: false,
    shortName: 'LTY',
    icon: 'mingcute:safe-shield-2-fill',
    class: 'hover:bg-domination-light/60',
  },

  {
    id: 'lifesteal',
    displayName: 'Lifesteal',
    checked: false,
    shortName: 'LS',
    icon: 'game-icons:bloody-sword',
    class: 'hover:bg-domination-light/60',
  },

  {
    id: 'mana',
    displayName: 'Mana',
    checked: false,
    shortName: 'MANA',
    icon: 'tabler:droplet-filled',
    class: 'hover:bg-inspiration-light/60',
  },

  {
    id: 'mp5',
    displayName: 'Mana Regen / 5',
    shortName: 'MP/5',
    checked: false,

    icon: 'tabler:droplet-half-2-filled',
    class: 'hover:bg-inspiration-light/60',
  },

  {
    id: 'mpen',
    displayName: 'Magic Penetration',
    shortName: 'MPEN',
    checked: false,
    icon: 'tabler:circle-off',
    class: 'hover:bg-sorcery-light/60',
  },

  {
    id: 'mpenflat',
    displayName: 'Flat Magic Penetration',
    shortName: 'Flat MPEN',
    checked: false,
    icon: 'tabler:circle-off',

    iconClass: '-rotate-45 ',
    class: 'hover:bg-sorcery-light/60',
  },

  {
    id: 'mr',
    displayName: 'Magic Resist',
    checked: false,
    shortName: 'MR',
    icon: 'clarity:dot-circle-line',
    class: 'hover:bg-sorcery-light/60',
  },

  {
    id: 'ms',
    displayName: 'Movespeed',
    checked: false,
    shortName: 'MS',
    icon: 'ph:sneaker-move-fill',
    class: 'hover:bg-b2/60',
  },

  {
    id: 'msflat',
    displayName: 'Base Movespeed',
    checked: false,
    shortName: 'Base MS',
    icon: 'ph:sneaker-move',
    class: 'hover:bg-b2/60',
  },

]

// iconoir:archery
// iconoir:arrow-archery
// iconoir:archery-match
// iconoir:bounce-right

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
