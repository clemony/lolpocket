// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 3084,
  name: 'Heartsteel',
  nicknames: [
    'Quest',
    'Steal',
    'Boy Band',
    'BoyBand'
  ],
  buildsFrom: [
    {
      id: 1011,
      name: 'Giant\'s Belt',
      gold: 900
    },
    {
      id: 3801,
      name: 'Crystalline Bracer',
      gold: 800
    },
    {
      id: 1011,
      name: 'Giant\'s Belt',
      gold: 900
    }
  ],
  description: '900 Health\n100% Base Health Regen\n\nColossal Consumption (0s) per target\nIf an enemy champion is nearby for a few seconds, your next Attack against them deals 70 plus 6% of your max Health as bonus physical damage and grants 8% of the damage as max Health.\n\nGoliath\nFor each 1000 max Health, gain 3% increased size, up to 30%. ',
  gold: {
    base: 400,
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
      name: 'Colossal Consumption',
      effects: 'While within 700 units of an enemy champion, generate a stack on them each second, stacking up to 3 times. Your next basic attack against a target with 3 stacks is empowered to consume them all to deal 70 physical damage (+6% <b>maximum</b> health) <b>bonus</b> physical damage on-hit and grant you permanent <b>bonus</b> health equal to 8% of that amount (30 second cooldown per target).',
      mythic: false,
      unique: true
    },
    {
      name: 'Goliath',
      effects: 'Gain 0% – 30% (based on maximum health) hp increased size.',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  stats: {
    health: 900,
    healthRegen: 100
  }
}
export default item