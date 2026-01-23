// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 3123,
  name: 'Executioner\'s Calling',
  nicknames: [
    'grievous',
    'grievous wounds'
  ],
  buildsFrom: [
    {
      id: 1036,
      name: 'Long Sword',
      gold: 350
    }
  ],
  buildsInto: [
    {
      id: 3033,
      name: 'Mortal Reminder',
      gold: 3000
    },
    {
      id: 6609,
      name: 'Chempunk Chainsword',
      gold: 3100
    }
  ],
  description: '15 Attack Damage\n\nGrievous Wounds\nDealing physical damage to champions applies 40% Wounds for 3 seconds.',
  gold: {
    base: 450,
    sell: 560,
    total: 800
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
  rank: 'Epic',
  removed: false,
  specialRecipe: 0,
  stats: {
    attackDamage: 15
  }
}
export default item