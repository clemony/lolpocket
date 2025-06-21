const item: Item = {
  name: 'Crystalline Bracer',
  id: 3801,
  rank: 'Epic',
  buildsFrom: [
    {
      id: 1028,
      name: 'Ruby Crystal',
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
      id: 3083,
      name: 'Warmog\'s Armor',
      gold: 3100,
    },
    {
      id: 3084,
      name: 'Heartsteel',
      gold: 3000,
    },
  ],
  specialRecipe: 0,
  noEffects: true,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.11/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3801_tank_t2_crystallinebracer.png',
  simpleDescription: 'Grants Health and Health Regen',
  stats: {
    health: 200,
    healthRegen: 100,
  },
  shop: {
    prices: {
      total: 800,
      combined: 100,
      sell: 320,
    },
    tags: [
      'TANK',
      'SUPPORT',
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