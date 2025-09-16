const item: Item = {
  name: 'Berserker\'s Greaves',
  id: 3006,
  rank: 'Boots',
  buildsFrom: [
    {
      id: 1001,
      name: 'Boots',
      gold: 300,
    },
    {
      id: 1042,
      name: 'Dagger',
      gold: 250,
    },
    {
      id: 1042,
      name: 'Dagger',
      gold: 250,
    },
  ],
  buildsInto: [
    {
      id: 3172,
      name: 'Gunmetal Greaves',
      gold: 1600,
    },
  ],
  specialRecipe: 0,
  noEffects: true,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3006_class_t2_berserkersgreaves.png',
  simpleDescription: 'Enhances Move Speed and Attack Speed',
  nicknames: ['boots', 'zerker'],
  stats: {
    attackSpeed: 25,
    flatMovespeed: 45,
  },
  shop: {
    prices: {
      total: 1100,
      combined: 300,
      sell: 440,
    },
  },
  maps: [11, 12, 21, 35],
}
export default item
