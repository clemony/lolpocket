// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 2019,
  name: 'Steel Sigil',
  nicknames: [
    'Bloodstone'
  ],
  description: '15 Attack Damage\n30 Armor\n\n',
  noEffects: true,
  rank: 'Epic',
  removed: false,
  specialRecipe: 0,
  buildsFrom: [
    {
      id: 1029,
      name: 'Cloth Armor',
      gold: 300
    },
    {
      id: 1036,
      name: 'Long Sword',
      gold: 350
    },
    {
      id: 1029,
      name: 'Cloth Armor',
      gold: 300
    }
  ],
  buildsInto: [
    {
      id: 3026,
      name: 'Guardian Angel',
      gold: 3200
    },
    {
      id: 6333,
      name: 'Death\'s Dance',
      gold: 3300
    },
    {
      id: 6700,
      name: 'Shield of the Rakkor',
      gold: 2675
    }
  ],
  gold: {
    base: 150,
    sell: 770,
    total: 1100
  },
  maps: [
    11,
    12,
    21,
    35
  ],
  stats: {
    armor: 30,
    attackDamage: 15
  }
}
export default item