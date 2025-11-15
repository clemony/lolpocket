const item: Item = {
  id: 1027,
  name: 'Sapphire Crystal',
  nicknames: ['blue'],
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
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/1027_base_t1_saphirecrystal.png',
  maps: [11, 12, 21, 35],
  noEffects: true,
  rank: 'Basic',
  removed: false,
  shop: {
    prices: {
      combined: 300,
      sell: 120,
      total: 300,
    },
    tags: ['MAGE', 'TANK'],
  },
  simpleDescription: 'Increases Mana',
  specialRecipe: 0,
  stats: {
    mana: 300,
  },
}
export default item
