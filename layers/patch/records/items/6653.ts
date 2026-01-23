// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 6653,
  name: 'Liandry\'s Torment',
  nicknames: [
    'last shadow',
    'ls',
    'burn'
  ],
  buildsFrom: [
    {
      id: 3147,
      name: 'Haunting Guise',
      gold: 1300
    },
    {
      id: 2508,
      name: 'Fated Ashes',
      gold: 900
    }
  ],
  description: '60 Ability Power\n300 Health\n\nTorment\nDamaging Abilities burn enemies for 2% max Health magic damage per second for 3 seconds.\n\nSuffering\nFor each second in combat with enemy champions, deal 2% bonus damage, up to 6%.',
  gold: {
    base: 800,
    sell: 2100,
    total: 3000
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
      name: 'Torment',
      effects: 'Dealing ability damage burns enemies, causing them to take 1% of the target\'s <b>maximum</b> health magic damage every 0.5 seconds over 3 seconds, capped at 20 per tick against monsters.',
      mythic: false,
      unique: true
    },
    {
      name: 'Suffering',
      effects: 'For each second in combat with enemy champions, deal 2% increased damage, stacking up to 3 times for a total of 6%.',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  stats: {
    abilityPower: 60,
    health: 300
  }
}
export default item