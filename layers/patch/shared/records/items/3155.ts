// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 3155,
  name: 'Hexdrinker',
  description: '25 Attack Damage\n25 Magic Resist\n\nLifeline\nTaking magic damage that would reduce your Health below 30% grants a magic damage Shield for 2.5 seconds.',
  noEffects: false,
  rank: 'Epic',
  removed: false,
  specialRecipe: 0,
  buildsFrom: [
    {
      id: 1036,
      name: 'Long Sword',
      gold: 350
    },
    {
      id: 1033,
      name: 'Null-Magic Mantle',
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
      id: 3156,
      name: 'Maw of Malmortius',
      gold: 3100
    }
  ],
  gold: {
    base: 200,
    sell: 910,
    total: 1300
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
      effects: 'If you would take magic damage that would reduce you below 30% of your <b>maximum</b> health, you first gain a <img src="/img/icons/shield.webp" class="tip-icon light:invert" />shield that absorbs (<img src="/img/icons/melee.webp" class="inline-icon" />110 – 280 /<img src="/img/icons/ranged.webp" class="inline-icon" />82.5 – 210) magic damage for 2.5 seconds.',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    attackDamage: 25,
    magicResistance: 25
  }
}
export default item