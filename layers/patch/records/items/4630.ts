// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 4630,
  name: 'Blighting Jewel',
  nicknames: [
    'pen',
    'purple'
  ],
  buildsFrom: [
    {
      id: 1052,
      name: 'Amplifying Tome',
      gold: 400
    }
  ],
  buildsInto: [
    {
      id: 3135,
      name: 'Void Staff',
      gold: 3000
    },
    {
      id: 3137,
      name: 'Cryptbloom',
      gold: 3000
    }
  ],
  description: '25 Ability Power\n13% Magic Penetration\n\n',
  gold: {
    base: 700,
    sell: 770,
    total: 1100
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
    abilityPower: 25,
    percentMagicPenetration: 13
  }
}
export default item