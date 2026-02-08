// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 6695,
  name: 'Serpent\'s Fang',
  nicknames: [
    'lethality'
  ],
  description: '55 Attack Damage\n15 Lethality\n\nShield Reaver\nDamaging an enemy champion reduces Shields they gain by % for 3 seconds. \nIf they were not already affected by Shield Reaver, reduce Shields on them by %.',
  noEffects: false,
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  buildsFrom: [
    {
      id: 3134,
      name: 'Serrated Dirk',
      gold: 1000
    },
    {
      id: 1037,
      name: 'Pickaxe',
      gold: 875
    }
  ],
  gold: {
    base: 625,
    sell: 1750,
    total: 2500
  },
  maps: [
    11,
    12,
    21,
    35
  ],
  passives: [
    {
      name: 'Shield Reaver',
      effects: 'Dealing damage to an enemy champion inflicts them with venom for 3 seconds, reducing any <img src="/img/icons/shield.webp" class="tip-icon light:invert" />shields they gain within the duration by (<img src="/img/icons/melee.webp" class="inline-icon" />50% /<img src="/img/icons/ranged.webp" class="inline-icon" />35%), and if the target was not already afflicted by the venom, reducing all of their active shields by the same amount.',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    attackDamage: 55,
    lethality: 15
  }
}
export default item