// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 3115,
  name: 'Nashor\'s Tooth',
  nicknames: [
    'nashors'
  ],
  description: '80 Ability Power\n50% Attack Speed\n15 Ability Haste\n\nIcathian Bite\nAttacks deal bonus magic damage On-Hit.',
  noEffects: false,
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  buildsFrom: [
    {
      id: 1043,
      name: 'Recurve Bow',
      gold: 700
    },
    {
      id: 1026,
      name: 'Blasting Wand',
      gold: 850
    },
    {
      id: 3108,
      name: 'Fiendish Codex',
      gold: 850
    }
  ],
  gold: {
    base: 500,
    sell: 2030,
    total: 2900
  },
  maps: [
    11,
    12,
    21,
    35
  ],
  passives: [
    {
      name: 'Icathian Bite',
      effects: 'Basic attacks deal 15 (+15% AP) <b>bonus</b> magic damage on-hit.',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    abilityHaste: 15,
    abilityPower: 80,
    attackSpeed: 50
  }
}
export default item