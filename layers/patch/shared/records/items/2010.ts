// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 2010,
  name: 'Total Biscuit of Everlasting Will',
  nicknames: [
    'kleptomancy'
  ],
  description: 'Active - Consume: Eat the biscuit to restore Health over 5 seconds, increased based on missing health. Consuming or selling a biscuit permanently grants 30 maximum Health. ',
  noEffects: false,
  rank: 'Special',
  removed: false,
  specialRecipe: 0,
  gold: {
    base: 50,
    purchasable: false,
    sell: 5,
    total: 50
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