// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 2031,
  name: 'Refillable Potion',
  nicknames: [
    'consumable',
    'Green Potion'
  ],
  buildsInto: [
    {
      id: 2033,
      name: 'Corrupting Potion',
      gold: 500
    }
  ],
  description: 'Active (2 charges)\nRestores 100 Health over 12 seconds. \nRefills upon visiting the shop.',
  gold: {
    base: 150,
    sell: 60,
    total: 150
  },
  maps: [
    11,
    12,
    21
  ],
  noEffects: false,
  passives: [
    {
      effects: 'Holds charges that refill upon visiting the shop.',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Consumable',
  removed: false,
  specialRecipe: 0,
  stats: {}
}
export default item