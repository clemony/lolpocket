const item: Item = {
  id: 447104,
  name: 'Innervating Locket',
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3032_innervating_locket.png',
  maps: [30],
  noEffects: false,
  passives: [
    {
      name: 'Fill the Soul',
      effects:
        'Gain a charge each time you or champions within 800 units cast an ability, up to 30. At maximum charges, gain 100 – 250 (based on level) ability power and 15% – 25% (based on %) <b>bonus</b> movement speed for the rest of the round, as well as a 400 – 750 (based on level) <img src="/img/icons/shield.webp" class="tip-icon" />shield that lasts until destroyed. Charges are reset every round and between each phase in a round.',
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
    abilityPower: 70,
    health: 200,
  },
}
export default item
