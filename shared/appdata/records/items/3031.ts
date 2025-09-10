const item: Item = {
  name: 'Infinity Edge',
  id: 3031,
  rank: 'Legendary',
  buildsFrom: [
    {
      id: 1038,
      name: 'B. F. Sword',
      gold: 1300
    },
    {
      id: 1037,
      name: 'Pickaxe',
      gold: 875
    },
    {
      id: 1018,
      name: 'Cloak of Agility',
      gold: 600
    }
  ],
  specialRecipe: 0,
  noEffects: true,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3031_marksman_t3_infinityedge.png',
  simpleDescription: 'Massively enhances critical strikes',
  nicknames: [
    'ie'
  ],
  stats: {
    attackDamage: 65,
    criticalStrikeChance: 25,
    criticalStrikeDamage: 40
  },
  shop: {
    prices: {
      total: 3450,
      combined: 675,
      sell: 1380
    },
    tags: [
      'MARKSMAN'
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