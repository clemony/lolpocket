// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 6609,
  name: 'Chempunk Chainsword',
  nicknames: [
    'grievous',
    'grievous wounds'
  ],
  description: '45 Attack Damage\n450 Health\n15 Ability Haste\n\nHackshorn\nDealing physical damage applies 40% Wounds to enemy champions for 3 seconds.',
  noEffects: false,
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  buildsFrom: [
    {
      id: 3123,
      name: 'Executioner\'s Calling',
      gold: 800
    },
    {
      id: 1011,
      name: 'Giant\'s Belt',
      gold: 900
    },
    {
      id: 3133,
      name: 'Caulfield\'s Warhammer',
      gold: 1050
    }
  ],
  gold: {
    base: 350,
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
      name: 'Hackshorn',
      effects: 'Dealing physical damage to enemy champions inflicts them with <img src="/img/icons/grievous-wounds.webp" class="tip-icon " />Grievous Wounds for 3 seconds.',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    abilityHaste: 15,
    attackDamage: 45,
    health: 450
  }
}
export default item