// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 3033,
  name: 'Mortal Reminder',
  nicknames: [
    'grievous',
    'grievous wounds'
  ],
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
  description: '35 Attack Damage\n30% Armor Penetration\n25% Critical Strike Chance\n\nGrievous Wounds\nDealing physical damage applies 40% Wounds to enemy champions for 3 seconds.',
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
  noEffects: false,
  passives: [
    {
      name: 'Grievous Wounds',
      effects: 'Dealing physical damage to enemy champions inflicts them with <img src="/img/icons/grievous-wounds.webp" class="tip-icon" />Grievous Wounds for 3 seconds.',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  stats: {
    armorPenetration: 30,
    attackDamage: 35,
    criticalStrikeChance: 25
  }
}
export default item