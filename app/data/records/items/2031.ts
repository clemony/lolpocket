const item: Item = {
  name: 'Refillable Potion',
  id: 2031,
  rank: 'Consumable',
  buildsInto: [
    {
      id: 2033,
      name: 'Corrupting Potion',
      gold: 500,
    },
  ],
  specialRecipe: 0,
  noEffects: false,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.11/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/2031_class_t1_refillablepotion.png',
  simpleDescription: 'Restores Health over time. Refills at shop.',
  nicknames: [
    'Green Potion',
  ],
  passives: [
    {
      unique: true,
      effects: 'Holds charges that refill upon visiting the shop.',
    },
  ],
  stats: {},
  shop: {
    prices: {
      total: 150,
      combined: 150,
      sell: 60,
    },
    tags: [
      'HEALTH_AND_REG',
    ],
  },
  maps: [
    11,
    12,
    21,
  ],
}
export default item