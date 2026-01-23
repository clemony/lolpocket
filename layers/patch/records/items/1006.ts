// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 1006,
  name: 'Rejuvenation Bead',
  buildsInto: [
    {
      id: 3801,
      name: 'Crystalline Bracer',
      gold: 800
    },
    {
      id: 3211,
      name: 'Spectre\'s Cowl',
      gold: 1250
    },
    {
      id: 323109,
      name: 'Knight\'s Vow',
      gold: 2900
    },
    {
      id: 3109,
      name: 'Knight\'s Vow',
      gold: 2300
    }
  ],
  description: '100% Base Health Regen\n\n',
  gold: {
    base: 300,
    sell: 120,
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
    healthRegen: 100
  }
}
export default item