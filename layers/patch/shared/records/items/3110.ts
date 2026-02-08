// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 3110,
  name: 'Frozen Heart',
  nicknames: [
    'fh'
  ],
  description: '75 Armor\n400 Mana\n20 Ability Haste\n\nWinter\'s Caress\nReduce the Attack Speed of nearby champions by 20%.',
  noEffects: false,
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  buildsFrom: [
    {
      id: 3082,
      name: 'Warden\'s Mail',
      gold: 1000
    },
    {
      id: 3024,
      name: 'Glacial Buckler',
      gold: 900
    }
  ],
  gold: {
    base: 600,
    sell: 1750,
    total: 2500
  },
  maps: [
    11,
    12,
    21,
    35
  ],
  passives: [
    {
      name: 'Winter\'s Caress',
      effects: '<img src="/img/icons/cripple.webp" class="tip-icon " />Cripples the attack speed of enemy champions within 700 units by 20%.',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    abilityHaste: 20,
    armor: 75,
    mana: 400
  }
}
export default item