// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 3111,
  name: 'Mercury\'s Treads',
  nicknames: [
    'boots',
    'mercs'
  ],
  description: '20 Magic Resist\n45 Move Speed\n30% Tenacity\n\n',
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
      id: 1033,
      name: 'Null-Magic Mantle',
      gold: 400
    }
  ],
  buildsInto: [
    {
      id: 3173,
      name: 'Chainlaced Crushers',
      gold: 1250
    }
  ],
  gold: {
    base: 550,
    sell: 875,
    total: 1250
  },
  maps: [
    11,
    12,
    21,
    35
  ],
  stats: {
    flatMovespeed: 45,
    magicResistance: 20,
    tenacity: 30
  }
}
export default item