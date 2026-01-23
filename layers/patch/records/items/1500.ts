// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 1500,
  name: 'Penetrating Bullets',
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
      name: 'Dodge Piercing',
      effects: 'Turret attacks cannot be dodged.',
      mythic: false,
      unique: true
    },
    {
      name: 'Warming Up',
      effects: 'Turrets gain a stack for 5 seconds each time they strike a champion. Each stack increases their damage dealt by 50%, up to 150%.',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Special',
  removed: false,
  specialRecipe: 0,
  stats: {
    armorPenetration: 30
  }
}
export default item