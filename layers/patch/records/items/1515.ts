// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 1515,
  name: 'Turret Plating',
  gold: {
    base: 0,
    purchasable: false,
    sell: 0,
    total: 0
  },
  maps: [
    11,
    12,
    21,
    30,
    35
  ],
  noEffects: false,
  passives: [
    {
      effects: 'Provides extra defensive measures. Attackers are rewarded for destroying portions of the plating.',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Special',
  removed: false,
  specialRecipe: 0,
  stats: {}
}
export default item