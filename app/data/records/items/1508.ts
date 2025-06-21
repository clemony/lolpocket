const item: Item = {
  name: 'Anti-Tower Socks',
  id: 1508,
  rank: 'Special',
  specialRecipe: 0,
  noEffects: false,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.11/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/1508_antitowersocks.png',
  passives: [
    {
      unique: true,
      effects: '<img src="/img/icons/turret.webp" class="tip-icon" />Turret basic attacks are modified to deal 14% – 8% (based on turret type) of this minion\'s <b>maximum</b> health as pre-mitigation damage.',
    },
  ],
  stats: {},
  shop: {
    prices: {
      total: 0,
      combined: 0,
      sell: 0,
    },
    purchasable: false,
  },
  maps: [
    11,
    12,
    21,
    30,
    35,
  ],
}
export default item