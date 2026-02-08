// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 3801,
  name: 'Crystalline Bracer',
  description: '200 Health\n100% Base Health Regen\n\n',
  noEffects: true,
  rank: 'Epic',
  removed: false,
  specialRecipe: 0,
  buildsFrom: [
    {
      id: 1028,
      name: 'Ruby Crystal',
      gold: 400
    },
    {
      id: 1006,
      name: 'Rejuvenation Bead',
      gold: 300
    }
  ],
  buildsInto: [
    {
      id: 3083,
      name: 'Warmog\'s Armor',
      gold: 3100
    },
    {
      id: 3084,
      name: 'Heartsteel',
      gold: 3000
    }
  ],
  gold: {
    base: 100,
    sell: 560,
    total: 800
  },
  maps: [
    11,
    12,
    21,
    35
  ],
  stats: {
    health: 200,
    healthRegen: 100
  }
}
export default item