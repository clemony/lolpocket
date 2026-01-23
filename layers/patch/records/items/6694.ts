// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 6694,
  name: 'Serylda\'s Grudge',
  nicknames: [
    'slow'
  ],
  buildsFrom: [
    {
      id: 3133,
      name: 'Caulfield\'s Warhammer',
      gold: 1050
    },
    {
      id: 3035,
      name: 'Last Whisper',
      gold: 1450
    }
  ],
  description: '45 Attack Damage\n35% Armor Penetration\n15 Ability Haste\n\nBitter Cold\nDamaging Abilities Slow enemies below 50% Health by 30% for 1 second.',
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
  noEffects: false,
  passives: [
    {
      name: 'Bitter Cold',
      effects: 'Dealing ability damage to an enemy that is at or below 50% of their <b>maximum</b> health <img src="/img/icons/slow.webp" class="tip-icon" />slows them by 30% for 1 second.',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  stats: {
    abilityHaste: 15,
    armorPenetration: 35,
    attackDamage: 45
  }
}
export default item