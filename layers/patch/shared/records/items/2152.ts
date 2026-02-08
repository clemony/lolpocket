// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 2152,
  name: 'Elixir of Force',
  description: 'Consume\nGrants 30 Adaptive Force for 60 seconds. ',
  noEffects: false,
  rank: 'Consumable',
  removed: false,
  specialRecipe: 0,
  gold: {
    base: 50,
    purchasable: false,
    sell: 20,
    total: 50
  },
  maps: [
    11,
    12,
    21,
    35
  ],
  stats: {}
}
export default item