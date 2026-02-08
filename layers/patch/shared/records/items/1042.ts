// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 1042,
  name: 'Dagger',
  description: '10% Attack Speed\n\n',
  noEffects: true,
  rank: 'Basic',
  removed: false,
  specialRecipe: 0,
  buildsInto: [
    {
      id: 6631,
      name: 'Stridebreaker',
      gold: 3300
    },
    {
      id: 1043,
      name: 'Recurve Bow',
      gold: 700
    },
    {
      id: 3046,
      name: 'Phantom Dancer',
      gold: 2650
    },
    {
      id: 3051,
      name: 'Hearthbound Axe',
      gold: 1200
    },
    {
      id: 6675,
      name: 'Navori Flickerblade',
      gold: 2650
    },
    {
      id: 6677,
      name: 'Rageknife',
      gold: 1100
    },
    {
      id: 3144,
      name: 'Scout\'s Slingshot',
      gold: 600
    },
    {
      id: 3086,
      name: 'Zeal',
      gold: 1200
    },
    {
      id: 3006,
      name: 'Berserker\'s Greaves',
      gold: 1100
    },
    {
      id: 2510,
      name: 'Dusk and Dawn',
      gold: 3100
    },
    {
      id: 3073,
      name: 'Experimental Hexplate',
      gold: 3000
    },
    {
      id: 3131,
      name: 'Sword of the Divine',
      gold: 2300
    }
  ],
  gold: {
    base: 250,
    sell: 175,
    total: 250
  },
  maps: [
    11,
    12,
    21,
    35
  ],
  stats: {
    attackSpeed: 10
  }
}
export default item