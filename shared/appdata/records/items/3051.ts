const item: Item = {
  name: 'Hearthbound Axe',
  id: 3051,
  rank: 'Epic',
  buildsFrom: [
    {
      id: 1036,
      name: 'Long Sword',
      gold: 350
    },
    {
      id: 1042,
      name: 'Dagger',
      gold: 250
    },
    {
      id: 1036,
      name: 'Long Sword',
      gold: 350
    }
  ],
  buildsInto: [
    {
      id: 3302,
      name: 'Terminus',
      gold: 3000
    },
    {
      id: 3078,
      name: 'Trinity Force',
      gold: 3333
    },
    {
      id: 6672,
      name: 'Kraken Slayer',
      gold: 3000
    }
  ],
  specialRecipe: 0,
  noEffects: true,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3051_fighter_t2_axeofavarosa.png',
  nicknames: [
    'blue arrow'
  ],
  stats: {
    attackDamage: 20,
    attackSpeed: 20
  },
  shop: {
    prices: {
      total: 1200,
      combined: 250,
      sell: 480
    },
    tags: [
      'FIGHTER',
      'MOVEMENT',
      'ONHIT_EFFECTS'
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