// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 1004,
  name: 'Faerie Charm',
  description: '50% Base Mana Regen\n\n',
  noEffects: true,
  rank: 'Basic',
  removed: false,
  specialRecipe: 0,
  buildsInto: [
    {
      id: 3114,
      name: 'Forbidden Idol',
      gold: 600
    },
    {
      id: 3012,
      name: 'Chalice of Blessing',
      gold: 900
    },
    {
      id: 4642,
      name: 'Bandleglass Mirror',
      gold: 900
    }
  ],
  gold: {
    base: 200,
    sell: 140,
    total: 200
  },
  maps: [
    11,
    12,
    21,
    35
  ],
  stats: {
    manaRegen: 50
  }
}
export default item