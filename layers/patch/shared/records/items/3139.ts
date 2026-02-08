// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 3139,
  name: 'Mercurial Scimitar',
  nicknames: [
    'merc scim',
    'qss',
    'quicksilver sash',
    'silvermere dawn'
  ],
  description: '50 Attack Damage\n35 Magic Resist\n10% Life Steal\n\nACTIVE\nQuicksilver\nRemoves all crowd control debuffs (excluding Airborne) and grants Move Speed.',
  noEffects: false,
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  active: [
    {
      name: 'Quicksilver',
      effects: 'Removes all crowd control debuffs (except <img src="/img/icons/airborne.webp" class="tip-icon " />Airborne) from your champion and grants 50% <b>bonus total</b> movement speed and <img src="/img/icons/ghosted.webp" class="tip-icon " />ghosting for 2 seconds.',
      unique: true
    }
  ],
  buildsFrom: [
    {
      id: 3140,
      name: 'Quicksilver Sash',
      gold: 1300
    },
    {
      id: 1037,
      name: 'Pickaxe',
      gold: 875
    },
    {
      id: 1053,
      name: 'Vampiric Scepter',
      gold: 900
    }
  ],
  gold: {
    base: 125,
    sell: 2240,
    total: 3200
  },
  maps: [
    11,
    12,
    21,
    35
  ],
  stats: {
    attackDamage: 50,
    lifesteal: 10,
    magicResistance: 35
  }
}
export default item