// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 3211,
  name: 'Spectre\'s Cowl',
  nicknames: [
    'hat',
    'ghost'
  ],
  buildsFrom: [
    {
      id: 1028,
      name: 'Ruby Crystal',
      gold: 400
    },
    {
      id: 1033,
      name: 'Null-Magic Mantle',
      gold: 400
    },
    {
      id: 1006,
      name: 'Rejuvenation Bead',
      gold: 300
    }
  ],
  buildsInto: [
    {
      id: 2504,
      name: 'Kaenic Rookern',
      gold: 2900
    },
    {
      id: 3065,
      name: 'Spirit Visage',
      gold: 2700
    },
    {
      id: 6664,
      name: 'Hollow Radiance',
      gold: 2800
    }
  ],
  description: '200 Health\n35 Magic Resist\n100% Base Health Regen\n\n',
  gold: {
    base: 150,
    sell: 875,
    total: 1250
  },
  maps: [
    11,
    12,
    21,
    35
  ],
  noEffects: true,
  rank: 'Epic',
  removed: false,
  specialRecipe: 0,
  stats: {
    health: 200,
    healthRegen: 100,
    magicResistance: 35
  }
}
export default item