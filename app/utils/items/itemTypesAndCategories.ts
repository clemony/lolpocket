export const itemCategories = ref<Category[]>([
  {
    id: 'fighter',
    displayName: 'fighter',
    checked: false,
    icon: 'role-icon-fighter',
    color: '--color-fighter',
  },
  {
    id: 'marksman',
    displayName: 'marksman',
    checked: false,
    icon: 'role-icon-marksman',
    color: '--color-precision',
  },
  {
    id: 'assassin',
    displayName: 'assassin',
    checked: false,
    icon: 'role-icon-assassin',
    color: '--color-domination',
  },
  {
    id: 'mage',
    displayName: 'mage',
    checked: false,
    icon: 'role-icon-mage',
    color: '--color-sorcery',
  },
  {
    id: 'tank',
    displayName: 'tank',
    checked: false,
    icon: 'role-icon-tank',
    color: '--color-resolve',
  },
  {
    id: 'support',
    displayName: 'support',
    checked: false,
    icon: 'role-icon-support',
    color: '--color-inspiration',
  },
  {
    id: 'onhit effects',
    displayName: 'on-hit Effects',
    checked: false,
    icon: 'ui-on-hit',
    color: '--color-onhit',
  },
  { id: 'movement', displayName: 'movement', icon: 'stats-ms', checked: false },
])

export const itemTypes = [
  'Starter',
  'Epic',
  'Boots',
  'Basic',
  'Legendary',
]
export const itemTypeExtras = [
  'Consumable & Vision',
  'Favorites',
]