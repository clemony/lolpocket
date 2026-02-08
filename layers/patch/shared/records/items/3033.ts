// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 3033,
  name: 'Mortal Reminder',
  nicknames: [
    'grievous',
    'grievous wounds'
  ],
  description: '35 Attack Damage\n30% Armor Penetration\n25% Critical Strike Chance\n\nGrievous Wounds\nDealing physical damage applies 40% Wounds to enemy champions for 3 seconds.',
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
      id: 3035,
      name: 'Last Whisper',
      gold: 1450
    },
    {
      id: 1018,
      name: 'Cloak of Agility',
      gold: 600
    }
  ],
  gold: {
    base: 150,
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
      name: 'Grievous Wounds',
      effects: 'Dealing physical damage to enemy champions inflicts them with <img src="/img/icons/grievous-wounds.webp" class="tip-icon " />Grievous Wounds for 3 seconds.',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    armorPenetration: 30,
    attackDamage: 35,
    criticalStrikeChance: 25
  }
}
export default item