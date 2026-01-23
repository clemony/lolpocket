// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 1001,
  name: 'Boots',
  buildsInto: [
    {
      id: 3117,
      name: 'Mobility Boots',
      gold: 1000
    },
    {
      id: 3158,
      name: 'Ionian Boots of Lucidity',
      gold: 900
    },
    {
      id: 3047,
      name: 'Plated Steelcaps',
      gold: 1200
    },
    {
      id: 3111,
      name: 'Mercury\'s Treads',
      gold: 1250
    },
    {
      id: 3006,
      name: 'Berserker\'s Greaves',
      gold: 1100
    },
    {
      id: 3005,
      name: 'Ghostcrawlers',
      gold: 1000
    },
    {
      id: 3009,
      name: 'Boots of Swiftness',
      gold: 1000
    },
    {
      id: 3010,
      name: 'Symbiotic Soles',
      gold: 900
    },
    {
      id: 3020,
      name: 'Sorcerer\'s Shoes',
      gold: 1100
    }
  ],
  description: '25 Move Speed\n\n',
  gold: {
    base: 300,
    sell: 210,
    total: 300
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
    flatMovespeed: 25
  }
}
export default item