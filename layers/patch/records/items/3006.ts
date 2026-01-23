// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 3006,
  name: 'Berserker\'s Greaves',
  nicknames: [
    'boots',
    'zerker'
  ],
  buildsFrom: [
    {
      id: 1001,
      name: 'Boots',
      gold: 300
    },
    {
      id: 1042,
      name: 'Dagger',
      gold: 250
    },
    {
      id: 1042,
      name: 'Dagger',
      gold: 250
    }
  ],
  buildsInto: [
    {
      id: 3172,
      name: 'Gunmetal Greaves',
      gold: 1100
    }
  ],
  description: '25% Attack Speed\n45 Move Speed\n\n',
  gold: {
    base: 300,
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
  rank: 'Boots',
  removed: false,
  specialRecipe: 0,
  stats: {
    attackSpeed: 25,
    flatMovespeed: 45
  }
}
export default item