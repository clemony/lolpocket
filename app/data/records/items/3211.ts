const item: Item = {
  name: 'Spectre\'s Cowl',
  id: 3211,
  rank: 'Epic',
  buildsFrom: [
    {
      id: 1028,
      name: 'Ruby Crystal',
      gold: 400,
    },
    {
      id: 1033,
      name: 'Null-Magic Mantle',
      gold: 400,
    },
    {
      id: 1006,
      name: 'Rejuvenation Bead',
      gold: 300,
    },
  ],
  buildsInto: [
    {
      id: 2504,
      name: 'Kaenic Rookern',
      gold: 2900,
    },
    {
      id: 3065,
      name: 'Spirit Visage',
      gold: 2700,
    },
    {
      id: 6664,
      name: 'Hollow Radiance',
      gold: 2800,
    },
  ],
  specialRecipe: 0,
  noEffects: true,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.11/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3211_tank_t2_spectrescowl.png',
  simpleDescription: 'Improves defense and grants regeneration upon being damaged',
  nicknames: [
    'hat',
    'ghost',
  ],
  stats: {
    health: 200,
    healthRegen: 100,
    magicResistance: 35,
  },
  shop: {
    prices: {
      total: 1250,
      combined: 150,
      sell: 500,
    },
    tags: [
      'TANK',
    ],
  },
  maps: [
    11,
    12,
    21,
    35,
  ],
}
export default item