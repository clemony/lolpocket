// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 6673,
  name: 'Immortal Shieldbow',
  description: '55 Attack Damage\n25% Critical Strike Chance\n\nLifeline\nTaking damage that would reduce your Health below 30% grants a Shield for 3 seconds.',
  noEffects: false,
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  buildsFrom: [
    {
      id: 1037,
      name: 'Pickaxe',
      gold: 875
    },
    {
      id: 6670,
      name: 'Noonquiver',
      gold: 1300
    }
  ],
  gold: {
    base: 825,
    sell: 2100,
    total: 3000
  },
  maps: [
    11,
    12,
    21,
    35
  ],
  passives: [
    {
      name: 'Lifeline',
      cooldown: '90',
      effects: 'If you would take damage that would reduce you below 30% of your <b>maximum</b> health, you first gain a <img src="/img/icons/shield.webp" class="tip-icon light:invert" />shield that absorbs (<img src="/img/icons/melee.webp" class="inline-icon" />400 – 700 /<img src="/img/icons/ranged.webp" class="inline-icon" />320 – 560) damage for 3 seconds.',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    attackDamage: 55,
    criticalStrikeChance: 25
  }
}
export default item