// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 2051,
  name: 'Guardian\'s Horn',
  nicknames: [
    'Golden Arm of Kobe',
    'Golden Bicep of Kobe',
    'Horn',
    'Horn of the ManWolf',
    'ManWolf'
  ],
  description: '150 Health\n\n\nRecovery: Restores 20 Health every 5 seconds.Undaunted: Blocks 15 damage from attacks and spells from champions (25% effectiveness vs. damage over time abilities).\n',
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
      name: 'Undaunted',
      effects: 'Reduces all sources of incoming champion damage by 15, modified to 3.75 against damage over time abilities.',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    health: 150,
    healthRegen: 20
  }
}
export default item