// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 3135,
  name: 'Void Staff',
  buildsFrom: [
    {
      id: 4630,
      name: 'Blighting Jewel',
      gold: 1100
    },
    {
      id: 1026,
      name: 'Blasting Wand',
      gold: 850
    }
  ],
  description: '95 Ability Power\n40% Magic Penetration\n\n',
  gold: {
    base: 1050,
    sell: 2100,
    total: 3000
  },
  maps: [
    11,
    12,
    21,
    35
  ],
  noEffects: true,
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  stats: {
    abilityPower: 95,
    percentMagicPenetration: 40
  }
}
export default item