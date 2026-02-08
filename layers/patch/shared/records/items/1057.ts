// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 1057,
  name: 'Negatron Cloak',
  description: '45 Magic Resist\n\n',
  noEffects: true,
  rank: 'Epic',
  removed: false,
  specialRecipe: 0,
  buildsFrom: [
    {
      id: 1033,
      name: 'Null-Magic Mantle',
      gold: 400
    }
  ],
  buildsInto: [
    {
      id: 4401,
      name: 'Force of Nature',
      gold: 2800
    },
    {
      id: 2504,
      name: 'Kaenic Rookern',
      gold: 2900
    },
    {
      id: 3091,
      name: 'Wit\'s End',
      gold: 2800
    },
    {
      id: 328020,
      name: 'Abyssal Mask',
      gold: 2850
    },
    {
      id: 6665,
      name: 'Jak\'Sho, The Protean',
      gold: 3200
    },
    {
      id: 8020,
      name: 'Abyssal Mask',
      gold: 2650
    }
  ],
  gold: {
    base: 450,
    sell: 595,
    total: 850
  },
  maps: [
    11,
    12,
    21,
    35
  ],
  stats: {
    magicResistance: 45
  }
}
export default item