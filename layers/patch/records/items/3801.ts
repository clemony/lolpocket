// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 3801,
  name: 'Crystalline Bracer',
  buildsFrom: [
    {
      id: 1028,
      name: 'Ruby Crystal',
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
      id: 3083,
      name: 'Warmog\'s Armor',
      gold: 3100
    },
    {
      id: 3084,
      name: 'Heartsteel',
      gold: 3000
    }
  ],
  description: '200 Health\n100% Base Health Regen\n\n',
  gold: {
    base: 100,
    sell: 560,
    total: 800
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
    healthRegen: 100
  }
}
export default item