const item: Item = {
  name: 'Lane Swap Detector',
  id: 1501,
  rank: 'Special',
  specialRecipe: 0,
  noEffects: false,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/34.png',
  passives: [
    {
      unique: true,
      effects:
        'Activates special rules in this lane if two non-Jungler enemies appear in it: Turret takes less damage, deals massively increased damage, and redirects kill <img src="/img/icons/gold-coin.webp" class="inline-icon" />gold to the nearest allied champion. Allied minions redirect kill <img src="/img/icons/gold-coin.webp" class="inline-icon" />gold to the nearest allied champion. Enemy champions gain reduced resources from minions. This item disappears shortly after the start of the game.',
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
  maps: [11, 12, 21, 30, 35],
}
export default item
