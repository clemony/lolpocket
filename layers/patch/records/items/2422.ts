// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 2422,
  name: 'Slightly Magical Footwear',
  buildsInto: [
    {
      id: 3006,
      name: 'Berserker\'s Greaves',
      gold: 1100
    },
    {
      id: 3047,
      name: 'Plated Steelcaps',
      gold: 1200
    },
    {
      id: 3020,
      name: 'Sorcerer\'s Shoes',
      gold: 1100
    },
    {
      id: 3158,
      name: 'Ionian Boots of Lucidity',
      gold: 900
    },
    {
      id: 3111,
      name: 'Mercury\'s Treads',
      gold: 1250
    },
    {
      id: 3117,
      name: 'Mobility Boots',
      gold: 1000
    },
    {
      id: 3009,
      name: 'Boots of Swiftness',
      gold: 1000
    }
  ],
  description: '25 Move Speed\n\nGrants an additional 10 Move Speed. Boots that build from Slightly Magical Footwear retain this bonus Move Speed.',
  gold: {
    base: 300,
    purchasable: false,
    sell: 90,
    total: 300
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
      name: 'Slightly Quicker',
      effects: 'Gain 10 <b>bonus</b> movement speed.',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Special',
  removed: false,
  specialRecipe: 0,
  stats: {
    flatMovespeed: 25
  }
}
export default item