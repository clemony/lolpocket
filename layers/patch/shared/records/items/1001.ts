// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 1001,
  name: 'Boots',
  description: '25 Move Speed\n\n',
  noEffects: true,
  rank: 'Boots',
  removed: false,
  specialRecipe: 0,
  buildsInto: [
    {
      id: 3117,
      name: 'Mobility Boots',
      gold: 1000
    },
    {
      id: 3158,
      name: 'Ionian Boots of Lucidity',
      gold: 900
    },
    {
      id: 3047,
      name: 'Plated Steelcaps',
      gold: 1200
    },
    {
      id: 3111,
      name: 'Mercury\'s Treads',
      gold: 1250
    },
    {
      id: 3006,
      name: 'Berserker\'s Greaves',
      gold: 1100
    },
    {
      id: 3005,
      name: 'Ghostcrawlers',
      gold: 1000
    },
    {
      id: 3009,
      name: 'Boots of Swiftness',
      gold: 1000
    },
    {
      id: 3010,
      name: 'Symbiotic Soles',
      gold: 900
    },
    {
      id: 3020,
      name: 'Sorcerer\'s Shoes',
      gold: 1100
    }
  ],
  gold: {
    base: 300,
    sell: 210,
    total: 300
  },
  maps: [
    11,
    12,
    21,
    35
  ],
  stats: {
    flatMovespeed: 25
  }
}
export default item