// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 3094,
  name: 'Rapid Firecannon',
  nicknames: [
    'canon',
    'gun',
    'rapidfire',
    'rfc'
  ],
  description: '35% Attack Speed\n25% Critical Strike Chance\n4% Move Speed\n\nSharpshooter\nYour Energized Attack deals 40 bonus magic damage and gains 35% bonus Attack Range.',
  noEffects: false,
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  buildsFrom: [
    {
      id: 3086,
      name: 'Zeal',
      gold: 1200
    },
    {
      id: 3144,
      name: 'Scout\'s Slingshot',
      gold: 600
    }
  ],
  gold: {
    base: 850,
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
      name: 'Energized',
      effects: 'Moving and basic attacking generates <i>Energize</i> stacks, up to 100.',
      mythic: false,
      unique: true
    },
    {
      name: 'Sharpshooter',
      effects: 'When fully <img src="/img/icons/energized.webp" class="tip-icon " />Energized, your next basic attack deals 40 <b>bonus</b> magic damage on-hit. <i>Energized</i> attacks gain 35% <b>bonus</b> range, capped at 150.',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    attackSpeed: 35,
    criticalStrikeChance: 25,
    percentMovespeed: 4
  }
}
export default item