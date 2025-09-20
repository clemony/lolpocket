const item: Item = {
  id: 3024,
  name: 'Glacial Buckler',
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
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3024_tank_t2_glacialshroud.png',
  maps: [11, 12, 21, 35],
  noEffects: true,
  rank: 'Epic',
  removed: false,
  shop: {
    prices: {
      combined: 50,
      sell: 360,
      total: 900,
    },
    tags: ['TANK', 'SUPPORT'],
  },
  simpleDescription: 'Increases Armor and Cooldown Reduction',
  specialRecipe: 0,
  stats: {
    abilityHaste: 10,
    armor: 25,
    mana: 300,
  },
}
export default item
