const item: Item = {
  id: 1006,
  name: 'Rejuvenation Bead',
  buildsInto: [
    {
      id: 3211,
      name: 'Spectre\'s Cowl',
      gold: 1250,
    },
    {
      id: 323109,
      name: 'Knight\'s Vow',
      gold: 2900,
    },
    {
      id: 3109,
      name: 'Knight\'s Vow',
      gold: 2300,
    },
    {
      id: 3801,
      name: 'Crystalline Bracer',
      gold: 800,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/1006_tank_t1_rejuvenationbead.png',
  maps: [11, 12, 21, 35],
  noEffects: true,
  rank: 'Basic',
  removed: false,
  shop: {
    prices: {
      combined: 300,
      sell: 120,
      total: 300,
    },
    tags: ['TANK'],
  },
  simpleDescription: 'Slightly increases Health Regen',
  specialRecipe: 0,
  stats: {
    healthRegen: 100,
  },
}
export default item
