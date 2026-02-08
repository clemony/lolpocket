// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 2049,
  name: 'Guardian\'s Amulet',
  description: '15% Heal and Shield Power\n20 Ability Power\n20 Ability Haste\n\nRecovery\nRestores 10 Mana every 5 seconds. If you can\'t gain mana, restores 3 Health instead.',
  noEffects: false,
  rank: 'Starter',
  removed: false,
  specialRecipe: 0,
  gold: {
    base: 500,
    sell: 250,
    total: 500
  },
  maps: [
    30
  ],
  passives: [
    {
      name: 'Recovery',
      effects: 'Restore 10 mana every 5 seconds. Manaless champions restore 3 health instead.',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    abilityHaste: 20,
    abilityPower: 20,
    healAndShieldPower: 15
  }
}
export default item