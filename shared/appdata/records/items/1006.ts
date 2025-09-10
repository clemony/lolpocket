const item: Item = {
  name: 'Rejuvenation Bead',
  id: 1006,
  rank: 'Basic',
  buildsInto: [
    {
      id: 3211,
      name: 'Spectre\'s Cowl',
      gold: 1250
    },
    {
      id: 323109,
      name: 'Knight\'s Vow',
      gold: 2900
    },
    {
      id: 3109,
      name: 'Knight\'s Vow',
      gold: 2300
    },
    {
      id: 3801,
      name: 'Crystalline Bracer',
      gold: 800
    }
  ],
  specialRecipe: 0,
  noEffects: true,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/1006_tank_t1_rejuvenationbead.png',
  simpleDescription: 'Slightly increases Health Regen',
  stats: {
    healthRegen: 100
  },
  shop: {
    prices: {
      total: 300,
      combined: 300,
      sell: 120
    },
    tags: [
      'TANK'
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