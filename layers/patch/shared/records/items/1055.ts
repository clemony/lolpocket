// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 1055,
  name: 'Doran\'s Blade',
  nicknames: [
    'dblade'
  ],
  description: '10 Attack Damage\n80 Health\n2.5% Omnivamp\n\n',
  noEffects: true,
  rank: 'Starter',
  removed: false,
  specialRecipe: 0,
  gold: {
    base: 450,
    sell: 180,
    total: 450
  },
  maps: [
    11,
    12,
    21
  ],
  stats: {
    attackDamage: 10,
    health: 80,
    omnivamp: 2.5
  }
}
export default item