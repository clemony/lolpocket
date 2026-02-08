// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 1058,
  name: 'Needlessly Large Rod',
  nicknames: [
    'nlr'
  ],
  description: '65 Ability Power\n\n',
  noEffects: true,
  rank: 'Basic',
  removed: false,
  specialRecipe: 0,
  buildsInto: [
    {
      id: 3128,
      name: 'Deathfire Grasp',
      gold: 2900
    },
    {
      id: 3102,
      name: 'Banshee\'s Veil',
      gold: 3000
    },
    {
      id: 3157,
      name: 'Zhonya\'s Hourglass',
      gold: 3250
    },
    {
      id: 4645,
      name: 'Shadowflame',
      gold: 3200
    },
    {
      id: 4403,
      name: 'The Golden Spatula',
      gold: 7187
    },
    {
      id: 3089,
      name: 'Rabadon\'s Deathcap',
      gold: 3500
    }
  ],
  gold: {
    base: 1200,
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
    abilityPower: 65
  }
}
export default item