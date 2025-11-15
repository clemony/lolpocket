const item: Item = {
  id: 223146,
  name: 'Hextech Gunblade',
  active: [
    {
      name: 'Lightning Bolt',
      effects:
        'Shocks the target enemy champion with a bolt of lightning, dealing 175 – 253 (based on level) magic damage (+30% <b>bonus</b> AD) (+30% AP) magic damage and <img src="/img/icons/slow.webp" class="tip-icon" />slowing them by 40% for 2 seconds.',
      range: 0,
      unique: true,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3146_hextechgunblade.png',
  maps: [30],
  noEffects: false,
  rank: 'Legendary',
  removed: false,
  shop: {
    prices: {
      combined: 2500,
      sell: 1000,
      total: 2500,
    },
    tags: ['MAGE'],
  },
  specialRecipe: 0,
  stats: {
    abilityPower: 90,
    attackDamage: 45,
    omnivamp: 15,
  },
}
export default item
