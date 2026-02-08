// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 1011,
  name: 'Giant\'s Belt',
  description: '350 Health\n\n',
  noEffects: true,
  rank: 'Epic',
  removed: false,
  specialRecipe: 0,
  buildsFrom: [
    {
      id: 1028,
      name: 'Ruby Crystal',
      gold: 400
    }
  ],
  buildsInto: [
    {
      id: 3119,
      name: 'Winter\'s Approach',
      gold: 2400
    },
    {
      id: 8001,
      name: 'Anathema\'s Chains',
      gold: 2500
    },
    {
      id: 3748,
      name: 'Titanic Hydra',
      gold: 3300
    },
    {
      id: 3083,
      name: 'Warmog\'s Armor',
      gold: 3100
    },
    {
      id: 3039,
      name: 'Atma\'s Reckoning',
      gold: 2900
    },
    {
      id: 2525,
      name: 'Protoplasm Harness',
      gold: 2500
    },
    {
      id: 3084,
      name: 'Heartsteel',
      gold: 3000
    },
    {
      id: 3116,
      name: 'Rylai\'s Crystal Scepter',
      gold: 2600
    },
    {
      id: 3143,
      name: 'Randuin\'s Omen',
      gold: 2700
    },
    {
      id: 323119,
      name: 'Winter\'s Approach',
      gold: 2400
    },
    {
      id: 6665,
      name: 'Jak\'Sho, The Protean',
      gold: 3200
    },
    {
      id: 4637,
      name: 'Demonic Embrace',
      gold: 3000
    },
    {
      id: 6609,
      name: 'Chempunk Chainsword',
      gold: 3100
    },
    {
      id: 6667,
      name: 'Radiant Virtue',
      gold: 2600
    }
  ],
  gold: {
    base: 500,
    sell: 630,
    total: 900
  },
  maps: [
    11,
    12,
    21,
    35
  ],
  stats: {
    health: 350
  }
}
export default item