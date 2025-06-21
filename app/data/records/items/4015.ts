const item: Item = {
  name: 'Perplexity',
  id: 4015,
  rank: 'Legendary',
  specialRecipe: 0,
  noEffects: false,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.11/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/4015_perplexity.png',
  passives: [
    {
      name: 'Giant Slayer',
      unique: true,
      effects: 'Deal 0% – 15% (based on maximum health difference) increased damage against enemy champions with greater <b>maximum</b> health than you.',
    },
  ],
  stats: {
    abilityPower: 60,
    armorPenetration: 22,
    percentMagicPenetration: 30,
    percentMovespeed: 5,
  },
  shop: {
    prices: {
      total: 2500,
      combined: 2500,
      sell: 1000,
    },
    tags: [
      'MAGE',
    ],
  },
  maps: [
    30,
  ],
}
export default item