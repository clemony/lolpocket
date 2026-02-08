// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 3044,
  name: 'Phage',
  nicknames: [
    'mallet'
  ],
  description: '15 Attack Damage\n200 Health\n\nRage\nAttacking grants Move Speed for 2 seconds.',
  noEffects: false,
  rank: 'Epic',
  removed: false,
  specialRecipe: 0,
  buildsFrom: [
    {
      id: 1028,
      name: 'Ruby Crystal',
      gold: 400
    },
    {
      id: 1036,
      name: 'Long Sword',
      gold: 350
    }
  ],
  buildsInto: [
    {
      id: 6631,
      name: 'Stridebreaker',
      gold: 3300
    },
    {
      id: 6630,
      name: 'Goredrinker',
      gold: 3200
    },
    {
      id: 3071,
      name: 'Black Cleaver',
      gold: 3000
    },
    {
      id: 3073,
      name: 'Experimental Hexplate',
      gold: 3000
    },
    {
      id: 3078,
      name: 'Trinity Force',
      gold: 3333
    }
  ],
  gold: {
    base: 350,
    sell: 770,
    total: 1100
  },
  maps: [
    11,
    12,
    21,
    35
  ],
  passives: [
    {
      name: 'Rage',
      effects: 'Basic attacks on-hit grant (<img src="/img/icons/melee.webp" class="inline-icon" />20 /<img src="/img/icons/ranged.webp" class="inline-icon" />10) <b>bonus</b> movement speed for 2 seconds.',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    attackDamage: 15,
    health: 200
  }
}
export default item