const item: Item = {
  name: 'Cloak of Starry Night',
  id: 443059,
  rank: 'Special',
  specialRecipe: 220007,
  noEffects: false,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.11/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3059_cloakofstarrynight.png',
  passives: [
    {
      name: 'Limitless as the Stars',
      unique: true,
      effects: 'Increase your <b>total</b> magic resistance by 20% mr. Additionally, reduce all incoming damage received from non-basic attack sources by 5% per 200 <b>total</b> magic resistance, up to a maximum of 50% damage reduction.',
    },
  ],
  stats: {
    health: 300,
    magicResistance: 100,
  },
  shop: {
    prices: {
      total: 0,
      combined: 1000,
      sell: 0,
    },
    tags: [
      'TANK',
    ],
  },
  maps: [
    30,
  ],
}
export default item