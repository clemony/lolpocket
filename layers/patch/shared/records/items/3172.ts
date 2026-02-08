// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 3172,
  name: 'Gunmetal Greaves',
  description: '40% Attack Speed\n45 Move Speed\n5% Life Steal\n\nNoxian Gait\nAttacks against Champions grant Move Speed On-Hit decaying over 2 seconds.',
  noEffects: false,
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  buildsFrom: [
    {
      id: 3006,
      name: 'Berserker\'s Greaves',
      gold: 1100
    }
  ],
  gold: {
    base: 0,
    sell: 770,
    total: 1100
  },
  maps: [
    11,
    21,
    35
  ],
  passives: [
    {
      name: 'Like the Wind',
      effects: 'Basic attacks on-hit grant a stack of <i>Like The Wind</i> for 6 seconds, refreshing on subsequent attacks. For each stack, gain 5% <b>bonus</b> movement speed ms, stacking up to 5 times for a total of 25% ms.',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    abilityHaste: 30,
    attackSpeed: 50,
    percentMovespeed: 10,
    tenacity: 20
  }
}
export default item