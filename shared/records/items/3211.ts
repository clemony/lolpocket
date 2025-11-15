const item: Item = {
  id: 3211,
  name: 'Spectre\'s Cowl',
  nicknames: ['hat', 'ghost'],
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
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3211_tank_t2_spectrescowl.png',
  maps: [11, 12, 21, 35],
  noEffects: true,
  rank: 'Epic',
  removed: false,
  shop: {
    prices: {
      combined: 150,
      sell: 500,
      total: 1250,
    },
    tags: ['TANK'],
  },
  simpleDescription:
    'Improves defense and grants regeneration upon being damaged',
  specialRecipe: 0,
  stats: {
    health: 200,
    healthRegen: 100,
    magicResistance: 35,
  },
}
export default item
