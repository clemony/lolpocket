// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 3071,
  name: 'Black Cleaver',
  nicknames: [
    'bc'
  ],
  buildsFrom: [
    {
      id: 3044,
      name: 'Phage',
      gold: 1100
    },
    {
      id: 3067,
      name: 'Kindlegem',
      gold: 800
    },
    {
      id: 1037,
      name: 'Pickaxe',
      gold: 875
    }
  ],
  description: '40 Attack Damage\n400 Health\n20 Ability Haste\n\nCarve\nDealing physical damage to champions reduces their Armor by 6% for 6 seconds. (stacks 5 times).\n\nFervor\nDealing physical damage grants 20 Move Speed for 2 seconds.',
  gold: {
    base: 225,
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
      name: 'Carve',
      effects: 'Dealing physical damage to an enemy champion applies a stack of <i>Carve</i> for 6 seconds, stacking up to 5 times. Each stack inflicts 6% armor reduction, up to 30% armor at 5 stacks.',
      mythic: false,
      unique: true
    },
    {
      name: 'Fervor',
      effects: 'Dealing physical damage grants you 20 <b>bonus</b> movement speed for 2 seconds.',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  stats: {
    abilityHaste: 20,
    attackDamage: 40,
    health: 400
  }
}
export default item