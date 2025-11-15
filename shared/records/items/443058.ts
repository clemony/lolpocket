const item: Item = {
  id: 443058,
  name: 'Shield of Molten Stone',
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3058_shieldofmoltenstone.png',
  maps: [30],
  noEffects: false,
  passives: [
    {
      name: 'Immovable as the Earth',
      effects:
        'Increase your <b>total</b> armor by 20% armor. Additionally, basic attacks that hit you have a chance of being <img src="/img/icons/block.webp" class="tip-icon" />blocked equal to 5% per 200 <b>total</b> armor, up to a maximum of 50% chance.',
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
    armor: 100,
    health: 300,
  },
}
export default item
