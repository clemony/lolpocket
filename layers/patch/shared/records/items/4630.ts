// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 4630,
  name: 'Blighting Jewel',
  nicknames: [
    'pen',
    'purple'
  ],
  description: '25 Ability Power\n13% Magic Penetration\n\n',
  noEffects: true,
  rank: 'Epic',
  removed: false,
  specialRecipe: 0,
  buildsFrom: [
    {
      id: 1052,
      name: 'Amplifying Tome',
      gold: 400
    }
  ],
  buildsInto: [
    {
      id: 3135,
      name: 'Void Staff',
      gold: 3000
    },
    {
      id: 3137,
      name: 'Cryptbloom',
      gold: 3000
    }
  ],
  gold: {
    base: 700,
    sell: 770,
    total: 1100
  },
  maps: [
    11,
    12,
    21,
    35
  ],
  stats: {
    abilityPower: 25,
    percentMagicPenetration: 13
  }
}
export default item