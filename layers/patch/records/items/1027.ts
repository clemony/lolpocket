// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 1027,
  name: 'Sapphire Crystal',
  nicknames: [
    'blue'
  ],
  buildsInto: [
    {
      id: 3803,
      name: 'Catalyst of Aeons',
      gold: 1300
    },
    {
      id: 3024,
      name: 'Glacial Buckler',
      gold: 900
    },
    {
      id: 3802,
      name: 'Lost Chapter',
      gold: 1200
    }
  ],
  description: '300 Mana\n\n',
  gold: {
    base: 300,
    sell: 210,
    total: 300
  },
  maps: [
    11,
    12,
    21,
    35
  ],
  noEffects: true,
  rank: 'Basic',
  removed: false,
  specialRecipe: 0,
  stats: {
    mana: 300
  }
}
export default item