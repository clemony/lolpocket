// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 443193,
  name: 'Gargoyle Stoneplate',
  active: [
    {
      name: 'Unbreakable',
      effects: 'Gain a <img src="/img/icons/shield.webp" class="tip-icon" />shield for 300 (+100% <b>bonus</b> health) that decays over 5 seconds, and 25% increased size for the same duration.',
      unique: true
    }
  ],
  description: '65 Armor\n65 Magic Resist\n15 Ability Haste\n10% Move Speed\n\nActive - Unbreakable: Gain a Shield that decays and grow in size.',
  gold: {
    base: 1000,
    sell: 400,
    total: 1000
  },
  maps: [
    30
  ],
  noEffects: false,
  rank: 'Special',
  removed: false,
  specialRecipe: 220007,
  stats: {
    abilityHaste: 15,
    armor: 65,
    magicResistance: 65,
    percentMovespeed: 10
  }
}
export default item