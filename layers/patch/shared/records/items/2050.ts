// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 2050,
  name: 'Guardian\'s Shroud',
  description: '300 Health\n35 Ability Power\n15 Ability Haste\n\n',
  noEffects: true,
  rank: 'Starter',
  removed: false,
  specialRecipe: 0,
  gold: {
    base: 500,
    sell: 250,
    total: 500
  },
  maps: [
    30
  ],
  stats: {
    abilityHaste: 15,
    abilityPower: 35,
    health: 300
  }
}
export default item