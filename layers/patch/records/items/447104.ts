// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 447104,
  name: 'Innervating Locket',
  description: '70 Ability Power\n20 Ability Haste\n200 Health\n\nFill the Soul\nAny Ability cast within 800 range grants you a charge.\n\nAt 30 charges, gain  Shield,  Ability Power, and  Move Speed for the rest of the round.',
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
      name: 'Fill the Soul',
      effects: 'Gain a charge each time you or champions within 800 units cast an ability, up to 30. At maximum charges, gain 100 – 250 (based on level) ability power and 15% – 25% (based on %) <b>bonus</b> movement speed for the rest of the round, as well as a 400 – 750 (based on level) <img src="/img/icons/shield.webp" class="tip-icon" />shield that lasts until destroyed. Charges are reset every round and between each phase in a round.',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Special',
  removed: false,
  specialRecipe: 220007,
  stats: {
    abilityHaste: 20,
    abilityPower: 70,
    health: 200
  }
}
export default item