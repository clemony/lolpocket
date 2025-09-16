const item: Item = {
  name: 'Twin Mask',
  id: 443080,
  rank: 'Special',
  specialRecipe: 220007,
  noEffects: false,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/443080_twinmasks.png',
  passives: [
    {
      name: 'Unanimity',
      unique: true,
      effects:
        'Gain 15% of your teammate\'s attack damage, ability power, <b>total</b> attack speed, <b>maximum</b> health, armor, magic resistance, and ability haste, increased to 30% if they also have <b>Twin Mask</b> and are alive.',
    },
  ],
  stats: {},
  shop: {
    prices: {
      total: 0,
      combined: 1000,
      sell: 0,
    },
  },
  maps: [30],
}
export default item
