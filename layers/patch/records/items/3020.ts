// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 3020,
  name: 'Sorcerer\'s Shoes',
  nicknames: [
    'boots',
    'sorcs'
  ],
  buildsFrom: [
    {
      id: 1001,
      name: 'Boots',
      gold: 300
    }
  ],
  buildsInto: [
    {
      id: 3175,
      name: 'Spellslinger\'s Shoes',
      gold: 1100
    }
  ],
  description: '12 Magic Penetration\n45 Move Speed\n\n',
  gold: {
    base: 800,
    sell: 770,
    total: 1100
  },
  maps: [
    11,
    12,
    21,
    35
  ],
  noEffects: true,
  rank: 'Boots',
  removed: false,
  specialRecipe: 0,
  stats: {
    flatMagicPenetration: 12,
    flatMovespeed: 45
  }
}
export default item