// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 3190,
  name: 'Locket of the Iron Solari',
  active: [
    {
      name: 'Devotion',
      effects: 'Grants you and allied champions within 850 units a <img src="/img/icons/shield.webp" class="tip-icon" />shield for 200 – 360 (based on target\'s level) that decays over 2.5 seconds.',
      unique: true
    }
  ],
  buildsFrom: [
    {
      id: 3067,
      name: 'Kindlegem',
      gold: 800
    },
    {
      id: 1029,
      name: 'Cloth Armor',
      gold: 300
    },
    {
      id: 1033,
      name: 'Null-Magic Mantle',
      gold: 400
    }
  ],
  description: '200 Health\n25 Armor\n25 Magic Resist\n10 Ability Haste\n\nDevotion\nGrant nearby allies a 200 - 360 Shield that decays over 2.5 seconds.',
  gold: {
    base: 700,
    sell: 1540,
    total: 2200
  },
  maps: [
    11,
    12,
    21,
    35
  ],
  noEffects: false,
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  stats: {
    abilityHaste: 10,
    armor: 25,
    health: 200,
    magicResistance: 25
  }
}
export default item