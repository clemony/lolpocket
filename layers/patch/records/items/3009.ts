// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 3009,
  name: 'Boots of Swiftness',
  nicknames: [
    'swifties'
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
      id: 3170,
      name: 'Swiftmarch',
      gold: 1000
    }
  ],
  description: '55 Move Speed\n\nFleetfooted\nReduce the effectiveness of Slows by 25%.',
  gold: {
    base: 700,
    sell: 700,
    total: 1000
  },
  maps: [
    11,
    12,
    21,
    35
  ],
  noEffects: false,
  passives: [
    {
      name: 'Fleetfooted',
      effects: 'Gain 25% slow resist.',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Boots',
  removed: false,
  specialRecipe: 0,
  stats: {
    flatMovespeed: 55
  }
}
export default item