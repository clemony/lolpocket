// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 3085,
  name: 'Runaan\'s Hurricane',
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
  description: '40% Attack Speed\n25% Critical Strike Chance\n4% Move Speed\n\nWind\'s Fury\nAttacks fire bolts at 2 additional enemies near the target.\nEach bolt deals physical damage and applies On-Hit effects.',
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
      name: 'Wind\'s Fury',
      effects: 'Basic attacks on-attack fire additional bolts at up to 2 enemies in front of you, each dealing 55% AD physical damage. Bolts apply <img src="/img/icons/on-hit.webp" class="tip-icon" />on-hit effects and are affected by <img src="/img/icons/critical-strike.webp" class="tip-icon" />critical strike modifiers.',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  stats: {
    attackSpeed: 40,
    criticalStrikeChance: 25,
    percentMovespeed: 4
  }
}
export default item