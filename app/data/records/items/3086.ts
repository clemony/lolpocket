const item: Item = {
  name: 'Zeal',
  id: 3086,
  rank: 'Epic',
  buildsFrom: [
    {
      id: 1018,
      name: 'Cloak of Agility',
      gold: 600,
    },
    {
      id: 1042,
      name: 'Dagger',
      gold: 250,
    },
  ],
  buildsInto: [
    {
      id: 3046,
      name: 'Phantom Dancer',
      gold: 2650,
    },
    {
      id: 6675,
      name: 'Navori Flickerblade',
      gold: 2650,
    },
    {
      id: 3085,
      name: 'Runaan\'s Hurricane',
      gold: 2650,
    },
    {
      id: 3094,
      name: 'Rapid Firecannon',
      gold: 2650,
    },
    {
      id: 4403,
      name: 'The Golden Spatula',
      gold: 7187,
    },
    {
      id: 6671,
      name: 'Galeforce',
      gold: 3500,
    },
  ],
  specialRecipe: 0,
  noEffects: true,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.11/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3086_fighter_t2_zeal.png',
  simpleDescription: 'Slight bonuses to Critical Strike Chance, Move Speed and Attack Speed',
  stats: {
    attackSpeed: 15,
    criticalStrikeChance: 15,
    percentMovespeed: 4,
  },
  shop: {
    prices: {
      total: 1200,
      combined: 350,
      sell: 480,
    },
    tags: [
      'MARKSMAN',
      'MOVEMENT',
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