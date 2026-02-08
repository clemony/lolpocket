// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 6675,
  name: 'Navori Flickerblade',
  nicknames: [
    'crit shojin'
  ],
  description: '40% Attack Speed\n25% Critical Strike Chance\n4% Move Speed\n\nTranscendence\nAttacks reduce Basic Ability cooldowns by 15% of their remaining cooldown.',
  noEffects: false,
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  buildsFrom: [
    {
      id: 1042,
      name: 'Dagger',
      gold: 250
    },
    {
      id: 3086,
      name: 'Zeal',
      gold: 1200
    },
    {
      id: 1042,
      name: 'Dagger',
      gold: 250
    }
  ],
  gold: {
    base: 950,
    sell: 1855,
    total: 2650
  },
  maps: [
    11,
    12,
    21,
    35
  ],
  passives: [
    {
      name: 'Transcendence',
      effects: 'Basic attacks on-attack reduce the <b>remaining</b> cooldowns of your basic abilities by 15%.',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    attackSpeed: 40,
    criticalStrikeChance: 25,
    percentMovespeed: 4
  }
}
export default item