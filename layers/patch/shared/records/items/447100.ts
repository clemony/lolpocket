// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 447100,
  name: 'Mirage Blade',
  description: '65 Adaptive Force\n60% Attack Speed\n6% Move Speed\n\nBlur\nOn-Hit reduce the remaining cooldowns of your Dash and Blink Abilities by 12% (reduced to 4% for Ultimates).',
  noEffects: false,
  rank: 'Special',
  removed: false,
  specialRecipe: 220007,
  gold: {
    base: 1000,
    sell: 400,
    total: 1000
  },
  maps: [
    30
  ],
  passives: [
    {
      name: 'Blur',
      effects: 'Basic attacks on-hit reduce the remaining cooldowns of your abilities and spells with <img src="/img/icons/dash.webp" class="tip-icon " />dashes and/or <img src="/img/icons/blink.webp" class="tip-icon " />blinks by 12%, modified to 4% for your ultimate ability.',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    attackSpeed: 60,
    percentMovespeed: 6
  }
}
export default item