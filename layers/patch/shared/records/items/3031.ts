// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 3031,
  name: 'Infinity Edge',
  nicknames: [
    'ie'
  ],
  description: '75 Attack Damage\n25% Critical Strike Chance\n30% Critical Strike Damage\n\n',
  noEffects: true,
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  buildsFrom: [
    {
      id: 1038,
      name: 'B. F. Sword',
      gold: 1300
    },
    {
      id: 1037,
      name: 'Pickaxe',
      gold: 875
    },
    {
      id: 1018,
      name: 'Cloak of Agility',
      gold: 600
    }
  ],
  gold: {
    base: 725,
    sell: 2450,
    total: 3500
  },
  maps: [
    11,
    12,
    21,
    35
  ],
  stats: {
    attackDamage: 75,
    criticalStrikeChance: 25,
    criticalStrikeDamage: 30
  }
}
export default item