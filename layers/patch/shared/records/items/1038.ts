// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 1038,
  name: 'B. F. Sword',
  nicknames: [
    'bf'
  ],
  description: '40 Attack Damage\n\n',
  noEffects: true,
  rank: 'Basic',
  removed: false,
  specialRecipe: 0,
  buildsInto: [
    {
      id: 3032,
      name: 'Yun Tal Wildarrows',
      gold: 3100
    },
    {
      id: 3097,
      name: 'Stormrazor',
      gold: 3200
    },
    {
      id: 3072,
      name: 'Bloodthirster',
      gold: 3400
    },
    {
      id: 6671,
      name: 'Galeforce',
      gold: 3500
    },
    {
      id: 3095,
      name: 'Stormrazor',
      gold: 3000
    },
    {
      id: 4403,
      name: 'The Golden Spatula',
      gold: 7187
    },
    {
      id: 3026,
      name: 'Guardian Angel',
      gold: 3200
    },
    {
      id: 3031,
      name: 'Infinity Edge',
      gold: 3500
    }
  ],
  gold: {
    base: 1300,
    sell: 910,
    total: 1300
  },
  maps: [
    11,
    12,
    21,
    35
  ],
  stats: {
    attackDamage: 40
  }
}
export default item