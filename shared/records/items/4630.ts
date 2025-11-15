const item: Item = {
  id: 4630,
  name: 'Blighting Jewel',
  nicknames: ['purple'],
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
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/4630_mage_t2_voidcrystal.png',
  maps: [11, 12, 21, 35],
  noEffects: true,
  rank: 'Epic',
  removed: false,
  shop: {
    prices: {
      combined: 700,
      sell: 440,
      total: 1100,
    },
    tags: ['MAGE'],
  },
  specialRecipe: 0,
  stats: {
    abilityPower: 25,
    percentMagicPenetration: 13,
  },
}
export default item
