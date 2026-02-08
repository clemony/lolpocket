// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

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
  description: '130 Ability Power\n\nMagical Opus\nIncreases your total Ability Power by 30%.',
  noEffects: false,
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
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
  passives: [
    {
      name: 'Magical Opus',
      effects: 'Increase your ability power by 30%.',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    abilityPower: 130
  }
}
export default item