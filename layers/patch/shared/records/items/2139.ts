// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 2139,
  name: 'Elixir of Sorcery',
  nicknames: [
    'consumable',
    'blue'
  ],
  description: 'Consume\nGrants 50 Ability Power and 15% Mana Regen for 3 minutes. While active, damaging a champion or turret deals 25 bonus true damage (5s against champions).',
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