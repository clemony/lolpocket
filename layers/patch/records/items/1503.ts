// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 1503,
  name: 'Warden\'s Eye',
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
      name: 'True Sight',
      effects: 'Can see <img src="/img/icons/camouflage.webp" class="tip-icon" />camouflaged and <img src="/img/icons/invisible.webp" class="tip-icon" />invisible units within 1100 units.',
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