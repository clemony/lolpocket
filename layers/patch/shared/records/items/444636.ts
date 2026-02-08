// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 444636,
  name: 'Night Harvester',
  nicknames: [
    'dark',
    'scythe'
  ],
  description: '90 Ability Power\n300 Health\n25 Ability Haste\n\nSoulrend (0s) per champion\nDamaging a champion with Attacks or Abilities deals an additional  magic damage and grants you 40% Move Speed for 1.5 seconds.\n\nDamaging a new champion will extend the duration of the Move Speed bonus.',
  noEffects: false,
  rank: 'Special',
  removed: false,
  specialRecipe: 220007,
  gold: {
    base: 1000,
    sell: 400,
    total: 1000
  },
  maps: [
    30
  ],
  passives: [
    {
      name: 'Soulrend',
      effects: 'Damaging an enemy champion with a basic attack or ability damage deals 125 (+15% AP) <b>bonus</b> magic damage and grants you 40% <b>bonus</b> movement speed for 1.5 seconds, with the duration extending on subsequent triggers (10 second cooldown per champion).',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    abilityHaste: 25,
    abilityPower: 90,
    health: 300
  }
}
export default item