// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 223039,
  name: 'Atma\'s Reckoning',
  nicknames: [
    'wreckoning'
  ],
  description: '700 Health\n20% Critical Strike Chance\n\nBig Hands\nGain 0-30% Critical Strike Chance, scaling with your bonus Health.',
  noEffects: false,
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  gold: {
    base: 2500,
    sell: 1250,
    total: 2500
  },
  maps: [
    30
  ],
  passives: [
    {
      name: 'Big Hands',
      effects: 'Gain <img src="/img/icons/critical-strike-chance.webp" class="tip-icon" />critical strike chance critical strike chance.',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    criticalStrikeChance: 20,
    health: 700
  }
}
export default item