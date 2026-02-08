// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 2031,
  name: 'Refillable Potion',
  nicknames: [
    'consumable',
    'Green Potion'
  ],
  description: 'Active (2 charges)\nRestores 100 Health over 12 seconds. \nRefills upon visiting the shop.',
  noEffects: false,
  rank: 'Consumable',
  removed: false,
  specialRecipe: 0,
  buildsInto: [
    {
      id: 2033,
      name: 'Corrupting Potion',
      gold: 500
    }
  ],
  gold: {
    base: 150,
    sell: 60,
    total: 150
  },
  maps: [
    11,
    12,
    21
  ],
  passives: [
    {
      effects: 'Holds charges that refill upon visiting the shop.',
      mythic: false,
      unique: true
    }
  ],
  stats: {}
}
export default item