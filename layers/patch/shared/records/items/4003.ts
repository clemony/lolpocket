// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 4003,
  name: 'Lifeline',
  nicknames: [
    'lethality'
  ],
  description: '25 Attack Damage\n5 Lethality\n4% Move Speed\n\nActive - Soul Anchor (0s)\nMark your current location. After 4 seconds, return to that location. You may recast at any point during Soul Anchor\'s duration to return to your marked location early.',
  noEffects: false,
  rank: 'Epic',
  removed: false,
  specialRecipe: 0,
  active: [
    {
      name: 'Soul Anchor',
      cooldown: 45,
      effects: 'Mark your current location. After 4 seconds, you automatically <img src="/img/icons/blink.webp" class="tip-icon " />blink to the marked location after a 0.5-second delay. <i>Soul Anchor</i> may be recast within its duration to manually blink to the marked location after the same delay (45 second cooldown, starts after the blink).',
      unique: true
    }
  ],
  buildsFrom: [
    {
      id: 6690,
      name: 'Rectrix',
      gold: 775
    },
    {
      id: 1036,
      name: 'Long Sword',
      gold: 350
    }
  ],
  buildsInto: [
    {
      id: 4004,
      name: 'Spectral Cutlass',
      gold: 2800
    }
  ],
  gold: {
    base: 475,
    sell: 1120,
    total: 1600
  },
  maps: [
    12,
    21,
    35
  ],
  stats: {
    attackDamage: 25,
    lethality: 5,
    percentMovespeed: 4
  }
}
export default item