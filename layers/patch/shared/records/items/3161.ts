// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 3161,
  name: 'Spear of Shojin',
  description: '45 Attack Damage\n450 Health\n\nDragonforce \nGain 25 Basic Ability Haste.\n\nFocused Will \nDealing damage with Abilities increases your Champion\'s Ability and Passive damage by 3% for 6 seconds. (stacks 4 times).',
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
      id: 2021,
      name: 'Tunneler',
      gold: 1150
    },
    {
      id: 1028,
      name: 'Ruby Crystal',
      gold: 400
    }
  ],
  gold: {
    base: 675,
    sell: 2170,
    total: 3100
  },
  maps: [
    11,
    12,
    21,
    35
  ],
  passives: [
    {
      name: 'Dragonforce',
      effects: 'Gain 25 basic ability haste.',
      mythic: false,
      unique: true
    },
    {
      name: 'Focused Will',
      effects: 'Dealing ability damage with a non-innate ability generates a stack for 6 seconds, stacking up to 4 times and up to once per cast instance per second and every second for damage over time abilities. For each stack, your non-<img src="/img/icons/basic-damage.webp" class="tip-icon " />basic damage dealt by non-items gain 3% increased damage, for a total increase of 12% at <b>maximum</b> stacks.',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    attackDamage: 45,
    health: 450
  }
}
export default item