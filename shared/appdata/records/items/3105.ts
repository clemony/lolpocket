const item: Item = {
  name: 'Aegis of the Legion',
  id: 3105,
  rank: 'Epic',
  buildsFrom: [
    {
      id: 1033,
      name: 'Null-Magic Mantle',
      gold: 400
    },
    {
      id: 1029,
      name: 'Cloth Armor',
      gold: 300
    }
  ],
  buildsInto: [
    {
      id: 323050,
      name: 'Zeke\'s Convergence',
      gold: 2300
    },
    {
      id: 3039,
      name: 'Atma\'s Reckoning',
      gold: 2900
    },
    {
      id: 2502,
      name: 'Unending Despair',
      gold: 2800
    },
    {
      id: 3193,
      name: 'Gargoyle Stoneplate',
      gold: 3150
    },
    {
      id: 4403,
      name: 'The Golden Spatula',
      gold: 7187
    },
    {
      id: 6667,
      name: 'Radiant Virtue',
      gold: 2600
    }
  ],
  specialRecipe: 0,
  noEffects: true,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3105_tank_t2_aegisofthelegion.png',
  simpleDescription: 'Grants Armor and Magic Resistance',
  stats: {
    armor: 25,
    magicResistance: 25,
    abilityHaste: 10
  },
  shop: {
    prices: {
      total: 1100,
      combined: 400,
      sell: 440
    },
    tags: [
      'TANK',
      'SUPPORT'
    ]
  },
  maps: [
    11,
    12,
    21,
    35
  ]
}
export default item