const item: Item = {
  id: 2422,
  name: 'Slightly Magical Boots',
  buildsInto: [
    {
      id: 3006,
      name: 'Berserker\'s Greaves',
      gold: 1100,
    },
    {
      id: 3047,
      name: 'Plated Steelcaps',
      gold: 1200,
    },
    {
      id: 3020,
      name: 'Sorcerer\'s Shoes',
      gold: 1100,
    },
    {
      id: 3158,
      name: 'Ionian Boots of Lucidity',
      gold: 900,
    },
    {
      id: 3111,
      name: 'Mercury\'s Treads',
      gold: 1250,
    },
    {
      id: 3117,
      name: 'Mobility Boots',
      gold: 1000,
    },
    {
      id: 3009,
      name: 'Boots of Swiftness',
      gold: 1000,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/2422_class_t1_slightlymagicalboots.png',
  maps: [11, 12, 21, 35],
  noEffects: false,
  passives: [
    {
      name: 'Slightly Quicker',
      effects: 'Gain 10 <b>bonus</b> movement speed.',
      unique: true,
    },
  ],
  rank: 'Special',
  removed: false,
  shop: {
    prices: {
      combined: 300,
      sell: 0,
      total: 0,
    },
    purchasable: false,
  },
  specialRecipe: 0,
  stats: {
    flatMovespeed: 25,
  },
}
export default item
