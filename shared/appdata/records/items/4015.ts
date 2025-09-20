const item: Item = {
  id: 4015,
  name: 'Perplexity',
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/4015_perplexity.png',
  maps: [30],
  noEffects: false,
  passives: [
    {
      name: 'Giant Slayer',
      effects:
        'Deal 0% – 15% (based on maximum health difference) increased damage against enemy champions with greater <b>maximum</b> health than you.',
      unique: true,
    },
  ],
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
    abilityPower: 60,
    armorPenetration: 22,
    percentMagicPenetration: 30,
    percentMovespeed: 5,
  },
}
export default item
