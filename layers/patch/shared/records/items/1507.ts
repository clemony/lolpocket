// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 1507,
  name: 'Overcharged',
  noEffects: false,
  rank: 'Special',
  removed: false,
  specialRecipe: 0,
  gold: {
    base: 0,
    purchasable: false,
    sell: 0,
    total: 0
  },
  maps: [
    11,
    12,
    21,
    30,
    35
  ],
  passives: [
    {
      effects: 'At 55 minutes, this turret begins to malfunction, losing armor and magic resist. After 5 minutes, it will start breaking down, losing an increasing percentage of its <img src="/img/icons/health.webp" class="tip-icon" />health every 30 seconds.',
      mythic: false,
      unique: true
    }
  ],
  stats: {}
}
export default item