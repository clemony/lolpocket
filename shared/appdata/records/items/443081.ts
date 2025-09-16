const item: Item = {
  name: 'Hexbolt Companion',
  id: 443081,
  rank: 'Special',
  specialRecipe: 220007,
  noEffects: false,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/443081_hexboltcompanion.png',
  passives: [
    {
      name: 'Covering Fire',
      unique: true,
      effects:
        'While your ally is within 1200 units, your basic attacks on-hit generate a stack of <i>Covering Fire</i>. At 1 stack, your next basic attack consumes them all to cause your ally to fire a bolt at the target, dealing 20 – 60 (based on level) physical damage and applying your ally\'s on-hit effects at 100% effectiveness.',
    },
  ],
  stats: {
    attackSpeed: 75,
    health: 500,
  },
  shop: {
    prices: {
      total: 0,
      combined: 1000,
      sell: 0,
    },
    tags: ['TANK'],
  },
  maps: [30],
}
export default item
