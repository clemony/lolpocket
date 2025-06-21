const item: Item = {
  name: 'Glacial Buckler',
  id: 3024,
  rank: 'Epic',
  buildsFrom: [
    {
      id: 1029,
      name: 'Cloth Armor',
      gold: 300,
    },
    {
      id: 1027,
      name: 'Sapphire Crystal',
      gold: 300,
    },
    {
      id: 2022,
      name: 'Glowing Mote',
      gold: 250,
    },
  ],
  buildsInto: [
    {
      id: 3110,
      name: 'Frozen Heart',
      gold: 2500,
    },
    {
      id: 323110,
      name: 'Frozen Heart',
      gold: 2700,
    },
  ],
  specialRecipe: 0,
  noEffects: true,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.11/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3024_tank_t2_glacialshroud.png',
  simpleDescription: 'Increases Armor and Cooldown Reduction',
  stats: {
    armor: 25,
    mana: 300,
    abilityHaste: 10,
  },
  shop: {
    prices: {
      total: 900,
      combined: 50,
      sell: 360,
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