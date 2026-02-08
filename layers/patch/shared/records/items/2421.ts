// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 2421,
  name: 'Shattered Armguard',
  description: '40 Ability Power\n25 Armor\n\nShattered Time\nArmguard is broken, but can still be upgraded.\n\nAfter breaking one Armguard, the shopkeeper will only sell you Shattered Armguard.\n\n',
  noEffects: true,
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
      id: 1029,
      name: 'Cloth Armor',
      gold: 300
    },
    {
      id: 1052,
      name: 'Amplifying Tome',
      gold: 400
    }
  ],
  buildsInto: [
    {
      id: 3157,
      name: 'Zhonya\'s Hourglass',
      gold: 3250
    }
  ],
  gold: {
    base: 500,
    sell: 640,
    total: 1600
  },
  maps: [
    11,
    12,
    21,
    35
  ],
  stats: {
    abilityPower: 40,
    armor: 25
  }
}
export default item