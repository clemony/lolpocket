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