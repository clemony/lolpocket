// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 1512,
  name: 'Super Mech Power Field',
  noEffects: false,
  rank: 'Special',
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
    30,
    35
  ],
  passives: [
    {
      name: 'Super Mech Power Field',
      effects: 'Grants nearby minions (excluding super minions) 35 armor and 35 magic resistance.',
      mythic: false,
      unique: true
    }
  ],
  stats: {}
}
export default item