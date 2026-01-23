// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 447120,
  name: 'Diamond-Tipped Spear',
  description: '75 Adaptive Force\n30% Attack Speed\n\nReach Weapon\nIncrease your attack range by 75.\n\nSweet Spot\nDeal up to 30% increased damage with Attacks and 40% with Abilities based on how far your target is from you. Damage caps at 1000 units. ',
  gold: {
    base: 1000,
    sell: 400,
    total: 1000
  },
  maps: [
    30
  ],
  noEffects: false,
  passives: [
    {
      name: 'Reach Weapon',
      effects: 'Gain <img src="/img/icons/range.webp" class="tip-icon" />range.',
      mythic: false,
      unique: true
    },
    {
      name: 'Sweet Spot',
      effects: 'Basic attacks deal 0% – 30% (based on distance) increased damage and abilities deal 0% – 40% (based on distance) increased damage. The distance is calculated from your current position to the target\'s position when the triggering attack or ability hits them.',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Special',
  removed: false,
  specialRecipe: 220007,
  stats: {
    attackSpeed: 30
  }
}
export default item