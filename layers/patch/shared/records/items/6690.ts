// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 6690,
  name: 'Rectrix',
  description: '15 Attack Damage\n4% Move Speed\n\n',
  noEffects: true,
  rank: 'Epic',
  removed: false,
  specialRecipe: 0,
  buildsFrom: [
    {
      id: 1036,
      name: 'Long Sword',
      gold: 350
    }
  ],
  buildsInto: [
    {
      id: 3087,
      name: 'Statikk Shiv',
      gold: 2700
    },
    {
      id: 4003,
      name: 'Lifeline',
      gold: 1600
    },
    {
      id: 3142,
      name: 'Youmuu\'s Ghostblade',
      gold: 2800
    },
    {
      id: 6672,
      name: 'Kraken Slayer',
      gold: 3000
    },
    {
      id: 6700,
      name: 'Shield of the Rakkor',
      gold: 2675
    }
  ],
  gold: {
    base: 425,
    sell: 543,
    total: 775
  },
  maps: [
    11,
    12,
    21,
    35
  ],
  stats: {
    attackDamage: 15,
    percentMovespeed: 4
  }
}
export default item