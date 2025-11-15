const item: Item = {
  id: 3902,
  name: 'Death\'s Daughter',
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3902_champ_t0_deathsdaughtercircle.png',
  maps: [11, 12, 21, 30, 35],
  noEffects: false,
  passives: [
    {
      name: 'Death\'s Daughter',
      effects:
        'A massive cannonball lands after {{ais|Cannon Barrage|Gangplank|Gangplank}} first cluster of waves, dealing <img src="/img/icons/true-damage.webp" class="tip-icon" />true damage (+30% AP) true damage to enemies struck and <img src="/img/icons/slow.webp" class="tip-icon" />slowing them by 75% for 1 second.',
      unique: true,
    },
  ],
  removed: false,
  requiredChampion: 'Gangplank',
  shop: {
    prices: {
      combined: 0,
      sell: 0,
      total: 0,
    },
    purchasable: false,
  },
  simpleDescription:
    '<mainText>Cannon Barrage additionally fires a mega-cannonball at the center of the Barrage, dealing <trueDamage>bonus true damage</trueDamage> and <status>Slowing</status>.</mainText>',
  specialRecipe: 0,
  stats: {},
}
export default item
