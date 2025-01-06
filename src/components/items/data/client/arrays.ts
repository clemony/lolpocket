import { Category } from '@/types/utilityTypes'

export const categories = ref<Category[]>([
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

export const stats = [
    { id: 'ad', displayName: 'Attack Damage' },
    { id: 'ah', displayName: 'Ability Haste' },
    { id: 'ap', displayName: 'Ability Power' },
    { id: 'armor', displayName: 'Armor' },
    { id: 'armpen', displayName: 'Armor Penetration' },
    { id: 'as', displayName: 'Attack Speed' },
    { id: 'crit', displayName: 'Crit Chance' },
    { id: 'gp10', displayName: 'Gold / 10' },
    { id: 'hp', displayName: 'Health' },
    { id: 'hp5', displayName: 'Health Regen / 5' },
    { id: 'hsp', displayName: 'Heal & Shield Power' },
    { id: 'lethality', displayName: 'Lethality' },
    { id: 'lifesteal', displayName: 'Lifesteal' },
    { id: 'mana', displayName: 'Mana' },
    { id: 'mp5', displayName: 'Mana Regen / 5' },
    { id: 'mpen', displayName: 'Magic Penetration' },
    { id: 'mpenflat', displayName: 'Flat Magic Pen' },
    { id: 'mr', displayName: 'Magic Resist' },
    { id: 'ms', displayName: 'Movespeed' },
    { id: 'msflat', displayName: 'Base Movespeed' },
]

export const types = [
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
