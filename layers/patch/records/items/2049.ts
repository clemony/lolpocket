// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 2049,
  name: 'Guardian\'s Amulet',
  description: '15% Heal and Shield Power\n20 Ability Power\n20 Ability Haste\n\nRecovery\nRestores 10 Mana every 5 seconds. If you can\'t gain mana, restores 3 Health instead.',
  gold: {
    base: 500,
    sell: 250,
    total: 500
  },
  maps: [
    30
  ],
  noEffects: false,
  passives: [
    {
      name: 'Recovery',
      effects: 'Restore 10 mana every 5 seconds. Manaless champions restore 3 health instead.',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Starter',
  removed: false,
  specialRecipe: 0,
  stats: {
    abilityHaste: 20,
    abilityPower: 20,
    healAndShieldPower: 15
  }
}
export default item