const item: Item = {
  id: 3801,
  name: 'Crystalline Bracer',
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
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3801_tank_t2_crystallinebracer.png',
  maps: [11, 12, 21, 35],
  noEffects: true,
  rank: 'Epic',
  removed: false,
  shop: {
    prices: {
      combined: 100,
      sell: 320,
      total: 800,
    },
    tags: ['TANK', 'SUPPORT'],
  },
  simpleDescription: 'Grants Health and Health Regen',
  specialRecipe: 0,
  stats: {
    health: 200,
    healthRegen: 100,
  },
}
export default item
