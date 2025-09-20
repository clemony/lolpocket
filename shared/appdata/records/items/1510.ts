const item: Item = {
  id: 1510,
  name: 'Phreakish Gusto',
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/1510_phreakishgusto.png',
  maps: [11, 12, 21, 30, 35],
  noEffects: false,
  passives: [
    {
      effects:
        '<img src="/img/icons/turret.webp" class="tip-icon" />Turret basic attacks are modified to deal 70% of this minion\'s <b>maximum</b> health as pre-mitigation damage.',
      unique: true,
    },
  ],
  rank: 'Special',
  removed: false,
  shop: {
    prices: {
      combined: 0,
      sell: 0,
      total: 0,
    },
    purchasable: false,
  },
  specialRecipe: 0,
  stats: {},
}
export default item
