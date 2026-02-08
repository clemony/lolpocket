// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 3135,
  name: 'Void Staff',
  description: '95 Ability Power\n40% Magic Penetration\n\n',
  noEffects: true,
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  buildsFrom: [
    {
      id: 4630,
      name: 'Blighting Jewel',
      gold: 1100
    },
    {
      id: 1026,
      name: 'Blasting Wand',
      gold: 850
    }
  ],
  gold: {
    base: 1050,
    sell: 2100,
    total: 3000
  },
  maps: [
    11,
    12,
    21,
    35
  ],
  stats: {
    abilityPower: 95,
    percentMagicPenetration: 40
  }
}
export default item