// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 2021,
  name: 'Tunneler',
  nicknames: [
    'drill'
  ],
  description: '15 Attack Damage\n250 Health\n\n',
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
      id: 1028,
      name: 'Ruby Crystal',
      gold: 400
    }
  ],
  buildsInto: [
    {
      id: 3181,
      name: 'Hullbreaker',
      gold: 3000
    },
    {
      id: 3748,
      name: 'Titanic Hydra',
      gold: 3300
    },
    {
      id: 3161,
      name: 'Spear of Shojin',
      gold: 3100
    },
    {
      id: 3814,
      name: 'Edge of Night',
      gold: 3000
    },
    {
      id: 2501,
      name: 'Overlord\'s Bloodmail',
      gold: 3300
    },
    {
      id: 3053,
      name: 'Sterak\'s Gage',
      gold: 3200
    },
    {
      id: 3073,
      name: 'Experimental Hexplate',
      gold: 3000
    },
    {
      id: 6610,
      name: 'Sundered Sky',
      gold: 3100
    }
  ],
  gold: {
    base: 400,
    sell: 805,
    total: 1150
  },
  maps: [
    11,
    12,
    21,
    35
  ],
  stats: {
    attackDamage: 15,
    health: 250
  }
}
export default item