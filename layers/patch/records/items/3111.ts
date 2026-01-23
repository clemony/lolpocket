// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 3111,
  name: 'Mercury\'s Treads',
  nicknames: [
    'boots',
    'mercs'
  ],
  buildsFrom: [
    {
      id: 1001,
      name: 'Boots',
      gold: 300
    },
    {
      id: 1033,
      name: 'Null-Magic Mantle',
      gold: 400
    }
  ],
  buildsInto: [
    {
      id: 3173,
      name: 'Chainlaced Crushers',
      gold: 1250
    }
  ],
  description: '20 Magic Resist\n45 Move Speed\n30% Tenacity\n\n',
  gold: {
    base: 550,
    sell: 875,
    total: 1250
  },
  maps: [
    11,
    12,
    21,
    35
  ],
  noEffects: true,
  rank: 'Boots',
  removed: false,
  specialRecipe: 0,
  stats: {
    flatMovespeed: 45,
    magicResistance: 20,
    tenacity: 30
  }
}
export default item