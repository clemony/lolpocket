const item: Item = {
  id: 443080,
  name: 'Twin Mask',
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/443080_twinmasks.png',
  maps: [30],
  noEffects: false,
  passives: [
    {
      name: 'Unanimity',
      effects:
        'Gain 15% of your teammate\'s attack damage, ability power, <b>total</b> attack speed, <b>maximum</b> health, armor, magic resistance, and ability haste, increased to 30% if they also have <b>Twin Mask</b> and are alive.',
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
  },
  specialRecipe: 220007,
  stats: {},
}
export default item
