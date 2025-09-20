const item: Item = {
  id: 443062,
  name: 'Sanguine Gift',
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3062_sanguinegift.png',
  maps: [30],
  noEffects: false,
  passives: [
    {
      name: 'Patronage',
      effects:
        'Store 15% of post-mitigation damage dealt. Whenever the stored amount exceeds a value of 333, consume it to <img src="/img/icons/heal.webp" class="tip-icon" />heal yourself and the nearest allied champion for that same amount. Stored damage is reset every round and between each phase in a round.',
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
    tags: ['MAGE'],
  },
  specialRecipe: 220007,
  stats: {
    abilityHaste: 20,
    abilityPower: 80,
    healAndShieldPower: 15,
  },
}
export default item
