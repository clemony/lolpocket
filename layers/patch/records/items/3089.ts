// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 3089,
  name: 'Rabadon\'s Deathcap',
  nicknames: [
    'banksys',
    'dc',
    'dcap',
    'hat',
    'witchcap',
    'wooglets'
  ],
  buildsFrom: [
    {
      id: 1058,
      name: 'Needlessly Large Rod',
      gold: 1200
    },
    {
      id: 1058,
      name: 'Needlessly Large Rod',
      gold: 1200
    }
  ],
  description: '130 Ability Power\n\nMagical Opus\nIncreases your total Ability Power by 30%.',
  gold: {
    base: 1100,
    sell: 2450,
    total: 3500
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
      name: 'Magical Opus',
      effects: 'Increase your ability power by 30%.',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  stats: {
    abilityPower: 130
  }
}
export default item