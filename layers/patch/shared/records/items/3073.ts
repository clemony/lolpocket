// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 3073,
  name: 'Experimental Hexplate',
  description: '40 Attack Damage\n20% Attack Speed\n450 Health\n\nHexcharged\nGain 30 Ultimate Ability Haste.\n\nOverdrive\nAfter casting your Ultimate, gain 50% Attack Speed and 20% Move Speed for 8 seconds. ',
  noEffects: false,
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  buildsFrom: [
    {
      id: 2021,
      name: 'Tunneler',
      gold: 1150
    },
    {
      id: 3044,
      name: 'Phage',
      gold: 1100
    },
    {
      id: 1042,
      name: 'Dagger',
      gold: 250
    }
  ],
  gold: {
    base: 500,
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
      name: 'Hexcharged',
      effects: 'Gain 30 ultimate haste.',
      mythic: false,
      unique: true
    },
    {
      name: 'Overdrive',
      effects: 'Upon casting your ultimate ability, enter <i>Overdrive</i> to gain 50% <b>bonus</b> attack speed and 20% <b>bonus</b> movement speed for 8 seconds (30 second cooldown, starts on ultimate cast).',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    attackDamage: 40,
    attackSpeed: 20,
    health: 450
  }
}
export default item