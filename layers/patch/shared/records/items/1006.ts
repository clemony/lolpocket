// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 1006,
  name: 'Rejuvenation Bead',
  description: '100% Base Health Regen\n\n',
  noEffects: true,
  rank: 'Basic',
  removed: false,
  specialRecipe: 0,
  buildsInto: [
    {
      id: 3801,
      name: 'Crystalline Bracer',
      gold: 800
    },
    {
      id: 3211,
      name: 'Spectre\'s Cowl',
      gold: 1250
    },
    {
      id: 323109,
      name: 'Knight\'s Vow',
      gold: 2900
    },
    {
      id: 3109,
      name: 'Knight\'s Vow',
      gold: 2300
    }
  ],
  gold: {
    base: 300,
    sell: 120,
    total: 300
  },
  maps: [
    11,
    12,
    21,
    35
  ],
  stats: {
    healthRegen: 100
  }
}
export default item