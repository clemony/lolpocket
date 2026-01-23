// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 3110,
  name: 'Frozen Heart',
  nicknames: [
    'fh'
  ],
  buildsFrom: [
    {
      id: 3082,
      name: 'Warden\'s Mail',
      gold: 1000
    },
    {
      id: 3024,
      name: 'Glacial Buckler',
      gold: 900
    }
  ],
  description: '75 Armor\n400 Mana\n20 Ability Haste\n\nWinter\'s Caress\nReduce the Attack Speed of nearby champions by 20%.',
  gold: {
    base: 600,
    sell: 1750,
    total: 2500
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
      name: 'Winter\'s Caress',
      effects: '<img src="/img/icons/cripple.webp" class="tip-icon" />Cripples the attack speed of enemy champions within 700 units by 20%.',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  stats: {
    abilityHaste: 20,
    armor: 75,
    mana: 400
  }
}
export default item