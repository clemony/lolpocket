const item: Item = {
  id: 3006,
  name: 'Berserker\'s Greaves',
  nicknames: ['boots', 'zerker'],
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
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3006_class_t2_berserkersgreaves.png',
  maps: [11, 12, 21, 35],
  noEffects: true,
  rank: 'Boots',
  removed: false,
  shop: {
    prices: {
      combined: 300,
      sell: 440,
      total: 1100,
    },
  },
  simpleDescription: 'Enhances Move Speed and Attack Speed',
  specialRecipe: 0,
  stats: {
    attackSpeed: 25,
    flatMovespeed: 45,
  },
}
export default item
