// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 3094,
  name: 'Rapid Firecannon',
  nicknames: [
    'canon',
    'gun',
    'rapidfire',
    'rfc'
  ],
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
  description: '35% Attack Speed\n25% Critical Strike Chance\n4% Move Speed\n\nSharpshooter\nYour Energized Attack deals 40 bonus magic damage and gains 35% bonus Attack Range.',
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
  noEffects: false,
  passives: [
    {
      name: 'Energized',
      effects: 'Moving and basic attacking generates <i>Energize</i> stacks, up to 100.',
      mythic: false,
      unique: true
    },
    {
      name: 'Sharpshooter',
      effects: 'When fully <img src="/img/icons/energized.webp" class="tip-icon" />Energized, your next basic attack deals 40 <b>bonus</b> magic damage on-hit. <i>Energized</i> attacks gain 35% <b>bonus</b> range, capped at 150.',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  stats: {
    attackSpeed: 35,
    criticalStrikeChance: 25,
    percentMovespeed: 4
  }
}
export default item