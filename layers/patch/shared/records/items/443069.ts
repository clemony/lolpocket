// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 443069,
  name: 'Hamstringer',
  nicknames: [
    'bleed'
  ],
  description: '45 Attack Damage\n40% Attack Speed\n25% Critical Strike Chance\n\nScour\nOn Critical Strike: Apply a bleed, dealing 25% of the damage done +  physical damage on hit over 2 seconds. This effect stacks any number of times. Apply a 7% Slow for 2 seconds. This effect stacks up to 35%.',
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
      name: 'Scour',
      effects: '<img src="/img/icons/critical-strike.webp" class="tip-icon " />Critical strikes inflict a bleed on the target for 2 seconds, dealing <b>bonus</b> physical damage equal to 5 – 20 (based on level) plus 6.25% of the pre-mitigation critical strike instance every 0.5 seconds, as well as applies a 7% <img src="/img/icons/slow.webp" class="tip-icon " />slow for the same duration. The bleed\'s damage is affected by <img src="/img/icons/critical-strike.webp" class="tip-icon " />critical strike modifiers and stacks infinitely; the slow stacks up to 35%.',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    attackDamage: 45,
    attackSpeed: 40,
    criticalStrikeChance: 25
  }
}
export default item