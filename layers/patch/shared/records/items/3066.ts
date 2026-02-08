// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 3066,
  name: 'Winged Moonplate',
  nicknames: [
    'chaps',
    'pants',
    'leggings',
    'zoomin'
  ],
  description: '200 Health\n4% Move Speed\n\n',
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
      id: 3181,
      name: 'Hullbreaker',
      gold: 3000
    },
    {
      id: 4401,
      name: 'Force of Nature',
      gold: 2800
    },
    {
      id: 3002,
      name: 'Trailblazer',
      gold: 2400
    },
    {
      id: 323002,
      name: 'Trailblazer',
      gold: 2600
    },
    {
      id: 3742,
      name: 'Dead Man\'s Plate',
      gold: 2900
    }
  ],
  gold: {
    base: 400,
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
    percentMovespeed: 4
  }
}
export default item