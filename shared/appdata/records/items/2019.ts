const item: Item = {
  name: 'Steel Sigil',
  id: 2019,
  rank: 'Epic',
  buildsFrom: [
    {
      id: 1029,
      name: 'Cloth Armor',
      gold: 300
    },
    {
      id: 1036,
      name: 'Long Sword',
      gold: 350
    },
    {
      id: 1029,
      name: 'Cloth Armor',
      gold: 300
    }
  ],
  buildsInto: [
    {
      id: 3026,
      name: 'Guardian Angel',
      gold: 3200
    },
    {
      id: 6333,
      name: 'Death\'s Dance',
      gold: 3300
    },
    {
      id: 6700,
      name: 'Shield of the Rakkor',
      gold: 2675
    }
  ],
  specialRecipe: 0,
  noEffects: true,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/2019_steel_sigil.png',
  stats: {
    armor: 30,
    attackDamage: 15
  },
  shop: {
    prices: {
      total: 1100,
      combined: 150,
      sell: 440
    },
    tags: [
      'FIGHTER'
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