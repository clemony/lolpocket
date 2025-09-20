const item: Item = {
  id: 223039,
  name: 'Atma\'s Reckoning',
  nicknames: ['wreckoning'],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3005_fighter_t3_atmasreckoning.png',
  maps: [30],
  noEffects: false,
  passives: [
    {
      name: 'Big Hands',
      effects:
        'Gain 1% critical strike chance for every 100 <b>bonus</b> health, up to a <b>maximum</b> of 30% critical strike chance at 3000 <b>bonus</b> health.',
      unique: true,
    },
  ],
  rank: 'Legendary',
  removed: false,
  shop: {
    prices: {
      combined: 2500,
      sell: 1000,
      total: 2500,
    },
    tags: ['FIGHTER'],
  },
  specialRecipe: 0,
  stats: {
    criticalStrikeChance: 20,
    health: 700,
  },
}
export default item
