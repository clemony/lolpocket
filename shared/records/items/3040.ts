const item: Item = {
  id: 3040,
  name: 'Seraph\'s Embrace',
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3048_mage_t3_seraphsembrace.png',
  maps: [11, 12, 21, 35],
  noEffects: false,
  passives: [
    {
      name: 'Awe',
      effects: 'Grants ability power equal to 2% <b>bonus</b> mana.',
      unique: true,
    },
    {
      name: 'Lifeline',
      cooldown: '90',
      effects:
        'If you would take damage that would reduce you below 30% of your <b>maximum</b> health, you first gain a <img src="/img/icons/shield.webp" class="tip-icon" />shield for 3 seconds that absorbs damage equal to 18% <b>maximum</b> mana for 3 seconds.',
      unique: true,
    },
  ],
  rank: 'Legendary',
  removed: false,
  shop: {
    prices: {
      combined: 2900,
      sell: 1160,
      total: 2900,
    },
    purchasable: false,
  },
  specialRecipe: 3003,
  stats: {
    abilityHaste: 25,
    abilityPower: 70,
    mana: 1000,
  },
}
export default item
