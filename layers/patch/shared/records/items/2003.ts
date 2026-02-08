// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 2003,
  name: 'Health Potion',
  nicknames: [
    'consumable',
    'red'
  ],
  description: 'Consume\nRestores 120 Health over 15 seconds.',
  noEffects: false,
  rank: 'Consumable',
  removed: false,
  specialRecipe: 0,
  gold: {
    base: 50,
    sell: 20,
    total: 50
  },
  maps: [
    11,
    12,
    21
  ],
  stats: {}
}
export default item