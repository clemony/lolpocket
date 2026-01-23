// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 1004,
  name: 'Faerie Charm',
  buildsInto: [
    {
      id: 3114,
      name: 'Forbidden Idol',
      gold: 600
    },
    {
      id: 3012,
      name: 'Chalice of Blessing',
      gold: 900
    },
    {
      id: 4642,
      name: 'Bandleglass Mirror',
      gold: 900
    }
  ],
  description: '50% Base Mana Regen\n\n',
  gold: {
    base: 200,
    sell: 140,
    total: 200
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
    manaRegen: 50
  }
}
export default item