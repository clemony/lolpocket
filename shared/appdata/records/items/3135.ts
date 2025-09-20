const item: Item = {
  id: 3135,
  name: 'Void Staff',
  buildsFrom: [
    {
      id: 4630,
      name: 'Blighting Jewel',
      gold: 1100,
    },
    {
      id: 1026,
      name: 'Blasting Wand',
      gold: 850,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3135_mage_t3_voidstaff.png',
  maps: [11, 12, 21, 35],
  noEffects: true,
  rank: 'Legendary',
  removed: false,
  shop: {
    prices: {
      combined: 1050,
      sell: 1200,
      total: 3000,
    },
    tags: ['MAGE'],
  },
  simpleDescription: 'Increases magic damage',
  specialRecipe: 0,
  stats: {
    abilityPower: 95,
    percentMagicPenetration: 40,
  },
}
export default item
