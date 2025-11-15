const item: Item = {
  id: 3009,
  name: 'Boots of Swiftness',
  nicknames: ['swifties'],
  buildsFrom: [
    {
      id: 1001,
      name: 'Boots',
      gold: 300,
    },
  ],
  buildsInto: [
    {
      id: 3170,
      name: 'Swiftmarch',
      gold: 1500,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3009_class_t2_bootsofswiftness.png',
  maps: [11, 12, 21, 35],
  noEffects: false,
  passives: [
    {
      name: 'Fleetfooted',
      effects: 'Gain 25% slow resist.',
      unique: true,
    },
  ],
  rank: 'Boots',
  removed: false,
  shop: {
    prices: {
      combined: 700,
      sell: 400,
      total: 1000,
    },
  },
  simpleDescription: 'Enhances Move Speed and reduces the effect of slows',
  specialRecipe: 0,
  stats: {
    flatMovespeed: 55,
  },
}
export default item
