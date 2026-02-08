// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 3175,
  name: 'Spellslinger\'s Shoes',
  nicknames: [
    'boots'
  ],
  description: '18 Magic Penetration\n8% Magic Penetration\n45 Move Speed\n\n',
  noEffects: true,
  rank: 'Boots',
  removed: false,
  specialRecipe: 0,
  buildsFrom: [
    {
      id: 3020,
      name: 'Sorcerer\'s Shoes',
      gold: 1100
    }
  ],
  gold: {
    base: 0,
    sell: 770,
    total: 1100
  },
  maps: [
    11
  ],
  stats: {
    flatMagicPenetration: 18,
    flatMovespeed: 45
  }
}
export default item