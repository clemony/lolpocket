// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 3031,
  name: 'Infinity Edge',
  nicknames: [
    'ie'
  ],
  buildsFrom: [
    {
      id: 1038,
      name: 'B. F. Sword',
      gold: 1300
    },
    {
      id: 1037,
      name: 'Pickaxe',
      gold: 875
    },
    {
      id: 1018,
      name: 'Cloak of Agility',
      gold: 600
    }
  ],
  description: '75 Attack Damage\n25% Critical Strike Chance\n30% Critical Strike Damage\n\n',
  gold: {
    base: 725,
    sell: 2450,
    total: 3500
  },
  maps: [
    11,
    12,
    21,
    35
  ],
  noEffects: true,
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  stats: {
    attackDamage: 75,
    criticalStrikeChance: 25,
    criticalStrikeDamage: 30
  }
}
export default item