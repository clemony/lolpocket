// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 2065,
  name: 'Shurelya\'s Battlesong',
  nicknames: [
    'shurelya',
    'reverie'
  ],
  description: '50 Ability Power\n15 Ability Haste\n4% Move Speed\n125% Base Mana Regen\n\nInspiring Speech\nGrant nearby allies 30% Move Speed for 4 seconds.',
  noEffects: false,
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  active: [
    {
      name: 'Inspiring Speech',
      effects: 'Grants you and all allies within 1000 units 30% <b>bonus</b> movement speed for 4 seconds.',
      unique: true
    }
  ],
  buildsFrom: [
    {
      id: 3113,
      name: 'Aether Wisp',
      gold: 900
    },
    {
      id: 4642,
      name: 'Bandleglass Mirror',
      gold: 900
    }
  ],
  gold: {
    base: 400,
    sell: 1540,
    total: 2200
  },
  maps: [
    11,
    12,
    21,
    35
  ],
  stats: {
    abilityHaste: 15,
    abilityPower: 50,
    manaRegen: 125,
    percentMovespeed: 4
  }
}
export default item