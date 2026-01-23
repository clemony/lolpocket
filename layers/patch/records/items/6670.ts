// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 6670,
  name: 'Noonquiver',
  buildsFrom: [
    {
      id: 1036,
      name: 'Long Sword',
      gold: 350
    },
    {
      id: 1018,
      name: 'Cloak of Agility',
      gold: 600
    }
  ],
  buildsInto: [
    {
      id: 6673,
      name: 'Immortal Shieldbow',
      gold: 3000
    },
    {
      id: 2523,
      name: 'Hexoptics C44',
      gold: 2800
    },
    {
      id: 3036,
      name: 'Lord Dominik\'s Regards',
      gold: 3300
    }
  ],
  description: '15 Attack Damage\n20% Critical Strike Chance\n\n',
  gold: {
    base: 350,
    sell: 910,
    total: 1300
  },
  maps: [
    11,
    12,
    21,
    35
  ],
  noEffects: true,
  rank: 'Epic',
  removed: false,
  specialRecipe: 0,
  stats: {
    attackDamage: 15,
    criticalStrikeChance: 20
  }
}
export default item