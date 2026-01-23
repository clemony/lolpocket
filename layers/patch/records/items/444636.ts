// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 444636,
  name: 'Night Harvester',
  nicknames: [
    'dark',
    'scythe'
  ],
  description: '90 Ability Power\n300 Health\n25 Ability Haste\n\nSoulrend (0s) per champion\nDamaging a champion with Attacks or Abilities deals an additional  magic damage and grants you 40% Move Speed for 1.5 seconds.\n\nDamaging a new champion will extend the duration of the Move Speed bonus.',
  gold: {
    base: 1000,
    sell: 400,
    total: 1000
  },
  maps: [
    30
  ],
  noEffects: false,
  passives: [
    {
      name: 'Soulrend',
      effects: 'Damaging an enemy champion with a basic attack or ability damage deals 125 (+15% AP) <b>bonus</b> magic damage and grants you 40% <b>bonus</b> movement speed for 1.5 seconds, with the duration extending on subsequent triggers (10 second cooldown per champion).',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Special',
  removed: false,
  specialRecipe: 220007,
  stats: {
    abilityHaste: 25,
    abilityPower: 90,
    health: 300
  }
}
export default item