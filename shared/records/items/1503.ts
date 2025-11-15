const item: Item = {
  id: 1503,
  name: 'Warden\'s Eye',
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/096_eye_of_the_observer.png',
  maps: [11, 12, 21, 30, 35],
  noEffects: false,
  passives: [
    {
      name: 'True Sight',
      effects:
        'Can see <img src="/img/icons/camouflage.webp" class="tip-icon" />camouflaged and <img src="/img/icons/invisible.webp" class="tip-icon" />invisible units within 1100 units.',
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
