const item: Item = {
  name: 'Boots',
  id: 1001,
  rank: 'Boots',
  buildsInto: [
    {
      id: 3117,
      name: 'Mobility Boots',
      gold: 1000,
    },
    {
      id: 3158,
      name: 'Ionian Boots of Lucidity',
      gold: 900,
    },
    {
      id: 3047,
      name: 'Plated Steelcaps',
      gold: 1200,
    },
    {
      id: 3111,
      name: 'Mercury\'s Treads',
      gold: 1250,
    },
    {
      id: 3006,
      name: 'Berserker\'s Greaves',
      gold: 1100,
    },
    {
      id: 3005,
      name: 'Ghostcrawlers',
      gold: 1000,
    },
    {
      id: 3009,
      name: 'Boots of Swiftness',
      gold: 1000,
    },
    {
      id: 3010,
      name: 'Symbiotic Soles',
      gold: 900,
    },
    {
      id: 3020,
      name: 'Sorcerer\'s Shoes',
      gold: 1100,
    },
  ],
  specialRecipe: 0,
  noEffects: true,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.11/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/1001_class_t1_bootsofspeed.png',
  simpleDescription: 'Slightly increases Move Speed',
  stats: {
    flatMovespeed: 25,
  },
  shop: {
    prices: {
      total: 300,
      combined: 300,
      sell: 120,
    },
  },
  maps: [
    11,
    12,
    21,
    35,
  ],
}
export default item