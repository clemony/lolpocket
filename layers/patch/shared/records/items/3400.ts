// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 3400,
  name: 'Your Cut',
  description: 'Active - Consume: Gain 0 gold.\n\nBonus gold given to an ally when Pyke executes an enemy champion using his Ultimate Ability. If no ally was involved in the kill, Pyke gets to keep the Cut!',
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
  stats: {}
}
export default item