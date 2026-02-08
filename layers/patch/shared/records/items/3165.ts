// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 3165,
  name: 'Morellonomicon',
  nicknames: [
    'forbidden book',
    'grievous',
    'grievous wounds',
    'last shadow',
    'nmst'
  ],
  description: '75 Ability Power\n350 Health\n15 Ability Haste\n\nGrievous Wounds\nDealing magic damage to champions applies 40% Wounds for 3 seconds.',
  noEffects: false,
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  buildsFrom: [
    {
      id: 3916,
      name: 'Oblivion Orb',
      gold: 800
    },
    {
      id: 1026,
      name: 'Blasting Wand',
      gold: 850
    },
    {
      id: 3067,
      name: 'Kindlegem',
      gold: 800
    }
  ],
  gold: {
    base: 400,
    sell: 1995,
    total: 2850
  },
  maps: [
    11,
    12,
    21,
    35
  ],
  passives: [
    {
      name: 'Grievous Wounds',
      effects: 'Dealing magic damage to enemy champions inflicts them with <img src="/img/icons/grievous-wounds.webp" class="tip-icon " />Grievous Wounds for 3 seconds.',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    abilityHaste: 15,
    abilityPower: 75,
    health: 350
  }
}
export default item