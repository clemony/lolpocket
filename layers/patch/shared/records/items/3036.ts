// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 3036,
  name: 'Lord Dominik\'s Regards',
  nicknames: [
    'lw',
    'ldr',
    'doms'
  ],
  description: '35 Attack Damage\n35% Armor Penetration\n25% Critical Strike Chance\n\nGiant Slayer\nDeal up to 15% bonus damage against champions based on their bonus Health. Maximum damage bonus reached at 1500 bonus Health.',
  noEffects: false,
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  buildsFrom: [
    {
      id: 3035,
      name: 'Last Whisper',
      gold: 1450
    },
    {
      id: 6670,
      name: 'Noonquiver',
      gold: 1300
    }
  ],
  gold: {
    base: 550,
    sell: 2310,
    total: 3300
  },
  maps: [
    11,
    12,
    21,
    35
  ],
  passives: [
    {
      name: 'Giant Slayer',
      effects: 'Deal 0% – 15% (based on target\'s bonus health) increased damage against enemy champions.',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    armorPenetration: 35,
    attackDamage: 35,
    criticalStrikeChance: 25
  }
}
export default item