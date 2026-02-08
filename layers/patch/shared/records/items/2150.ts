// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 2150,
  name: 'Elixir of Skill',
  description: 'Consume\nGrants 1 Skill Point.\n\nThis item does not increase your level or allow allocating skill points past the normal maximum in a skill',
  noEffects: false,
  rank: 'Consumable',
  removed: false,
  specialRecipe: 0,
  gold: {
    base: 0,
    purchasable: false,
    sell: 0,
    total: 0
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