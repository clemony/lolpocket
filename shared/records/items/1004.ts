const item: Item = {
  id: 1004,
  name: 'Faerie Charm',
  buildsInto: [
    {
      id: 3114,
      name: 'Forbidden Idol',
      gold: 600,
    },
    {
      id: 3012,
      name: 'Chalice of Blessing',
      gold: 900,
    },
    {
      id: 4642,
      name: 'Bandleglass Mirror',
      gold: 900,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/1004_class_t1_faeriecharm.png',
  maps: [11, 12, 21, 35],
  noEffects: true,
  rank: 'Basic',
  removed: false,
  shop: {
    prices: {
      combined: 200,
      sell: 80,
      total: 200,
    },
    tags: ['MAGE', 'SUPPORT'],
  },
  simpleDescription: 'Slightly increases Mana Regen',
  specialRecipe: 0,
  stats: {
    manaRegen: 50,
  },
}
export default item
