const item: Item = {
  name: 'Blighting Jewel',
  id: 4630,
  rank: 'Epic',
  buildsFrom: [
    {
      id: 1052,
      name: 'Amplifying Tome',
      gold: 400,
    },
  ],
  buildsInto: [
    {
      id: 3137,
      name: 'Cryptbloom',
      gold: 3000,
    },
    {
      id: 3135,
      name: 'Void Staff',
      gold: 3000,
    },
  ],
  specialRecipe: 0,
  noEffects: true,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/4630_mage_t2_voidcrystal.png',
  nicknames: ['purple'],
  stats: {
    abilityPower: 25,
    percentMagicPenetration: 13,
  },
  shop: {
    prices: {
      total: 1100,
      combined: 700,
      sell: 440,
    },
    tags: ['MAGE'],
  },
  maps: [11, 12, 21, 35],
}
export default item
