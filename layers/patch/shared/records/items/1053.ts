// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 1053,
  name: 'Vampiric Scepter',
  description: '15 Attack Damage\n7% Life Steal\n\n',
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
      id: 3139,
      name: 'Mercurial Scimitar',
      gold: 3200
    },
    {
      id: 3146,
      name: 'Hextech Gunblade',
      gold: 3000
    },
    {
      id: 3072,
      name: 'Bloodthirster',
      gold: 3400
    },
    {
      id: 3074,
      name: 'Ravenous Hydra',
      gold: 3300
    },
    {
      id: 4403,
      name: 'The Golden Spatula',
      gold: 7187
    },
    {
      id: 3153,
      name: 'Blade of The Ruined King',
      gold: 3200
    }
  ],
  gold: {
    base: 550,
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
    attackDamage: 15,
    lifesteal: 7
  }
}
export default item