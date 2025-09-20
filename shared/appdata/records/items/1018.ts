const item: Item = {
  id: 1018,
  name: 'Cloak of Agility',
  buildsInto: [
    {
      id: 6670,
      name: 'Noonquiver',
      gold: 1300,
    },
    {
      id: 3086,
      name: 'Zeal',
      gold: 1200,
    },
    {
      id: 3095,
      name: 'Stormrazor',
      gold: 3100,
    },
    {
      id: 6676,
      name: 'The Collector',
      gold: 3000,
    },
    {
      id: 3031,
      name: 'Infinity Edge',
      gold: 3450,
    },
    {
      id: 3033,
      name: 'Mortal Reminder',
      gold: 3300,
    },
    {
      id: 3508,
      name: 'Essence Reaver',
      gold: 2900,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/1018_base_t1_cloakagility.png',
  maps: [11, 12, 21, 35],
  noEffects: true,
  rank: 'Basic',
  removed: false,
  shop: {
    prices: {
      combined: 600,
      sell: 240,
      total: 600,
    },
    tags: ['MARKSMAN'],
  },
  simpleDescription: 'Increases critical strike chance',
  specialRecipe: 0,
  stats: {
    criticalStrikeChance: 15,
  },
}
export default item
