// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 3006,
  name: 'Berserker\'s Greaves',
  nicknames: [
    'boots',
    'zerker'
  ],
  description: '25% Attack Speed\n45 Move Speed\n\n',
  noEffects: true,
  rank: 'Boots',
  removed: false,
  specialRecipe: 0,
  buildsFrom: [
    {
      id: 1001,
      name: 'Boots',
      gold: 300
    },
    {
      id: 1042,
      name: 'Dagger',
      gold: 250
    },
    {
      id: 1042,
      name: 'Dagger',
      gold: 250
    }
  ],
  buildsInto: [
    {
      id: 3172,
      name: 'Gunmetal Greaves',
      gold: 1100
    }
  ],
  gold: {
    base: 300,
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
    attackSpeed: 25,
    flatMovespeed: 45
  }
}
export default item