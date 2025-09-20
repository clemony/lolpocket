const item: Item = {
  id: 1500,
  name: 'Ohmwrecker (Turret Item)',
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3056_ohmwrecker.png',
  maps: [11, 12, 21, 30, 35],
  noEffects: false,
  passives: [
    {
      name: 'Dodge Piercing',
      effects: 'Turret attacks cannot be dodged.',
      unique: true,
    },
    {
      name: 'Warming Up',
      effects:
        'Turrets gain a stack for 5 seconds each time they strike a champion. Each stack increases their damage dealt by 50%, up to 150%.',
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
  stats: {
    armorPenetration: 30,
  },
}
export default item
