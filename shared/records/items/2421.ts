const item: Item = {
  id: 2421,
  name: 'Shattered Armguard',
  buildsFrom: [
    {
      id: 1052,
      name: 'Amplifying Tome',
      gold: 400,
    },
    {
      id: 1029,
      name: 'Cloth Armor',
      gold: 300,
    },
    {
      id: 1052,
      name: 'Amplifying Tome',
      gold: 400,
    },
  ],
  buildsInto: [
    {
      id: 3157,
      name: 'Zhonya\'s Hourglass',
      gold: 3250,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/2420_shatteredarmguard.png',
  maps: [11, 12, 21, 35],
  noEffects: true,
  rank: 'Epic',
  removed: false,
  shop: {
    prices: {
      combined: 500,
      sell: 640,
      total: 1600,
    },
  },
  simpleDescription: 'Upgrades to stopwatch',
  specialRecipe: 0,
  stats: {
    abilityPower: 40,
    armor: 25,
  },
}
export default item
