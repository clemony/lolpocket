const item: Item = {
  name: 'Sapphire Crystal',
  id: 1027,
  rank: 'Basic',
  buildsInto: [
    {
      id: 3803,
      name: 'Catalyst of Aeons',
      gold: 1300,
    },
    {
      id: 3024,
      name: 'Glacial Buckler',
      gold: 900,
    },
    {
      id: 3802,
      name: 'Lost Chapter',
      gold: 1200,
    },
  ],
  specialRecipe: 0,
  noEffects: true,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/1027_base_t1_saphirecrystal.png',
  simpleDescription: 'Increases Mana',
  nicknames: ['blue'],
  stats: {
    mana: 300,
  },
  shop: {
    prices: {
      total: 300,
      combined: 300,
      sell: 120,
    },
    tags: ['MAGE', 'TANK'],
  },
  maps: [11, 12, 21, 35],
}
export default item
