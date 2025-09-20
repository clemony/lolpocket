const item: Item = {
  id: 443059,
  name: 'Cloak of Starry Night',
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3059_cloakofstarrynight.png',
  maps: [30],
  noEffects: false,
  passives: [
    {
      name: 'Limitless as the Stars',
      effects:
        'Increase your <b>total</b> magic resistance by 20% mr. Additionally, reduce all incoming damage received from non-basic attack sources by 5% per 200 <b>total</b> magic resistance, up to a maximum of 50% damage reduction.',
      unique: true,
    },
  ],
  rank: 'Special',
  removed: false,
  shop: {
    prices: {
      combined: 1000,
      sell: 0,
      total: 0,
    },
    tags: ['TANK'],
  },
  specialRecipe: 220007,
  stats: {
    health: 300,
    magicResistance: 100,
  },
}
export default item
