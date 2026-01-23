// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 1511,
  name: 'Super Mech Armor',
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
      name: 'Super Mech Armor',
      effects: '<img src="/img/icons/turret.webp" class="tip-icon" />Turret basic attacks are modified to deal 7% of this minion\'s <b>maximum</b> health as pre-mitigation damage.',
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