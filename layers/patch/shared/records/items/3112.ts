// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 3112,
  name: 'Guardian\'s Orb',
  description: '50 Ability Power\n150 Health\n\n\nRecovery: Restores 10 Mana every 5 seconds. If you can\'t gain mana, restores 15 Health instead.\n',
  noEffects: false,
  rank: 'Starter',
  removed: false,
  specialRecipe: 0,
  gold: {
    base: 950,
    sell: 665,
    total: 950
  },
  maps: [
    11,
    12,
    35
  ],
  passives: [
    {
      name: 'Recovery',
      effects: 'Gain 10 <b>bonus</b> mana regeneration. Manaless champions gain 15 <b>bonus</b> health regeneration instead.',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    abilityPower: 50,
    health: 150
  }
}
export default item