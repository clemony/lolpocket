// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 3009,
  name: 'Boots of Swiftness',
  nicknames: [
    'swifties'
  ],
  description: '55 Move Speed\n\nFleetfooted\nReduce the effectiveness of Slows by 25%.',
  noEffects: false,
  rank: 'Boots',
  removed: false,
  specialRecipe: 0,
  buildsFrom: [
    {
      id: 1001,
      name: 'Boots',
      gold: 300
    }
  ],
  buildsInto: [
    {
      id: 3170,
      name: 'Swiftmarch',
      gold: 1000
    }
  ],
  gold: {
    base: 700,
    sell: 700,
    total: 1000
  },
  maps: [
    11,
    12,
    21,
    35
  ],
  passives: [
    {
      name: 'Fleetfooted',
      effects: 'Gain 25% slow resist.',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    flatMovespeed: 55
  }
}
export default item