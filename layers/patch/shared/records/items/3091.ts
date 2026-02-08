// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 3091,
  name: 'Wit\'s End',
  description: '50% Attack Speed\n45 Magic Resist\n20% Tenacity\n\nFray\nAttacks deal bonus magic damage On-Hit.',
  noEffects: false,
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  buildsFrom: [
    {
      id: 1043,
      name: 'Recurve Bow',
      gold: 700
    },
    {
      id: 1057,
      name: 'Negatron Cloak',
      gold: 850
    },
    {
      id: 1043,
      name: 'Recurve Bow',
      gold: 700
    }
  ],
  gold: {
    base: 550,
    sell: 1960,
    total: 2800
  },
  maps: [
    11,
    12,
    21,
    35
  ],
  passives: [
    {
      name: 'Fray',
      effects: 'Basic attacks deal 45 <b>bonus</b> magic damage on-hit.',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    attackSpeed: 50,
    magicResistance: 45,
    tenacity: 20
  }
}
export default item