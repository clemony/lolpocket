const item: Item = {
  name: 'Faerie Charm',
  id: 1004,
  rank: 'Basic',
  buildsInto: [
    {
      id: 3114,
      name: 'Forbidden Idol',
      gold: 600,
    },
    {
      id: 4642,
      name: 'Bandleglass Mirror',
      gold: 900,
    },
    {
      id: 3012,
      name: 'Chalice of Blessing',
      gold: 900,
    },
  ],
  specialRecipe: 0,
  noEffects: true,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.11/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/1004_class_t1_faeriecharm.png',
  simpleDescription: 'Slightly increases Mana Regen',
  stats: {
    manaRegen: 50,
  },
  shop: {
    prices: {
      total: 200,
      combined: 200,
      sell: 80,
    },
    tags: [
      'MAGE',
      'SUPPORT',
    ],
  },
  maps: [
    11,
    12,
    21,
    35,
  ],
}
export default item