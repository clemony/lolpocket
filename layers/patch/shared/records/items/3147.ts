// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 3147,
  name: 'Haunting Guise',
  nicknames: [
    'mask'
  ],
  description: '30 Ability Power\n200 Health\n\nMadness\nFor each second in combat with enemy champions, deal 2% bonus damage, up to 6%. ',
  noEffects: false,
  rank: 'Epic',
  removed: false,
  specialRecipe: 0,
  buildsFrom: [
    {
      id: 1052,
      name: 'Amplifying Tome',
      gold: 400
    },
    {
      id: 1028,
      name: 'Ruby Crystal',
      gold: 400
    }
  ],
  buildsInto: [
    {
      id: 6653,
      name: 'Liandry\'s Torment',
      gold: 3000
    },
    {
      id: 4633,
      name: 'Riftmaker',
      gold: 3100
    },
    {
      id: 8010,
      name: 'Bloodletter\'s Curse',
      gold: 2900
    }
  ],
  gold: {
    base: 500,
    sell: 910,
    total: 1300
  },
  maps: [
    11,
    12,
    21,
    35
  ],
  passives: [
    {
      name: 'Madness',
      effects: 'For each second in combat with enemy champions, deal 2% increased damage, stacking up to 3 times for a total of 6%.',
      mythic: false,
      unique: false
    }
  ],
  stats: {
    abilityPower: 30,
    health: 200
  }
}
export default item