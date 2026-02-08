// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 3035,
  name: 'Last Whisper',
  nicknames: [
    'lw'
  ],
  description: '20 Attack Damage\n18% Armor Penetration\n\n',
  noEffects: true,
  rank: 'Epic',
  removed: false,
  specialRecipe: 0,
  buildsFrom: [
    {
      id: 1036,
      name: 'Long Sword',
      gold: 350
    },
    {
      id: 1036,
      name: 'Long Sword',
      gold: 350
    }
  ],
  buildsInto: [
    {
      id: 6694,
      name: 'Serylda\'s Grudge',
      gold: 3000
    },
    {
      id: 3033,
      name: 'Mortal Reminder',
      gold: 3000
    },
    {
      id: 3036,
      name: 'Lord Dominik\'s Regards',
      gold: 3300
    }
  ],
  gold: {
    base: 750,
    sell: 1015,
    total: 1450
  },
  maps: [
    11,
    12,
    21,
    35
  ],
  stats: {
    armorPenetration: 18,
    attackDamage: 20
  }
}
export default item