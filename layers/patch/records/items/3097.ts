// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 3097,
  name: 'Stormrazor',
  nicknames: [
    'energize',
    'Windblade'
  ],
  buildsFrom: [
    {
      id: 1038,
      name: 'B. F. Sword',
      gold: 1300
    },
    {
      id: 1018,
      name: 'Cloak of Agility',
      gold: 600
    },
    {
      id: 3144,
      name: 'Scout\'s Slingshot',
      gold: 600
    }
  ],
  description: '50 Attack Damage\n20% Attack Speed\n25% Critical Strike Chance\n\nEnergized\nMoving and Attacking generates an Energized Attack.\n\nBolt\nYour Energized Attack applies  bonus magic damage and grants 45% Move Speed for 1.5s.\n',
  gold: {
    base: 700,
    sell: 2240,
    total: 3200
  },
  maps: [
    11,
    12,
    21
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
      name: 'Bolt',
      effects: 'When fully <img src="/img/icons/energized.webp" class="tip-icon" />Energized, your next basic attack deals 100 <b>bonus</b> magic damage on-hit and grants you 45% <b>bonus</b> movement speed for 1.5 seconds.',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  stats: {
    attackDamage: 50,
    attackSpeed: 20,
    criticalStrikeChance: 25
  }
}
export default item