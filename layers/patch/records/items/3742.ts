// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 3742,
  name: 'Dead Man\'s Plate',
  nicknames: [
    'dmp',
    'dreadnought',
    'gangplank',
    'juggernaut'
  ],
  buildsFrom: [
    {
      id: 3066,
      name: 'Winged Moonplate',
      gold: 800
    },
    {
      id: 1028,
      name: 'Ruby Crystal',
      gold: 400
    },
    {
      id: 1031,
      name: 'Chain Vest',
      gold: 800
    }
  ],
  description: '350 Health\n55 Armor\n4% Move Speed\n\nShipwrecker\nWhile moving, build up to 20 bonus Move Speed. Your next Attack discharges built up Move Speed to deal bonus physical damage.\n\nUnsinkable\nReduce the effectiveness of Slows by 15%.',
  gold: {
    base: 900,
    sell: 2030,
    total: 2900
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
      name: 'Shipwrecker',
      effects: 'While moving, generates 7 stacks of <i>Momentum</i> every 0.25 seconds, granting up to 20 <b>bonus</b> movement speed at 100 stacks after 3.75 seconds of moving. Basic attacks consume all stacks to deal 0 – 40 (based on Momentum) physical damage (+0% – 100% (based on Momentum) <b>base</b> AD) <b>bonus</b> physical damage on-hit.',
      mythic: false,
      unique: true
    },
    {
      name: 'Unsinkable',
      effects: 'Gain 15% <img src="/img/icons/slow-resist.webp" class="tip-icon" />slow resist.',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  stats: {
    armor: 55,
    health: 350,
    percentMovespeed: 4
  }
}
export default item