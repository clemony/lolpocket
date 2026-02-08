// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 2504,
  name: 'Kaenic Rookern',
  description: '400 Health\n80 Magic Resist\n100% Base Health Regen\n\nMagebane\nAfter not taking magic damage for 15 seconds, gain a magic shield. ',
  noEffects: false,
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  buildsFrom: [
    {
      id: 3211,
      name: 'Spectre\'s Cowl',
      gold: 1250
    },
    {
      id: 1057,
      name: 'Negatron Cloak',
      gold: 850
    }
  ],
  gold: {
    base: 800,
    sell: 2030,
    total: 2900
  },
  maps: [
    11,
    12,
    21,
    35
  ],
  passives: [
    {
      name: 'Magebane',
      effects: 'After not taking magic damage for 15 seconds, gain a <img src="/img/icons/shield.webp" class="tip-icon light:invert" />shield that absorbs magic damage equal to 15% of <b>maximum</b> health until destroyed.',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    health: 400,
    healthRegen: 100,
    magicResistance: 80
  }
}
export default item