const item: Item = {
  name: 'Shield of Molten Stone',
  id: 443058,
  rank: 'Special',
  specialRecipe: 220007,
  noEffects: false,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.11/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3058_shieldofmoltenstone.png',
  passives: [
    {
      name: 'Immovable as the Earth',
      unique: true,
      effects: 'Increase your <b>total</b> armor by 20% armor. Additionally, basic attacks that hit you have a chance of being <img src="/img/icons/block.webp" class="tip-icon" />blocked equal to 5% per 200 <b>total</b> armor, up to a maximum of 50% chance.',
    },
  ],
  stats: {
    armor: 100,
    health: 300,
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