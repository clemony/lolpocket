// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 3348,
  name: 'Arcane Sweeper',
  description: 'UNIQUE Active - Hunter\'s Sight: An arcane mist grants vision in the target area for 5 seconds, revealing enemy champions and granting True Sight of traps in the area for 3 seconds (30 second cooldown).',
  noEffects: false,
  rank: 'Trinket',
  removed: false,
  specialRecipe: 0,
  active: [
    {
      effects: 'Summons a mist over the target location for 5 seconds, granting <img src="/img/icons/sight.webp" class="tip-icon light:invert" />sight of the area in a 375 radius and <img src="/img/icons/true-sight.webp" class="tip-icon " />revealing enemy <img src="/img/icons/stealthed-trap.webp" class="tip-icon " />traps within for 3 seconds.',
      range: 800,
      unique: false
    }
  ],
  gold: {
    base: 0,
    purchasable: false,
    sell: 0,
    total: 0
  },
  maps: [
    30
  ],
  stats: {}
}
export default item