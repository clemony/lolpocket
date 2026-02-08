// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 2138,
  name: 'Elixir of Iron',
  nicknames: [
    'consumable',
    'orange',
    'white'
  ],
  description: 'Consume\nGrants 300 Health, 25% Tenacity and increased size for 3 minutes. While active, you leave a path behind that boosts allied champions\' Move Speed by 15%.',
  noEffects: false,
  rank: 'Consumable',
  removed: false,
  specialRecipe: 0,
  gold: {
    base: 500,
    sell: 200,
    total: 500
  },
  maps: [
    11,
    12,
    21
  ],
  stats: {}
}
export default item