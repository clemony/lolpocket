// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 1507,
  name: 'Overcharged',
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
      effects: 'At 55 minutes, this turret begins to malfunction, losing armor and magic resist. After 5 minutes, it will start breaking down, losing an increasing percentage of its <img src="/img/icons/health.webp" class="tip-icon" />health every 30 seconds.',
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