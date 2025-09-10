const item: Item = {
  name: 'The Brutalizer',
  id: 2020,
  rank: 'Epic',
  buildsFrom: [
    {
      id: 2022,
      name: 'Glowing Mote',
      gold: 250
    },
    {
      id: 1037,
      name: 'Pickaxe',
      gold: 875
    }
  ],
  buildsInto: [
    {
      id: 6698,
      name: 'Profane Hydra',
      gold: 3200
    },
    {
      id: 6696,
      name: 'Axiom Arc',
      gold: 3000
    },
    {
      id: 6699,
      name: 'Voltaic Cyclosword',
      gold: 3000
    }
  ],
  specialRecipe: 0,
  noEffects: true,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/2020_thebrutalizer.png',
  stats: {
    attackDamage: 25,
    lethality: 5,
    abilityHaste: 10
  },
  shop: {
    prices: {
      total: 1337,
      combined: 212,
      sell: 534
    },
    tags: [
      'ASSASSIN'
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