// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 1027,
  name: 'Sapphire Crystal',
  nicknames: [
    'blue'
  ],
  description: '300 Mana\n\n',
  noEffects: true,
  rank: 'Basic',
  removed: false,
  specialRecipe: 0,
  buildsInto: [
    {
      id: 3803,
      name: 'Catalyst of Aeons',
      gold: 1300
    },
    {
      id: 3024,
      name: 'Glacial Buckler',
      gold: 900
    },
    {
      id: 3802,
      name: 'Lost Chapter',
      gold: 1200
    }
  ],
  gold: {
    base: 300,
    sell: 210,
    total: 300
  },
  maps: [
    11,
    12,
    21,
    35
  ],
  stats: {
    mana: 300
  }
}
export default item