const item: Item = {
  name: 'Ohmwrecker (Turret Item)',
  id: 1500,
  rank: 'Special',
  specialRecipe: 0,
  noEffects: false,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3056_ohmwrecker.png',
  passives: [
    {
      name: 'Dodge Piercing',
      unique: true,
      effects: 'Turret attacks cannot be dodged.',
    },
    {
      name: 'Warming Up',
      unique: true,
      effects:
        'Turrets gain a stack for 5 seconds each time they strike a champion. Each stack increases their damage dealt by 50%, up to 150%.',
    },
  ],
  stats: {
    armorPenetration: 30,
  },
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
