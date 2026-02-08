// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 3051,
  name: 'Hearthbound Axe',
  nicknames: [
    'blue arrow'
  ],
  description: '20 Attack Damage\n20% Attack Speed\n\n',
  noEffects: true,
  rank: 'Epic',
  removed: false,
  specialRecipe: 0,
  buildsFrom: [
    {
      id: 1036,
      name: 'Long Sword',
      gold: 350
    },
    {
      id: 1042,
      name: 'Dagger',
      gold: 250
    },
    {
      id: 1036,
      name: 'Long Sword',
      gold: 350
    }
  ],
  buildsInto: [
    {
      id: 3302,
      name: 'Terminus',
      gold: 3000
    },
    {
      id: 3078,
      name: 'Trinity Force',
      gold: 3333
    },
    {
      id: 6672,
      name: 'Kraken Slayer',
      gold: 3000
    }
  ],
  gold: {
    base: 250,
    sell: 840,
    total: 1200
  },
  maps: [
    11,
    12,
    21,
    35
  ],
  stats: {
    attackDamage: 20,
    attackSpeed: 20
  }
}
export default item