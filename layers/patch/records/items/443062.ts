// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 443062,
  name: 'Sanguine Gift',
  description: '80 Ability Power\n20 Ability Haste\n15% Heal and Shield Power\n\nPatronage\nStore 15% of the total damage you\'ve dealt to enemies. Whenever this exceeds 333, consume it to heal yourself and your nearest ally for that amount.',
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
      name: 'Patronage',
      effects: 'Store 15% of post-mitigation damage dealt. Whenever the stored amount exceeds a value of 333, consume it to <img src="/img/icons/heal.webp" class="tip-icon" />heal yourself and the nearest allied champion for that same amount. Stored damage is reset every round and between each phase in a round.',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Special',
  removed: false,
  specialRecipe: 220007,
  stats: {
    abilityHaste: 20,
    abilityPower: 80,
    healAndShieldPower: 15
  }
}
export default item