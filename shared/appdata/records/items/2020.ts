const item: Item = {
  id: 2020,
  name: 'The Brutalizer',
  buildsFrom: [
    {
      id: 2022,
      name: 'Glowing Mote',
      gold: 250,
    },
    {
      id: 1037,
      name: 'Pickaxe',
      gold: 875,
    },
  ],
  buildsInto: [
    {
      id: 6698,
      name: 'Profane Hydra',
      gold: 3200,
    },
    {
      id: 6696,
      name: 'Axiom Arc',
      gold: 3000,
    },
    {
      id: 6699,
      name: 'Voltaic Cyclosword',
      gold: 3000,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/2020_thebrutalizer.png',
  maps: [11, 12, 21, 35],
  noEffects: true,
  rank: 'Epic',
  removed: false,
  shop: {
    prices: {
      combined: 212,
      sell: 534,
      total: 1337,
    },
    tags: ['ASSASSIN'],
  },
  specialRecipe: 0,
  stats: {
    abilityHaste: 10,
    attackDamage: 25,
    lethality: 5,
  },
}
export default item
